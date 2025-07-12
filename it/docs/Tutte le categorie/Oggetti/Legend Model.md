# Legend Model



## Messaggi degli elementi

### Get Fill Color

**Sintassi:** obj << Get Fill Color

**Descrizione:** Restituisce il colore di riempimento dell&apos;elemento Modello legenda che è collegato a un segmento di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Get Gradient Settings

**Descrizione:** Restituisce un elenco di impostazioni del gradiente per l&apos;elemento Modello legenda che è collegato a un segmento di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Get Label

**Descrizione:** Restituisce l&apos;etichetta dell&apos;elemento modello della legenda

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Get Marker Size Settings

**Descrizione:** Restituisce un elenco di impostazioni della dimensione dell&apos;indicatore per l&apos;elemento Modello legenda che è collegato a un segmento di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Get Pen Settings

**Descrizione:** Restituisce un elenco di impostazioni della penna per l&apos;elemento Modello legenda che è collegato a un segmento di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Get Type

**Descrizione:** Restituisce il tipo di elemento Modello legenda. I tipi sono: "Nessuno", "Indicatore", "Linea H", "Linea V", "Passo", "Barra", "Box plot V", "Intervallo H", "Intervallo V", "Box plot barra H", "Box plot barra V", "Diagramma OHLC", "Box plot H", "Gradiente", "Gradiente di densità", "Riempi e Linea", "Dimensione indicatore", "Dimensione linea", "Linea gradiente", "Gradiente profilo isometrico", "Colore indicatore", "Dimensione indicatore categorica", "Dimensione cella".

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Set Label( text )

**Descrizione:** Imposta l&apos;etichetta per l&apos;elemento Modello legenda che è collegato a un segmento di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Set Properties

**Descrizione:** Imposta le proprietà di visualizzazione arbitrarie per l&apos;elemento Modello legenda che è collegato a un segmento di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

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

