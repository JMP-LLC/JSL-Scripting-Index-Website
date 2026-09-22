# Structural Equation Models



## Elementmeldungen

### Add Manifest Variables

**Syntax:** obj &lt;&lt; Add Manifest Variables

**Beschreibung:** Startet die Plattform mit der vorhandenen Modellspezifikation neu und schließt die neu hinzugefügten manifesten Variablen ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );obj << Add Manifest Variables();

```

### Bootstrap Inference

**Syntax:** obj &lt;&lt; Bootstrap Inference

**Beschreibung:** Führt den Bootstrap-Vorgang für eine benutzerdefinierte Auswahl von Schätzungen in verfügbaren angepassten Modellen des SEM-Berichts durch.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Bootstrap Inference( Parameter Estimates( 1 ), Indirect Effects( 1 ) );

```

### Compare Selected Models

**Syntax:** obj &lt;&lt; Compare Selected Models

**Beschreibung:** Vergleicht in der Modellvergleichstabelle ausgewählte Modelle.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Measurement Models" );obj << Compare Selected Models( {"Orthogonal 3-Factor CFA", "3-Factor CFA"} );

```

### Copy Diagram Properties

**Syntax:** obj &lt;&lt; Copy Diagram Properties

**Beschreibung:** Kopiert die Eigenschaften des aktuellen Pfaddiagramms in die Zwischenablage. Sie können dann die Eigenschaften in ein anderes SEM-Pfaddiagramm einfügen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );obj << Copy Diagram Properties();obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**Syntax:** obj &lt;&lt; Copy Model Specification

**Beschreibung:** Kopiert die aktuellen Spezifikationen des Strukturgleichungsmodells in die Zwischenablage. Sie können dann die Modellspezifikationen in einen anderen SEM-Plattformbericht einfügen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Path Analysis no Latent" );obj << Copy Model Specification();obj2 = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg ));obj2 << Paste Model Specification();

```

### Estimation Method

**Syntax:** obj = Structural Equation Models(...Estimation Method( "Maximum-Likelihood (ML und FIML)"|"Maximum-Likelihood mit robuster Inferenz"|"MIIV Zweistufige kleinste Quadrate" )...)

**Beschreibung:** Ermöglicht die Verwendung verschiedener Schätzer für die Analyse.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Estimation Method( "MIIV Two-Stage Least Squares" ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Goal_L, :Work_L, :Interact_L, "Leader"}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 ),		Assess Measurement Model( 1 )	));

```

### Fit

**Syntax:** obj &lt;&lt; Fit

**Beschreibung:** Ermöglicht die Anpassung des Strukturgleichungsmodells.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		)	));

```

### Fit Independence Model

**Syntax:** obj = Structural Equation Models(...Fit Independence Model( state=0|1 )...)

**Beschreibung:** Deaktiviert die Anpassung des Unabhängigkeitsmodells beim Starten der Plattform. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit Independence Model( 0 ));

```

### Fit Unrestricted Model

**Syntax:** obj &lt;&lt; Fit Unrestricted Model( state=0|1 )

**Beschreibung:** Deaktiviert die Anpassung des uneingeschränkten Modells, auch gesättigtes Modell genannt, beim Starten der Plattform.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit Unrestricted Model( 0 ));

```

### Full Information Multivariate Statistics

**Syntax:** obj &lt;&lt; Full Information Multivariate Statistics( state=0|1 )

**Beschreibung:** Blendet einen Bericht multivariater einfacher Kenngrößen ein oder aus, bei dem die Kenngrößen mittels Maximum-Likelihood mit vollständigen Informationen geschätzt werden, um fehlende Werte zu berücksichtigen.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));obj << Full Information Multivariate Statistics( 1 );

```

### Generate R Code

**Syntax:** obj &lt;&lt; Generate R Code

**Beschreibung:** Generiert R-Code für das aktuell angegebene Modell. Der Code wird in ein Skripteditor-Fenster geschrieben.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Path Analysis no Latent" );obj << Generate R Code();

```

### Hide Model

**Syntax:** obj &lt;&lt; Hide Model

**Beschreibung:** Blendet Modelle entsprechend der Auswahl in der Modellvergleichstabelle aus.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		)	),	Hide Model( {3} ));

```

### Launch Explore Missing Values

**Syntax:** obj &lt;&lt; Launch Explore Missing Values

**Beschreibung:** Startet die Plattform „Fehlende Werte untersuchen“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));obj << Launch Explore Missing Values( 1 );

```

### Launch Explore Outliers

**Syntax:** obj &lt;&lt; Launch Explore Outliers

**Beschreibung:** Startet die Plattform „Ausreißer untersuchen“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));obj << Launch Explore Outliers( 1 );

```

### Model Specification

**Syntax:** obj &lt;&lt; Model Specification

**Beschreibung:** Ermöglicht die Spezifikation eines Strukturgleichungsmodells.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Model Name( "Means and Variances Model" ),		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

### Paste Diagram Properties

**Syntax:** obj &lt;&lt; Paste Diagram Properties

**Beschreibung:** Fügt die Eigenschaften des Pfaddiagramms aus der Zwischenablage in das aktuelle SEM-Pfaddiagramm ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );obj << Copy Diagram Properties();obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );obj2 << Paste Diagram Properties();

```

### Paste Model Specification

**Syntax:** obj &lt;&lt; Paste Model Specification

**Beschreibung:** Fügt die Modellspezifikationen aus der Zwischenablage in die aktuellen Modellspezifikationen ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Path Analysis no Latent" );obj << Copy Model Specification();obj2 = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg ));obj2 << Paste Model Specification();

```

### Path Diagram Properties

**Syntax:** obj &lt;&lt; Path Diagram Properties

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Linear Growth Model" ),		New Latent( "Intercept", "Slope" ),		Means( {"Constant", {"Intercept", "Slope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}}		),		Covariances( {"Intercept", {"Slope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));

```

### Remove Manifest Variables

**Syntax:** obj &lt;&lt; Remove Manifest Variables

**Beschreibung:** Startet die Plattform mit der vorhandenen Modellspezifikation neu, jedoch ohne die entfernten manifesten Variablen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );obj << Remove Manifest Variables();

```

### Reset Independence Model

**Syntax:** obj &lt;&lt; Reset Independence Model

**Beschreibung:** Ersetzt ein benutzerspezifisches Unabhängigkeitsmodell durch das Standardmodell.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Run Script( "SEM: Compare Growth Trajectories" );obj << Set as Independence Model( 2 );obj << Reset Independence Model();

```

### Robust Inference

**Syntax:** obj &lt;&lt; Robust Inference( state=0|1 )

**Beschreibung:** Berechnet Sandwich-Standardfehler für die ML- oder FIML-Parameterschätzer und die Kenngrößen der robusten Anpassung. Diese Option wird für nicht normalverteilte Ergebnisse verwendet, bei denen eine stetige zugrunde liegende Verteilung angenommen wird.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Robust Inference( 1 );

```

### Set as Independence Model

**Syntax:** obj &lt;&lt; Set as Independence Model( number )

**Beschreibung:** Ersetzt das Standard-Unabhängigkeitsmodell durch ein benutzerspezifisches Modell.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Run Script( "SEM: Compare Growth Trajectories" );obj << Set as Independence Model( 2 );

```

### Standardize Latent Variables

**Syntax:** obj = Structural Equation Models(...Standardize Latent Variables( state=0|1 )...)

**Beschreibung:** Legt die Varianz der latenten Variablen bei der Spezifikation auf 1.

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Standardize Latent Variables( 1 ));

```

### Univariate Simple Statistics

**Syntax:** obj &lt;&lt; Univariate Simple Statistics( state=0|1 )

**Beschreibung:** Blendet einen Bericht mit univariaten einfachen Kenngrößen ein oder aus, wobei die Kenngrößen für jede Spalte unabhängig von den anderen Spalten, die möglicherweise fehlende Werte enthalten, berechnet werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));obj << Univariate Simple Statistics( 1 );

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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = Structural Equation Models(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	Freq( :_freqcol ));

```

### Groups

**Syntax:** obj &lt;&lt; Groups( column )

**Beschreibung:** Gibt die Gruppierungsvariable für die Analyse mehrerer Gruppen an.

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );dt << Structural Equation Models( Model Variables( 4 :: 7 ), Groups( :Sex ) );

```

### Mean

**Syntax:** obj = Structural Equation Models(...&lt;Mean( column )&gt;...)

**Beschreibung:** Gibt Mittelwerte für jede manifeste Variable in einer Korrelations- oder Kovarianzmatrix an.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );mat = dt[0, 2 :: 5];mat_cor = Correlation( mat );mat_means = V Mean( mat );mat_sds = V Std( mat );As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );Data Table( "Correlation" ) << Structural Equation Models(	Data Format( "Matrix" ),	Model Variables( 1 :: 4 ),	Mean( :Col5 ),	Std Dev( :Col6 ),	Sample Size( 200 ));

```

### Model Variables

**Syntax:** obj &lt;&lt; Model Variables( column(s) )

**Beschreibung:** Gibt die Variablen an, die für die Analyse verwendet werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));

```

### Std Dev

**Syntax:** obj = Structural Equation Models(...&lt;Std Dev( column )&gt;...)

**Beschreibung:** Gibt Standardabweichungen für jede manifeste Variable in einer Korrelationsmatrix an.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );mat = dt[0, 2 :: 5];mat_cor = Correlation( mat );mat_means = V Mean( mat );mat_sds = V Std( mat );As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );Data Table( "Correlation" ) << Structural Equation Models(	Data Format( "Matrix" ),	Model Variables( 1 :: 4 ),	Mean( :Col5 ),	Std Dev( :Col6 ),	Sample Size( 200 ));

```

### Weight

**Syntax:** obj &lt;&lt; Weight( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	),	Weight( :_weightcol ));

```

## Zugehörige Konstruktoren

### Structural Equation Models

**Syntax:** Structural Equation Models( Model Variables ( columns ) )

**Beschreibung:** Bietet einen Rahmen, um eine Vielfalt an Modellen anzupassen, u.a. konfirmatorische Faktoranalyse, Pfadmodelle mit oder ohne latente Variablen, Messfehlermodelle und latente Wachstumskurvenmodelle.

**JMP Version hinzugefügt:** 15

#### Einfache lineare Regression mit SEM

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Satisfaction_Avg ),	Fit(		Model Name( "Simple Regression" ),		Means( {"Constant", {:Leadership_Avg, :Satisfaction_Avg}} ),		Regressions( {:Leadership_Avg, {:Satisfaction_Avg}} ),		Variances(			{:Leadership_Avg, {:Leadership_Avg}},			{:Satisfaction_Avg, {:Satisfaction_Avg}}		)	));

```

#### Einfaches Mediationsmodell

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg ),	Fit(		Model Name( "Mediation Analysis" ),		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg}} ),		Regressions(			{:Leadership_Avg, {:Conflict_Avg, :Satisfaction_Avg}},			{:Conflict_Avg, {:Satisfaction_Avg}}		),		Variances(			{:Leadership_Avg, {:Leadership_Avg}},			{:Conflict_Avg, {:Conflict_Avg}},			{:Satisfaction_Avg, {:Satisfaction_Avg}}		)	));

```

#### Konfirmatorische Faktorenanalyse

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));

```

#### Konfirmatorische Faktorenanalyse höherer Ordnung

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables(		:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S,		:Growth_S, :Coworker_S, :Supervisor_S	),	Fit(		Model Name( "Higher Order CFA" ),		New Latent( "Leadership", "Conflict", "Satisfaction", "General" ),		Means(			{"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C,			:Inter_C, :General_S, :Growth_S, :Coworker_S, :Supervisor_S}}		),		Loadings(			{"Leadership", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}},			{"Conflict", {:Person_C, :Intra_C, :Inter_C}, {1}},			{"Satisfaction", {:General_S, :Growth_S, :Coworker_S, :Supervisor_S}, {1}},			{"General", {"Leadership", "Conflict", "Satisfaction"}, {1}}		),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{:Person_C, {:Person_C}},			{:Intra_C, {:Intra_C}},			{:Inter_C, {:Inter_C}},			{:General_S, {:General_S}},			{:Growth_S, {:Growth_S}},			{:Coworker_S, {:Coworker_S}},			{:Supervisor_S, {:Supervisor_S}},			{"Leadership", {"Leadership"}},			{"Conflict", {"Conflict"}},			{"Satisfaction", {"Satisfaction"}},			{"General", {"General"}}		)	));

```

#### Lineares latentes Wachstumskurvenmodell

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Linear Growth Curve Model" ),		New Latent( "Intercept", "Slope" ),		Means( {"Constant", {"Intercept", "Slope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}}		),		Covariances( {"Intercept", {"Slope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));

```

#### Multiple lineare Regression mit SEM

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables( :Satisfaction_Avg, :Support_L, :Goal_L, :Work_L ),	Fit(		Model Name( "Multiple Regression" ),		Means( {"Constant", {:Satisfaction_Avg, :Support_L, :Goal_L, :Work_L}} ),		Regressions(			{:Support_L, {:Satisfaction_Avg}},			{:Goal_L, {:Satisfaction_Avg}},			{:Work_L, {:Satisfaction_Avg}}		),		Variances(			{:Satisfaction_Avg, {:Satisfaction_Avg}},			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}}		),		Covariances( {:Support_L, {:Goal_L, :Work_L}}, {:Goal_L, {:Work_L}} ),	));

```

#### Pfadanalyse mit latenten Variablen

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables(		:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S,		:Growth_S, :Coworker_S, :Supervisor_S	),	Fit(		Model Name( "Path Analysis with Latent Variables" ),		New Latent( "Leadership", "Conflict", "Satisfaction" ),		Means(			{"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C,			:Inter_C, :General_S, :Growth_S, :Coworker_S, :Supervisor_S}}		),		Loadings(			{"Leadership", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}},			{"Conflict", {:Person_C, :Intra_C, :Inter_C}, {1}},			{"Satisfaction", {:General_S, :Growth_S, :Coworker_S, :Supervisor_S}, {1}}		),		Regressions(			{"Leadership", {"Conflict", "Satisfaction"}},			{"Conflict", {"Satisfaction"}}		),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{:Person_C, {:Person_C}},			{:Intra_C, {:Intra_C}},			{:Inter_C, {:Inter_C}},			{:General_S, {:General_S}},			{:Growth_S, {:Growth_S}},			{:Coworker_S, {:Coworker_S}},			{:Supervisor_S, {:Supervisor_S}},			{"Leadership", {"Leadership"}},			{"Conflict", {"Conflict"}},			{"Satisfaction", {"Satisfaction"}}		)	));

```

#### Pfadanalysemodell

```jsl

dt = Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );dt << Structural Equation Models(	Model Variables( :Privacy, :Reputation, :Trust, :Purchase Int ),	Fit(		Model Name( "Path Analysis with Observed Variables" ),		Means( {"Constant", {:Privacy, :Reputation, :Trust, :Purchase Int}} ),		Regressions(			{:Privacy, {:Trust}},			{:Reputation, {:Trust, :Purchase Int}},			{:Trust, {:Purchase Int}}		),		Variances(			{:Privacy, {:Privacy}},			{:Reputation, {:Reputation}},			{:Trust, {:Trust}},			{:Purchase Int, {:Purchase Int}}		),		Covariances( {:Privacy, {:Reputation}} )	));

```

#### Quadratisches latentes Wachstumskurvenmodell

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Quadratic Growth Model" ),		New Latent( "Intercept", "Slope", "QuadSlope" ),		Means( {"Constant", {"Intercept", "Slope", "QuadSlope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}},			{"QuadSlope", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 4, 9}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}},			{:Multiple Choice Year2, {:Multiple Choice Year2}},			{:Multiple Choice Year3, {:Multiple Choice Year3}},			{:Multiple Choice Year4, {:Multiple Choice Year4}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}},			{"QuadSlope", {"QuadSlope"}}		),		Covariances( {"Intercept", {"Slope", "QuadSlope"}}, {"Slope", {"QuadSlope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));

```

## Structural Equation Models Fit > Structural Equation Models Equation Details

### Elementmeldungen

#### Composite Error

**Syntax:** obj &lt;&lt; Composite Error( state=0|1 )

**Beschreibung:** Zeigt den zusammengesetzten Fehler der Gleichungen der im Modell enthaltenen instrumentellen Variablen mit zweistufigen kleinsten Quadraten an oder blendet ihn aus.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA\Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989) MIIV-2SLS Estimator" );obj << Equation Details( Composite Error( 1 ) );

```

#### Show All Equations

**Syntax:** obj &lt;&lt; Show All Equations( state=0|1 )

**Beschreibung:** Zeigt Gleichungen im Modell an oder blendet sie aus, die nur die Konstante als Prädiktor haben.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA\Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989) MIIV-2SLS Estimator" );obj << Equation Details( Show All Equations( 1 ) );

```

#### Variance of the Error

**Syntax:** obj &lt;&lt; Variance of the Error( state=0|1 )

**Beschreibung:** Zeigt die Varianz des Fehlers für jede Gleichung im Modell an oder blendet sie aus.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA\Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989) MIIV-2SLS Estimator" );obj << Equation Details( Variance of the Error( 1 ) );

```

## Structural Equation Models Fit > Structural Equation Models Remove Effects

### Elementmeldungen

#### Remove Effects

**Syntax:** obj &lt;&lt; Remove Effects

**Beschreibung:** Entfernt bestimmte indirekte Effekte aus dem Bericht.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA\Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Path Analysis no Latent" );obj << Specific Indirect Effects( {"Leadership_Avg", "Satisfaction_Avg"} );rpt = obj << Report();scrobj = rpt[Outline Box( "Specific Indirect Effects" )] << Get Scriptable Object();scrobj << Remove Effects( 1 );

```

## Structural Equation Models Fit

### Elementmeldungen

#### All Modification Indices

**Syntax:** obj &lt;&lt; All Modification Indices( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Schätzer von Modifikationsindizes des Modells enthält. Diese Werte können verwendet werden, um zu bestimmen, welche Parameter dem Modell hinzugefügt werden können, um die Modellanpassung zu verbessern.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Modification Indices( 1 );

```

#### Assess Measurement Model

**Syntax:** obj &lt;&lt; Assess Measurement Model( state=0|1 )

**Beschreibung:** Blendet eine Vielzahl von statistischen Kenngrößen zum Quantifizieren der Zuverlässigkeit und Gültigkeit von Tests und Messungen ein oder blendet sie aus, einschließlich Indikatorreliabilität, Koeffizienten-Omega und H und eine Konstruktvaliditätsmatrix.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Measurement Models" );obj << Assess Measurement Model( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( state=0|1 )

**Beschreibung:** Blendet 95% Konfidenzintervalle für alle Parameterschätzer ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Confidence Intervals( 1 );

```

#### Copy Diagram Properties

**Syntax:** obj &lt;&lt; Copy Diagram Properties

**Beschreibung:** Kopiert die Eigenschaften des aktuellen Pfaddiagramms in die Zwischenablage. Sie können dann die Eigenschaften in ein anderes SEM-Pfaddiagramm einfügen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );obj << Copy Diagram Properties();obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );obj2 << Paste Diagram Properties();

```

#### Copy Model Specification

**Syntax:** obj &lt;&lt; Copy Model Specification

**Beschreibung:** Kopiert die aktuellen Spezifikationen des Strukturgleichungsmodells in die Zwischenablage. Sie können dann die Modellspezifikationen in einen anderen SEM-Plattformbericht einfügen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );obj << (Fit[1] << Copy Model Specification());obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );obj2 << Paste Model Specification();

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Kovarianzmatrix der Parameterschätzwerte für das Modell enthält.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Correlation of Estimates( 1 );

```

#### Correlation of Estimates Heat Map

**Syntax:** obj &lt;&lt; Correlation of Estimates Heat Map( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Heatmap der Korrelationen zwischen den Schätzwerten des Modells enthält.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Correlation of Estimates Heat Map( 1 );

```

#### Covariance of Estimates

**Syntax:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Kovarianzmatrix der Parameterschätzwerte für das Modell enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Covariance of Estimates( 1 );

```

#### Covariance of Estimates Heat Map

**Syntax:** obj &lt;&lt; Covariance of Estimates Heat Map( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Heatmap der Kovarianzen zwischen den Schätzwerten des Modells enthält.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Covariance of Estimates Heat Map( 1 );

```

#### Covariances

**Syntax:** obj &lt;&lt; Covariances

**Beschreibung:** Fügt zwischen Variablen im Modell Kovarianzen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

#### Define Time Values

**Syntax:** obj &lt;&lt; Define Time Values

**Beschreibung:** Definiert die Messzeitpunkte für die wiederholten Beobachtungen. Diese Werte werden für die Spezifizierung von Längsschnittmodellen verwendet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),	Fit(		Model Name( "Linear Growth Model" ),		Define Time Values( {0, 2, 3} ),		New Latent( "Intercept", "Slope" ),		Means( {"Constant", {"Intercept", "Slope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year3,			:Multiple Choice Year4}, {1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4			}, {0, 2, 3}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}}		),		Covariances( {"Intercept", {"Slope"}} ),		Path Diagram Properties( Show Means( 1 ) ),		Predicted Values Plot( 1, 1 )	));

```

#### Equation Details

**Syntax:** obj &lt;&lt; Equation Details( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der Details jeder Gleichung im Modell enthält.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Estimation Method( "MIIV Two-Stage Least Squares" ),	Fit(		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		)	));obj << Equation Details( 0 );

```

#### Fit Indices

**Syntax:** obj &lt;&lt; Fit Indices( state=0|1 )

**Beschreibung:** Blendet einen Bericht, der Anpassungsindizes für das Modell enthält, ein oder aus.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Fit Indices( 1 );

```

#### Indirect Effects

**Syntax:** obj &lt;&lt; Indirect Effects( state=0|1 )

**Beschreibung:** Zeigt alle verfügbaren indirekten Effekte im Modell an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Indirect Effects( 1 );

```

#### Loadings

**Syntax:** obj &lt;&lt; Loadings

**Beschreibung:** Fügt latenten Variablen im Modell Ladungen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		)	));

```

#### Means/Intercepts

**Syntax:** obj &lt;&lt; Means/Intercepts

**Beschreibung:** Fügt den Variablen im Modell Mittelwerte oder Achsenabschnitte hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Model Specification(		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}}		)	));

```

#### Model Implied Correlations

**Syntax:** obj &lt;&lt; Model Implied Correlations( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die durch das Modell implizierte Korrelationsmatrix enthält.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Model Implied Correlations( 1 );

```

#### Model Implied Correlations Heat Map

**Syntax:** obj &lt;&lt; Model Implied Correlations Heat Map( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Heatmap der durch das Modell implizierten Korrelationen enthält.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Model Implied Correlations Heat Map( 1 );

```

#### Model Implied Covariances

**Syntax:** obj &lt;&lt; Model Implied Covariances( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die durch das Modell implizierte Kovarianzmatrix enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Model Implied Covariances( 1 );

```

#### Model Implied Covariances Heat Map

**Syntax:** obj &lt;&lt; Model Implied Covariances Heat Map( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Heatmap der durch das Modell implizierten Kovarianzen enthält.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Model Implied Covariances Heat Map( 1 );

```

#### Model Implied Means

**Syntax:** obj &lt;&lt; Model Implied Means( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Mittelwerte für jede Variable bei dem jeweiligen Modell enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Model Implied Means( 1 );

```

#### Model Name

**Syntax:** obj &lt;&lt; Model Name

**Beschreibung:** Legt einen Modellnamen fest.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Model Name( "Means and Variances Model" ),		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

#### Modification Indices

**Syntax:** obj &lt;&lt; Modification Indices( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Schätzer von Modifikationsindizes des Modells enthält. Diese Werte können verwendet werden, um zu bestimmen, welche Parameter dem Modell hinzugefügt werden können, um die Modellanpassung zu verbessern.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Modification Indices( 1 );

```

#### Modification Indices for Covariances

**Syntax:** obj &lt;&lt; Modification Indices for Covariances( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Schätzer von Modifikationsindizes des Modells enthält. Diese Werte können verwendet werden, um zu bestimmen, welche Parameter dem Modell hinzugefügt werden können, um die Modellanpassung zu verbessern.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Modification Indices for Covariances( 1 );

```

#### Modification Indices for Loadings

**Syntax:** obj &lt;&lt; Modification Indices for Loadings( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Schätzer von Modifikationsindizes des Modells enthält. Diese Werte können verwendet werden, um zu bestimmen, welche Parameter dem Modell hinzugefügt werden können, um die Modellanpassung zu verbessern.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Modification Indices for Loadings( 1 );

```

#### Modification Indices for Means

**Syntax:** obj &lt;&lt; Modification Indices for Means( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Schätzer von Modifikationsindizes des Modells enthält. Diese Werte können verwendet werden, um zu bestimmen, welche Parameter dem Modell hinzugefügt werden können, um die Modellanpassung zu verbessern.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Linear Growth Model" ),		New Latent( "Intercept", "Slope" ),		Means( {"Constant", {"Intercept", "Slope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}}		),		Covariances( {"Intercept", {"Slope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));obj << Modification Indices for Means( 1 );

```

#### Modification Indices for Regressions

**Syntax:** obj &lt;&lt; Modification Indices for Regressions( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Schätzer von Modifikationsindizes des Modells enthält. Diese Werte können verwendet werden, um zu bestimmen, welche Parameter dem Modell hinzugefügt werden können, um die Modellanpassung zu verbessern.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Modification Indices for Regressions( 1 );

```

#### Modification Indices for Variances

**Syntax:** obj &lt;&lt; Modification Indices for Variances( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Schätzer von Modifikationsindizes des Modells enthält. Diese Werte können verwendet werden, um zu bestimmen, welche Parameter dem Modell hinzugefügt werden können, um die Modellanpassung zu verbessern.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Linear Growth Model" ),		New Latent( "Intercept", "Slope" ),		Means( {"Constant", {"Intercept", "Slope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}, {.25}},			{:Multiple Choice Year2, {:Multiple Choice Year2}, {.25}},			{:Multiple Choice Year3, {:Multiple Choice Year3}, {.25}},			{:Multiple Choice Year4, {:Multiple Choice Year4}, {.25}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}}		),		Covariances( {"Intercept", {"Slope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));obj << Modification Indices for Variances( 1 );

```

#### New Latent

**Syntax:** obj &lt;&lt; New Latent

**Beschreibung:** Fügt im Modell eine neue latente Variable hinzu.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Model Specification(		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		)	));

```

#### Normalized Residuals

**Syntax:** obj &lt;&lt; Normalized Residuals( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Matrix der normalisierten Residuen für das Modell enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Normalized Residuals( 1 );

```

#### Normalized Residuals Heat Map

**Syntax:** obj &lt;&lt; Normalized Residuals Heat Map( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Heatmap der normalisierten Residuen für das Modell enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Normalized Residuals Heat Map( 1 );

```

#### Parameter Estimates

**Syntax:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die nicht standardisierten Parameterschätzwerte für das Modell enthält. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Parameter Estimates( 0 );

```

#### Paste Diagram Properties

**Syntax:** obj &lt;&lt; Paste Diagram Properties

**Beschreibung:** Fügt die Eigenschaften des Pfaddiagramms aus der Zwischenablage in das aktuelle SEM-Pfaddiagramm ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );obj << Copy Diagram Properties();obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );obj2 << Paste Diagram Properties();

```

#### Path Diagram Properties

**Syntax:** obj &lt;&lt; Path Diagram Properties

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Linear Growth Model" ),		New Latent( "Intercept", "Slope" ),		Means( {"Constant", {"Intercept", "Slope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}}		),		Covariances( {"Intercept", {"Slope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));

```

#### Predicted Values Plot

**Syntax:** obj &lt;&lt; Predicted Values Plot( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm der Vorhersagewerte für endogene Variablen im Modell an oder blendet es aus.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Run Script( "SEM: LGC with LDF" );obj << Predicted Values Plot( 1, 1 );

```

#### Prediction Profiler

**Syntax:** obj &lt;&lt; Prediction Profiler

**Beschreibung:** Blendet eine Vorhersageanalyse für die ausgewählten Ergebnisse mit den ausgewählten Prädiktoren und dem angegebenen Modell ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Path Analysis w / Latent" );obj << Prediction Profiler(	1,	Confidence Intervals( 1 ),	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),	Y Terms( Conflict, Satisfaction ));

```

#### R Square for Endogenous Variables

**Syntax:** obj &lt;&lt; R Square for Endogenous Variables( state=0|1 )

**Beschreibung:** Blendet einen Bericht mit r²-Werten für alle endogenen Variablen im Modell ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << R Square for Endogenous Variables( 1 );

```

#### RAM Matrices

**Syntax:** obj &lt;&lt; RAM Matrices( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die in der Notation des Reticular Action Model (RAM) verwendeten Modellmatrizen enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << RAM Matrices( 1 );

```

#### Recall in Model Specification

**Syntax:** obj &lt;&lt; Recall in Model Specification

**Beschreibung:** Legt für das Modell im Modellspezifikationsbericht das angegebene Modell fest.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Recall in Model Specification( 1 );

```

#### Regressions

**Syntax:** obj &lt;&lt; Regressions

**Beschreibung:** Fügt dem Modell Regressionspfade hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**Beschreibung:** Entfernt den angegebenen Modellbericht aus dem Berichtsfenster.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Remove Fit( 1 );

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Matrix der Residuen für das Modell enthält. Diese Matrix ist die Differenz zwischen der durch das Modell implizierten Kovarianzmatrix und der Stichproben-Kovarianzmatrix.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Residuals( 1 );

```

#### Save Bartlett Factor Scores

**Syntax:** obj &lt;&lt; Save Bartlett Factor Scores

**Beschreibung:** Speichert eine Spalte mit dem Faktor-Score für jede Variable in Spalten in der Datentabelle. Die Faktor-Scores werden in einer ausgeblendeten Spalte berechnet, die der Datentabelle ebenfalls hinzugefügt wird. Bartletts Methode wird zum Schätzen dieser Scores verwendet.

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Save Bartlett Factor Scores();

```

#### Save Factor Scores

**Syntax:** obj &lt;&lt; Save Factor Scores

**Beschreibung:** Speichert eine Spalte mit dem Faktor-Score für jede Variable in Spalten in der Datentabelle. Die Faktor-Scores werden in einer ausgeblendeten Spalte berechnet, die der Datentabelle ebenfalls hinzugefügt wird. Die Regressionsmethode wird zum Schätzen dieser Scores verwendet.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Save Factor Scores();

```

#### Save Observational Residuals

**Syntax:** obj &lt;&lt; Save Observational Residuals

**Beschreibung:** Speichert Spalten in der Datentabelle, die Residuenwerte der beobachteten Ergebnisse im Modell enthalten.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Save Observational Residuals();

```

#### Save Prediction Formulas

**Syntax:** obj &lt;&lt; Save Prediction Formulas

**Beschreibung:** Speichert Spalten in der Datentabelle, die Formeln für Vorhersagewerte der beobachteten Ergebnisse im Modell enthalten.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Save Prediction Formulas();

```

#### Show Path Diagram

**Syntax:** obj &lt;&lt; Show Path Diagram( state=0|1 )

**Beschreibung:** Blendet das SEM-Pfaddiagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Show Path Diagram( 0 );

```

#### Specific Indirect Effects

**Syntax:** obj &lt;&lt; Specific Indirect Effects

**Beschreibung:** Ermöglicht Ihnen, die spezifischen indirekten Effekte anzugeben, die anhand des Modells geschätzt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Specific Indirect Effects( {"Ind60", "Dem65"} );

```

#### Standardized Parameter Estimates

**Syntax:** obj &lt;&lt; Standardized Parameter Estimates( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die standardisierten Parameterschätzwerte für das Modell enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Standardized Parameter Estimates( 1 );

```

#### Summary of Fit

**Syntax:** obj &lt;&lt; Summary of Fit( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der Details der Modellanpassung enthält. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Summary of Fit( 0 );

```

#### Total Effects

**Syntax:** obj &lt;&lt; Total Effects( state=0|1 )

**Beschreibung:** Zeigt alle verfügbaren Gesamteffekte im Modell an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Total Effects( 1 );

```

#### Variances

**Syntax:** obj &lt;&lt; Variances

**Beschreibung:** Fügt den Variablen im Modell Varianzen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Model Specification(		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}}		)	));

```

## Structural Equation Models Path Diagram

### Elementmeldungen

#### Constant Border Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Constant Border Color ( color ) );

**Beschreibung:** Ändert die Rahmenfarbe der konstanten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Means( 1 ), Constant Border Color( "Blue" ) );

```

#### Constant Fill Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Constant Fill Color ( color ) );

**Beschreibung:** Ändert die Füllfarbe der konstanten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Means( 1 ), Constant Fill Color( "Blue" ) );

```

#### Constant Font

**Syntax:** obj &lt;&lt; Path Diagram Properties( Constant Font ( font ) );

**Beschreibung:** Ändert die Schriftart der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Means( 1 ), Constant Font( "Sitka Small" ) );

```

#### Constant Height

**Syntax:** obj &lt;&lt; Path Diagram Properties( Constant Height ( number ) );

**Beschreibung:** Ändert die Höhe (Pixel) der konstanten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Means( 1 ), Constant Height( 20 ) );

```

#### Constant Shape

**Syntax:** obj &lt;&lt; Constant Shape

**Beschreibung:** Ändert das Standarderscheinungsbild der Konstanten im Pfaddiagramm, mit dem die Mittelwerte und Achsenabschnitte der Variablen dargestellt werden.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties(	Show Means( 1 ),	Constant Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} ));

```

#### Constant Size Option

**Syntax:** obj &lt;&lt; Path Diagram Properties( Constant Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**Beschreibung:** Ändert den Größenmodus für die Konstanten im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Constant Size Option( "Scale To Text" ) );

```

#### Constant Text Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Constant Text Color ( color ) );

**Beschreibung:** Ändert die Textfarbe der konstanten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Means( 1 ), Constant Text Color( "Blue" ) );

```

#### Constant Width

**Syntax:** obj &lt;&lt; Path Diagram Properties( Constant Width ( number ) );

**Beschreibung:** Ändert die Breite (Pixel) der konstanten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Means( 1 ), Constant Width( 71 ) );

```

#### Copy Diagram

**Syntax:** obj &lt;&lt; Copy Diagram

**Beschreibung:** Speichert ein Bild des Diagrammfensters in der Zwischenablage.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );rpt = obj << Report();rpt[Node Graph Box( 1 )] << Copy Diagram;

```

#### Copy Diagram Properties

**Syntax:** obj &lt;&lt; Copy Diagram Properties

**Beschreibung:** Speichert eine Kopie der diagrammspezifischen Skripteinstellungen in der Zwischenablage. Diese Einstellungen können dann auf andere Diagramme angewendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );rpt = obj << Report();diagram = rpt[Node Graph Box( 1 )];diagram << Latent Fill Color( "Blue" );diagram << Paths Color( "Green" );diagram << Copy Diagram Properties;obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<Run Script( "SEM: Path Analysis w/ Latent" );rpt = obj << Report();other_diagram = rpt[Node Graph Box( 1 )];other_diagram << Paste Diagram Properties;

```

#### Dashed Lines for Nonsignificant p-values

**Syntax:** obj &lt;&lt; Path Diagram Properties ("Dashed Lines for Nonsignificant p - values"n( 0 | 1 ) )

**Beschreibung:** Blendet gestrichelte Linien für Pfade mit nicht signifikanten p-Werten ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( "Dashed Lines for Nonsignificant p - values"n( 0 ) );

```

#### Diagram Size

**Syntax:** obj &lt;&lt; Path Diagram Properties( Diagram Size ( {x, y} ) )

**Beschreibung:** Ändert die Größe des Pfaddiagramms.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties(	Place Nodes(		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,		184}}	),	Rotate Loops(		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},		{"Legis65", 4.712}, {"Prod60", 4.712}}	));

```

#### Enable Grid

**Syntax:** obj &lt;&lt; Path Diagram Properties ( Enable Grid( 0|1) )

**Beschreibung:** Aktiviert ein visuelles Raster im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Enable Grid( 1 ) );

```

#### Fill Nodes With R Squared

**Syntax:** obj &lt;&lt; Path Diagram Properties ( Fill Nodes With R Squared ( 0|1) )

**Beschreibung:** Gibt an, dass die Knoten im angepassten Modell basierend auf ihrem geschätzten Bestimmtheitsmaß teilweise gefüllt werden. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Fill Nodes With R Squared( 1 ) );

```

#### Latent Border Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Latent Border Color ( color ) );

**Beschreibung:** Ändert die Rahmenfarbe der latenten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Latent Border Color( "Blue" ) );

```

#### Latent Fill Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Latent Fill Color ( color ) );

**Beschreibung:** Ändert die Füllfarbe der latenten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Latent Fill Color( "Blue" ) );

```

#### Latent Font

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Font ( font ) );

**Beschreibung:** Ändert die Schriftart der latenten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Latent Font( "Sitka Small" ) );

```

#### Latent Height

**Syntax:** obj &lt;&lt; Path Diagram Properties( Latent Height ( number ) );

**Beschreibung:** Ändert die Höhe (Pixel) der latenten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Latent Height( 30 ) );

```

#### Latent Shape

**Syntax:** obj &lt;&lt; Latent Shape

**Beschreibung:** Ändert das Standarderscheinungsbild der latenten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties(	Latent Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} ));

```

#### Latent Size Option

**Syntax:** obj &lt;&lt; Path Diagram Properties( Latent Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**Beschreibung:** Ändert den Größenmodus für latente Knoten im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Latent Size Option( "Scale To Text" ) );

```

#### Latent Text Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Latent Text Color ( color ) );

**Beschreibung:** Ändert die Textfarbe der latenten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Latent Text Color( "Blue" ) );

```

#### Latent Width

**Syntax:** obj &lt;&lt; Path Diagram Properties( Latent Width ( number ) );

**Beschreibung:** Ändert die Breite (Pixel) der latenten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Latent Width( 71 ) );

```

#### Layout

**Syntax:** obj &lt;&lt; Path Diagram Properties ( Layout("Left To Right"|"Top To Bottom") )

**Beschreibung:** Legt das anfängliche Layout des Pfaddiagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Layout( "Top To Bottom" ) );

```

#### Lock Diagram

**Syntax:** obj &lt;&lt; Path Diagram Properties ( Lock Diagram( 0|1) )

**Beschreibung:** Sperrt das Pfaddiagramm, so dass Änderungen am Modell keine Änderung des Layouts verursachen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Lock Diagram( 1 ) );

```

#### Manifest Border Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Border Color ( color ) );

**Beschreibung:** Ändert die Rahmenfarbe der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Border Color( "Blue" ) );

```

#### Manifest Fill Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Fill Color ( color ) );

**Beschreibung:** Ändert die Füllfarbe der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Fill Color( "Blue" ) );

```

#### Manifest Font

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Font ( font ) );

**Beschreibung:** Ändert die Schriftart der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Font( "Sitka Small" ) );

```

#### Manifest Height

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Height ( number ) );

**Beschreibung:** Ändert die Höhe (Pixel) der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Height( 30 ) );

```

#### Manifest Shape

**Syntax:** obj &lt;&lt; Manifest Shape

**Beschreibung:** Ändert das Standarderscheinungsbild der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Shape( {Fill Color( "Green" )} ) );

```

#### Manifest Size Option

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**Beschreibung:** Ändert den Größenmodus für manifeste Knoten im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Size Option( "Scale To Text" ) );

```

#### Manifest Text Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Text Color ( color ) );

**Beschreibung:** Ändert die Textfarbe der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Text Color( "Blue" ) );

```

#### Manifest Width

**Syntax:** obj &lt;&lt; Path Diagram Properties( Manifest Width ( number ) );

**Beschreibung:** Ändert die Breite (Pixel) der manifesten Variablen im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Manifest Width( 67 ) );

```

#### Paste Diagram Properties

**Syntax:** obj &lt;&lt; Paste Diagram Properties

**Beschreibung:** Fügt eine Kopie der diagrammspezifischen Skripteinstellungen aus der Zwischenablage ein.

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );rpt = obj << Report();diagram = rpt[Node Graph Box( 1 )];diagram << Latent Fill Color( "Blue" );diagram << Paths Color( "Green" );diagram << Copy Diagram Properties;obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<Run Script( "SEM: Path Analysis w/ Latent" );rpt = obj << Report();other_diagram = rpt[Node Graph Box( 1 )];other_diagram << Paste Diagram Properties;

```

#### Path Styles

**Syntax:** obj &lt;&lt; Path Styles

**Beschreibung:** Ändert das Standarderscheinungsbild der Pfade im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Path Styles( {Color( "Green" )} ) );

```

#### Path Thickness

**Syntax:** obj &lt;&lt; Path Diagram Properties (Path Thickness( "Fixed"|"Map to Stdz. Estimates" ) )

**Beschreibung:** Schaltet um, ob die Dicke des Pfads im Diagramm auf einem fixierten Wert bleibt oder an die Stärke des standardisierten Schätzers gebunden ist. Standardmäßig „Fixed“.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Path Thickness( "Map to Stdz. Estimates" ) );

```

#### Path Transparency

**Syntax:** obj &lt;&lt; Path Diagram Properties (Path Transparency( "Fixed"|"Map to Stdz. Estimates" ) )

**Beschreibung:** Schaltet um, ob die Transparenz des Pfads im Diagramm auf einem fixierten Wert bleibt oder an die Stärke des standardisierten Schätzers gebunden ist.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Path Transparency( "Fixed" ) );

```

#### Paths Alpha Level

**Syntax:** obj &lt;&lt; Path Diagram Properties( Paths Alpha Level ( number) );

**Beschreibung:** Ändert die minimale p-Wert-Schwelle für die Verwendung von gestrichelten Linien im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Paths Alpha Level( 0.01 ) );

```

#### Paths Color

**Syntax:** obj &lt;&lt; Path Diagram Properties( Paths Color ( color) );

**Beschreibung:** Ändert die Farbe der Pfade im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Paths Color( "Green" ) );

```

#### Paths Font

**Syntax:** obj &lt;&lt; Path Diagram Properties( Paths Font ( font ) );

**Beschreibung:** Ändert die Schriftart zum Beschriften der Pfade im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Paths Font( "Segoe Script", 12, "Bold" ) );

```

#### Paths Opacity

**Syntax:** obj &lt;&lt; Path Diagram Properties( Paths Opacity ( number) );

**Beschreibung:** Ändert die Undurchsichtigkeit der Pfade im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Paths Opacity( 0.5 ), Path Transparency( "Fixed" ) );

```

#### Paths Thickness

**Syntax:** obj &lt;&lt; Path Diagram Properties( Paths Thickness ( number) );

**Beschreibung:** Ändert die Dicke der Pfade im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Paths Thickness( 2.7103 ) );

```

#### Place Nodes

**Syntax:** obj &lt;&lt; Path Diagram Properties( Place Nodes ( { {name1, x1, y1}, {name2, x2, y2}, ...} ) )

**Beschreibung:** Steuert die Anordnung von einzelnen Knoten im Pfaddiagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties(	Place Nodes(		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,		184}}	),	Rotate Loops(		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},		{"Legis65", 4.712}, {"Prod60", 4.712}}	));

```

#### R2 Fill Color

**Syntax:** obj &lt;&lt; Path Diagram Properties ( R2 Fill Color ( Color ) )

**Beschreibung:** Gibt die Farbe für die teilweise Füllung an, die den geschätzten r²-Wert einer Variablen darstellt.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( R2 Fill Color( Cyan ) );

```

#### Rotate Latent Groups

**Syntax:** obj &lt;&lt; Rotate Latent Groups

**Beschreibung:** Rotiert die Ausrichtung aller latenten Indikatoren im Diagramm. Wenn beliebige latente Gruppen ausgewählt werden, rotiert diese Option die Ausrichtung nur der ausgewählten latenten Gruppen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );rpt = obj << Report();diagram = rpt[Node Graph Box( 1 )];diagram << Rotate Latent Groups;

```

#### Rotate Loops

**Syntax:** obj &lt;&lt; Path Diagram Properties( Rotate Loops ( { {name1, angle1}, {name2, angle2}, ...} ) )

**Beschreibung:** Steuert die Rotation von Varianzschleifen innerhalb des Pfaddiagramms. Winkel werden im Uhrzeigersinn im Bogenmaß gemessen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties(	Place Nodes(		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,		184}}	),	Rotate Loops(		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},		{"Legis65", 4.712}, {"Prod60", 4.712}}	));

```

#### Show Constant Mean Square

**Syntax:** obj &lt;&lt; Show Constant Mean Square( state=0|1 )

**Beschreibung:** Blendet die Kante der Konstante im Pfaddiagramm ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Constant Mean Square( 1 ) );

```

#### Show Covariances

**Syntax:** obj &lt;&lt; Show Covariances( state=0|1 )

**Beschreibung:** Blendet die bidirektionalen Pfeile ein oder aus, die Kovarianzen im Pfaddiagramm darstellen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Covariances( 0 ) );

```

#### Show Equality Constraints

**Syntax:** obj &lt;&lt; Show Equality Constraints( state=0|1 )

**Beschreibung:** Blendet die Gleichheitsnebenbedingungen (fixierte Werte oder Beschriftungen) an Kanten im Pfaddiagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Equality Constraints( 0 ) );

```

#### Show Estimates

**Syntax:** obj &lt;&lt; Show Estimates( "Nicht standardisiert"|"Standardisiert"|"Keine" )

**Beschreibung:** Blendet die nicht standardisierten Parameterschätzwerte im Pfaddiagramm ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Estimates( "None" ) );

```

#### Show Loadings

**Syntax:** obj &lt;&lt; Show Loadings( state=0|1 )

**Beschreibung:** Blendet die latenten Variablenindikatoren im Pfaddiagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Loadings( 0 ) );

```

#### Show Means/Intercepts

**Syntax:** obj &lt;&lt; Show Means/Intercepts( state=0|1 )

**Beschreibung:** Blendet die Mittelwerte in der SEM-Plattform ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Means( 1 ) );

```

#### Show R Squared Values

**Syntax:** obj &lt;&lt; Show R Squared Values( state=0|1 )

**Beschreibung:** Blendet die r²-Werte innerhalb der Knoten im Pfaddiagramm ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show R Squared Values( 1 ) );

```

#### Show Regressions

**Syntax:** obj &lt;&lt; Show Regressions( state=0|1 )

**Beschreibung:** Blendet Regressionen in der SEM-Plattform ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Regressions( 0 ) );

```

#### Show Variances

**Syntax:** obj &lt;&lt; Show Variances( state=0|1 )

**Beschreibung:** Blendet die bidirektionalen Pfeile ein oder aus, die Varianzen im Pfaddiagramm darstellen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );obj = dt << Run Script( "SEM: Bollen (1989)" );obj << Path Diagram Properties( Show Variances( 0 ) );

```

### Zugehörige Konstruktoren

#### SEM Node Graph Display

**Syntax:** SEM Node Graph Display

## Structural Equation Models Specification

### Elementmeldungen

#### Covariances

**Syntax:** obj &lt;&lt; Covariances

**Beschreibung:** Fügt zwischen Variablen im Modell Kovarianzen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

#### Define Time Values

**Syntax:** obj &lt;&lt; Define Time Values

**Beschreibung:** Definiert die Messzeitpunkte für die wiederholten Beobachtungen. Diese Werte werden für die Spezifizierung von Längsschnittmodellen verwendet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),	Model Specification(		Model Name( "Longitudinal Model" ),		Define Time Values( {0, 2, 3} )	));

```

#### Loadings

**Syntax:** obj &lt;&lt; Loadings

**Beschreibung:** Fügt latenten Variablen im Modell Ladungen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		)	));

```

#### Max Iterations

**Syntax:** Structural Equation Models(..., Max Iterations( 3 )

**Beschreibung:** Legt die maximale Anzahl der Iterationen für Konvergenz fest. Standardmäßig „1000“.

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} ),		Max Iterations( 3 )	));

```

#### Means/Intercepts

**Syntax:** obj &lt;&lt; Means/Intercepts

**Beschreibung:** Fügt den Variablen im Modell Mittelwerte oder Achsenabschnitte hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Model Specification(		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}}		)	));

```

#### Model Name

**Syntax:** obj &lt;&lt; Model Name

**Beschreibung:** Gibt einen Namen für das Modell an.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Model Name( "Means and Variances Model" ),		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

#### Model Notes

**Syntax:** obj &lt;&lt; Model Notes

**Beschreibung:** Gibt Notizen für das Modell an.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Model Name( "Means and Variances Model" ),		Model Notes(			"This is a simple model with only means and variances for each variable"		),		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

#### New Latent

**Syntax:** obj &lt;&lt; New Latent

**Beschreibung:** Fügt im Modell eine neue latente Variable hinzu.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Model Specification(		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		)	));

```

#### Regressions

**Syntax:** obj &lt;&lt; Regressions

**Beschreibung:** Fügt dem Modell Regressionspfade hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg ),	Model Specification(		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )	));

```

#### Variances

**Syntax:** obj &lt;&lt; Variances

**Beschreibung:** Fügt den Variablen im Modell Varianzen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Model Specification(		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}}		)	));

```

