# Data Connector Registry



## Mensajes del elemento

### Get

**Sintaxis:** Data Connector Registry() &lt;&lt; Get ( name )

**Descripción:** Recupera un conector de datos del registro.

**JMP Versión agregada:** 18

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Sintaxis:** Data Connector Registry() &lt;&lt; Get Available()

**Descripción:** Recupera una lista de los conectores de datos disponibles en el registro.

**JMP Versión agregada:** 18

```jsl

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Sintaxis:** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**Descripción:** Obtiene metadatos del conector de datos del registro.

**JMP Versión agregada:** 18

```jsl

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Sintaxis:** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**Descripción:** Agrega un conector de datos al registro.

**JMP Versión agregada:** 18

```jsl

Data Connector Registry() << Register(	Path( "$DOCUMENTS/my connector.jmpdc" ),	Name( "My Data Connector" ));

```

### Unregister

**Sintaxis:** Data Connector Registry() &lt;&lt; Unregister ( name )

**Descripción:** Quita un conector de datos del registro.

**JMP Versión agregada:** 18

```jsl

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

