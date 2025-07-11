# JMP App



### Combine Windows

**Sintassi:** obj << Combine Windows( {list of reports or data tables}, {...} )

**Descrizione:** Combina l&apos;elenco specificato di report di piattaforme o tabelle di dati in un nuovo modulo. L&apos;applicazione non deve essere in esecuzione o in modifica.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
biv = Bivariate( Y( :weight ), X( :height ) );
app = JMP App();
app << Set Name( "Instant App" );
app << Combine Windows( {dist << Report, biv << Report} );
(app << Get Modules)[1] << Set Window Title( "My Report" );
app << Run;

```

### Debug

**Sintassi:** obj << Debug

**Descrizione:** Esegue l&apos;applicazione nel debugger.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );
app << Debug;

```

### Edit

**Sintassi:** obj << Edit

**Descrizione:** Modifica l&apos;applicazione o il dashboard nel costruttore.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;

```

### Get Modules

**Sintassi:** list = obj << Get Modules

**Descrizione:** Ottiene un elenco dei moduli definiti nell&apos;applicazione.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit Application;
app << Get Modules();

```

### Get Namespace

**Sintassi:** obj << Get Namespace

**Descrizione:** Ottiene lo spazio dei nomi per l&apos;istanza del modulo.

```js

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get Windows

**Sintassi:** obj << Get Windows

**Descrizione:** Restituisce un elenco di finestre aperte create come istanze di moduli dell&apos;applicazione. Si osservi che non verranno incluse altre finestre create da script dell&apos;applicazione usando Nuova finestra() o altre funzioni.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
app = JMP App();
Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;
app << Get Windows();

```

**Esempio 2**

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );
app << Run;
launcher = (app << Get Windows())[1];
launcher[Button Box( 1 )] << Click;
launcher[Button Box( 1 )] << Click;
app << Get Windows();

```

### Open File

**Sintassi:** obj << Open File( <path> )

**Descrizione:** Carica l&apos;applicazione dal file specificato.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
box = app << Edit Application;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Riavvia il Dashboard o l&apos;applicazione, creando una nuova copia in esecuzione dell&apos;applicazione.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Relaunch Analysis;

```

### Run

**Sintassi:** obj << Run

**Descrizione:** Esegue l&apos;applicazione o il dashboard.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Save a New Window() script

```js

Names Default To Here( 1 );
app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );
app << Run;
app << Save Script for All Objects;

```

### Save Script to Add-In

**Sintassi:** obj << Save Script to Add-In

**Descrizione:** Crea uno script (JSL) per generare questa analisi e lo carica nel Costruttore di add-in.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << "Save Script to Add-In";

```

### Save Script to Data Table

**Sintassi:** app << Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Data Table;

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Journal;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Script Window;

```

