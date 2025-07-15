# Notebook



## Elementmeldungen

### Enable Inline Logging

**Syntax:** obj &lt;&lt; Enable Inline Logging( 0|1 )

**Beschreibung:** Aktiviert/deaktiviert die Protokollierung der Ausgabe in Notebook-Blöcken.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Syntax:** obj &lt;&lt; Export to a Workflow( &lt;Create(wfb name)&gt;|&lt;AddTo(wfb name)&gt; )

**Beschreibung:** Exportiert die Blöcke des Notebooks in einen Workflow.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
nb << Export to a Workflow;

```

### Get Window

**Syntax:** obj &lt;&lt; Get Window

**Beschreibung:** Gibt das Fenster dieses Notebooks zurück.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**Syntax:** obj &lt;&lt; Import .ipynb File( file path )

**Beschreibung:** Lädt die angegebene Datei *.ipynb als Blöcke in das Notebook.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**Syntax:** obj &lt;&lt; Run All Scripts

**Beschreibung:** Führt das vollständige Notebook aus.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;

```

### Show Embedded Log

**Syntax:** obj &lt;&lt; Show Embedded Log( 0|1 )

**Beschreibung:** Aktiviert/deaktiviert das eingebettete Protokoll im Notebook.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**Syntax:** obj &lt;&lt; Title( title )

**Beschreibung:** Legt den Titel dieses Notebooks fest.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

## Zugehörige Konstruktoren

### Notebook

**Syntax:** nb = Notebook( name|number )

**Beschreibung:** Erstellt ein neues Notebook oder gibt das Notebook mit dem angegebenen Namen oder Index zurück.

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

## Block

### Elementmeldungen

#### Block Name

**Syntax:** obj &lt;&lt; Block Name( name )

**Beschreibung:** Legt den Titel dieses Blocks fest bzw. ruft ihn ab.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**Syntax:** obj &lt;&lt; Duplicate Block

**Beschreibung:** Dupliziert diesen Block und fügt den neuen Block als sein Geschwisterelement hinzu.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

#### Get Content

**Syntax:** obj &lt;&lt; Get Content

**Beschreibung:** Ruft den Inhalt des Blocks ab.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

#### Get Output

**Syntax:** obj &lt;&lt; Get Output

**Beschreibung:** Ruft die Ausgabe im Anzeigebaum des Blocks ab.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;
block2 << Get Output;

```

#### Import .ipynb File

**Syntax:** obj &lt;&lt; Import .ipynb File( file path )

**Beschreibung:** Lädt die angegebene Datei *.ipynb als diesem Abschnitt hinzugefügte Blöcke.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**Syntax:** obj &lt;&lt; Line Count( number )

**Beschreibung:** Legt die maximale Anzahl der in diesem Block angezeigten Zeilen fest, bevor ein Bildlauf aktiviert wird. Setzen Sie den Wert auf Null, um die automatische Größenanpassung zu aktivieren.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

#### Move Block Down

**Syntax:** obj &lt;&lt; Move Block Down

**Beschreibung:** Verschiebt diesen Block in der Liste eine Position nach unten.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block << Move Block Down;

```

#### Move Block Up

**Syntax:** obj &lt;&lt; Move Block Up

**Beschreibung:** Verschiebt diesen Block in der Liste eine Position nach oben.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block2 << Move Block Up;

```

#### Popout Results

**Syntax:** obj &lt;&lt; Popout Results

**Beschreibung:** Sendet die aktuelle Ausgabe dieses Blocks an ein neues Fenster.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;
block2 << Popout Results;

```

#### Remove Block

**Syntax:** obj &lt;&lt; Remove Block

**Beschreibung:** Entfernt diesen Block von seinem übergeordneten Element.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

#### Remove Section

**Syntax:** obj &lt;&lt; Remove Section

**Beschreibung:** Entfernt diesen Abschnitt von seinem übergeordneten Element.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

#### Run Script

**Syntax:** obj &lt;&lt; Run Script

**Beschreibung:** Führt den Inhalt des aktuellen Blocks aus.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

#### Run Section

**Syntax:** obj &lt;&lt; Run Section

**Beschreibung:** Führt die untergeordneten Teile dieses Abschnitts der Reihe nach aus.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

#### Set Content

**Syntax:** obj &lt;&lt; Set Content( content )

**Beschreibung:** Legt den Inhalt des Blocks fest.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

### Zugehörige Konstruktoren

#### Block

**Syntax:** Block

```jsl

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

