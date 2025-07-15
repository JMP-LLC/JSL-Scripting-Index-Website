# JMP Live Result



## Mensajes del elemento

### As Scriptable

**Sintaxis:** jmplivereport = jmpliveresult &lt;&lt; As Scriptable()

**Descripción:** Dependiendo de la operación que provocó el resultado de JMP Live, devuelve un informe de JMP Live, carpeta de JMP Live o publicación de JMP Live para poder realizar más operaciones de scripts.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

### Get Error Message

**Sintaxis:** messagetext = jmpliveresult &lt;&lt; Get Error Message()

**Descripción:** Obtiene cualquier mensaje generado por la última operación como una cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**Sintaxis:** statuscode = jmpliveresult &lt;&lt; Get HTTP Status()

**Descripción:** Obtiene el código de estado HTTP de la última operación. Se trata de un código de enteros estándar del sector.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**Sintaxis:** liveconnection = jmpliveresult &lt;&lt; Get JMP Live()

**Descripción:** Recupera el objeto de conexión de JMP Live subyacente.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
secondliveconnection = jmpliveresult << Get JMP Live();

name = secondliveconnection << Get Connection Name();
Write( "\!nConnection Name: ", name );

```

### Get Response Type

**Sintaxis:** responsevalue = jmpliveresult &lt;&lt; Get Response Type()

**Descripción:** Obtiene el tipo de respuesta generada por la última operación como una cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

### Succeeded

**Sintaxis:** success = jmpliveresult &lt;&lt; Succeeded()

**Descripción:** Devuelve si la última acción se realizó correctamente (1) o no (0).

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

