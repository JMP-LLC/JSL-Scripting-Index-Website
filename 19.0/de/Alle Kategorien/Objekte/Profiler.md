# Profiler



## Elementmeldungen

### Adapt Y Axis

**Syntax:** obj &lt;&lt; Adapt Y Axis( state=0|1 )

**Beschreibung:** Skaliert die vertikale Achse neu, wenn die Zielgröße außerhalb des Achsenbereichs liegt, sodass der Bereich der Zielgröße eingeschlossen ist.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize Desirability;
Wait( 1 );
obj << Adapt Y Axis;

```

### Add Shapley graph scripts to data table

**Syntax:** obj &lt;&lt; Add Shapley graph scripts to data table( state=0|1 )

**Beschreibung:** Fügt die Skripte für die Balkendiagramme der Plattform „Graphik erstellen“ für die Shapley-Werte nach Zeilen für jede Zielgröße dem Modell hinzu.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Add Shapley graph scripts to data table( 1 ),
	Save Shapley Values
));

```

### Animation

**Syntax:** obj &lt;&lt; Animation( &lt;Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )&gt;, &lt;Speed(ticks)&gt;, &lt;Go&gt;, &lt;Stop&gt; )

**Beschreibung:** Startet oder stoppt die Animation des Analysediagramms. Sie können auch festlegen, wie die Animation durch die Faktorenkombinationen läuft.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Animation( Tour Type( "Sequential" ), Go );
Wait( 3 );
obj << Animation( "Stop" );

```

### Append Settings to Table

**Syntax:** obj &lt;&lt; Append Settings to Table

**Beschreibung:** Speichert die Einstellungen des aktuellen Analysediagramms als neue Zeile am Ende der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Append Settings to Table;

```

### Arrange in Rows

**Syntax:** obj &lt;&lt; Arrange in Rows( number )

**Beschreibung:** Gibt die Anzahl von Diagrammen in einer Zeile an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Arrange in Rows( 2 );

```

### Broadcast Factor Settings

**Syntax:** obj &lt;&lt; Broadcast Factor Settings

**Beschreibung:** Sendet die Faktoreinstellungen für das aktuelle Analysediagramm an alle anderen Analysediagramme. Diese Option verknüpft die Analysediagramme nicht.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	Term Value(
		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),
		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),
		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )
	)
);
obj << Contour Profiler( 1 );
Wait( 1 );
obj << Broadcast Factor Settings;

```

### Colorize

**Syntax:** obj &lt;&lt; Colorize( matrix )

**Beschreibung:** Gibt eine Matrix von Anteilen zwischen 0 für ohne farbliche Markierung und 1 für dunkelrot an. Die Zeilen und Spalten der Matrix entsprechen den Y- und X-Variablen im Analysediagramm.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Colorize( [.0 .4 .5, .1 .2 .3, .4 .5 .3, .5 .1 .1] );

```

### Colorize Profiler

**Syntax:** subobj &lt;&lt; Colorize Profiler

**Beschreibung:** Färbt Zellen im Analysediagramm nach den Wichtigkeitsindizes der Gesamteffekte mithilfe einer Rot-nach-Weiß-Intensitätsskala.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Colorize Profiler;

```

### Combinations

**Syntax:** obj &lt;&lt; Combinations( "Gemischt"|"Zweifaktoriell"|"Mehrfaktoriell" )

**Beschreibung:** Gibt den Typ der Wechselwirkungen an, die als überlagerte Wechselwirkungskurven im Analysediagramm angezeigt werden.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Combinations( "Many-Way" );

```

### Compute Shapley values for all rows

**Syntax:** obj &lt;&lt; Compute Shapley values for all rows( state=0|1 )

**Beschreibung:** Berechnet die Shapley-Werte für alle Zeilen in der Datentabelle, ausgeschlossene und nicht ausgeschlossene.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Compute Shapley values for all rows( 1 ),
	Save Shapley Values
));

```

### Conditional Predictions

**Syntax:** obj &lt;&lt; Conditional Predictions( state=0|1 )

**Beschreibung:** Schließt beim Erstellen von Vorhersagen und Analysediagrammen zufällige Effekte ein. Diese Option ist nur beim Charakter „Gemischt anpassen“ der Plattform „Modell anpassen“ verfügbar, wenn zufällige Effekte im Modell enthalten sind.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj1 = dt << Run Script( "Repeated Measures Model" );
obj1 << Profiler( Conditional Predictions( 1 ) );

```

### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( state=0|1 )

**Beschreibung:** Zeigt 95%-Konfidenzintervalle für die simulierten Mittelwerte an den Kurven des Analysediagramms an oder blendet sie aus. Nur verfügbar, wenn im Startfenster eine Std.-Fehler-Formel angegeben ist.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj1 = dt << Run Script( "RSM for 4 Responses" );
obj1 << Prediction Formula;
obj1 << StdErr Pred Formula;
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION 2, :Pred Formula MODULUS 2, :Pred SE ABRASION,
		:Pred SE MODULUS
	)
);
Wait( 1 );
obj << Confidence Intervals( 0 );

```

### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Zeigt die Konturanalyse an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Contour Profiler( 1 );

```

### Converge Limit

**Syntax:** obj &lt;&lt; Converge Limit( number )

**Beschreibung:** Gibt das Kriterium für die Konvergenz für den Optimierungsalgorithmus an. Wenn das Konvergenzkriterium bei zwei aufeinander folgenden Iterationen kleiner als dieser Wert ist, stoppt der Algorithmus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Converge limit( 0.0001 );
obj << Optimize;

```

### Copy Settings Script

**Syntax:** obj &lt;&lt; Copy Settings Script

**Beschreibung:** Kopiert die aktuellen Faktoreinstellungen in die Zwischenablage. Die Einstellungen können dann in ein anderes Analysediagramm eingefügt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Custom Profiler

**Syntax:** obj &lt;&lt; Custom Profiler( state=0|1 )

**Beschreibung:** Zeigt das benutzerdefinierte Analysediagramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Custom Profiler( 1 );

```

### Data Points

**Syntax:** obj &lt;&lt; Data Points( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt die einzelnen Datenpunkte im Diagramm der Vorhersageanalyse. Die Datenpunkte werden schwächer angezeigt, je weiter entfernt sie von der Ebene der einzelnen Analysen sind.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Points( 1 );

```

### Default N Grid Points

**Syntax:** obj &lt;&lt; Default N Grid Points( number )

**Beschreibung:** Legt die Anzahl der Stufen für jeden stetigen Faktor fest.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Default N Grid Points( 5 );

```

### Default N Levels

**Syntax:** obj &lt;&lt; Default N Levels( number )

### Dependent Resampled Inputs

**Syntax:** obj &lt;&lt; Dependent Resampled Inputs( state=0|1 )

**Beschreibung:** Berechnet die Indizes, die bei der Option „Bewertung der Wichtigkeit der Variablen“ durch Ziehen neuer Stichproben in der Datentabelle verwendet werden, wobei davon ausgegangen wird, dass die Inputs abhängig sind.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Dependent Resampled Inputs( 1 );

```

### Design Space

**Syntax:** obj &lt;&lt; Design Space( state=0|1 )

### Design Space Profiler

**Syntax:** obj &lt;&lt; Design Space Profiler( state=0|1 )

**Beschreibung:** Startet die Designraum-Analyse, die die Zuordnung von Spezifikationsgrenzen für die Y-Variablen zu Spezifikationsgrenzen für die X-Variablen unterstützt. Diese Option ist nur verfügbar, wenn es Spezifikationsgrenzen für die Y-Variablen gibt.

```jsl


dt = Open( "$Sample_Data/Tiretread.jmp" );
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property(
	"Spec Limits",
	{LSL( 350 ), USL( 500 ), Show Limits( 1 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Spec Limits",
	{LSL( 65 ), USL( 75 ), Show Limits( 1 )}
);
dt:Pred Formula ABRASION << Set Property(
	"Predicting",
	{:ABRASION, Creator( "Fit Least Squares" ), RMSE( 3 )}
);
dt:Pred Formula MODULUS << Set Property(
	"Predicting",
	{:MODULUS, Creator( "Fit Least Squares" ), RMSE( 100 )}
);
dt:Pred Formula ELONG << Set Property(
	"Predicting",
	{:ELONG, Creator( "Fit Least Squares" ), RMSE( 10 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Predicting",
	{:HARDNESS, Creator( "Fit Least Squares" ), RMSE( .6 )}
);
Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1 ) )
);

```

### Desirability Functions

**Syntax:** obj &lt;&lt; Desirability Functions( state=0|1 )

**Beschreibung:** Zeigt die Wünschbarkeitsfunktionen an oder blendet sie aus, die beim Optimieren über mehrere Zielgrößen nützlich sind.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );

```

### Edit Constraints

**Syntax:** obj &lt;&lt; Edit Constraints

**Beschreibung:** Fügt lineare Nebenbedingungen hinzu, ändert oder löscht sie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Edit Constraints;

```

### Extrapolation Control Option

**Syntax:** obj &lt;&lt; Extrapolation Control Option( "Aus"|"Ein"|"Warnung ein" )

**Beschreibung:** Gibt an, ob die Extrapolationssteuerung ein- oder ausgeschaltet ist oder ob nur Warnungen der Extrapolationssteuerung eingeschaltet sind.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ) );

```

### Extrapolation Details

**Syntax:** obj &lt;&lt; Extrapolation Details( state=0|1 )

**Beschreibung:** Blendet die Details der Extrapolationssteuerung, die die Extrapolationsmetrik des aktuellen Punkts und die Extrapolationsschwelle angeben, ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ), Extrapolation Details( 1 ) );

```

### Extrapolation Type Option

**Syntax:** obj &lt;&lt; Extrapolation Type Option( "Regularisiertes T2"|"K nächste Nachbarn" )

**JMP Version hinzugefügt:** 18

### Formulas for OPTMODEL

**Syntax:** obj &lt;&lt; Formulas for OPTMODEL

**Beschreibung:** Speichert die Vorhersageformeln aus dem Modell in einer neuen Datei als SAS-Anweisungen für PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Formulas for OPTMODEL;

```

### Get Constraints

**Syntax:** obj &lt;&lt; Get Constraints

**Beschreibung:** Gibt eine Liste mit Faktornebenbedingungen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula Y ),
	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), )
);
obj << Get Constraints;

```

### Get Desirability

**Syntax:** obj &lt;&lt; Get Desirability

**Beschreibung:** Gibt die aktuellen Wünschbarkeitseinstellungen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
d = obj << Get Desirability;
Show( d );

```

### Get Factor Settings

**Syntax:** obj &lt;&lt; Get Factor Settings

**Beschreibung:** Gibt die aktuellen Faktoreinstellungen als Liste zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Get Factor Settings;

```

### Get Factor Settings Script

**Syntax:** obj &lt;&lt; Get Factor Settings Script

**Beschreibung:** Gibt die aktuellen Faktoreinstellungen als Ausdruck zurück, der in einem Skript verwendet werden kann.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Get Factor Settings Script;

```

### Get Main Indices

**Syntax:** obj &lt;&lt; Get Main Indices

**Beschreibung:** Speichert die Hauptindizes aus der Analyse der Bewertung der Wichtigkeit der Variablen in einer neuen Datei als SAS-Anweisungen für PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Main Indices;

```

### Get Simulator

**Syntax:** obj &lt;&lt; Get Simulator

**Beschreibung:** Gibt eine Referenz auf den Simulator zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Random Noise( 1 ),
		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )
	)
);
obj2 = obj << Get Simulator;
obj2 << Simulation Experiment;

```

### Get Total Indices

**Syntax:** obj &lt;&lt; Get Total Indices

**Beschreibung:** Speichert die Gesamtindizes aus der Analyse der Bewertung der Wichtigkeit der Variablen in einer neuen Datei als SAS-Anweisungen für PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Total Indices;

```

### Graph Spacing

**Syntax:** obj &lt;&lt; Graph Spacing( number )

**Beschreibung:** Legt den horizontalen Abstand zwischen Graphenbereichen fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Graph Spacing( 20 );

```

### Hide Desirability Row

**Syntax:** obj &lt;&lt; Hide Desirability Row( state=0|1 )

**Beschreibung:** Hides or unhides the row of desirability profiles.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Desirability Functions( 1 );
Wait( 1 );
obj << Hide Desirability Row( 1 );

```

### Hide Y Variables

**Syntax:** obj &lt;&lt; Hide Y Variables( Y columns )

**Beschreibung:** Gibt die Zielgrößenvariablen an, die Sie im Analysediagramm anzeigen oder ausblenden möchten.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 0.5 );
obj << Hide Y Variables( :Pred Formula MODULUS );

```

### Independent Resampled Inputs

**Syntax:** obj &lt;&lt; Independent Resampled Inputs( state=0|1 )

**Beschreibung:** Berechnet die Indizes, die bei der Option „Bewertung der Wichtigkeit der Variablen“ durch Ziehen neuer Stichproben in der Datentabelle verwendet werden, wobei davon ausgegangen wird, dass die Inputs unabhängig sind.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );

```

### Independent Uniform Inputs

**Syntax:** obj &lt;&lt; Independent Uniform Inputs( state=0|1 )

**Beschreibung:** Berechnet die Indizes, die bei der Option „Bewertung der Wichtigkeit der Variablen“ durch Ziehen neuer Stichproben in der Datentabelle verwendet werden, wobei davon ausgegangen wird, dass die Inputs unabhängige Gleichverteilungen haben.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );

```

### Interaction Profiler

**Syntax:** obj &lt;&lt; Interaction Profiler( state=0|1 )

**Beschreibung:** Zeigt eine Wechselwirkungsanalyse für jede Zielgröße an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Interaction Profiler( 1 );

```

### Linearly Constrained Inputs

**Syntax:** obj &lt;&lt; Linearly Constrained Inputs( state=0|1 )

**Beschreibung:** Berechnet die Indizes, die bei der Option „Bewertung der Wichtigkeit der Variablen“ durch Ziehen neuer Stichproben in der Datentabelle aus einer durch die linearen Nebenbedingungen definierten Gleichverteilung entstehen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Script( "Constraint", {1 * :LDL + 1 * :HDL <= 250} );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Linearly Constrained Inputs( 1 );

```

### Link Profilers

**Syntax:** obj &lt;&lt; Link Profilers( state=0|1 )

**Beschreibung:** Verknüpft alle Analysediagramme in einem einzigen Bericht, so dass die Änderung eines Faktors in einem Analysediagramm bewirkt, dass dieser Faktor auch in allen anderen Analysediagrammen geändert wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );
obj << Contour Profiler( 1 );
obj << Link Profilers( 1 );
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Load Constraints from Table

**Syntax:** obj &lt;&lt; Load Constraints from Table

**Beschreibung:** Loads linear constraints from a data table.

```jsl


dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Load Constraints from Table( dtlc );
obj << Profile at Boundary( "Stop at Boundaries" );

```

### Log Iterations

**Syntax:** obj &lt;&lt; Log Iterations( state=0|1 )

**Beschreibung:** Erstellt eine neue Datentabelle, die Iterationen des Optimierungsalgorithmus enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Log Iterations( 1 );
obj << Optimize;

```

### Max Cycles

**Syntax:** obj &lt;&lt; Max Cycles( number )

**Beschreibung:** Gibt die maximale Anzahl von Zyklen innerhalb jedes Durchlaufs im Optimierungsalgorithmus an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Max Cycles( 5 );
obj << Optimize;

```

### MaxIter

**Syntax:** obj &lt;&lt; MaxIter( number )

**Beschreibung:** Gibt die maximale Anzahl von Iterationen innerhalb jedes Durchlaufs im Optimierungsalgorithmus an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << MaxIter( 10 );
obj << Optimize;

```

### Maximize Desirability

**Syntax:** obj &lt;&lt; Maximize Desirability

**Beschreibung:** Legt die aktuellen Faktorwerte fest, um die Wünschbarkeitsfunktionen zu maximieren.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Maximize Desirability;

```

### Maximize and Remember

**Syntax:** obj &lt;&lt; Maximize and Remember

**Beschreibung:** Maximiert die Wünschbarkeitsfunktionen und speichert die zugehörigen Einstellungen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize and Remember;

```

### Maximize for Each Grid Point

**Syntax:** obj &lt;&lt; Maximize for Each Grid Point

**Beschreibung:** Maximiert die Wünschbarkeitsfunktionen für jeden Rasterpunkt, wobei einer oder mehrere Faktoren konstant gehalten werden. Bei dieser Option ist die Sperrung mindestens eines Faktors erforderlich.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
obj << Maximize For Each Grid Point;

```

### Maximum Number of Curves

**Syntax:** obj &lt;&lt; Maximum Number of Curves( number=500 )

**Beschreibung:** Gibt die maximale Anzahl der Kurven an, die angezeigt werden sollen, wenn die Option „Überlagerte Wechselwirkungen“ ausgewählt ist. Wenn die mögliche Gesamtzahl der Kurven größer ist als die angegebene maximale Anzahl von Kurven, wird eine beliebige Stichprobe gezogen. Standardmäßig „500“.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Maximum Number of Curves( 100 );

```

### Optimization Control Panel

**Syntax:** obj &lt;&lt; Optimization Control Panel( state=0|1 )

### Output Grid Table

**Syntax:** obj &lt;&lt; Output Grid Table

**Beschreibung:** Erstellt eine neue Datentabelle mit Spalten für die Faktoren, die Rasterwerte enthalten, Spalten für jede der Zielgrößen mit berechneten Werten an jedem Rasterpunkt und der Wünschbarkeitsberechnung an jedem Rasterpunkt.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Grid Table;

```

### Output Random Table

**Syntax:** obj &lt;&lt; Output Random Table( number of runs,&lt;Add Random Noise&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle mit zufälligen Faktoreinstellungen und Vorhersagewerten über diese Faktoreinstellungen für die angegebene Anzahl von Einzelversuche. Es gibt auch die Option, den Zielgrößen zufälliges Rauschen hinzuzufügen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Random Table( 1000 );

```

### Overlaid Interactions

**Syntax:** obj &lt;&lt; Overlaid Interactions( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt schwächer werdende Kurven in den Diagrammen der Vorhersageanalyse. Die schwächer werdenden Kurven stellen die Analysen für verschiedene Arten von Wechselwirkungen zwischen den Spannweiten der Faktoren dar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );

```

### Paste Settings Script

**Syntax:** obj &lt;&lt; Paste Settings Script

**Beschreibung:** Fügt die Einstellungen des Analysediagramms aus der Zwischenablage in ein Analysediagramm in einem anderen Bericht ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Predict for Another Table

**Syntax:** obj &lt;&lt; Predict for Another Table( &lt;data table&gt; )

**Beschreibung:** Fügt Vorhersagespalten zu einer angegebenen Datentabelle hinzu, wobei die Faktoren in dieser Tabelle verwendet werden. Diese Option ist nur für stetige Zielgrößen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
dt2 = dt << Subset(
	All rows,
	columns( :SILICA, :SILANE, :SULFUR ),
	Output Table( "Subset" )
);
obj << Predict For Another Table( dt2 );

```

### Prediction Intervals

**Syntax:** obj &lt;&lt; Prediction Intervals( state=0|1 )

**Beschreibung:** Blendet die 95%-Vorhersageintervalle ein oder aus, die die Variation bei der Schätzung des Modells und die Variation des Residuenfehlers enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ELONG ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILANE * :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Prediction Intervals( 1 ),
			Desirability Functions( 0 )
		),
		:ELONG << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Effect Summary( 0 )}
	)
);

```

### Prediction Profiler

**Syntax:** obj &lt;&lt; Prediction Profiler( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageanalyse an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );

```

### Profile at Boundary

**Syntax:** obj &lt;&lt; Profile at Boundary( "An Grenzen umkehren"|"An Grenzen stoppen" )

**Beschreibung:** Identifiziert die Methode, wie Grenzen für Faktoren mit Nebenbedingungen gehandhabt werden. Diese Option ist nur bei Vorhersagemodellen mit Mischungsvariablen verfügbar, wenn es eine lineare Nebenbedingung gibt oder wenn die Option „Lineare Nebenbedingungen ändern“ angegeben ist.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Donev Mixture Data.jmp" );
obj1 = Fit Model(
	Y( :Damping ),
	Effects( :CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture ),
	Personality( "Standard Least Squares" ),
	Run Model( 1 )
);
obj1 << Prediction Formula;
obj2 = Profiler( Y( :Pred Formula Damping ) );
Wait( 1 );
obj2 << Profile at Boundary( "Stop at Boundaries" );

```

### Prop of Error Bars

**Syntax:** obj &lt;&lt; Prop of Error Bars( state=0|1 )

**Beschreibung:** Zeigt Fehlerbalken im Analysediagramm an oder blendet sie aus. Diese Option ist nur verfügbar, wenn die Spalte eine Spalteneigenschaft „Sigma“ enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( Sigma, 5 );
:Pred Formula MODULUS << Set Property( Sigma, 100 );
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Prop of Error Bars( 1 );

```

### Remember Settings

**Syntax:** obj &lt;&lt; Remember Settings

**Beschreibung:** Fügt dem Bericht einen Gliederungsknoten mit den Werten der Faktoreinstellungen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Remember Settings;

```

### Remove Profiler

**Syntax:** scobj &lt;&lt; Remove Profiler

**Beschreibung:** Entfernt das Analysediagramm aus dem Plattformbericht. Diese Option ist nur in einer begrenzten Anzahl von Plattformen verfügbar.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
rpt = obj << Report();
rpt["Model Specification"] << Close( 1 );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( Conflict, Satisfaction )
);
scobj = rpt[Outline Box( "Prediction Profiler" )] << Get Scriptable Object();
scobj << Remove Profiler;

```

### Reorder X Variables

**Syntax:** obj &lt;&lt; Reorder X Variables( columns )

**Beschreibung:** Ordnet die Haupteffekte des Modells im Analysediagramm neu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder X Variables( :SULFUR, :SILANE, :SILICA );

```

### Reorder Y Variables

**Syntax:** obj &lt;&lt; Reorder Y Variables( columns )

**Beschreibung:** Ordnet die Zielgrößenvariablen neu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder Y Variables(
	:Pred Formula HARDNESS, :Pred Formula MODULUS, :Pred Formula ELONG
);

```

### Reorder factors by main effect importance

**Syntax:** subobj &lt;&lt; Reorder factors by main effect importance

**Beschreibung:** Ordnet die Zellen in der Vorhersageanalyse entsprechend den Wichtigkeitsindizes für die Haupteffekte neu.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;

```

### Reorder factors by total importance

**Syntax:** subobj &lt;&lt; Reorder factors by total importance

**Beschreibung:** Ordnet die Zellen in der Vorhersageanalyse entsprechend den Gesamtwichtigkeitsindizes für die Faktoren neu.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;
Wait( 1 );
subobj << Reorder factors by total importance;

```

### Reset

**Syntax:** obj &lt;&lt; Reset

**Beschreibung:** Setzt die Wünschbarkeitsfunktionen zurück.

### Reset Factor Grid

**Syntax:** obj &lt;&lt; Reset Factor Grid

### Reset Factors

**Syntax:** obj &lt;&lt; Reset Factors

**Beschreibung:** Öffnet ein Fenster zum Ändern des Faktorrasters.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Reset Factor Grid;

```

### Response Limits

**Syntax:** Pred Y &lt;&lt; Response Limits( {Lower( value, fraction ), Middle( value, fraction ), Upper( value, fraction ), Goal( Minimize|Maximize|Target ), Importance( number )} )

**Beschreibung:** Legt die Einstellungen der Wünschbarkeitsfunktion für eine einzelne Zielgröße sowie die zugehörigen Wünschbarkeitswerte fest.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Pred Formula ABRASION << Response Limits(
		{Lower( 90, 0.9819 ), Middle( 145, 0.5 ), Upper( 200, 0.066 ), Goal( Minimize ),
		Importance( 1 )}
	)
);
obj << Desirability Functions( 1 );

```

### Samples per Factor

**Syntax:** obj &lt;&lt; Samples per Factor( number=6 )

**Beschreibung:** Gibt die Anzahl der Stichprobenwerte an, die für jeden stetigen Faktor bei zweifaktoriellen Wechselwirkungen gezogen werden. Dieser Wert wird für mehrfaktorielle Wechselwirkungen reduziert und wird bedingt durch die maximale Anzahl von Kurven. Standardmäßig „6“.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Samples per Factor( 10 );

```

### Save Bagged Predictions

**Syntax:** obj &lt;&lt; Save Bagged Predictions( nsample, Random Seed(number), Fractional Weights(0|1), Save Prediction Formulas(0|1) )

**Beschreibung:** Verwendet die Bootstrap-Aggregation (Bagging), um Vorhersagen zu machen, und speichert bagged Vorhersagemittelwerte und Standardfehler in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Crossvalidation( No Crossvalidation ),
	Go
);
obj << Profiler( Save Bagged Predictions( 10 ) );

```

### Save Constraints to Script

**Syntax:** obj &lt;&lt; Save Constraints to Script

**Beschreibung:** Speichert vorhandene lineare Nebenbedingungen in einem Tabellenskript genannt „Nebenbedingung“.

```jsl

dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Load Constraints from Table( dtlc );
obj << Save Constraints to Script;

```

### Save Constraints to Table

**Syntax:** obj &lt;&lt; Save Constraints to Table

**Beschreibung:** Saves existing linear constraints to a new data table.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Script(
	"Constraint",
	{1 * :SILICA + 1 * :SULFUR >= 3, 2 * :SILICA + 1 * :SULFUR <= 6}
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Constraints to Table;

```

### Save Desirabilities

**Syntax:** obj &lt;&lt; Save Desirabilities

**Beschreibung:** Speichert die drei Einstellungen der Wünschbarkeitsfunktion für jede Zielgröße sowie die zugehörigen Wünschbarkeitswerte als Spalteneigenschaft „Zielgrößengrenzen“ in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirabilities;

```

### Save Desirability Formula

**Syntax:** obj &lt;&lt; Save Desirability Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel für die kombinierte Wünschbarkeit über die Zielgrößen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirability Formula;

```

### Save Expanded Formulas

**Syntax:** obj &lt;&lt; Save Expanded Formulas

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält aufgelöste Formelreferenzen innerhalb der als Y-Variablen verwendeten Formeln, um die zugrundeliegenden Variablen anzuzeigen. Diese Option ist erst nach Auswahl der Option „Zwischenformeln erweitern“ im Startfenster verfügbar oder wenn die Meldung „Expand“ im Skript für das Analysediagramm angegeben ist.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );
obj << Save Expanded Formulas;

```

### Save Shapley Values

**Syntax:** obj &lt;&lt; Save Shapley Values

**Beschreibung:** Berechnet Shapley-Werte für jede Zeile in der Datentabelle, die nicht ausgeschlossen ist.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Save Shapley Values ));

```

### Sensitivity Indicator

**Syntax:** obj &lt;&lt; Sensitivity Indicator( state=0|1 )

**Beschreibung:** Zeigt ein violettes Dreieck an oder blendet es aus, das dabei helfen kann, empfindliche Zellen in großen Analysediagrammen schnell zu erkennen. Die Höhe und Richtung des Dreiecks entsprechen dem Wert der partiellen Ableitung der Profilfunktion an seinem aktuellen Wert.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Sensitivity Indicator( 1 );

```

### Set Desirabilities

**Syntax:** obj &lt;&lt; Set Desirabilities

**Beschreibung:** Öffnet das Fenster „Optimierungsziel“, in dem Sie spezifische Wünschbarkeitswerte festlegen können.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Set Desirabilities;

```

### Set Script

**Syntax:** obj &lt;&lt; Set Script( Function( {arguments}, &lt;{locals}&gt;, expr ) )

**Beschreibung:** Legt ein Skript fest, das bei jeder Faktoränderung ausgeführt wird.

```jsl

ProfileCallbackLog = Function( {arg}, Show( arg ) );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Set Script( ProfileCallbackLog );
obj << Term Value( :Silica( 1 ) );

```

### Set Threshold Criterion

**Syntax:** obj &lt;&lt; Set Threshold Criterion( Extrapolation Control Criterion( "Num Model Terms / Num Observations " | "Maximum Leverage" ), &lt;multiplier&gt; )

**Beschreibung:** Kann verwendet werden, um den allgemeinen Multiplikator für die Extrapolationsschwelle anzugeben. Alternativ können Sie mit dieser Funktion ein Fenster öffnen, in dem Sie den Multiplikator für die Extrapolationsschwelle anpassen können.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Desirability Functions( 1 ),
	Extrapolation Details( 1 ),
	Extrapolation Control Option( "Warning On" ),
	Set Threshold Criterion( General Extrapolation Control Multiplier( 4 ) )
));

```

### Set to Data in Row

**Syntax:** obj &lt;&lt; Set to Data in Row( row number )

**Beschreibung:** Weist im Analysediagramm die Werte einer Zeile in der Datentabelle den X-Variablen zu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Set to Data in Row( 4 );

```

### Shapley Background Data Choice

**Syntax:** obj &lt;&lt; Shapley Background Data Choice( "Prozent Trainingsdatensatz"|"Anzahl Zeilen Trainingsdatensatz" )

**Beschreibung:** Gibt die Hintergrunddaten in den Shapley-Berechnungen entweder als Prozentsatz der Trainingsdaten oder als Anzahl Zeilen der Trainingsdaten an.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 150 ),
	Save Shapley Values
));

```

### Shapley Number of Permutations

**Syntax:** obj &lt;&lt; Shapley Number of Permutations( number=10 )

**Beschreibung:** Legt die Anzahl der Permutationen für die Berechnung der Shapley-Werte fest. Standardmäßig „10“.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Number of Permutations( 15 ), Save Shapley Values ));

```

### Shapley Number of Rows of Training Data

**Syntax:** obj &lt;&lt; Shapley Number of Rows of Training Data( number=100 )

**Beschreibung:** Legt die Anzahl Zeilen der Trainingsdaten fest, die für die Anpassung des Modells zur Verwendung als Hintergrunddaten in den Shapley-Berechnungen verwendet wurden. Standardmäßig „100“.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 125 ),
	Save Shapley Values
));

```

### Shapley Percent Training Data

**Syntax:** obj &lt;&lt; Shapley Percent Training Data( number=100 )

**Beschreibung:** Legt den Prozentsatz der Trainingsdaten fest, der für die Anpassung des Modells zur Verwendung als Hintergrunddaten in den Shapley-Berechnungen verwendet wurde. Standardmäßig „100“.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Percent training data set ),
	Shapley Percent Training Data( 50 ),
	Save Shapley Values
));

```

### Shapley Set Random Seed

**Syntax:** obj &lt;&lt; Shapley Set Random Seed( number )

**Beschreibung:** Legt einen zufälligen Startwert für die Berechnung der Shapley-Werte fest.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Set Random Seed( 12345 ), Save Shapley Values ));

```

### Show Creator

**Syntax:** obj &lt;&lt; Show Creator( state=0|1 )

**Beschreibung:** Blendet den Namen der Plattform, die die Formel in der Zielgrößenspalte erstellt hat, ein oder aus. Der Plattformname wird in der vertikalen Achse angezeigt. Nur verfügbar, wenn die Zielgrößenspalte ein Argument namens „Herkunft“ in der Spalteneigenschaft „Vorhersage für“ enthält.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
fm = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ),
		Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	)
);

predForm = fm << Save Columns( "Prediction Formula" );

Profiler( Y( predForm ), Show Creator( 1 ) );

```

### Show Formulas

**Syntax:** obj &lt;&lt; Show Formulas

**Beschreibung:** Öffnet ein Skriptfenster, das JSL für alle analysierten Formeln enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Show Formulas;

```

### Simulator

**Syntax:** obj &lt;&lt; Simulator( state=0|1 )

**Beschreibung:** Blendet den Simulator ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Simulator( 1 );

```

### Spanning Range

**Syntax:** obj &lt;&lt; Spanning Range( "Innerer Achsenbereich"|"Voller Achsenbereich"|"Eine Standardabweichung"|"Zwei Standardabweichungen"|"Datenbereich" )

**Beschreibung:** Gibt an, wie der Stichprobenbereich für jeden stetigen Faktor bestimmt wird. Der Stichprobenbereich für jeden Faktor definiert die niedrigsten und höchsten Werte, für die die Wechselwirkungskurven erstellt werden.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Spanning Range( "Two Standard Deviations" );

```

### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Zeigt die Wirkungsflächenanalyse an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Surface Profiler( 1 );

```

### Term Value

**Syntax:** obj &lt;&lt; Term Value( factor( current value, &lt;Lock( 0|1 )&gt;, &lt;Min( number )&gt;, &lt;Max( number)&gt; ) )

**Beschreibung:** Gibt Einstellungen für einzelne Faktoren an, einschließlich dem aktuellen Wert, Sperrzustand und Bereich.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Trips

**Syntax:** obj &lt;&lt; Trips( number )

**Beschreibung:** Gibt die Anzahl der zufälligen Starts im Optimierungsalgorithmus an. Bei jedem Durchlauf wird der Algorithmus an einem anderen Startpunkt neu gestartet.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Trips( 10 );
obj << Optimize;

```

### Unthreaded

**Syntax:** obj &lt;&lt; Unthreaded( state=0|1 )

**Beschreibung:** To suppress any multithreading in evaluating the profile traces, the contour grid, and the optimizer trips.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Unthreaded( 1 );
obj << Maximize Desirability;

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

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
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

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Spalten

### Noise Factors

**Syntax:** obj = Profiler(...&lt;Noise Factors( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt Rauschfaktoren an, bei denen es sich um Spalten handeln muss, die Bestandteile für die Formelspalten enthalten. Rauschfaktoren werden verwendet, um die Robustheit (oder Flachheit) in Bezug auf übertragene Variation durch diese Faktoren zu untersuchen. Das resultierende Analysediagramm umfasst Ableitungen der Formeln in Bezug auf die Rauschfaktoren.

#### Beispiel für ein Analysediagramm

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

#### Beispiel für ein benutzerdefiniertes Analysediagramm

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

#### Beispiel für ein Konturanalysediagramm

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

#### Beispiel für ein Mischungsanalysediagramm

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

### Prediction Formula

**Syntax:** obj = Profiler(...Prediction Formula( column(s) )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Zielgrößenspalten an, die Formeln enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

### Y

**Syntax:** obj = Profiler(...Y( column(s) )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Zielgrößenspalten an, die Formeln enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

## Zugehörige Konstruktoren

### Profiler

**Syntax:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**Beschreibung:** Erzeugt einen interaktiven Graphen, mit dem Sie untersuchen können, wie sich eine vorhergesagte Zielgröße ändert, wenn Sie die Faktoreinstellungen ändern. Bei jedem Faktor zeigt das Analysediagramm Vorhersagespuren an, die auf gespeicherten Vorhersageformeln und linearen Nebenbedingungen basieren und darstellen, wie sich die Zielgröße in Bezug auf den Faktor ändert. Das Argument „Expand“ entspricht der Option „Zwischenformeln erweitern“ im Startfenster.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

#### Beispiel 2

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );
colNum = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );
obj << Close Window( 1 );
predCol = Column( dt, colNum + 1 );
stderrCol = Column( dt, colNum + 2 );
dt << Profiler(
	Y( predCol, stderrCol ),
	Profiler( 1, Confidence Intervals( 1 ), ),
	Use SE Formula( 1 )
);

```

#### Beispiel 3

```jsl

dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

## Design Space Profiler

### Elementmeldungen

#### Connect Hide Mode

**Syntax:** obj &lt;&lt; Connect Hide Mode( state=0|1 )

**Beschreibung:** Bei der verbundenen Tabelle blendet diese Option Punkte, die außerhalb der Grenzen liegen, aus, statt Punkte, die innerhalb der Grenzen liegen, auszuwählen.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Connect Hide Mode( 1 );
dt2 = obj2 << Make and Connect Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Connect to Table

**Syntax:** obj &lt;&lt; Connect to Table( data table )

**Beschreibung:** Verbindet den Design-Space-Analysebericht mit der angegebenen Datentabelle. Die Zeilen, die Faktoren enthalten, die innerhalb der aktuellen unteren und oberen Grenzen liegen, werden in der verbundenen Tabelle ausgewählt.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj << Output Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Connect to Table( dt2 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Get Midpoints from Profiler

**Syntax:** obj &lt;&lt; Get Midpoints from Profiler( fraction )

**Beschreibung:** Ruft die aktuellen Faktoreinstellungen von der Vorhersageanalyse ab und legt die Mittelpunkte für jeden Faktor in der Design-Space-Analyse auf diese Werte fest. Die Grenzen werden um jeden Mittelpunktwert herum mit einem angegebenen Anteil des Faktorbereichs erzeugt.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Get Midpoints from Profiler( 0.5 );

```

#### Lock

**Syntax:** obj &lt;&lt; Lock( Lock(colume name(lock_value),...) )

**Beschreibung:** Locks the continuous factor at the specified value. This lock is temporary.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Lock( Ethanol( 5 ) );

```

#### Make and Connect Random Table

**Syntax:** obj &lt;&lt; Make and Connect Random Table( number, &lt;Add Random Noise( state=0|1 )&gt;, &lt;Embed Factor Space Scatterplots&gt;, &lt;Embed Response Space Scatterplots&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle, die Einstellungen für gleichmäßig verteilte Faktoren und die entsprechenden simulierten Zielgrößen enthält. Es gibt Optionen, um anzugeben, wie die Zielgrößen simuliert werden und ob Zielgrößen- und Faktorstreudiagramme in den Bericht eingebettet werden sollen. Die Zeilenauswahl in der Datentabelle ist mit den Analysediagrammen im Bericht verknüpft.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj2 << Make and Connect Random Table(
	10000,
	Add Random Noise( 1 ),
	Embed Factor Space Scatterplots
);
Wait( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Move Corner Inward

**Syntax:** obj &lt;&lt; Move Corner Inward

#### Move Corner Outward

**Syntax:** obj &lt;&lt; Move Corner Outward

#### Move Inward

**Syntax:** obj &lt;&lt; Move Inward( &lt;number=1&gt; )

**Beschreibung:** Findet die Spezifikationsgrenze mit dem steilsten Pfad nach oben und verschiebt diese Spezifikationsgrenze nach innen. Mit dem optionalen Argument number können Sie angeben, wie häufig dieser Vorgang durchgeführt wird.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Move Inward( 4 );
Wait( 2 );
obj2 << Move Outward;

```

#### Move Outward

**Syntax:** obj &lt;&lt; Move Outward( &lt;number=1&gt; )

**Beschreibung:** Findet die Spezifikationsgrenze mit dem am wenigsten steilen Pfad nach unten und verschiebt diese Spezifikationsgrenze nach außen. Mit dem optionalen Argument number können Sie angeben, wie häufig dieser Vorgang durchgeführt wird.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Move Outward( 2 );
Wait( 2 );
obj2 << Move Outward;

```

#### Reset Factor Space

**Syntax:** obj &lt;&lt; Reset Factor Space( factor1( lower, upper ), factor2( lower, upper ), ... )

**Beschreibung:** Ändert den Faktorraum, um den Bereich von einem oder mehreren Faktoren zu verkleinern, zu erweitern oder zu verschieben. Wenn die Intervalle der Grenzen zu klein sind, kann dies zu einem Volumen mit kleinen Grenzen und ungenauen simulationsbasierten Schätzwerten führen.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
Wait( 1 );
obj2 << Reset Factor Space(
	Butanol( -0.275, 11 ),
	Ethanol( -0.25, 10.25 ),
	Methanol( -0.25, 10.25 ),
	Propanol( -0.25, 10.25 ),
	Time( 0.95, 3 )
);

```

#### Save Simulation Table

**Syntax:** obj &lt;&lt; Save Simulation Table( state=0|1 )

#### Save X Spec Limits

**Syntax:** obj &lt;&lt; Save X Spec Limits

**Beschreibung:** Speichert die aktuellen X-Spezifikationsgrenzen als Spalteneigenschaften.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Save X Spec Limits;

```

#### Send Limits to Profiler as Constraints

**Syntax:** obj &lt;&lt; Send Limits to Profiler as Constraints

**Beschreibung:** Sendet die aktuellen X-Grenzen als Nebenbedingungen für die Schranken an das Analysediagramm.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Profiler as Constraints;

```

#### Send Limits to Simulator

**Syntax:** obj &lt;&lt; Send Limits to Simulator( "Uniform" | "Normal with limits at 2 sigma" | "Normal with limits at 3 sigma" | "Normal weighted with limits at 2 sigma" | "Normal weighted with limits at 3 sigma" )

**Beschreibung:** Sendet die aktuellen X-Grenzen an den Simulator als Parameter für eine angegebene Verteilung. Sendet auch die Fehler-Std.-Abw.-Werte für jede Zielgröße als die Standardabweichung für hinzugefügtes zufälliges Rauschen.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Simulator( "Normal with Limits at 3 Sigma" );

```

#### Send Midpoints to Profiler

**Syntax:** obj &lt;&lt; Send Midpoints to Profiler

**Beschreibung:** Sendet die Mittelpunkte für die aktuellen X-Grenzen an die Analyse.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Midpoints to Profiler;

```

#### Set Limits

**Syntax:** obj &lt;&lt; Set Limits( Set Limits(colume name(lower limit,upper limit),...) )

**Beschreibung:** Legt die Faktorgrenzen mithilfe eines Skripts fest.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Show Corners

**Syntax:** obj &lt;&lt; Show Corners( state=0|1 )

**Beschreibung:** Blendet den Bericht „Ecken“ ein oder aus. Dieser Bericht enthält eine Tabelle mit den Wahrscheinlichkeiten für die Einhaltung der Spezifikation an den Extremen des Faktorraums. Die Wahrscheinlichkeiten werden anhand einer Normalverteilung berechnet, die bei den Vorhersagewerten zentriert ist und an den Spezifikationsgrenzen beschnitten wird.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Corners;

```

#### Show Current Profiler Values

**Syntax:** obj &lt;&lt; Show Current Profiler Values( state=0|1 )

**Beschreibung:** Zeigt den aktuellen Wert aus dem Analysediagramm als vertikale graue, spärlich gepunktete Linie an.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Current Profiler Values( 1 );

```

#### Show Impact Ratios

**Syntax:** obj &lt;&lt; Show Impact Ratios( state=0|1 )

**Beschreibung:** Shows or hides the impact ratios. These ratios show how sensitive changes in each factor, from midpoint to each limit, affect how far the predictions are from their specification limits.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Impact Ratios;

```

#### Show Portion for Each Response

**Syntax:** obj &lt;&lt; Show Portion for Each Response( state=0|1 )

**Beschreibung:** Fügt eine Spalte hinzu, die den In-Spezifikationsanteil für jede Zielgröße bei den aktuellen X-Grenzen enthält.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 26 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.1 )} )
);
New Column( "Pred Formula Impurities",
	Numeric,
	Continuous,
	Formula(
		0.3 + -0.08 * :Ethanol + 0.06 * :Propanol + 0.12 * :Time + 0.06 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {USL( 1 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 24642 ), Std Dev( 0.2 )} )
);
obj = Profiler( Y( :Pred Formula Yield, :Pred Formula Impurities ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Portion for Each Response( 1 );
obj2 << Set Limits( Methanol( 5, 10 ), Propanol( 0, 5 ) );

```

### Zugehörige Konstruktoren

#### Design Space Profiler

**Syntax:** Design Space Profiler

**Beschreibung:** Startet die Designraum-Analyse, die die Zuordnung von Spezifikationsgrenzen für die Y-Variablen zu Spezifikationsgrenzen für die X-Variablen unterstützt. Diese Option ist nur verfügbar, wenn es Spezifikationsgrenzen für die Y-Variablen gibt.

```jsl


Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );

```

## Simulator

### Elementmeldungen

#### Automatic Histogram Update

**Syntax:** simuobj &lt;&lt; Automatic Historgram Update( state=0|1 )

**Beschreibung:** Aktualisiert das Histogramm mit neuen simulierten Werten, wenn sich die Verteilungen der Faktoren ändern.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Simulate
);
simobj = obj << Get Simulator;
simobj << Automatic Histogram Update( 1 );
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

#### Defect Parametric Profile

**Syntax:** simobj &lt;&lt; Defect Parametric Profile( state=0|1 )

**Beschreibung:** Zeichnet die mittlere Defektrate in Abhängigkeit von den Verteilungsparametern. Diese Option ist nur verfügbar, nachdem das Analysediagramm der Defektraten ausgewählt wurde.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

simobj = obj << Get Simulator;
simobj << Defect Parametric Profile( 1 );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Defect Parametric Profile( 1 ),
		Simulate
	)
);

```

#### Defect Profiler

**Syntax:** simobj &lt;&lt; Defect Profiler( state=0|1 )

**Beschreibung:** Zeigt die Defektrate als isolierte Funktion jedes Faktors an. Diese Option ist nur verfügbar, wenn die Spezifikationsgrenzen definiert sind.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Simulate
	)
);
simobj = obj << Get Simulator;
simobj << Defect Profiler( 1 );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

```

#### N Runs

**Syntax:** obj &lt;&lt; Simulator( N Runs(number=1000) )

**Beschreibung:** Legt die Anzahl der Ausführungen für die Simulation fest. Standardmäßig „10000“.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( N Runs( 2500 ), Simulate );

```

#### Resimulate

**Syntax:** simobj &lt;&lt; Resimulate

**Beschreibung:** Führt die Simulation erneut aus. Diese Option ist nützlich, nachdem Änderungen an den Verteilungen der Faktoren vorgenommen wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
simobj = obj << Get Simulator;
simobj << Resimulate;

```

#### Set Random Seed

**Syntax:** obj &lt;&lt; Simulator( Set Random Seed( number ) )

**Beschreibung:** Legt für den zufälligen Startwert einen spezifischen Wert fest, um sicherzustellen, dass alle nachfolgenden Berechnungen den gleichen Startwert verwenden und reproduzierbar sind.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( Set Random Seed( 1234 ), Simulate );

```

#### Simulate to table

**Syntax:** simobj &lt;&lt; Simulate To Table(N Runs(n),factorName&lt;&lt;Sequence Location(low,high,nSteps),factorName2&lt;&lt;Sequence Spread(low,high,nSteps),factorName3&lt;&lt;Not Sequenced)

**Beschreibung:** Erstellt eine Tabelle mit Simulationsergebnissen, sequenziert über unterschiedliche Mittelwerte oder Streuungen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
simobj = obj << Get Simulator;
simobj << Simulate to table(
	N Runs( 20 ),
	SILICA << Sequence Location( .5, 2, 4 ),
	SILANE << Sequence Location( 35, 65, 4 ),
	SULFUR << Sequence Location( 1.5, 3, 4 )
);

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
obj << Simulator(
	Simulate to table(
		N Runs( 20 ),
		SILICA << Sequence Location( .5, 2, 4 ),
		SILANE << Sequence Location( 35, 65, 4 ),
		SULFUR << Sequence Location( 1.5, 3, 4 )
	)
);

```

#### Simulation Experiment

**Syntax:** simobj &lt;&lt; Simulation Experiment( NRun(number of experimental runs=128), Portion(factor space portion=1),NSim(number of simulations per experimental run=10000),&lt;Run&gt;,&lt;Selected Factors(factor1,..)&gt; )

**Beschreibung:** Führt ein geplantes Simulationsexperiment basierend auf den Lagen der Faktorverteilungen im Modell durch.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
simobj = obj << Get Simulator;
simobj << Simulation Experiment( NRun( 100 ), Portion( 0.6 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
obj << Simulator( Simulation Experiment( NRun( 128 ), NSim( 20000 ), Portion( 1.0 ), Run ) );

```

#### X Correlations

**Syntax:** obj &lt;&lt; Simulator( X Correlations( state=0|1, {factor1, factor2, ..., factorN}, [NxN correlations] ) )

**Beschreibung:** Legt die Korrelationen der X-Faktoren fest, wenn für die Simulationseinstellung der Faktoren „Multivariat“ festgelegt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Multivariate( 1.2, 0.3266 ), SILANE << Multivariate( 50, 6.532 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	X Correlations( 1, {SILICA, SILANE, SULFUR}, [1 0.3 0, 0.3 1 0, 0 0 1] ),
	Simulate
);

```

#### Y Correlations

**Syntax:** obj &lt;&lt; Simulator( Y Correlations( state=0|1, {response1, response2, ..., responseN}, [NxN correlations] ) )

**Beschreibung:** Legt die Korrelationen der Y-Zielgrößen fest, wenn den Zielgrößen multivariates Rauschen hinzugefügt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << Add Multivariate Noise( 1 ),
		Pred Formula MODULUS << No Noise, Pred Formula ELONG << Add Multivariate Noise( 1 ),
		Pred Formula HARDNESS << No Noise
	),
	Y Correlations(
		1,
		{Pred Formula ABRASION, Pred Formula MODULUS, Pred Formula ELONG,
		Pred Formula HARDNESS},
		[1 0.15 0.27 0, 0.15 1 0 0, 0.27 0 1 0, 0 0 0 1]
	),
	Simulate
);

```

### Zugehörige Konstruktoren

#### Simulator

**Syntax:** obj &lt;&lt; Simulator( state=0|1, &lt;Factors( column &lt;&lt; Random( )|Fixed( constant )| Expression( )| Multivariate( ) )&gt;, &lt;Responses( column &lt;&lt; No Noise| Add Random Noise| Add Random Weighted Noise| Add Multivariate Noise ) )&gt;

**Beschreibung:** Startet den Simulator.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);

```

