# Custom Function



### Custom Format Category

**Syntax:** f << Custom Format Category(1|0)

**Beschreibung:** Benutzerdefinierte Funktion als benutzerdefiniertes Format behandeln. Geben Sie 0 an, um die Funktion aus dem Menü der benutzerdefinierten Formate auszuschließen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );

```

### Description

**Syntax:** obj << Description( text )

**Beschreibung:** Beschreibung für die benutzerdefinierte Funktion festlegen. Diese Beschreibung wird im Skriptindex und in Tooltipps angezeigt.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**Syntax:** f << Example(example text | Expr(example JSL code), <example name>)

**Beschreibung:** Ergänzen Sie ein Beispiel, um zu zeigen, wie die Funktion effektiv verwendet wird. Das Beispiel ist als Textzeichenkette oder als JSL-Code mit dem Befehl Expr zu übergeben. Sie können die Meldung mehrere Male senden, um mehrere Beispiele hinzuzufügen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)" );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**Syntax:** f << Formula Category(name|""|1|0)

**Beschreibung:** Funktion in die angegebene Kategorie des Formeleditors aufnehmen. Wenn angegeben, wird die Funktion am Ende der übereinstimmenden Kategorie hinzugefügt. Wenn die Kategorie nicht vorhanden ist, wird eine neue Kategorie erstellt. Geben Sie 0 oder eine leere Zeichenkette an, wenn die Funktion nicht im Baum des Formeleditors angezeigt werden soll.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**Syntax:** f << Get Custom Format Category

**Beschreibung:** Kategorie des benutzerdefinierten Formats für die benutzerdefinierte Funktion abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );
myAdd << Get Custom Format Category;

```

### Get Description

**Syntax:** f << Get Description

**Beschreibung:** Beschreibung für die benutzerdefinierte Funktion abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );
myAdd << Get Description;

```

### Get Examples

**Syntax:** f << Get Examples

**Beschreibung:** Liste von Beispielen als Zeichenketten abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );
myAdd << Get Examples;

```

### Get Formula Category

**Syntax:** f << Get Formula Category

**Beschreibung:** Zurückgeben, zu welcher Kategorie des Formeleditors diese Funktion gegebenenfalls gehören soll.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );
myAdd << Get Formula Category;

```

### Get Function

**Syntax:** f << Get Function

**Beschreibung:** Definition der Funktion abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Function;

```

### Get Name

**Syntax:** f << Get Name

**Beschreibung:** Funktionsname abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Name;

```

### Get Namespace

**Syntax:** f << Get Namespace

**Beschreibung:** Namensraum der Funktion abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Namespace;

```

### Get Parameters

**Syntax:** f << Get Parameters

**Beschreibung:** Liste von Parametern abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );
myAdd << Get Parameters;

```

### Get Prototype

**Syntax:** f << Get Prototype

**Beschreibung:** Prototyp abrufen, der für diese Funktion im Skriptindex angezeigt wird.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );
myAdd << Get Prototype;

```

### Get Result Type

**Syntax:** f << Get Result Type

**Beschreibung:** Ergebnistyp der Funktion abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );
myAdd << Get Result Type;

```

### Get Scripting Index Category

**Syntax:** f << Get Scripting Index Category

**Beschreibung:** Kategorie für die benutzerdefinierte Funktion im Skriptindex abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );
myAdd << Get Scripting Index Category;

```

### Get Transform Category

**Syntax:** f << Get Transform Category

**Beschreibung:** Transformationskategorie für die benutzerdefinierte Funktion abrufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );
myAdd << Get Transform Category;

```

### Parameter

**Syntax:** f << Parameter(typename | {typename1, typename2, ...}, hint text)

**Beschreibung:** Ergänzen Sie Informationen zu den Parametern der Funktion. Senden Sie diese Meldung einmal für jeden Parameter der Funktion. Dies kann für die Validierung des Codes verwendet werden. Gültige Parametertypen sind: Beliebig, Name, Zahl, Zeichenkette, Liste, Matrix, Zeileneigenschaft. Wenn mehrere Ergebnistypen möglich sind, geben Sie die Namen der Typen in einer Liste an. Der Hinweistext soll angeben, welche Daten im entsprechenden Argument im Formeleditor verwendet werden sollen. Geben Sie eine leere Zeichenkette an, wenn kein Hinweistext gewünscht ist.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**Syntax:** obj << Prototype( text )

**Beschreibung:** Prototyp festlegen, der für diese Funktion im Skriptindex angezeigt wird.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**Syntax:** f << Result Type(typename | {typename1, typename2 ...})

**Beschreibung:** Ergebnistyp der Funktion festlegen. Dies kann für die Validierung des Codes verwendet werden. Gültig sind: Beliebig, Name, Zahl, Zeichenkette, Liste, Matrix, Zeileneigenschaft. Wenn mehrere Ergebnistypen möglich sind, geben Sie die Namen der Typen in einer Liste an.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**Syntax:** f << Scripting Index Category(name|""|1|0)

**Beschreibung:** Legt die Kategorie für die benutzerdefinierte Funktion im Skriptindex fest. Jede benutzerdefinierte Funktion wird zusätzlich zu der von Ihnen angegebenen Kategorie in der Kategorie „Alle Funktionen“ aufgelistet. Geben Sie 0 oder „“ an, um die Funktion nur in der Kategorie „Alle Funktionen“ aufzuführen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**Syntax:** f << Transform Category(1|0)

**Beschreibung:** Benutzerdefinierte Funktion als Spaltentransformation behandeln. Geben Sie 0 an, um die Funktion aus dem Menü der Spaltentransformationen auszuschließen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );

```

