# Data Filter



## Categorical Filter

### Blocks Display

**Sintassi:** obj << Blocks Display( state=0|1 )

**Descrizione:** Mostra ogni livello come blocco selezionabile.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

### Check Box Display

**Sintassi:** obj << Check Box Display( state=0|1 )

**Descrizione:** Mostra ogni livello con una casella di controllo insieme con il conteggio di frequenza e le barre.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

### Clear Find

**Sintassi:** obj << Clear Find

**JMP Versione aggiunta:** 15

### Clear Selection

**Sintassi:** obj << Clear Selection

**Descrizione:** Cancella qualsiasi selezione valida per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Sintassi:** obj << Continuous( state=0|1 )

**JMP Versione aggiunta:** 16

### Delete

**Sintassi:** obj << Delete

**Descrizione:** Rimuove la variabile dal pannello di controllo del filtro sui dati.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Sintassi:** obj << Extend Where

**Descrizione:** Seleziona righe usando un&apos;espressione, aggiungendola alla selezione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Find

**Sintassi:** obj << Find(Set Text("string"), <options>)

**Descrizione:** Presenta una casella di testo in cui inserire una stringa di ricerca per la colonna selezionata.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

### Get Selected Items

**Sintassi:** obj << Get Selected Items

**JMP Versione aggiunta:** 15

### Get Visible Items

**Sintassi:** obj << Get Visible Items

**JMP Versione aggiunta:** 19

### Invert Selection

**Sintassi:** obj << Invert Selection

**Descrizione:** Deseleziona qualsiasi valore selezionato e seleziona tutti i valori non precedentemente selezionati, per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### List Display

**Sintassi:** obj << List Display( state=0|1 )

**Descrizione:** Mostra ogni livello in un elenco, insieme con il conteggio di frequenza e le barre.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

### Multiple Response

**Sintassi:** obj << Multiple Response( state=0|1 )

**JMP Versione aggiunta:** 16

### Nominal/Ordinal

**Sintassi:** obj << Nominal/Ordinal( state=0|1 )

**JMP Versione aggiunta:** 16

### Order By Count

**Sintassi:** obj << Order By Count( state=0|1 )

**Descrizione:** Ordina i valori in sequenza decrescente per conteggio.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

### Radio Box Display

**Sintassi:** obj << Radio Box Display( state=0|1 )

**Descrizione:** Mostra ogni livello con una casella di opzione insieme con il conteggio di frequenza e le barre.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

### Select Filter Item

**Sintassi:** obj << Select Filter Item

**Descrizione:** Seleziona l&apos;elemento filtro specificato. Il filtro selezionato è usato come oggetto di animazione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Single Category Display

**Sintassi:** obj << Single Category Display( state=0|1 )

**Descrizione:** Mostra ogni livello e il conteggio di frequenza in un menu di casella combinata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

### Unstructured Text

**Sintassi:** obj << Unstructured Text( state=0|1 )

**JMP Versione aggiunta:** 16

### Where

**Sintassi:** obj << Where

**Descrizione:** Seleziona righe usando un&apos;espressione.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Continuous Filter

### Clear Selection

**Sintassi:** obj << Clear Selection

**Descrizione:** Cancella qualsiasi selezione valida per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Sintassi:** obj << Continuous( state=0|1 )

**JMP Versione aggiunta:** 16

### Delete

**Sintassi:** obj << Delete

**Descrizione:** Rimuove la variabile dal pannello di controllo del filtro sui dati.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Sintassi:** obj << Extend Where

**Descrizione:** Seleziona righe usando un&apos;espressione, aggiungendola alla selezione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Invert Selection

**Sintassi:** obj << Invert Selection

**Descrizione:** Deseleziona qualsiasi valore selezionato e seleziona tutti i valori non precedentemente selezionati, per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### Multiple Response

**Sintassi:** obj << Multiple Response( state=0|1 )

**JMP Versione aggiunta:** 16

### Nominal/Ordinal

**Sintassi:** obj << Nominal/Ordinal( state=0|1 )

**JMP Versione aggiunta:** 16

### Reset Zoom

**Sintassi:** obj << Reset Zoom

**Descrizione:** Ripristina il min e max di visualizzazione del filtro ai valori predefiniti.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
fc << Zoom to Selection;
Wait( 1 );
fc << Reset Zoom;

```

### Select Filter Item

**Sintassi:** obj << Select Filter Item

**Descrizione:** Seleziona l&apos;elemento filtro specificato. Il filtro selezionato è usato come oggetto di animazione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Select Missing

**Sintassi:** obj << Select Missing

**Descrizione:** Seleziona righe che contengono valori mancanti.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Location( {2098, 120} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) )
);
Wait( 1 );
ozoneobj = obj << Get Filter Column( :OZONE );
ozoneobj << Select Missing;

```

### Unstructured Text

**Sintassi:** obj << Unstructured Text( state=0|1 )

**JMP Versione aggiunta:** 16

### Where

**Sintassi:** obj << Where

**Descrizione:** Seleziona righe usando un&apos;espressione.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

### Zoom to Selection

**Sintassi:** obj << Zoom to Selection

**Descrizione:** Imposta il min e max di visualizzazione del filtro sulla base dell&apos;intervallo di selezione corrente.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
Wait( 1 );
fc << Zoom to Selection;

```

## Multiple Response Filter

### Blocks Display

**Sintassi:** obj << Blocks Display( state=0|1 )

**Descrizione:** Mostra ogni livello come blocco selezionabile.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

### Check Box Display

**Sintassi:** obj << Check Box Display( state=0|1 )

**Descrizione:** Mostra ogni livello con una casella di controllo insieme con il conteggio di frequenza e le barre.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

### Clear Find

**Sintassi:** obj << Clear Find

**JMP Versione aggiunta:** 15

### Clear Selection

**Sintassi:** obj << Clear Selection

**Descrizione:** Cancella qualsiasi selezione valida per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Sintassi:** obj << Continuous( state=0|1 )

**JMP Versione aggiunta:** 16

### Delete

**Sintassi:** obj << Delete

**Descrizione:** Rimuove la variabile dal pannello di controllo del filtro sui dati.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Sintassi:** obj << Extend Where

**Descrizione:** Seleziona righe usando un&apos;espressione, aggiungendola alla selezione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Find

**Sintassi:** obj << Find(Set Text("string"), <options>)

**Descrizione:** Presenta una casella di testo in cui inserire una stringa di ricerca per la colonna selezionata.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

### Get Selected Items

**Sintassi:** obj << Get Selected Items

**JMP Versione aggiunta:** 15

### Get Visible Items

**Sintassi:** obj << Get Visible Items

**JMP Versione aggiunta:** 19

### Invert Selection

**Sintassi:** obj << Invert Selection

**Descrizione:** Deseleziona qualsiasi valore selezionato e seleziona tutti i valori non precedentemente selezionati, per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### List Display

**Sintassi:** obj << List Display( state=0|1 )

**Descrizione:** Mostra ogni livello in un elenco, insieme con il conteggio di frequenza e le barre.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

### Match All

**Sintassi:** obj << Match All

**Descrizione:** Seleziona le righe con valori che corrispondono a tutti i valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

### Match Any

**Sintassi:** obj << Match Any

**Descrizione:** Seleziona le righe con valori che corrispondono almeno a uno dei valori scelti. Per impostazione predefinita, questa opzione è selezionata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

### Match At Least

**Sintassi:** dfitem << Match At Least(n);

**Descrizione:** Seleziona le righe con valori che corrispondono almeno a n dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

### Match At Most

**Sintassi:** dfitem << Match At Most(n);

**Descrizione:** Seleziona le righe con valori che corrispondono al massimo a n dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

### Match Between

**Sintassi:** dfitem << Match Between(n, m);

**Descrizione:** Seleziona le righe con valori che corrispondono a un numero compreso tra n e m dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

### Match Exactly

**Sintassi:** obj << Match Exactly

**Descrizione:** Seleziona le righe con valori che corrispondono esattamente ai valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

### Match None

**Sintassi:** obj << Match None

**Descrizione:** Seleziona le righe con valori che non corrispondono ad alcuno dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

### Match Only

**Sintassi:** obj << Match Only

**Descrizione:** Seleziona le righe con valori che corrispondono solo al valore scelto.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

### Multiple Response

**Sintassi:** obj << Multiple Response( state=0|1 )

**JMP Versione aggiunta:** 16

### Nominal/Ordinal

**Sintassi:** obj << Nominal/Ordinal( state=0|1 )

**JMP Versione aggiunta:** 16

### Order By Count

**Sintassi:** obj << Order By Count( state=0|1 )

**Descrizione:** Ordina i valori in sequenza decrescente per conteggio.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

### Radio Box Display

**Sintassi:** obj << Radio Box Display( state=0|1 )

**Descrizione:** Mostra ogni livello con una casella di opzione insieme con il conteggio di frequenza e le barre.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

### Select Filter Item

**Sintassi:** obj << Select Filter Item

**Descrizione:** Seleziona l&apos;elemento filtro specificato. Il filtro selezionato è usato come oggetto di animazione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Single Category Display

**Sintassi:** obj << Single Category Display( state=0|1 )

**Descrizione:** Mostra ogni livello e il conteggio di frequenza in un menu di casella combinata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

### Unstructured Text

**Sintassi:** obj << Unstructured Text( state=0|1 )

**JMP Versione aggiunta:** 16

### Where

**Sintassi:** obj << Where

**Descrizione:** Seleziona righe usando un&apos;espressione.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Unstructured Text Filter

### Add Missing

**Sintassi:** obj << Add Missing

**Descrizione:** Aggiunge un valore mancante come opzione selezionabile per testo non strutturato.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Add Missing;

```

### Blocks Display

**Sintassi:** obj << Blocks Display( state=0|1 )

**Descrizione:** Mostra ogni livello come blocco selezionabile.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

### Check Box Display

**Sintassi:** obj << Check Box Display( state=0|1 )

**Descrizione:** Mostra ogni livello con una casella di controllo insieme con il conteggio di frequenza e le barre.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

### Clear Filter Texts List

**Sintassi:** obj << Clear Filter Texts List

**Descrizione:** Cancella l&apos;elenco dei filtri per un elemento del filtro di testo non strutturato.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Clear Filter Texts List;

```

### Clear Selection

**Sintassi:** obj << Clear Selection

**Descrizione:** Cancella qualsiasi selezione valida per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Sintassi:** obj << Continuous( state=0|1 )

**JMP Versione aggiunta:** 16

### Delete

**Sintassi:** obj << Delete

**Descrizione:** Rimuove la variabile dal pannello di controllo del filtro sui dati.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Sintassi:** obj << Extend Where

**Descrizione:** Seleziona righe usando un&apos;espressione, aggiungendola alla selezione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Get Selected Items

**Sintassi:** obj << Get Selected Items

**JMP Versione aggiunta:** 15

### Get Visible Items

**Sintassi:** obj << Get Visible Items

**JMP Versione aggiunta:** 19

### Invert Selection

**Sintassi:** obj << Invert Selection

**Descrizione:** Deseleziona qualsiasi valore selezionato e seleziona tutti i valori non precedentemente selezionati, per la colonna specificata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### List Display

**Sintassi:** obj << List Display( state=0|1 )

**Descrizione:** Mostra ogni livello in un elenco, insieme con il conteggio di frequenza e le barre.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

### Match All

**Sintassi:** obj << Match All

**Descrizione:** Seleziona le righe con valori che corrispondono a tutti i valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

### Match Any

**Sintassi:** obj << Match Any

**Descrizione:** Seleziona le righe con valori che corrispondono almeno a uno dei valori scelti. Per impostazione predefinita, questa opzione è selezionata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

### Match At Least

**Sintassi:** dfitem << Match At Least(n);

**Descrizione:** Seleziona le righe con valori che corrispondono almeno a n dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

### Match At Most

**Sintassi:** dfitem << Match At Most(n);

**Descrizione:** Seleziona le righe con valori che corrispondono al massimo a n dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

### Match Between

**Sintassi:** dfitem << Match Between(n, m);

**Descrizione:** Seleziona le righe con valori che corrispondono a un numero compreso tra n e m dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

### Match Exactly

**Sintassi:** obj << Match Exactly

**Descrizione:** Seleziona le righe con valori che corrispondono esattamente ai valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

### Match None

**Sintassi:** obj << Match None

**Descrizione:** Seleziona le righe con valori che non corrispondono ad alcuno dei valori scelti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

### Match Only

**Sintassi:** obj << Match Only

**Descrizione:** Seleziona le righe con valori che corrispondono solo al valore scelto.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

### Multiple Response

**Sintassi:** obj << Multiple Response( state=0|1 )

**JMP Versione aggiunta:** 16

### Nominal/Ordinal

**Sintassi:** obj << Nominal/Ordinal( state=0|1 )

**JMP Versione aggiunta:** 16

### Order By Count

**Sintassi:** obj << Order By Count( state=0|1 )

**Descrizione:** Ordina i valori in sequenza decrescente per conteggio.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

### Radio Box Display

**Sintassi:** obj << Radio Box Display( state=0|1 )

**Descrizione:** Mostra ogni livello con una casella di opzione insieme con il conteggio di frequenza e le barre.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

### Select Filter Item

**Sintassi:** obj << Select Filter Item

**Descrizione:** Seleziona l&apos;elemento filtro specificato. Il filtro selezionato è usato come oggetto di animazione corrente.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Show Filter Text Edit Box

**Sintassi:** obj << Show Filter Text Edit Box( state=0|1 )

**Descrizione:** Mostra o nasconde la casella di modifica del testo per definire le condizioni del filtro del testo.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Show Filter Text Edit Box( 0 );

```

### Single Category Display

**Sintassi:** obj << Single Category Display( state=0|1 )

**Descrizione:** Mostra ogni livello e il conteggio di frequenza in un menu di casella combinata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

### Unstructured Text

**Sintassi:** obj << Unstructured Text( state=0|1 )

**JMP Versione aggiunta:** 16

### Where

**Sintassi:** obj << Where

**Descrizione:** Seleziona righe usando un&apos;espressione.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

### Add Favorites

**Sintassi:** obj << Add Favorites( name or string )

**Descrizione:** Associa la selezione di filtri corrente al nome specificato e la salva nell&apos;elenco dei preferiti

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites( "FemaleAverageHt" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter( columns( :age, :sex, :height, :weight ), Where( :sex == "F" ) ),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites();
Show( fav1 );

```

### Add Filter

**Sintassi:** obj << Add Filter( columns( column, ... ), <Where( clause )> )

**Descrizione:** Aggiunge una o più colonne filtro in un nuovo gruppo OR.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);

```

### Add Filter Columns

**Sintassi:** obj << Add Filter Columns( Add Filter Columns( column ) )

**Descrizione:** Aggiunge una o più colonne filtro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter Columns( :State );

```

### Animation

**Sintassi:** obj << Animation( <Animate Column( column )>, <Animate Rate( number )>, <Forward|Backward|Bounce> )

**Descrizione:** Presenta in successione i valori ordinati della colonna specificata, selezionando e deselezionando righe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region );
obj << Animation( Animate Column( :Region ), Bounce );
//Now press the play button.

```

### Apply Favorites

**Sintassi:** obj << Apply Favorites( name or string )

**Descrizione:** Applica la selezione dei filtri salvata nei preferiti assegnati al filtro sui dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
a = "FemaleAverageHt";
b = "Female";
df << add favorites( a );
df << Match( Where( :sex == "F" ) );
df << add favorites( b );
Wait( 1 );
df << apply favorites( "FemaleAverageHt" );

```

### Auto clear

**Sintassi:** obj << Auto clear( state=0|1 )

**Descrizione:** Cancella tutte le righe al momento selezionate prima di impostare una nuova selezione per il filtro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
obj << Auto Clear( 1 );
obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
Wait( 1 );
obj << (filter column( :sex ) << Where( :sex == "M" ));

```

### Clear

**Sintassi:** obj << Clear

**Descrizione:** Cancella le righe al momento selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
Wait( 1 );
obj << Clear;

```

### Clear Selection

**Sintassi:** obj << Clear Selection

**Descrizione:** Cancella la selezione per questo filtro sulla colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Clear Selection);

```

### Close

**Sintassi:** obj << Close

**Descrizione:** Chiude il filtro sui dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Close;

```

### Conditional

**Sintassi:** obj << Conditional( state=0|1 )

**Descrizione:** L&apos;opzione indica se i filtri sulle colonne categoriche sono ordinati in modo condizionale. La selezione di una categoria limiterà le categorie del filtro sulle colonne successivo solo a quelle facenti parte della categoria selezionata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :State ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"South"} ));
Wait( 1 );
obj << conditional( 1 );

```

### Copy Local Data Filter

**Sintassi:** obj << Copy Local Data Filter

**Descrizione:** Copia negli Appunti lo script per il filtro sui dati locali.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare la finestra del filtro e inserirlo negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Copy Script;

```

### Count Excluded Rows

**Sintassi:** obj << Count Excluded Rows( state=0|1 )

**Descrizione:** Se l’opzione viene cancellata, i valori delle colonne e i conteggi nel filtro sui dati non comprenderanno le righe con lo stato Escluso nella tabella di dati.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Local Data Filter(
		Count Excluded Rows( 0 ),
		Add Filter( columns( :age ), Where( :age == 12 ) )
	)
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
New Window( "Hierarchical Data Filter",
	V List Box(
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 1 = dt << Data Filter(
					Local,
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		),
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 2 = dt << Data Filter(
					Local,
					Count Excluded Rows( 0 ),
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		)
	)
);

```

### Data Filter

**Sintassi:** Data Filter( <local>, <invisible>, <Add Filter>, <Mode>, <Show Window(0 | 1)>, <no outline box(0 | 1)> )

**Descrizione:** Crea o mostra un filtro sui dati dove si selezionano interattivamente sottoinsiemi complessi di dati. L&apos;opzione Mode determina quali stati della riga sono interessati dalla selezione nel filtro. Il comando Add Filter aggiungerà un gruppo di filtri con le clausole Columns e Where specificate. Se sono presenti più gruppi di filtri, il comportamento combinato è determinato dall&apos;opzione Group By AND. Se è specificata la parola chiave Local, il filtro può essere incorporato in un report per filtrare una o più piattaforme senza interessare altri report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Mostra la tabella di dati utilizzata per questa finestra di dialogo del filtro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Data Table Window;

```

### Delete

**Sintassi:** obj << Delete( {column(s)} )

**Descrizione:** Elimina le colonne specificate con i filtri esistenti nel filtro sui dati.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << Delete( {:State} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << (Filter Column( :State ) << delete);

```

### Delete All

**Sintassi:** obj << Delete All

**Descrizione:** Elimina tutti i filtri esistenti nel filtro sui dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 2 );
obj << Delete All;

```

### Display

**Sintassi:** obj << Display( column, <Invisible(0 | 1)>, <options> )

**Descrizione:** Cambia il modo in cui i livelli delle colonne sono visualizzati nel filtro. Le colonne categoriche supportano un&apos;opzione di tipo di visualizzazione tra "Visualizzazione blocchi", "Visualizzazione elenco", "Visualizzazione categoria singola", "Visualizzazione casella di controllo" o "Visualizzazione casella di opzione". L&apos;opzione NElementi(n) imposterà il numero di elementi visibili in una visualizzazione scorrevole. Le colonne continue supportano le opzioni NBin(n) e Altezza(h) .

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Display( :Region, N Items( 4 ) );

```

### Extend Where

**Sintassi:** obj << Extend Where

**Descrizione:** Estende la selezione in base al criterio indicato per questo filtro sulla colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));

```

### Filter Column

**Sintassi:** obj << Filter Column( column(s) )

**Descrizione:** Aggiunge una colonna filtro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Filter Column( :State );

```

### Filter Columns

**Sintassi:** obj << Filter Columns( column(s) )

**Descrizione:** Aggiunge una o più colonne filtro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Filter Columns( :State, :OZONE );

```

### Filter Group

**Sintassi:** obj << Filter Group( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

### Get Data Table

**Sintassi:** obj << Get Data Table

**Descrizione:** Restituisce la tabella di dati associata al filtro.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Data Table();

```

### Get Filter Column

**Sintassi:** obj << Get Filter Column( column, <index> )

**Descrizione:** Restituisce l&apos;oggetto colonna filtro della colonna definita. Se si utilizza la stessa colonna più volte, l&apos;argomento index restituirà l&apos;occorrenza specificata

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Filter Column( :Region );
regionfilter << Invert Selection;

```

### Get Filtered Rows

**Sintassi:** obj << Get Filtered Rows

**Descrizione:** Restituisce una matrice di numeri di riga che soddisfano le condizioni del filtro corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Get Filtered Rows;

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Carica lo script del filtro sui dati come testo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt = obj << Get Script;
Show( txt );

```

### Get where clause

**Sintassi:** obj << Get where clause

**Descrizione:** Ottiene il testo descrittivo per la selezione dei filtri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;

```

### Grouped by AND

**Sintassi:** obj << Grouped by AND( state=0|1 )

**Descrizione:** I gruppi di elementi del filtro sono uniti per AND

### Inverse

**Sintassi:** obj << Inverse( state=0|1 )

**Descrizione:** Inverte lo stato di selezione corrente delle righe della tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Inverse( 1 );

```

### Invert Selection

**Sintassi:** obj << Invert Selection

**Descrizione:** Inverte la selezione per questo filtro sulla colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << invert selection);

```

### Make Filter Change Handler

**Sintassi:** rs = df << Make Filter Change Handler(function(a) );

**Descrizione:** Crea un gestore del filtro sui dati per gestire la notifica che il filtro è stato modificato. Il numero di righe filtrato viene restituito nell’argomento per la funzione.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Automatic Recalc( 1 ), Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ) ) );
f = Function( {a}, Print( a ) );
rs = filter << Make Filter Change Handler( f );

```

### Match

**Sintassi:** obj << Match( Filter Columns(:a, :b, :c, ...), where( conditions ) )

**Descrizione:** Imposta le condizioni di filtro per ciascun gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :BP 8W, :BP 6M ) ),
	Add Filter( columns( :BP 12M ) )
);
Wait( 1 );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );

```

### Mode

**Sintassi:** obj << Mode( Select|Show|Include (state = 0|1) )

**Descrizione:** Imposta l&apos;azione o il metodo utilizzato nella selezione di righe mediante il filtro sui dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );

```

### On Clear

**Sintassi:** obj << On Clear

**Descrizione:** Imposta uno script o una funzione da eseguire dopo la cancellazione del filtro.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
df = obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
obj << OnClear( Function( {}, df << Mode( Include( 0 ), Select( 1 ), Show( 0 ) ) ) );
Wait( 1 );
df << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );

```

### Remove Favorites

**Sintassi:** obj << Remove Favorites( name or string )

**Descrizione:** Rimuove i preferiti assegnati dall&apos;elenco dei preferiti

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites( "FemaleAverageHt" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites();

```

### Report

**Sintassi:** obj << Report

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script to Data Table

**Sintassi:** obj << Save Script to Data Table

**Descrizione:** Crea uno script JSL per generare la finestra del filtro e salvarlo come una proprietà della tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare la finestra del filtro e aggiungere un pulsante al journal contenente lo script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare la finestra del filtro e aggiungerlo alla finestra dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Script Window;

```

### Save Where Clause to Clipboard

**Sintassi:** obj << Save Where Clause to Clipboard

**Descrizione:** Crea la clausola WHERE dai criteri dei filtri e inseriscila negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Clipboard;

```

### Save Where Clause to Data Table

**Sintassi:** obj << Save Where Clause to Data Table

**Descrizione:** Crea una clausola WHERE dai criteri di filtro e la salva come una proprietà della tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Data Table;

```

### Save Where Clause to Formula Column

**Sintassi:** obj << Save Where Clause to Formula Column

**Descrizione:** Crea una colonna indicatore con una formula equivalente ai criteri del filtro. Le righe che soddisfano i criteri del filtro avranno un valore pari a 1, mentre tutte le altre righe avranno un valore pari a 0.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Formula Column;

```

### Save Where Clause to Journal

**Sintassi:** obj << Save Where Clause to Journal

**Descrizione:** Crea la clausola WHERE dai criteri dei filtri e aggiungila al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Journal;

```

### Save Where Clause to Row State Column

**Sintassi:** obj << Save Where Clause to Row State Column

**Descrizione:** Crea una colonna di stato delle righe che abbia una formula equivalente ai criteri dei filtri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Row State Column;

```

### Save Where Clause to Script Window

**Sintassi:** obj << Save Where Clause to Script Window

**Descrizione:** Crea una clausola WHERE dai criteri dei filtri e aggiungila alla finestra dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Script Window;

```

### Save and restore current row states

**Sintassi:** obj << Save and restore current row states( state=0|1 )

**Descrizione:** Salva gli stati correnti delle righe per la tabella di dati, quindi ripristina tali stati alla chiusura del filtro sui dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Save and Restore Current Row States( 1 ),
	Add Filter( Columns( :Region ), Where( :Region == "N" ) )
);
Wait( 1 );
obj << Close;

```

### Select Missing

**Sintassi:** obj << Select Missing( state=0|1 )

**Descrizione:** Aggiunge le righe mancanti alla selezione per questo filtro sulla colonna continua.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :CO ), Where( :CO >= 9 & :CO < 15 ) ) );
Wait( 1 );
obj << (Filter Column( :CO ) << Select Missing);

```

### Set Include

**Sintassi:** obj << Set Include( state=0|1 )

**Descrizione:** Seleziona o deseleziona la modalità di inclusione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Include( 1 );
Wait( 1 );
obj << set Include( 0 );

```

### Set Select

**Sintassi:** obj << Set Select( state=0|1 )

**Descrizione:** Seleziona o deseleziona la modalità di selezione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set select( 1 );
Wait( 1 );
obj << set select( 0 );

```

### Set Show

**Sintassi:** obj << Set Show( state=0|1 )

**Descrizione:** Seleziona o deseleziona la modalità di visualizzazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Show( 1 );
Wait( 1 );
obj << set Show( 0 );

```

### Show Controls

**Sintassi:** obj << Show Controls( state=0|1 )

**Descrizione:** Mostra o nasconde i controlli per modificare le opzioni del filtro sui dati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Controls( 0 );

```

### Show Counts

**Sintassi:** obj << Show Counts( state=0|1 )

**JMP Versione aggiunta:** 16

### Show Histograms and Bars

**Sintassi:** obj << Show Histograms and Bars( state=0|1 )

**Descrizione:** Show Histograms and Bars for filter columns where available

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) )
);
Wait( 1 );
obj << Show Histograms and Bars( 0 );

```

### Show Modes

**Sintassi:** obj << Show Modes( state=0|1 )

**Descrizione:** Mostra o nasconde i controlli per cambiare la modalità del filtro sui dati, che controlla il comportamento di selezione/visualizzazione/inclusione del filtro sui dati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Modes( 0 );

```

### Show Subset

**Sintassi:** obj << Show Subset

**Descrizione:** Mostra i dati filtrati in una finestra separata di tabelle di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
obj << Show Subset;

```

### Stretch Width

**Sintassi:** obj << Stretch Width( "Manual" | "Window" )

**Descrizione:** Imposta il comportamento di estensione orizzontale del filtro. Di default, la larghezza del filtro può essere modificata manualmente. Se è impostata su “Finestra”, la larghezza aumenta o diminuisce in base alle dimensioni della finestra.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H Splitter Box(
			Size( 1200, 500 ),
			V Scroll Box(
				dt << Data Filter(
					Local,
					Stretch Width( "Window" ),
					Add Filter( columns( :sex ), Where( :sex == "F" ) )
				),
				<<Set Stretch( "Off", "Fill" )
			),
			H Splitter Box(
				dt << Bubble Plot(
					X( :weight ),
					Y( :height ),
					Fit To Window( "On" ),
					Sizes( :age ),
					Title Position( 0, 0 )
				),
				dt << Graph Builder(
					Size( 525, 456 ),
					Show Control Panel( 0 ),
					Fit To Window( "On" ),
					Variables( X( :weight ), Y( :age ) ),
					Elements( Box Plot( X, Y, Legend( 4 ) ) ),

				),

			)
		)
	)
);

```

### Title

**Sintassi:** obj << Title

### Unstructured Text

**Sintassi:** obj << Unstructured Text

**JMP Versione aggiunta:** 16

### Use Floating Window

**Sintassi:** obj << Use Floating Window( state=0|1 )

**Descrizione:** Determina se questo filtro sui dati utilizza una finestra mobile visualizzata sopra la rispettiva tabella di dati e le finestre correlate, oppure una finestra posizionabile normalmente con le altre finestre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Use Floating Window;

```

### Where

**Sintassi:** obj << Where

**Descrizione:** Seleziona le righe in base al criterio indicato per questo filtro sulla colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));

```

### columns

**Sintassi:** obj << columns( columns )

**Descrizione:** Aggiungi colonne filtro. È un comando alternativo per aggiungere colonne filtro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );

```

