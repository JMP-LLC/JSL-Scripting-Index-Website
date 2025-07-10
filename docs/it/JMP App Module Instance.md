# JMP App Module Instance



### Create Objects

**Sintassi:** obj << Create Objects

**Descrizione:** Crea gli oggetti dell&apos;istanza del modulo.  Questa operazione può essere effettuata solo all&apos;interno dello script per un modulo di applicazione JMP.

```js

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Get Box

**Sintassi:** obj << Get Box

**Descrizione:** Ottiene il riquadro di visualizzazione per l&apos;istanza del modulo.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
inst = modules[1] << Create Instance;
inst << Get Box;

```

### Get Namespace

**Sintassi:** obj << Get Namespace

**Descrizione:** Ottiene lo spazio dei nomi per l&apos;istanza del modulo.

```js

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**Sintassi:** obj << Get User Data

**Descrizione:** Restituisce i dati utente associati all&apos;istanza del modulo.

```js

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Set User Data

**Sintassi:** inst << Set User Data(expr)

**Descrizione:** Memorizza un valore JSL nell&apos;istanza del modulo della app JMP; il valore può essere un numero, una stringa, un elenco, un array associativo o un altro tipo di JSL.

```js

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

