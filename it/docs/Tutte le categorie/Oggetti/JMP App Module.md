# JMP App Module



## Messaggi degli elementi

### Create Instance

**Sintassi:** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**Descrizione:** Crea una istanza del modulo. I parametri sono passati alla funzione OnModuleLoad() definita nello script del modulo.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**Sintassi:** app = obj &lt;&lt; Get Application

**Descrizione:** Ottiene l&apos;applicazione a cui appartiene il modulo.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```

