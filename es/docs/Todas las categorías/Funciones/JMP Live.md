# JMP Live



### New JMP Live

**Sintaxis:** New JMP Live(Connection("Connection Name"), &lt;Prompt("No" | "If Needed")&gt;)

**Descripción:** Inicia una conexión con JMP Live utilizando la información de conexión guardada. La conexión es opcional y se utiliza, de forma predeterminada, la conexión predeterminada especificada en el Administrador de conexiones. El mensaje de solicitud es opcional y su valor predeterminado es "No". Los valores válidos para el mensaje de solicitud son "Sí", "No" y "Si es necesario". El valor "Sí" siempre solicita las credenciales de inicio de sesión. El valor "No" nunca solicita las credenciales de inicio de sesión, pero podría generar un error de autenticación. El valor "Si es necesario" solicita las credenciales solo si las que hay guardadas actualmente no son válidas. Devuelve un objeto de conexión de JMP Live.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

jmplive = New JMP Live();

```

#### Ejemplo 2

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

#### Ejemplo 3

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**Sintaxis:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**Descripción:** Crea contenido interactivo para publicarlo en JMP Live. 

	El primer parámetro es obligatorio y especifica los datos que se utilizarán para el contenido. Esos datos pueden ser un informe, una tabla de datos, un mapa o una imagen. 

	Título y Descripción se utilizan para personalizar el tipo de contenido que se va a publicar. El resto de los parámetros son opcionales y solo se utilizan para personalizar el contenido del informe. 

	Publicar datos indica si los datos utilizados en el informe se publican en JMP Live. De forma predeterminada, los datos del informe se publican.

	Habilitar advertencias indica si se deben habilitar las Advertencias de gráficos de control para el informe. De forma predeterminada, las Advertencias de gráficos de control están deshabilitadas. 

	Optimización se utiliza para personalizar la forma en que se publica el informe en JMP Live. De forma predeterminada, el informe se publica para permitir una mayor interactividad.

**JMP Versión agregada:** 17

#### Ejemplo 1

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

#### Ejemplo 2

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

#### Ejemplo 3

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

#### Ejemplo 4

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

