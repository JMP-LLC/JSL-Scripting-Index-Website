# Data Connector Registry



### Get

**Syntax:** Data Connector Registry() << Get ( name )

**Description:** Retrieves a data connector from the registry

**JMP Version Added:** 18

```

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Syntax:** Data Connector Registry() << Get Available()

**Description:** Retrieves a list of available data connectors in the registry

**JMP Version Added:** 18

```

Names Default To Here( 1 );

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Syntax:** Data Connector Registry() << Get Metadata ( name )

**Description:** Gets data connector metadata from the registry

**JMP Version Added:** 18

```

Names Default To Here( 1 );

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Syntax:** Data Connector Registry() << Register( Path(path), <Name(name)>, <Description(Description)> )

**Description:** Adds a data connector to the registry

**JMP Version Added:** 18

```

Names Default To Here( 1 );

Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**Syntax:** Data Connector Registry() << Unregister ( name )

**Description:** Removes a data connector from the registry

**JMP Version Added:** 18

```

Names Default To Here( 1 );

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

