# Class



## Costruttori associati

### Define Class

**Sintassi:** Define Class("class name", <Base Class{ "base class name", ... }>, <Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )>, { method* | member* | function* } )

**Descrizione:** Crea una classe in cui tutti i metodi e le variabili delle classi creati sono definito solo entro il nome della classe specificato.

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

## Messaggi degli elementi

### Clone

**Sintassi:** obj << Clone

**Descrizione:** Clona il contenuto di un riferimento della classe per creare un nuovo oggetto

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Contains( string )

**Descrizione:** Restituisce 1 se la classe contiene l&apos;espressione stringa specificata e 0 in caso contrario.

**JMP Versione aggiunta:** 14

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

**Sintassi:** clref << Delete Class( < Force( boolean ) > )

**Descrizione:** Elimina questa classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Equal( classref )

**Descrizione:** Confronta l&apos;argomento di riferimento della classe con il riferimento della classe target per l&apos;uguaglianza

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << First

**Descrizione:** Restituisce l&apos;espressione stringa come primo elemento in questa classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Get Contents

**Descrizione:** Restituisce un elenco degli elementi in questa classe. Ciascun elemento è un elenco a due voci, costituito dalla chiave e dal suo valore associato.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Get Keys

**Descrizione:** Restituisce un elenco delle chiavi in questa classe. Una chiave è una rappresentazione in forma di stringa di un singolo elemento contenuto nella classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Get Name

**Descrizione:** Restituisce il nome di questa classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Get Value( string )

**Descrizione:** Restituisce il valore dell&apos;elemento specificato in questa classe. La chiave dell&apos;elemento è una stringa.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Get Values

**Descrizione:** Restituisce un elenco dei valori che corrispondono a ciascun elemento in questa classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Insert( string, value )

**Descrizione:** Inserisce in questa classe un&apos;espressione stringa avente il valore specificato.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Lock Class( <string, | {string, ...}>* )

**Descrizione:** Blocca tutti i membri del metodo o i membri nominati specificati in questa classe ed evita che vengano aggiunti, modificati o rimossi.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << N Items

**Descrizione:** Restituisce il numero di elementi contenuti in questa classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Next( string )

**Descrizione:** Restituisce l&apos;espressione stringa come elemento successivo dopo la chiave specificata in questa classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Remove( <string | {string, ...}>* )

**Descrizione:** Rimuove l&apos;espressione stringa specificata dalla classe.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Show Contents

**Descrizione:** Mostra il contenuto di una classe del log di JMP.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Unlock Class( <string | {string, ...}>* )

**Descrizione:** Sblocca una classe bloccata contenente i membri del metodo a cui era stato evitato di essere aggiunti, modificato o rimossi.

**JMP Versione aggiunta:** 14

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

