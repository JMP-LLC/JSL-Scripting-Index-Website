# Tabulate



## Elementmeldungen

### Add

**Syntax:** add(&lt;Column Table | Row Table&gt;(table index), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;))&gt;, &lt;analysis column | grouping column | statistic&gt;(operand name)),

**Beschreibung:** Wird mit Tabelle ändern verwendet, um einer vorhandenen Tabelle Spalten und statistische Kenngrößen hinzuzufügen. Dient auch als Alias für Tabelle hinzufügen.

#### Analysespalte vor benannter hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :weight ) ) ));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Analysis Columns( :weight ) ), Analysis Columns( :height ) ));

```

#### Kenngröße nach benannter hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( After( Statistics( Max ) ), Statistics( Range ) ));

```

#### Kenngröße vor erster hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Add( Before First, Statistics( N ) ) );

```

#### Kenngröße vor Index hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Statistics( 2 ) ), Statistics( Median ) ));

```

### Add Table

**Syntax:** Add Table( &lt;Column Table( )&gt;, &lt;Row Table( )&gt; )

**Beschreibung:** Fügt dem Fenster eine Tabelle hinzu, wenn noch keine Tabelle vorhanden ist, oder hängt eine Tabelle an das vorhandene Tabellenobjekt an.

#### Zu bestehenden hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

#### Zu leer hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add Table( Row Table( Grouping Columns( :age ) ) );

```

### Aggregate Statistics

**Syntax:** Aggregate Statistics( column )

**Beschreibung:** Fügt der aktuellen Tabelle eine separate Spalte für jede Stufe der angegebenen Spalte zusammen mit einer Summationsspalte hinzu. In einem Skript muss sich die Meldung für aggregierte Kenngrößen innerhalb einer Meldung für eine Spaltentabelle oder für eine Zeilentabelle befinden.

#### Beim Hinzufügen zu bestehender einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ) ));obj << Modify Table(	Row Table( 1 ),	Grouping Columns( :Region ),	Aggregate Statistics( :Region ));

```

#### Beim Hinzufügen zu neuer einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ), Aggregate Statistics( :Region ) )	));

```

### Change Item Label

**Syntax:** obj &lt;&lt; Change Item Label( Statistics( stat name, new string ) )

**Beschreibung:** Ändert die Beschriftung eines Texteingabefelds in der Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Delete

**Syntax:** delete( &lt;analysis columns | grouping columns | statistics&gt;(operand name, operand name, ...))

**Beschreibung:** Wird mit Tabelle ändern verwendet, um aus einer vorhandenen Tabelle Spalten und statistische Kenngrößen zu entfernen.

#### Benannte Analysespalte löschen

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

#### Kenngröße an Index löschen

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Statistics( 1 ) ) );

```

### Display Column Width

**Syntax:** obj &lt;&lt; Display Column Width( Data Column( &lt;Column Table(n)&gt;, path ), &lt;width&gt; ); obj &lt;&lt; Display Column Width( Row Label( &lt;Row Table(n)&gt;, path ), &lt;width&gt; )

**Beschreibung:** Legt die Anzeigebreite einer Spalte in einer Berichtstabelle in „Tabelle erstellen“ fest oder gibt sie zurück. Path ist eine Folge von Spaltenüberschriften in Anführungszeichen, die den Pfad der Spalte abbilden. Width ist die Breite einer Spalte in Pixel. Verwenden Sie Data Column, um im Hauptteil der Tabelle Spalten zu definieren, oder verwenden Sie Row Label für Spalten im Zeilenbeschriftungsbereich. Wenn der Bericht mehrere Tabellen umfasst, geben Sie mit Column Table(n) oder Row Table(n) an, für welche Tabelle path gilt. Wenn width nicht angegeben ist, gibt diese Option die aktuelle Breite der angegebenen Spalte zurück.

#### Breite für Zeilenbeschriftung festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

#### Datenspalten auf gleiche Breite anpassen

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, Std Dev ) ),		Row Table( Grouping Columns( :Region ) )	));stats = {"Min", "Max", "Mean", "Std Dev"};ns = N Items( stats );a = {};For( i = 1, i <= ns, i++,	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) ));amax = Max( a );For( i = 1, i <= ns, i++,	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax ));

```

#### Spaltenbreite abrufen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width(	Column( Column Table( 1 ), "sex", "Female", "Marital status", "Single", "age", "Sum" ));

```

### Full Path Column Name

**Syntax:** obj &lt;&lt; Full Path Column Name( true | false )

**Beschreibung:** Wenn festgelegt, enthält der Spaltenname der Ausgabetabelle den Spaltennamen der Gruppe

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Full Path Column Name( 1 );obj << Make Into Data Table;

```

### Ignore duplicate responses

**Syntax:** obj &lt;&lt; Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP Version hinzugefügt:** 19

#### In neuen festlegen

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 );

```

### Ignore duplicates in multiple response columns

**Syntax:** obj &lt;&lt; Ignore duplicates in multiple response columns( state=0|1 )

**Beschreibung:** Ignoriert doppelte Antworten in Spalten mit Mehrfachantworten. Jede wiederholte Antwort wird als einzelnes Vorkommen behandelt.

**JMP Version hinzugefügt:** 19

#### In neuen festlegen

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicates In Multiple Response Columns( 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicates In Multiple Response Columns( 1 );

```

### Include missing for grouping columns

**Syntax:** obj &lt;&lt; Include missing for grouping columns( state=0|1 )

**Beschreibung:** Fügt eine Spalte mit der Anzahl der fehlenden Werte für alle Gruppierungsspalten in der aktuellen Tabelle hinzu.

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Include Missing For Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));obj << Include Missing For Grouping Columns( 1 );

```

### Make Into Data Table

**Syntax:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt;, &lt;Output Table( table name)&gt;, &lt;Full Path Column Name(bool)&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle aus der mit „Tabelle erstellen“ erstellten Tabelle.

#### Datentabelle erzeugen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make Into Data Table;

```

#### Spaltennamen mit vollständigem Pfad verwenden

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Full Path Column Name( 1 ) );

```

#### Unsichtbare Datentabelle erzeugen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Invisible( 1 ) );

```

### Max scroll locked columns

**Syntax:** obj &lt;&lt; Max scroll locked columns( number=3 )

**Beschreibung:** Legt die maximale Anzahl der Spalten fest, die mit einer Bildlaufsperre versehen werden sollen. Es werden entweder alle oder keine der Spalten mit Zeilenüberschriften gesperrt. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### Grenze erlaubter Überschriftenzahl

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 2 );obj << Make Into Data Table;

```

#### Grenze Überschriftenzahl unterschritten

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 1 );obj << Make Into Data Table;

```

### Missing sum is zero

**Syntax:** obj &lt;&lt; Missing sum is zero( state=0|1 )

**Beschreibung:** Gibt an, ob fehlende Werte in der statistischen Kenngröße der Summe als 0 oder als fehlend angezeigt werden sollen.

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Missing Sum Is Zero( 1 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));obj << Missing Sum Is Zero( 1 );

```

### Modify Table

**Syntax:** obj &lt;&lt; Modify Table( &lt;Column Table | Row Table&gt;(table index), ... )

**Beschreibung:** Ändert eine vorhandene Tabelle.

#### Analysespalte löschen

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

#### Vollständige Tabelle erstellen und bearbeiten

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add table( Row Table( Grouping Columns( :age ) ) );obj << Add Table( Column Table( Analysis Columns( :height ) ) );obj << Add Table( Column Table( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Statistics( Min, Max ) );obj << Modify Table( Column Table( 2 ), Grouping Columns( :sex ) );obj << Modify Table( Column Table( 2 ), Analysis Columns( :weight ) );Wait( 1 );obj << Modify Table( Column Table( 2 ), Delete( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Delete( Statistics( Sum ) ) );

```

### Modify Table Option

**Syntax:** obj &lt;&lt; Modify Table Option

**Beschreibung:** Wird mit Tabelle ändern verwendet, um in einer vorhandenen Tabelle Tabellenoptionen zu ändern.

#### Gestapelte Gruppenbeschriftung in bestehender ändern

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )	));obj << Modify Table(	Row Table( 1 ),	Modify Table Option( Change Stacked Group Label ),	"new label");

```

#### Gruppierungsspalte in bestehende stapeln

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ) )	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

### Move

**Syntax:** move(&lt;Column Table | Row Table&gt;(table index), &lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)&gt;)

**Beschreibung:** Wird mit Tabelle ändern verwendet, um in einer vorhandenen Tabelle Spalten und statistische Kenngrößen zu verschieben.

**JMP Version hinzugefügt:** 19

#### Gruppierungsspalte von Spalte in Zeilentabelle verschieben

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Row Table( 1 ),	Move( Column Table( 1 ), Grouping Column( :Type ) ),	Before First);

```

#### Kenngröße nach benannte verschieben

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Move( Column Table( 1 ), Statistics( Mean ) ),	After( Statistics( Max ) ));

```

### Order By Count

**Syntax:** obj &lt;&lt; Order By Count( Grouping Columns( column ), true | false )

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order By Count( Grouping Columns( :age ), 1 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));obj << Order By Count( Grouping Columns( :age ), 1 );

```

### Order by count of grouping columns

**Syntax:** obj &lt;&lt; Order by count of grouping columns( state=0|1 )

**Beschreibung:** Sortiert die Stufen der Gruppierungsspalten nach Häufigkeit in der Tabelle.

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order by Count of Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));obj << Order by Count of Grouping Columns( 1 );

```

### Pack

**Syntax:** obj &lt;&lt; Pack( &lt;Analysis columns | Statistics&gt;(operand name, ...), &lt;Template&gt; )

**Beschreibung:** Mehrere statistische Kenngrößen in eine Spalte in der Tabelle packen. Die Option Template gibt die Formatierung der Elemente an.

#### Analysespalten in bestehende packen

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table(	Column Table( 1 ),	Pack(		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),		Template( "^FIRST  (^OTHERS)", "/" )	));

```

#### Analysespalten in neue mit Vorlage packen

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### Analysespalten in neue packen

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ) )		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

### Plot Scale

**Syntax:** obj &lt;&lt; Plot Scale( min, max )

**Beschreibung:** Legt die Skala im Balkendiagramm fest.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**Syntax:** obj &lt;&lt; Remove Column Label( Grouping Columns( column ) )

**Beschreibung:** Entfernt die angegebene Spaltenbeschriftung in der Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));Wait( 2 );obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**Syntax:** obj &lt;&lt; Restore Column Label( Grouping Columns( column ) )

**Beschreibung:** Stellt die zuvor entfernte angegebene Spaltenbeschriftung in der Tabelle wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));obj << Remove Column Label( Grouping Columns( :Region ) );Wait( 2 );obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**Syntax:** Retype( &lt;Analysis Columns | Grouping Columns&gt;( operand name, ... ), &lt;Analysis Column | Gropuing Column&gt; )

**Beschreibung:** Wird mit Tabelle ändern verwendet, um in einer vorhandenen Tabelle zwischen Analysespalten und Gruppierungsspalten zu konvertieren.

**JMP Version hinzugefügt:** 19

#### Analysespalte in Gruppierungsspalte ändern

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Analysis Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Analysis Column( :age ) ), Grouping Column );

```

#### Gruppierungsspalte in Analysespalte ändern

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Grouping Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

### Save grouping as tags in data table export

**Syntax:** obj &lt;&lt; Save grouping as tags in data table export( state=0|1 )

**Beschreibung:** Legt fest, ob die Gruppierungsstufen als Spalten-Tags in die Datentabelle eingeschlossen werden sollen. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### Tags nicht speichern

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 0 );obj << Make Into Data Table;

```

#### Tags speichern

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 1 );obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**Syntax:** obj &lt;&lt; Scroll lock row headers in data table export( state=0|1 )

**Beschreibung:** Legt fest, ob die Spalten mit Zeilenüberschriften mit einer Bildlaufsperre versehen werden sollen. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### Zeilenüberschriften mit Bildlaufsperre versehen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Make Into Data Table;

```

#### Zeilenüberschriften nicht mit Bildlaufsperre versehen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 0 );obj << Make Into Data Table;

```

### Set Format

**Syntax:** Set Format( statistic( Column( format ) )

**Beschreibung:** Legt das Format zum Anzeigen der Analysespalten fest.

#### Einzelne Kenngröße und Analysespalte formatieren

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### In bestehenden formatieren

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Set Format( Mean( :OZONE( 6, 4 ) ) );

```

#### Kenngröße ohne Analysespalte formatieren

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Row %( Format( 9, 1, "Percent" ) ) ),	Add Table( Column Table( Grouping Columns( :age ), Statistics( Row % ) ) ));

```

#### Mehrere Kenngrößen und Analysespalten formatieren

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Tabulate(	Show Control Panel( 0 ),	Set Format(		Mean(			:height( 10, 1 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 10, "Best" )			)		),		"% of Total"n(			:height( 12, 2 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 12, 2 )			)		)	),	Add Table(		Column Table(			Analysis Columns(				:height,				Transform Column( "Log[height]", Formula( Log( :height ) ) )			),			Statistics( Mean, "% of Total"n )		),		Row Table( Grouping Columns( :sex ) )	));

```

### Show Chart

**Syntax:** obj &lt;&lt; Show Chart( state=0|1 )

**Beschreibung:** Zeigt ein Balkendiagramm, das aus der mit „Tabelle erstellen“ erstellten Tabelle erzeugt wurde, an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );

```

### Show Control Panel

**Syntax:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Beschreibung:** Zeigt das Bedienfeld für die mit „Tabelle erstellen“ erstellten Tabelle an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Control Panel( 1 );

```

### Show Shading

**Syntax:** obj &lt;&lt; Show Shading( state=0|1 )

**Beschreibung:** Zeigt abwechselnd schattierte und nicht-schattierte Zeilen in der mit „Tabelle erstellen“ erstellten Tabelle an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Shading( 1 );

```

### Show Table

**Syntax:** obj &lt;&lt; Show Table( state=0|1 )

**Beschreibung:** Zeigt die mit „Tabelle erstellen“ erstellten Tabelle an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Table( 1 );

```

### Show Test Build Panel

**Syntax:** obj &lt;&lt; Show Test Build Panel( state=0|1 )

**Beschreibung:** Zeigt das Bedienfeld für die Stichprobenziehung eines Probeaufbaus der Tabelle an oder blendet es aus.

#### Für bestehende anzeigen

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Show Test Build Panel( 1 );

```

#### Für neue anzeigen

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Show Test Build Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

### Show Tooltip

**Syntax:** obj &lt;&lt; Show Tooltip( state=0|1 )

**Beschreibung:** Zeigt die Tooltipps an oder blendet sie aus, wenn die Maus auf einem Ablagebereich oder Menü der Ausgabe von „Tabelle erstellen“ positioniert wird.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**Syntax:** Stack Grouping Columns(0 | 1)

**Beschreibung:** Gruppierungsspalten in eine einzelne Spalte stapeln und mit Einzügen die Schachtelungsstruktur deutlich machen.

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size )		)	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( 1 ) ) );

```

### Statistics

**Syntax:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**Beschreibung:** Fügt statistische Kenngrößen zu einer Spalte oder einer Zeile in der Tabelle hinzu. In einem Skript befindet sich die Meldung Kenngrößen() neben der Meldung der identifizierenden Analysespalten(Spalte) und beide sind innerhalb eines Befehls Zeilentabelle() oder Spaltentabelle() verschachtelt.

#### Zu bestehenden hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Statistics( Min ) );

```

#### Zu neuen hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));

```

### Test Build

**Syntax:** obj &lt;&lt; Test Build( Sample Size( number ) )

**Beschreibung:** Zeigt die Tabelle mit Hilfe einer Probestichprobe der Daten in der Größe number an.

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Test Build( Sample Size( 100 ) ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );

```

### Test Data View

**Syntax:** obj &lt;&lt; Test Data View

**Beschreibung:** Zeigt die Datentabelle, die als Stichprobe für den Aufbau der Testtabelle verwendet wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );obj << Test Data View;

```

### Undo

**Syntax:** obj &lt;&lt; Undo

**Beschreibung:** Entfernt den Effekt des letzten durchgeführten Vorgangs auf die aktuelle Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );Wait( 2 );obj << Undo;

```

### Uniform plot scale

**Syntax:** obj &lt;&lt; Uniform plot scale( state=0|1 )

**Beschreibung:** Legt fest, dass die Skalen aller Unterkategorien im Balkendiagramm gleich sind. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Uniform Plot Scale( 1 );

```

### Unpack

**Syntax:** obj &lt;&lt; Unpack( &lt;Analysis columns | Statistics&gt;(operand name, ...) )

**Beschreibung:** Entpackt einen gepackten Spaltensatz.

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = Tabulate(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### Analysis Columns

**Syntax:** Analysis Columns( Column(s) )

**Beschreibung:** Fügt der aktuellen Tabelle Analysespalten hinzu. Kann mit dem Befehl zum Hinzufügen von Tabellen oder mit dem Befehl zum Ändern von Tabellen verwendet werden.

#### Zu bestehenden hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Analysis Columns( :CO ) );

```

#### Zu neuen hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :type ));

```

### Columns by Categories

**Syntax:** Columns by Categories( column1, column2, ...) )

**Beschreibung:** Fügt der Tabelle eine Kreuztabelle der Spaltennamen und der Kategorien hinzu, die für Spalten mit ähnlichen Werten erfasst werden. In einem Skript muss sich die Meldung für Spalten nach Kategorien innerhalb einer Meldung für eine Spaltentabelle oder für eine Zeilentabelle befinden.

#### Zu bestehenden hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ));obj << Modify Table( Row Table( 1 ), Columns by Categories( :Money ) );

```

#### Zu neuen hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

### Freq

**Syntax:** Freq( Column )

**Beschreibung:** Geben Sie die Häufigkeitenspalte an, die in der Berechnung der statistischen Kenngrößen verwendet werden soll

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));Wait( 1 );obj << Freq( :Count );

```

### Grouping Columns

**Syntax:** Grouping Columns( Column(s) )

**Beschreibung:** Fügt der aktuellen Tabelle Gruppierungsspalten hinzu. Kann mit dem Befehl zum Hinzufügen von Tabellen oder mit dem Befehl zum Ändern von Tabellen verwendet werden.

#### Add nested to new

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### Geschachtelte zu bestehenden hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Column Table( 1 ), Grouping Column( :age ) );

```

#### Zu bestehenden hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Row Table( 1 ), Grouping Column( :age ) );

```

#### Zu neuen hinzufügen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Grouping Columns( :sex ) ) ));

```

### ID

**Syntax:** ID( Column )

**Beschreibung:** Gibt die Identifikatorspalte an, die zum Zählen eindeutiger Vorkommen verwendet wird.

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));Wait( 1 );obj << ID( :Division );

```

### Page Column

**Syntax:** Page Column( Column )

**Beschreibung:** Geben Sie die Nach-Spalte an, die beim Einrichten von Berichtsseiten verwendet werden soll

#### Seitenspalte bei Mehrfachantworten

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### Seitenspalte in neuer verwenden

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### Seitenspalte und Stufe in neuer auswählen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex( "F" ) ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### Seitenspalte und Stufe in vorhandener auswählen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));Wait( 1 );obj << Page Column( :sex( "F" ) );

```

### Weight

**Syntax:** Weight( Column )

**Beschreibung:** Geben Sie die Gewichtungsspalte an, die in der Berechnung der statistischen Kenngrößen verwendet werden soll

#### In neuen festlegen

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### In vorhandene einstellen

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));Wait( 1 );obj << Weight( :Weight );

```

## Zugehörige Konstruktoren

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

