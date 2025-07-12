# HTTP



## HTTPRequest

### Mensajes del elemento

#### Authentication Method

**Sintaxis:** obj << Authentication Method(method)

**Descripción:** Aplica un método de autenticación. Los valores válidos son:



	NINGUNO         - Ninguna autenticación HTTP



	BÁSICO        - Autenticación HTTP básica



	KERBEROS     - Autenticación HTTP Kerberos



	NEGOTIATE    - Autenticación HTTP Negotiate (SPNEGO)



	NTLM         - Autenticación HTTP NTLM



	CUALQUIERA          - Todos los tipos configurados (predeterminado)



	CUALQUIERASEGURO      - Todos los tipos, excepto Básico



	PREDETERMINADO      - La autenticación predeterminada



De forma predeterminada, JMP y el servicio web negocian el método de autenticación más seguro.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Authentication Method( "KERBEROS" );

```

#### Blob

**Sintaxis:** obj << Blob( binary data, <content-type> )

**Descripción:** Esto establecerá un valor Blob en la solicitud. El valor Blob se utilizará como cuerpo del documento. El encabezado de tipo de contenido de la solicitud se establecerá automáticamente en "Content-Type: application/octet-stream".

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

blob = "Testing, Testing 1, 2, 3";
file = Save Text File( "$TEMP/test_blob", blob );
request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	Blob( Load Text File( file ) )
);
data = request << Send;

```

#### Bypass Proxy

**Sintaxis:** obj << Bypass Proxy(localhost)

**Descripción:** La lista de hosts separados por comas que no utilizan un proxy, si se especifica uno. El único comodín es un carácter * sencillo, que coincide con todos los hosts, y deshabilita el proxy eficazmente. Cada nombre de la lista coincide bien como dominio que contiene el nombre de host, o bien como el propio nombre de host. Por ejemplo, local.com podría coincidir con local.com, local.com:80 y www.local.com, pero no con www.notlocal.com.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Proxy Server( "http://my_proxy.com" );
request << Proxy User( "clark%20kent:superman" );
request << Bypass Proxy( "localhost" );

```

#### Certificates

**Sintaxis:** obj << Certificates(certificate file)

**Descripción:** Utilice el archivo de certificado especificado para la verificación. El archivo puede contener varios certificados CA. Los certificados deben estar en formato PEM.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**Sintaxis:** obj << Cookie([[ key=> value ]]

**Descripción:** Establecer una cookie en la solicitud.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Cookie( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Cookie File

**Sintaxis:** obj << Cookie File(<path>, <"replace" | "rename" | "append">)

**Descripción:** Especifique un archivo de cookies alternativo.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**Sintaxis:** obj << Curlrc(<true | false>)

**Descripción:** Configura la solicitud para utilizar un archivo .curl estándar.

El archivo .curlrc (_curlrc en Windows) contiene opciones predeterminadas utilizadas para curl.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc( "true" );

```

#### Curlrc File

**Sintaxis:** obj << Curlrc File(<path>)

**Descripción:** Configura la solicitud para utilizar un archivo .curl alternativo.

El archivo .curlrc (_curlrc en Windows) contiene opciones predeterminadas utilizadas para curl.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );
request << Curlrc( "true" );

```

#### DNS Timeout

**Sintaxis:** obj << DNS Timeout(seconds)

**Descripción:** El tiempo de espera predeterminado de la caché del DNS para la conexión es de 60 segundos. Este valor se puede ajustar para adaptarse al almacenamiento en caché del DNS. Establézcalo en 0 para deshabilitar el almacenamiento en caché por completo o en -1 para que las entradas ya almacenadas en caché permanezcan en la memoria.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url(
		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"
	),
	Method( "GET" ),
	DNS Timeout( 120 )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### Decode64 Char

**Sintaxis:** obj << Decode64 Char( value )

**Descripción:** Descodificar la cadena usando la codificación Base 64

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Decode64 Char(
	"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4="
);

```

#### Download

**Sintaxis:** obj << Download( path, <"replace" | "rename" | "append"> )

**Descripción:** Descarga la respuesta HTTP en un archivo. Resulta útil para descargar archivos de un servicio web. La opciónreplace sobrescribe cualquier archivo existente. La opción rename utiliza nombres de archivos secuenciales cuando se encuentra un nombre duplicado (archivo, archivo(1), archivo(2)...). La opciónappend añade al archivo existente. Al utilizar show progress, se muestra un barra de progreso cancelable con el porcentaje del archivo descargado.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	URL(
		"https://community.jmp.com/kvoqx44227/attachments/kvoqx44227/sample-data/49/1/BlueBirds.jmp"
	),
	Method( "Get" )
);
file = request << Download( "$TEMP/BlueBirds.jmp", "replace", "show progress" );
If( !Is Empty( file ),
	Open( file )
);

```

#### Encode64 Char

**Sintaxis:** obj << Encode64 Char( value )

**Descripción:** Codificar la cadena usando la codificación Base 64

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Encode64 Char( "Man is distinguished, not only by his reason, but ..." );

```

#### File

**Sintaxis:** obj << File ( path, <content-type> )

**Descripción:** De este modo se establecerá un valor Archivo en la solicitud. El contenido del archivo se utilizará como cuerpo del documento. El encabezado de tipo de contenido de la solicitud se establecerá automáticamente en el contenido correspondiente en función de la extensión del archivo o application/octet-stream si no se encuentra.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

my_file = Save Text File( "$TEMP/test_file.txt", "Testing, Testing 1, 2, 3" );
request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	File( my_file )
);
data = request << Send;

```

#### Form

**Sintaxis:** obj << Form(Fields([[ key=> value ]], <URI Encode(1 | 0 | Safe(...))>), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**Descripción:** Establece el valor de los datos del formulario en la solicitud. El formulario se utilizará como cuerpo del documento. Los datos del formulario pueden tener elementos de campos y archivos.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

file1 = Save Text File( "$TEMP/file1", "hello world 1" );
file2 = Save Text File( "$TEMP/file2", "hello world 2" );
file3 = Save Text File( "$TEMP/file3", "hello world 3" );
file4 = Save Text File( "$TEMP/file4", "hello world 4" );
request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	Form(
		Fields(
			[["A" => "a", "B" => "b", "C" => "c", "1" => "one", "2" => "two", "3" => "three"]
			]
		),
		Files( {"group 1", {file1, file2}, "group 2", {file2, file4}} )
	)
);
data = request << Send;

```

#### Get Certificate Info

**Sintaxis:** obj << Get Certificate Info

**Descripción:** Muestra detalles del certificado, como quién lo emitió, cuándo caduca y otra información para garantizar que el certificado es de confianza.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "https://google.com" ) );
request << Get Certificate Info;

```

#### Get Last URL

**Sintaxis:** obj << Get Last URL

**Descripción:** Obtiene la última URL utilizada en la solicitud. Es útil para buscar la URL redirigida.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**Sintaxis:** mimetype = obj << Get MIME Type

**Descripción:** Después de utilizar Enviar (o Descargar) con una solicitud, esto puede utilizarse para recuperar el tipo MIME de los datos devueltos.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
request = New HTTP Request( URL( url ), Method( "GET" ) );
request << Send;
Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**Sintaxis:** obj << Get Last Method

**Descripción:** Obtiene el último método HTTP utilizado en la solicitud.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" ),
	Password( "cm9zczpBYmMxMjM=" ),

);
request << Send;
Write( Char( request << Get Method ) || "\!n" );

```

#### Get Response Headers

**Sintaxis:** obj << Get Response Headers

**Descripción:** Los encabezados de respuesta son un arreglo asociativo de pares clave/valor devueltos después de que se haya enviado una solicitud. Aquí puede encontrar las definiciones de encabezados HTTP: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Las claves Date, Expires y Last-Modified se convertirán en fechas JMP. Las claves Age y Content-Length se convertirán en números. Todos los demás valores serán un carácter.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people" ), Method( "GET" ) );
json = request << Send;
                                          
response_headers = request << Get Response Headers;
keys = response_headers << Get Keys;
For( i = 1, i <= N Items( keys ), i++,
	key = keys[i];
	value = response_headers[key];
	Write( "Key=> " || Char( key ) || ", Value=> " || Char( value ) || "\!n" );
);

```

#### Get Status

**Sintaxis:** obj << Get Status

**Descripción:** Devuelve el estado de la solicitud después de Send. El estado es el estado HTTP si no hay errores de conexión. De lo contrario, devuelve el estado de conexión. 200-299 es correcto.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/1" ), Method( "GET" ) );
data = request << Send;
If( request << Get Status == 200,
	Write( "Success!!!!\!n" || Char( data ) || "\!n" )
);

```

#### Get Status Message

**Sintaxis:** obj << Get Status Message

**Descripción:** Devuelve el mensaje de estado de la solicitud después de un mensaje de Send. El mensaje de estado es el mensaje de estado HTTP si no hay errores de conexión. De lo contrario, se devuelve un mensaje de estado de conexión. Un estado de 200-299 es correcto.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**Sintaxis:** obj << Get Status Msg

**Descripción:** Devuelve el mensaje de estado de la solicitud después de Send. Se trata de un alias de GetStatusMessage. El mensaje de estado es el mensaje de estado HTTP si no hay errores de conexión. De lo contrario, devuelve el mensaje de estado de conexión. Un estado de 200-299 es correcto.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**Sintaxis:** obj << Get Warning Headers

**Descripción:** Obtiene los valores de encabezados de advertencia (si hubiera) de la solicitud.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people" ), Method( "GET" ) );
json = request << Send;
                                          
warning_headers = request << Get Warning Headers;
If( !Is Empty( warning_headers ),
	keys = warning_headers << Get Keys;
	For( i = 1, i <= N Items( keys ), i++,
		key = keys[i];
		value = response_headers[key];
		Write( "Key=> " || Char( key ) || ", Value=> " || Char( value ) || "\!n" );
	);
);

```

#### GetVersion

**Sintaxis:** request << GetVersion

**Descripción:** Devuelve la versión actual de cURL que se utiliza en JMP

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**Sintaxis:** obj << Has Client Error

**Descripción:** Verdadero si el estado HTTP es 400-499.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json = request << Send;
If( request << Has Client Error,
	msg = "Has Client Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Error

**Sintaxis:** obj << Has Error

**Descripción:** Verdadero si el estado HTTP es 400-599.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json = request << Send;
If( request << Has Error,
	msg = "Has Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Information

**Sintaxis:** obj << Has Information

**Descripción:** Verdadero si el estado HTTP es 100-199.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/20" ), Method( "GET" ) );
request << Send;
If( request << Has Information,
	msg = "Has Information: " || Char( request << GetStatusMessage ),
	msg = "No Status Information available."
);
Write( msg );

```

#### Has Redirection

**Sintaxis:** obj << Has Redirection

**Descripción:** Verdadero si el estado HTTP es 300-399.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
If( request << Has Redirection,
	msg = "Has Redirection: " || Char( request << Get Status Message ),
	msg = "No Redirection ocurred."
);
Write( msg );

```

#### Has Server Error

**Sintaxis:** obj << Has Server Error

**Descripción:** Verdadero si el estado HTTP es 500-599.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json = request << Send;
If( request << Has Server Error,
	msg = "Has Server Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Warning

**Sintaxis:** obj << Has Warning

**Descripción:** Verdadero si el estado HTTP tiene encabezados de advertencia

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people" ), Method( "GET" ) );
json = request << Send;
                                          
If( !request << Has Warning,
	warning_headers = request << Get Warning Headers;
	keys = warning_headers << Get Keys;
	For( i = 1, i <= N Items( keys ), i++,
		key = keys[i];
		value = response_headers[key];
		Write( "Key=> " || Char( key ) || ", Value=> " || Char( value ) || "\!n" );
	);
);

```

#### Headers

**Sintaxis:** obj << Headers({header 1}, {header 2} | [[ key=> value, key2=>value2 ]])

**Descripción:** Aquí puede encontrar las definiciones de encabezado HTTP:

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Se utiliza para especificar distinta información meta sobre la solicitud y contribuir a que el servicio web responda de forma adecuada. Estos valores deben considerarse "sugerencias" para el servicio web, puesto que es posible que elija no respetar los parámetros. Consulte la API del servicio web para verificar la compatibilidad. Para la solicitud, se utiliza "Content-Type: application/json" al especificar valores JSON, se utiliza "Content-Type: application/octet-stream" al especificar valores Blob, se utiliza "Content-Type: [extension/mime type mapping]" con valores de archivo y se utilizan "Content-Type: application/x-www-form-urlencoded" o "Content-Type: multipart/form-data" dependiendo del contenido del formulario. Los encabezados también "sugieren" al servicio web el tipo de datos que debe devolverse. Los encabezados comunes son "Accept: application/json", "Accept: application/xml", "Accept: text/csv" y "Accept: text/html". Los valores de los encabezados se pueden especificar como una lista JSL de datos de caracteres o como un arreglo asociativo de pares clave/valor de caracteres.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

url = "https://api.nasa.gov/planetary/apod";
fields = [=> ];
fields["api_key"] = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
                                          
request = New HTTP Request(
	URL( url ),
	Method( "GET" ),
	Query String( fields ),
	Headers( {"Accept: application/json"} )
);
json = request << Send;
Write( json || "\!n" );

```

#### Insecure

**Sintaxis:** obj << Insecure(<"true"> | <"false">) | <"prompt">

**Descripción:** De forma predeterminada, la validación del certificado está activada. Si se establece en true, se permitirá completar solicitudes sin validar el certificado. Si se establece en prompt, se permitirá que un usuario acepte el certificado y complete la solicitud según sea necesario.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url(
		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"
	),
	Method( "GET" ),
	Insecure( "true" )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### Is Success

**Sintaxis:** obj << Is Success

**Descripción:** Verdadero si el estado HTTP es 200-299.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

url = "https://api.nasa.gov/planetary/apod";
fields = [=> ];
fields["api_key"] = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
                                          
request = New HTTP Request( URL( url ), Method( "GET" ), Query String( fields ) );
json = request << Send;
If( request << Is Success,
	JSON To Data Table( json )
);

```

#### Is Successful

**Sintaxis:** obj << Is Successful

**Descripción:** Verdadero si el estado HTTP es 200-299.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

url = "https://api.nasa.gov/planetary/apod";
fields = [=> ];
fields["api_key"] = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
                                          
request = New HTTP Request( URL( url ), Method( "GET" ), Query String( fields ) );
json = request << Send;
If( request << Is Successful,
	aa = Parse JSON( json );
	If( Contains( aa, "url" ),
		request << Reset( URL( aa["url"] ), Method( "GET" ) );
		bytes = request << Send;
		img = Open( bytes, jpg );
		obj = New Window( aa["title"], img );
	);
);

```

#### Is Valid

**Sintaxis:** obj << Is Valid

**Descripción:** Es la solicitud válida

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Valid();

```

#### Is Verbose

**Sintaxis:** obj << Is Verbose

**Descripción:** ¿Está la solicitud registrando mensajes de estado automáticamente?

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Verbose();

```

#### JSON

**Sintaxis:** obj << JSON( json data )

**Descripción:** De este modo se establecerá un valor de cadena JSON en la solicitud. La cadena JSON se utilizará como cuerpo del documento. El encabezado de tipo de contenido de la solicitud se establecerá automáticamente en "Content-Type: application/json". Puede utilizar el método As JSON Expr para convertir un arreglo asociativo en una cadena JSON.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" )
);
data = request << Send;

```

#### Max Redirect

**Sintaxis:** obj << Max Redirect(...)

**Descripción:** Especificar el número de redirecciones que seguirá la solicitud.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Query String( [["username" => "bob", "address" => "12345"]] ),
	MaxRedirect( 2 )
);
data = request << Send;

```

#### Method

**Sintaxis:** obj << Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**Descripción:** Establece el método de la solicitud. Actualmente, se admiten Get, Post, Put, Patch, Delete y Head.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
dt = JSON To Data Table( json );
dt << Set Name( "Swapi.co Planets" );
dt << Delete Columns( :next, :count, :previous );
dt << Select Where( :name == "" );
dt << Delete Rows();

```

#### Netrc

**Sintaxis:** obj << Netrc(<true | false>)

**Descripción:** Configura la solicitud para utilizar un archivo .netrc estándar.

El archivo .netrc (_netrc en Windows) contiene datos para iniciar sesión en un host remoto en la red.

Este archivo reside en el directorio principal del usuario en el equipo que inicie la transferencia del archivo.

Sus permisos deben establecerse para no permitir el acceso de lectura por grupo y otros.

Se reconocen los siguientes tokens. Deben separarse mediante un espacio, tabulación o caracteres de nueva línea:





equipo



	hace referencia al nombre del equipo remoto. El proceso de inicio de sesión automático busca el archivo .netrc para un token de equipo que coincida con el equipo remoto especificado. Una vez lograda la coincidencia, se procesan los tokens .netrc posteriores, deteniéndose al alcanzar el EOF o al encontrarse otro token de equipo.



inicio de sesión



	hace referencia a un usuario del equipo remoto. Si este token está presente, el proceso de inicio de sesión automático iniciará un inicio de sesión con el nombre especificado.



contraseña



	proporciona una contraseña. Si este token está presente, el proceso de inicio de sesión automático proporcionará la cadena especificada si el servidor remoto requiere una contraseña como parte del proceso de inicio de sesión.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc( "true" );

```

#### Netrc File

**Sintaxis:** obj << Netrc File(<path>)

**Descripción:** Configura la solicitud para utilizar un archivo .netrc alternativo.

El archivo .netrc (_netrc en Windows) contiene datos para iniciar sesión en un host remoto en la red.

Este archivo reside en el directorio principal del usuario en el equipo que inicie la transferencia del archivo.

Sus permisos deben establecerse para no permitir el acceso de lectura por grupo y otros.

Se reconocen los siguientes tokens. Deben separarse mediante un espacio, tabulación o caracteres de nueva línea:



equipo



	hace referencia al nombre del equipo remoto. El proceso de inicio de sesión automático busca el archivo .netrc para un token de equipo que coincida con el equipo remoto especificado. Una vez lograda la coincidencia, se procesan los tokens .netrc posteriores, deteniéndose al alcanzar el EOF o al encontrarse otro token de equipo.



inicio de sesión



	hace referencia a un usuario del equipo remoto. Si este token está presente, el proceso de inicio de sesión automático iniciará un inicio de sesión con el nombre especificado.



contraseña



	proporciona una contraseña. Si este token está presente, el proceso de inicio de sesión automático proporcionará la cadena especificada si el servidor remoto requiere una contraseña como parte del proceso de inicio de sesión.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc File( "$DESKTOP\..\my_netrc.txt" );
request << Netrc( "true" );

```

#### Password

**Sintaxis:** obj << Password(passwd)

**Descripción:** Establece la contraseña en la solicitud utilizada para la autenticación básica. Este valor se utiliza con el nombre de usuario de la solicitud, donde tanto el nombre de usuario como la contraseña se concatenan con ":" (nombre:contraseña) y se trasladan al servicio web. Además, aquí se puede utilizar un valor de nombre de usuario/contraseña codificado (por ejemplo, mediante codificación Kerberos V5).

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" ),
	Password( "cm9zczpBYmMxMjM=" ),

);
data = request << Send;

```

#### Proxy Server

**Sintaxis:** obj << Proxy Server(proxy_url)

**Descripción:** La URL proxy se puede especificar de la misma forma que las variables del entorno proxy, incluido el prefijo del protocolo (http://) y el usuario incrustado + contraseña.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );

```

#### Proxy User

**Sintaxis:** obj << Proxy User(username:password)

**Descripción:** El usuario y la contraseña que posiblemente se proporcionen en la cadena proxy son una URL descodificada. Esto le permite introducir caracteres especiales como @ utilizando %40 o un punto y coma con %3a.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );
request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**Sintaxis:** obj << Query String([[ key=> value ]], <URI Encode(1|0|Safe(...))>)

**Descripción:** Establece el valor Cadena de consulta en la solicitud. Se trata de una recopilación de clave/valor del Arreglo asociativo de los datos de caracteres. Los pares clave/valor tienen codificación URL (con escape) cuando se envían al servicio web.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Query String( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Reset

**Sintaxis:** obj << Reset(URL(...), Method(...), <Form(<Fields(...)>, <Files(...)>)> | <File(...)> | <Blob(...)> | <JSON(...)>, <QueryString(...)>, <Headers(...)>, <Username(...)>, <Password(...)>)

**Descripción:** Restablece la solicitud a nuevos valores.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json1 = request << Send;
request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json2 = request << Send;

```

#### Run

**Sintaxis:** obj << Run

**Descripción:** Ejecuta la solicitud. Es un alias de Send. El valor devuelto de la función JSL Run will be either character data or binary BLOB. You can check the return with the Is String.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### SSL Version

**Sintaxis:** obj << SSL Version (version)

**Descripción:** "DEFAULT"  Use the default negotiated version (recommended).

\

         "1+"     Force TLS version 1.0 or higher, depending on what the server and client both support.

\

         1.0        Force TLS 1.0

\

         1.1        Force TLS 1.1

\

         1.2        Force TLS 1.2

\

         1.3        Force TLS 1.3

\

         2.0        Force TLS 2.0 (not recommended)

\

         3.0        Force TLS 3.0 (not recommended)

\

         "MAX"    Automatically choose the highest supported version

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << SSL Version( "1+" );

```

#### Secure

**Sintaxis:** obj << Secure(<"true"> | <"false">) | <"prompt">

**Descripción:** De forma predeterminada, la validación del certificado está activada. Si se establece en false, se permitirá completar solicitudes sin validar el certificado. Si se establece en prompt, se permitirá que un usuario acepte el certificado y complete la solicitud según sea necesario.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url(
		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"
	),
	Method( "GET" ),
	Secure( 1 )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### Send

**Sintaxis:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**Descripción:** Envía la solicitud. El valor devuelto de Send serán datos de caracteres o BLOB binario. Puede comprobar la devolución con la función JSL Is String. Al utilizar show progress download, se mostrará una barra cancelable con el progreso de los datos descargados. Al utilizar show progress upload, se mostrará una barra cancelable con el progreso de los datos cargados. Al utilizar show progress both, se mostrará una barra cancelable con el progreso de los datos cargados y descargados. Al utilizar show progress, se mostrará una barra cancelable con el progreso de los datos cargados o descargados (o ambos). Al publicar formularios, show progress mostrará el progreso de carga y descarga. Al publicar archivos, show progress mostrará el progreso de carga. Al recuperar datos, show progress mostrará el progreso de descarga.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### Text

**Sintaxis:** obj << Text( text data, <content-type>)

**Descripción:** Esto establecerá un valor de cadena de texto en la solicitud. La cadena de texto se utilizará como cuerpo del documento. El encabezado de tipo de contenido de la solicitud se establecerá automáticamente en "Content-Type: text/plain"

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	Text( "Hello World" )
);
data = request << Send;

```

#### Timeout

**Sintaxis:** obj << Timeout(seconds)

**Descripción:** El tiempo de espera predeterminado para que la acción de la solicitud se complete es de 60 segundos. Este valor puede ajustarse para permitir acciones de servicio web que requieran más tiempo.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url(
		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"
	),
	Method( "GET" ),
	Timeout( 120 )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### URL

**Sintaxis:** obj << URL(path)

**Descripción:** Cuando se crea una solicitud (o se utiliza con Restablecer), se puede utilizar como parámetro. obj = HTTP Request(URL("http://google.com"));

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

fields = Associative Array();
fields["text"] = "statistics";
s = New HTTP Request(
	URL( "http://text-processing.com/api/sentiment/" ),
	Method( "POST" ),
	Form( Fields( fields ) )
) << Send;

```

#### Use Cookies

**Sintaxis:** obj << Use Cookies(<true | false>))

**Descripción:** Configura la solicitud para usar cookies para la sesión. El valor predeterminado es verdadero.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Use Cookies( "false" );

```

#### UserPwd

**Sintaxis:** obj << UserPwd(clark kent:superman)

**Descripción:** Establece el campo de usuario y contraseña en la solicitud utilizada para la autenticación. El formato es: [nombre de usuario]:[contraseña]. Las cadenas de usuario y contraseña no están descodificadas como URL, por lo que no hay forma de enviar un nombre de usuario que contenga el signo de dos puntos mediante esta opción.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" ),
	UserPwd( "clark kent:superman" ),

);
data = request << Send;

```

#### Username

**Sintaxis:** obj << Username(name)

**Descripción:** Establece el nombre de usuario en la solicitud utilizada para la autenticación básica. Este valor se utiliza junto con la contraseña de la solicitud, donde tanto el nombre de usuario como la contraseña se concatenan con ":" (nombre:contraseña) y se trasladan al servicio web.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" ),
	Username( "ross" ),
	Password( "Abc123" ),

);
data = request << Send;

```

#### Verbose

**Sintaxis:** obj << Verbose(<"true"> | <"false">)

**Descripción:** Redacta mensajes de error detallados en el registro. El valor predeterminado es true.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

Write(
	"\!Verbose is true by default.\!nIt automatically outputs status so you'll see the status message twice....\!n"
);
baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/1000" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

Write( "\!nSetting Verbose to false controls writing the status....\!n" );
baseURL = "http://swapi.co/api";
request << Reset( URL( baseURL || "/people/1000" ), Method( "GET" ), Verbose( "false" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Verify SSL

**Sintaxis:** obj << Verify SSL(<"true"> | <"false">)

**Descripción:** La verificación del certificado está activada. Si se establece en false, se permitirán las solicitudes de completar sin verificacíón del certificado.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url(
		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"
	),
	Method( "GET" ),
	Verify SSL( "false" )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### XML

**Sintaxis:** obj << XML( xml data )

**Descripción:** Esto establecerá un valor de cadena XML en la solicitud. La cadena XML se utilizará como cuerpo del documento. El encabezado de tipo de contenido de la solicitud se establecerá automáticamente en "Content-Type: application/xml"

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	XML(
		"\[<?xml version="1.0" encoding="UTF-8"?>
		<serv:message xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
		<body>
			<bodyContent
				xsi:type="java:com.webex.service.binding.attendee.LstMeetingAttendee">
				<meetingKey>123456</meetingKey>
			</bodyContent>
		</body>
	</serv:message>]\"
	)
);
data = request << Send;

```

## MultiHTTPRequests

### Mensajes del elemento

#### Add

**Sintaxis:** obj << Add(request, <label>)

**Descripción:** Agrega una solicitud HTTP a MultiHTTPRequest. Se puede utilizar una etiqueta opcional. Resulta útil al realizar descargas en paralelo. Todas las solicitudes HTTP se validan antes de su uso.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
		)
	),
	"My First Download"
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
		)
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

#### Download

**Sintaxis:** obj << Download(<"show progress">, <"detailed">)

**Descripción:** Descarga las respuestas HTTP en archivos en paralelo. Resulta útil para descargar varios archivos de una vez desde uno o más servicios web. Si utiliza show progress, se mostrará una barra cancelable con el progreso de los archivos descargados. Si utiliza details, se mostrará el progreso de descarga individual.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

Names Default To Here( 1 );

urls =
{"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso",
"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso",
"https://download.manjaro.org/xfce/21.1.0/manjaro-xfce-21.1.0-210817-linux513.iso"};

requests = New Multi HTTP Request();
For( i = 1, i <= N Items( urls ), i++,
	request = New HTTP Request( Method( "GET" ), URL( urls[i] ) );
	requests << Add( request );
);
http_requests = requests << Get Requests();
data = requests << Download( "show progress", "detailed" );
Show( requests << Has Error );
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );

urls =
{"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso",
"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso",
"https://download.manjaro.org/xfce/21.1.0/manjaro-xfce-21.1.0-210817-linux513.iso"};

process_result = Function( {p, r},
	{Default Local},
	Show( r )
);

process_error = Function( {p, e, t},
	{Default Local},
	Show( e );
	Show( t );
);


requests = New Multi HTTP Request();
For( i = 1, i <= N Items( urls ), i++,
	request = New HTTP Request( Method( "GET" ), URL( urls[i] ) );
	requests << Add( request );
);

http_requests = requests << Get Requests();
promise = requests << Download( "async" );
promise << On Result( process_result );
promise << On Error( process_error );

```

#### Get Requests

**Sintaxis:** obj << Get Requests()

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request(
	Method( "GET" ),
	URL(
		"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
	)
);
http_request_2 = New HTTP Request(
	Method( "GET" ),
	URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" )
);

requests << Add( http_request_1 );

requests << Add( http_request_2 );
http_requests = requests << Get Requests();
//http_request_1 is the same as http_requests[1]
//http_request_2 is the same as http_requests[2]

```

#### Has Error

**Sintaxis:** obj << Has Error

**Descripción:** Devuelve verdadero si la solicitud múltiple tiene un error. La solicitud múltiple tiene un error si cualquiera de sus solicitudes HTTP tiene un error.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request(
	Method( "GET" ),
	URL(
		"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
	)
);
http_request_2 = New HTTP Request(
	Method( "GET" ),
	URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" )
);

requests << Add( http_request_1 );

requests << Add( http_request_2 );
data = requests << Download( "show progress", "detailed" );
Show( requests << Has Error );

```

#### Is Success

**Sintaxis:** obj << Is Success

**Descripción:** Devuelve verdadero si la solicitud múltiple es correcta. La solicitud múltiple es correcta si todas sus solicitudes HTTP son correctas.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request( Method( "GET" ), URL( "https://google.com" ) );
http_request_2 = New HTTP Request( Method( "GET" ), URL( "https://jmp.com" ) );

requests << Add( http_request_1 );

requests << Add( http_request_2 );
data = requests << Download( "show progress", "detailed" );
Show( requests << Is Successful );

```

#### Is Successful

**Sintaxis:** obj << Is Successful

**Descripción:** Devuelve verdadero si la solicitud múltiple es correcta. La solicitud múltiple es correcta si todas sus solicitudes HTTP son correctas.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request( Method( "GET" ), URL( "https://google.com" ) );
http_request_2 = New HTTP Request( Method( "GET" ), URL( "https://jmp.com" ) );

requests << Add( http_request_1 );

requests << Add( http_request_2 );
data = requests << Download( "show progress", "detailed" );
Show( requests << Is Successful );

```

#### Is Valid

**Sintaxis:** obj << Is Valid

**Descripción:** Es válida la solicitud múltiple. La solicitud múltiple es válida si todas las solicitudes HTTP son válidas.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request(
	Method( "GET" ),
	URL(
		"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
	)
);
http_request_2 = New HTTP Request(
	Method( "GET" ),
	URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" )
);

requests << Add( http_request_1 );

requests << Add( http_request_2 );
Show( requests << Is Valid() );

```

#### Reset

**Sintaxis:** obj << Reset()

**Descripción:** Envía varias solicitudes. Esta acción restablece cualquier solicitud HTTP que ya se haya agregado.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
		)
	),
	"My First Download"
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
		)
	)
);
requests << Reset();

```

#### Send

**Sintaxis:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**Descripción:** El valor devuelto de Send serán datos de caracteres o BLOB binario. Puede comprobar la devolución con la función JSL Is String. Al utilizar show progress download, se mostrará una barra cancelable con el progreso de los datos descargados. Al utilizar show progress upload, se mostrará una barra cancelable con el progreso de los datos cargados. Al utilizar show progress both, se mostrará una barra cancelable con el progreso de los datos cargados y descargados. Al utilizar show progress, se mostrará una barra cancelable con el progreso de los datos cargados o descargados (o ambos). Al publicar formularios, show progress mostrará el progreso de carga y descarga. Al publicar archivos, show progress mostrará el progreso de carga. Al recuperar datos, show progress mostrará el progreso de descarga.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

Names Default To Here( 1 );

//Taken from the Scripting Index Example for New HTTP Request
requests = New Multi HTTP Request();
bLabel = 0;
bValues = 0;
dt = Empty();

process_result = Function( {p, r},
	{Default Local},
	sentiments = {};
	For( i = 1, i <= N Items( r ), i++,
		Insert Into( sentiments, r[i]["content"] )
	);
	//loop through the returned sentiments
	For( i = 1, i <= N Items( sentiments ), i++,
		s = sentiments[i];
		sAsList = Parse JSON( s );
		retval = Associative Array();
		retval["pos"] = sAsList["probability"]["pos"];
		retval["neg"] = sAsList["probability"]["neg"];
		retval["neutral"] = sAsList["probability"]["neutral"];
		retval["label"] = sAsList["label"];
		sentiment = retval;
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);

process_error = Function( {p, e, t},
	{Default Local},
	Show( e );
	Show( t );
);

//this is now just going to configure a New HTTP Request and add it to New Multi HTTP Request
getSentiment = Function( {text},
	fields = Associative Array();
	fields["text"] = text;
	requests << Add(
		New HTTP Request(
			URL( "http://text-processing.com/api/sentiment/" ),
			Method( "POST" ),
			Form( Fields( fields ) ),
			Headers( {"Accept: application/json"} )
		)
	);
);
                      
addSentimentColumns = Function( {dt3, colname, cLabel, cValues},
	dt = dt3;
	bLabel = cLabel;
	bValues = cValues;
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		getSentiment( col[i] )
	);
	//this executes in parallel, with a promise
	promise = requests << Send( "async" );
	promise << On Result( process_result );
	promise << On Error( process_error );
);
                      
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );

//Taken from the Scripting Index Example for New HTTP Request
requests = New Multi HTTP Request();

//this is now just going to configure a New HTTP Request and add it to New Multi HTTP Request
getSentiment = Function( {text},
	fields = Associative Array();
	fields["text"] = text;
	requests << Add(
		New HTTP Request(
			URL( "http://text-processing.com/api/sentiment/" ),
			Method( "POST" ),
			Form( Fields( fields ) ),
			Headers( {"Accept: application/json"} )
		)
	);
);
                      
addSentimentColumns = Function( {dt, colname, bLabel, bValues},
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		getSentiment( col[i] )
	);
	//this executes in parallel
	sentiments = requests << Send( "show progress", "detailed" );
	//loop through the returned sentiments
	Show( N Items( requests << Get Requests() ) ); //number of requests in parallel
	For( i = 1, i <= N Items( sentiments ), i++,
		s = sentiments[i];
		sAsList = Parse JSON( s );
		retval = Associative Array();
		retval["pos"] = sAsList["probability"]["pos"];
		retval["neg"] = sAsList["probability"]["neg"];
		retval["neutral"] = sAsList["probability"]["neutral"];
		retval["label"] = sAsList["label"];
		sentiment = retval;
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);
                      
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

## OAuth2

### Mensajes del elemento

#### Authorization Fields

**Sintaxis:** oauth2 << Authorization Fields(...)

**Descripción:** Campos de autorización es un arreglo asociativo de pares de clave y valor que se utilizarán en la cadena de consulta para la URL de autorización de OAuth2.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
scope = "https://graph.microsoft.com/user.read";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
auth_fields = [=> ];

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
oauth2 = New OAuth2();
oauth2 << Authorization Fields( auth_fields );

```

#### Authorization URL

**Sintaxis:** oauth2 << Authorization URL(...)

**Descripción:** Establece la URL de la autorización OAuth2.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**Sintaxis:** oauth2 << Browser Type("Default" | "Embedded" | "External")

**Descripción:** La opción Predeterminado utiliza el navegador incrustado para la autenticación OAuth2, a menos que la autenticación se lleve a cabo con Google. La opción Incrustado utiliza el navegador incrustado para la autenticación OAuth2, a menos que la autenticación se lleve a cabo con Google (actualmente igual que con la opción Predeterminado). La opción Externo utiliza el navegador externo para la autenticación OAuth2 y copia el código o URL resultantes en el área de texto para completar la autenticación.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the copy the url into the text area after authentication is complete
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2( Browser Type( "External" ) );
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

#### Client Id

**Sintaxis:** oauth2 << Client Id(...)

**Descripción:** Establece la Id. de cliente de OAuth2, un identificador público que se utilizó durante la creación del servicio web.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
oauth2 = New OAuth2();
oauth2 << Client Id( client_id );

```

#### Client Secret

**Sintaxis:** oauth2 << Client Secret(...)

**Descripción:** Establece el secreto de cliente de OAuth2 que se creó durante la creación del servicio web.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
oauth2 = New OAuth2();
oauth2 << Client Secret( client_secret );

```

#### Code Verifier

**Sintaxis:** oauth2 << Code Verifier(<"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~">

**Descripción:** El código verificador es una cadena criptográficamente aleatoria que el cliente utiliza para identificarse cuando intercambia un código de autorización por un token de acceso. Tiene una longitud mínima de 43 caracteres y máxima de 128.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Code Verifier( "cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" );

```

#### Get Access Token

**Sintaxis:** oauth2 << Get Access Token()

**Descripción:** Obtiene el token de acceso actual de OAuth2. De este modo se inicia la comunicación con el servidor de autorización si es necesario.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/

auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
token_url = "https://www.googleapis.com/oauth2/v4/token";
redirect_url = "http://localhost/myapp/";
client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";
scope = "openid profile";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

access_token = oauth2 << Get Access Token();

```

#### Get Auth Response Error

**Sintaxis:** oauth2 << Get Authentication Response Error()

**Descripción:** Obtiene el error de respuesta de OAuth2.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**Sintaxis:** obj << Get Auth Response Fields

**JMP Versión agregada:** 15

#### Get Authentication Response Error

**Sintaxis:** obj << Get Authentication Response Error

**JMP Versión agregada:** 18

#### Get Authorization Header

**Sintaxis:** oauth2 << Get Authorization Header

**Descripción:** Obtiene el encabezado con el formato:

Autorización: Portador [token de OAuth2]

donde [token de OAuth2] es el token del portador obtenido de un servidor de autorización.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );

/*
https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
token_url = "https://www.googleapis.com/oauth2/v4/token";
redirect_url = "http://localhost/myapp/";
client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";
scope = "openid profile";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://www.googleapis.com/oauth2/v3/userinfo" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;
If( !Is Empty( data ),
	json_jsl = Parse JSON( data );
	If( json_jsl << Contains( "picture" ),
		picture_url = json_jsl["picture"];
		New Window( "Example", Picture Box( Open( picture_url ) ) );
	,
		Show( data )
	);
);

```

#### Get Authorization Response Fields

**Sintaxis:** oauth2 << Get Authorization Response Fields()

**Descripción:** Obtiene los valores de respuesta actuales de OAuth2 del servidor de autorización.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
token_url = "https://www.googleapis.com/oauth2/v4/token";
redirect_url = "http://localhost/myapp/";
client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";
scope = "openid profile";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

token = oauth2 << Get Access Token();
auth_response = oauth2 << Get Authorization Response Fields();

```

#### Get Code

**Sintaxis:** oauth2 << Get Code()

**Descripción:** Obtiene el código actual de OAuth2. De este modo se inicia la comunicación con el servidor de autorización si es necesario.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/

auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
token_url = "https://www.googleapis.com/oauth2/v4/token";
redirect_url = "http://localhost/myapp/";
client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";
scope = "openid profile";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

code = oauth2 << Get Code();

```

#### Get Grant Type

**Sintaxis:** oauth2 << Get Grant Type()

**Descripción:** Obtiene el tipo de concesión actual de OAuth2.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
oauth2 << Grant Type( grant_types[1] );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Get Grant Types

**Sintaxis:** oauth2 << Get Grant Types

**Descripción:** Obtiene los tipos de concesiones OAuth2 de JMP compatibles.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://oauth.net/2/grant-types/
*/
oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
Show( grant_types );

```

#### Get ID Token

**Sintaxis:** oauth2 << Get ID Token()

**Descripción:** Obtiene el token de Id. actual de OAuth2. De este modo se inicia la comunicación con el servidor de autorización si es necesario.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/

auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

id_token = oauth2 << Get ID Token();

```

#### Get Refresh Token

**Sintaxis:** oauth2 << Get Refresh Token()

**Descripción:** Obtiene el token de actualización actual de OAuth2. De este modo se inicia la comunicación con el servidor de autorización si es necesario.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/

auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
token_url = "https://www.googleapis.com/oauth2/v4/token";
redirect_url = "http://localhost/myapp/";
client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";
scope = "openid profile";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

refresh_token = oauth2 << Get Refresh Token();

```

#### Get Scope

**Sintaxis:** oauth2 << Get Scope()

**Descripción:** Obtiene el alcance actual de OAuth2.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/

auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
token_url = "https://www.googleapis.com/oauth2/v4/token";
redirect_url = "http://localhost/myapp/";
client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";
scope = "openid profile";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

code = oauth2 << Get Scope();

```

#### Get Window Title

**Sintaxis:** oauth2 << Get Window Title

**Descripción:** Obtiene el título de la ventana OAuth2.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );
title = oauth2 << Get Window Title;

```

#### Grant Type

**Sintaxis:** oauth2 << Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**Descripción:** El tipo de concesión solicitada tiene que ser uno de los tipos de concesión compatibles con JMP y el proveedor de la autorización OAuth2.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Has Auth Response  Error

**Sintaxis:** obj << Has Auth Response  Error

**JMP Versión agregada:** 18

#### Has Authentication Response  Error

**Sintaxis:** oauth2 << Has Authentication Response Error()

**Descripción:** Busca un error de respuesta de autenticación OAuth2.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
If( oauth2 << Has Authentication Response Error(),
	Show( oauth2 << Get Authentication Response Error )
);

```

#### Is Expired

**Sintaxis:** oauth2 << Is Expired()

**Descripción:** Devuelve si el token de acceso actual de OAuth2 ha caducado.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
token_url = "https://www.googleapis.com/oauth2/v4/token";
redirect_url = "http://localhost/myapp/";
client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";
scope = "openid profile";
auth_fields = [=> ];
token_fields = [=> ];

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );

auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;

oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );

token = oauth2 << Get Access Token();
expired = oauth2 << Is Expired();

```

#### Login Hint

**Sintaxis:** oauth2 << Login Hint(hint)

**Descripción:** Establece el valor login_hint. login_hint es un parámetro OPCIONAL de la Solicitud de autenticación como "sugerencia" para el Servidor de autorización acerca del identificador de inicio de sesión que debe utilizar el usuario final para iniciar sesión (si es necesario).

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**Sintaxis:** oauth2 << Password(...)

**Descripción:** Establece la contraseña de OAuth2 para el tipo de concesión contraseña.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

```

#### Redirect URL

**Sintaxis:** oauth2 << Redirect URL(...)

**Descripción:** Establece la URL de redirección de OAuth2 que se utilizó durante la creación del servicio web.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

redirect_url = "http://localhost/myapp/";
oauth2 = New OAuth2();
oauth2 << Redirect URL( redirect_url );

```

#### Scope

**Sintaxis:** oauth2 << Scope(...)

**Descripción:** Establece el alcance de OAuth2, una forma de limitar el acceso de una aplicación a una cuenta.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://oauth.net/2/scope/
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent
*/
scope = {"openid", "offline_access", "https://graph.microsoft.com/user.read"};
auth_fields = [=> ];
auth_fields["scope"] = Concat Items( scope, " " );
Show( auth_fields );
oauth2 = New OAuth2();
oauth2 << Authorization Fields( auth_fields );

```

#### Set Window Title

**Sintaxis:** oauth2 << Set Window Title(title)

**Descripción:** Establece el título de la ventana OAuth2.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**Sintaxis:** obj << Token Fields

**Descripción:** Un arreglo asociativo de pares de clave y valor que se utilizarán en la cadena de consulta para la URL del token de OAuth2.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/
tokem_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
client_secret = "6731de76-14a6-49ae-97bc-6eba6914391e";
token_fields = [=> ];
scope = "openid profile";
token_fields["scope"] = scope;
oauth2 = New OAuth2();
oauth2 << Token Fields( token_fields );

```

#### Token URL

**Sintaxis:** oauth2 << Token URL(...)

**Descripción:** Establece la URL del token OAuth2.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**Sintaxis:** oauth2 << Use Default Window Title(1 | 0)

**Descripción:** Obtiene el título de la ventana OAuth2.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Use Default Window Title( 1 );
title = oauth2 << Get Window Title;

```

#### Username

**Sintaxis:** oauth2 << Username(...)

**Descripción:** Establece el nombre de usuario de OAuth2 para el tipo de concesión contraseña.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

```

