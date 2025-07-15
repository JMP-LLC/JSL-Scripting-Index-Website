# Data Connector Registry



## Elementmeldungen

### Get

**Syntax:** Data Connector Registry() &lt;&lt; Get ( name )

**Beschreibung:** Ruft einen Datenkonnektor aus der Registry ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Syntax:** Data Connector Registry() &lt;&lt; Get Available()

**Beschreibung:** Ruft eine Liste in der Registry verfügbarer Datenkonnektoren ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Syntax:** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**Beschreibung:** Ruft Datenkonnektor-Metadaten aus der Registry ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Syntax:** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**Beschreibung:** Fügt der Registry einen Datenkonnektor hinzu

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**Syntax:** Data Connector Registry() &lt;&lt; Unregister ( name )

**Beschreibung:** Entfernt einen Datenkonnektor aus der Registry

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

