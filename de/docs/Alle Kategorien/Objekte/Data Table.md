# Data Table



## Elementmeldungen

### Add Properties to Table

**Syntax:** obj &lt;&lt; Add Properties to Table

**Beschreibung:** Eigenschaften zu der Tabelle hinzufügen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Properties( {2, 4} );proplist = dt << Get Selected Properties();dt2 = New Table( "Little Class" );dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**Syntax:** obj &lt;&lt; Add Scripts to Table

**Beschreibung:** Dieser Befehl ist ein Alias von „Eigenschaften zu der Tabelle hinzufügen“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Properties( {2, 4} );proplist = dt << Get Selected Properties();dt2 = New Table( "Little Class" );dt2 << Add scripts to table( proplist );

```

### Anonymize

**Syntax:** obj &lt;&lt; Anonymize( columns( columns ), &lt;Output Table( name )&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle, wobei die eindeutigen Identifikatoren entfernt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**Syntax:** obj &lt;&lt; Apply Columns List Filter To Data Grid( state=0|1 )

**Beschreibung:** Einschalten, um Filter in der Liste der Spalten der Datentabelle auf das Datenraster anzuwenden.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Column Filter( Column Name( "tude" ) );Wait( 1 );dt << Apply Columns List Filter To Data Grid( 0 );Wait( 1 );dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**Syntax:** dt &lt;&lt; Apply Formula([Columns(&lt;col|{cols}|Group(col, count)|&lt;group name&gt;, [Ref(&lt;name&gt;)], [List Ref(&lt;name&gt;)]]+, [Output(In Place|In Place Formula|New Formula(&lt;prefix&gt;|New Static(&lt;prefix&gt;)], [Group(&lt;name&gt;)])

**Beschreibung:** Eine Formel verwenden, um eine oder mehrere Spalten zu transformieren und die Ergebnisse (entweder als Formeln oder Daten) in neuen oder vorhandenen Spalten anzuordnen.

Mindestens eine Spaltengruppe muss definiert werden (eine einzelne Spalte, eine explizite Liste von Spalten, eine Serie von Spalten oder ein vorhandener Spaltengruppenname).

Die erste definierte Gruppe dient als Ziel, wenn die Ausgabe „an der Stelle“ ist. Wenn notwendig, können Sie einen Namen in der Formel angeben, der sich auf die Spalten einzeln (Ref) oder als Liste von Spalten (ListRef) bezieht.

Zuletzt kann der Ausgabetyp angegeben werden, optional mit einem Namen und einem Gruppennamen für neue Spalten.

**JMP Version hinzugefügt:** 18

#### New Data Columns/ListRef

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Data Table( "Big Class" ) << Apply Formula(	Columns(		Group( :height, 2 ),		Ref( "_relative_from_height" ),		ListRef( "height_to_weight" )	),	Formula( _relative_from_height / Sum( height_to_weight ) ),	Output( New Static ));

```

#### New Formula Columns/Grouping

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Apply Formula(	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),	Formula( _relative_from_height * 2 ),	Output( New Formula( "result", Group( "output group" ) ) ));

```

#### Simple New Formula Column

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Data Table( "Big Class" ) << Apply Formula(	Columns( :height ),	Formula( :height / 5 ),	Output( New Formula ));

```

### Begin Data Update

**Syntax:** obj &lt;&lt; Begin Data Update

**Beschreibung:** Hält alle Aktualisierungsmeldungen an, bis der Befehl zum Beenden der Datenaktualisierung erreicht ist. Dies ist nützlich, um viele Zellen ohne Unterbrechung zu aktualisieren. Dies gilt nur für Änderungen in Datenzellen.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 2000 );dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );Wait();dt << Begin Data Update;dt << Add Rows( 2000 );dt << End Data Update;

```

### Checksum

**Syntax:** obj &lt;&lt; Checksum( &lt; Version(version) &gt;, &lt; Include(flags) &gt;, &lt; Exclude(flags) &gt; )

**Beschreibung:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Checksum();

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Checksum( Exclude( "ColData" ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );flags = {"ColData", "ColAttributes"};dt << Checksum( Include( flags ) );

```

### Clear Cell Colors

**Syntax:** obj &lt;&lt; Clear Cell Colors

**Beschreibung:** Zellenfarbe der ausgewählten Spalten löschen. Wenn keine Spalten ausgewählt sind, werden die Zellenfarben aller Spalten gelöscht.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:age << Color Cells( "Red" );a = {1, 3, 5};b = {2, 4, 6};:height << color cells( {{"Red", a}, {"blue", b}} );:weight << color cells( {{"blue", a}} );Wait( 2 );dt << Clear cell colors( {:height, :age} );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:age << Color Cells( "Red" );a = {1, 3, 5};b = {2, 4, 6};:height << color cells( {{"Red", a}, {"blue", b}} );:weight << color cells( {{"blue", a}} );Wait( 2 );dt << Clear cell colors();

```

### Clear Column Selection

**Syntax:** obj &lt;&lt; Clear Column Selection

**Beschreibung:** Hebt die Spaltenauswahl in der Datentabelle auf.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Go To( :BP 12F );Wait( 2 );dt << Clear Column Selection();

```

### Clear Edit Lock

**Syntax:** obj &lt;&lt; Clear Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Beschreibung:** Angegebene Operationen, die zuvor nicht gestattet waren, in der Datentabelle gestatten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );:age << set selected( 1 );:height << set selected( 1 );Wait( 2 );dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**Syntax:** obj &lt;&lt; Clear Properties Selection( { property1, property2, ... )

**Beschreibung:** Angegebene Tabelleneigenschaften abwählen, wobei die Liste aus Eigenschaftsnamen oder Indizes für die Eigenschaften bestehen kann. Ist keine Liste angegeben, alle ausgewählten Eigenschaften abwählen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );list = {"Bivariate", "Logistic"};proplist = dt << Select Properties();Wait( 1 );dt << clear properties selection( list );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );list = {"Bivariate", "Logistic"};proplist = dt << Select Properties();Wait( 1 );dt << clear properties selecction();

```

### Clone

**Syntax:** dt &lt;&lt; Clone( &lt; Table Name(name) &gt;, &lt; Copy Formulas(1|0) &gt;, &lt; Eval Formulas(1|0) &gt; )

**Beschreibung:** Eine Kopie der Datentabelle erstellen

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dtClone = dt << Clone;

```

### Close Data Grid

**Syntax:** obj &lt;&lt; Close Data Grid

**Beschreibung:** Datenraster schließen oder öffnen.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Close Data Grid( 1 );

```

### Close Side Panels

**Syntax:** obj &lt;&lt; Close Side Panels

**Beschreibung:** Seitliche Bereiche der Datentabelle schließen oder öffnen.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Close Side Panels( 1 );

```

### Close summary panels

**Syntax:** obj &lt;&lt; Close summary panels

**Beschreibung:** Zusammenfassungsbereiche der Datentabelle schließen oder öffnen.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Close Summary Panels( 1 );

```

### Cluster

**Syntax:** obj &lt;&lt; Cluster

### Collapse All Column Groups

**Syntax:** obj &lt;&lt; Collapse All Column Groups

**Beschreibung:** Klappt alle Spaltengruppen ein

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );dt << Expand All Column Groups;Wait( 2 );dt << Collapse All Column Groups;

```

### Column Filter

**Syntax:** obj &lt;&lt; Column Filter

**Beschreibung:** Ruft Objekte ab, um den aktiven Spaltenfilter für die Tabelle zu ändern.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Expand All Column Groups;dt:sex << Hide( 1 );// Use immediatelydt << Column Filter( Column Name( "Weight|Wt", Regular Expression( 1 ) ) );dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"} ) );dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"}, Intersection( 1 ) ) );dt << Column Filter( Column Name( "3" ), Tags( {"Blood Measurements"} ) );dt << Column Filter( Clear );// Return an object and send messages latercf = dt << Column Filter;cf << Column Name( "3yr" );cf << Get Script;// Related to (can also send to object)dt << Show Hidden Columns in Columns List( 0 );dt << Apply Columns List Filter to Data Grid( 0 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Erstellt einen eigenständigen Spaltenwechsler

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );dt << Column Switcher(	:Process 1,	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Bivariate",	H List Box(		cs = dt << Column Switcher( :age, {:age, :weight} ),		V List Box(			female = Bivariate( Y( :age ), X( :height ), Where( :sex == "F" ) ),			male = Bivariate( Y( :age ), X( :height ), Where( :sex == "M" ) )		)	));cs << Link Platform( female );cs << Link Platform( male );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Bivariate",	H List Box(		cs = dt << Column Switcher( :age, {:age, :weight} ),		b = Bivariate( Y( :age ), X( :height ), by( :sex ) )	));cs << Link Platform( b[1] );cs << Link Platform( b[2] );

```

### Combine Columns

**Syntax:** obj &lt;&lt; Combine Columns

**Beschreibung:** Mehrere Spalten zu einer einzigen Spalte verbinden, wobei die Werte der einzelnen Quellspalten durch das angegebene Trennzeichen getrennt werden.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Selected Columns are Indicator Columns( 1 ),	Column Name( "When to Brush" ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Column Name( "When to Brush" ));

```

### Compare Data Tables

**Syntax:** obj &lt;&lt; Compare Data Tables( Compare with( Data Table( name )), &lt;Compare table variables and scripts( 0|1)&gt;, &lt;show window&gt;,&lt;Compare columns attributes and properties( 0|1)&gt;, &lt;Compare data( 0|1 )&gt;, &lt;Show difference summary(0|1)&gt;, &lt;Show difference plot(0|1)&gt; )

**Beschreibung:** Vergleicht zwei offene Datentabellen und berichtet die Unterschiede zwischen den Daten sowie Metadaten.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**Syntax:** obj &lt;&lt; Compress File When Saved( state=0|1 )

**Beschreibung:** Datei beim Speichern der Datentabelle komprimieren.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**Syntax:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ...} )

**Beschreibung:** Komprimiert jede Spalte in kompaktestem Format.

Zeichendaten werden als 1 Byte komprimiert, sofern weniger als 255 Stufen vorhanden sind.

Numerische Daten werden als 1 Byte komprimiert, sofern die Daten zwischen -127 und 127 liegen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**Syntax:** obj &lt;&lt; Concatenate( &lt;Private&gt;, &lt;Invisible&gt;, Data Table( name ), &lt;Data Table(name), ...&gt; &lt;Label( column )&gt;, &lt;Output Table( name ) | Append to first table&gt;, &lt;Keep Formulas&gt;, &lt;Create Source Column&gt; )

**Beschreibung:** Verbindet Zeilen aus mehreren Datentabellen und erstellt eine neue Datentabelle oder hängt die Zeilen an die erste Datentabelle an.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );dt << Concatenate( Data Table( "Trial2" ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Students.jmp" );dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );dt << Concatenate(	Data Table( dt1 ),	Data Table( dt2 ),	"Append to first table",	"Create source column");

```

### Copy Column Properties

**Syntax:** obj &lt;&lt; Copy Column Properties( &lt;column 1 column 2, ...&gt; )

**Beschreibung:** Kopiert eine Liste mehrerer Spalteneigenschaften von mehreren Spalten in eine Datentabelle in der Zwischenablage. Sie können die Spalten auswählen oder in einer Liste aufführen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Select Columns( :MODULUS, :ELONG );dt << Copy Column Properties;New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Copy Column Properties( {:MODULUS, :ELONG} );New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

### Copy Selected Properties

**Syntax:** obj &lt;&lt; Copy Selected Properties

**Beschreibung:** Ausgewählte Tabelleneigenschaften in die Zwischenablage kopieren.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << select properties( {"Distribution", "Oneway"} );proplist = dt << Copy Selected Properties();New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

### Copy Table Script

**Syntax:** obj &lt;&lt; Copy Table Script( &lt;"No data"&gt; )

**Beschreibung:** Kopiert ein Skript, um die Datentabelle neu zu erstellen. Das resultierende Skript enthält alle in der Datentabelle gespeicherten Tabellenskripte. Optional können Sie das Schlüsselwort „No Data“ hinzufügen, um Daten im Skript auszulassen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Copy Table Script();New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Copy Table Script( "No Data" );New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

### Debug Script

**Syntax:** obj &lt;&lt; Debug Script( name )

**Beschreibung:** Testet ein bestehendes Skript, das als Eigenschaft in der Datentabelle gespeichert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Debug Script( "Distribution" );

```

### Decision Tree

**Syntax:** obj &lt;&lt; Decision Tree

### Define Tag

**Syntax:** Define Tag(&lt;name&gt;, [Color(&lt;color&gt;)], [Symbol(&lt;symbol char&gt;)], [Description(&lt;text&gt;)], [Replace(&lt;existing tag name&gt;)])

**Beschreibung:** Definition für ein Spalten-Tag in der Tabelle erstellen oder aktualisieren. Wenn das Tag nicht vorhanden ist, wird es erstellt. Optional Farbe, Symbol und andere Attribute zuweisen.

**JMP Version hinzugefügt:** 19

#### Color, Symbol, or None

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID1", Color( Red ) );dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );dt << Define Tag( "ID3" );

```

#### New Tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID", Color( Blue ) );

```

#### Replace

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID", Color( Red ) );:height << Set Property( "Tags", {"ID"} );dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );:height << Get Property( "Tags" );

```

### Delete Columns

**Syntax:** obj &lt;&lt; Delete Columns( &lt;column&gt;, &lt;column&gt;, ... )

**Beschreibung:** Löscht die angegebene(n) Spalte(n). Wenn kein Argument angegeben ist, werden ausgewählte Spalten in der Datentabelle gelöscht.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height << Set Selected;Wait( 2 );dt << Delete Columns();

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << Delete Columns( :Height );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );cols = {"height", "weight"};Wait( 2 );dt << Delete Columns( cols );

```

### Delete Filter View

**Syntax:** obj &lt;&lt; Delete Filter View( name | obj )

**Beschreibung:** Vorgegebene Filteransicht löschen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv dream = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv male = dt << New Filter View(	"Male",	Active( 0 ),	Data Filter( Add Filter( Columns( :Sex ), Where( :Sex == "MALE" ) ) ));Wait( 1 );dt << Delete Filter View( fv dream );dt << Delete Filter View( "Male" );

```

### Delete Scripts

**Syntax:** obj &lt;&lt; Delete Scripts( &lt;script| {script 1, script 2, script 3, ...} &gt; )

**Beschreibung:** Löscht die angegebenen Skripte aus der Datentabelle.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Script(	"New Script",	Distribution( Column( :Height, :Weight ), By( :sex ) ));Wait( 2 );dt << Delete Scripts( "New Script" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );list = {"Bivariate", "Logistic"};Wait( 2 );dt << Delete Scripts( list );

```

### Delete Table Property

**Syntax:** obj &lt;&lt; Delete Table Property

**Beschreibung:** Alias zum Löschen von Skripten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Script(	"New Script",	Distribution( Column( :Height, :Weight ), By( :sex ) ));Wait( 2 );dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**Syntax:** obj &lt;&lt; Delete Table Variable( name )

**Beschreibung:** Löscht eine Tabellenvariable, die in der Datentabelle gespeichert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Variable( "Days", 42 );Wait( 2 );dt << Delete Table Variable( "Days" );

```

### Delete Tag

**Syntax:** Delete Tag(&lt;tag&gt;|{&lt;tag&gt;, &lt;tag&gt;, ...}, [force(0|1)

**Beschreibung:** Ein Tag aus der Tabelle löschen. Tags werden nicht gelöscht, wenn sie noch von anderen Spalten verwendet werden, es sei denn, das Flag Force(1) wird angegeben.

**JMP Version hinzugefügt:** 19

#### Delete tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID" );Wait( 3 );dt << Delete Tag( "ID" );

```

#### Force delete

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID" );:height << Set Property( "Tags", {"ID"} );Wait( 3 );dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**Syntax:** obj &lt;&lt; Deselect Column Group( name of group | list of names )

**Beschreibung:** Auswahl der Spaltengruppen aufheben. Wenn die Spaltengruppe ausgelassen wird, werden alle Spalten abgewählt.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << select column group();Wait( 2 );dt << deselect column group( "pollutants" );

```

### Disable Undo

**Syntax:** obj &lt;&lt; Disable Undo( state=0|1 )

**Beschreibung:** Wenn die Option eingestellt ist, kann kein Bearbeitungsvorgang an der Datentabelle rückgängig gemacht werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << disable undo( 1 );

```

### End Data Update

**Syntax:** obj &lt;&lt; End Data Update

**Beschreibung:** Sendet alle Aktualisierungsmeldungen, die seit dem Befehl zum Beginnen der Datenaktualisierung angehalten wurden. Dies ist nützlich, um viele Zellen ohne Unterbrechung zu aktualisieren. Dies gilt nur für Änderungen in Datenzellen.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 2000 );dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );Wait();dt << Begin Data Update;dt << Add Rows( 2000 );dt << End Data Update;

```

### Exclude Columns

**Syntax:** obj &lt;&lt; Exclude Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Beschreibung:** Schließt die Spalten aus allen Analyseläufen aus

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**Syntax:** obj &lt;&lt; Exit Filter View

**Beschreibung:** Zur ungefilterten Ansicht zurückkehren. Wenn bereits in der ungefilterten Ansicht, hat diese Funktion keine Wirkung.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Wait( 1 );dt << Exit Filter View;

```

### Expand All Column Groups

**Syntax:** obj &lt;&lt; Expand All Column Groups

**Beschreibung:** Erweitert alle Spaltengruppen

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );dt << Collapse All Column Groups;Wait( 2 );dt << Expand All Column Groups;

```

### Fit Model

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**Beschreibung:** Passt lineare Regressionsmodelle an, einschließlich Varianzanalyse, logistische Regression, Varianzkomponenten, Regression mit Bestrafung, schrittweise Regression, MANOVA und Überlebensmodelle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run Model());

```

### Get Active Filter View

**Syntax:** fv = obj &lt;&lt; Get Active Filter View

**Beschreibung:** Aktive Filteransicht abrufen. Gibt ein FilterView-Objekt zurück.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv active = dt << Get Active Filter View;Show( fv active << Get Name );

```

### Get All Columns As Matrix

**Syntax:** obj &lt;&lt; Get All Columns As Matrix

**Beschreibung:** Gibt die Datentabelle als Matrix zurück. Die Zeichenspalten sind entsprechend den sortierten Kategorien beziffert, beginnend mit 1.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );m = dt << Get All Columns As Matrix();Show( m );

```

### Get As Report

**Syntax:** obj &lt;&lt; Get As Report

**Beschreibung:** Gibt einen Bericht der Datentabelle zurück.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );jmp_report = New Window( "Big Class",	Text Box( "Big Class" ),	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age < 14 );dt << Select Columns( :name, :age, :height );jmp_report = New Window( "Big Class",	Text Box( "Big Class" ),	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), );

```

### Get Cell Height

**Syntax:** obj &lt;&lt; Get Cell Height

**Beschreibung:** Anzeigehöhe einer Zeile abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );ht = dt << Get Cell Height;

```

### Get Column Group

**Syntax:** obj &lt;&lt; Get Column Group( name of column group | list of names )

**Beschreibung:** Gibt die Liste der Spalten in der Spaltengruppe zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << get column group( "xy" );

```

### Get Column Groups Names

**Syntax:** obj &lt;&lt; Get Column Groups Names

**Beschreibung:** Gibt die Namen der Spaltengruppen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << get column groups names;

```

### Get Column Names

**Syntax:** obj &lt;&lt; Get Column Names( &lt;Numeric|Character|RowState&gt;, &lt;Continuous|Ordinal|Nominal&gt;,&lt;String&gt; )

**Beschreibung:** Gibt die Spaltennamen in der Datentabelle zurück. Wenn das Schlüsselwort Zeichenkette verwendet wird, werden Zeichenketten zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );n = dt << Get Column Names();Show( n );CNames = dt << Get Column Names( Continuous );Show( CNames );SNames = dt << Get Column Names( String );Show( SNames );

```

### Get Column Reference

**Syntax:** obj &lt;&lt; Get Column Reference( list of column names )

**Beschreibung:** Gibt die Spaltenreferenz der Zeichenketten in der Liste zurück.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );refList = dt << Get Column Reference( {"sex", "age"} );Show( refList );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {1, 3, 4};refList = dt << Get Column Reference( a );Show( refList );

```

### Get Edit Lock

**Syntax:** obj &lt;&lt; Get Edit Lock

**Beschreibung:** Liste der nicht gestatteten Operationen in der Datentabelle abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Edit Lock( "Add Rows", "Delete Columns" );Wait( 2 );dt << Get Edit Lock();

```

### Get Excluded Columns

**Syntax:** obj &lt;&lt; Get Excluded Columns

**Beschreibung:** Gibt die gegenwärtig ausgeschlossenen Spalten in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << Exclude;exCols = dt << Get Excluded Columns;Show( exCols );

```

### Get Excluded Rows

**Syntax:** obj &lt;&lt; Get Excluded Rows

**Beschreibung:** Gibt die gegenwärtig ausgeschlossenen Zeilen in der Datentabelle zurück. Where bevorzugen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Exclude();r1 = dt << Get Excluded Rows();r2 = Where( Excluded() );Show( r1, r2 );

```

### Get Filter View

**Syntax:** fv = obj &lt;&lt; Get Filter View( name | &lt;&lt;Temporary | &lt;&lt;Unfiltered )

**Beschreibung:** Ruft eine Filteransicht nach Name ab oder ruft eine der speziellen Filteransichten mit <<Temporär oder <<Ungefiltert ab. Wenn eine Filteransicht mit dem angegebenen Namen nicht vorhanden ist, wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv dream = dt << Get Filter View( "Dream" );Show( fv dream << Get Name );Show( (dt << Get Filter View( <<Unfiltered )) << Get Name );

```

### Get Filter Views

**Syntax:** { fv, ... } = obj &lt;&lt; Get Filter Views( &lt; Temporary(0|1) &gt;, &lt; Unfiltered(0|1) &gt; )

**Beschreibung:** Eine Liste aller Filteransichten abrufen. Standardmäßig sind die temporären und ungefilterten Ansichten nicht enthalten.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv dream = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fvs = dt << Get Filter Views( Unfiltered( 1 ), Temporary( 1 ) );Show( fvs << Get Name );

```

### Get Header Height

**Syntax:** obj &lt;&lt; Get Header Height

**Beschreibung:** Anzeigehöhe der Spaltenüberschrift abrufen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );ht = dt << Get Header Height;

```

### Get Hidden Columns

**Syntax:** obj &lt;&lt; Get Hidden Columns

**Beschreibung:** Gibt die gegenwärtig ausgeblendeten Spalten in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Weight << Hide;hidCols = dt << Get Hidden Columns;Show( hidCols );

```

### Get Hidden Rows

**Syntax:** obj &lt;&lt; Get Hidden Rows

**Beschreibung:** Gibt die gegenwärtig ausgeblendeten Zeilen in der Datentabelle zurück. Where bevorzugen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Hide();r1 = dt << Get Hidden Rows();r2 = Where( Hidden() );Show( r1, r2 );

```

### Get Label Columns

**Syntax:** obj &lt;&lt; Get Label Columns

**Beschreibung:** Gibt die Spalten zum Beschriften von Zeilen zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );labelCols = dt << Get Label Columns;Show( labelCols );

```

### Get Labeled Rows

**Syntax:** obj &lt;&lt; Get Labeled Rows

**Beschreibung:** Gibt die gegenwärtig beschrifteten Zeilen in der Datentabelle zurück. Where bevorzugen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Label();r1 = dt << Get Labeled Rows();r2 = Where( Labeled() );Show( r1, r2 );

```

### Get Lock

**Syntax:** obj &lt;&lt; Get Lock( state=0|1 )

**Beschreibung:** Prüft, ob die Datentabelle gesperrt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = dt << get lock();Show( a );Wait( 1 );dt << Lock Data Table( 1 );a = dt << get lock();Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step for Formula Columns

**Beschreibung:** Erstellt SAS-DATA-Step-Code des SAS Model Manager für Formelspalten in einer JMP-Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Ratio", Formula( :height / :weight ) );dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**Syntax:** obj &lt;&lt; Get Name( &lt;"Ignore Extension"&gt; )

**Beschreibung:** Gibt den Anzeigenamen der Datentabelle zurück. Mit dem optionalen Argument „Erweiterung ignorieren“ gibt der Befehl den Namen der Datentabelle ohne Erweiterung zurück.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );n = dt << Get Name();Show( n );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );n = dt << Get Name( "Ignore Extension" );Show( n );

```

### Get Path

**Syntax:** obj &lt;&lt; Get Path

**Beschreibung:** Gibt den vollständigen Pfad der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );path = dt << Get Path();Show( path );

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( name )

**Beschreibung:** Gibt die benannte Eigenschaft in der Datentabelle als Skript zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = dt << Get Property( "Distribution" );Show( s );

```

### Get Row ID Width

**Syntax:** obj &lt;&lt; Get Row ID Width

**Beschreibung:** Anzeigebreite des Zeilen-ID-Bereichs abrufen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );ht = dt << Get Row ID Width;

```

### Get Row States

**Syntax:** obj &lt;&lt; Get Row States

**Beschreibung:** Gibt einen Vektor mit verschlüsselten Zeileneigenschaftswerten für jede Zeile in der Datentabelle zurück. Beachten Sie, dass verschlüsselte Zeileneigenschaftswerte nicht als Zeileneigenschaftsstruktur in Zeileneigenschaftsfunktionen wie „Color Of“ verwendet werden können. Beispiel 2 zeigt, wie Sie den Vektor direkt verwenden können.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );rs = dt << Get Row States;Show( rs );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );rs = dt << GetRowStates;w = Marker Of( As Row State( rs[3] ) );dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**Syntax:** obj &lt;&lt; Get Rows Where

**Beschreibung:** Gibt die Zeilen in der Datentabelle zurück, die den Where-Kriterien entsprechen. Stattdessen Where bevorzugen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r1 = dt << Get Rows Where( :sex == "M" );r2 = Where( :sex == "M" );Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**Syntax:** obj &lt;&lt; Get SAS DATA Step for Formula Columns

**Beschreibung:** Erstellt SAS-DATA-Step-Code für Formelspalten in einer JMP-Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Ratio", Formula( :height / :weight ) );dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script( &lt;script name&gt; )

**Beschreibung:** Gibt das gewünschte Skript zurück. Wenn der Name des Skripts ausgelassen wird, wird eine Textdarstellung der Datentabelle zusammen mit allen in den Daten gespeicherten Skripten zurückgegeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = dt << Get Script;New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = dt << Get Script( "Distribution" );

```

### Get Script Group

**Syntax:** obj &lt;&lt; Get Script Group( name of script group )

**Beschreibung:** Gibt die Liste von Skripten in der Gruppe zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );gb = dt << get script group( "GB" );Wait( 1 );dt << run script( gb[2] );

```

### Get Script Groups Names

**Syntax:** obj &lt;&lt; Get Script Groups Names

**Beschreibung:** Gibt die Liste der Namen von Skriptgruppen zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**Syntax:** obj &lt;&lt; Get Scroll Locked Columns

**Beschreibung:** Gibt die Spalten mit gegenwärtiger Bildlaufsperre in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << Scroll Lock;lockCols = dt << Get Scroll Locked Columns;Show( lockCols );

```

### Get Selected Columns

**Syntax:** obj &lt;&lt; Get Selected Columns

**Beschreibung:** Gibt die Namen der ausgewählten Spalten in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :weight );names = dt << Get Selected Columns;Show( names );

```

### Get Selected Properties

**Syntax:** obj &lt;&lt; Get Selected Properties( &lt;{list of properties}&gt; )

**Beschreibung:** Ausgewählte Tabelleneigenschaften (Variable und Skripts) in eine Liste abrufen. Statt auszuwählen, können Sie eine optionale Liste verwenden, um die abzurufenden Eigenschaften anzugeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Properties( {2, 4} );proplist = dt << Get Selected Properties();

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**Syntax:** obj &lt;&lt; Get Selected Rows

**Beschreibung:** Gibt die gegenwärtig ausgewählten Zeilen in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );r = dt << Get Selected Rows();Show( r );

```

### Get Table Script Names

**Syntax:** obj &lt;&lt; Get Table Script Names

**Beschreibung:** Gibt die Namen aller Eigenschaften in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );names = dt << Get Table Script Names;Show( names );

```

### Get Table Variable

**Syntax:** obj &lt;&lt; Get Table Variable( name )

**Beschreibung:** Gibt den Wert einer angegebenen Tabellenvariable in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Table Variable( "Days", 42 );var = dt << Get Table Variable( "Days" );Show( var );

```

### Get Table Variable Names

**Syntax:** obj &lt;&lt; Get Table Variable Names

**Beschreibung:** Gibt die Namen aller Variablen in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );names = dt << Get Table Variable Names;Show( names );

```

### Get Tagged Columns

**Syntax:** obj &lt;&lt; Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**Beschreibung:** Gibt die Liste der Spalten zurück, die mit den angegebenen Tags übereinstimmen. Wenn eine Schnittmenge angefordert wird, werden nur die Spalten zurückgegeben, die alle aufgeführten Tags enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt:Ozone << setProperty( "Tags", {"Air Pollution Levels"} );dt:CO << setProperty( "Tags", {"Air Pollution Levels"} );dt:SO2 << setProperty( "Tags", {"Air Pollution Levels"} );dt:NO << setProperty( "Tags", {"Air Pollution Levels"} );dt:PM10 << setProperty( "Tags", {"Air Pollution Levels"} );dt:Lead << setProperty( "Tags", {"Air Pollution Levels"} );dt << Get Tagged Columns( "Air Pollution Levels" );

```

### Get Transforms

**Syntax:** dt &lt;&lt; Get Transforms()

**Beschreibung:** Die Liste der Transformationsspalten dieser Datentabelle abrufen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :B + 1 ) );dt << Transform Column( "B", Formula( :height + 1 ) );Show( dt << Get Transforms() );dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**Syntax:** obj &lt;&lt; Get as Matrix( &lt;list of columns by name&gt;, &lt;list of columns by number&gt;, &lt;column range&gt; )

**Beschreibung:** Gibt alle angegebenen Spalten in der Datentabelle als Matrix zurück. Standard: alle numerischen Spalten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );m = dt << Get As Matrix();Show( m );x = dt << GetAsMatrix( {4, 5} );Show( x );

```

### Group Columns

**Syntax:** obj &lt;&lt; Group Columns( first column, number ) obj &lt;&lt; Group Columns( {column1, column2, ...}) obj &lt;&lt; Group Columns(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {column1, column2, ...}) obj &lt;&lt; Group Columns( group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), first column, number )

**Beschreibung:** Gruppiert eine Liste von Spalten.

#### Add to group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );Wait( 1 );theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );Wait( 2 );// add to theGrouptheGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );Wait( 1 );dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

#### Using count

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );Wait( 1 );group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**Syntax:** obj &lt;&lt; Group Scripts({ script1, script2, ...}) obj &lt;&lt; Group Scripts(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {script1, script1, ...})

**Beschreibung:** Eine Liste von Skripten gruppieren.

**JMP Version hinzugefügt:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	Path( {"GB", "Sample Graphs"} ),	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});

```

### Has Column

**Syntax:** dt &lt;&lt; Has Column( name, &lt; Exact Match(1|0) &gt; )

**Beschreibung:** Abfragen, ob die Datentabelle eine Spalte mit dem vorgegebenen Namen hat.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Has Column( "weight" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Show(	dt << Has Column( "Weight" ),	dt << Has Column( "Weight", Exact Match( 1 ) ),	dt << Has Column( "a g e" ),	dt << Has Column( "a g e", Exact Match( 1 ) ));

```

### Has data view

**Syntax:** obj &lt;&lt; Has data view

**Beschreibung:** Gibt wahr zurück, wenn in der Datentabelle ein sichtbares Fenster geöffnet ist.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Has Data View();

```

### Hide Columns

**Syntax:** obj &lt;&lt; Hide Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Beschreibung:** Blendet die Spalten im Datenraster aus

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Hide Columns( 1, {:Age, :Name} );

```

### Is Dirty

**Syntax:** obj &lt;&lt; Is Dirty

**Beschreibung:** Ermitteln, ob die Datentabelle geändert wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = dt << is Dirty;Show( a );dt << add rows( 5 );b = dt << is dirty;Show( b );

```

### Is Linked Subset

**Syntax:** obj &lt;&lt; Is Linked Subset

**Beschreibung:** Ermitteln, ob die Datentabelle eine verknüpfte Teilmenge ist

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );subset = dt << Subset( All Rows );Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### JMP Query Builder

**Syntax:** obj &lt;&lt; JMP Query Builder

**Beschreibung:** Erstellt eine Abfrage für eine oder mehrere JMP-Datentabellen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << JMP Query Builder();

```

### Join

**Syntax:** obj &lt;&lt; Join( &lt;Private&gt;, &lt;Invisible&gt;,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), &lt;Drop Multiples( 0|1, 0|1 )&gt;, &lt;Include nonmatches( 0|1, 0|1 )&gt;,&lt;Copy formula( 0|1 )&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Update&gt;, &lt;Merge Same Name Columns&gt;, &lt;Preserve Main Table Order&gt; )

**Beschreibung:** Verbindet mehrere Datentabellen zu einer neuen Datentabelle. Die Daten können nach Zeilenzuordnung, übereinstimmenden Spaltenwerten oder auf kartesische Weise verbunden werden.

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );dt2 = Open( "$SAMPLE_DATA/Little.jmp" );dt << Join(	With( Data Table( "Little" ) ),	Select( :popcorn, :oil amt, :batch, :yield ),	SelectWith( :yield ),	By Matching Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil ));

```

### Journal

**Syntax:** obj &lt;&lt; Journal

**Beschreibung:** Erstellt ein Journal aus der Datentabelle. Es wird nur das Datenraster eingeschlossen, keine Notizen, Variablen oder Skripte.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Journal();

```

### Journal Link

**Syntax:** dt &lt;&lt; Journal Link( &lt; Save( &lt;filepath&gt; ) | Embed( ) &gt;, &lt; Button Name( "Ben") &gt; )

**Beschreibung:** Hängt eine Verknüpfungsschaltfläche für eine Datentabelle an ein Journal an. Verwenden Sie embed() oder save(), doch nicht beide. Embed() hat keine Optionen. Die Option von save() ähnelt dt<<save(). Verwenden Sie ButtonName(), um die Beschriftung der Schaltfläche zu überschreiben. Gibt eine neue Verknüpfungsschaltfläche zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from tabledt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from tabledt << Journal Link(	Save( "$temp/DeleteMe1.jmp" ),	ButtonName( "Fancy Name for Temporary File" ));// even more fancy...button = dt << Journal Link( Save( "$temp/DeleteMe2.jmp" ), ButtonName( "" ) ); // no text namebutton << UnderlineStyle( 0 ); // not using the link-style appearancebutton << SetIcon( "DataTableFile" ); // add an iconbutton << SibAppend( Text Box( "Pick Me!" ), "Horizontal" ); // append a label// save it with a prompt...you can change the name in the save-as dialog...or canceldt << Journal Link( Save( "" ) ); // prompt for path and save table; button gets name from promptClose( dt, "NoSave" );

```

### Last Modified

**Syntax:** obj &lt;&lt; Last Modified

**Beschreibung:** Gibt das Datum der zuletzt gespeicherten Änderung der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );date = dt << Last Modified();Show( date );

```

### Lock Data Table

**Syntax:** obj &lt;&lt; Lock Data Table( state=0|1 )

**Beschreibung:** Sperrt die Datentabelle, sodass keine Werte bearbeitet oder hinzugefügt werden können.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Lock Data Table( 1 );// Now try changing a value in the data table.

```

### MSA Variability Chart

**Syntax:** obj &lt;&lt; MSA Variability Chart( Y( column ), X( columns ) )

**Beschreibung:** Zeigt ein Variabilitätsdiagramm an, in dem dargestellt wird, wie eine Messung über die Kategorien variiert, und führt eine Analyse durch, um zu untersuchen, wie sich der Mittelwert und die Varianz über die Kategorien ändern.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**Syntax:** obj &lt;&lt; Make Indicator Columns

**Beschreibung:** Eine nominale oder ordinale Spalte in so viele Spalten konvertieren, wie es Kategorien gibt. Die Spaltennamen der resultierenden Spalten sind die Kategorien der Quellspalte. Die Werte der resultierenden Spalten sind Nullen oder Einsen.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**Syntax:** rs = dt &lt;&lt; Make RowState Handler( function(a) )

**Beschreibung:** Erstellt einen Zeileneigenschafts-Handler für die Datentabelle. Das Argument der Funktion enthält die Zeilen, deren Zeileneigenschaften geändert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );f = Function( {a}, Print( a ) );rs = dt << make row state handler( f );dt << Select Rows( 1 );dt << Select Rows( 5 );

```

### Make SAS DATA Step

**Syntax:** sd = dt &lt;&lt; Make SAS Data Step( ) sd = dt &lt;&lt; Make SAS Data Step( SaveJMPMetadata(true) )

**Beschreibung:** Gibt die Datentabelle als SAS-DATA-Step zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );sd = dt << Make SAS Data Step();Show( sd );

```

### Make SAS DATA Step Window

**Syntax:** sd = dt &lt;&lt; Make SAS Data Step Window( ) sd = dt &lt;&lt; Make SAS Data Step Window( SaveJMPMetadata(true) )

**Beschreibung:** Öffnet ein neues Fenster vom Typ SAS und erstellt einen SAS-DATA-Step aus der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );sd = dt << Make SAS Data Step Window();

```

### Merge Referenced Data

**Syntax:** obj &lt;&lt; Merge Referenced Data

**Beschreibung:** Erzeugt eine eigenständige Tabelle, indem die Daten aus der Quelltabelle mit den Referenzspalten verbunden werden und die Verknüpfung aufgehoben wird. Die Eigenschaft „Verknüpfungsreferenz“ der Referenzspalten wird ebenfalls entfernt.

```jsl

dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );dt1:ID << Set Property( "Link ID", 1 );dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**Syntax:** obj &lt;&lt; Missing Data Pattern( columns( columns ), &lt;Output Table( name )&gt; )

**Beschreibung:** Findet Muster fehlender Werte in der Datentabelle und erstellt eine Tabelle von jedem Muster mit seiner Häufigkeit.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Missing Data Pattern(	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead ));

```

### Move Column Group

**Syntax:** obj &lt;&lt; Move Column Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(column) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Beschreibung:** Spaltengruppe an angegebenen Speicherort verschieben. Wenn der Name der Spaltengruppe ausgelassen wird, werden alle Gruppen verschoben.

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << move column group( "Pollutants", after( "xy" ) );

```

#### Move all

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << move column group( to first );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << move column group( "xy", to first );

```

### Move Script Group

**Syntax:** obj &lt;&lt; Move Script Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Beschreibung:** Skriptgruppe an angegebenen Speicherort verschieben. Wenn der Name der Skriptgruppe ausgelassen wird, werden alle Gruppen verschoben.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << move script group( "VL", after( "Oneway" ) );Wait( 1 );dt << move script group( "GB", after( "VL" ) );Wait( 1 );dt << move script group( "VL", after( Path( {"GB"} ) ) );Wait( 1 );dt << move script group( to first );

```

### Move Selected Scripts

**Syntax:** obj &lt;&lt; Move Selected Scripts( script|list of scripts|group|Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Beschreibung:** Skripte an den angegebenen Speicherort verschieben.

**JMP Version hinzugefügt:** 14

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

#### Move Group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	Path( {"GB", "Graphs"} ),	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move Selected scripts(	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"},	to first);

```

### Move down

**Syntax:** obj &lt;&lt; Move down

**Beschreibung:** Ersetzt die Werte in der ersten Zeile der Datentabelle mit den Spaltennamen und ersetzt die Spaltennamen mit voreingestellten aufeinanderfolgenden Namen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move down;

```

### Move up

**Syntax:** obj &lt;&lt; Move up

**Beschreibung:** Ersetzt die Spaltennamen mit den Werten in der ersten Zeile der Datentabelle.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move up;

```

### Move up and append

**Syntax:** obj &lt;&lt; Move up and append

**Beschreibung:** Ersetzt die Spaltennamen durch Anhängen der Werte in der ersten Zeile der Datentabelle an die entsprechenden Spaltennamen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move up and append;

```

### New Data Box

**Syntax:** obj &lt;&lt; New Data Box( &lt; &lt;&lt;Enable Filter Views(0|1) &gt; )

**Beschreibung:** Erzeugt eine Datentabellenansicht in einem Anzeigefeldbaum. Ändert die aktuelle Datentabelle in die vorgegebene Datentabelle. Das optionale Argument Enable Filter Views steuert, ob die Ansicht Filteransichten zulässt; standardmäßig sind sie zugelassen.

```jsl

dtA = Open( "$SAMPLE_DATA/Big Class.jmp", invisible );New Window( "school",	H List Box(		dtA << New Data Box(),		Text Box(),		dtA << Distribution(			ContinuousDistribution( Column( :weight ) ),			NominalDistribution( Column( :age ) )		)	));dtA = 0;

```

### New Data View

**Syntax:** obj &lt;&lt; New Data View

**Beschreibung:** Erstellt eine neue Ansicht der Datentabelle. Diese Ansicht ist mit dem Original insofern verknüpft, als dass alle Hervorhebungen oder Änderungen sich auch auf das Original auswirken. Dies ist nützlich, wenn Sie zu verschiedenen Teilen in einer Tabelle blättern müssen.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << New Data View();

```

### New Filter View

**Syntax:** fv = dt &lt;&lt; New Filter View( &lt; name &gt;, &lt; Copy From(name|obj) &gt;, &lt; Temporary(0|1) &gt;, &lt; Active(0|1) &gt;, &lt; DataFilter(expr) &gt;)

**Beschreibung:** Eine neue Filteransicht erstellen. Das erstellte FilterView-Objekt wird zurückgegeben. Die neue Filteransicht ist standardmäßig aktiv. Wenn Sie die Filteransicht nicht benennen, ist sie temporär, es sei denn, Sie setzen Temporary auf null.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream Inverse",	Data Filter(		Data Filter(			Inverse( 1 ),			Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )		)	));

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) ));dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**Syntax:** New Property( name, script ) New Script( name, script )

**Beschreibung:** Erstellt eine neue Skripteigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table Variable

**Syntax:** obj &lt;&lt; New Table Variable( name, number )

**Beschreibung:** Erstellt eine neue Variable in der Datentabelle und legt sie als konstanten Wert fest. Wenn es eine vorhandene Variable mit dem gleichen Namen gibt, wird an den Namen der neuen Variable eine Zahl angehängt, damit diese eindeutig ist. Der ähnliche Befehl „Set Table Variable“ wird für die meisten Fälle empfohlen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Variable( "Days", 42 );

```

### OC Curves

**Syntax:** obj &lt;&lt; OC Curves

**Beschreibung:** Erstellt einen Graphen für die Wahrscheinlichkeit, eine Prozessverschiebung nicht zu erkennen als Funktion der Größe der Verschiebung.

**JMP Version hinzugefügt:** 16

### Partition

**Syntax:** obj &lt;&lt; Partition( Y( column ), X( column(s) ) )

**Beschreibung:** Erzeugt einen Entscheidungsbaum durch rekursive Partitionierung der Daten entsprechend der Beziehung zwischen den Prädiktor- und den Zielgrößenwerten. Zielgröße und Prädiktoren können beide entweder stetig oder kategorial sein.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));

```

### Paste Column Properties

**Syntax:** obj &lt;&lt; Paste Column Properties

**Beschreibung:** Fügt aus der Zwischenablage mehrere Listen mit Spalteneigenschaften in mehrere Spalten ein. Optional können Sie eine Liste mit Zielspalten angeben, statt sie in der Datentabelle auszuwählen.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Copy Column Properties( {:MODULUS, :ELONG} );dt2 = New Table( "test it",	New Column( "T1", numeric, continuous ),	New Column( "T2", numeric, continuous ),	New Column( "T3", numeric, continuous ),	Add Rows( 10 ));dt2 << Paste Column Properties( {:T1, :T3} );

```

### Recode

**Syntax:** obj &lt;&lt; Recode

**Beschreibung:** Die alten Werte von ausgewählten Spalten in neue Werte neu codieren.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :weight );dt << Recode;

```

### Recode Column

**Syntax:** obj &lt;&lt; Recode Column(&lt;source column reference&gt;, {&lt;transform&gt;, ...}, &lt;Update Properties(0|1)&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;, Target Column(&lt;column reference&gt; | &lt;column name&gt;))

**Beschreibung:** Wendet die aufgeführten Transformationen für jeden Wert von der Quellspalte an und speichert das Ergebnis in der ursprünglichen Spalte oder der angegebene Zielspalte. Die Option By Word teilt die ursprünglichen Zeichendaten in kürzere Eingabewerte auf. Sobald die Eingabewerte bestimmt sind, werden die Transformationen auf diese Werte separat angewendet.

Spezielle JSL-Variablen werden während der Ausführung des Befehls gefüllt:

	_rcNow ist der aktuelle Wert der Eingabe nach der/den vorherigen Transformation(en).

	_rcOrig ist der ursprüngliche Wert der Eingabe.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( :age );col << Data Type( "Character" );dt << Recode Column(	:age,	{If( _rcNow >= 17, "Older", _rcNow >= 15, "Middle", "Younger" )},	Target Column( col ));

```

### Rename Column Group

**Syntax:** obj &lt;&lt; Rename Column Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Beschreibung:** Spaltengruppe umbenennen.

#### Einfache Gruppe

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );Wait( 1 );dt << rename column group( "xy", "coordinates" );

```

#### Geschachtelte Gruppe

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );Wait( 1 );dt << rename column group( Path( {"xy"} ), "XY" );dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

### Rename Script Group

**Syntax:** obj &lt;&lt; Rename Script Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Beschreibung:** Skriptgruppe umbenennen

**JMP Version hinzugefügt:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	Path( {"GB", "Graphs"} ),	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**Syntax:** obj &lt;&lt; Rename Table Property( old name, new name )

**Beschreibung:** Benennt die angegebene Tabelleneigenschaft um.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );Wait( 1 );dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**Syntax:** obj &lt;&lt; Rename Table Script( old name, new name )

**Beschreibung:** Benennt das angegebene Tabellenskript um.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );Wait( 1 );dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**Syntax:** obj &lt;&lt; Rename Table Variable( old name, new name )

**Beschreibung:** Benennt eine angegebene Tabellenvariable um.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Variable( "Days", 42 );Wait( 2 );dt << Rename Table Variable( "Days", "Hours" );

```

### Rerun Formulas

**Syntax:** obj &lt;&lt; Rerun Formulas

**Beschreibung:** Wertet alle Spaltenformeln in der Datentabelle neu aus.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 100 );dt << Rerun Formulas;

```

### Reset Transforms

**Syntax:** dt &gt;&gt; Reset Transforms()

**Beschreibung:** Beim Zugriff auf Transformationsspalten werden deren Daten für künftige Aufrufe gepuffert. Diese Funktion entfernt diese Daten. Die Daten werden erneut erstellt, wenn wieder auf die Spalte zugegriffen wird.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Reset Transforms();

```

### Revert

**Syntax:** obj &lt;&lt; Revert

**Beschreibung:** Macht alle Änderungen an der Datentabelle rückgängig.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Row States(	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]);Wait( 2 );dt << revert();

```

### Run Formulas

**Syntax:** obj &lt;&lt; Run Formulas

**Beschreibung:** Führt alle ausstehenden Formelauswertungen durch. Nicht alle Formeln werden ausgewertet.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 10000 );dt << Run Formulas();Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**Syntax:** obj &lt;&lt; Run Script( name )

**Beschreibung:** Führt ein bestehendes Skript aus, das als Eigenschaft in der Datentabelle gespeichert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Run Script( "Distribution" );

```

### Save

**Syntax:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Beschreibung:** Speichert die Datentabelle in jedem unterstützten Format. Unterstützt werden die Formate \*.jmp, \*.xls, \*.xlsx, \*.txt, \*.csv, \*.tsv, \*.xpt, \*.v8xpt, \*.stx, \*.sqlite, \*.db, \*.sqlite3 und \*.db3. Einige Formate werden nur unter Windows unterstützt. Weitere Informationen finden Sie unter „JMP verwenden“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit locationIf( dt << Save( "" ),	Write( "\!nsaved to " || (dt << GetPath) ),	Write( "\!nsave canceled" )); // promptdt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV formatClose( dt, "NoSave" );

```

### Save As

**Syntax:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Beschreibung:** Speichert die Datentabelle in jedem unterstützten Format. Unterstützt werden die Formate \*.jmp, \*.xls, \*.xlsx, \*.txt, \*.csv, \*.tsv, \*.xpt, \*.v8xpt, \*.stx, \*.sqlite, \*.db, \*.sqlite3 und \*.db3. Einige Formate werden nur unter Windows unterstützt. Weitere Informationen finden Sie unter „JMP verwenden“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit locationIf( dt << Save( "" ),	Write( "\!nsaved to " || (dt << GetPath) ),	Write( "\!nsave canceled" )); // promptdt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV formatClose( dt, "NoSave" );

```

### Save Database

**Syntax:** obj &lt;&lt; Save Database( connectInfo, TableName )

**Beschreibung:** Speichert die Datentabelle zurück in eine Datenbank.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Save Database( "Connect Dialog", "My_Class" );

```

### Screen Predictors

**Syntax:** obj &lt;&lt; Screen Predictors

**Beschreibung:** Dies ist ein Alias und ein alter Name für Prädiktor-Screening.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**Syntax:** obj &lt;&lt; Select Column Group( name of group | list of names )

**Beschreibung:** Spaltengruppen auswählen.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << select column group( "xy", "pollutants" );

```

### Select Properties

**Syntax:** obj &lt;&lt; Select Properties( { property1, property2, ... )

**Beschreibung:** Angegebene Tabelleneigenschaften auswählen, wobei die Liste aus Eigenschaftsnamen oder Indizes auf die Eigenschaften bestehen kann.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );proplist = dt << Select Properties( {2, 4} );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**Syntax:** obj &lt;&lt; Select Script Group( &lt;name of group | { group1, group2, ...} &gt; )

**Beschreibung:** Skriptgruppen auswählen. Wenn keine Skriptgruppe vorgegeben wird, werden alle Gruppen ausgewählt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << select script group( "VL" );

```

### Select Scripts

**Syntax:** obj &lt;&lt; Select Scripts( &lt;name of script | { script1, script2, ...} &gt; )

**Beschreibung:** Benannte Skripte auswählen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );a = dt << get script group( "GB" );dt << select scripts( a );

```

### Select columns

**Syntax:** obj &lt;&lt; Select columns( &lt;column&gt;, &lt;column&gt;, ... )

**Beschreibung:** Angegebene Spalten auswählen. Um alle Spalten auszuwählen, verwenden Sie das Schlüsselwort „All“.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << Select Columns( :Height );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << Select Columns( "All" );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );clist = {:Height, :Weight};dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**Syntax:** obj &lt;&lt; Sequencing Variants Toolset

**Beschreibung:** Schnittstelle zur Add-in-Plattform für das Sequenzierungsvarianten-Toolset

### Set Active Filter View

**Syntax:** obj &lt;&lt; Set Active Filter View( name | obj )

**Beschreibung:** Aktive Filteransicht festlegen

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Wait( 1 );dt << Set Active Filter View( "Dream" );

```

### Set Cell Height

**Syntax:** obj &lt;&lt; Set Cell Height( number )

**Beschreibung:** Anzeigehöhe jeder Zelle in der Datentabelle festlegen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Cell Height( 20 );

```

### Set Dirty

**Syntax:** obj &lt;&lt; Set Dirty( state=0|1 )

**Beschreibung:** Markiert die Datentabelle als geändert, auch wenn keine Änderungen vorgenommen wurden. Dies ist nützlich, wenn beim Schließen die Aufforderung zum Speichern angezeigt werden soll.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Dirty();

```

### Set Edit Lock

**Syntax:** obj &lt;&lt; Set Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Beschreibung:** Angegebene Operationen in der Datentabelle nicht gestatten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**Syntax:** obj &lt;&lt; Set Header Height( number )

**Beschreibung:** Anzeigehöhe der Spaltenüberschrift festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Header Height( 20 );

```

### Set Label Columns

**Syntax:** obj &lt;&lt; Set Label Columns( column(s) )

**Beschreibung:** Weist ausgewählten Spalten in der Datentabelle die Beschriftungseigenschaft zu.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Set Label Columns( :City, :State );

```

### Set Matrix

**Syntax:** obj &lt;&lt; Set Matrix( [ matrix with rows separated by commas ] )

**Beschreibung:** Erstellt eine Datentabelle aus einer Matrix.

```jsl

dt = New Table( "B" );dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**Syntax:** obj &lt;&lt; Set Name( new TableName )

**Beschreibung:** Ändert den Namen der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Name( "New Class" );

```

### Set Property

**Syntax:** obj &lt;&lt; Set Property( name, script )

**Beschreibung:** Erstellt eine neue Skripteigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**Syntax:** obj &lt;&lt; Set Row ID Width( number )

**Beschreibung:** Anzeigebreite des Zeilen-ID-Bereichs festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Row ID Width( 80 );

```

### Set Row States

**Syntax:** obj &lt;&lt; Set Row States( [state1, state2, ... stateN] )

**Beschreibung:** Legt die Zeileneigenschaft für alle Zeilen in der Datentabelle fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Row States(	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]);

```

### Set Scroll Lock Columns

**Syntax:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Beschreibung:** Sperrt den Bildlauf ausgewählter Spalten in der Datentabelle. Um kenntlich zu machen, dass eine Spalte gesperrt ist, wechselt die Hintergrundfarbe.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**Syntax:** obj &lt;&lt; Set Table Variable( name, number )

**Beschreibung:** Erstellt eine neue Variable in der Datentabelle und legt sie als konstanten Wert fest. Eine vorhandene Variable mit dem gleichen Namen wird überschrieben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**Syntax:** obj &lt;&lt; Show Header Filter Icons( state=0|1 )

**Beschreibung:** Die Filtersymbole in Spalten in der aktuellen Filteransicht anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**Syntax:** obj &lt;&lt; Show Header Graphs( state=0|1 )

**Beschreibung:** Die Header-Graphen in der Datentabellenanzeige anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Graphs( 0 );

```

### Show Header Groups

**Syntax:** obj &lt;&lt; Show Header Groups( state=0|1 )

**Beschreibung:** Die Spaltengruppen in der Datentabellenanzeige anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Groups( 0 );

```

### Show Header Statistics

**Syntax:** obj &lt;&lt; Show Header Statistics( state=0|1 )

**Beschreibung:** Die Header-Kenngrößen in der Datentabellenanzeige anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Statistics( 0 );

```

### Show Header Tags

**Syntax:** obj &lt;&lt; Show Header Tags( state=0|1 )

**Beschreibung:** Die Spalten-Tags in der Datentabellenanzeige anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**Syntax:** obj &lt;&lt; Show Hidden Columns In Columns List( state=0|1 )

**Beschreibung:** Ausschalten, um ausgeblendete Spalten aus der Liste der Spalten der Datentabelle auszuschließen. Diese Spalten werden nie im Datenraster angezeigt.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );Wait( 1 );dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**Syntax:** dt &lt;&lt; Show Transforms()

**Beschreibung:** Informationen über die Transformationsspalten dieser Datentabelle und ihre Plattformen ins Log schreiben. Dies dient der Information und das Format kann sich ändern. Die Syntax sollte nicht ausgeführt werden.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :height + 1 ) );dt << Show Transforms();dt << Delete Columns( :A );

```

### Sort

**Syntax:** obj &lt;&lt; Sort( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Replace table&gt;, By( column ), Order( ascending|descending ) )

**Beschreibung:** Erstellt eine neue Datentabelle, die anhand angegebener Spalten in aufsteigender oder absteigender Reihenfolge sortiert wird.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Sort( By( :name ), Order( Ascending ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**Syntax:** obj &lt;&lt; Split( Split( columns ), Split by( column ), &lt;Group(column)&gt;, &lt;Private&gt;|&lt;Invisible&gt;, &lt;Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Suppress formula evaluation( 0|1 )&gt;, &lt;Sort by Column Property&gt;, &lt;Output Table( "name" )&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle, die mehrere Zeilen einer Spalte einer Zeile in mehreren Spalten zuordnet.

```jsl

dt = Open( "$SAMPLE_DATA/Restaurant Tips.jmp" );:Day of Week << set property( "Row Order Levels", 1 );dt << Split(	Split By( :Day of Week ),	Split( :Bill Amount ),	Sort by Column Property,	remaining columns( drop all ));

```

### Stack

**Syntax:** obj &lt;&lt; Stack( &lt;Private&gt;, &lt;Invisible&gt;, columns( columns ), &lt;Source Label Column( string )&gt;, &lt;Stacked Data Column( string )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Number of Series(n)&gt;, &lt;Contiguous&gt;, &lt;Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))&gt;, &lt;Output Table( "name" )&gt;) )

**Beschreibung:** Erstellt eine neue Datentabelle mit Werten aus mehreren Spalten gestapelt in einer einzigen Spalte.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << Stack(	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Source Label Column( "Time" ),	Stacked Data Column( "Log Hist" ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Stack(	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	,	Number of Series( 3 ),	Contiguous,	Source Label Column( "Day" ),	Stacked Data Column( "BP" ));

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Stack(	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	,	Number of Series( 3 ),	Source Label Column( "Time" ),	Stacked Data Column( "BP" ));

```

### Subscribe

**Syntax:** obj &lt;&lt; Subscribe( Key( &lt;"client"&gt; ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**Beschreibung:** Abonniert den Abruf von Meldungen zu Änderungen in der Datentabelle. Schlüssel ist der Abonnementname, damit dieser referenziert werden kann. Der optionale Parameter, client, löst eine Bestätigung zum Schließen aus, wenn versucht wird, die Datentabelle zu schließen. Funktion kann entweder der Name einer zuvor definierten Funktion oder die Funktion selbst sein. On Close benötigt nur ein Argument für die Funktion, die Datentabelle. Die anderen Meldungen benötigen ein weiteres Argument, entweder eine Liste der betroffenen Spalten oder die Anzahl der betroffenen Zeilen. Jedes Abonnement bleibt wirksam, bis Sie das Abonnement aufheben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subscribe( "name1"("client"), On Close( Print( "Closing Data Table" ) ) );f = Function( {dtab, oldname},	Print( "oldname", oldname );	Print( "new name", dtab << getname() ););fsave = Function( {dtab, newpathname},	Print( "new path name", newpathname );	Print( "new name", dtab << getname() ););dt << Subscribe( "name1", On Rename( f ) );dt << Subscribe( "name1", On Save( fsave ) );fcols = Function( {dtab, b},	n = N Items( b );	dtname = (dtab << getname());	Print( dtname );	Print( n );	For( i = 1, i <= n, i++,		colname = (b[i] << getname());		Print( colname );	););dt << Subscribe( "name2", On Delete Columns( fcols ) ); //Try deleting a column, then close the data table.

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );f = Function( {dtab, col, oldname},	Print( dtab << getname() );	Print( "new column name", (col << getname()) );	Print( "old name", oldname ););sub = dt << Subscribe( "", OnRenameColumn( f ) );Column( dt, 1 ) << set name( "test" );Wait( 1 );dt << unsubscribe( sub, on rename column );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );delRowsFn = Function( {a, b, rows},	dtname = (a << Get Name());	Print( dtname );	Print( b );	Print Matrix( rows ););addRowsFn = Function( {a, b, insert},	dtname = (a << Get Name());	Print( dtname );	Print( b );	Print( insert ););dt << subscribe( "Test Delete", onDeleteRows( delRowsFn, 3 ) );dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );// Try deleting some rows and adding new ones.

```

### Subset

**Syntax:** obj &lt;&lt; Subset( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Selected columns&gt;, &lt;Columns(column list)&gt;, &lt;All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])&gt;, &lt;By(column list)&gt;, &lt;Sampling Rate(fraction)&gt;, &lt;Sample Size(integer)&gt;, &lt;Stratify(column list)&gt;, &lt;Link to original data table(0|1)&gt;, &lt;Copy formula(0|1)&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Keep by columns&gt; )

**Beschreibung:** Erstellt mit den ausgewählten Zeilen und Spalten der Quelldatentabelle eine neue Datentabelle. Sie können auch zufällig Zeilen für eine Teilmenge auswählen.

#### Gefilterte Zeilen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

#### Geschichtete Stichprobe

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

#### Nach

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( By( :sex ), Keep by columns );

```

#### Zeilen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

### Summary

**Syntax:** obj &lt;&lt; Summary( &lt;Private&gt;, &lt;Invisible&gt;, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), &lt;N (column)&gt;, &lt;Mean( column )&gt;, &lt;Std Dev( column )&gt;, &lt;Min( column )&gt;, &lt;Max( column )&gt;, &lt;Range( column )&gt;, &lt;Sum( column )&gt;, &lt;CV( column )&gt;...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**Beschreibung:** Erstellt eine neue Datentabelle mit statistischen Kenngrößen. Wenn angegeben, gibt es eine Zeile für jede Stufe einer Gruppierungsvariablen oder jede Kombination aus Stufen von mehreren Gruppierungsvariablen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Summary(	Group( :Age ),	subgroup( :sex ),	Mean( :Height ),	Include marginal statistics);

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Summary(	Group( :Age ),	Mean( :Height ),	statistics column name format( "stat of column" ));

```

### Suppress Formula Eval

**Syntax:** obj &lt;&lt; Suppress Formula Eval( state=0|1 )

**Beschreibung:** Unterdrückt oder aktiviert die Formelauswertung. Dies ist nützlich zum schnelleren Hinzufügen von Zeilen, zum Ausführen mehrerer Analysen und zum Sortieren.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 2000 );dt << Suppress Formula Eval( 1 );dt << Add Rows( 2000 );dt << Suppress Formula Eval( 0 );

```

### Text to Columns

**Syntax:** obj &lt;&lt; Text to Columns( delimiters(&lt;"separator"&gt;, &lt;TAB&gt;, &lt;NEWLINE&gt;), columns(column1, column2, ...) )

**Beschreibung:** Eine Spalte mit Zeichenketten mit eingebettetem Trennzeichen in separate Spalten konvertieren. Die resultierenden Spalten können Indikatorspalten sein. Ein Trennzeichen kann ein beliebiges Zeichen, das Schlüsselwort TAB oder das Schlüsselwort NEWLINE sein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns(	delimiter( "," ),	columns( :Brush Delimited ),	Make Indicator Columns( 1 ));

```

### Torch Deep Learning

**Syntax:** obj &lt;&lt; Torch Deep Learning

**Beschreibung:** Schnittstelle zur Torch Deep Learning Add-in-Plattform

### Transform Column

**Syntax:** dt &lt;&lt; Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Replace(0|1)], [Private(0|1)], [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**Beschreibung:** Eine Transformationsspalte für die Zieltabelle erstellen. Auf die Transformationsspalte kann wie eine reale Spalte zugegriffen werden. 

	Name: Name der Spalte

	Formel: Die Formel, die die Daten in der Transformationsspalte definiert

	Ersetzen: Mit diesem Flag ersetzt eine Transformation mit demselben Namen wie eine vorhandene Transformation die vorhandene Transformation. Ohne dieses Flag wird die vorhandene Transformation zurückgegeben, wenn sie äquivalent ist; ansonsten wird der Name der neuen Spalte so geändert, dass er sich unterscheidet.

	Privat: Mit diesem Flag wird die Spalte in den Spaltenauswahllisten nicht angezeigt

	Datentyp: Geben Sie optional den Datentyp an. Wird keiner angegeben, wird er aus der ersten Zeile abgeleitet.

	Modellierungstyp: Geben Sie optional den Modellierungstyp an. Wird keiner angegeben, wird der Standardwert für den Datentyp verwendet

	Spalteneigenschaften: Dies sind beliebige Standardspalteneigenschaften, die Sie festlegen möchten. Sie können sie auch nach der Erstellung direkt in der Spalte festlegen.

**JMP Version hinzugefügt:** 16

#### Nested

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :B + 1 ) );dt << Transform Column( "B", Formula( :height + 1 ) );Show( :A[1] );dt << Delete Columns( {:A, :B} );

```

#### Random

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "Predictable", Formula( Random Uniform() ), Random Seed( 314 ) );dt << Transform Column( "Random", Formula( Random Uniform() ) );Show( :Predictable[1], :Random[1] );dt << Delete Columns( {:Predictable, :Random} );

```

#### Simple

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :height + 1 ) );Show( :A[1] );dt << Delete Columns( :A );

```

### Transpose

**Syntax:** obj &lt;&lt; Transpose( &lt;Private&gt;, &lt;Invisible&gt;,columns( columns ), By( column ), &lt;Label( column )&gt;, &lt;Output Table( name )&gt; )

**Beschreibung:** Erstellt eine Datentabelle aus der Quelltabelle, wobei die Zeilen und Spalten miteinander getauscht werden.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Transpose(	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	By( :Dose ),	Label( :Subject ));

```

### Type 1 Gauge

**Syntax:** obj &lt;&lt; Type 1 Gauge( Y( column ) )

**Beschreibung:** Analysiert Messsysteme mit stetigen Daten mithilfe der Methode Messsystem Typ 1, um die Fähigkeit eines Messprozesses an einem Teil auszuwerten.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Type 1 Gauge MSA.jmp" );dt << Type 1 Gauge(	Y( :Y1, :Y2, :Y3 ),	Type 1 Gauge Metadata(		:Y1( Tolerance Range( 2 ), Reference( 50.014 ), Resolution( .001 ) ),		:Y2( Tolerance Range( 6 ), Reference( 24.9 ), Resolution( .01 ) ),		:Y3( Tolerance Range( 5 ), Reference( 10 ), Resolution( .0005 ) )	));

```

### Ungroup Columns

**Syntax:** obj &lt;&lt; Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**Beschreibung:** Hebt die Gruppierung einer Liste von Spalten auf.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );Wait( 2 );dt << Ungroup Columns();

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );Wait( 2 );dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**Syntax:** obj &lt;&lt; Ungroup Scripts( name of script group | list of scripts )

**Beschreibung:** Gruppierung einer Liste von Skripten aufheben. Wenn keine Skripte vorgegeben sind, werden ausgewählte Skripte von der Gruppe gelöst. Alle Gruppen werden aus ihrer Gruppierung entfernt, wenn kein Skript vorgegeben ist und kein Skript ausgewählt ist.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << ungroup scripts( "VL" );Wait( 1 );dt << ungroup scripts( {"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"} );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );Wait( 1 );dt << ungroup scripts();

```

### Unsubscribe

**Syntax:** obj &lt;&lt; Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**Beschreibung:** Vorheriges Abonnement der Datentabelle abbrechen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );dt << Unsubscribe( "myname", On Close );

```

### Update

**Syntax:** obj &lt;&lt; Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), Replace columns in main table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), &lt;Ignore missing&gt; )

**Beschreibung:** Führt eine Tabelle mit aktualisierten Daten mit der ursprünglichen Datentabelle zusammen, indem ausgewählte Spalten hinzugefügt oder ersetzt werden.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );dt2 = Open( "$SAMPLE_DATA/Little.jmp" );dt << Update(	With( Data Table( "Little" ) ),	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil ));

```

**Beispiel 2**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) ));dt1 << Update(	With( Data Table( "Little Class" ) ),	Match Columns( :name = :name ),	Add columns from Update table( {:RANK} ),	Replace columns in Main Table( {:height} ));

```

**Beispiel 3**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) ));dt1 << Update(	With( Data Table( "Little Class" ) ),	Match Columns( :name = :name ),	Add columns from Update table( {:RANK} ));

```

### Update From Database

**Syntax:** obj &lt;&lt; Update From Database( connectInfo )

**Beschreibung:** Aktualisiert die Daten in der Tabelle mit aus der Datenbank erneut importierten Daten.

```jsl

dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );dt << Update From Database( "Connect Dialog" );

```

### XGBoost

**Syntax:** obj &lt;&lt; XGBoost

**Beschreibung:** Experimentelles Interface zu XGBoost für Vorhersagemodellierung von stochastischem Gradienten-Boosting.

### set private

**Syntax:** obj &lt;&lt; set private( &lt;1|0&gt; )

**Beschreibung:** Tabelle als privat festlegen. Eine private Tabelle wird in der Datentabellenliste und in den Abonnements weggelassen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Show( Get Data Table List() );Wait( 1 );dt << Set Private;Show( Get Data Table List() );Wait( 1 );dt << Set Private( 0 );Show( Get Data Table List() );Wait( 1 );Close( dt, No Save );

```

## Zugehörige Konstruktoren

### Association Analysis

**Syntax:** Association Analysis( Item( columns ), ID( columns ) )

**Beschreibung:** Identifiziert Verbindungen zwischen Gruppen von Items in einem unabhängigen Ereignis oder in einer unabhängigen Transaktion. Die Zusammenhangsanalyse wird häufig für die Analyse von Transaktionsdaten (auch Warenkörbe genannt) verwendet, um Items zu identifizieren, die in Transaktionen häufig zusammen vorkommen.

```jsl

dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**Syntax:** Attribute Chart( Y( columns ), X( columns ) )

**Beschreibung:** Analysiert kategoriale Messungen, um Ihnen übereinstimmende Messungen über Zielgrößen hinweg anzuzeigen, beispielsweise Bewerter.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**Syntax:** Bayesian Optimization( Y( columns ), X( columns ) )

**Beschreibung:** Empfiehlt Faktoreinstellungen zum Optimieren der Zielgrößen durch Erweitern der Datentabelle.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

### Bivariate

**Syntax:** Bivariate( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine stetige Zielgröße in Bezug auf eine andere stetige Variable. Analysemethoden sind u.a. Anpassung von Linien, Polynomen, Splines und bivariaten Dichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**Syntax:** Boosted Tree (Y( column ), X( columns ))

**Beschreibung:** Erzeugt ein Vorhersagemodell durch Erstellung eines großen, additiven Entscheidungsbaums, der eine Folge von kleineren Entscheidungsbäumen ist. Jeder der Bäume wird auf die Residuen des vorherigen Baums angepasst.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Bootstrap Forest

**Syntax:** Bootstrap Forest (Y( column ), X( columns ))

**Beschreibung:** Erzeugt ein Vorhersagemodell durch Mittelwertbildung von Vorhersagewerten aus vielen Entscheidungsbäumen. Jeder Entscheidungsbaum wird an eine zufällige Bootstrap-Stichprobe der Trainingsdaten angepasst.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Minimum Splits Per Tree( 5 ),	Portion Bootstrap( 1 ),	Number Terms( 3 ),	Number Trees( 25 ),	Go);

```

### Bubble Plot

**Syntax:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**Beschreibung:** Erzeugt ein zweidimensionales Streudiagramm aus Blasen, das über eine Zeitvariable animiert werden kann. Zusätzliche Variablen können für die Größe und Farbe der Blasen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### CUSUM Control Chart

**Syntax:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**Beschreibung:** Erstellt eine Regelkarte, in der die kumulierten Summen von Abweichungen von Mittelwerten von Untergruppen von einem Ziel dargestellt werden. Diese Regelkarte wird auch tabellarische CUSUM-Regelkarte genannt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );obj = dt << CUSUM Control Chart(	Y( :weight ),	H( 2 ),	Lower Side( 1 ),	Target( 8.1 ),	K( 0.025 ),	Sigma( 0.05 ),	Head Start( 0.05 ));

```

### Categorical

**Syntax:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Beschreibung:** Fasst kategoriale Zielgrößendaten zusammen und analysiert sie. Daten können einfache Zielgrößen, Mehrfachantworten, Messwiederholungen, Bewerterübereinstimmung, ausgerichtete Zielgrößen oder freier Text sein. Umfasst die Möglichkeit, benutzerdefinierte Kreuztabellen von Zielgrößen zu erzeugen.

#### Ausgerichtete Zielgrößen

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		Empty(),		Empty(),		Aligned Responses(			:I am working on my career, :I want to see the world,			:My home needs some major improvements, :I have vast interests outside of work,			:I want to get my debt under control, :I come from a large family		)	));

```

#### Bewerterübereinstimmung

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );Categorical( Rater Agreement( :A, :B, :C ) );

```

#### Drei Zielgrößen nach zwei einzelnen Faktoren (strukturiert)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:I am working on my career + :I want to see the world,		:Gender + :Single Status + :Age Group	));

```

#### Eine Zielgröße nach zwei geschachtelten Faktoren

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

#### Geschachtelt innerhalb einzelner Faktoren

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:Single Status * :Gender + :School Age Children * :Gender,		:I am working on my career + :I want to see the world	));

```

#### Mehrfachantwort (strukturiert)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical( Structured( :Gender, :Brush Delimited + :Floss Delimited ) );

```

#### Mehrfachantwort mit geschachtelten Gruppen

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );Categorical( X( :clean, :date ), Multiple Response( :Failure1, :Failure2, :Failure3 ) );

```

#### Messwiederholungen

```jsl

dt = Open( "$SAMPLE_DATA/Presidential Elections.jmp" );Categorical(	Repeated Measures(		:"1980 Winner"n, :"1984 Winner"n, :"1988 Winner"n, :"1992 Winner"n, :"1996 Winner"n,		:"2000 Winner"n, :"2004 Winner"n, :"2008 Winner"n, :"2012 Winner"n	));

```

### Cell Plot

**Syntax:** Cell Plot( Y( column(s) ), &lt;X( column )&gt; )

**Beschreibung:** Erzeugt ein rechteckiges Raster aus Zellen, die mit Eins-zu-Eins-Entsprechung zu den Datentabellenwerten gezeichnet werden. Die Zellen im Raster werden entsprechend den Werten in den Zellen farblich gekennzeichnet.

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );obj = dt << Cell Plot(	Y(		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,		:"1992 Math"n	));

```

### Choice

**Syntax:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Beschreibung:** Modelliert Daten eines Choice-Versuchs zur Untersuchung von Kundenvorlieben. Schätzt mithilfe einer Form von bedingter logistischer Regression die Wahrscheinlichkeit, dass eine spezifische Konfiguration bevorzugt wird.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );obj = dt << Choice(	Response Data Table( Data Table( "Pizza Responses" ) ),	Profile DataTable( Data Table( "Pizza Profiles" ) ),	Response Profile ID Chosen( :Choice ),	Response Subject ID( :Subject ),	Response Profile ID Choices( :Choice1, :Choice2 ),	Profile ID( :ID ),	Profile Effects( :Crust, :Cheese, :Topping ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );obj = Choice(	One Table( 1 ),	Profile DataTable( dt ),	Profile ID( :Indicator ),	Profile Effects( :Crust, :Cheese, :Topping ),	Profile Grouping( :Subject, :Trial ));

```

### Close

**Syntax:** Close( data table name, &lt;NoSave|Save("path")&gt; )

**Beschreibung:** Schließt die Datentabelle, auf die das erste Argument verweist, bei der es sich standardmäßig um die aktuelle Datentabelle handelt. Das zweite Argument dient zum Speichern der Datentabelle. Geben Sie in dem Pfad eine entsprechende Dateierweiterung an, um die Datentabelle nicht im JMP-Format zu speichern. Wenn Sie NoSave angeben, wird die Aufforderung zum Speichern bzw. zum Verwerfen von Änderungen umgangen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );

```

### Cluster Variables

**Syntax:** Cluster Variables( Y( columns ) )

**Beschreibung:** Clustert Variablen (Spalten) in Gruppen, die von einer einzelnen Komponente oder Variablen dargestellt werden können. Variablen zu clustern kann als Technik zur Reduktion von Dimensionen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Contingency

**Syntax:** Contingency( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine kategoriale Zielgröße über einen Satz kategorialer Gruppen. Analysemethoden umfassen Chi-Quadrat-Test und Mosaikdiagramme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**Syntax:** Contour Plot( X( column, column ), Y( column ) )

**Beschreibung:** Erzeugt einen Graphen aus drei Variablen in einer zweidimensionalen Ansicht, wobei die dritte Variable durch Konturkurven gleichen Werts dargestellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**Syntax:** Contour Profiler( Y( column1, column2, ... ) )

**Beschreibung:** Erzeugt ein interaktives Konturdiagramm, mit dem Sie untersuchen können, wie sich eine oder mehrere vorhergesagte Zielgrößen über Paare von Faktoren ändern. Die Werte von Faktoren, die nicht im Diagramm verwendet werden, können variiert werden, um den Einfluss der Faktoreinstellungen auf die vorhergesagten Zielgrößen weiter zu untersuchen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Control Chart Builder

**Syntax:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**Beschreibung:** Ermöglicht die interaktive Erstellung von Regelkarten, mit denen festgestellt werden kann, ob ein Prozess stabil und vorhersagbar ist. Mit der Plattform „Qualitätsregelkarte erstellen“ können Sie die folgenden Arten von Regelkarten erstellen: IMR, Xquer, Short Run, Einzelversuch, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR über Mittelwerte, Drei-Wege und Seltenes Ereignis.

#### C-Regelkarte

```jsl

// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) ),	Show Control Panel( 0 ));

```

#### Drei-Wege-Regelkarte (Untergruppengröße festlegen)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Average" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 3 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

#### Drei-Wege-Regelkarte (Untergruppenvariable)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Average" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),	Show Control Panel( 0 ));

```

#### G-Regelkarte Seltenes Ereignis

```jsl

// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );obj = dt << Control Chart Builder(	Class( "Rare Event" ),	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### IMR-Regelkarte

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );

```

#### Levey-Jennings-Regelkarte

```jsl

// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Show Two Shewhart Charts( 0 ),	Variables( Y( :Weight ) ),	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) ),	Show Control Panel( 0 ));

```

#### NP-Regelkarte

```jsl

// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### P'-Regelkarte

```jsl

// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) ),	Show Control Panel( 0 ));

```

#### P-Regelkarte

```jsl

// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Gruppenstandardabweichung (Untergruppengröße festlegen)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Gruppenstandardabweichung (Untergruppenvariable)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Mittelwerte (Untergruppengröße festlegen)

```jsl

// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Mittelwerte (Untergruppenvariable)

```jsl

// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite

```jsl

// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) ),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenmittelwerte (Untergruppengröße festlegen)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenmittelwerte (Untergruppenvariable)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenstandardabweichung (Untergruppengröße festlegen)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenstandardabweichung (Untergruppenvariable)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Short-Run-Differenz-Diagramm

```jsl

// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));

```

#### Short-Run-Differenz-Diagramm für Xquer

```jsl

// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );obj = dt << Control Chart Builder(	Show Product Separators( 0 ),	Class( "Short Run" ),	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),	Show Control Panel( 0 ));

```

#### Standardisiertes Short-Run-Diagramm

```jsl

// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) ),	Show Control Panel( 0 ));

```

#### Standardisiertes Short-Run-Diagramm für Xquer

```jsl

// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );obj = dt << Control Chart Builder(	Show Product Separators( 0 ),	Class( "Short Run" ),	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) ),	Show Control Panel( 0 ));

```

#### T-Regelkarte Seltenes Ereignis

```jsl

// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );obj = dt << Control Chart Builder(	Class( "Rare Event" ),	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) ),	Show Control Panel( 0 ));

```

#### U‘-Regelkarte

```jsl

// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) ),	Show Control Panel( 0 ));

```

#### U-Regelkarte

```jsl

// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) ),	Show Control Panel( 0 ));

```

#### Verlaufsdiagramm

```jsl

// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Show Two Shewhart Charts( 0 ),	Show Limit Summaries( 0 ),	Variables( Y( :Weight ) ),	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),	Show Control Panel( 0 ));

```

#### Xquer/R-Regelkarte

```jsl

// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Show Control Panel( 0 ));

```

#### Xquer/S-Regelkarte (Untergruppengröße festlegen)

```jsl

// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

#### Xquer/S-Regelkarte (Untergruppenvariable)

```jsl

// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

### Cumulative Damage

**Syntax:** Cumulative Damage

**Beschreibung:** Analysiert variierende und schrittweise Belastungsmodelle.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));

```

### Custom Profiler

**Syntax:** Custom Profiler( Y( column1, column2, ... ) )

**Beschreibung:** Bietet eine Schnittstelle, mit der Sie Zielgrößen ohne grafische Ausgabe optimieren können. Dieses Analysediagramm ist bei größeren Problemen nützlich.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Degradation

**Syntax:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**Beschreibung:** Modelliert Degradation über die Zeit mithilfe von linearen und nichtlinearen Kurven. Analyseoptionen sind u.a. Stabilitätsanalyse und Erzeugung von Pseudo-Ausfalldaten.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));

```

### Destructive Degradation

**Syntax:** Destructive Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Beschreibung:** Modelliert destruktive Degradationsdaten über die Zeit.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );obj = dt << Destructive Degradation(	Y( :Strength ),	Time( :Weeks ),	X( :Degrees ),	Censor( :Censor ),	Censor Code( "Right" ),	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ));

```

### Diagram

**Syntax:** Diagram( Y( column ), X( column ) )

**Beschreibung:** Erstellt ein Ursache-Wirkungs-Diagramm. Auch Ishikawa- oder Fischgrätendiagramm genannt. Hierbei handelt es sich um hierarchische Diagramme zur Untersuchung von Ursachen.

```jsl

dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Discriminant

**Syntax:** Discriminant( Y( columns ), X( columns ) )

**Beschreibung:** Schätzt die Distanz von jeder Beobachtung zum multivariaten Mittelwert jeder Gruppe (Centroid) mittels Mahalanobis-Distanz. Die Beobachtungen werden dann in die Gruppen klassifiziert, denen sie am nächsten sind.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Distance Matrix

**Syntax:** Distance Matrix( Y( columns ) )

**Beschreibung:** Berechnet Abstände zwischen Zeilen unter Verwendung einer Vielfalt von Methoden.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**Syntax:** Distribution( Column() )

**Beschreibung:** Zeigt die Verteilung und univariate statistische Kenngrößen für jede Variable an. Ergebnisse und Optionen sind vom Modellierungstyp jeder Variable abhängig. Einige Optionen sind u.a. Histogramme, Box-Plots, Quantildiagramme, Verteilungen anpassen und Prozessfähigkeitsanalysen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );colref = Column( "age" );// Correct way to use the colrefDistribution( Column( colref ) );// This will not workDistribution( colref );

```

### EMP Measurement Systems Analysis

**Syntax:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Beschreibung:** Startet die EMP-Methode (Evaluating the Measurement Process, Evaluation des Messprozesses) für die Messsystemanalyse. Das Diagramm der Mittelwerte und das Streuungsdiagramm (Spannweite oder Standardabweichung) werden standardmäßig angezeigt.

#### Haupteffektemodell, Spannweitendiagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Haupteffektemodell, Std.-Abw.-Diagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modell Effekte gekreuzt vor geschachtelt, Spannweitendiagramm

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( Range ),	Variance Components( 1 ));

```

#### Modell Effekte gekreuzt vor geschachtelt, Std.-Abw.-Diagramm

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modell Effekte geschachtelt vor gekreuzt, Spannweitendiagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modell Effekte geschachtelt vor gekreuzt, Std.-Abw.-Diagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modell gekreuzte Effekte mit Zweifaktor-Wechselwirkungen, Spannweitendiagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modell gekreuzte Effekte mit Zweifaktor-Wechselwirkungen, Std.-Abw.-Diagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modell gekreuzte Effekte, Spannweitendiagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modell gekreuzte Effekte, Std.-Abw.-Diagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modell geschachtelte Effekte, Spannweitendiagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modell geschachtelte Effekte, Std.-Abw.-Diagramm

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

### EWMA Control Chart

**Syntax:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**Beschreibung:** Erstellt eine Regelkarte, die die exponentiell gewichteten gleitenden Mittelwerte darstellt, und eine Regelkarte, die entweder die einzelnen Beobachtungen oder die Mittelwerte der Untergruppen darstellt. Eine EWMA-Regelkarte wird auch Feedback-Qualitätsregelkarte genannt.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### Explore Missing Values

**Syntax:** Explore Missing Values( Y( columns ) )

**Beschreibung:** Muster von fehlenden Werten suchen und Imputation durchführen.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**Syntax:** Explore Outliers( Y( columns ) )

**Beschreibung:** Identifiziert, untersucht und verwaltet Ausreißer in univariaten oder multivariaten Daten.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**Syntax:** Explore Patterns( Y( columns ) )

**Beschreibung:** Sucht nach ungewöhnlichen Funktionen in den Daten, einschließlich langen Läufen, doppelten langen Folgen, ungewöhnlich formatierten Werten und Läufen von linearen Zusammenhängen.

```jsl

dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**Syntax:** Factor Analysis( Y( columns ) )

**Beschreibung:** Deckt die zugrundeliegende Struktur von Daten auf, indem nicht beobachtete Variablen oder Faktoren, die die gemeinsame Variabilität über beobachtete Variablen darstellt, extrahiert. Faktorrotation wird verwendet, um ihre Interpretierbarkeit zu erhöhen.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Fatigue Model

**Syntax:** Fatigue Model( N( column ), X( column ), &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Beschreibung:** Analysiert Ermüdungsdaten, auch bekannt als S-N-Kurvenmodellierung.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );obj = dt << Fatigue Model(	N( :Cycles ),	S( :Stress ),	Censor( :Censoring Indicator ),	Censor Code( "Runout" ));

```

### Fit Curve

**Syntax:** Fit Curve( Y( column ), X( column ) )

**Beschreibung:** Passt eine Vielzahl integrierter nichtlinearer Modelle an.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Fit Life by X

**Syntax:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**Beschreibung:** Analysiert die Verteilung von Zeit-bis-Ereignis-Daten, die durch einen einzelnen Regressionsfaktor parametrisiert sind. Analyseoptionen sind u.a. beschleunigte Ausfallmodelle, Lebensdauerverteilungen über Gruppen und Transformationen von Regressionsfaktoren.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Fit Parametric Survival

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Beschreibung:** Passt ein allgemeines lineares Regressionsmodell an Lebensdauerzeiten an. Diese Modelle können für Lebensdauerzeiten verwendet werden, die als Funktion einer oder mehr erklärender Variablen ausgedrückt werden können. Berücksichtigt verschiedene Lebensdauerverteilungen und Zensierung.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);

```

### Fit Proportional Hazards

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Beschreibung:** Passt ein semiparametrisches Regressionsmodell (das Cox-Modell für Proportional Hazards) an, um den Effekt erklärender Variablen auf Lebensdauerzeiten zu bewerten, wobei Zensierung berücksichtigt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);

```

### Formula Depot

**Syntax:** Formula Depot

**Beschreibung:** Ein Container für Vorhersagemodelle, der Modellvergleich, Erzeugung von Profil- und Scoring-Code unterstützt. Das Formeldepot wird über das Menü „Analysieren“, die Befehle zum Veröffentlichen in Modellierungsplattformen, bei der Neucodierung und im Formeleditor aufgerufen.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];

```

### Functional Data Explorer

**Syntax:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Beschreibung:** Passt funktionale Modelle mithilfe eines B-Spline, P-Spline, Fourier oder Wavelets-Basismodells an. Mit dem funktionalen Modell kann eine funktionale Hauptkomponentenanalyse durchgeführt werden, um wichtige Merkmale aus den Daten zu extrahieren. Es gibt auch die Option, eine funktionale Hauptkomponentenanalyse direkt auf den Daten durchzuführen, ohne zunächst ein Basisfunktionsmodell anzupassen.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**Syntax:** Gaussian Process( Y( column ), X( columns ) )

**Beschreibung:** Modelliert die Beziehung zwischen einer stetigen Zielgröße und einem oder mehreren stetigen Prädiktoren als Spline mit Interpolation.

```jsl

dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Graph Builder

**Syntax:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Beschreibung:** Bietet eine interaktive graphische Schnittstelle, mit der Sie Ihre Daten untersuchen können. Sie können Spalten in Graphenbereiche ziehen, um eine Vielfalt von Graphen zu erstellen einschließlich Streudiagramme, Konturdiagramme, Balkendiagramme, Bereichsdiagramme, Box-Plots, Histogramme, Heatmaps, Tortendiagramme, Tree Maps, Mosaikdiagramme und Karten.

#### 100% gestapeltes Balkendiagramm

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### Blasendiagramm mit überlagerten Kurven

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )}		)	));

```

#### Flussdiagramm Napoleons Marsch

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Longitude ),		Y( :Latitude ),		Overlay( :Group ),		Color( :Direction ),		Size( :Army Size )	),	Elements(		Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) )	),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Napoleon's March to Moscow" )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### Kombination aus Balkendiagramm und geglätteten Trendlinien

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox,			{Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )}		)	));

```

#### Konfidenzintervall des binomialen Anteils

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) )	),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox,			{Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Konturdiagramm- und Streudiagrammpunkte

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour(			X,			Y,			Legend( 9 ),			Boundary( 0 ),			Number of Levels( 7 ),			Alpha( 5 ),			Smoothness( 0.2 )		),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### Linie mit benutzerdefiniertem Bandintervall

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### Linke und rechte Y-Achsen

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Mehrere X-Achsen

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### Mittelmeer-Choroplethenkarte mit gleicher Fläche

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Parallele Y-Achsen, überlagerte Linien

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables(		X( :Time ),		Y( :Temp ),		Y( :NH3 Feed ),		Y( :Air ),		Y( :Tank Level ),		Y( :pH )	),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Pfeillinien, eine pro Zeile

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

#### Punkte und Glättung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### Seiten mit linearer Regression

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter(		Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) )	));

```

#### Seiten mit nicht ausgerichteten Y-Achsen

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables(		X( :"Transform[Year]"n ),		Y( :Population ),		Page( :Region, Levels per Row( 3 ) )	),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest",				"Mountain", "New England", "NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### Streudiagramm mit marginalen Box-Plots

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox,			{Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )}		)	));

```

#### Trellis-Gruppierung im Codiagramm-Stil

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### Überlagerte bivariate Kerndichtekonturen

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) )	));

```

#### Überlagerte Kurven der empirischen kumulierten Verteilungsfunktion

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )			 / Col Number(				:Culmen Length,				:"@Exclude"n,				:"@Filter"n,				:"@Graph"n,				:"@Overlay"n			)		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Culmen Length ),		Y( :"Rank[Culmen Length]@Overlay"n ),		Overlay( :Species )	),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### Unabhängige Diagramme mit NACH-Variable

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### Variabilitätsdiagramm

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

#### Verbundene Linien mit überlagerten Punkten

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements(		Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) )	),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ),			Minor Ticks( 0 ), Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### Violindiagramm mit Quartilen

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### Wafer-Map

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

#### Zusammenfassungstabelle an der Achse

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

### Hierarchical Cluster

**Syntax:** Hierarchical Cluster( Y( columns ) )

**Beschreibung:** Clustert Zeilen basierend auf stetigen oder kategorialen Variablen. Hierarchisches Clustern beginnt damit, dass jede Zeile als eigener Cluster behandelt wird und dann nachfolgend jeweils zwei Cluster kombiniert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Item Analysis

**Syntax:** Item Analysis( Y( columns ) )

**Beschreibung:** Setzt ein Merkmal oder eine Fähigkeit in Bezug zu der Wahrscheinlichkeit einer Person, ein Item zu bestätigen oder korrekt darauf zu antworten.

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### K Means Cluster

**Syntax:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Beschreibung:** Clustert Zeilen basierend auf numerischen Variablen in Datentabellen mit bis zu Millionen von Zeilen. Die Zahl der Cluster müssen Sie im Voraus angeben.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

### K Nearest Neighbors

**Syntax:** K Nearest Neighbors(Y( column ), X( columns ))

**Beschreibung:** Sagt eine stetige oder kategoriale Zielgröße basierend auf den Zielgrößen der k nächsten Nachbarn im Raum der X-Variablen vorher.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));

```

### Latent Class Analysis

**Syntax:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**Beschreibung:** Clustert Zeilen basierend auf kategorialen Variablen mittels multinomialen Mischungen. Sie müssen die Anzahl von latenten Klassen (Clustern) im Voraus angeben.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Latent Class Analysis(	Y( :sex, :marital status, :country, :size, :type ),	Number of Clusters( 3 ));

```

### Life Distribution

**Syntax:** Life Distribution( Y( column(s) ) )

**Beschreibung:** Analysiert die Verteilung von Zeit-bis-Ereignis-Daten. Kann zur Modellierung von zensierten Daten, Produktlebensdauer, Zuverlässigkeit und konkurrierenden Ursachen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Logistic

**Syntax:** Logistic( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine kategoriale Zielgröße in Bezug auf eine stetige Variable. Analysemethoden sind u.a. logistische Regression und ROC-Kurven.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Make Validation Column

**Syntax:** Make Validation Column( &lt;Stratifikationsspalten(columns)&gt;, &lt;Gruppierungsspalten(columns)&gt;, &lt;Cutpoint-Spalte(column)&gt;, &lt;Cutpoint-Charge-ID(column)&gt; )

**Beschreibung:** Erzeugt eine Spalte, um die Daten in Trainings-, Validierungs- und Testsätze zu unterteilen.

**Cutpoint-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << Make Validation Column(	Cutpoint Column( :Week of Year ),	Cutpoint Batch ID( :ID ),	Training Set( 0.60 ),	Validation Set( 0.25 ),	Test Set( 0.15 ),	New Column Name( "Cutpoint Batch Validation" ),	Go);

```

#### Schichtungsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Make Validation Column(	Stratification Columns( :Sex ),	Training Set( 0.50 ),	Validation Set( 0.25 ),	Test Set( 0.25 ),	New Column Name( "Valid1" ),	Random Seed( 1234 ),	Go);

```

### Manage Limits

**Syntax:** Manage Limits( Process Variables( columns ) )

**Beschreibung:** Startet das Dienstprogramm für die Verwaltung von Qualitätsgrenzen für mehrere Spalten gleichzeitig. Sie können Grenzen für Spalteneigenschaften hinzufügen, bearbeiten und speichern.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**Syntax:** Marker Admixture( Marker( columns ) )

**Beschreibung:** Schätzt die Populationsvermischung für Individuen basierend auf Markergenotypen.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(		Missing Marker Imputation Method( "Specified" ),		Estimation Method( "Fixed Parameter" ),		Unthreaded( 1 ),		Imputation Value( 1 ),		Number of Ancestral Populations( 3 )	),	Fit(		Missing Marker Imputation Method( "Specified" ),		Estimation Method( "Fixed Parameter" ),		Unthreaded( 1 ),		Imputation Value( 1 ),		Number of Ancestral Populations( 3 )	));

```

### Marker Imputation

**Syntax:** Marker Imputation( Marker( columns ) )

**Beschreibung:** Imputiert numerische fehlende Markergenotypen.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Set missing values for some markersdt = Current Data Table();Random Reset( 1234 );markers = dt << Get Column Group( "Markers" );markers = markers[Random Index( N Items( markers ), 15 )];For Each( {col}, markers, col[Random Index( N Rows( dt ), Random Integer( 1, 20 ) )] = . );//Run platformdt << Marker Imputation(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Missing Marker Imputation Method( "LD-kNN" ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Set missing values for some markersdt = Current Data Table();Random Reset( 1234 );markers = dt << Get Column Group( "Markers" );markers = markers[Random Index( N Items( markers ), 15 )];For Each( {col}, markers, col[Random Index( N Rows( dt ), Random Integer( 1, 20 ) )] = . );//Run platformobj = dt << Marker Imputation(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Set Random Seed( 0 ),	Method( "Specified" ),	Imputation Value( 1 ));

```

### Marker Relatedness

**Syntax:** Marker Relatedness( Marker( columns ) )

**Beschreibung:** Schätzt verschiedene Arten von Maßen der genomischen Beziehung zwischen Paaren von Individuen basierend auf genetischen Markern in diploiden und polyploiden Organismen.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Run platformdt << Marker Relatedness(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Set Random Seed( 12345 ),	Missing Marker Imputation Method( "HWE Off" ),	Kinship Type( "Identical by State" ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Run platformobj = dt << Marker Relatedness(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Set Random Seed( 12345 ),	Missing Marker Imputation Method( "HWE On" ),	Kinship Type( "Identical by State" ));

```

### Marker Simulation

**Syntax:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**Beschreibung:** Simuliert Markergenotypen aus elterlichen Kreuzungen und berechnet zugehörige Messwerte für die Zuchtleistung.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Hide and Exclude Rowsdt << Clear Select << Clear Row States;dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );dt << Invert Row Selection << Exclude;dt << Clear Select;//Run platformdt << Marker Simulation(	Marker( Column Group( "Markers" ) ),	Predictor Formula(		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n	),	Cross( :Sex ),	Ploidy( 2 ),	Number of Generations( 2 ),	Number of Individuals per Cross( 10 ),	Set Random Seed( 12345 ),	Threshold to Make Line Plots( 1000 ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Hide and Exclude Rowsdt << Clear Select << Clear Row States;dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );dt << Invert Row Selection << Exclude;dt << Clear Select;//Run platformobj = dt << Marker Simulation(	Marker( Column Group( "Markers" ) ),	Predictor Formula(		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n	),	Cross( :Sex ),	Unthreaded( 1 ),	Ploidy( 2 ),	Number of Generations( 2 ),	Number of Individuals per Cross( 10 ),	Set Random Seed( 12345 ),	Threshold to Make Line Plots( 1000 ));

```

### Marker Statistics

**Syntax:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**Beschreibung:** Führt Analysen an Daten genetischer Marker durch, um Messwerte wie die Minorallel-Häufigkeit, das Hardy-Weinberg-Gleichgewicht und das Kopplungsungleichgewicht zu berechnen.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));

```

### Matched Pairs

**Syntax:** Matched Pairs( Y( columns ), X( column ) )

**Beschreibung:** Vergleicht die Mittelwerte von gepaarten Sätzen von Variablen mithilfe von paarweisen t-Tests oder einfacher Messwiederholungsanalyse, um die Korrelation zwischen Zielgrößen zu berücksichtigen.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**Syntax:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Beschreibung:** Erstellt ein Design, um die Kombination aus Produktattributen zu finden, die Kunden am meisten und am wenigsten bevorzugen.

```jsl

dt = Open( "$SAMPLE_DATA/Potato Chip Combined.jmp" );obj = dt << MaxDiff(	One Table( 1 ),	Subject ID( :Respondent ),	Choice Set ID( :Choice Set ID ),	Profile ID( :Response ),	Profile Grouping( :Survey ID ),	Profile Effects( :Profile ID ),	Response Value Indicates Best( 1 ),	Response Value Indicates Worst( -1 ));

```

### Mixture Profiler

**Syntax:** Mixture Profiler( Y( column1, column2, ... ) )

**Beschreibung:** Erzeugt ein interaktives ternäres Diagramm, mit dem Sie die Konturen der gespeicherten Vorhersageformeln für Mischungsmodelle mit drei oder mehr Faktoren untersuchen können.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**Syntax:** Model Comparison( Predictors( columns ), Group( column ) )

**Beschreibung:** Vergleicht Leistung über Modelle mithilfe von Vorhersageformelspalten.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();

```

### Model Driven Multivariate Control Chart

**Syntax:** Model Driven Multivariate Control Chart( Process( columns ) )

**Beschreibung:** Erstellt multivariate Qualitätsregelkarten basierend auf den Methoden Hauptkomponenten oder partielle kleinste Quadraten.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );obj = dt << Model Driven Multivariate Control Chart(	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN ));

```

### Model Screening

**Syntax:** Model Screening( Y( column ), X( columns ) )

**Beschreibung:** Passt viele verschiedene Vorhersagemodelle an, so dass Sie das beste auswählen können.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Multidimensional Scaling

**Syntax:** Multidimensional Scaling( Y( columns ) )

**Beschreibung:** Erstellt eine visuelle Darstellung des Musters der Nähe innerhalb einer Gruppe von Objekten.

```jsl

dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );obj = dt << Multidimensional Scaling(	Y(		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC	));

```

### Multiple Correspondence Analysis

**Syntax:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Beschreibung:** Identifiziert Zuordnungen zwischen den Stufen von kategorialen Variablen. Die multiple Korrespondenzanalyse ist analog zur Hauptkomponentenanalyse für kategoriale Daten.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**Syntax:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**Beschreibung:** Analysiert Übereinstimmung unter Teilnehmern in sensorischer Datenanalyse.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));

```

### Multivariate

**Syntax:** Multivariate( Y( columns ) )

**Beschreibung:** Untersucht Korrelation und Zuweisungen unter numerischen Variablen mithilfe einer Vielfalt von multivariaten Analysetechniken. Diese Techniken umfassen sowohl parametrische wie auch nichtparametrische Zusammenhangsmaße, Streudiagrammmatrizen, Hauptkomponentenanalyse, Ausreißeranalyse und Item-Zuverlässigkeit.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**Syntax:** Multivariate Embedding( Y( columns ) )

**Beschreibung:** Ordnet Daten aus sehr hochdimensionalen Räumen einem niedrigdimensionalen Raum zu, wobei die Methode der Uniform Manifold Approximation and Projection (UMAP) oder die Methode der t-Distributed Stochastic Neighbor Embedding (t-SNE) verwendet wird. Häufig können Sie die Daten entweder zwei- oder dreidimensional zuordnen, damit der niedrigdimensionale Raum leicht visualisiert werden kann.. Beide Methoden versuchen, die lokale Struktur der Daten beizubehalten, doch UMAP ist bei großen Datensätzen im Allgemeinen schneller als t-SNE.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );/* Parameters can be changed according to data features */obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Maximum Iterations( 1500 ),	Perplexity( 15 ),	Initial Principal Component Dimensions( 55 ),	Random Seed( 2022 ),	Output Dimensions( 3 ));

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );/* by group example */dt << New Column( "_bycol",	Character,	Nominal,	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( _bycol ));

```

### Naive Bayes

**Syntax:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**Beschreibung:** Sagt die Gruppenzugehörigkeit für eine kategoriale Variable basierend auf der Nähe ihrer Prädiktorwerte zu den Prädiktorwerten für jede Gruppe voraus.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Neural

**Syntax:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**Beschreibung:** Sagt eine oder mehrere Zielgrößenvariablen anhand einer flexiblen Funktion der Eingangsvariablen vorher. Der flexible Rahmen integriert Schichten und s-förmige Funktionen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### New Table

**Syntax:** New Table( name, &lt;invisible&gt;, &lt;private&gt;, &lt;actions&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle. "Invisible" blendet die Datentabelle aus der Ansicht aus, zeigt sie jedoch im JMP-Hauptfenster an. "Private" blendet die Tabelle vollständig aus. "Visible" ist die Standardeinstellung und erstellt eine normale Tabelle, die sichtbar ist und im JMP-Hauptfenster angezeigt wird. Die optionalen Argumente actions sind alle Meldungen, die von der Datentabelle unterstützt werden.

```jsl

dt = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),	New Column( "height", Continuous, Set Values( [59, 61, 55] ) ));

```

### Nonlinear

**Syntax:** Nonlinear( Y( column ), X( column with predictor formula ) )

**Beschreibung:** Passt nichtlineare Modelle mithilfe von kleinsten Quadraten oder einer benutzerdefinierten Verlustfunktion an.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**Syntax:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**Beschreibung:** Clustert Zeilen basierend auf numerischen Variablen, wenn Ihre Daten aus einer Mischung von überlappenden multivariaten Normalverteilungen kommen. Sie müssen die Zahl der Cluster im Voraus angeben.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

### Normalization

**Syntax:** Normalization( Y( columns ) )

**Beschreibung:** Passt sich an technische systematische Abweichungen an und verbessert die Eignung für nachfolgende Analysen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**Syntax:** nb = Notebook( name|number )

**Beschreibung:** Erstellt ein neues Notebook oder gibt das Notebook mit dem angegebenen Namen oder Index zurück.

```jsl

nb = Notebook();

```

### Oneway

**Syntax:** Oneway( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine stetige Zielgröße über einen Satz kategorialer Gruppen. Analysemethoden sind u.a. ANOVA, Mittelwertvergleiche, Mittelwertanalyse und Quantildiagramme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**Syntax:** Open( file path, &lt;invisible&gt;, &lt;private&gt;, &lt;select columns(list)&gt; | &lt;ignore columns(list)&gt;, &lt;column names only&gt;, &lt;Table Info&gt; )

**Beschreibung:** Öffnet eine JMP-Datei oder importiert einen anderen unterstützten Dateityp. Die Option „Invisible“ der geöffneten Datentabelle blendet die Datei von der Anzeige aus, listet sie jedoch im JMP-Hauptfenster auf, „Private“ blendet die Datei vollständig aus. Die Dateioption „Select Columns“ liest nur die angegebenen Spalten ein, „Ignore Columns“ ist die inverse Aktion von „Select Columns“, die angegebenen Spalten werden nicht eingelesen. Die JMP-Dateioptionen „Columns Names Only“ und „Table Info“ lesen die Daten nicht ein und erstellen auch keine Datentabelle. „Column Names Only“ gibt die Liste der Spaltennamen der Datentabelle zurück, „Table Info“ gibt die Anzahl der Spalten und Zeilen in der Datentabelle zurück. Die Optionen „FIRST(n)“/„LAST(n)“/„RANDOM(n)“ lesen nur n Zeilen der Datentabelle ein. Wenn n eine Zahl zwischen 0 und 1 ist, ist n ein Bruchteil der Gesamtanzahl von Zeilen in der Datentabelle.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

**Beispiel 4**

```jsl

info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );Print( info );

```

**Beispiel 5**

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );Print( info );

```

**Beispiel 6**

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );Print( info );

```

### Parallel Plot

**Syntax:** Parallel Plot( Y( columns ), &lt;X( column )&gt; )

**Beschreibung:** Erzeugt ein Diagramm aus zwei oder mehr Variablen mit verbindenden Liniensegmenten für jede Zeile.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );dt << Parallel Plot(	Y(		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,		:"1992 Math"n	));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**Syntax:** Pareto Plot( Cause( column ), &lt;X( column )&gt;, &lt;Subcategory( column )&gt;, &lt;Freq( column )&gt;, &lt;Weight( column )&gt; )

**Beschreibung:** Zeigt die relative Häufigkeit von Elementen in einem qualitätsbezogenen Prozess in absteigender Reihenfolge an. Sie können eine oder mehrere Klassifikationsvariablen definieren, um ein Pareto-Diagramm für den Vergleich zu erstellen.

#### Einfach

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );

```

#### Gruppieren

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

#### Unterkategorie

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Subcategory( :clean ),	Freq( :N ),	Subcategory Bar Style( Stacked ));

```

### Partial Least Squares

**Syntax:** Partial Least Squares( Y( columns ), X( columns ) )

**Beschreibung:** Passt ein Modell mit latenten Faktoren an eine oder mehr Zielgrößenvariablen an. Dadurch können Modelle angepasst werden, wenn erklärende Variablen hochgradig korreliert sind oder wenn es mehr erklärende Variablen als Beobachtungen gibt.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Go);

```

### Predictor Screening

**Syntax:** Predictor Screening( Y( columns ), X( columns ) )

**Beschreibung:** Identifiziert signifikante Prädiktoren aus einer großen Anzahl von Kandidaten mittels Bootstrap Forest-Partitionierung, um den Beitrag der Prädiktoren auf die Zielgröße auszuwerten.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**Syntax:** Principal Components( Y( columns ) )

**Beschreibung:** Modelliert die Variation in einem Satz von Variablen als eine kleinere Anzahl unabhängiger Linearkombinationen (Hauptkomponenten) dieser Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Principal Components(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ));

```

### Process Capability

**Syntax:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Beschreibung:** Berechnet für jeden Prozess eine Prozessfähigkeitsanalyse und erstellt Graphen, die für die gleichzeitige Analyse der Prozessfähigkeit mehrerer Prozesse nützlich sind. Spezifikationsgrenzen können ebenfalls definiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

### Process History Explorer

**Syntax:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**Beschreibung:** Identifiziert Prozessschritte in Zusammenhang mit schlechter Ausbeute.

```jsl

dt = Open( "$sample_data\Quality Control\Lot Wafer History.jmp" );dt2 = Open( "$sample_data\Quality Control\Lot Wafer Yield.jmp" );obj = dt << Process History Explorer(	ID( :Lot, :Wafer ),	X( :Tool, :Route ),	Step( :Layer, :Operation ),	Timestamp( :TimeIn, :TimeOut ),	Yield Table( "Lot Wafer Yield" ),	Yield Columns( "Yield" ));

```

### Process Screening

**Syntax:** Process Screening( Process Variables( columns ) )

**Beschreibung:** Untersucht viele Prozesse aus mehreren Perspektiven, einschließlich Stabilität, Fähigkeit, Qualitätsregelkartentests und Verschiebung (Abweichung). Unterstützt die Fähigkeit, sich auf die Prozesse zu konzentrieren, die Aufmerksamkeit benötigen.

#### Screening eines Prozesses mit einem Anteilsdiagramm

```jsl

dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );obj = dt << Process Screening(	Process Variables( :N Defective ),	Control Chart Type( "Proportion" ),	n Trials( :N Units ),	Show Charts as Selected( 1 ),	RowStates( [0 1] ));

```

#### Screening eines Prozesses mit einer dreifachen Qualitätsregelkarte (Xquer-MR-und-R)

```jsl

dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );obj = dt << Process Screening(	Process Variables( :Fill Weight ),	Subgroup( :Sample ),	Control Chart Type( "XBar MR and R" ),	Moving Range Limit Exceeded( 1 ),	Chart Options as Selected( Dispersion Chart( 1 ) ),	Show Charts as Selected( 1 ),	RowStates( [0 1] ));

```

#### Screening eines Prozesses mit einer dreifachen Qualitätsregelkarte (Xquer-MR-und-S)

```jsl

dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );obj = dt << Process Screening(	Process Variables( :Fill Weight ),	Subgroup( :Sample ),	Control Chart Type( "XBar MR and S" ),	Moving Range Limit Exceeded( 1 ),	Show Charts as Selected( 1 ),	RowStates( [0 1] ));

```

#### Screening eines Prozesses mit Prozesspotenzialgraph

```jsl

dt = Open( "$Sample_Data/Quality Control/Coating.jmp" );Column( "Weight" ) << Set Property(	"Process Screening",	{Centerline( 20.5 ), Specified Sigma( 1.5 ), Measurement Sigma( .8 )});Column( "Weight" ) << Set Property( "Spec Limits", {LSL( 17 ), USL( 24 )} );obj = dt << Process Screening(	Process Variables( :Weight ),	Subgroup( :Sample ),	Control Chart Type( "XBar and R" ),	Out of Spec Count( 0 ),	Out of Spec Rate( 0 ),	Latest Out of Spec( 0 ),	Process Potential Graph( 1 ));

```

#### Screening von nicht-negativen stetigen Daten für Umgebungsüberwachung

```jsl

dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );obj = dt << Process Screening(	Process Variables( :Count ),	Grouping( :Type, :Grade, :Site ),	Control Chart Type( "Nonnegative Continuous" ),	Time( :Time ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Alarm Graph( 1 ),	Show Charts as Selected( 1 ));

```

#### Screening von Prozessen mit Prozessleistungsgraph

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Process Performance Graph( 1 ));

```

#### Screening von Prozessen mit Spezifikationsgrenzen in einer separaten Tabelle

```jsl

dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt1 << Process Screening(	Y( :OZONE, :CO, :SO2, :NO ),	Use Limits Table(		1,		dt2,		Process Variables( :Column 1 ),		LSL( :_LSL ),		USL( :_USL ),		Target( :_Target ),		Go	));

```

#### Screening von Prozessen mit Verschiebungserkennung

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );obj = dt << Process Screening(	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),	Control Chart Type( "Indiv and MR" ),	Shift Graph( 1 ),	Show Charts as Selected( 1 ),	Select Where( Stability Index > 2 ));

```

#### Screening von Prozessen mit Zieldiagramm der Prozessfähigkeit

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Goal Plot( 1 ));

```

#### Screening von Prozessen zum Anzeigen von Qualitätsregelkarten für ausgewählte Prozesse

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Control Chart Type( "Indiv and MR" ),	Show Charts as Selected( 1 ),	Select Where( Alarm Rate > 0.006 ), 	// what selects in the table	Filter Where( Alarm Rate > 0.005 )	// what shows in the table);

```

#### Screening von vielen Prozessen mit Gruppierungsspalten

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Grouping( :Site ));

```

#### Screening von vielen Prozessen mit Metriken für Qualitätsregelkarten für Einzelwerte und gleitende Spannweiten

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Control Chart Type( "Indiv and MR" ));

```

#### Screening von vielen Prozessen mit Metriken für Xquer- und R-Qualitätsregelkarten

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Control Chart Type( "XBar and R" ));

```

#### Screening von vielen Prozessen mit Metriken für Xquer- und S-Qualitätsregelkarten

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Subgroup( :wafer ),	Control Chart Type( "XBar and S" ));

```

#### Screening von Zählprozessen mit Alarmgraph für Umgebungsüberwachung

```jsl

dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );obj = dt << Process Screening(	Process Variables( :Count ),	Grouping( :Type, :Grade, :Site ),	Control Chart Type( "Count" ),	Time( :Time ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Alarm Graph( 1 ),	Show Charts as Selected( 1 ),	Select Where( Action >= 1 ));

```

### Profiler

**Syntax:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**Beschreibung:** Erzeugt einen interaktiven Graphen, mit dem Sie untersuchen können, wie sich eine vorhergesagte Zielgröße ändert, wenn Sie die Faktoreinstellungen ändern. Bei jedem Faktor zeigt das Analysediagramm Vorhersagespuren an, die auf gespeicherten Vorhersageformeln und linearen Nebenbedingungen basieren und darstellen, wie sich die Zielgröße in Bezug auf den Faktor ändert. Das Argument „Expand“ entspricht der Option „Zwischenformeln erweitern“ im Startfenster.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );colNum = N Items( dt << Get Column Names );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Screening" ),	Run());obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );obj << Close Window( 1 );predCol = Column( dt, colNum + 1 );stderrCol = Column( dt, colNum + 2 );dt << Profiler(	Y( predCol, stderrCol ),	Profiler( 1, Confidence Intervals( 1 ), ),	Use SE Formula( 1 ));

```

**Beispiel 3**

```jsl

dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recurrence Analysis

**Syntax:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**Beschreibung:** Analysiert, wie ein wiederkehrendes Ereignis über die Zeit verteilt ist, pro System oder bis das Ende der Nutzungszeit des Systems erreicht ist.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Reliability Forecast

**Syntax:** Reliability Forecast

**Beschreibung:** Sagt künftige Ausfälle basierend auf beobachteten Daten und künftigen Einheiten unter Risiko vorher. Die Plattform akzeptiert verschiedene Eingabeformate. Sie finden zu jedem Format weitere Details für die Spezifikation.

#### Datumsformat

```jsl

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );obj = dt1 << Reliability Forecast(	Input Format( Dates ),	Production Data Table(		dt1,		Production Count( :Sold Quantity ),		Timestamp( :Sold Month )	),	Failure Data Table(		dt2,		Failure Time( :Return Month ),		Timestamp( :Sold Month ),		Failure Count( :Return Quantity )	),	Life Time Unit( Month ),	Show Legend( 1 ),	Show Graph Filter( 0 ),	Forecast(		Group( "" ),		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),		Future Risk Set(			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]		),		Forecast To( "02/2011" ),		Distribution( Weibull ),		Contract( 6, Month ),		Forecast Type( Sequential ),		Interval Type( Prediction Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 1 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Nevada-Format

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Zeit-bis-Ereignis-Format

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );obj = dt << Reliability Forecast(	Input Format( Time to Event ),	Time to Event( :"Time (Month)"n, :Time Right ),	Freq( :Freq ),	Life Time Unit( Month ),	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),	Forecast(		Group( "" ),		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),		Forecast To( "09/01/2010" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( [1] ),		Monte Carlo Sample Size( 10000 ),		Random Seed( 0 ),		Use Approximate Distribution( 1 )	));

```

### Reliability Growth

**Syntax:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; ); obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; ); obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; ) obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**Beschreibung:** Modelliert die sich verändernde Zuverlässigkeit eines einzelnen reparierbaren Systems über die Zeit, während Verbesserungen in das Design integriert werden. Die Plattform akzeptiert verschiedene Eingabeformate. Sie finden zu jedem Format weitere Details für die Spezifikation.

#### Datumsangaben

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));

```

#### Gleichzeitige Systeme

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );obj = dt << Reliability Growth(	Input Format( Concurrent Systems ),	Time to Event( :Prototype 1, :Prototype 2 ),	System ID( :Failed System ),);obj << Crow AMSAA;

```

#### Parallele Systeme

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Fixes ),	System ID( :System ID ),	Phase( :Phase ));obj << Piecewise Weibull NHPP with Different Intercepts;

```

#### Zeit bis Ereignis

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;

```

### Repeated Measures Degradation

**Syntax:** Repeated Measures Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Beschreibung:** Modelliert Degradationsdaten mit Messwiederholungen über die Zeit mit zufälligen Parametern.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );obj = dt << Repeated Measures Degradation(	Y( :Power Drop ),	Time( :Hours ),	Label( :Device ),	X( :Degrees C ),	Reference Temperature( "Celsius", 195 ),	Control( "Linear", "Linear", "First Order Kinetics Type 2" ));

```

### Response Screening

**Syntax:** Response Screening( Y( columns ), X( columns ) )

**Beschreibung:** Automatisiert den Prozess der Durchführung von Tests für lineare Modelleffekte über eine große Anzahl von Zielgrößen. Testergebnisse und statistische Kenngrößen werden in Datentabellen und Diagrammen präsentiert. Die False Discovery Rate (FDR) schützt vor falschen Deklarationen von Signifikanz. Eine robuste Schätzmethode verringert die Empfindlichkeit von Tests gegenüber Ausreißern.

#### Zielgrößen-Screening angegeben mit Spaltenzahlen

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

#### Zielgrößen-Screening in Untergruppen mit ausgewähltem Vulkandiagramm

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( :Father, :Mother, :Sex, :Disease Status ),	Subgroup( Column Group( "Markers" ) ),	Common Y Scale( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

```

#### Zielgrößen-Screening mit robuster Anpassung

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	Y( Column Group( "Responses" ) ),	X( :Process ),	Robust( 1 ));

```

#### Zielgrößen-Screening von 4 Zielgrößen und 26 prospektiven Prädiktoren

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Response Screening( Y( :ls, :ha, :dt ), X( Column Group( "Intensities" ) ) );

```

#### Zielgrößen-Screening von vielen Spalten in Gruppen

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ),	Grouping( "Sex" ));

```

#### Zielgrößen-Screening von vielen Spalten mit Vulkandiagramm der Differenzen der Mittelwerte

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Father, :Mother, :Sex, :Disease Status ),	Common Y Scale( 1 ),	Volcano Plots Use FDR Axis( 1 ),	SendToReport(		Dispatch( {}, "", TabListBox( 1 ), {Set Selected( 4 )} ),		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )	));

```

#### Zielgrößen-Screening von vielen Spalten zu jedem von vier Prädiktoren

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ));

```

### Scatterplot 3D

**Syntax:** Scatterplot 3D( Y( columns ) )

**Beschreibung:** Erzeugt ein rotierendes dreidimensionales Streudiagramm für drei oder mehr Variablen. Wenn Sie mehr als drei Variablen angeben, können Sie durch die Variablen blättern, die im Streudiagramm angezeigt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**Syntax:** Scatterplot Matrix( Y( columns ), &lt;X( columns )&gt;, &lt;Group( column )&gt;, &lt;By( column )&gt; )

**Beschreibung:** Erzeugt ein Raster aus Streudiagrammen zum Untersuchen von bivariaten Beziehungen. Werden keine X-Variablen angegeben, sind die Streudiagramme für alle Paare der Y-Variablen. Wird eine oder werden mehrere X-Variablen angegeben, sind die Streudiagramme für die Y-Variablen dargestellt gegen die X-Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot Matrix(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

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

### Support Vector Machines

**Syntax:** Support Vector Machines(Y( column ), X( columns ))

**Beschreibung:** Sagt eine Zielgröße basierend auf den Stützvektoren im Raum der X-Variablen vorher. Eines der Ziele des Algorithmus der Stützvektormaschinen ist die Verwendung von Trainingsdaten, um zu ermitteln, wie neue Daten klassifiziert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Support Vector Machines(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Surface Plot

**Syntax:** Surface Plot( Columns() )

**Beschreibung:** Erzeugt ein rotierendes dreidimensionales Diagramm aus Punkten oder einer von einer gespeicherten Formel definierten Fläche.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Survival

**Syntax:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**Beschreibung:** Berechnet die Schätzwerte von Lebensdauerfunktionen mittels Product-Limit (Kaplan-Meier) für eine oder mehr Gruppen.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**Syntax:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Beschreibung:** Erstellt eine benutzerdefinierte Tabelle statistischer Kenngrößen von einer oder mehreren Variablen. Die Variablen können nach einer oder mehreren Klassifikationsspalten gruppiert sein. Ermöglicht Ihnen, die Zusammenfassungstabelle durch Ziehen mit der Maus zu erstellen.

#### Gepackte Spalten

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum, Max ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### Geschachtelte Kategorien

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### Gestapelte Gruppierungsspalten

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### Gewichtung

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### Gruppierungsspalten für Mehrfachantworten

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Floss Delimited ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :Frequency of Teeth Cleaning, :Brush Delimited ) )	));

```

#### Häufigkeit

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### ID-Spalte

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Kategorien und Kenngrößen

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender, :goals ), Statistics( N, Column % ) ),		Row Table( Grouping Columns( :Grade, :Age ) )	));

```

#### Mehrzeilige Tabellen

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Row Table( Grouping Columns( :Grades ) ),		Row Table( Grouping Columns( :Sports ) ),		Row Table( Grouping Columns( :Looks ) ),		Row Table( Grouping Columns( :Money ) )	));

```

#### Mehrzeilige und Mehrspalten-Tabellen

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender ) ),		Column Table( Grouping Columns( :race ) ),		Row Table( Grouping Columns( :goals ) ),		Row Table( Grouping Columns( :"Urban/Rural"n ) )	));

```

#### Seitenspalte

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :Engine( "Gas" ) ),	Add Table(		Column Table( Analysis Columns( :City MPG, :Hwy MPG ), Statistics( Max ) ),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Seitenspalte bei Mehrfachantworten

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### Spalten nach Kategorien

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

### Ternary Plot

**Syntax:** Ternary Plot( Y( columns ) )

**Beschreibung:** Erzeugt ein zweidimensionales Diagramm aus drei Mischungskomponenten, die sich zu einer Konstante summieren.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**Syntax:** Text Explorer( Text Columns( columns ) )

**Beschreibung:** Analysiert Wörter aus Text in einer Spalte, zählt sie, weist sie anderen Spalten zu, speichert Indikatoren und zeichnet Beziehungen.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Time Series

**Syntax:** Time Series( Y( column ) )

**Beschreibung:** Modelliert eine Reihe von Beobachtungen über gleichmäßig voneinander entfernter Zeitpunkte. Umfasst ein Zeitreihendiagramm, Autokorrelationen, Variogramme, spektrale Dichte, ARIMA, saisonales ARIMA, Glättungsmodelle und Vorhersagen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**Syntax:** Time Series Forecast( Y( column ) )

**Beschreibung:** Passt mehrere Zeitreihen mithilfe angegebener Methoden an und macht Vorhersagen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Uplift

**Syntax:** Uplift( Y( column ), X( columns ), Treatment( column ) )

**Beschreibung:** Passt einen rekursiven Partitionsbaum an, der Teilungen auswählt, um die Behandlungsunterschiede zu maximieren. Die Modelle identifizieren Gruppen von Personen, die mit größter Wahrscheinlichkeit auf eine Behandlung ansprechen.

**Beispiel 1**

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 3 ));

```

### Variability Chart

**Syntax:** Variability Chart( Y( column ), X( columns ) )

**Beschreibung:** Analysiert stetige Messungen, um die Leistung Ihres Messsystems zu ermitteln. Sie können auch eine Messsystemstudie durchführen, um Kennzahlen der Variation in Ihren Daten anzuzeigen.

#### Modell gekreuzte Effekte

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << Variability Chart(	Y( :Measurement ),	Model( "Crossed" ),	X( :Operator, :part# ),	Variance Components( 1 ));

```

#### Modell gekreuzte vor geschachtelten Effekten

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << Variability Chart(	Y( :Y ),	X( :Operator, :Instrument, :Part ),	Model( "Crossed then Nested" ),	Variance Components( 1 ));

```

#### Modell geschachtelte Effekte

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << Variability Chart(	Y( :Y ),	Model( "Nested" ),	X( :Operator, :Part ),	Variance Components( 1 ));

```

#### Modell geschachtelte vor gekreuzten Effekten

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << Variability Chart(	Y( :Y ),	Model( "Nested then Crossed" ),	X( :Operator, :Instrument, :Part ),	Variance Components( 1 ));

```

#### Modell Haupteffekte

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Wafer.jmp" );obj = dt << Variability Chart(	Y( :Y ),	Model( "Main Effect" ),	X( :Operator, :Wafer ),	Variance Components( 1 ));

```

#### Später am Modell entscheiden

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**Syntax:** Virtual Join

**Beschreibung:** Verknüpft eine Hauptdatentabelle mit einer Hilfsdatentabelle über eine ID-Spalte.

Ermöglicht der Haupttabelle, auf Spalten aus der Hilfstabelle zuzugreifen, ohne dass die Tabellen physisch verbunden werden müssen.



Die Spalteneigenschaft „Verknüpfungs-ID“ kennzeichnet eine Spalte in der Hilfstabelle als die ID-Spalte.



Die Spalteneigenschaft „Verknüpfungsreferenz“ ordnet eine Spalte der Haupttabelle der ID-Spalte in der Hilfstabelle zu.

Mit der Eigenschaft „Verknüpfungsreferenz“ können Sie die Datentabellenreferenz oder den Pfad der Datentabelle festlegen, die Sie verknüpfen möchten.

Die Option „Name der verknüpften Spalte verwenden“ erzeugt die verknüpften Spalten mit dem Quellspaltennamen statt mit dem vollständig qualifizierten eindeutigen Namen.

**Beispiel 1**

```jsl

cID = New Table( "Color IDs",	Add Rows( 2 ),	New Column( "ID", Numeric, Set Property( "Link ID", 1 ), Set Values( [1, 2] ) ),	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) ));cID << Save( "$temp\cID.jmp" );Favs = New Table( "Favorite Colors",	Add Rows( 4 ),	New Column( "colorID",		Numeric,		Set Property( "Link Reference", Reference Table( "$temp\cID.jmp" ) ),		Set Values( [1, 2, 1, 2] )	),	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) ));Favs:"color[colorID]"n << hide( 0 ); // show the color column in the table, it is hidden by defaultWrite( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );Favs:colorID[2] = 1; // change ralph's color by changing his color idWrite( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );Favs:"color[colorID]"n << hide( 1 ) << hide( 0 );Write( "\!nRalph's color changed." );

```

**Beispiel 2**

```jsl

cID = New Table( "Color IDs",	Add Rows( 2 ),	New Column( "ID", Numeric, Set Values( [1, 2] ) ),	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) ));Favs = New Table( "Favorite Colors",	Add Rows( 4 ),	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) ));cID:ID << Set Property( "Link ID", 1 );Favs:colorID << Set Property(	"Link Reference",	{Reference Table( cID ), options( "use linked column name" )});Favs:color << hide( 0 ); // show the color column in the table, it is hidden by defaultWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // not Favs:"color[colorID]"nFavs:colorID[2] = 1;    // change ralph's color by changing his color idWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] );Write( "\!nRalph's color changed." );

```

**Beispiel 3**

```jsl

cID = New Table( "Color IDs",	Add Rows( 2 ),	New Column( "ID", Numeric, Set Values( [1, 2] ) ),	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) ));Favs = New Table( "Favorite Colors",	Add Rows( 4 ),	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) ));cID:ID << Set Property( "Link ID", 1 );Favs:colorID << Set Property(	"Link Reference",	{Reference Table( cID ), options( "use linked column name"(1), "auto open" )});Favs2 = New Table( "More Favorites",	Add Rows( 4 ),	New Column( "ID", Numeric, Set Values( [1, 2, 3, 4] ) ),	New Column( " person", Character, Set Values( {"susie", "james", "mark", "ami"} ) ));// A link ID and link reference can be assigned to the same column.  The option "Auto open" will  // automatically open the linked tables for you when you open the main referencing table.Favs2:ID << Set Property( "Link ID", 1 );cID:ID << Set Property(	"Link Reference",	{Reference Table( Favs2 ), Options( "Use Linked Column Name"(1) )});Favs:color << hide( 0 ); // Show the color column in the table, it is hidden by defaultFavs:ID << hide( 0 );  // Show the ID column in the table, from More Favorites tableWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // Not Favs:"color[colorID]"nFavs:colorID[2] = 1;    // Change ralph's color by changing his color idWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] );Write( "\!nRalph's color changed." );cid:person << hide( 0 );Write( "\!n", cID:person[2], " likes ", Favs:color[4] );

```

## Column Scripting

### Elementmeldungen

#### Add Column Properties

**Syntax:** obj &lt;&lt; Add Column Properties

**Beschreibung:** Fügt der ausgewählten Spalte Eigenschaften hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

#### Add From Row States

**Syntax:** obj &lt;&lt; Add From Row States

**Beschreibung:** Aktualisiert eine Spalte mit Zeileneigenschaften mit gegenwärtig verwendeten veränderten Zeileneigenschaften, bei denen es sich nicht um die Standardeigenschaften handelt.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );dt << New Column( "Row State Col", Row State, Copy from Row States );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Exclude();col = Column( "Row State Col" );col << Add From Row States();

```

#### Add To Row States

**Syntax:** obj &lt;&lt; Add To Row States

**Beschreibung:** Kopiert die Werte aller Zeileneigenschaften einer Spalte, bei denen es sich nicht um die Standardeigenschaften handelt, in die gegenwärtig verwendeten Zeileneigenschaften in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );col = Column( "Time Marker" );col << Copy To Row States();col[5] = Color State( "Red" );Wait( 2 );col << Add To Row States();

```

#### Codes to Labels

**Syntax:** :col &lt;&lt; Codes To Labels(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Beschreibung:** Eine Spalte mit Zeichenwerten erstellen und Wertbeschriftungen verwenden, die den ursprünglichen Codes entsprechen.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:age << Value Labels(	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"});:age << Codes to Labels;

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( ["F" => 1, "M" => 2] );:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**Beispiel 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

#### Color Cell by Value

**Syntax:** obj &lt;&lt; Color Cell by Value( state=0|1 )

**Beschreibung:** Ändert die Anzeigefarbe für Zellen in der Spalte.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Property(	"Value Colors",	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17 =	-10562523});Wait( 1 );:Age << Color Cell by Value( 1 );

```

#### Color Cells

**Syntax:** obj &lt;&lt; Color Cells( color, &lt;row | { row1, row2, ...} &gt; )

**Beschreibung:** Zellen in der Spalte in der angegebenen Farbe anzeigen. Sind keine Zeilen vorgegeben, wird die gleiche Farbe auf die gesamte Spalte angewendet.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Color Cells( "Red" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {1, 3, 5};:Age << Color Cells( "Red", a );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {1, 3, 5};b = {2, 4, 6};:height << color cells( {{"Red", a}, {"blue", b}} );

```

#### Compact

**Syntax:** :col &lt;&lt; Compact( &lt;1|0&gt; )

**Beschreibung:** Ändert die Interna einer Zeichenspalte, so dass nur eine Kopie jedes Werts gespeichert wird, was möglicherweise Speicher spart und einige Vorgänge beschleunigt. Das optionale Speicherformat steuert das Format, in dem die Spalte gespeichert wird. Das komprimierte Format ist kleiner und kann schneller geladen werden, doch die Tabelle kann in JMP 17 und früher nicht geöffnet werden. Das Standardformat ist das voreingestellte Speicherformat.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );:Airline << Compact();

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );:Airline << Compact();:Airline << Get Compact;

```

#### Convert to Table Column

**Syntax:** obj &lt;&lt; Convert to Table Column

**Beschreibung:** Fügt die Transformationsspalte der Datentabelle hinzu.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "New Col", Formula( 1 ) );:NewCol << Convert to Table Column();

```

#### Copy from Row States

**Syntax:** obj &lt;&lt; Copy from Row States

**Beschreibung:** Kopiert die aktuellen Werte aller Zeileneigenschaften aus der Datentabelle in eine Spalte.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );dt << New Column( "Row State Col", Row State, Copy from Row States );

```

#### Copy to Row States

**Syntax:** obj &lt;&lt; Copy to Row States

**Beschreibung:** Kopiert die Werte aller Zeileneigenschaften einer Spalte in die gegenwärtig verwendeten Zeileneigenschaften in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );col = Column( "Time Marker" );Wait( 2 );col << Copy To Row States();

```

#### Data Type

**Syntax:** obj &lt;&lt; Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Beschreibung:** Legt den Datentyp für die Spalte fest. Mit den optionalen Argumenten können Sie auch das Format, Eingabeformat und die Breite in Bytes festlegen, wenn die Spalte numerisch ist. Bei „Fail On Conversion Error“ wird die Datentypänderung abgebrochen, wenn ein Wert nicht konvertiert werden kann. Das ist besonders beim Konvertieren einer Zeichenspalte in eine numerische Spalte nützlich. Bei „Return Failed Rows“ wird eine Liste mit Indizes der Zeilen zurückgegeben, deren Konvertierung nicht möglich war.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Time",	"Character",	"Nominal",	Set Values( {"13:32", "20:10", "20:12", "14:56"} ));Wait( 2 );dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );dt:Time << Set Modeling Type( "Continuous" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt:Age << Set Data Type( "Character" );dt:Height << Set Data Type( "Numeric", 2 );

```

**Beispiel 3**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );Show( r );

```

**Beispiel 4**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );Show( r );

```

#### Delete Formula

**Syntax:** obj &lt;&lt; Delete Formula

**Beschreibung:** Löscht die Formel, die der Spalte zugeordnet ist.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );:Time << Delete Formula;

```

#### Delete Property

**Syntax:** obj &lt;&lt; Delete Property( property name )

**Beschreibung:** Löscht die genannte Eigenschaft aus der Spalte.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );:Time << Delete Property( "Spec Limits" );

```

#### Eval Formula

**Syntax:** obj &lt;&lt; Eval Formula

**Beschreibung:** Wertet die Formel in der Spalte aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << Eval Formula;

```

#### Format

**Syntax:** obj &lt;&lt; Format( "Best|Fixed Dec...", &lt;width&gt;, &lt;dec&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format( "mdy|ddmmyy|Long Date...", width ) obj &lt;&lt; Format( "Format Pattern", pattern ) obj &lt;&lt; Format("Currency", &lt;Country symbol&gt;, &lt;width&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format("Use Thousands Separator" )

**Beschreibung:** Legt das Format zum Anzeigen der Daten in der Spalte fest. Verfügbare Formate umfassen alle Elemente im Dialogfeld „Spalteninfo“ unter „Format“.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Format( "Fixed Dec", 6, 3 );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );:Date << Format( "ddMonyyyy", 9 );:DJI High << Format( "Currency" );:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**Beispiel 3**

```jsl

dt = New Table( "hour24_times",	Add Rows( 3 ),	New Column( "time",		Continuous,		Format( "Format Pattern", "<hh24><:><mm><:><ss>" ),		Set Values( {"01:23:45", "18:19:20", "23:45:01"} )	));

```

#### Formula

**Syntax:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Beschreibung:** Legt die Formel in der Spalte fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );

```

#### Get Column Properties

**Syntax:** obj &lt;&lt; Get Column Properties

**Beschreibung:** Kopiert alle Eigenschaften, die in den ausgewählten Spalten definiert sind.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:HARDNESS << Get Column Properties();

```

#### Get Compact

**Syntax:** obj &lt;&lt; Get Compact

**Beschreibung:** Kompakt ist für die Spalte festgelegt

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );Show( :Airline << Get Compact );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );:Airline << Compact();Show( :Airline << Get Compact );

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Ruft die Datentabelle der Spalte ab.

**JMP Version hinzugefügt:** 14

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );c = Column( dt1, "Age" );Show( c << Get Name, c << Get Data Table );

```

#### Get Data Type

**Syntax:** obj &lt;&lt; Get Data Type( &lt;"English"&gt; )

**Beschreibung:** Gibt den Datentyp der Spalte zurück. Wird das Schlüsselwort „English“ nicht verwendet, wird der Datentyp in der Sprache zurückgegeben, in der JMP installiert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );which = dt:Age << Get Data Type;Show( which );

```

#### Get Data Type Length

**Syntax:** obj &lt;&lt; Get Data Type Length( &lt;English&gt; )

**Beschreibung:** Gibt den Datentyp und die Datenlänge der Spalte zurück. Es wird nur der Datentyp zurückgegeben, wenn die Datenlänge nicht festgelegt ist, wie in den meisten Zeichenspalten.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );which = dt:Age << Get Data Type Length;Show( which );

```

**Beispiel 2**

```jsl

dt = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character( 8 ), Nominal, Set Values( {"KATIE", "CAROL", "MARTHA"} ) ),	New Column( "Age", Numeric( 2 ), Set Values( [12, 14, 16] ) ));nameTypeLength = dt:Name << Get Data Type Length;ageTypeLength = dt:Age << Get Data Type Length;Show( nameTypeLength, ageTypeLength );

```

#### Get Display Width

**Syntax:** obj &lt;&lt; Get Display Width

**Beschreibung:** Anzeigebreite der Spalte abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 0 );w = :Height << Get Display Width;

```

#### Get Excluded

**Syntax:** obj &lt;&lt; Get Excluded

**Beschreibung:** Gibt 1 zurück, wenn die Spalte ausgeschlossen ist

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get excluded;Show( s );

```

#### Get Field Width

**Syntax:** obj &lt;&lt; Get Field Width

**Beschreibung:** Gibt die Feldbreite für die Anzeige der Daten in der Spalte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );width = :Height << Get Field Width;Show( width );

```

#### Get Format

**Syntax:** obj &lt;&lt; Get Format

**Beschreibung:** Gibt das Format der Spalte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );f = :Height << Get Format;Show( f );

```

#### Get Formula

**Syntax:** obj &lt;&lt; Get Formula

**Beschreibung:** Gibt die Formel in der Spalte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << Eval Formula;result = col << Get Formula;Show( result );

```

#### Get Group Name

**Syntax:** obj &lt;&lt; Get Group Name

**Beschreibung:** Den Gruppennamen oder den Pfad der Gruppe zurückgeben, die diese Spalte enthält, sofern vorhanden.

**JMP Version hinzugefügt:** 19

**Einfache Gruppe**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Group Columns( :height, 2 );Show( :height << Get Group Name );

```

**Geschachtelte Gruppe**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Group Columns( "XYZ", :sex, 3 );dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );Show( :height << Get Group Name );

```

#### Get Header Background Color

**Syntax:** obj &lt;&lt; Get Header Background Color

**Beschreibung:** Farbe für Überschriften abrufen

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Background Color( "Light Red" );Show( :height << Get Header Background Color );

```

#### Get Header Chart Type

**Syntax:** obj &lt;&lt; Get Header Chart Type

**Beschreibung:** Ruft den Typ des Diagramms ab, das im Spaltenkopf der Datentabelle angezeigt wird.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Show( :height << Get Header Chart Type );

```

#### Get Header Text Color

**Syntax:** obj &lt;&lt; Get Header Text Color

**Beschreibung:** Textfarbe für Überschriften abrufen

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Text Color( "Dark Purple" );Show( :height << Get Header Text Color );

```

#### Get Hidden

**Syntax:** obj &lt;&lt; Get Hidden

**Beschreibung:** Gibt 1 zurück, wenn die Spalte ausgeblendet ist

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get hidden;Show( s );

```

#### Get Initial Data

**Syntax:** obj &lt;&lt; Get Initial Data

**Beschreibung:** Wert oder Ausdruck abrufen, mit dem die Daten der Spalte initialisiert werden.

```jsl

dt = New Table( "MyDt" );dt << Add Rows( 5 );Column( dt, 1 ) << set initial data( Log( 1 ) );Column( dt, 1 ) << get initial data;

```

#### Get Input Format

**Syntax:** obj &lt;&lt; Get Input Format

**Beschreibung:** Gibt das Format zum Eingeben und Speichern der Daten der Spalte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );f = :Date << Get Input Format;Show( f );

```

#### Get Labeled

**Syntax:** obj &lt;&lt; Get Labeled

**Beschreibung:** Gibt 1 zurück, wenn die Spalte beschriftet ist

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get labeled;Show( s );

```

#### Get List Check

**Syntax:** obj &lt;&lt; Get List Check

**Beschreibung:** Gibt die Listenprüfung zurück, sofern diese in der Spalte definiert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Movies.jmp" );prop = :Type << Get List Check;Show( prop );

```

#### Get Lock

**Syntax:** obj &lt;&lt; Get Lock

**Beschreibung:** Gibt wahr zurück, wenn eine Spalte gesperrt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );lock = :Prin1 << Get Lock;Show( lock );

```

#### Get Modeling Type

**Syntax:** obj &lt;&lt; Get Modeling Type( &lt;"English"&gt; )

**Beschreibung:** Gibt den Modellierungstyp der Spalte zurück. Wird das Schlüsselwort „English“ nicht verwendet, wird der Modellierungstyp in der Sprache zurückgegeben, in der JMP installiert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );which = :Age << Get Modeling Type;Show( which );

```

#### Get Name

**Syntax:** obj &lt;&lt; Get Name

**Beschreibung:** Gibt den Namen der Spalte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col name = Column( 4 ) << Get Name;Show( col name );

```

#### Get Properties List

**Syntax:** obj &lt;&lt; Get Properties List

**Beschreibung:** Liste der Namen aller Eigenschaften für diese Spalte abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:HARDNESS << Get Properties List();

```

#### Get Property

**Syntax:** obj &lt;&lt; Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency| Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**Beschreibung:** Gibt bestimmte Eigenschaften zurück, sofern diese in der Spalte definiert sind.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );prop = :Credit Check << Get Property( "Axis" );Show( prop );

```

#### Get Range Check

**Syntax:** obj &lt;&lt; Get Range Check

**Beschreibung:** Gibt die Bereichsprüfung zurück, sofern diese in der Spalte definiert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Range Check( LE LT( 48, 75 ) );check = :Height << Get Range Check;Show( check );

```

#### Get Role

**Syntax:** obj &lt;&lt; Get Role( &lt;"English"&gt; )

**Beschreibung:** Gibt die Rolle der Spalte zurück. Wird das Schlüsselwort „English“ nicht verwendet, wird die Rolle in der Sprache zurückgegeben, in der JMP installiert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );which = :Count << Get Role();Show( which );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Gibt das Skript zurück, um die Spalte erneut zu erstellen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Age << Get Script;Show( s );

```

#### Get Scroll Locked

**Syntax:** obj &lt;&lt; Get Scroll Locked

**Beschreibung:** Gibt 1 zurück, wenn der Bildlauf in der Spalte gesperrt ist

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get Scroll locked;Show( s );

```

#### Get Selected

**Syntax:** obj &lt;&lt; Get Selected

**Beschreibung:** Gibt 1 zurück, wenn die Spalte ausgewählt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get Selected;Show( s );

```

#### Get Stored Values

**Syntax:** obj &lt;&lt; Get Stored Values

**Beschreibung:** Gibt die Werte in den Spalten ohne Konvertierung der Fehlende-Werte-Codes zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Property( "Missing Value Codes", 65 );valuesMatrix = :Height << Get Stored Values;Show( valuesMatrix );valuesList = :Height << GetStoredValues(	Format(/* a numeric column will be list of character items if a format is supplied, see format function */		"Currency",		"EUR",		2,		<<use locale(			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */		)	));Show( valuesList );

```

#### Get Use Value Labels

**Syntax:** obj &lt;&lt; Get Use Value Labels

**Beschreibung:** Gibt den Status der Flag-Variable „Wertbeschriftungen anzeigen“ zurück.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );flag = :Color << Get Use Value Labels;Show( flag );

```

#### Get Value Labels

**Syntax:** obj &lt;&lt; Get Value Labels

**Beschreibung:** Gibt die Wertbeschriftungen zurück, sofern diese in der Spalte definiert sind.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );values = :Color << Get Value Labels;Show( values );

```

#### Get Values

**Syntax:** obj &lt;&lt; Get Values

**Beschreibung:** Gibt die Werte in der Spalte zurück.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );valuesMatrix = :Height << Get Values;Show( valuesMatrix );valuesList = :Height << GetValues(	Format(/* a numeric column will be list of character items if a format is supplied, see format function */		"Currency",		"EUR",		2,		<<use locale(			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */		)	));Show( valuesList );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Property( "Missing Value Codes", 65 );valuesMatrix = :Height << Get Values;Show( valuesMatrix );valuesList = :Height << GetValues(	Format(/* a numeric column will be list of character items if a format is supplied, see format function */		"Currency",		"EUR",		2,		<<use locale(			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */		)	));Show( valuesList );

```

#### Ignore Errors

**Syntax:** obj &lt;&lt; Ignore Errors( state=0|1 )

**Beschreibung:** Flag festlegen, um Fehler zu ignorieren, wenn eine Spaltenformel ausgewertet wird

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << ignore errors( true );

```

#### Input Format

**Syntax:** obj &lt;&lt; Input Format( format ) obj &lt;&lt; Input Format( "Format Pattern", pattern )

**Beschreibung:** Legt das Format zum Eingeben und Speichern der Daten in der Spalte fest. Wird häufig für Datums- und Uhrzeitformate verwendet.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );:Date << Input Format( "ddmmyyyy" );

```

**Beispiel 2**

```jsl

dt = New Table( "duration_table",	Add Rows( 3 ),	New Column( "durations",		Continuous,		Format( "Format Pattern", "<Hour><:><mm><:><ss>" ),		Input Format( "Format Pattern", "<Hour>h <mm>m <ss>s" ),		Set Values( {"65h 43m 21s", "12h 34m 56s", "4h 32m 10s"} )	));

```

#### Is Transform Column

**Syntax:** obj &lt;&lt; Is Transform Column

**Beschreibung:** Gibt 1 zurück, wenn die Spalte eine Transformationsspalte ist, ansonsten 0.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Is Transform Column();

```

#### IsTransformedOnSASExport

**Syntax:** obj &lt;&lt; IsTransformedOnSASExport

**Beschreibung:** Gibt wahr zurück, wenn die Daten im resultierenden SAS-Datensatz für diese Spalte beim Export in SAS geändert werden. Hinweis: Dies gilt nur für Datumsspalten, weil Daten in SAS und in JMP unterschiedlich gespeichert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );flag = :Date << Is Transformed On SAS Export;Show( flag );

```

#### Labels to Codes

**Syntax:** :col &lt;&lt; Labels to Codes(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Beschreibung:** Eine Spalte mit numerischen Codes mit Wertbeschriftungen erstellen, die den ursprünglichen Zeichenwerten entsprechen.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes;

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**Beispiel 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

#### Lock

**Syntax:** obj &lt;&lt; Lock

**Beschreibung:** Sperrt die Spalte, so dass sie nicht mehr geändert werden kann.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Lock( 1 );

```

#### Preselect Role

**Syntax:** obj &lt;&lt; Preselect Role( "Keine Rolle"|"X"|"Y"|"Gewichtung"|"Häufigkeit"|"Validierung" )

**Beschreibung:** Weist der Spalte in der Datentabelle eine vorausgewählte Rolle zu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Preselect Role( "Y" );

```

#### Remove Value Labels

**Syntax:** obj &lt;&lt; Remove Value Labels

**Beschreibung:** Entfernt alle Wertbeschriftungen, die in der Spalte definiert sind.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );:Color << Remove Value Labels;

```

#### Reset Transform

**Syntax:** obj &lt;&lt; Reset Transform

**Beschreibung:** Entfernt die gepufferten Daten für die Transformationsspalte. Durch den Zugriff auf die Spaltendaten wird der Cache neu aufgebaut. Gehen Sie auf diese Weise vor, um den Speicher zu verkleinern oder um die Neuberechnung zu ermöglichen, wenn die Formel von externen Informationen abhängig ist.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );global:a = 2;dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );Show( :"sqrt[height]"n[1] );global:a = 3;:"sqrt[height]"n << Reset Transform();Show( :"sqrt[height]"n[1] );

```

#### Set Data Type

**Syntax:** obj &lt;&lt; Set Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Beschreibung:** Legt den Datentyp für die Spalte fest. Mit den optionalen Argumenten können Sie auch das Format, Eingabeformat und die Breite in Bytes festlegen, wenn die Spalte numerisch ist. Bei „Fail On Conversion Error“ wird die Datentypänderung abgebrochen, wenn ein Wert nicht konvertiert werden kann. Das ist besonders beim Konvertieren einer Zeichenspalte in eine numerische Spalte nützlich. Bei „Return Failed Rows“ wird eine Liste mit Indizes der Zeilen zurückgegeben, deren Konvertierung nicht möglich war.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Time",	"Character",	"Nominal",	Set Values( {"13:32", "20:10", "20:12", "14:56"} ));Wait( 2 );dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );dt:Time << Set Modeling Type( "Continuous" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt:Age << Set Data Type( "Character" );dt:Height << Set Data Type( "Numeric", 2 );

```

**Beispiel 3**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );Show( r );

```

**Beispiel 4**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );Show( r );

```

#### Set Display Width

**Syntax:** obj &lt;&lt; Set Display Width( number )

**Beschreibung:** Anzeigebreite der Spalte ändern.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 0 );w = :Height << Get Display Width;:Height << Set Display Width( 2 * w );

```

#### Set Each Value

**Syntax:** obj &lt;&lt; Set Each Value( number )

**Beschreibung:** Legt alle Werte in einer Spalte auf einen konstanten Wert fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "X" );dt:X << Set Each Value( 5 );

```

#### Set Excluded

**Syntax:** obj &lt;&lt; Set Excluded

**Beschreibung:** Schließt die Spalte aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set excluded;

```

#### Set Field Width

**Syntax:** obj &lt;&lt; Set Field Width( number )

**Beschreibung:** Legt die Feldbreite für die Anzeige der Daten in der Spalte fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Field Width( 20 );

```

#### Set Formula

**Syntax:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Beschreibung:** Legt die Formel in der Spalte fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );

```

#### Set Header Background Color

**Syntax:** obj &lt;&lt; Set Header Background Color

**Beschreibung:** Farbe für Überschriften festlegen. „None“ festlegen, um die Standardfarbe zu verwenden.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Background Color( "Light Red" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Background Color( {250, 200, 150} );

```

#### Set Header Chart Type

**Syntax:** obj &lt;&lt; Set Header Chart Type

**Beschreibung:** Legt den Typ des Diagramms fest, das in der Spaltenkopf der Datentabelle angezeigt werden soll.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Chart Type( "Run Chart" );

```

#### Set Header Text Color

**Syntax:** obj &lt;&lt; Set Header Text Color

**Beschreibung:** Textfarbe für Überschriften festlegen. „None“ festlegen, um die Standardfarbe zu verwenden.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Text Color( "Dark Purple" );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Text Color( {100, 50, 100} );

```

#### Set Hidden

**Syntax:** obj &lt;&lt; Set Hidden

**Beschreibung:** Blendet die Spalte aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set hidden;

```

#### Set Initial Data

**Syntax:** obj &lt;&lt; Set Initial Data

**Beschreibung:** Die Daten der Spalte mit einer beliebigen Konstante oder einem einfachen Ausdruck initialisieren.

**Beispiel 1**

```jsl

dt = New Table( "MyDt", New Column(), New Column() );dt << Add Rows( 5 );Column( dt, 1 ) << set initial data( Today() );Column( dt, 2 ) << set initial data( 99 );

```

**Beispiel 2**

```jsl

dt = New Table( "MyDt" );dt << Add Rows( 5 );Column( dt, 1 ) << set initial data( Log( 1 ) );

```

#### Set Labeled

**Syntax:** obj &lt;&lt; Set Labeled

**Beschreibung:** Verwendet den Datenwert der Spalte als Beschriftung.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set labeled;

```

#### Set Modeling Type

**Syntax:** obj &lt;&lt; Set Modeling Type( "Keine"|"Stetig"|"Ordinal"|"Nominal"|"Zeileneigenschaft"|"Mehrfachantwort"|"Unstrukturierter Text"|"Vektor" )

**Beschreibung:** Legt den Modellierungstyp der Spalte in der Datentabelle fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );

```

#### Set Name

**Syntax:** obj &lt;&lt; Set Name( name )

**Beschreibung:** Legt den Spaltennamen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Name( "Time" );

```

#### Set Property

**Syntax:** obj &lt;&lt; Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**Beschreibung:** Legt Eigenschaften in der Spalte fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set Property( "Units", lbs );

```

#### Set Scroll Locked

**Syntax:** obj &lt;&lt; Set Scroll Locked

**Beschreibung:** Sperrt den Bildlauf in der Spalte.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set Scroll locked;

```

#### Set Selected

**Syntax:** obj &lt;&lt; Set Selected( state=0|1 )

**Beschreibung:** Wählt die Spalte aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Selected( 1 );

```

#### Set Use for Marker

**Syntax:** obj &lt;&lt; Set Use for Marker

**Beschreibung:** Die Werte in dieser Spalte als Symbole in einem Graphen verwenden. Ausdrucksspalten mit Bildern oder Zeichenspalten mit IDs können auch funktionieren.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Name << Set Use for Marker;

```

#### Set Values

**Syntax:** obj &lt;&lt; Set Values( [ value1, value2, value3, ... ] )

**Beschreibung:** Legt die Werte in einer Spalte fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "X" );:X << Set Values(	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,	10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

```

#### SetLock

**Syntax:** obj &lt;&lt; SetLock

**Beschreibung:** Sperrt die Spalte, so dass sie nicht mehr geändert werden kann.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Lock( 1 );

```

#### Suppress Eval

**Syntax:** obj &lt;&lt; Suppress Eval( state=0|1 )

**Beschreibung:** Setzt die Flag-Variable zum Unterdrücken der Auswertung der Formel in der Spalte.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << suppress eval( true );

```

#### Use Value Labels

**Syntax:** obj &lt;&lt; Use Value Labels( state=0|1 )

**Beschreibung:** Ersetzt in der Spalte definierte Wertbeschriftungen in allen Ausgaben.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );:Color << Use Value Labels( 1 );Distribution( Column( :Color ) );

```

#### Value Labels

**Syntax:** obj &lt;&lt; Value Labels( { value1 = "label1", value2 = "label2", ... } )

**Beschreibung:** Legt die Wertbeschriftungen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### Elementmeldungen

#### Add Multiple Columns

**Syntax:** obj &lt;&lt; Add Multiple Columns( Column prefix, number of columns, &lt;before first|after last|after(column)&gt;, Character|Numeric|Row State, &lt;fieldwidth(number)&gt; )

**Beschreibung:** Erstellt mehrere neue Spalten in der aktuellen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Multiple Columns( "Date", 5, Character );

```

#### Clear Column Selection

**Syntax:** obj &lt;&lt; Clear Column Selection

**Beschreibung:** Hebt die Spaltenauswahl in der Datentabelle auf.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Go To( :BP 12F );Wait( 2 );dt << Clear Column Selection();

```

#### Clone Formula Column

**Syntax:** obj &lt;&lt; Clone Formula Column( column, n, &lt;Substitute Column Reference( column1, list )&gt; )

**Beschreibung:** Erstellt n neue Formelspalten basierend auf der vorgegebenen column. Spaltenreferenzen auf column1 von der ursprünglichen Formel werden durch jede Spalte in list für alle n Spalten ersetzt. Verwenden Sie mehrere Argumente Substitute Column Reference, wenn Sie mehr als eine Spaltenreferenz von der ursprünglichen Formel ersetzen.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << New Column( "Day 1", Formula( (:BP 8M + :BP 12M + :BP 6M) / 3 ) );list1 = {:BP 8W, :BP 8F};list2 = {:BP 12W, :BP 12F};list3 = {:BP 6W, :BP 6F};dt << Clone Formula Column(	"Day 1",	2,	Substitute Column Reference( :BP 8M, list1 ),	Substitute Column Reference( :BP 12M, list2 ),	Substitute Column Reference( :BP 6M, list3 ));

```

#### Columns Manager

**Syntax:** obj &lt;&lt; Columns Manager

**Beschreibung:** Spaltenmanager für die aktuelle Tabelle aufrufen und Eigenschaften und Kenngrößen für die Spalten anzeigen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col1 = dt << Columns Manager;

```

#### Combine Columns

**Syntax:** obj &lt;&lt; Combine Columns

**Beschreibung:** Einen Satz Spalten zu einer Spalte mit Trennzeichen (Mehrfachantwort) verbinden.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Selected Columns are Indicator Columns( 1 ),	Column Name( "When to Brush" ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Column Name( "When to Brush" ));

```

#### Compress Selected Columns

**Syntax:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ... )

**Beschreibung:** Komprimiert jede Spalte in kompaktestem Format.

Zeichendaten werden als 1 Byte komprimiert, sofern weniger als 255 Stufen vorhanden sind.

Numerische Daten werden als 1 Byte komprimiert, sofern die Daten zwischen -127 und 127 liegen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

#### Exclude/Unexclude

**Syntax:** obj &lt;&lt; Exclude( 0|1 )

**Beschreibung:** Schließt die Spalte von jeder folgenden Analyse aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << Exclude( 1 );

```

#### Formula

**Syntax:** obj &lt;&lt; Formula

**Beschreibung:** Legt eine Formel in der Spalte fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col1 = dt << New Column( "Ratio", Numeric, Continuous );col1 << Formula( :height / :weight );

```

#### Freq

**Syntax:** obj &lt;&lt; Preselect Role( Freq )

**Beschreibung:** Weist die Häufigkeitsrolle der Datentabellenspalte zu

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "weight" );col << Preselect Role( "freq" );

```

#### Go to

**Syntax:** obj &lt;&lt; Go to( column name|column number )

**Beschreibung:** Wählt die angegebene Spalte in der aktuellen Datentabelle aus.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Go to( :BP 12F );

```

#### Hide/Unhide

**Syntax:** obj &lt;&lt; Hide( 0|1 )

**Beschreibung:** Blendet die Spalte im Datenraster aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Age << Hide( 1 );

```

#### Invert Column Selection

**Syntax:** obj &lt;&lt; Invert Column Selection( &lt;list of columns&gt; )

**Beschreibung:** Kehrt die aktuelle Spaltenauswahl um. Wenn eine Liste von Spalten vorgegeben ist, werden die Spalten, die sich nicht in der Liste befinden, ausgewählt.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age << Set Selected( 1 );dt:height << Set Selected( 1 );Wait( 1 );b = dt << Invert Column Selection;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {:height, :weight};b = dt << Invert Column Selection( a );

```

#### Label/Unlabel

**Syntax:** obj &lt;&lt; Label( 0|1 )

**Beschreibung:** Legt diese Spalte als Beschriftung zur Identifikation fest. Die Werte in der Spalte werden in einem Graph angezeigt, wenn ein Punkt ausgewählt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Age << Label( 1 );

```

#### Make Indicator Columns

**Syntax:** obj &lt;&lt; Make Indicator Columns

**Beschreibung:** Aus der ausgewählten Spalte einen Satz Indikatorspalten erzeugen

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << Make Indicator Columns( columns( {:species, :season} ) );

```

#### Move Selected Columns

**Syntax:** obj &lt;&lt; Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({&lt;a&gt;, &lt;b&gt;, ...}) )

**Beschreibung:** Verschiebt die ausgewählten Spalten in der Datentabelle.

**After column**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :Age );Wait( 2 );dt << Move Selected Columns( After( :sex ) );

```

**After group**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group Columns( "Measures", {:height, :weight} );dt << Go To( :Age );Wait( 2 );dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :Age );Wait( 2 );dt << Move Selected Columns( To last );

```

#### New Column

**Syntax:** obj &lt;&lt; New Column( &lt;name&gt;, &lt;data type&gt;, &lt;modeling type&gt;, &lt;Format()&gt;, &lt;Formula()&gt;, &lt;Set Property()&gt;, &lt;Set Values()&gt;, &lt;Like()&gt; )

**Beschreibung:** Erstellt eine neue Spalte in der aktuellen Datentabelle.

**Einfach**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "X", Formula( Random Uniform() ) );

```

**Like**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "like name", Like( :name ) );

```

**Neue Tabelle**

```jsl

New Table( "test",	Add Rows( 5 ),	New Column( "name",		Character( 8 ),		Nominal,		Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE"} )	),	New Column( "age",		Numeric,		Ordinal,		Format( "Fixed Dec", Use thousands separator( 0 ), 5, 0 ),		Set Values( [12, 12, 12, 12, 12] )	),	New Column( "code",		Character( 2 ),		Nominal,		Set Values( {"AA", "AA", "BB", "BB", "AA"} )	));

```

#### New Formula Column

**Syntax:** dt &lt;&lt; New Formula Column(Operation(name, &lt;Category(name)&gt;), Columns(columns), &lt;Group By(columns)&gt;)

**Beschreibung:** Eine Formelspalte in der Tabelle erstellen und dabei die angegebenen Spalten verwenden und die mathematischen Operationen und optionalen Gruppierungsspalten anwenden. Die Kategorie der Operation kann, wenn nötig, angegeben werden, um den Operationsnamen eindeutig zu machen. Gibt eine Liste von Spaltenreferenzen auf die erstellten Spalten zurück.

**JMP Version hinzugefügt:** 17

**Gruppieren nach**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Formula Column(	Operation( "Mean" ),	Columns( :height, :weight ),	Group By( :age ));

```

**Log 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

#### Next Selected Column

**Syntax:** obj &lt;&lt; Next Selected Column

**Beschreibung:** Zur nächsten ausgewählten Spalte gehen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age << Set Selected( 1 );dt:height << Set Selected( 1 );Wait( 1 );dt << Next Selected Column;Wait( 2 );dt << Next Selected Column;

```

#### No Role

**Syntax:** obj &lt;&lt; Preselect Role( No Role )

**Beschreibung:** Entfernt die zugewiesene Rolle aus der Spalte der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Preselect Role( "No Role" );

```

#### Original Order

**Syntax:** obj &lt;&lt; Original Order

**Beschreibung:** Verschiebt die Spalten zurück in ihre ursprüngliche Reihenfolge in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :Age );dt << Move Selected Columns( To last );Wait( 2 );dt << Original Order();

```

#### Paste Column Properties

**Syntax:** obj &lt;&lt; Paste Column Properties

**Beschreibung:** Fügt aus der Zwischenablage mehrere Listen mit Spalteneigenschaften in mehrere Spalten ein. Optional können Sie eine Liste mit Zielspalten angeben, statt sie in der Datentabelle auszuwählen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Copy Column Properties( {:MODULUS, :ELONG} );dt2 = New Table( "test it",	New Column( "T1", numeric, continuous ),	New Column( "T2", numeric, continuous ),	New Column( "T3", numeric, continuous ),	Add Rows( 10 ));dt2 << Paste Column Properties( {:T1, :T3} );

```

#### Previous Selected Column

**Syntax:** obj &lt;&lt; Previous Selected Column

**Beschreibung:** Zur vorherigen ausgewählten Spalte gehen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age << Set Selected( 1 );dt:height << Set Selected( 1 );Wait( 1 );dt << Next Selected Column;dt << Next Selected Column;Wait( 2 );dt << Previous Selected Column;

```

#### Reorder by Data Type

**Syntax:** obj &lt;&lt; Reorder by Data Type

**Beschreibung:** Ordnet die Spalten in der Datentabelle anhand des Datentyps neu.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reorder By Data Type();

```

#### Reorder by Modeling Type

**Syntax:** obj &lt;&lt; Reorder by Modeling Type

**Beschreibung:** Ordnet die Spalten in der Datentabelle anhand des Modellierungstyps neu.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reorder By Modeling Type();

```

#### Reorder by Name

**Syntax:** obj &lt;&lt; Reorder by Name

**Beschreibung:** Ordnet die Spalten in der Datentabelle anhand des Spaltennamens neu.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reorder By Name();

```

#### Reverse Order

**Syntax:** obj &lt;&lt; Reverse Order

**Beschreibung:** Kehrt die Reihenfolge der Spalten in der Datentabelle um.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reverse Order();

```

#### Set Label Columns

**Syntax:** obj &lt;&lt; Set Label Columns( column(s) )

**Beschreibung:** Weist ausgewählten Spalten in der Datentabelle die Beschriftungseigenschaft zu.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Set Label Columns( :City, :State );

```

#### Set Scroll Lock Columns

**Syntax:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Beschreibung:** Sperrt den Bildlauf ausgewählter Spalten in der Datentabelle. Um kenntlich zu machen, dass eine Spalte gesperrt ist, wechselt die Hintergrundfarbe.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Set Scroll Lock Columns( :City );

```

#### Text to Columns

**Syntax:** obj &lt;&lt; Text to Columns

**Beschreibung:** Aus einer Textspalte mit Trennzeichen einen Satz Textspalten oder Indikatorspalten erzeugen

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns(	delimiter( "," ),	columns( :Brush Delimited ),	Make Indicator Columns( 1 ));

```

#### Use for Marker

**Syntax:** obj &lt;&lt; UseForMarker( 0|1 )

**Beschreibung:** Die Werte in dieser Spalte als Symbole in einem Graphen verwenden. Ausdrucksspalten mit Bildern oder Zeichenspalten mit IDs können auch funktionieren.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << UseForMarker( 1 );

```

#### Validation

**Syntax:** obj &lt;&lt; Preselect Role( Validation)

**Beschreibung:** Weist die Validierungsrolle der Datentabellenspalte zu

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "age" );col << Preselect Role( "Validation" );

```

#### Weight

**Syntax:** obj &lt;&lt; Preselect Role( Weight )

**Beschreibung:** Weist die Gewichtungsrolle der Datentabellenspalte zu

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Weight << Preselect Role( "weight" );

```

#### X

**Syntax:** obj &lt;&lt; Preselect Role( X )

**Beschreibung:** Weist die X-Rolle der Datentabellenspalte zu

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "weight" );col << Preselect Role( "X" );

```

#### Y

**Syntax:** obj &lt;&lt; Preselect Role( Y )

**Beschreibung:** Weist die Y-Rolle der Datentabellenspalte zu

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Preselect Role( "Y" );

```

### Zugehörige Konstruktoren

#### Column

**Syntax:** Column( &lt;data table&gt;, "column name"|column number )

**Beschreibung:** Gibt eine Referenz auf die angegebene Spalte in der Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "height" );

```

## Data Table Rows

### Elementmeldungen

#### Add Rows

**Syntax:** obj &lt;&lt; Add Rows( &lt;n&gt;, &lt;At Start|At End|After(m)&gt; | {list of (column name = value) pairs}) )

**Beschreibung:** Fügt der Datentabelle n Zeilen hinzu, am Anfang, am Ende oder nach Zeile m.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Rows( 3, after( 5 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Rows( {name = "David", age = 15} );

```

#### Clear Row States

**Syntax:** obj &lt;&lt; Clear Row States

**Beschreibung:** Löscht alle Zeileneigenschaften wie z.B. ausgewählt, ausgeschlossen, ausgeblendet, Symbole, Beschriftungen und Farben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 12, 15] );Wait( 2 );dt << Clear Row States;

```

#### Clear Select

**Syntax:** obj &lt;&lt; Clear Select

**Beschreibung:** Hebt die Auswahl der ausgewählten Zeilen auf.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );dt << Clear Select();

```

#### Clear Selected Row States

**Syntax:** obj &lt;&lt; Clear Selected Row States

**Beschreibung:** Löscht die Zeileneigenschaften wie z.B. ausgewählt, ausgeschlossen, ausgeblendet, Symbole, Beschriftungen und Farben von den ausgewählten Zeilen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );r << Exclude;r << clear select;r << Select Rows( [5, 6] );Wait( 1 );dt << Clear Selected Row States;

```

#### Color Rows by Row State

**Syntax:** obj &lt;&lt; Color Rows by Row State

**Beschreibung:** Zeigt in den Zellen der Datentabelle die der Zeileneigenschaft zugewiesene Farbe an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Color by Column( :Age );Wait( 2 );dt << Color Rows by Row State;

```

#### Color by Column

**Syntax:** obj &lt;&lt; Color by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Beschreibung:** Weist den Zeilen in der Datentabelle basierend auf dem Wert der angegebenen Spalte eine Farbe zu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Color by Column( :Age );

```

#### Color or Mark by Column

**Syntax:** obj &lt;&lt; Color or Mark by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt;Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )&gt; )

**Beschreibung:** Den Werten einer angegebenen Spalte Farben oder Symbole zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Color or Mark by Column( :Age );

```

#### Colors

**Syntax:** obj &lt;&lt; Colors( color )

**Beschreibung:** Markiert die ausgewählten Zeilen in allen grafischen Ausgaben, in denen Symbole enthalten sind, farblich.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Run Script( "Bivariate" );Wait( 1 );dt << Select Where( :sex == "F" );Wait( 1 );dt << Colors( "Red" );

```

#### Data Filter

**Syntax:** obj &lt;&lt; Data Filter( &lt;Location(x,y)&gt;, &lt;"Close Outline"&gt;, &lt;"Local"&gt;, &lt;Inverse(0|1)&gt;, &lt;Show Columns Selector(0|1)&gt;, &lt;Title(string)&gt;, &lt;Save And Restore Current Row States(0|1)&gt;, &lt;Conditional(0|1)&gt;, &lt;Auto Clear(0|1)&gt;, &lt;Group By AND(0|1)&gt;, &lt;Show Histograms And Bars(0|1)&gt;, &lt;Count Excluded Rows(0|1)&gt;, &lt;Mode(...)&gt;, &lt;Add Filter(Columns(...), Where(...), Display(...), &lt;Select Missing(cols)&gt;, &lt;Order By Count(cols)&gt;)&gt;, &lt;Favorites(...)&gt;, &lt;Animation(...)&gt; )

**Beschreibung:** Erzeugt einen Datenfilter oder zeigt einen Datenfilter an, bei dem Sie interaktiv komplexe Teilmengen von Daten auswählen. Die Option Mode legt fest, welche Zeileneigenschaften durch Auswahl im Filter betroffen sind. Der Befehl Add Filter fügt eine Filtergruppe mit den vorgegebenen Columns und Where-Klauseln hinzu. Wenn mehrere Filtergruppen vorhanden sind, wird das kombinierte Verhalten von der Option Group By AND bestimmt. Wenn das Schlüsselwort Local angegeben wird, kann der Filter in einen Bericht eingebettet werden, um eine oder mehrere Plattformen zu filtern, ohne dass das Auswirkungen auf andere Berichte hat.

**Globaler Datenfilter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Data Filter(	Location( {218, 114} ),	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),	Add Filter(		columns( :age, :height ),		Where( :age == {13, 14, 15} ),		Where( :height >= 65 & :height <= 70 )	),	Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) ));

```

**Lokaler Datenfilter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Local Data Filter",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Mode( Show( 1 ), Include( 1 ) ),				Add Filter(					columns( :age, :height ),					Where( :age == {13, 14, 15} ),					Where( :height >= 65 & :height <= 70 )				),				Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )			),			dt << Run Script( "Bivariate" ),			dt << Run Script( "Distribution" )		)	));

```

#### Data View

**Syntax:** obj &lt;&lt; Data View

**Beschreibung:** Erstellt eine neue Datenansicht der aktuell ausgewählten Zeilen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :age < 14 );dt << Data View;

```

#### Delete Rows

**Syntax:** obj &lt;&lt; Delete Rows

**Beschreibung:** Löscht die ausgewählte(n) Zeile(n).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r = dt << Delete Rows;Show( r );

```

#### Exclude/Unexclude

**Syntax:** obj &lt;&lt; Exclude/Unexclude

**Beschreibung:** Schließt die ausgewählten Spalten davon aus, zu Berechnungen beizutragen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );r << Exclude;

```

#### Get Rows

**Syntax:** obj &lt;&lt; Get Rows( number )

**Beschreibung:** Gibt eine Liste von Spaltenwerten für die angegebenen Zeilen zurück

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Get Rows( 3 );dt << Get Rows( {1, 2, 3} );

```

#### Go to Row

**Syntax:** obj &lt;&lt; Go to Row( row number )

**Beschreibung:** Gibt ein Zeilenobjekt aus, geht zur angegebenen Zeile, wählt die Zeile aus und markiert sie.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To Row( 5 );

```

#### Hide and Exclude

**Syntax:** obj &lt;&lt; Hide and Exclude

**Beschreibung:** Blendet die ausgewählten Zeilen in Graphen aus und schließt sie davon aus, zu Berechnungen beizutragen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );r << Hide and Exclude;

```

#### Hide/Unhide

**Syntax:** obj &lt;&lt; Hide/Unhide

**Beschreibung:** Blendet die ausgewählten Zeilen aus, um sie nicht in Graphen anzuzeigen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Go To Row( 12 );r << Hide;

```

#### Insert Rows

**Syntax:** obj &lt;&lt; Insert Rows

**Beschreibung:** Fügt Zeilen vor ausgewählten Zeilen ein. Hat keine Auswirkungen, wenn keine Zeilen ausgewählt sind.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [3, 4, 5] );dt << Insert Rows;

```

#### Invert Row Selection

**Syntax:** obj &lt;&lt; Invert Row Selection

**Beschreibung:** Kehrt die aktuelle Zeilenauswahl um.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Where( :Age < 14 );Wait( 2 );r << Invert Row Selection;

```

#### Label/Unlabel

**Syntax:** obj &lt;&lt; Label/Unlabel

**Beschreibung:** Beschriftet die ausgewählten Zeilen in allen grafischen Ausgaben, in denen Symbole enthalten sind.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Go To Row( 5 );r << Label;

```

#### Marker by Column

**Syntax:** obj &lt;&lt; Marker by Column( column, &lt;Marker( number )&gt;, &lt;Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )&gt;, &lt;Color theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Beschreibung:** Weist den Zeilen in der Datentabelle basierend auf dem Wert der angegebenen Spalte ein Symbol zu.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Marker by Column( :sex );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/big class.jmp" );dt << Marker By Column(	:age,	Marker( 1 ),	Color theme( "White to Red" ),	Marker Theme( "alphanumeric" ),	Reverse Scale( 1 ),	Make Window With Legend);

```

#### Markers

**Syntax:** obj &lt;&lt; Markers( marker )

**Beschreibung:** Ändert die Symbole der ausgewählten Zeilen in allen grafischen Ausgaben, in denen Symbole enthalten sind.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Where( :sex == "M" );r << Markers( "+" );

```

#### Move Rows

**Syntax:** obj &lt;&lt; Move Rows( At Start|At End|After(n) )

**Beschreibung:** Verschiebt die ausgewählten Zeilen in der Datentabelle zur angegebenen neuen Position aufwärts oder abwärts.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r << Move Rows( At Start );

```

#### Name Selection in Column

**Syntax:** obj &lt;&lt; Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**Beschreibung:** Erstellt eine neue kategoriale Spalte mit zwei Werten, ein Wert für die ausgewählten Spalten und ein Wert für die nicht ausgewählten Spalten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age < 14 );dt << Name Selection in Column(	Column Name( "Younger" ),	Selected( "Yes" ),	Unselected( "No" ));

```

#### Next Selected

**Syntax:** obj &lt;&lt; Next Selected

**Beschreibung:** Hebt in der Gruppe der ausgewählten Zeilen die nächste Zeile hervor.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r << Next Selected;

```

#### Previous Selected

**Syntax:** obj &lt;&lt; Previous Selected

**Beschreibung:** Hebt in der Gruppe der ausgewählten Zeilen die vorherige Zeile hervor.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r << Previous Selected;

```

#### Row Editor

**Syntax:** obj &lt;&lt; Row Editor

**Beschreibung:** Öffnet den Zeileneditor für die ausgewählte(n) Zeile(n).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );r << Row Editor();

```

#### Row Selection

**Syntax:** obj &lt;&lt; Row Selection( Select Where(condition), &lt; current selection("extend" | "restrict" | "clear")&gt;, &lt;Dialog("Keep Dialog Open")&gt;, &lt;Match Case(0|1)&gt; )

**Beschreibung:** Wählt alle Zeilen aus, die der definierten Bedingung entsprechen, und bietet die Option zum Erweitern oder Einschränken einer bestehenden Auswahl sowie die Option zum Ausführen der Auswahl oder einfach zum Anzeigen des Dialogfelds. Wenn „Match Case“ nicht angegeben ist, wird standardmäßig bei den Übereinstimmungen auf die Groß-/Kleinschreibung geachtet.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :age < 15 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :age < 15 ) );Wait( 2 );dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :age < 15 ) );dt << Row Selection(	Select where( :sex == "M" ),	current selection( "restrict" ),	Dialog( "keep dialog open" ));

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

#### Select All Matching Cells

**Syntax:** obj &lt;&lt; Select All Matching Cells

**Beschreibung:** Wählt in allen geöffneten Datentabellen alle Zeilen aus, in denen die Werte in der ausgewählten Spalte einem der Werte der in dieser Spalte ausgewählten Zeilen entsprechen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = Open( "$SAMPLE_DATA/Students.jmp" );dt << Select Rows( [1, 2, 3, 4] );dt << Go To( :Height );Wait( 2 );dt << Select All Matching Cells();

```

#### Select All Rows

**Syntax:** obj &lt;&lt; Select All Rows

**Beschreibung:** Wählt alle Zeilen in der Datentabelle aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select All Rows;

```

#### Select Dominant

**Syntax:** obj &lt;&lt; Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**Beschreibung:** Wählt alle Zeilen basierend auf dem oberen (1) oder unteren (0) Wert der Pareto-Grenze aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :height );dt << Select Dominant( {:height, :weight}, {0, 0} );

```

#### Select Duplicate Rows

**Syntax:** obj &lt;&lt; Select Duplicate Rows( &lt;match(column1, column2, ...)&gt; )

**Beschreibung:** Wählt doppelte Zeilen und Übereinstimmungen in den ausgewählten Spalten aus. Wenn keine Spalten für den Vergleich vorgegeben werden, werden die Zeilen mit allen Spalten der Tabelle verglichen. Gibt die Anzahl doppelter Zeilen zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select duplicate rows( Match( :age, :height ) );

```

#### Select Excluded

**Syntax:** obj &lt;&lt; Select Excluded

**Beschreibung:** Wählt alle ausgeschlossenen Zeilen in der Datentabelle aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 15] );dt << Exclude( 1 );dt << Clear Select;Wait( 2 );dt << Select Excluded;

```

#### Select Hidden

**Syntax:** obj &lt;&lt; Select Hidden

**Beschreibung:** Wählt alle ausgeblendeten Zeilen in der Datentabelle aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 15] );dt << Hide( 1 );dt << Clear Select;Wait( 2 );dt << Select Hidden;

```

#### Select Labeled

**Syntax:** obj &lt;&lt; Select Labeled

**Beschreibung:** Wählt alle beschrifteten Zeilen in der Datentabelle aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 15] );dt << Label( 1 );dt << Clear Select;Wait( 2 );dt << Select Labeled;

```

#### Select Matching Cells

**Syntax:** obj &lt;&lt; Select Matching Cells

**Beschreibung:** Wählt alle Zeilen aus, in denen die Werte in der ausgewählten Spalte einem der Werte der in dieser Spalte ausgewählten Zeilen entsprechen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [1, 2, 3, 4] );dt << Go To( :Height );Wait( 2 );dt << Select Matching Cells();

```

#### Select Randomly

**Syntax:** obj &lt;&lt; Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**Beschreibung:** Wählt einen angegebenen Anteil von Zeilen zufällig aus.

**Probability**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Randomly( 0.3 );

```

**Stichprobenanteil**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Randomly( Sampling Rate( 0.3 ) );

```

**Stichprobengröße**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Randomly( Sample Size( 12 ) );

```

#### Select Rows

**Syntax:** obj &lt;&lt; Select Rows( [row1, row2, ...] )

**Beschreibung:** Wählt die angegebenen Zeilen aus.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10] );

```

#### Select Where

**Syntax:** obj &lt;&lt; Select Where( condition, &lt; current selection("extend" | "restrict" | "clear")&gt; )

**Beschreibung:** Die Optionen erweitern die Auswahl oder schränken sie ein, führen die Auswahl aus oder zeigen nur das Dialogfeld an.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age < 14 );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age == 14 );Wait( 0 );dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### Elementmeldungen

#### Get Data Filter

**Syntax:** expr = obj &lt;&lt; Get Data Filter

**Beschreibung:** Gibt die Filterdefinition der Filteransicht zurück

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Data Filter );

```

#### Get Data Table

**Syntax:** data table = obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt die Tabelle zurück, zu der die Filteransicht gehört

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Data Table );

```

#### Get Name

**Syntax:** string = obj &lt;&lt; Get Name

**Beschreibung:** Den Namen der Filteransicht abrufen

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Name );

```

#### Get Show Hidden Rows

**Syntax:** 0|1 = obj &lt;&lt; Get Show Hidden Rows

**Beschreibung:** Gibt die Einstellung „Ausgeblendete Zeilen anzeigen“ für diese Filteransicht zurück

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Show Hidden Rows( 1 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Show Hidden Rows );

```

#### Get Type

**Syntax:** obj &lt;&lt; Get Type

**Beschreibung:** Den Typ der Filteransicht abrufen; einer von: „Ungefiltert“, „Gefiltert“ oder “TemporärGefiltert“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Locked

**Syntax:** 0|1 = obj &lt;&lt; Is Locked

**Beschreibung:** Gibt die Sperreinstellung für diese Filteransicht zurück

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Lock( 1 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Is Locked );

```

#### Is Temporary

**Syntax:** 0|1 = obj &lt;&lt; Is Temporary

**Beschreibung:** Gibt 1 zurück, wenn die gefilterte Ansicht eine temporäre Filteransicht ist

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Unfiltered

**Syntax:** 0|1 = obj &lt;&lt; Is Unfiltered

**Beschreibung:** Gibt 1 zurück, wenn die gefilterte Ansicht gleich der ungefilterten Filteransicht ist

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Lock

**Syntax:** obj &lt;&lt; Lock( 0|1 )

**Beschreibung:** Verhindert die Bearbeitung dieser Filteransicht.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv << Lock( 1 );Show( fv << Is Locked );

```

#### Set Data Filter

**Syntax:** obj &lt;&lt; Set Data Filter( expr )

**Beschreibung:** Ändert die Filterdefinition der Filteransicht. Die Filterdefinition der ungefilterten Ansicht kann nicht geändert werden.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View( "Dream", Active( 0 ) );fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );Show( fv << Get Data Filter );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View( "Dream", Active( 0 ) );fv << Set Data Filter(	Data Filter(		Inverse( 1 ),		Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )	));Show( fv << Get Data Filter );

```

#### Set Name

**Syntax:** string = obj &lt;&lt; Set Name( name )

**Beschreibung:** Ändert den Namen der Filteransicht. Die Namen der ungefilterten Ansicht und der temporär gefilterten Ansicht können nicht geändert werden.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Set Name( "Dream Penguins" ) );Show( fv << Get Name );

```

#### Show Hidden Rows

**Syntax:** obj &lt;&lt; Show Hidden Rows( 0|1 )

**Beschreibung:** Ändert die Einstellung „Ausgeblendete Zeilen anzeigen“ für diese Filteransicht.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Show Hidden Rows( 1 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv << Show Hidden Rows( 0 );Show( fv << Get Show Hidden Rows );

```

