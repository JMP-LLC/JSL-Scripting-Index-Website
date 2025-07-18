# Legend Model



## Elementmeldungen

### Get Fill Color

**Syntax:** obj &lt;&lt; Get Fill Color

**Beschreibung:** Gibt die Füllfarbe des Legendenmodellelements zurück, das mit einem Anzeigesegment im Graphen verknüpft ist.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Ellipse( X, Y, Legend( 3 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 3, 1 );
Show( item << Get Fill Color );

```

### Get Gradient Settings

**Syntax:** obj &lt;&lt; Get Gradient Settings

**Beschreibung:** Gibt eine Liste der Gradienteneinstellungen für das Legendenmodellelement zurück, das mit einem Anzeigesegment im Graphen verknüpft ist.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Color( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Gradient Settings );

```

### Get Label

**Syntax:** obj &lt;&lt; Get Label

**Beschreibung:** Gibt die Beschriftung des Legendenmodellelements zurück.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Label );

```

### Get Marker Size Settings

**Syntax:** obj &lt;&lt; Get Marker Size Settings

**Beschreibung:** Gibt eine Liste der Symbolgrößeneinstellungen für das Legendenmodellelement zurück, das mit einem Anzeigesegment im Graphen verknüpft ist.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Marker Size Settings );

```

### Get Pen Settings

**Syntax:** obj &lt;&lt; Get Pen Settings

**Beschreibung:** Gibt eine Liste der Stifteinstellungen für das Legendenmodellelement zurück, das mit einem Anzeigesegment im Graphen verknüpft ist.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 7 );
Print( item << Get Pen Settings );

```

### Get Type

**Syntax:** obj &lt;&lt; Get Type

**Beschreibung:** Gibt den Typ des Legendenmodellelements zurück. Folgende Typen gibt es: „Keiner“, „Symbol“, „H-Linie“, „V-Linie“, „Schritt“, „Balken“, „V-Box-Plot“, „H-Intervall“, „V-Intervall“, „H-Balken Box-Plot“, „V-Balken Box-Plot“, „OHLC-Diagramm“, „H-Box-Plot“, „Gradient“ „Dichtegradient“, „Füllen und Linie“, „Symbolgröße“, „Liniengröße“, „Gradientenlinie“, „Gradientenkontur“, „Symbolfarbe“, „Symbolgröße kategorial“, „Zellengröße“.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**Syntax:** obj &lt;&lt; Set Label( text )

**Beschreibung:** Legt die Beschriftung für das Legendenmodellelement fest, das mit einem Anzeigesegment im Graphen verknüpft ist.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
items = server << Get Legend Items;
For Each( {item, index}, items[1], item << Set Label( "Item " || Char( index ) ) );

```

### Set Properties

**Syntax:** obj &lt;&lt; Set Properties

**Beschreibung:** Beliebige Anzeigeeigenschaften für das Legendenmodellelement festlegen, das mit einem Anzeigesegment im Graphen verknüpft ist.

**JMP Version hinzugefügt:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
item << Set Properties(
	{Marker Size( 5 ), Marker Scale( {Marker Size Minimum( "Dot" ), Style( "Nested Full" )} )
	}
);

```

