# JMP App



## Messaggi degli elementi

### Combine Windows

**Sintassi:** obj &lt;&lt; Combine Windows( {list of reports or data tables}, {...} )

**Descrizione:** Combina l&apos;elenco specificato di report di piattaforme o tabelle di dati in un nuovo modulo. L&apos;applicazione non deve essere in esecuzione o in modifica.

```jsl

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

**Sintassi:** obj &lt;&lt; Debug

**Descrizione:** Esegue l&apos;applicazione nel debugger.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );
app << Debug;

```

### Edit

**Sintassi:** obj &lt;&lt; Edit

**Descrizione:** Modifica l&apos;applicazione o il dashboard nel costruttore.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;

```

### Get Modules

**Sintassi:** list = obj &lt;&lt; Get Modules

**Descrizione:** Ottiene un elenco dei moduli definiti nell&apos;applicazione.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit Application;
app << Get Modules();

```

### Get Namespace

**Sintassi:** obj &lt;&lt; Get Namespace

**Descrizione:** Ottiene lo spazio dei nomi per l&apos;istanza del modulo.

```jsl

app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get Windows

**Sintassi:** obj &lt;&lt; Get Windows

**Descrizione:** Restituisce un elenco di finestre aperte create come istanze di moduli dell&apos;applicazione. Si osservi che non verranno incluse altre finestre create da script dell&apos;applicazione usando Nuova finestra() o altre funzioni.

**JMP Versione aggiunta:** 14

#### Esempio 1

```jsl

app = JMP App();
Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;
app << Get Windows();

```

#### Esempio 2

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );
app << Run;
launcher = (app << Get Windows())[1];
launcher[Button Box( 1 )] << Click;
launcher[Button Box( 1 )] << Click;
app << Get Windows();

```

### Open File

**Sintassi:** obj &lt;&lt; Open File( &lt;path&gt; )

**Descrizione:** Carica l&apos;applicazione dal file specificato.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
box = app << Edit Application;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Riavvia il Dashboard o l&apos;applicazione, creando una nuova copia in esecuzione dell&apos;applicazione.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Relaunch Analysis;

```

### Run

**Sintassi:** obj &lt;&lt; Run

**Descrizione:** Esegue l&apos;applicazione o il dashboard.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Save a New Window() script

```jsl

app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );
app << Run;
app << Save Script for All Objects;

```

### Save Script to Add-In

**Sintassi:** obj &lt;&lt; Save Script to Add-In

**Descrizione:** Crea uno script (JSL) per generare questa analisi e lo carica nel Costruttore di add-in.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << "Save Script to Add-In";

```

### Save Script to Data Table

**Sintassi:** app &lt;&lt; Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Data Table;

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Journal;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Script Window;

```

