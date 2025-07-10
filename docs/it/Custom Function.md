# Custom Function



### Custom Format Category

**Sintassi:** f << Custom Format Category(1|0)

**Descrizione:** Tratta la funzione personalizzata come un formato personalizzato. Specificare 0 per escludere la funzione dal menu del formato personalizzato.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );

```

### Description

**Sintassi:** obj << Description( text )

**Descrizione:** Imposta la descrizione per la funzione personalizzata. La descrizione sarà visualizzata nell&apos;indice di scripting e nelle descrizioni dei comandi.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**Sintassi:** f << Example(example text | Expr(example JSL code), <example name>)

**Descrizione:** Aggiunge un esempio che mostra come utilizzare la funzione in modo efficace. L&apos;esempio deve essere inviato come stringa di testo o codice JSL impaginato con testo a capo con il comando Espr. È possibile inviare il messaggio più volte per aggiungere più di un esempio.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**Sintassi:** f << Formula Category(name|""|1|0)

**Descrizione:** Include la funzione nella categoria specificata dell&apos;Editor delle formule. Se specificata, questa funzione sarà aggiunta al termine della categoria corrispondente. Se la categoria non esiste, sarà creata una nuova categoria. Specificare 0 o lasciare la stringa vuota per non mostrare la funzione nell&apos;albero dell&apos;editor delle formule.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**Sintassi:** f << Get Custom Format Category

**Descrizione:** Ottiene la categoria di formato personalizzato per la funzione personalizzata.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );
myAdd << Get Custom Format Category;

```

### Get Description

**Sintassi:** f << Get Description

**Descrizione:** Ottiene la descrizione per la funzione personalizzata.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );
myAdd << Get Description;

```

### Get Examples

**Sintassi:** f << Get Examples

**Descrizione:** Recupera l&apos;elenco di esempi come stringhe

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );
myAdd << Get Examples;

```

### Get Formula Category

**Sintassi:** f << Get Formula Category

**Descrizione:** Restituisce la categoria di editor delle formule di cui dovrebbe fare parte la funzione, se applicabile.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );
myAdd << Get Formula Category;

```

### Get Function

**Sintassi:** f << Get Function

**Descrizione:** Recupera la definizione della funzione.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Function;

```

### Get Name

**Sintassi:** f << Get Name

**Descrizione:** Recupera il nome della funzione.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Name;

```

### Get Namespace

**Sintassi:** f << Get Namespace

**Descrizione:** Recupera lo spazio dei nomi della funzione.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Namespace;

```

### Get Parameters

**Sintassi:** f << Get Parameters

**Descrizione:** Recupera l&apos;elenco di parametri.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );
myAdd << Get Parameters;

```

### Get Prototype

**Sintassi:** f << Get Prototype

**Descrizione:** Ottiene il prototipo visualizzato per questa funzione nell&apos;indice di scripting

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );
myAdd << Get Prototype;

```

### Get Result Type

**Sintassi:** f << Get Result Type

**Descrizione:** Ottiene il tipo di risultato della funzione.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );
myAdd << Get Result Type;

```

### Get Scripting Index Category

**Sintassi:** f << Get Scripting Index Category

**Descrizione:** Ottiene la categoria per la funzione personalizzata nell&apos;indice di scripting.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );
myAdd << Get Scripting Index Category;

```

### Get Transform Category

**Sintassi:** f << Get Transform Category

**Descrizione:** Ottiene la categoria di trasformazione per la funzione personalizzata.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );
myAdd << Get Transform Category;

```

### Parameter

**Sintassi:** f << Parameter(typename | {typename1, typename2, ...}, hint text)

**Descrizione:** Aggiungere informazioni su un parametro della funzione. Inviare questo messaggio una volta per ogni parametro assunto dalla funzione. Può essere utilizzato per la validazione del codice. Le scelte valide per i tipi di parametro sono Qualsiasi, Nome, Numero, Stringa, Elenco, Matrice e Stato della riga. Se sono possibili più tipi di risultato, specificare i nomi dei tipi in un elenco. Il testo di suggerimento è usato per indicare quali dati devono essere utilizzati nel rispettivo argomento nell&apos;editor delle formule. Specificare una stringa vuota se non si desidera alcun suggerimento.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**Sintassi:** obj << Prototype( text )

**Descrizione:** Imposta il prototipo visualizzato per questa funzione nell&apos;indice di scripting

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**Sintassi:** f << Result Type(typename | {typename1, typename2 ...})

**Descrizione:** Imposta il tipo di risultato della funzione. Può essere usato per la validazione del codice. Le scelte valide sono Qualsiasi, Nome, Numero, Stringa, Stato della riga, Elenco e Matrice. Se sono possibili più tipi di risultato, specificare i nomi dei tipi in un elenco.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**Sintassi:** f << Scripting Index Category(name|""|1|0)

**Descrizione:** Imposta la categoria per la funzione personalizzata nell&apos;indice di scripting. Ogni funzione personalizzata verrà elencata nella categoria Tutte le funzioni oltre alla categoria specificata. Specificare 0 o "" per elencare la funzione solo nella categoria Tutte le funzioni.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**Sintassi:** f << Transform Category(1|0)

**Descrizione:** Tratta la funzione personalizzata come una trasformazione della colonna. Specificare 0 per escludere la funzione dal menu di trasformazione della colonna.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );

```

