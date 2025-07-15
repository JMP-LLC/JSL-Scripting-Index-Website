# Legend Item



## Elementmeldungen

### Get Label

**Syntax:** obj &lt;&lt; Get Label

**Beschreibung:** Gibt die Beschriftung des Legendenelements zurück.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Label );

```

### Get Position

**Syntax:** obj &lt;&lt; Get Position

**Beschreibung:** Gibt die sequentielle Position eines Elements in der Legende zurück bzw. einen negativen Code, wenn keine Anzeige erfolgt. Codes: -1 = Vom Benutzer ausgeblendet, -2 = Ausgeblendet durch Wenn-Anzeige, -3 = Ausgeblendet durch Abhängigkeit, -4 = Ausgeblendet durch Anfangseinstellung

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Position );

```

### Get Type

**Syntax:** obj &lt;&lt; Get Type

**Beschreibung:** Gibt den Typ des Legendenelements zurück. Folgende Typen gibt es: „Keiner“, „Symbol“, „H-Linie“, „V-Linie“, „Schritt“, „Balken“, „V-Box-Plot“, „H-Intervall“, „V-Intervall“, „H-Balken Box-Plot“, „V-Balken Box-Plot“, „OHLC-Diagramm“, „H-Box-Plot“, „Gradient“ „Dichtegradient“, „Füllen und Linie“, „Symbolgröße“, „Liniengröße“, „Gradientenlinie“, „Gradientenkontur“, „Symbolfarbe“, „Symbolgröße kategorial“, „Zellengröße“.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**Syntax:** obj &lt;&lt; Set Label( text )

**Beschreibung:** Legt die Beschriftung eines Elements in der Legende fest.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Label( "Label Set Through Script" );

```

### Set Visible

**Syntax:** obj &lt;&lt; Set Visible( state=0|1 )

**Beschreibung:** Legt die Sichtbarkeit eines Elements in der Legende fest.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

