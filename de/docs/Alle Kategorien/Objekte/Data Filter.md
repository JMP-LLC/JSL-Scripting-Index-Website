# Data Filter



## Elementmeldungen

### Add Favorites

**Syntax:** obj << Add Favorites( name or string )

**Beschreibung:** Die aktuelle Filterauswahl mit dem vorgegebenen Namen zuweisen und in der Liste der Favoriten speichern

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites( "FemaleAverageHt" );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter( columns( :age, :sex, :height, :weight ), Where( :sex == "F" ) ),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites();
Show( fav1 );

```

### Add Filter

**Syntax:** obj << Add Filter( columns( column, ... ), <Where( clause )> )

**Beschreibung:** Eine oder mehrere Filterspalten in einer neuen ODER-Gruppe hinzufügen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);

```

### Animation

**Syntax:** obj << Animation( <Animate Column( column )>, <Animate Rate( number )>, <Forward|Backward|Bounce> )

**Beschreibung:** Durchläuft die sortierten Werte der angegebenen Spalte und wählt Zeilen aus und ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region );
obj << Animation( Animate Column( :Region ), Bounce );
//Now press the play button.

```

### Apply Favorites

**Syntax:** obj << Apply Favorites( name or string )

**Beschreibung:** Die wie in den benannten Favoriten gespeicherte Filterauswahl auf den Datenfilter anwenden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
a = "FemaleAverageHt";
b = "Female";
df << add favorites( a );
df << Match( Where( :sex == "F" ) );
df << add favorites( b );
Wait( 1 );
df << apply favorites( "FemaleAverageHt" );

```

### Auto clear

**Syntax:** obj << Auto clear( state=0|1 )

**Beschreibung:** Hebt die Auswahl aller aktuell ausgewählten Zeilen vor einer neuen Auswahl zum Filtern auf.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
obj << Auto Clear( 1 );
obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
Wait( 1 );
obj << (filter column( :sex ) << Where( :sex == "M" ));

```

### Clear

**Syntax:** obj << Clear

**Beschreibung:** Hebt die Auswahl der aktuell ausgewählten Zeilen auf.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
Wait( 1 );
obj << Clear;

```

### Clear Selection

**Syntax:** obj << Clear Selection

**Beschreibung:** Auswahl für diesen Spaltenfilter löschen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Clear Selection);

```

### Close

**Syntax:** obj << Close

**Beschreibung:** Schließt den Datenfilter.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Close;

```

### Conditional

**Syntax:** obj << Conditional( state=0|1 )

**Beschreibung:** Die Option gibt an, ob die kategorialen Spaltenfilter bedingt geordnet sind. Durch Auswahl einer Kategorie werden die Kategorien des nächsten Spaltenfilters auf diejenigen begrenzt, die in der ausgewählten Kategorie enthalten sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :State ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"South"} ));
Wait( 1 );
obj << conditional( 1 );

```

### Copy Local Data Filter

**Syntax:** obj << Copy Local Data Filter

**Beschreibung:** Skript für den lokalen Datenfilter in die Zwischenablage kopieren.

**JMP Version hinzugefügt:** 16

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

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieses Filterfensters und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Copy Script;

```

### Count Excluded Rows

**Syntax:** obj << Count Excluded Rows( state=0|1 )

**Beschreibung:** Wenn die Option gelöscht wird, schließen die Spaltenwerte und Zählwerte im Datenfilter keine Zeilen mit ausgeschlossenen Zeileneigenschaften in der Datentabelle ein.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Local Data Filter(
		Count Excluded Rows( 0 ),
		Add Filter( columns( :age ), Where( :age == 12 ) )
	)
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
New Window( "Hierarchical Data Filter",
	V List Box(
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 1 = dt << Data Filter(
					Local,
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		),
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 2 = dt << Data Filter(
					Local,
					Count Excluded Rows( 0 ),
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		)
	)
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt die Datentabelle für dieses Filterdialogfeld.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Data Table Window;

```

### Delete

**Syntax:** obj << Delete( {column(s)} )

**Beschreibung:** Löscht die angegebenen Spalten mit vorhandenen Filtern im Datenfilter.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << Delete( {:State} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << (Filter Column( :State ) << delete);

```

### Delete All

**Syntax:** obj << Delete All

**Beschreibung:** Löscht alle vorhandenen Filter im Datenfilter.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 2 );
obj << Delete All;

```

### Display

**Syntax:** obj << Display( column, <Invisible(0 | 1)>, <options> )

**Beschreibung:** Ändert die Weise, wie die Spaltenstufen im Filter angezeigt werden. Kategoriale Spalten unterstützen die Anzeigetypoptionen „Blockanzeige“, „Listenanzeige“, „Einzelkategorieanzeige“, „Kontrollkästchenanzeige“ oder „Optionsfeldanzeige“. Die Option NItems(n) legt die Anzahl sichtbarer Elemente in einer Ansicht mit Bildlauf fest. Stetige Spalten unterstützen die Optionen NBins(n) und Height(h).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Display( :Region, N Items( 4 ) );

```

### Extend Where

**Syntax:** obj << Extend Where

**Beschreibung:** Auswahl anhand des angegebenen Kriteriums für diesen Spaltenfilter erweitern.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt die zum Filter zugehörige Datentabelle zurück.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Data Table();

```

### Get Filter Column

**Syntax:** obj << Get Filter Column( column, <index> )

**Beschreibung:** Gibt das Filterspaltenobjekt für die benannte Spalte zurück. Wenn die gleiche Spalte mehrere Male verwendet wird, gibt das Argument index das angegebene Vorkommen zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Filter Column( :Region );
regionfilter << Invert Selection;

```

### Get Filtered Rows

**Syntax:** obj << Get Filtered Rows

**Beschreibung:** Gibt eine Matrix von Zeilennummern zurück, die den aktuellen Filterbedingungen entsprechen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Get Filtered Rows;

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Datenfilterskript als Text abrufen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt = obj << Get Script;
Show( txt );

```

### Get where clause

**Syntax:** obj << Get where clause

**Beschreibung:** Beschreibenden Text für die Filterauswahl abrufen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;

```

### Grouped by AND

**Syntax:** obj << Grouped by AND( state=0|1 )

**Beschreibung:** Gruppen von Filterelementen werden durch UND verbunden

### Inverse

**Syntax:** obj << Inverse( state=0|1 )

**Beschreibung:** Invertiert den aktuellen Auswahlzustand der Zeilen in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Inverse( 1 );

```

### Invert Selection

**Syntax:** obj << Invert Selection

**Beschreibung:** Auswahl für diesen Spaltenfilter invertieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << invert selection);

```

### Make Filter Change Handler

**Syntax:** rs = df << Make Filter Change Handler(function(a) );

**Beschreibung:** Erstellt einen Datenfilter-Handler für die Verarbeitung der Benachrichtigung, dass der Filter geändert wurde. Die Anzahl der gefilterten Zeilen wird im Argument der Funktion zurückgegeben.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Automatic Recalc( 1 ), Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ) ) );
f = Function( {a}, Print( a ) );
rs = filter << Make Filter Change Handler( f );

```

### Match

**Syntax:** obj << Match( Filter Columns(:a, :b, :c, ...), where( conditions ) )

**Beschreibung:** Legt die Filterbedingungen für jede Gruppe fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :BP 8W, :BP 6M ) ),
	Add Filter( columns( :BP 12M ) )
);
Wait( 1 );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );

```

### Mode

**Syntax:** obj << Mode( Select|Show|Include (state = 0|1) )

**Beschreibung:** Legt die Aktion oder den Modus beim Auswählen von Zeilen über den Datenfilter fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );

```

### On Clear

**Syntax:** obj << On Clear

**Beschreibung:** Legt ein Skript oder eine Funktion für die Ausführung nach dem Löschen des Filters fest.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
df = obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
obj << OnClear( Function( {}, df << Mode( Include( 0 ), Select( 1 ), Show( 0 ) ) ) );
Wait( 1 );
df << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );

```

### Remove Favorites

**Syntax:** obj << Remove Favorites( name or string )

**Beschreibung:** Benannte Favoriten aus der Liste der Favoriten entfernen

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites( "FemaleAverageHt" );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites();

```

### Report

**Syntax:** obj << Report

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script to Data Table

**Syntax:** obj << Save Script to Data Table

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieses Filterfensters und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieses Filterfensters und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieses Filterfensters und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Script Window;

```

### Save Where Clause to Clipboard

**Syntax:** obj << Save Where Clause to Clipboard

**Beschreibung:** Erstellt die WHERE-Bedingung aus den Filterkriterien und legt sie in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Clipboard;

```

### Save Where Clause to Data Table

**Syntax:** obj << Save Where Clause to Data Table

**Beschreibung:** Erstellt eine WHERE-Bedingung aus den Filterkriterien und speichert sie als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Data Table;

```

### Save Where Clause to Formula Column

**Syntax:** obj << Save Where Clause to Formula Column

**Beschreibung:** Erstellt eine Indikatorspalte, die ein Formeläquivalent für die Filterkriterien enthält. Zeilen, die den Filterkriterien entsprechen, haben den Wert 1, alle anderen Zeilen haben den Wert 0.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Formula Column;

```

### Save Where Clause to Journal

**Syntax:** obj << Save Where Clause to Journal

**Beschreibung:** Erstellt die WHERE-Bedingung aus den Filterkriterien und hängt sie an das Journal an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Journal;

```

### Save Where Clause to Row State Column

**Syntax:** obj << Save Where Clause to Row State Column

**Beschreibung:** Erstellt eine Spalte mit Zeileneigenschaften mit einer Formel, die den Filterkriterien entspricht.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Row State Column;

```

### Save Where Clause to Script Window

**Syntax:** obj << Save Where Clause to Script Window

**Beschreibung:** Erstellt eine WHERE-Bedingung aus den Filterkriterien und hängt sie an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Script Window;

```

### Save and restore current row states

**Syntax:** obj << Save and restore current row states( state=0|1 )

**Beschreibung:** Speichert die aktuellen Zeilenzustände für die Datentabelle und stellt diese Zustände dann beim Schließen des Datenfilters wieder her.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Save and Restore Current Row States( 1 ),
	Add Filter( Columns( :Region ), Where( :Region == "N" ) )
);
Wait( 1 );
obj << Close;

```

### Select Missing

**Syntax:** obj << Select Missing( state=0|1 )

**Beschreibung:** Fehlende Zeilen der Auswahl für diesen stetigen Spaltenfilter hinzufügen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :CO ), Where( :CO >= 9 & :CO < 15 ) ) );
Wait( 1 );
obj << (Filter Column( :CO ) << Select Missing);

```

### Set Include

**Syntax:** obj << Set Include( state=0|1 )

**Beschreibung:** Übernahmemodus aktivieren oder deaktivieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Include( 1 );
Wait( 1 );
obj << set Include( 0 );

```

### Set Select

**Syntax:** obj << Set Select( state=0|1 )

**Beschreibung:** Auswahlmodus aktivieren oder deaktivieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set select( 1 );
Wait( 1 );
obj << set select( 0 );

```

### Set Show

**Syntax:** obj << Set Show( state=0|1 )

**Beschreibung:** Anzeigemodus aktivieren oder deaktivieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Show( 1 );
Wait( 1 );
obj << set Show( 0 );

```

### Show Controls

**Syntax:** obj << Show Controls( state=0|1 )

**Beschreibung:** Bedienelemente zum Ändern der Datenfilteroptionen anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Controls( 0 );

```

### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**JMP Version hinzugefügt:** 16

### Show Histograms and Bars

**Syntax:** obj << Show Histograms and Bars( state=0|1 )

**Beschreibung:** Show Histograms and Bars for filter columns where available

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) )
);
Wait( 1 );
obj << Show Histograms and Bars( 0 );

```

### Show Modes

**Syntax:** obj << Show Modes( state=0|1 )

**Beschreibung:** Bedienelemente zum Ändern des Modus des Datenfilters anzeigen oder ausblenden, der das Verhalten Auswählen/Anzeigen/Einschließen des Datenfilters steuert.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Modes( 0 );

```

### Show Subset

**Syntax:** obj << Show Subset

**Beschreibung:** Gefilterte Daten in einem getrennten Datentabellenfenster anzeigen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
obj << Show Subset;

```

### Stretch Width

**Syntax:** obj << Stretch Width( "Manual" | "Window" )

**Beschreibung:** Legt das horizontale Streckverhalten des Filters fest. Standardmäßig kann die Breite des Filters manuell geändert werden. Bei der Einstellung „Fenster“ wird die Breite mit der Fenstergröße größer oder kleiner.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H Splitter Box(
			Size( 1200, 500 ),
			V Scroll Box(
				dt << Data Filter(
					Local,
					Stretch Width( "Window" ),
					Add Filter( columns( :sex ), Where( :sex == "F" ) )
				),
				<<Set Stretch( "Off", "Fill" )
			),
			H Splitter Box(
				dt << Bubble Plot(
					X( :weight ),
					Y( :height ),
					Fit To Window( "On" ),
					Sizes( :age ),
					Title Position( 0, 0 )
				),
				dt << Graph Builder(
					Size( 525, 456 ),
					Show Control Panel( 0 ),
					Fit To Window( "On" ),
					Variables( X( :weight ), Y( :age ) ),
					Elements( Box Plot( X, Y, Legend( 4 ) ) ),

				),

			)
		)
	)
);

```

### Title

**Syntax:** obj << Title

### Unstructured Text

**Syntax:** obj << Unstructured Text

**JMP Version hinzugefügt:** 16

### Use Floating Window

**Syntax:** obj << Use Floating Window( state=0|1 )

**Beschreibung:** Schaltet ein bzw. aus, ob dieser Datenfilter in einem verschiebbaren Fenster im Vordergrund der Datentabellen und zugehörigen Fenster angezeigt wird oder in einem Fenster, das wie üblich mit anderen Fenstern angeordnet werden kann.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Use Floating Window;

```

### Where

**Syntax:** obj << Where

**Beschreibung:** Zeilen anhand des angegebenen Kriteriums für diesen Spaltenfilter auswählen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));

```

### columns

**Syntax:** obj << columns( columns )

**Beschreibung:** Filterspalten hinzufügen. Alternativer Befehl zum Hinzufügen von Filterspalten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );

```

## Spalten

### Add Filter Columns

**Syntax:** obj << Add Filter Columns( Add Filter Columns( column ) )

**Beschreibung:** Eine oder mehrere Filterspalten hinzufügen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter Columns( :State );

```

### Filter Column

**Syntax:** obj << Filter Column( column(s) )

**Beschreibung:** Filterspalte hinzufügen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Filter Column( :State );

```

### Filter Columns

**Syntax:** obj << Filter Columns( column(s) )

**Beschreibung:** Eine oder mehrere Filterspalten hinzufügen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Filter Columns( :State, :OZONE );

```

### Filter Group

**Syntax:** obj << Filter Group( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## Zugehörige Konstruktoren

### Data Filter

**Syntax:** Data Filter( <local>, <invisible>, <Add Filter>, <Mode>, <Show Window(0 | 1)>, <no outline box(0 | 1)> )

**Beschreibung:** Erzeugt einen Datenfilter oder zeigt einen Datenfilter an, bei dem Sie interaktiv komplexe Teilmengen von Daten auswählen. Die Option Mode legt fest, welche Zeileneigenschaften durch Auswahl im Filter betroffen sind. Der Befehl Add Filter fügt eine Filtergruppe mit den vorgegebenen Columns und Where-Klauseln hinzu. Wenn mehrere Filtergruppen vorhanden sind, wird das kombinierte Verhalten von der Option Group By AND bestimmt. Wenn das Schlüsselwort Local angegeben wird, kann der Filter in einen Bericht eingebettet werden, um eine oder mehrere Plattformen zu filtern, ohne dass das Auswirkungen auf andere Berichte hat.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## Categorical Filter

### Elementmeldungen

#### Blocks Display

**Syntax:** obj << Blocks Display( state=0|1 )

**Beschreibung:** Jede Stufe als auswählbaren Block anzeigen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Syntax:** obj << Check Box Display( state=0|1 )

**Beschreibung:** Jede Stufe mit einem Kontrollkästchen anzeigen, zusammen mit Häufigkeitswert und Balken.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**Syntax:** obj << Clear Find

**JMP Version hinzugefügt:** 15

#### Clear Selection

**Syntax:** obj << Clear Selection

**Beschreibung:** Löscht jede für die vorgegebene Spalte wirksame Auswahl.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Delete

**Syntax:** obj << Delete

**Beschreibung:** Entfernt die Variable aus dem Bedienfeld „Datenfilter“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntax:** obj << Extend Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen und der aktuellen Auswahl hinzufügen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**Syntax:** obj << Find(Set Text("string"), <options>)

**Beschreibung:** Bietet ein Textfeld, in das Sie eine Suchzeichenkette für die ausgewählte Spalte eingeben können.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**Syntax:** obj << Get Selected Items

**JMP Version hinzugefügt:** 15

#### Get Visible Items

**Syntax:** obj << Get Visible Items

**JMP Version hinzugefügt:** 19

#### Invert Selection

**Syntax:** obj << Invert Selection

**Beschreibung:** Wählt in der vorgegebenen Spalte alle ausgewählten Werte ab und wählt alle Werte aus, die vorher nicht ausgewählt waren.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Syntax:** obj << List Display( state=0|1 )

**Beschreibung:** Jede Stufe in einer Liste anzeigen, zusammen mit Häufigkeitswert und Balken.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Order By Count

**Syntax:** obj << Order By Count( state=0|1 )

**Beschreibung:** Ordnet die Werte in absteigender Sortierreihenfolge nach Häufigkeit.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Syntax:** obj << Radio Box Display( state=0|1 )

**Beschreibung:** Jede Stufe mit einem Optionsfeld anzeigen, zusammen mit Häufigkeitswert und Balken.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Syntax:** obj << Select Filter Item

**Beschreibung:** Vorgegebenes Filterelement auswählen. Der ausgewählte Filter wird als aktuelles Animationsobjekt verwendet.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**Syntax:** obj << Single Category Display( state=0|1 )

**Beschreibung:** Jede Stufe und jeden Häufigkeitswert in einem Kombinationsfeldmenü anzeigen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Where

**Syntax:** obj << Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Continuous Filter

### Elementmeldungen

#### Clear Selection

**Syntax:** obj << Clear Selection

**Beschreibung:** Löscht jede für die vorgegebene Spalte wirksame Auswahl.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Delete

**Syntax:** obj << Delete

**Beschreibung:** Entfernt die Variable aus dem Bedienfeld „Datenfilter“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntax:** obj << Extend Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen und der aktuellen Auswahl hinzufügen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Invert Selection

**Syntax:** obj << Invert Selection

**Beschreibung:** Wählt in der vorgegebenen Spalte alle ausgewählten Werte ab und wählt alle Werte aus, die vorher nicht ausgewählt waren.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Reset Zoom

**Syntax:** obj << Reset Zoom

**Beschreibung:** Min. und Max. der Filteranzeige auf die Standardwerte zurücksetzen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
fc << Zoom to Selection;
Wait( 1 );
fc << Reset Zoom;

```

#### Select Filter Item

**Syntax:** obj << Select Filter Item

**Beschreibung:** Vorgegebenes Filterelement auswählen. Der ausgewählte Filter wird als aktuelles Animationsobjekt verwendet.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Select Missing

**Syntax:** obj << Select Missing

**Beschreibung:** Wählt Zeilen aus, die fehlende Werte enthalten.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Location( {2098, 120} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) )
);
Wait( 1 );
ozoneobj = obj << Get Filter Column( :OZONE );
ozoneobj << Select Missing;

```

#### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Where

**Syntax:** obj << Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

#### Zoom to Selection

**Syntax:** obj << Zoom to Selection

**Beschreibung:** Min. und Max. der Filteranzeige basierend auf dem aktuell ausgewählten Intervall festlegen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
Wait( 1 );
fc << Zoom to Selection;

```

## Multiple Response Filter

### Elementmeldungen

#### Blocks Display

**Syntax:** obj << Blocks Display( state=0|1 )

**Beschreibung:** Jede Stufe als auswählbaren Block anzeigen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Syntax:** obj << Check Box Display( state=0|1 )

**Beschreibung:** Jede Stufe mit einem Kontrollkästchen anzeigen, zusammen mit Häufigkeitswert und Balken.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**Syntax:** obj << Clear Find

**JMP Version hinzugefügt:** 15

#### Clear Selection

**Syntax:** obj << Clear Selection

**Beschreibung:** Löscht jede für die vorgegebene Spalte wirksame Auswahl.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Delete

**Syntax:** obj << Delete

**Beschreibung:** Entfernt die Variable aus dem Bedienfeld „Datenfilter“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntax:** obj << Extend Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen und der aktuellen Auswahl hinzufügen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**Syntax:** obj << Find(Set Text("string"), <options>)

**Beschreibung:** Bietet ein Textfeld, in das Sie eine Suchzeichenkette für die ausgewählte Spalte eingeben können.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**Syntax:** obj << Get Selected Items

**JMP Version hinzugefügt:** 15

#### Get Visible Items

**Syntax:** obj << Get Visible Items

**JMP Version hinzugefügt:** 19

#### Invert Selection

**Syntax:** obj << Invert Selection

**Beschreibung:** Wählt in der vorgegebenen Spalte alle ausgewählten Werte ab und wählt alle Werte aus, die vorher nicht ausgewählt waren.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Syntax:** obj << List Display( state=0|1 )

**Beschreibung:** Jede Stufe in einer Liste anzeigen, zusammen mit Häufigkeitswert und Balken.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**Syntax:** obj << Match All

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit allen ausgewählten Werten übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**Syntax:** obj << Match Any

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit einem der ausgewählten Werte übereinstimmen. Standardmäßig ist diese Option aktiviert.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**Syntax:** dfitem << Match At Least(n);

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit mindestens n der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**Syntax:** dfitem << Match At Most(n);

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit höchstens n der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**Syntax:** dfitem << Match Between(n, m);

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit zwischen n und m der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**Syntax:** obj << Match Exactly

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit genau den ausgewählten Werten übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**Syntax:** obj << Match None

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit keinem der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**Syntax:** obj << Match Only

**Beschreibung:** Wählt Zeilen mit Werten aus, die nur mit dem ausgewählten Wert übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Order By Count

**Syntax:** obj << Order By Count( state=0|1 )

**Beschreibung:** Ordnet die Werte in absteigender Sortierreihenfolge nach Häufigkeit.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Syntax:** obj << Radio Box Display( state=0|1 )

**Beschreibung:** Jede Stufe mit einem Optionsfeld anzeigen, zusammen mit Häufigkeitswert und Balken.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Syntax:** obj << Select Filter Item

**Beschreibung:** Vorgegebenes Filterelement auswählen. Der ausgewählte Filter wird als aktuelles Animationsobjekt verwendet.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**Syntax:** obj << Single Category Display( state=0|1 )

**Beschreibung:** Jede Stufe und jeden Häufigkeitswert in einem Kombinationsfeldmenü anzeigen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Where

**Syntax:** obj << Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Unstructured Text Filter

### Elementmeldungen

#### Add Missing

**Syntax:** obj << Add Missing

**Beschreibung:** Fehlenden Wert als auswählbare Option für unstrukturierten Text hinzufügen.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Add Missing;

```

#### Blocks Display

**Syntax:** obj << Blocks Display( state=0|1 )

**Beschreibung:** Jede Stufe als auswählbaren Block anzeigen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Syntax:** obj << Check Box Display( state=0|1 )

**Beschreibung:** Jede Stufe mit einem Kontrollkästchen anzeigen, zusammen mit Häufigkeitswert und Balken.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Filter Texts List

**Syntax:** obj << Clear Filter Texts List

**Beschreibung:** Die Liste der Filter für ein Filterelement zu unstrukturiertem Text löschen.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Clear Filter Texts List;

```

#### Clear Selection

**Syntax:** obj << Clear Selection

**Beschreibung:** Löscht jede für die vorgegebene Spalte wirksame Auswahl.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Delete

**Syntax:** obj << Delete

**Beschreibung:** Entfernt die Variable aus dem Bedienfeld „Datenfilter“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntax:** obj << Extend Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen und der aktuellen Auswahl hinzufügen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Get Selected Items

**Syntax:** obj << Get Selected Items

**JMP Version hinzugefügt:** 15

#### Get Visible Items

**Syntax:** obj << Get Visible Items

**JMP Version hinzugefügt:** 19

#### Invert Selection

**Syntax:** obj << Invert Selection

**Beschreibung:** Wählt in der vorgegebenen Spalte alle ausgewählten Werte ab und wählt alle Werte aus, die vorher nicht ausgewählt waren.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Syntax:** obj << List Display( state=0|1 )

**Beschreibung:** Jede Stufe in einer Liste anzeigen, zusammen mit Häufigkeitswert und Balken.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**Syntax:** obj << Match All

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit allen ausgewählten Werten übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**Syntax:** obj << Match Any

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit einem der ausgewählten Werte übereinstimmen. Standardmäßig ist diese Option aktiviert.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**Syntax:** dfitem << Match At Least(n);

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit mindestens n der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**Syntax:** dfitem << Match At Most(n);

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit höchstens n der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**Syntax:** dfitem << Match Between(n, m);

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit zwischen n und m der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**Syntax:** obj << Match Exactly

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit genau den ausgewählten Werten übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**Syntax:** obj << Match None

**Beschreibung:** Wählt Zeilen mit Werten aus, die mit keinem der ausgewählten Werte übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**Syntax:** obj << Match Only

**Beschreibung:** Wählt Zeilen mit Werten aus, die nur mit dem ausgewählten Wert übereinstimmen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Order By Count

**Syntax:** obj << Order By Count( state=0|1 )

**Beschreibung:** Ordnet die Werte in absteigender Sortierreihenfolge nach Häufigkeit.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Syntax:** obj << Radio Box Display( state=0|1 )

**Beschreibung:** Jede Stufe mit einem Optionsfeld anzeigen, zusammen mit Häufigkeitswert und Balken.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Syntax:** obj << Select Filter Item

**Beschreibung:** Vorgegebenes Filterelement auswählen. Der ausgewählte Filter wird als aktuelles Animationsobjekt verwendet.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Show Filter Text Edit Box

**Syntax:** obj << Show Filter Text Edit Box( state=0|1 )

**Beschreibung:** Textbearbeitungsfeld zum Definieren von Textfilterbedingungen anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Show Filter Text Edit Box( 0 );

```

#### Single Category Display

**Syntax:** obj << Single Category Display( state=0|1 )

**Beschreibung:** Jede Stufe und jeden Häufigkeitswert in einem Kombinationsfeldmenü anzeigen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Where

**Syntax:** obj << Where

**Beschreibung:** Zeilen mithilfe eines Ausdrucks auswählen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

