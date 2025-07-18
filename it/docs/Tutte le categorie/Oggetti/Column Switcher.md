# Column Switcher



## Messaggi degli elementi

### Close Outline

**Sintassi:** obj &lt;&lt; Close Outline( state=0|1 )

**Descrizione:** Apre o chiude il riquadro Scambia colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**Sintassi:** obj &lt;&lt; Get Current

**Descrizione:** ottiene il nome della variabile corrente

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );
ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**Sintassi:** obj &lt;&lt; Get Layout

**Descrizione:** Ottiene il layout per Scambia colonne multipli. Verticale(0) o orizzontale(1).

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
If( cs2 << Get Layout() == 1,
	Print( "Horizontal" ),
	Print( "Vertical" )
);

```

### Get List

**Sintassi:** obj &lt;&lt; Get List

**Descrizione:** ottiene l&apos;elenco di variabili disponibili

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**Sintassi:** obj &lt;&lt; Get Original

**Descrizione:** ottiene il nome della variabile originale

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;
ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**Sintassi:** obj &lt;&lt; Get Speed

**Descrizione:** fpm = obj<<getSpeed /* in Frames Per Minute */;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**Sintassi:** obj &lt;&lt; Link Platform( platform )

**Descrizione:** Collega una piattaforma a questo Scambia colonne.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
columnSwitcher = dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );
columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**Sintassi:** handler = cs &lt;&lt; Make Column Switch Handler( function(pre), function(post) )

**Descrizione:** Crea un gestore per gli scambi di colonna con funzioni di richiamo (callback) che vengono attivate prima e dopo lo scambio di colonne. Le funzioni di richiamo ricevono la colonna precedente, la colonna successiva e lo Scambia colonne. La funzione specificata per essere eseguita prima dello scambio deve restituire un valore diverso da zero per consentire lo scambio. Restituendo 0 si impedisce lo scambio. La funzione chiamata dopo lo scambio non dovrebbe restituire alcun valore.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );
columnSwitcher = gb << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
pre = Function( {currentColumn, nextColumn, switcher},
	Print(
		"Before switch: " || (currentColumn << get name) || " >> " || (nextColumn << get name
		) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	);
	If( nextColumn << get name == "Process 4",
		0,
		1
	);
);
post = Function( {previousColumn, currentColumn, switcher},
	Print(
		"After switch: " || (previousColumn << get name) || " >> " || (currentColumn <<
		get name) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	)
);
handler = columnSwitcher << Make Column Switch Handler( pre, post );
columnSwitcher << Run;

```

### Next

**Sintassi:** obj &lt;&lt; Next

**Descrizione:** Cambia la selezione di Scambia colonne nella scelta successiva disponibile

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;

```

### Pause

**Sintassi:** obj &lt;&lt; Pause

**Descrizione:** sospende l&apos;animazione

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );
ColumnSwitcherObject << Pause;

```

### Previous

**Sintassi:** obj &lt;&lt; Previous

**Descrizione:** Cambia la selezione di Scambia colonne nella scelta precedente disponibile

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove questo Scambia colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 2/*seconds, while it animates*/ );
ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**Sintassi:** obj &lt;&lt; Retain Axis Settings( state=0|1 )

**Descrizione:** Alcuni grafici memorizzano le personalizzazioni degli assi in base al nome della colonna. Di default, queste personalizzazioni vengono rimosse quando si cambia colonna. Se l&apos;opzione è abilitata, la colonna viene aggiornata quando avviene un cambio, in modo che le personalizzazioni vengano applicate al nuovo grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
Graph Builder(
	Variables( X( :Process 1 ), Y( :Process 2 ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),
	Column Switcher(
		:Process 1,
		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7},
		Retain Axis Settings( 1 )
	),
	SendToReport(
		Dispatch( {}, "Process 1", ScaleBox,
			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ),
			Add Ref Line( 12, "Solid", "Black", "", 1 )}
		)
	)
);

```

### Run

**Sintassi:** obj &lt;&lt; Run

**Descrizione:** avvia l&apos;animazione

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;

```

### Script

**Sintassi:** obj &lt;&lt; Script( script )

**Descrizione:** Imposta uno script che viene eseguito quando la colonna è scambiata

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**Sintassi:** obj &lt;&lt; Set Current( string )

**Descrizione:** imposta la variabile corrente

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**Sintassi:** obj &lt;&lt; Set Layout( 0 = Vertical | 1 = Horizontal )

**Descrizione:** Imposta il layout per Scambia colonne multipli su verticale(0) o orizzontale(1).

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
cs1 << Set Layout( 1 );

```

### Set N Lines

**Sintassi:** obj &lt;&lt; Set N Lines( number )

**Descrizione:** Imposta il numero di righe nella casella di riepilogo dei nomi di colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**Sintassi:** obj &lt;&lt; Set Script( script )

**Descrizione:** Imposta uno script che viene eseguito quando la colonna è scambiata

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**Sintassi:** obj &lt;&lt; Set Size( number )

**Descrizione:** Imposta la larghezza in pixel della casella di riepilogo dei nomi di colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**Sintassi:** obj &lt;&lt; Set Speed( number )

**Descrizione:** obj<<setSpeed(60) /* in Frames Per Minute */;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**Sintassi:** obj &lt;&lt; Title( string )

**Descrizione:** Imposta il titolo per il riquadro Scambia colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Title( "Switch on X" );

```

