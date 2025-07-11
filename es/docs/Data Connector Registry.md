# Data Connector Registry



### Get

**Sintaxis:** Data Connector Registry() << Get ( name )

**Descripción:** Recupera un conector de datos del registro.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Sintaxis:** Data Connector Registry() << Get Available()

**Descripción:** Recupera una lista de los conectores de datos disponibles en el registro.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Sintaxis:** Data Connector Registry() << Get Metadata ( name )

**Descripción:** Obtiene metadatos del conector de datos del registro.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Sintaxis:** Data Connector Registry() << Register( Path(path), <Name(name)>, <Description(Description)> )

**Descripción:** Agrega un conector de datos al registro.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );

Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**Sintaxis:** Data Connector Registry() << Unregister ( name )

**Descripción:** Quita un conector de datos del registro.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

