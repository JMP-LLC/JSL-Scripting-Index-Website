# CAS



### CAS Connect

**Sintaxis:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Descripción:** Se conecta a un nuevo servidor CAS. La conexión CAS utiliza los argumentos URL, User name y Password, y opcionalmente Prompt y Session. Prompt puede ser IfNeeded, Always o Never. URL, User name y Password se pueden omitir si el argumento Prompt es IfNeeded o Always. El valor predeterminado de Prompt es Never. Session se puede utilizar para volver a conectarse a una sesión CAS existente. La sesión debe ser válida para la URL, el nombre de usuario y la contraseña utilizados en la conexión. El argumento opcional Certificates es útil para proporcionar certificados de confianza para conexiones https a CAS. El argumento opcional Verify Certificates o No Verify Certificates es útil para aceptar temporalmente los certificados autofirmados. El argumento opcional Proxy Server es útil para proporcionar un host proxy en un entorno proxy. El argumento opcional Proxy User es útil para proporcionar información de usuario y contraseña para un entorno proxy. El argumento opcional Bypass Proxy se utiliza para omitir el proxy para determinados hosts. El argumento opcional Timeout establece un valor de tiempo de espera para las operaciones de la conexión CAS. El argumento opcional Authorization Method especifica cómo se conecta JMP a CAS y es independiente de la implementación de CAS.

**JMP Versión agregada:** 15

```jsl

url = "http://myCasURL";cas = CAS Connect(	URL( url ),	Username( "myCas_user" ),	Prompt( Always ),	Certificates( "c:\mycerts.crt" ));

```

### CAS Delete Table

**Sintaxis:** CAS Delete Table(tablename, &lt;remove&gt;)

**Descripción:** Esta acción elimina la tabla del sistema de archivos. La tabla en memoria no se ve afectada. Si especifica Silenciar, se suprimirán los errores de una tabla no existente. Si especifica remACs, se eliminarán los controles de acceso para una tabla. Si especifica Quitar, también se eliminará la tabla de la memoria.

**JMP Versión agregada:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Sintaxis:** CAS Disconnect()

**Descripción:** Se desconecta de un servidor CAS y, opcionalmente, finaliza la sesión. De forma predeterminada, la sesión finaliza al desconectarse.

**JMP Versión agregada:** 15

```jsl

url = "http://myCasURL";cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );CAS Disconnect();

```

### CAS Export Data

**Sintaxis:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Descripción:** Exporta una tabla a un servidor CAS. jmp_data_table es la tabla de datos de JMP que se exporta, mientras que cas_libref y cas_dataset representan las ubicaciones de destino en el servidor CAS. El argumento con nombre opcional es Save(1|0). Cuando se exporta una tabla a CAS, no se guarda en el sistema de archivos CAS a menos que se utilice la opción Guardar. La mayoría de las acciones CAS tienen lugar en la memoria.

**JMP Versión agregada:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Sintaxis:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Descripción:** Obtiene una lista de conjuntos de datos CAS disponibles. Estos conjuntos de datos se encuentran en el sistema de archivos CAS. El argumento opcional limita la lista de conjuntos de datos a la librería CAS. Si no se utiliza ningún argumento, la lista de conjuntos de datos contiene el nombre del conjunto de datos completo (library.dataset). Si se utiliza el argumento, la lista de conjuntos de datos es una lista de nombres de conjuntos de datos.

**JMP Versión agregada:** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );datasets = CAS Get Data Sets( "casuser" );Show( datasets );cas << Delete Table( "Casuser", "Big Class" );datasets = CAS Get Data Sets( "casuser" );Show( datasets );

```

### CAS Get Libraries

**Sintaxis:** y = CAS Get Libraries()

**Descripción:** Obtiene una lista de librerías CAS disponibles.

**JMP Versión agregada:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );libraries = CAS Get Libraries();Show( libraries );

```

### CAS Import Data

**Sintaxis:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Descripción:** Importa una tabla de un servidor CAS. Los argumentos opcionales con nombre son Invisible(0|1), Private(0|1) y UseLabelsForVarNames(0|1).

**JMP Versión agregada:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Sintaxis:** CAS Is Connected

**Descripción:** Devuelve 1 si hay una conexión a un servidor CAS activa y 0 en caso contrario.

**JMP Versión agregada:** 15

```jsl

connected = CAS Is Connected();Show( connected );

```

### CAS Remove Table

**Sintaxis:** CAS Remove Table(tablename, &lt;delete&gt;)

**Descripción:** Esta acción anula la tabla en memoria. Esto no afecta al archivo que se creó con la acción de guardar. Si se especifica la eliminación, también se elimina la tabla del sistema de archivos.

**JMP Versión agregada:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Sintaxis:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Descripción:** Convierte texto JSON de una tabla CAS de SAS en una tabla de datos de JMP.

**JMP Versión agregada:** 15

```jsl

json ="\[{  "_ctb": true,  "label": "Selected Rows from Table BIG CLASS",  "name": "Fetch",  "title": "Selected Rows from Table BIG CLASS",  "schema": [    {      "format": "",      "label": "",      "name": "_Index_",      "type": "int",      "width": 4    },    {      "format": "",      "label": "",      "name": "name",      "type": "string",      "width": 9    },    {      "format": "",      "label": "",      "name": "age",      "type": "double",      "width": 8    },    {      "format": "",      "label": "",      "name": "sex",      "type": "string",      "width": 1    },    {      "format": "",      "label": "",      "name": "height",      "type": "double",      "width": 8    },    {      "format": "",      "label": "",      "name": "weight",      "type": "double",      "width": 8    }  ],  "rows": [    [      1,      "KATIE",      12,      "F",      59,      95    ],    [      2,      "LOUISE",      12,      "F",      61,      123    ],    [      3,      "JANE",      12,      "F",      55,      74    ],    [      4,      "JACLYN",      12,      "F",      66,      145    ],    [      5,      "LILLIE",      12,      "F",      52,      64    ],    [      6,      "TIM",      12,      "M",      60,      84    ],    [      7,      "JAMES",      12,      "M",      61,      128    ],    [      8,      "ROBERT",      12,      "M",      51,      79    ],    [      9,      "BARBARA",      13,      "F",      60,      112    ],    [      10,      "ALICE",      13,      "F",      61,      107    ],    [      11,      "SUSAN",      13,      "F",      56,      67    ],    [      12,      "JOHN",      13,      "M",      65,      98    ],    [      13,      "JOE",      13,      "M",      63,      105    ],    [      14,      "MICHAEL",      13,      "M",      58,      95    ],    [      15,      "DAVID",      13,      "M",      59,      79    ],    [      16,      "JUDY",      14,      "F",      61,      81    ],    [      17,      "ELIZABETH",      14,      "F",      62,      91    ],    [      18,      "LESLIE",      14,      "F",      65,      142    ],    [      19,      "CAROL",      14,      "F",      63,      84    ],    [      20,      "PATTY",      14,      "F",      62,      85    ]  ]}]\";dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**Sintaxis:** CAS Terminate Sessions

**Descripción:** Finaliza todas las sesiones CAS que pertenezcan al usuario actual.

**JMP Versión agregada:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Terminate Sessions();

```

### Current CAS Connection

**Sintaxis:** Current CAS Connection()

**Descripción:** Obtiene la conexión al servidor CAS actual.

**JMP Versión agregada:** 15

```jsl

connection = Current CAS Connection();Show( connection );

```

### New CAS Action

**Sintaxis:** action = New CAS Action(...)

**Descripción:** Crea una acción CAS.

**JMP Versión agregada:** 15

```jsl

echo = [=> ];echo["a"] = 1;echo["b"] = JSON Literal( true );echo["c"] = 3.141559;action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Sintaxis:** action = New CAS DATA Step Action(...)

**Descripción:** Crea una acción DATA step de CAS.

**JMP Versión agregada:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );

```

### New CAS Server

**Sintaxis:** cas = New CAS Server(&lt;...&gt;)

**Descripción:** Crea un nuevo servidor CAS.

**JMP Versión agregada:** 15

```jsl

url = "http://myCasURL";cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

