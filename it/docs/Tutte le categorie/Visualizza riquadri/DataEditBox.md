# DataEditBox



## Messaggi degli elementi

### Blink

**Sintassi:** obj << Blink

**Descrizione:** Fa lampeggiare la riga visualizzata nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Blink;

```

### Find

**Sintassi:** obj << Find( search term )

**Descrizione:** Mostra la riga trovata dal termine di ricerca inserito.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Find( Contains( :State, "North Carolina" ) );

```

### Go to row

**Sintassi:** obj << Go to row( row )

**Descrizione:** Mostra la riga inserita nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Go To Row( 23 );

```

### New Row

**Sintassi:** obj << New Row

**Descrizione:** Crea una nuova riga nella tabella di dati e la visualizza nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << New Row;

```

### Next

**Sintassi:** obj << Next

**Descrizione:** Mostra la riga selezionata successiva nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Next;

```

### Next Selected

**Sintassi:** obj << Next Selected

**Descrizione:** A partire dalle righe selezionate, mostra la riga selezionata successiva nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dt << Select Where( dt:population > 10000000 );
dataedit = win[Data Edit Box( 1 )];
dataedit << Next Selected;

```

### Prev

**Sintassi:** obj << Prev

**Descrizione:** Mostra la riga selezionata precedente nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Go To Row( 23 );
dataedit << Prev;

```

### Prev Selected

**Sintassi:** obj << Prev Selected

**Descrizione:** A partire dalle righe selezionate, mostra la riga selezionata precedente nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dt << Select Where( dt:population > 10000000 );
dataedit = win[Data Edit Box( 1 )];
dataedit << Prev Selected;

```

### Save

**Sintassi:** obj << Save

**Descrizione:** Salva nella tabella di dati i valori della riga visualizzata nella finestra di modifica dati.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Save( "$TEMP/SAT.jmp" );
New Window( "Example",
	cp = dt << Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << New Row;
dataedit << Save;

```

