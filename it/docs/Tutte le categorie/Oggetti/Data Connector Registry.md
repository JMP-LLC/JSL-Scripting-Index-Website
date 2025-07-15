# Data Connector Registry



## Messaggi degli elementi

### Get

**Sintassi:** Data Connector Registry() &lt;&lt; Get ( name )

**Descrizione:** Recupera un connettore dati dal registro

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Sintassi:** Data Connector Registry() &lt;&lt; Get Available()

**Descrizione:** Recupera un elenco di connettori dati disponibili nel registro

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Sintassi:** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**Descrizione:** Ottiene i metadati del connettore dati dal registro

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Sintassi:** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**Descrizione:** Aggiunge un connettore dati al registro

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**Sintassi:** Data Connector Registry() &lt;&lt; Unregister ( name )

**Descrizione:** Rimuove un connettore dati dal registro

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

