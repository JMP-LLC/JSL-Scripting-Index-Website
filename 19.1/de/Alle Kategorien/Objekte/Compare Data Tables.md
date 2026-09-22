# Compare Data Tables



## Elementmeldungen

### Are Data Different

**Syntax:** obj &lt;&lt; Are Data Different

**Beschreibung:** Gibt wahr oder falsch zurück, je nachdem, ob sich die Daten der beiden Tabellen unterscheiden oder nicht.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );how = (obj << Are Data Different);

```

### Auto compare

**Syntax:** Auto Compare(0|1)

**Beschreibung:** Vergleiche durchführen, sobald eine Einstellung geändert wird

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Auto Compare( 1 );

```

### Close

**Syntax:** obj &lt;&lt; Close

**Beschreibung:** Objekt des Datentabellenvergleichs schließen

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << close;

```

### Compare

**Syntax:** Compare()

**Beschreibung:** Vergleiche jetzt durchführen

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Compare();

```

### Compare Column Attributes and Properties

**Syntax:** obj &lt;&lt; Compare Column Attributes and Properties( state=0|1 )

**Beschreibung:** Flag-Variable für den Vergleich von Spaltenattributen und -eigenschaften setzen oder löschen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << compare column attributes and properties( 1 );

```

### Compare Data

**Syntax:** obj &lt;&lt; Compare Data( state=0|1 )

**Beschreibung:** Flag-Variable für den Vergleich von Spaltendaten setzen oder löschen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << compare data( 0 );

```

### Compare Table Properties

**Syntax:** obj &lt;&lt; Compare Table Properties( state=0|1 )

**Beschreibung:** Flag-Variable für den Vergleich von Tabellenvariablen und -skripten setzen oder löschen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << compare table properties;

```

### Compare With

**Syntax:** obj &lt;&lt; Compare With( Data Table( name ) )

**Beschreibung:** Erste Tabelle mit dieser Tabelle vergleichen. Gibt „wahr“ oder „falsch“ zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );obj = dt << Compare Data Tables();dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );same = obj << compare with( dt2 );

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Skript für den Datentabellenvergleich in der Zwischenablage ablegen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Copy Script;

```

### Fuzzy Compare

**Syntax:** obj &lt;&lt; Fuzzy Compare( &lt;(state= 1 | 0)&gt;, &lt;Relative Error (number)&gt; )

**Beschreibung:** Flag-Variable für den Vergleich von Spaltendaten setzen oder löschen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << fuzzy compare( relative error( 0.0001 ) );

```

### Get column attributes differences

**Syntax:** obj &lt;&lt; Get column attributes differences( columns( column) )

**Beschreibung:** Liste der Spaltenattribute, die für die verglichenen Spalten unterschiedlich sind, abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );attribDiff = (obj << Get columns attributes differences( :name ));

```

### Get column properties differences

**Syntax:** obj &lt;&lt; Get column properties differences( columns( column) )

**Beschreibung:** Liste der Spalteneigenschaften, die für die verglichenen Spalten unterschiedlich sind, abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );propDiff = (obj << Get columns properties differences( :name ));

```

### Get columns list

**Syntax:** obj &lt;&lt; Get columns list( ( &lt;differed in data&gt; | &lt;differed in properties&gt; | &lt;mismatched data type&gt; | &lt;differed in attributes&gt;) )

**Beschreibung:** Liste der Spalten mit unterschiedlichen Daten, Spalteneigenschaften, Datentypen oder anderen Spaltenattributen abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );colDiff = (obj << Get columns list( differed in attributes ));Show( colDiff );

```

### Get difference summary matrix

**Syntax:** obj &lt;&lt; Get difference summary matrix

**Beschreibung:** Ruft die Zusammenfassung der Differenzen als Matrix ab. Die Matrixspalten entsprechen den Spalten in der Zusammenfassung der Differenzen. Die erste Spalte, Aktion, wird in der Matrix mit -1 für Löschen, 0 für Ersetzen und 1 für Hinzufügen dargestellt.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );mtx = (obj << Get Difference Summary matrix);

```

### Get table scripts difference list

**Syntax:** obj &lt;&lt; Get table scripts difference list

**Beschreibung:** Liste der Tabellenskripte, die unterschiedlich sind oder fehlen, abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );scriptDiff = (obj << Get table scripts difference list);

```

### Get table variables difference list

**Syntax:** obj &lt;&lt; Get table variables difference list

**Beschreibung:** Liste der Tabellenvariablen, die unterschiedlich sind oder fehlen, abrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );tvdiff = (obj << Get table variables difference list);

```

### Get unmatched columns list

**Syntax:** obj &lt;&lt; Get unmatched columns list

**Beschreibung:** Liste der nicht übereinstimmenden Spalten abrufen, der Spalten, die mit keiner korrespondierenden Spalte verglichen werden können

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );colDiff = (obj << Get unmatched columns list);

```

### Hide column properties with no differences

**Syntax:** Hide column properties with no differences(0|1)

**Beschreibung:** Beim Vergleichen von Spalteneigenschaften gleiche Eigenschaften ausblenden.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide column properties with no differences( 0 );

```

### Hide columns with no differences

**Syntax:** Hide columns with no differences(0|1)

**Beschreibung:** Beim Vergleichen von Tabellendaten gleiche Spalten ausblenden.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide columns with no differences( 0 );

```

### Hide rows with no differences

**Syntax:** Hide rows with no differences(0|1)

**Beschreibung:** Beim Vergleichen von Tabellendaten gleiche Zeilen ausblenden.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide rows with no differences( 0 );

```

### Hide table properties with no differences

**Syntax:** Hide table properties with no differences(0|1)

**Beschreibung:** Beim Vergleichen von Tabellenmetadaten gleiche Elemente ausblenden.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide table properties with no differences( 0 );

```

### Ignore case

**Syntax:** Ignore Case(0|1)

**Beschreibung:** Groß-/Kleinschreibung beim Datenvergleich ignorieren

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Ignore Case( 1 );

```

### Ignore missing

**Syntax:** Ignore Missing(0|1)

**Beschreibung:** Fehlende Werte beim Datenvergleich ignorieren

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Ignore Missing( 1 );

```

### Ignore whitespace

**Syntax:** Ignore Whitespce(0|1)

**Beschreibung:** Leerstellen beim Datenvergleich ignorieren

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Ignore Whitespace( 1 );

```

### Limit

**Syntax:** obj &lt;&lt; Limit( integer )

**Beschreibung:** Grenzwert für die Anzahl der Unterschiede festlegen. Der Vergleich wird beendet, wenn der Grenzwert erreicht ist.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << limit( 100 );

```

### Link

**Syntax:** Link({"col1", "col2", &lt;ID(0|1)&gt;, &lt;No Compare(0|1)&gt;, &lt;Fuzzy Compare(&lt;Ignore Case(0|1)&gt;, &lt;Ignore Whitespace(0|1)&gt;, &lt;Ignore Missing(0|1)&gt;, &lt;Relative Error(&lt;amount&gt;)&gt;)&gt;

**Beschreibung:** Zu vergleichende Spaltenpaare und andere Vergleichsoptionen angeben.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Link( {:age, :weight}, );

```

### Relative Error

**Syntax:** obj &lt;&lt; Relative Error( integer )

**Beschreibung:** Relativen Fehler für Fuzzy-Vergleich festlegen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Relative Error( 0.00001 );

```

### Report

**Syntax:** obj &lt;&lt; Report

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Row Alignment

**Syntax:** obj &lt;&lt; Row Alignment (Flexible by Row|By Row|Use ID Columns)

**Beschreibung:** Festlegen, wie die Zeilen für den Vergleich ausgerichtet werden. 

Flexibel nach Zeile: Versuchen, so viele übereinstimmende Zeilen wie möglich der Reihe nach zu finden, indem Blöcke nicht übereinstimmender Zeilen übersprungen werden.

Nach Zeile: Jede Zeile nach Zeilennummer vergleichen.

ID-Spalte verwenden: Die angegebenen ID-Spalten werden verwendet, um für jede Zeile einen Schlüssel zu erstellen. Dieser Schlüssel wird zum Abgleichen von Zeilen verwendet.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Row Alignment( "By Row" );

```

### Save Difference Summary

**Syntax:** obj &lt;&lt; Save Difference Summary( &lt;invisible(0 | 1)&gt; )

**Beschreibung:** Zusammenfassung der Differenzen in einer Datentabelle speichern.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );summaryDT = (obj << save difference summary( invisible ));

```

### Save Script to Data Table

**Syntax:** obj &lt;&lt; Save Script to Data Table

**Beschreibung:** Skript für den Datentabellenvergleich als Tabelleneigenschaft in der Datentabelle speichern.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Save Script to Data Table;

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Schaltfläche mit dem Skript für den Datentabellenvergleich zum Journal hinzufügen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Save Script to Journal;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Skript für den Datentabellenvergleich an das Textfenster mit dem aktuellen Skript anhängen.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Save Script to Script Window;

```

### Show Window

**Syntax:** obj &lt;&lt; Show Window( Show window( 0|1) )

**Beschreibung:** Fenster des Datentabellenvergleichs anzeigen oder ausblenden

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << show window( 1 );

```

### Show fuzzy differences

**Syntax:** Show Fuzzy Differences(0|1)

**Beschreibung:** Unterschiede im Datenvergleich für Werte hervorheben, die nur wegen der Fuzzy-Vergleichseinstellungen gleich sind

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Show Fuzzy Differences( 1 );

```

### Unlink

**Syntax:** Unlink(&lt;column name 1&gt;, &lt;column name 2&gt;)

**Beschreibung:** Spaltenvergleich entfernen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Unlink( {"a", "b"} );

```

### Unlink All

**Syntax:** Unlink All

**Beschreibung:** Alle Spaltenvergleiche entfernen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Unlink All;

```

## Zugehörige Konstruktoren

### Compare Data Tables

**Syntax:** Compare Data Tables( &lt;Compare with( Data Table( name ))&gt;, &lt;show window(0 | 1)&gt;, &lt;limit(integer)&gt;, &lt;Compare table properties(0 | 1)&gt;, &lt;Compare column attributes and properties(0 | 1)&gt;, &lt;Compare data(0 | 1)&gt;, &lt;Fuzzy compare( &lt;0 | 1&gt;, &lt;Relative Error(number)&gt;)&gt;, &lt;Show difference summary(0 | 1)&gt;, &lt;Show difference plot(0 | 1)&gt; )

**Beschreibung:** Vergleicht zwei offene Datentabellen und berichtet die Unterschiede zwischen den Daten sowie Metadaten.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );

```

