# Namespace



## Costruttori associati

### New Namespace

**Sintassi:** ns = New Namespace( <name>, <list of expressions> )

**Descrizione:** Crea uno spazio dei nomi dove tutte le funzioni e le variabili create sono definite solo all&apos;interno del nome specificato.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);

```

## Messaggi degli elementi

### Contains

**Sintassi:** obj << Contains( string )

**Descrizione:** Restituisce 1 se lo spazio dei nomi contiene l&apos;espressione stringa specificata e 0 in caso contrario.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Contains( "nObs" );

```

### Delete Namespace

**Sintassi:** nsref << Delete Namespace( < Force( boolean ) > )

**Descrizione:** Elimina questo spazio dei nomi.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Delete Namespace;
Show( nsref );

```

### First

**Sintassi:** obj << First

**Descrizione:** Restituisce l&apos;espressione stringa come primo elemento in questo spazio dei nomi.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << First;

```

### Get Contents

**Sintassi:** obj << Get Contents

**Descrizione:** Restituisce un elenco degli elementi in questo spazio dei nomi, dove ciascun elemento è un elenco a due voci, costituito dalla chiave e dal suo valore associato.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Contents;

```

### Get Keys

**Sintassi:** obj << Get Keys

**Descrizione:** Restituisce un elenco delle chiavi in questo spazio dei nomi, dove una chiave è una rappresentazione in forma di stringa di un singolo elemento contenuto nello spazio dei nomi.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Keys;

```

### Get Name

**Sintassi:** obj << Get Name

**Descrizione:** Restituisce il nome di questo spazio dei nomi.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
space name = nsref << Get Name;

```

### Get Value

**Sintassi:** obj << Get Value( string )

**Descrizione:** Restituisce il valore dell&apos;elemento specificato in questo spazio dei nomi. La chiave dell&apos;elemento è una stringa.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Value( "nObs" );

```

### Get Values

**Sintassi:** obj << Get Values

**Descrizione:** Restituisce un elenco dei valori che corrispondono a ciascun elemento in questo spazio dei nomi.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Values;

```

### Insert

**Sintassi:** obj << Insert( string, value )

**Descrizione:** Inserisce in questo spazio dei nomi un&apos;espressione stringa avente il valore specificato.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Insert( "X", 25 );
Show( nsref );

```

### Lock Namespace

**Sintassi:** obj << Lock Namespace( <string, | {string, ...}>* )

**Descrizione:** Blocca tutte le variabili, oppure le variabili con nome specificato, in questo spazio dei nomi e impedisce l&apos;aggiunta, la modifica e la rimozione di variabili.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace;
Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**Sintassi:** obj << N Items

**Descrizione:** Restituisce il numero di elementi contenuti in questo spazio dei nomi.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
n = nsref << N Items;

```

### Next

**Sintassi:** obj << Next( string )

**Descrizione:** Restituisce l&apos;espressione stringa come elemento successivo dopo la chiave specificata in questo spazio dei nomi.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Next( "addition" );

```

### Remove

**Sintassi:** obj << Remove( <string | {string, ...}>* )

**Descrizione:** Rimuove l&apos;espressione stringa specificata dallo spazio dei nomi.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Remove( "nObs" );
Show( nsref );

```

### Show Contents

**Sintassi:** obj << Show Contents

**Descrizione:** Mostra il contenuto di uno spazio dei nomi del log di JMP.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Show Contents;

```

### Unlock Namespace

**Sintassi:** obj << Unlock Namespace( <string | {string, ...}>* )

**Descrizione:** Sblocca uno spazio dei nomi precedentemente bloccato con tutte le variabili che erano state bloccate al suo interno.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace( "nObs" );
Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); 
//Try again after unlocking. 
nsref << Unlock Namespace( "nObs" );
Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

