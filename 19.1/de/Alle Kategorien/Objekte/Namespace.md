# Namespace



## Elementmeldungen

### Contains

**Syntax:** obj &lt;&lt; Contains( string )

**Beschreibung:** Gibt 1 zurück, wenn der Namensraum den angegebenen Zeichenkettenausdruck enthält, ansonsten 0.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Contains( "nObs" );

```

### Delete Namespace

**Syntax:** nsref &lt;&lt; Delete Namespace( &lt; Force( boolean ) &gt; )

**Beschreibung:** Löscht diesen Namensraum.

**JMP Version hinzugefügt:** 14

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Delete Namespace;Show( nsref );

```

### First

**Syntax:** obj &lt;&lt; First

**Beschreibung:** Gibt den Zeichenkettenausdruck für das erste Element in diesem Namensraum zurück.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << First;

```

### Get Contents

**Syntax:** obj &lt;&lt; Get Contents

**Beschreibung:** Gibt eine Liste von Elementen im Namensraum zurück, wobei jedes Element aus einer Liste mit zwei Elementen besteht, jeweils einem Schlüssel und dem zugewiesenen Wert.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Contents;

```

### Get Keys

**Syntax:** obj &lt;&lt; Get Keys

**Beschreibung:** Gibt eine Liste von Schlüsseln im Namensraum zurück, wobei ein Schlüssel eine Zeichenkettendarstellung eines einzelnen Elements in diesem Namensraum ist.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Keys;

```

### Get Name

**Syntax:** obj &lt;&lt; Get Name

**Beschreibung:** Gibt den Namen dieses Namensraums zurück.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));space name = nsref << Get Name;

```

### Get Value

**Syntax:** obj &lt;&lt; Get Value( string )

**Beschreibung:** Gibt den Wert des angegebenen Elements in diesem Namensraum zurück. Die „Zeichenkette“ ist der Schlüssel für das Element.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Value( "nObs" );

```

### Get Values

**Syntax:** obj &lt;&lt; Get Values

**Beschreibung:** Gibt eine Liste von Werten zurück, die jeweils den einzelnen Elementen in diesem Namensraum entsprechen.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Values;

```

### Insert

**Syntax:** obj &lt;&lt; Insert( string, value )

**Beschreibung:** Fügt einen Zeichenkettenausdruck mit dem angegebenen Wert in diesen Namensraum ein.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Insert( "X", 25 );Show( nsref );

```

### Lock Namespace

**Syntax:** obj &lt;&lt; Lock Namespace( &lt;string, | {string, ...}&gt;* )

**Beschreibung:** Sperrt alle Variablen oder die angegebenen benannten Variablen in diesem Namensraum und verhindert, dass Variablen hinzugefügt, geändert oder entfernt werden.

**JMP Version hinzugefügt:** 14

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Lock Namespace;Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**Syntax:** obj &lt;&lt; N Items

**Beschreibung:** Gibt die Anzahl der Elemente in diesem Namensraum zurück.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));n = nsref << N Items;

```

### Next

**Syntax:** obj &lt;&lt; Next( string )

**Beschreibung:** Gibt den Zeichenkettenausdruck für das nächste Element in diesem Namensraum, das auf den angegebenen Schlüssel folgt, zurück.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Next( "addition" );

```

### Remove

**Syntax:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**Beschreibung:** Entfernt den angegebenen Zeichenkettenausdruck aus dem Namensraum.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Remove( "nObs" );Show( nsref );

```

### Show Contents

**Syntax:** obj &lt;&lt; Show Contents

**Beschreibung:** Zeigt den Inhalt eines Namensraums im JMP-Log an.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Show Contents;

```

### Unlock Namespace

**Syntax:** obj &lt;&lt; Unlock Namespace( &lt;string | {string, ...}&gt;* )

**Beschreibung:** Entsperrt einen zuvor gesperrten Namensraum mit allen gesperrten Variablen in diesem Namensraum, die nicht hinzugefügt, geändert oder entfernt werden konnten.

**JMP Version hinzugefügt:** 14

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Lock Namespace( "nObs" );Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); //Try again after unlocking. nsref << Unlock Namespace( "nObs" );Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

## Zugehörige Konstruktoren

### New Namespace

**Syntax:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Beschreibung:** Erstellt einen Namensraum, in dem alle erstellten Funktionen und Variablen nur innerhalb des angegebenen Namens definiert sind.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));

```

