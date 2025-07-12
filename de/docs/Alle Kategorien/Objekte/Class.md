# Class



## Elementmeldungen

### Clone

**Syntax:** obj << Clone

**Beschreibung:** Den Inhalt einer Klassenreferenz klonen und ein neues Objekt erstellen

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = clref << Clone;
Show( clref << Equal( nclref ) );
Show( clref == nclref );

```

### Contains

**Syntax:** obj << Contains( string )

**Beschreibung:** Gibt 1 zurück, wenn die Klasse den angegebenen Zeichenkettenausdruck enthält, ansonsten 0.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Contains( "nObs" );

```

### Delete Class

**Syntax:** clref << Delete Class( < Force( boolean ) > )

**Beschreibung:** Löscht diese Klasse.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Delete Class;
Show( clref );

```

### Equal

**Syntax:** obj << Equal( classref )

**Beschreibung:** Das Argument der Klassenreferenz mit der Zielklassenreferenz auf Gleichheit vergleichen

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = New Object( Test() );
Show( clref << Equal( nclref ) );
nclref:nObs = 50;
Show( clref << Equal( nclref ) );

```

### First

**Syntax:** obj << First

**Beschreibung:** Gibt den Zeichenkettenausdruck für das erste Element in dieser Klasse zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << First;

```

### Get Contents

**Syntax:** obj << Get Contents

**Beschreibung:** Gibt eine Liste von Elementen in der Klasse zurück. Jedes Element besteht aus einer Liste mit zwei Elementen, einem Schlüssel und dem zugewiesenen Wert.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Contents;

```

### Get Keys

**Syntax:** obj << Get Keys

**Beschreibung:** Gibt eine Liste von Schlüsseln in dieser Klasse zurück. Jeder Schlüssel ist eine Zeichenkettendarstellung eines einzelnen Elements in dieser Klasse.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Keys;

```

### Get Name

**Syntax:** obj << Get Name

**Beschreibung:** Gibt den Namen dieser Klasse zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
class name = clref << Get Name;

```

### Get Value

**Syntax:** obj << Get Value( string )

**Beschreibung:** Gibt den Wert des angegebenen Elements in dieser Klasse zurück. Die „Zeichenkette“ ist der Schlüssel für das Element.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Value( "nObs" );

```

### Get Values

**Syntax:** obj << Get Values

**Beschreibung:** Gibt eine Liste von Werten zurück, die jeweils den einzelnen Elementen in dieser Klasse entsprechen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Values;

```

### Insert

**Syntax:** obj << Insert( string, value )

**Beschreibung:** Fügt einen Zeichenkettenausdruck mit dem angegebenen Wert in diese Klasse ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Insert( "X", 25 );
Show( clref );

```

### Lock Class

**Syntax:** obj << Lock Class( <string, | {string, ...}>* )

**Beschreibung:** Sperrt alle Methodenmitglieder oder angegebenen benannten Mitglieder in dieser Klasse und verhindert, dass sie hinzugefügt, geändert oder entfernt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class;
Try( clref:nObs = 40, "clref is locked." );

```

### N Items

**Syntax:** obj << N Items

**Beschreibung:** Gibt die Anzahl der Elemente in dieser Klasse zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
n = clref << N Items;

```

### Next

**Syntax:** obj << Next( string )

**Beschreibung:** Gibt den Zeichenkettenausdruck für das nächste Element in dieser Klasse, das auf den angegebenen Schlüssel folgt, zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Next( "addition" );

```

### Remove

**Syntax:** obj << Remove( <string | {string, ...}>* )

**Beschreibung:** Entfernt den angegebenen Zeichenkettenausdruck aus der Klasse.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Remove( "nObs" );
Show( clref );

```

### Show Contents

**Syntax:** obj << Show Contents

**Beschreibung:** Zeigt den Inhalt einer Klasse im JMP-Log an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Show Contents;

```

### Unlock Class

**Syntax:** obj << Unlock Class( <string | {string, ...}>* )

**Beschreibung:** Entsperrt eine gesperrte Klasse mit Methodenmitgliedern, die nicht hinzugefügt, geändert oder entfernt werden konnten.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class( "nObs" );
Try( clref:nObs = 30, Show( "clref is locked." ) ); 
//Try again after unlocking. 
clref << Unlock Class( "nObs" );
Try( clref:nObs = 40, Show( "clref is locked." ) );

```

## Zugehörige Konstruktoren

### Define Class

**Syntax:** Define Class("class name", <Base Class{ "base class name", ... }>, <Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )>, { method* | member* | function* } )

**Beschreibung:** Erstellt eine Klasse, in der alle erstellten Klassenmethoden und Klassenvariablen nur innerhalb des angegebenen Klassennamens definiert werden.

```jsl

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );

```

