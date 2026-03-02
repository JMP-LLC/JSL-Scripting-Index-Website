# Degradation



## Elementmeldungen

### Censor Code

**Syntax:** obj = Degradation(...Censor Code( value=1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Identifiziert den Wert in der Zensorspalte, der rechts zensierte Beobachtungen angibt. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );obj = dt << Degradation(	Y( :Strength ),	Time( :Weeks ),	X( :Degrees ),	Censor( :Censor ),	Censor Code( "Right" ),	Application( "Destructive Degradation" ));

```

### Connect Data Markers

**Syntax:** obj &lt;&lt; Connect Data Markers( state=0|1 )

**Beschreibung:** Zeigt Linien an oder blendet sie aus, die die Punkte im Überlagerungsdiagramm verbinden. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Connect Data Markers( 0 ));Wait( 1 );obj << Connect Data Markers( 1 );

```

### Curve Interval Alpha

**Syntax:** obj &lt;&lt; Curve Interval Alpha( fraction )

**Beschreibung:** Gibt das Alpha-Niveau an, das für die Konfidenzintervallkurven im Überlagerungsdiagramm verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Show Curve Interval( "Prediction Interval" );Wait( 1 );obj << Curve Interval Alpha( .01 );

```

### Generate Pseudo Failure Data

**Syntax:** Generate Pseudo Failure Data(interval_censor, &lt;alpha&gt;)

**Beschreibung:** Speichert die vorhergesagte Zeit, zu der jede Einheit die Spezifikationsgrenze überschreitet, in einer neuen Datentabelle. Die neue Datentabelle enthält ein Skript „Life Distribution“ oder „Fit Life by X“, mit dem eine Verteilung an die Pseudo-Ausfallzeiten angepasst werden kann.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Lower Spec Limit( 0 );obj << Set Upper Spec Limit( 6 );obj << Set Censoring Time( 6 );dt1 = obj << Generate Pseudo Failure Data( 1, .05 );

```

### Generate Report for Current Model

**Syntax:** obj &lt;&lt; Generate Report for Current Model

**Beschreibung:** Erstellt einen Bericht für die aktuellen Modelleinstellungen. Dieser umfasst eine Modellzusammenfassung und einen Bericht „Schätzer“ mit den Parameterschätzern.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));Wait( 1 );obj << Generate Report for Current Model;

```

### Get Inverse Prediction Results

**Syntax:** obj &lt;&lt; Get Inverse Prediction Results

**Beschreibung:** Gibt eine benannte Liste zurück, die die Ergebnisse aus dem Diagramm der inversen Vorhersage enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 10 );obj << Get Inverse Prediction Results;

```

### Get Prediction Results

**Syntax:** obj &lt;&lt; Get Prediction Results

**Beschreibung:** Gibt eine benannte Liste zurück, die die Ergebnisse aus dem Vorhersagediagramm enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Longitudinal Prediction Time( 4500 );obj << Get Prediction Results;

```

### Get Residuals

**Syntax:** obj &lt;&lt; Get Residuals

**Beschreibung:** Gibt eine benannte Liste zurück, die die Ergebnisse aus dem Residuendiagramm enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Get Residuals;

```

### Get Results

**Syntax:** obj &lt;&lt; Get Results

**Beschreibung:** Gibt eine benannte Liste zurück, die die Ergebnisse für alle angepassten Modelle enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Generate Report for Current Model;obj << Get Results;

```

### Inverse Prediction Alpha

**Syntax:** obj &lt;&lt; Inverse Prediction Alpha( fraction )

**Beschreibung:** Gibt das Alpha-Niveau an, das für die Intervalle im Diagramm der inversen Vorhersage verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 6 );obj << Show Curve Interval( "Prediction Interval" );obj << Show Residual Plot( 0 );obj << No Tab List( 1 );obj << Inverse Prediction Interval( "Prediction Interval" );Wait( 1 );obj << Inverse Prediction Alpha( .01 );

```

### Inverse Prediction Interval

**Syntax:** obj &lt;&lt; Inverse Prediction Interval( "Kein Intervall"|"Konfidenzintervall"|"Vorhersageintervall" )

**Beschreibung:** Blendet Konfidenz- oder Vorhersageintervalle für die Pseudo-Ausfallzeiten ein oder aus, die im Diagramm der inversen Vorhersage angezeigt werden. Wenn Intervalle aktiviert sind, werden die Intervalle auch in die Datentabelle aufgenommen, die bei Verwendung der Option „Save Crossing Time“ erstellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 6 );obj << Show Curve Interval( "Prediction Interval" );obj << Show Residual Plot( 0 );obj << No Tab List( 1 );Wait( 1 );obj << Inverse Prediction Interval( "Prediction Interval" );

```

### Inverse Prediction Side

**Syntax:** obj &lt;&lt; Inverse Prediction Side( "Zweiseitig"|"Einseitig unterhalb"|"Einseitig oberhalb" )

**Beschreibung:** Gibt an, ob einseitige oder zweiseitige Intervalle im Diagramm der inversen Vorhersage angezeigt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 6 );obj << Show Curve Interval( "Prediction Interval" );obj << No Tab List( 1 );obj << Show Residual Plot( 0 );obj << Inverse Prediction Interval( "Prediction Interval" );Wait( 1 );obj << Inverse Prediction Side( "Lower One Sided" );

```

### Longitudinal Prediction Alpha

**Syntax:** obj &lt;&lt; Longitudinal Prediction Alpha( fraction )

**Beschreibung:** Gibt das Alpha-Niveau an, das für die Intervalle im Vorhersagediagramm verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 6 );obj << Show Curve Interval( "Prediction Interval" );obj << No Tab List( 1 );obj << Show Residual Plot( 0 );obj << Show Inverse Prediction Plot( 0 );obj << Longitudinal Prediction Interval( "Prediction Interval" );obj << Longitudinal Prediction Time( 4500 );Wait( 1 );obj << Longitudinal Prediction Alpha( .01 );

```

### Longitudinal Prediction Interval

**Syntax:** obj &lt;&lt; Longitudinal Prediction Interval( "Kein Intervall"|"Konfidenzintervall"|"Vorhersageintervall" )

**Beschreibung:** Blendet Konfidenz- oder Vorhersageintervalle für die geschätzten Zielgrößen ein oder aus, die im Vorhersagediagramm angezeigt werden. Wenn Intervalle aktiviert sind, werden die Intervalle auch in die Datentabelle aufgenommen, die bei Verwendung der Option „Save Predictions“ erstellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 6 );obj << Show Curve Interval( "Prediction Interval" );obj << No Tab List( 1 );obj << Show Residual Plot( 0 );obj << Show Inverse Prediction Plot( 0 );obj << Longitudinal Prediction Time( 4500 );Wait( 1 );obj << Longitudinal Prediction Interval( "Prediction Interval" );

```

### Longitudinal Prediction Time

**Syntax:** obj &lt;&lt; Longitudinal Prediction Time( number )

**Beschreibung:** Gibt den Zeitwert an, für den Sie die Zielgröße vorhersagen möchten.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 6 );obj << Show Curve Interval( "Prediction Interval" );obj << No Tab List( 1 );obj << Show Residual Plot( 0 );obj << Show Inverse Prediction Plot( 0 );obj << Longitudinal Prediction Interval( "Prediction Interval" );Wait( 1 );obj << Longitudinal Prediction Time( 3000 );

```

### No Tab List

**Syntax:** obj &lt;&lt; No Tab List( state=0|1 )

**Beschreibung:** Ordnet die Register „Residuendiagramm“, „Inverse Vorhersage“ und „Vorhersage-Graph“ als gestapelten Bericht an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));Wait( 1 );obj << No Tab List( 1 );

```

### Nonlinear Path

**Syntax:** obj &lt;&lt; Nonlinear Path

**Beschreibung:** Legt für den Stil des Degradationspfads die Option „Nichtlinearer Pfad“ fest.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));Wait( 1 );obj << Nonlinear Path;

```

### Prediction Settings

**Syntax:** obj &lt;&lt; Prediction Settings

**Beschreibung:** Öffnet ein Fenster, das Optionen zum Ändern der Einstellungen enthält, die in den Modellvorhersagen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));Wait( 0 );obj << Prediction Settings;

```

### Residual Plot

**Syntax:** obj &lt;&lt; Residual Plot( &lt;Jittering( state=0|1 )&gt;, &lt;Jittering Scale( number )&gt;, &lt;Separate Groups( state=0|1 )&gt; )

**Beschreibung:** Ermöglicht Ihnen, Optionen für das Residuendiagramm anzugeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Residual Plot( Jittering( 1 ), Jittering Scale( 0.5 ) );Wait( 1 );obj << Residual Plot( Jittering Scale( 1.5 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );obj = dt << Degradation(	Y( :Power Drop ),	Time( :Hours ),	Label( :Device ),	X( :Degrees C ),	Application( "Repeated Measures Degradation" ));Wait( 1 );obj << Residual Plot( Jittering( 1 ), Separate Groups( 1 ) );

```

### Save Crossing Time

**Syntax:** obj &lt;&lt; Save Crossing Time

**Beschreibung:** Speichert die Pseudo-Ausfallzeiten für das aktuelle Modell in einer neuen Datentabelle. Die neue Datentabelle enthält ein Skript „Lebensdauerverteilung“ oder „Lebensdauer nach X anpassen“, mit dem eine Verteilung an die Pseudo-Ausfallzeiten angepasst werden kann. Wenn eine der „Inverse Prediction Interval"-Optionen aktiviert ist, enthält die Tabelle auch die Intervalle.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Save Crossing Time;

```

### Save Predictions

**Syntax:** obj &lt;&lt; Save Predictions

**Beschreibung:** Speichert die vorhergesagten Zielgrößenwerte für das aktuelle Modell in einer neuen Datentabelle. Die Tabelle enthält auch Spalten für untere und obere Schranken basierend auf der Einstellung der Option „Longitudinal Prediction Interval“.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Longitudinal Prediction Time( 4500 );obj << Save Predictions;

```

### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Beschreibung:** Speichert die Residuen für das aktuelle Modell in einer neuen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Save Residuals;

```

### Set Baseline

**Syntax:** obj &lt;&lt; Set Baseline( number )

**Beschreibung:** Gibt die Bedingungen für normale Verwendung für die erklärende Variable in nichtlinearen Degradationspfaden an. Der Baseline-Wert wird im Überlagerungsdiagramm als schwarze Linie angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );obj = dt << Degradation(	Y( :Power Drop ),	Time( :Hours ),	Label( :Device ),	X( :Degrees C ),	Application( "Repeated Measures Degradation" ),	Show Fitted Lines( 1 ),	Path Specifications(		Nonlinear Path(			Add Formula(				Formula Name( "Reaction Rate 1" ),				Formula(					Parameter(						{DInf = -1.4423, Ru = 0.000526206474198, Ea = 0.816981438481622},						DInf * (1 - Exp(							-Ru * Exp(								Ea * (11604.5181215503 / (193.5 + 273.15) - 11604.5181215503								 / (Degrees C + 273.15))							) * Hours						))					)				),				Initial Values( [-1.4423, 0.000526206474198, 0.816981438481622] ),				Lower( [-1.58653, 0.0004735858267782, 0.73528329463346] ),				Upper( [-1.29807, 0.0005788271216178, 0.898679582329784] ),				Fitting Method( Newton ),				Fixed( [0, 0, 0] )			),			Select Formula( "Reaction Rate 1" )		)	),	Nonlinear Path( 1 ));Wait( 1 );obj << Set Baseline( 130 );

```

### Set Censoring Time

**Syntax:** obj &lt;&lt; Set Censoring Time( number )

**Beschreibung:** Gibt die Zensierungszeit an, die in den Überlagerungsdiagrammen und in den Diagrammen der inversen Vorhersage als gepunktete vertikale Linie angezeigt wird. Wenn bei „Inverse Prediction Interval“ die Option „No Interval“ ausgewählt ist, werden Beobachtungen, die die Zensierungszeit überschreiten, auf horizontalen Linien beginnend bei der Zensierungszeit angezeigt. Wenn bei „Inverse Prediction Interval“ die Option „Confidence Interval“ oder „Prediction Interval“ ausgewählt ist, verlaufen horizontale Linien auf unbestimmte Zeit rechts von Beobachtungen, deren obere Grenzen die Zensierungszeit überschreiten. Die Zensierungszeit wird in Datentabellen reflektiert, die mit den Optionen „Save Crossing Time“ und „Generate Pseudo Failure Data“ erstellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Show Fitted Lines( 1 );Wait( 1 );obj << Set Censoring Time( 3800 );

```

### Set Lower Spec Limit

**Syntax:** obj &lt;&lt; Set Lower Spec Limit( number )

**Beschreibung:** Gibt die untere Spezifikationsgrenze an. Spezifikationsgrenzen werden im Überlagerungsdiagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );obj = dt << Degradation(	Y( :Power Drop ),	Time( :Hours ),	Label( :Device ),	X( :Degrees C ),	Application( "Repeated Measures Degradation" ));obj << Show Fitted Lines( 1 );Wait( 1 );obj << Set Lower Spec Limit( -1.5 );

```

### Set Upper Spec Limit

**Syntax:** obj &lt;&lt; Set Upper Spec Limit( number )

**Beschreibung:** Gibt die obere Spezifikationsgrenze an. Spezifikationsgrenzen werden im Überlagerungsdiagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Show Fitted Lines( 1 );Wait( 1 );obj << Set Upper Spec Limit( 6 );

```

### Show Curve Interval

**Syntax:** obj &lt;&lt; Show Curve Interval( "Kein Intervall"|"Konfidenzintervall"|"Vorhersageintervall" )

**Beschreibung:** Blendet die Konfidenz- oder Vorhersageintervalle für die angepassten Geraden ein oder aus, die im Überlagerungsdiagramm angezeigt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));Wait( 1 );obj << Show Curve Interval( "Prediction Interval" );

```

### Show Fitted Lines

**Syntax:** obj &lt;&lt; Show Fitted Lines( state=0|1 )

**Beschreibung:** Zeigt die angepassten Linien im Überlagerungsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Show Fitted Lines( 0 ));Wait( 1 );obj << Show Fitted Lines( 1 );

```

### Show Inverse Prediction Plot

**Syntax:** obj &lt;&lt; Show Inverse Prediction Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der inversen Vorhersage an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Show Residual Plot( 0 ),	Show Inverse Prediction Plot( 0 ));obj << Set Upper Spec Limit( 6 );obj << No Tab List( 1 );Wait( 1 );obj << Show Inverse Prediction Plot( 1 );

```

### Show Legend

**Syntax:** obj &lt;&lt; Show Legend( state=0|1 )

**Beschreibung:** Zeigt eine Legende für die Symbole im Überlagerungsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Show Legend( 1 );

```

### Show Residual Plot

**Syntax:** obj &lt;&lt; Show Residual Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuendiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Show Residual Plot( 0 ));Wait( 1 );obj << Show Residual Plot( 1 );

```

### Show Spec Limits

**Syntax:** obj &lt;&lt; Show Spec Limits( state=0|1 )

**Beschreibung:** Zeigt die Spezifikationsgrenzen im Überlagerungsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Set Upper Spec Limit( 7.5 ),	Application( "Repeated Measures Degradation" ));Wait( 1 );obj << Show Spec Limits( 0 );

```

### Simple Linear Path

**Syntax:** obj &lt;&lt; Simple Linear Path

**Beschreibung:** Legt für den Stil des Degradationspfads die Option „Einfacher linearer Pfad“ fest.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Nonlinear Path;Wait( 1 );obj << Simple Linear Path;

```

### Specify and Fit Path

**Syntax:** obj &lt;&lt; Specify and Fit Path( Formula Name( string ), Formula( Model Type( string ), Parameter(...)|specification ), fitting command )

**Beschreibung:** Ermöglicht Ihnen, ein Pfadmodell direkt in einem Skript anzugeben und anzupassen. Die Degradationsplattform identifiziert Ausgangswerte und passt das Modell automatisch ohne weiteres Eingreifen des Benutzers an. Jedes Modell wird durch einen Modellnamen, eine Modelldefinition und einen Anpassungsbefehl angegeben. Der Modelltyp im Argument „Formula“ muss einer der folgenden sein: Custom Linear, Reaction Rate, Reaction Rate Type I oder Constant Rate. Bei einem benutzerdefinierten linearen Modell verwenden Sie die Funktion Parameter(), um die Formel zu definieren, ähnlich wie beim Angeben von Modellen in der Plattform „Nichtlinear“. Bei anderen Modelltypen unterscheiden sich die Informationen zur specification je nach Modelltyp, Einzelheiten finden Sie in den Beispielen. fitting command kann entweder Fit Model oder Fit by System ID sein.

**„Fit by System ID”-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Specify and Fit Path(	Formula Name( "custom linear model 1" ),	Formula(		Model Type( "Custom Linear" ),		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )	),	Fit by System ID() //Illustration of using Fit by System ID in script for custom linear models.);

```

**„Fit Model“-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Specify and Fit Path(	Formula Name( "custom linear model 1" ),	Formula(		Model Type( "Custom Linear" ),		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )	),	Fit Model() //Illustration of using Fit Model in script for custom linear models);

```

**Andere Beispiele**

```jsl

dt = Open( "$sample_data/reliability/Device B.jmp" );obj = dt << Degradation(	Y( :Power Drop ),	Time( :Hours ),	Label( :Device ),	X( :Degrees C ),	Nonlinear Path( 1 ),	Mean Path( 1 ),	Application( "Repeated Measures Degradation" ));obj << Specify and Fit Path(	Formula Name( "Reaction Rate 1" ),	Formula(		Model Type( "Reaction Rate" ),		Temperature Unit( "Celsius" ),		Baseline Temperature( . )	), //Illustration of using builtin models in script without going through UI interaction to setup.	Fit by System ID());obj << Generate Report for Current Model();obj << Specify and Fit Path(	Formula Name( "Reaction Rate 2" ),	Formula(		Model Type( "Reaction Rate" ),		Temperature Unit( "Celsius" ),		Baseline Temperature( 100 )	), //Illustration of using builtin models in script without going through UI interaction to setup.	Fit by System ID());obj << Generate Report for Current Model();obj << Specify and Fit Path(	Formula Name( "Reaction Rate Type I 1" ),	Formula(		Model Type( "Reaction Rate Type I" ),		Temperature Unit( "Celsius" ),		Baseline Temperature( . )	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.	Fit by System ID());obj << Generate Report for Current Model();obj << Specify and Fit Path(	Formula Name( "Constant Rate 1" ),	Formula(		Model Type( "Constant Rate" ),		Path Transformation( "No Transformation" ),		Rate Transformation( "Arrhenius Celsius" ),		Time Transformation( Custom( "Function({x}, x^(1/3))" ) )	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.	Fit Model());obj << Generate Report for Current Model();

```

### Test Stability

**Syntax:** obj &lt;&lt; Test Stability

**Beschreibung:** Führt eine Stabilitätsanalyse zur Ermittelung geschätzter Ablaufdaten durch.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );obj = dt << Degradation(	Y( :"Concentration (mg/Kg)"n ),	Time( :Time ),	Label( :Batch Number ),	Set Lower Spec Limit( 99 ));obj << Test Stability;

```

### Use Interpolation through Data

**Syntax:** obj &lt;&lt; Use Interpolation through Data( state=0|1 )

**Beschreibung:** Gibt an, dass lineare Interpolation zwischen Punkten (statt des angepassten Modells) verwendet wird, um vorherzusagen, wann eine Einheit die Spezifikationsgrenze kreuzt. Das Verhalten hängt davon ab, ob eine Einheit Beobachtungen hat, die die Spezifikationsgrenze überschreiten. Wenn eine Einheit Beobachtungen hat, die die Spezifikationsgrenze überschreiten, ist die inverse Vorhersage die lineare Interpolation zwischen den Beobachtungen, die die Spezifikationsgrenze umgeben. Wenn eine Einheit keine Beobachtungen hat, die die Spezifikationsgrenze überschreiten, wird die inverse Vorhersage zensiert und hat einen Wert gleich der maximal beobachteten Zeit für die Einheit.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ));obj << Set Upper Spec Limit( 6 );obj << Show Curve Interval( "Prediction Interval" );obj << Show Residual Plot( 0 );obj << No Tab List( 1 );Wait( 1 );obj << Use Interpolation through Data( 1 );

```

### Use Pooled MSE for Nonpoolable Model

**Syntax:** obj = Degradation(...Use Pooled MSE for Nonpoolable Model( state=0 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass das erste Modell in der Stabilitätsanalyse ein Modell mit einem gepoolten mittleren quadratischen Fehler (MSE) verwendet, um den frühesten Kreuzungszeitpunkt zu berechnen. Standardmäßig „0“.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );obj = dt << Degradation(	Y( :"Concentration (mg/Kg)"n ),	Time( :Time ),	Label( :Batch Number ),	Application( "Stability Test" ),	Set Lower Spec Limit( 99 ),	Use Pooled MSE for Nonpoolable Model( 1 ));

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = Degradation(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### Censor

**Syntax:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );obj = dt << Degradation(	Y( :Strength ),	Time( :Weeks ),	Censor( :Censor ),	X( :Degrees ),	Application( Destructive Degradation ));

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	),	Freq( :_freqcol ));

```

### Label

**Syntax:** obj &lt;&lt; Label( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	X( :Batch ),	Application( "Repeated Measures Degradation" ));

```

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	X( :Batch ),	Application( "Repeated Measures Degradation" ));

```

### System ID

**Syntax:** obj &lt;&lt; System ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	X( :Batch ),	Application( "Repeated Measures Degradation" ));

```

### Time

**Syntax:** obj &lt;&lt; Time( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	X( :Batch ),	Application( "Repeated Measures Degradation" ));

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	X( :Batch ),	Application( "Repeated Measures Degradation" ));

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	X( :Batch ),	Application( "Repeated Measures Degradation" ));

```

## Zugehörige Konstruktoren

### Degradation

**Syntax:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**Beschreibung:** Modelliert Degradation über die Zeit mithilfe von linearen und nichtlinearen Kurven. Analyseoptionen sind u.a. Stabilitätsanalyse und Erzeugung von Pseudo-Ausfalldaten.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));

```

