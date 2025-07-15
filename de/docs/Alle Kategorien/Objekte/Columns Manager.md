# Columns Manager



## Elementmeldungen

### Clear All Filters

**Syntax:** obj &lt;&lt; Clear All Filters

**Beschreibung:** Diese Option entfernt alle Filter aus der Zusammenfassungstabelle. Beachten Sie, dass der Befehl „Set Columns“ kein Filter ist. Deshalb wird durch Aufrufen dieses Befehls diese Einschränkung für die angezeigten Spalten nicht entfernt.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Text Filter( "t" );
obj << Clear All Filters;

```

### Create Data Dictionary

**Syntax:** obj &lt;&lt; Create Data Dictionary

**Beschreibung:** Ein Journal erstellen, das Kenngrößen und Eigenschaftsinformationen zu jeder Spalte enthält.

**JMP Version hinzugefügt:** 18

### Extended Statistics

**Syntax:** obj &lt;&lt; Extended Statistics(&lt;list of statistics&gt;)

**Beschreibung:** Den Standardsatz erweiterter Kenngrößen aufheben, ohne die Liste in den Voreinstellungen konfigurieren zu müssen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager( Include Extended Statistics( 1 ) );
obj << Extended Statistics( {"Median Absolute Deviation", "Q1"} );

```

### Force calculations for all categorical columns

**Syntax:** obj &lt;&lt; Force calculations for all categorical columns( state=0|1 )

**Beschreibung:** Wenn diese Option aktiviert ist, werden die Kenngrößen für alle kategorialen Spalten berechnet, nicht nur für Zeichenspalten. Beispiel: Eine Ausdrucksspalte berechnet die Anzahl fehlender Werte.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Columns Manager;
obj << Force calculations for all categorical columns( 1 );

```

### Force calculations for all numeric columns

**Syntax:** obj &lt;&lt; Force calculations for all numeric columns( state=0|1 )

**Beschreibung:** Wenn diese Option aktiviert ist, werden numerische Kenngrößen für alle numerischen Spalten berechnet, wenn möglich. Beispielsweise wird für Spalten, die als stetig gekennzeichnet sind, die Anzahl der eindeutigen Werte berechnet.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Force calculations for all numeric columns( 1 );

```

### Get Summary Table

**Syntax:** obj &lt;&lt; Get Summary Table

**Beschreibung:** Tabellenfeld für die Zusammenfassungstabelle abrufen

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
tab = obj << Get Summary table;
tab << Sort By Column( "n unique" );

```

### Hide Excluded Columns

**Syntax:** obj &lt;&lt; Hide Excluded Columns( state=0|1 )

**Beschreibung:** Als „Ausgeschlossen“ markierte Spalten in die Zusammenfassungstabelle einschließen oder daraus entfernen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Hide Excluded Columns( 0 );

```

### Hide Hidden Columns

**Syntax:** obj &lt;&lt; Hide Hidden Columns( state=0|1 )

**Beschreibung:** Als „Ausgeblendet“ markierte Spalten in die Zusammenfassungstabelle einschließen oder daraus entfernen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Hide Hidden Columns( 0 );

```

### Include Extended Statistics

**Syntax:** obj &lt;&lt; Include Extended Statistics( state=0|1 )

**Beschreibung:** Der Satz zusätzlicher Kenngrößen kann in den Voreinstellungen konfiguriert werden.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Include Extended Statistics( 1 );

```

### Select Rows

**Syntax:** obj &lt;&lt; Select Rows(&lt;empty&gt; | All | None | &lt;column references&gt;)

**Beschreibung:** Diese Option wählt in der Zusammenfassungstabelle Zeilen aus, die den Spalten entsprechen. Der Filter wird zurückgesetzt, indem keine Argumente übergeben werden. Sie wählen alle oder keine der sichtbaren Zeilen aus, indem Sie All oder None übergeben. Spezifische Zeilen werden durch Übergabe einer Liste von Spaltenreferenzen ausgewählt.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Select Rows( :age, :height );

```

### Set Columns

**Syntax:** obj &lt;&lt; Set Columns(&lt;columns&gt;)

**Beschreibung:** Standardmäßig schließt der Spaltenmanager alle Spalten in der Datentabelle als Basisspaltensatz ein. Dieser Satz kann im Bericht möglicherweise durch das Entfernen ausgeschlossener Spalten reduziert werden. Diese Option ermöglicht die Einschränkung des Spaltensatzes, auf die Spalten, auf die der Spaltenmanager Zugriff hat.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Columns( {:height, :weight} );

```

### Set Modeling Type Filter

**Syntax:** obj &lt;&lt; Set Modeling Type Filter(&lt;empty&gt; | &lt;Continuous, Nominal, Ordinal, Vector, Unstructured Text, Multiple Response, None&gt;)

**Beschreibung:** Diese Option legt den Filter für den Modellierungstyp fest. Der Filter wird zurückgesetzt, indem keine Argumente übergeben werden oder indem Sie einen oder mehrere Modellierungstypnamen angeben. Spalten, die mit einem der Analysetypen übereinstimmen, erfüllen den Filter.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Modeling Type Filter( "Continuous", "Ordinal" );

```

### Set Property Filter

**Syntax:** obj &lt;&lt; Set Property Filter(&lt;empty&gt; | At Least One Property | &lt;list of property names&gt;)

**Beschreibung:** Diese Option legt den Eigenschaftsfilter fest. Der Filter wird zurückgesetzt, indem keine Argumente übergeben werden oder indem Sie einen oder mehrere Eigenschaftsnamen angeben. Der Filter wird für Spalten angegeben, die eine der Eigenschaften enthalten. Es gibt auch einen speziellen Wert, der von Spalten mit beliebigen Eigenschaften erfüllt wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Columns Manager;
obj << Set Property Filter( "Matrix Column Names", "Value colors" );

```

### Set Selection Filter

**Syntax:** obj &lt;&lt; Set Selection Filter(&lt;empty&gt; | Keep | Hide)

**Beschreibung:** Diese Option legt den Auswahlfilter fest. Damit kann der Benutzer eine beliebige Spaltenauswahl treffen und die Liste dann nach diesem Satz von Spalten filtern (mit Keep oder Hide). Der Filter wird zurückgesetzt, indem keine Argumente übergeben werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Select Rows( :age, :height );
obj << Set Selection Filter( "Keep" );

```

### Set Text Filter

**Syntax:** obj &lt;&lt; Set Text Filter(&lt;empty&gt; | &lt;search text&gt;)

**Beschreibung:** Diese Option legt die aktuellen Textfilterdaten fest, wodurch die Anzahl von Spalten in der Zusammenfassungstabelle verringert wird. Der Textfilter wird nur auf Spaltennamen angewendet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Text Filter( "me" );

```

### Show Attributes

**Syntax:** obj &lt;&lt; Show Attributes( state=0|1 )

**Beschreibung:** Den Abschnitt der Zusammenfassungstabelle, der Spaltenattribute enthält, aufklappen oder einklappen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Attributes( 0 );

```

### Show Properties

**Syntax:** obj &lt;&lt; Show Properties( state=0|1 )

**Beschreibung:** Den Abschnitt der Zusammenfassungstabelle, der Spalteneigenschaften enthält, aufklappen oder einklappen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Properties( 0 );

```

### Show Statistics

**Syntax:** obj &lt;&lt; Show Statistics( state=0|1 )

**Beschreibung:** Den Abschnitt der Zusammenfassungstabelle, der Spaltenkenngrößen enthält, aufklappen oder einklappen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Statistics( 0 );

```

