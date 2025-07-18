# Data Connector Registry



## Item Messages

### Get

**Syntax:** Data Connector Registry() &lt;&lt; Get ( name )

**Description:** Retrieves a data connector from the registry

**JMP Version Added:** 18

```jsl


dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Syntax:** Data Connector Registry() &lt;&lt; Get Available()

**Description:** Retrieves a list of available data connectors in the registry

**JMP Version Added:** 18

```jsl


list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Syntax:** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**Description:** Gets data connector metadata from the registry

**JMP Version Added:** 18

```jsl


metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Syntax:** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**Description:** Adds a data connector to the registry

**JMP Version Added:** 18

```jsl


Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**Syntax:** Data Connector Registry() &lt;&lt; Unregister ( name )

**Description:** Removes a data connector from the registry

**JMP Version Added:** 18

```jsl


dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

