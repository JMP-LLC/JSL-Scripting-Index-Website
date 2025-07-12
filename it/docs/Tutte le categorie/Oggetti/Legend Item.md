# Legend Item



## Messaggi degli elementi

### Get Label

**Sintassi:** obj << Get Label

**Descrizione:** Restituisce l&apos;etichetta dell&apos;elemento della legenda

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << Get Position

**Descrizione:** Restituisce la posizione sequenziale di un elemento nella legenda o un codice negativo se non viene visualizzato. Codici: -1 = Nascosto dall&apos;utente, -2 = Nascosto da Visualizzazione se, -3 = Nascosto da Dipendenza, -4 = Nascosto da Impostazione iniziale

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << Get Type

**Descrizione:** Restituisce il tipo di elemento della legenda. I tipi sono: "Nessuno", "Indicatore:", "Linea H", "Linea V", "Passo", "Barra", "Box plot V", "Intervallo H", "Intervallo V", "Box plot barra H", "Box plot barra V", "Diagramma OHLC", "Box plot H", "Gradiente", "Gradiente di densità", "Riempi e Linea", "Dimensione indicatore:", "Dimensione linea", "Linea gradiente", "Gradiente profilo isometrico", "Colore indicatore", "Dimensione indicatore categorica", "Dimensione cella".

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << Set Label( text )

**Descrizione:** Imposta l&apos;etichetta di un elemento nella legenda.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << Set Visible( state=0|1 )

**Descrizione:** Imposta la visibilità di un elemento nella legenda.

**JMP Versione aggiunta:** 16

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

