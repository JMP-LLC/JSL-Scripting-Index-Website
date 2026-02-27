# DOE



## Elementmeldungen

### A-Optimality Parameter Weights

**Syntax:** obj &lt;&lt; A-Optimality Parameter Weights

**Beschreibung:** Legt die Gewichtungen für die Erstellung eines A-optimalen Designs fest.

**JMP Version hinzugefügt:** 14

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Set Sample Size( 14 ),
	Optimality Criterion( "Make A-Optimal Design"n ),
	"A-Optimality Parameter Weights"n( [1 1 1 1 0.1 0.1 0.1] )}
);

```

### ALT Factor Settings

**Syntax:** obj &lt;&lt; ALT Factor Settings

**Beschreibung:** Ermöglicht für die vorgegebene Faktorzahl in einem Plan eines beschleunigten Lebensdauertests die Angabe von Faktorname, Anzahl Stufen, Faktortransformation, Nutzungsbedingungen und Testbedingungen.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### ALT Plan Setup

**Syntax:** obj &lt;&lt; ALT Plan Setup( 1|2|3 )

**Beschreibung:** Gibt die Wahl des ersten Modells für einen Plan eines beschleunigten Lebensdauertests an.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Add Alias Term

**Syntax:** obj &lt;&lt; Add Alias Term

**Beschreibung:** Fügt einen Alias-Term zur Liste der Alias-Terme hinzu. Geben Sie die Faktorzahl und Power für jeden Effekt in einer Liste an. Erstellen Sie Wechselwirkungen, indem Sie die Effekte durch Komma trennen.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Alias Term( {1, 1}, {2, 1} );
d << Add Alias Term( {1, 2} );

```

### Add Constraint

**Syntax:** obj &lt;&lt; Add Constraint

**Beschreibung:** Fügt lineare Nebenbedingungen mittels einer Matrix hinzu. Jede Zeile stellt eine Nebenbedingung dar. Die letzte Spalte ist für Werte auf der rechten Seite der Ungleichungsnebenbedingungen gedacht. In JSL müssen die Ungleichungsnebenbedingungen kleiner oder gleich den Werten auf der rechten Seite sein.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} )
);

```

### Add Factor

**Syntax:** obj &lt;&lt; Add Factor( Continuous|Discrete Numeric|Blocking|Constant|Categorical|Mixture )

**Beschreibung:** Fügt einen Faktor vom angegebenen Typ und optionale Argumente hinzu. Wenn nichts angegeben wird, fügt dieser Befehl einen stetiger Faktor hinzu.

```jsl

d = DOE( Custom Design );
d << Add Factor( Continuous, -1, 1, "X1", 0 );
d << Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 );
d << Add Factor( Categorical, {"L1", "L2"}, "X3", 0 );
d << Add Factor( Blocking, 8, "X4" );
d << Add Factor( Constant, 3, "X5" );

```

### Add Functional Response

**Syntax:** obj &lt;&lt; Add Functional Response

**Beschreibung:** Fügt eine funktionale Zielgröße mit dem angegebenen Namen, der Anzahl von Messungen pro Einzelversuch und Werten hinzu.

**JMP Version hinzugefügt:** 15

```jsl

DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Functional Response( "Y", 5, {1, 2, 3, 4, 5} ),
	Set Random Seed( 46055034 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 )
);

```

### Add Potential Term

**Syntax:** obj &lt;&lt; Add Potential Term

**Beschreibung:** Fügt einen Term „Wenn möglich“ zur Liste der Modellterme hinzu. Geben Sie die Faktorzahl und Power für jeden Effekt in einer Liste an. Erstellen Sie Wechselwirkungen, indem Sie die Effekte durch Komma trennen.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Potential Term( {1, 1}, {2, 1} );
d << Add Potential Term( {1, 2} );

```

### Add Response

**Syntax:** obj &lt;&lt; Add Response( goal, name, lower limit, upper limit, importance, lower detection limit, upper detection limit )

**Beschreibung:** Fügt eine Zielgröße mit dem angegebenen Ziel, Name, unterer Grenze, oberer Grenze und Wichtigkeit hinzu.

#### Beispiel 1

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", 10, 30, 1 ) );

```

#### Beispiel 2

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", ., ., 1, 10, 30 ) );

```

### Add Term

**Syntax:** obj &lt;&lt; Add Term

**Beschreibung:** Fügt einen „Erforderlichen“ Term zur Liste der Modellterme hinzu. Effekte werden durch {Faktorzahl, Power} angegeben. Wechselwirkungen können durch Trennen der Effekte mittels Komma erstellt werden.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Term( {1, 1}, {2, 1} );
d << Add Term( {1, 2} );

```

### Additional Designs

**Syntax:** obj &lt;&lt; Additional Designs

**Beschreibung:** Geben Sie bis zu neun zusätzliche Designs für den Vergleich mit dem Referenzdesign an.

**JMP Version hinzugefügt:** 14

```jsl

DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Allow covariate rows to be repeated

**Syntax:** obj &lt;&lt; Allow covariate rows to be repeated( state=0|1 )

**Beschreibung:** Gibt an, ob Kovariablenzeilen im Design wiederholt werden dürfen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Augment Method

**Syntax:** obj &lt;&lt; Augment Method( Replicate|Centerpoints|Fold Over|Add Axial|Augment )

**Beschreibung:** Gibt den Typ der Erweiterungsmethode und dessen Parameter an.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Augment );
d << Set Sample Size( 24 );
d << Make Design;

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Augment Method( Replicate, 2 );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Centerpoints, 3 );

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Fold Over, [1 2] );

```

#### Beispiel 5

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Add Axial, 1, 2 );

```

### Blocks

**Syntax:** obj &lt;&lt; Blocks

**Beschreibung:** Gibt die Blockgröße für ein balanciertes unvollständiges Blockdesign (BIBD) an.

**JMP Version hinzugefügt:** 14

```jsl

d = DOE( Balanced Incomplete Block Design, Treatments( 3, {"L1", "L2", "L3"} ) );
d << Blocks( 2 );
d << Make Design;

```

### Center Points

**Syntax:** obj &lt;&lt; Center Points

**Beschreibung:** Gibt die Anzahl der Mittelpunkte an.

#### Beispiel 1

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Center Points( 2 );

```

#### Beispiel 2

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 ),
	Center Points( 1 )
);

```

### Change Anticipated Coefficients

**Syntax:** obj &lt;&lt; Change Anticipated Coefficients

**Beschreibung:** Antizipierte Koeffizienten in Power-Analyse ändern.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );

```

### Change Factor Settings

**Syntax:** obj &lt;&lt; Change Factor Settings

**Beschreibung:** Gibt das Minimum, Maximum und den Namen des stetigen oder Mischungsfaktors an, den Sie im ersten Argument eingeschlossen haben. Äußerst nützlich bei Plattformen, die zunächst über vordefinierte Faktoren verfügen.

#### Beispiel 1

```jsl

d = DOE( Response Surface Design );
d << Change Factor Settings( 1, 2, 3, "A" );
d << Change Factor Settings( 2, 0, 4 );

```

#### Beispiel 2

```jsl

d = DOE( Mixture Design );
d << Change Factor Settings( 1, 0.1, 0.4, "A" );
d << Change Factor Settings( 3, 0, 0.8, "C" );

```

### Check Inscribe

**Syntax:** obj &lt;&lt; Check Inscribe

**Beschreibung:** Skaliert das Design neu, so dass sich die Achsenpunkte am unteren und oberen Ende des Bereichs befinden.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );
d << Check Inscribe;

```

### Choice Design Table Output

**Syntax:** obj &lt;&lt; Choice Design Table Output( "Separat"|"Kombiniert" )

**Beschreibung:** Gibt an, wie eine Datentabelle für ein Choice-Design erstellt wird.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Add Term( {1, 1} ), Add Term( {2, 1} ),
	Set Prior Mean Choice( [0 0] ), Set Prior Variance Matrix( [1 0, 0 1] ),
	Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 ), Make Design,
	Choice Design Table Output( Combined )}
);

```

### D Efficiency Weight

**Syntax:** obj &lt;&lt; D Efficiency Weight

**Beschreibung:** Mit dieser Option steuern Sie die relative Gewichtung der D-Effizienz und der Reduktion von Aliasbildung. Geben Sie eine Zahl zwischen Null und Eins vor.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	D Efficiency Weight( 0.5 ),
	Make Design
);

```

### Design Search Time

**Syntax:** obj &lt;&lt; Design Search Time( number )

**Beschreibung:** Gibt die Anzahl von Sekunden für die Suche nach einem Design an.

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Make Design}
);

```

### Disallowed Combinations

**Syntax:** obj &lt;&lt; Disallowed Combinations

**Beschreibung:** Skript bereitstellen, das für alle Faktorkombinationen, die aus Ihrem Design ausgeschlossen werden sollen, den Wert „wahr“ zurückgibt.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Number of Starts( 100 ),
	Disallowed Combinations( X1 > 0.5 & X2 == 2 ),
	Make Design
);

```

### Discrete Numeric Powers Set to Necessary

**Syntax:** obj &lt;&lt; Discrete Numeric Powers Set to Necessary( state=0|1 )

**Beschreibung:** Gibt an, ob Potenzen in diskret numerischen Faktoren erforderliche Modellterme sein sollen.

```jsl

DOE(
	Custom Design,
	Add Factor( Discrete Numeric, {1, 2, 3}, "X1", 0 ),
	Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 ),
	Discrete Numeric Powers Set to Necessary( 1 ),
	Make Model( Linear )
);

```

### Distribution Choice

**Syntax:** obj &lt;&lt; Distribution Choice

**Beschreibung:** Gibt die Verteilung für einen Plan eines beschleunigten Lebensdauertests an.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Enforce Use of Selected Covariate Rows

**Syntax:** obj &lt;&lt; Enforce Use of Selected Covariate Rows( state=0|1 )

**Beschreibung:** Gibt an, ob alle ausgewählten Kovariablenzeilen in das Design eingeschlossen werden sollen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### FFF Optimality Criterion

**Syntax:** obj &lt;&lt; FFF Optimality Criterion( "MaxPro"|"Zentroid" )

**Beschreibung:** Gibt das im Design verwendete Kriterium an. Empfohlen wird der Standardwert.

#### Beispiel 1

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

#### Beispiel 2

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Find Subset

**Syntax:** obj &lt;&lt; Find Subset

**Beschreibung:** Findet die D-optimale Teilmenge eines Extreme-Vertices-Designs.

```jsl

d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );
d << Mixture Design Type( Extreme Vertices, 3 );
d << Find Subset( 10 );

```

### GOSSDDetails

**Syntax:** obj &lt;&lt; GOSSDDetails

**Beschreibung:** Gibt die aktuellen Faktoreinstellungen als Liste zurück.

**JMP Version hinzugefügt:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );
Show( d << GOSSDDetails );

```

### GOSSDStructure

**Syntax:** obj &lt;&lt; GOSSDStructure

**Beschreibung:** Gibt die Struktur eines GOSSD an.

**JMP Version hinzugefügt:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );
d << GOSSDStructure( 6, 8 );

```

### Get Alias Matrix

**Syntax:** obj &lt;&lt; Get Alias Matrix

**Beschreibung:** Gibt die Alias-Matrix aus der Designauswertung zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Alias Matrix;

```

### Get Design Diagnostics

**Syntax:** obj &lt;&lt; Get Design Diagnostics

**Beschreibung:** D-Effizienz, G-Effizienz, A-Effizienz und durchschnittliche Varianz der Vorhersage zurückgeben.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Design Diagnostics;

```

### Get Effect Power

**Syntax:** obj &lt;&lt; Get Effect Power

**Beschreibung:** Vektor der Potenzen für Effektschätzer zurückgeben.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Get Effect Power;

```

### Get Estimation Efficiencies

**Syntax:** obj &lt;&lt; Get Estimation Efficiencies

**Beschreibung:** Gibt einen Vektor für die vergrößerte Breite jedes Parameterschätzwerts verglichen mit einem idealen Design zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Estimation Efficiencies;

```

### Get MaxPro Values

**Syntax:** obj &lt;&lt; Get MaxPro Values

**Beschreibung:** Gibt die MaxPro-Werte für ein schnell-flexibles Design zurück, einschließlich alle Unterdesigns basierend auf Stufen eines kategorialen Faktors.

**JMP Version hinzugefügt:** 14

```jsl

d = DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);
d << Get MaxPro Values;

```

### Get Number of Random Starts

**Syntax:** obj &lt;&lt; Get Number of Random Starts

**Beschreibung:** Gibt die Anzahl zufälliger Starts bei der Design-Generierung zurück.

**JMP Version hinzugefügt:** 15

### Get Power

**Syntax:** obj &lt;&lt; Get Power

**Beschreibung:** Vektor der Potenzen für Parameterschätzer zurückgeben.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Power;

```

### Get Prediction Variances

**Syntax:** obj &lt;&lt; Get Prediction Variances

**Beschreibung:** Gibt den Vektor der Vorhersagevarianzen aus dem Diagramm „Vorhersagevarianz über Raumanteil“ zurück.

**JMP Version hinzugefügt:** 14

```jsl

d = DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),
	Make Design}
);
d << Get Prediction Variances;

```

### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Beschreibung:** Gibt die Designmatrix (auch X-Matrix genannt) zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get X Matrix;

```

### Group New Runs Into Separate Block

**Syntax:** obj &lt;&lt; Group New Runs Into Separate Block

**Beschreibung:** Fügt einen Blockbildungsfaktor hinzu, der bei der Erweiterung von Designs neue Einzelversuche in eigenen Blöcken gruppiert.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Group New Runs Into Separate Block;

```

### Load Constraints

**Syntax:** obj &lt;&lt; Load Constraints

**Beschreibung:** Zuvor gespeicherte Tabelle mit Nebenbedingungen der Faktoren zur Verwendung in diesem Versuch laden.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Diamond Constraints.jmp" );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 0} ),
	Load Constraints
);

```

### Load Design

**Syntax:** obj &lt;&lt; Load Design

**Beschreibung:** Design laden

```jsl

d = DOE( Custom Design );
d << Load Design();

```

### Load Factors

**Syntax:** obj &lt;&lt; Load Factors

**Beschreibung:** Zuvor gespeicherte Faktorentabelle zur Verwendung in diesem Versuch laden.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Factors.jmp" );
DOE( Custom Design, Load Factors );

```

### Load Responses

**Syntax:** obj &lt;&lt; Load Responses

**Beschreibung:** Lädt eine zuvor gespeicherte Datentabelle mit Zielgrößen.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Response.jmp" );
DOE( Custom Design, Load Responses );

```

### Local Design

**Syntax:** obj &lt;&lt; Local Design( state=0|1 )

**Beschreibung:** Gibt an, ob ein lokales Design für den Priormittelwert erstellt werden soll.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Local Design( 0 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Make Design

**Syntax:** obj &lt;&lt; Make Design

**Beschreibung:** Erstellt das von Ihnen im Skript angegebene Design.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( RSM );
d << Make Design;

```

### Make Model

**Syntax:** obj &lt;&lt; Make Model( Linear|Interactions|RSM )

**Beschreibung:** Fügt Terme zur Liste der Modellterme für das angegebene Modell hinzu.

#### Beispiel 1

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( RSM );

```

#### Beispiel 2

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( Interactions );

```

### Make Strip Plot Design

**Syntax:** obj &lt;&lt; Make Strip Plot Design

**Beschreibung:** Gibt ein Strip-Plot-Design an, wenn schwer änderbare Faktoren unabhängig von sehr schwer änderbaren Faktoren variieren.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Make Strip Plot Design;

```

### Make Table

**Syntax:** obj &lt;&lt; Make Table

**Beschreibung:** Erstellt eine Datentabelle aus dem aktuellen Design.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Make Table;

```

### Make Test Plan

**Syntax:** obj &lt;&lt; Make Test Plan

**Beschreibung:** Erstellt den Testplan für einen Plan eines beschleunigten Lebensdauertests.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] ),
	Make Design, Make Test Plan}
);

```

### MaxPro Categorical Weight

**Syntax:** obj &lt;&lt; MaxPro Categorical Weight

**Beschreibung:** Gibt die MaxPro-Gewichtung an. Werte größer als 1 erhöhen die Trennung von Punkten mit der gleichen kategorialen Stufe.

**JMP Version hinzugefügt:** 14

```jsl

DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);

```

### Mixture Design Type

**Syntax:** obj &lt;&lt; Mixture Design Type( Simplex Centroid|Simplex Lattice|ABCD|Extreme Vertices|Space Filling )

**Beschreibung:** Gibt den Typ des Mischungsdesigns an. Sofern Sie den Parameter nicht als zweites Argument angeben, werden die Standardparameter verwendet.

#### Beispiel 1

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Simplex Centroid, 2 );

```

#### Beispiel 2

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Simplex Lattice, 4 );

```

#### Beispiel 3

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( ABCD );

```

#### Beispiel 4

```jsl

d = doe( Mixture Design );
d << Change Factor Settings( 1, .05, .25 );
d << Mixture Design Type( Extreme Vertices, 3 );

```

#### Beispiel 5

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Space Filling, 25 );

```

### Mixture Sum

**Syntax:** obj &lt;&lt; Mixture Sum

**Beschreibung:** Verwenden Sie diese Option, wenn Sie für die Summe aller Bestandteile einen anderen Wert als 1 angeben möchten. Die Mischungssumme ist die Summe der Mengen aller Bestandteile.

```jsl

DOE(
	Custom Design,
	Mixture Sum( 50 ),
	Add Factor( Mixture, 10, 25, "X1", 0 ),
	Add Factor( Mixture, 0, 15, "X2", 0 ),
	Add Factor( Mixture, 25, 40, "X3", 0 ),
	Make Design
);

```

### Nesting Structure

**Syntax:** obj &lt;&lt; Nesting Structure

**Beschreibung:** Gibt die Schachtelungsstruktur des Designs an. Verwenden Sie eine geklammerte Liste, um auf Schachtelung hinzuweisen (das erste Element ist der Schachtelungsfaktor, das zweite Element ist eine geklammerte Liste geschachtelter Faktoren oder Strukturen). Verwenden Sie horizontale Verkettung (‚||‘), um auf gekreuzte Faktoren oder Strukturen hinzuweisen.

```jsl

DOE(
	MSA Design,
	Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1, 1 ) ),
	Nesting Structure( {"X1", {"X2"}} || "X3" )
);

```

### Number of Column Starts

**Syntax:** obj &lt;&lt; Number of Column Starts

**Beschreibung:** Gibt die Anzahl der Optimierungen zufälliger Spalten für jeden Faktor eines Haupteffekte-Screening-Designs an.

```jsl

DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Screening Type( 1 ),
	Number of Column Starts( 100 ),
	Set Sample Size( 12 ),
	Make Design
);

```

### Number of Extra Runs

**Syntax:** obj &lt;&lt; Number of Extra Runs

**Beschreibung:** Gibt die Anzahl der zusätzlichen Einzelversuche für ein definitives Screening-Design an.

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Number of Starts

**Syntax:** obj &lt;&lt; Number of Starts

**Beschreibung:** Gibt die Anzahl der Neugenerierungen des Designs zur Optimierung des Gesamtdesigns an.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Number of Starts( 1000 ),
	Make Design
);

```

### Optimality Criterion

**Syntax:** obj &lt;&lt; Optimality Criterion( "Empfohlen"|"D-optimales Design erzeugen"|"I-optimales Design erzeugen"|"A-optimales Design erzeugen"|"Alias-optimales Design erzeugen" )

**Beschreibung:** Gibt das im Design verwendete Kriterium an. Empfohlen wird der Standardwert.

#### Beispiel 1

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

#### Beispiel 2

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Order Column

**Syntax:** obj &lt;&lt; Order Column

**Beschreibung:** Erfordert eine Reihenfolgespalte, wenn die Datentabelle erstellt wird.

**JMP Version hinzugefügt:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;
d << OrderColumn( 1 );

```

### Prior Parameter Variance

**Syntax:** obj &lt;&lt; Prior Parameter Variance

**Beschreibung:** Verwenden Sie diese Option, um die Gewichtung für die Terme „Wenn möglich“ in einem Modell zu steuern. Höhere Werte bedeuten mehr Priorinformation und kleinere Varianz. Die Varianzen sind die reziproken Werte der eingegebenen Werte.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Potential Term( {1, 1} ),
	Add Potential Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Prior Parameter Variance( [0, 1, 2, 6] ),
	Make Design
);

```

### Prior Specification Choice

**Syntax:** obj &lt;&lt; Prior Specification Choice

**Beschreibung:** Legt die Option zum Angeben von Priorparametern fest, wobei 1 „Achsenabschnitt angeben“ anzeigt und 2 „Quantil angeben“ anzeigt.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 1 ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Reference Design

**Syntax:** obj &lt;&lt; Reference Design

**Beschreibung:** Geben Sie das Referenzdesign für den Designvergleich an.

**JMP Version hinzugefügt:** 14

```jsl

DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Remove Alias Term

**Syntax:** obj &lt;&lt; Remove Alias Term

**Beschreibung:** Entfernt einen Term aus der Liste der Alias-Terme. Geben Sie die Faktorzahl und Power für jeden Effekt in einer Liste an. Erstellen Sie Wechselwirkungen, indem Sie die Effekte durch Komma trennen.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Alias Term( {1, 1}, {3, 1} );

```

### Remove All Alias Terms

**Syntax:** obj &lt;&lt; Remove All Alias Terms

**Beschreibung:** Entfernt alle Aliasterme aus der Liste der Aliasterme

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Remove All Alias Terms;

```

### Remove Term

**Syntax:** obj &lt;&lt; Remove Term

**Beschreibung:** Entfernt einen Term aus der Liste der Modellterme. Geben Sie die Faktorzahl und Power für jeden Effekt in einer Liste an. Erstellen Sie Wechselwirkungen, indem Sie die Effekte durch Komma trennen.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Term( {1, 1}, {3, 1} );
d << Remove Term( {3, 2} );

```

### Replicates

**Syntax:** obj &lt;&lt; Replicates

**Beschreibung:** Gibt die Anzahl der Versuchswiederholungen an. Bei MSA-Designs gibt ein zweites Argument die Wiederholungsstruktur an: 0=Vollständig randomisiert, 1=Batch wiederholen, 2=Schnell wiederholen.

#### Beispiel 1

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Replicates( 2 );

```

#### Beispiel 2

```jsl

d = DOE(
	MSA Design,
	{Add Response( None, "Y", ., ., . ), Add Factor(
		Categorical,
		{"L1", "L2"},
		"X1",
		MSA( 4, 1 )
	), Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1 ) ), Set Random Seed( 3983347 ),
	Replicates( 2, 0 ), Simulate Responses( 0 )}
);

```

### Report

**Syntax:** obj &lt;&lt; Report

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

d = DOE( Custom Design );
r = d << report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Constraints

**Syntax:** obj &lt;&lt; Save Constraints

**Beschreibung:** Speichert die Faktornebenbedingungen des aktuellen Versuchs in einer JMP-Tabelle für die Verwendung in einem anderen Versuch.

```jsl

DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} ),
	Save Constraints
);

```

### Save Factors

**Syntax:** obj &lt;&lt; Save Factors

**Beschreibung:** Gerade erstellte Faktoren in einer JMP-Tabelle speichern, um die Faktoren für weitere Versuche nutzen zu können.

```jsl

DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Factors
);

```

### Save Responses

**Syntax:** obj &lt;&lt; Save Responses

**Beschreibung:** Speichert die von Ihnen erstellten Zielgrößen als JMP-Datentabelle. Sie können diese Zielgrößen in andere Versuche laden.

```jsl

DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Responses
);

```

### Save Script to Data Table

**Syntax:** obj &lt;&lt; Save Script to Data Table

**Beschreibung:** Skript erstellen, das dieses Design reproduziert.

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Skript erstellen, das dieses Design reproduziert.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Save Script to Script Window
);

```

### Save X Matrix

**Syntax:** obj &lt;&lt; Save X Matrix( state=0|1 )

**Beschreibung:** Speichert die Designmatrix (auch X-Matrix genannt) als Tabelleneigenschaft in der JMP-Datentabelle, die das Design enthält.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Save X Matrix,
	Make Design,
	Make Table
);

```

### Screening Type

**Syntax:** obj &lt;&lt; Screening Type

**Beschreibung:** Gibt ein Haupteffekte-Screening-Design an, das orthogonal oder näherungsweise orthogonal ist.

```jsl

d = DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Screening Type( 1 );
d << Set Sample Size( 12 );
d << Make Design;

```

### Select Covariate Rows

**Syntax:** obj &lt;&lt; Select Covariate Rows

**Beschreibung:** Gibt die Zeilen aus der Kovariablentabelle an, die für DOE ausgewählt werden sollen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Set ALT Probability of Interest

**Syntax:** obj &lt;&lt; Set ALT Probability of Interest

**Beschreibung:** Legt die interessierende Wahrscheinlichkeit für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set ALT Time Range

**Syntax:** obj &lt;&lt; Set ALT Time Range

**Beschreibung:** Legt den betrachteten Zeitbereich für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Failure Probability Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Average Cluster Size

**Syntax:** obj &lt;&lt; Set Average Cluster Size

**Beschreibung:** Steuert die Anzahl von zufälligen Punkten für das Clustern eines schnell flexibel raumfüllenden Designs.

```jsl

DOE(
	Space Filling Design,
	Change Factor Settings( 1, -1, 1, "X1" ),
	Change Factor Settings( 2, -1, 1, "X2" ),
	Set Average Cluster Size( 100 ),
	Space Filling Design Type( Fast Flexible Filling, 50 )
);

```

### Set Axial Choice

**Syntax:** obj &lt;&lt; Set Axial Choice( 1|2|3|4 )

**Beschreibung:** Gibt die Axialwerteinstellungen an. Verwenden Sie 1 für Rotierbar, 2 für Orthogonal, 3 für Auf Fläche und 4 für Benutzerdefiniert.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );

```

### Set Axial Value

**Syntax:** obj &lt;&lt; Set Axial Value

**Beschreibung:** Gibt den benutzerdefinierten Axialwert an.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Value( 2 );

```

### Set Candidate Runs

**Syntax:** obj &lt;&lt; Set Candidate Runs

**Beschreibung:** Legt die Kandidatenversuche für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Delta For Power

**Syntax:** obj &lt;&lt; Set Delta For Power

**Beschreibung:** Gibt die Werte der antizipierten Koeffizienten in der Power-Analyse an. Antizipierte Koeffizienten sind die Hälfte des angegebenen Werts.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Delta For Power( 3 ),
	Make Design
);

```

### Set Expected Number of Respondents

**Syntax:** obj &lt;&lt; Set Expected Number of Respondents

**Beschreibung:** Legt die erwartete Anzahl von befragten Personen pro Umfrage fest.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Generators

**Syntax:** obj &lt;&lt; Set Generators

**Beschreibung:** Gibt die Generatoren für ein Screening-Design an.

```jsl

DOE(
	Screening Design,
	{Add Factor, Add Factor, Add Factor, Make Design( 1 ), Set Generators( [1, 1, 0] )}
);

```

### Set Inspection Times

**Syntax:** obj &lt;&lt; Set Inspection Times

**Beschreibung:** Legt die Inspektionszeiten für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Length of Test

**Syntax:** obj &lt;&lt; Set Length of Test

**Beschreibung:** Legt die Dauer des Tests für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Level Values

**Syntax:** obj &lt;&lt; Set Level Values

**Beschreibung:** Legt die Stufenwerte für den/die beschleunigenden Faktor(en) in einem Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Monitoring Choice

**Syntax:** obj &lt;&lt; Set Monitoring Choice

**Beschreibung:** Gibt die Art der Überwachung für einen Plan eines beschleunigten Lebensdauertests an.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set N Subplots

**Syntax:** obj &lt;&lt; Set N Subplots

**Beschreibung:** Gibt die Anzahl der Kleinteilstücke an, wenn es sowohl schwer zu ändernde Faktoren als auch sehr schwer zu ändernde Faktoren gibt.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Set N Subplots( 8 );

```

### Set N Whole Plots

**Syntax:** obj &lt;&lt; Set N Whole Plots

**Beschreibung:** Gibt die Anzahl der Großteilstücke an, wenn es schwer änderbare Faktoren oder sehr schwer änderbare Faktoren gibt.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Set N Whole Plots( 6 );

```

### Set Number of Attributes

**Syntax:** obj &lt;&lt; Set Number of Attributes

**Beschreibung:** Legt die Anzahl der Attribute fest, die sich in einem Choice-Satz ändern können.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Choice Sets

**Syntax:** obj &lt;&lt; Set Number of Choice Sets

**Beschreibung:** Legt die Anzahl der Choice-Sätze pro Umfrage fest.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of FDS points

**Syntax:** obj &lt;&lt; Set Number of FDS points

**Beschreibung:** Legt die Anzahl von Punkten für die Erzeugung des Diagramms „Vorhersagevarianz über Raumanteil“ fest.

**JMP Version hinzugefügt:** 14

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),
	Make Design}
);

```

### Set Number of Profiles

**Syntax:** obj &lt;&lt; Set Number of Profiles

**Beschreibung:** Legt die Anzahl der Profile pro Choice-Satz fest.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Surveys

**Syntax:** obj &lt;&lt; Set Number of Surveys

**Beschreibung:** Legt die Anzahl der Umfragen für ein Choice-Design fest.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Units

**Syntax:** obj &lt;&lt; Set Number of Units

**Beschreibung:** Legt die Anzahl der Einheiten im Test für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Correlation ALT

**Syntax:** obj &lt;&lt; Set Prior Correlation ALT

**Beschreibung:** Legt die A-priori-Korrelationen für einen Plan eines beschleunigten Lebensdauertests fest.

**JMP Version hinzugefügt:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean ALT

**Syntax:** obj &lt;&lt; Set Prior Mean ALT

**Beschreibung:** Legt den Priormittelwert für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean Choice

**Syntax:** obj &lt;&lt; Set Prior Mean Choice

**Beschreibung:** Legt den Priormittelwert für ein Choice-Design fest.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Prior Quantile ALT

**Syntax:** obj &lt;&lt; Set Prior Quantile ALT

**Beschreibung:** Legt die Informationen zum Angeben des Priorachsenabschnitts basierend auf einem Quantil fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 2 ), Set Prior Quantile ALT( {[1.5 2], 0.065, 2642, 45} ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Std Error ALT

**Syntax:** obj &lt;&lt; Set Prior Std Error ALT

**Beschreibung:** Legt den Priorstandardfehler für einen Plan eines beschleunigten Lebensdauertests fest.

**JMP Version hinzugefügt:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Variance ALT

**Syntax:** obj &lt;&lt; Set Prior Variance ALT

**Beschreibung:** Legt die Priorvarianz für einen Plan eines beschleunigten Lebensdauertests fest.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Variance ALT( [0.1 0 0, 0 0.1 0, 0 0 0.1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Variance Matrix

**Syntax:** obj &lt;&lt; Set Prior Variance Matrix

**Beschreibung:** Legt die Priorvarianzmatrix für ein Choice-Design fest.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set RMSE

**Syntax:** obj &lt;&lt; Set RMSE

**Beschreibung:** Gibt die antizipierte Wurzel der mittleren quadratischen Abweichung (RMSE) in der Power-Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set RMSE( 1.5 );

```

### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed

**Beschreibung:** Nützlich zum Unterrichten. Durch Einstellen des zufälligen Startwerts auf einen spezifischen Wert wird sichergestellt, dass alle Unterrichtsteilnehmer das gleiche Design haben.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Random Seed( 34067086 ),
	Make Design
);

```

### Set Run Order

**Syntax:** obj &lt;&lt; Set Run Order

**Beschreibung:** Gibt an, wie die Reihenfolge der Einzelversuche festgelegt werden soll, wenn eine Datentabelle aus einem Design erzeugt wird.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Set Run Order( Sort Left to Right );
d << Make Table;

```

### Set Runs Per Random Block

**Syntax:** obj &lt;&lt; Set Runs Per Random Block

**Beschreibung:** Gibt die Größe von zufälligen Blöcken im Design an.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Model( Linear )
);
d << Set Runs Per Random Block( 4 );

```

### Set Sample Size

**Syntax:** obj &lt;&lt; Set Sample Size

**Beschreibung:** Gibt die Stichprobengröße vor Erstellung des Designs an. Wenn die angegebene Zahl kleiner als der im Designer angezeigte Minimalwert ist, wird die Stichprobengröße auf den Minimalwert gesetzt.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( Linear );
d << Set Sample Size( 12 );

```

### Set Significance Level

**Syntax:** obj &lt;&lt; Set Significance Level

**Beschreibung:** Signifikanzniveau in Power-Analyse ändern.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set Significance Level( 0.10 );

```

### Set Strength

**Syntax:** obj &lt;&lt; Set Strength

**Beschreibung:** Legt die Stärke für überdeckende Arrays fest

```jsl

d = DOE(
	Covering Array,
	Add factor( Categorical ),
	Add factor( Categorical ),
	Add factor( Categorical )
);
d << Set Strength( 3 );
d << Make Table;

```

### Show Blocking Options

**Syntax:** obj &lt;&lt; Show Blocking Options

**Beschreibung:** Gibt die Blockbildungsauswahl und die Anzahl von Blöcken für ein definitives Screening-Design an. Durch Angabe des Werts 0 geben Sie keine Blöcke an.

#### Beispiel 1

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 )
);

```

#### Beispiel 2

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Simulate Responses

**Syntax:** obj &lt;&lt; Simulate Responses( state=0|1 )

**Beschreibung:** Daten für die Zielgrößen in der JMP-Designtabelle hinzufügen. Nützlich zum Unterrichten von DOE.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Simulate Responses,
	Make Table
);

```

### Solve for Power

**Syntax:** obj &lt;&lt; Solve for Power

**Beschreibung:** Legt die antizipierten Koeffizienten in der Power-Analyse fest, damit die Power nahe dem angegebenen Wert ist.

**JMP Version hinzugefügt:** 16

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Solve for Power( 0.8 )
);

```

### Space Filling Design Type

**Syntax:** obj &lt;&lt; Space Filling Design Type( Sphere Packing|Latin Hypercube|Uniform|Minimum Potential|Maximum Entropy|IMSE Optimal|Fast Flexible Filling )

**Beschreibung:** Gibt den Typ des raumfüllenden Designs und die Anzahl der Einzelversuche an.

#### Beispiel 1

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Sphere Packing, 30 );

```

#### Beispiel 2

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Latin Hypercube, 100 );

```

#### Beispiel 3

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Uniform, 20 );

```

#### Beispiel 4

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Fast Flexible Filling, 100 );

```

#### Beispiel 5

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );
d << Make Design;

```

### Sphere Radius

**Syntax:** obj &lt;&lt; Sphere Radius

**Beschreibung:** Sphärischen Designbereich angeben und dabei den Radius des Bereichs festlegen.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Sphere Radius( 1 ),
	Make Design
);

```

### Split Plot Variance Ratio

**Syntax:** obj &lt;&lt; Split Plot Variance Ratio( Whole Plot Ratio | [Whole Plot Ratio, Subplot Ratio] )

**Beschreibung:** Geben Sie bei schwer änderbaren Faktoren das Verhältnis der Großteilstückfehlervarianz zum Fehler zwischen den einzelnen Ausführungen an. Geben Sie bei schwer und sehr schwer zu ändernden Faktoren das Verhältnis des Großteilstück- und Kleinteilstückfehlers zum Fehler zwischen den einzelnen Ausführungen an.

#### Beispiel 1

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set N Whole Plots( 4 ),
	Split Plot Variance Ratio( 2 ),
	Make Design
);

```

#### Beispiel 2

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Set N Whole Plots( 4 )
);
d << Split Plot Variance Ratio( [3, 2] );
d << Make Design;

```

### Suppress Cotter Designs

**Syntax:** obj &lt;&lt; Suppress Cotter Designs( state=0|1 )

**Beschreibung:** Zeigt Cotter-Designs in der Liste der Screening-Designs an oder blendet sie aus. Diese Option ist standardmäßig ausgewählt, weshalb Cotter-Designs zunächst nicht in der Liste der  Screening-Designs angezeigt werden. Standardmäßig ein.

```jsl

DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Suppress Cotter Designs,
	Make Design( 5 )
);

```

### Table of Correlations

**Syntax:** obj &lt;&lt; Table of Correlations

**Beschreibung:** Eine Datentabelle mit der Tabelle der Korrelationen aus der Design-Diagnose erstellen.

**JMP Version hinzugefügt:** 15

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Table of Correlations
);

```

### Theta

**Syntax:** obj &lt;&lt; Theta

**Beschreibung:** Gibt den Kovarianzparametervektor für raumfüllende Designs an.

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );

```

### Treatments

**Syntax:** obj &lt;&lt; Treatments

**Beschreibung:** Gibt die Anzahl von Behandlungen für ein balanciertes unvollständiges Blockdesign (BIBD) an.

**JMP Version hinzugefügt:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;

```

### Use Bayesian information

**Syntax:** obj &lt;&lt; Use Bayesian information( state=0|1 )

**Beschreibung:** Verwendet Priorinformation in der Bayesschen Einstellung für die Design-Diagnose.

**JMP Version hinzugefügt:** 15

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Number of Starts( 10 ),
	Make Design,
	Use Bayesian Information( 1 )
);

```

### Use Blue to Red color theme for color map

**Syntax:** obj &lt;&lt; Use Blue to Red color theme for color map( state=0|1 )

**Beschreibung:** Verwendet das Farbschema Blau nach Rot für die Farbmatrix bei Korrelationen.

**JMP Version hinzugefügt:** 15

### Use Prior Uncertainty

**Syntax:** obj &lt;&lt; Use Prior Uncertainty( state=0|1 )

**Beschreibung:** Gibt an, ob die A-priori-Unsicherheit zum Erzeugen des optimalen Designs verwendet werden soll.

**JMP Version hinzugefügt:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Utility Neutral Design

**Syntax:** obj &lt;&lt; Utility Neutral Design( state=0|1 )

**Beschreibung:** Gibt an, ob ein nutzenneutrales Choice-Design erstellt werden soll.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 ), Utility Neutral Design( 1 )}
);

```

## Spalten

### Factor

**Syntax:** obj &lt;&lt; Factor( column(s) )

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

### X

**Syntax:** obj &lt;&lt; X( column(s) )

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

## Zugehörige Konstruktoren

### DOE

**Syntax:** DOE

