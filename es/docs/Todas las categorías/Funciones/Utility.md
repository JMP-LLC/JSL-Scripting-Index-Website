# Utility



### Add

**Sintaxis:** y = x0 + x1; y = Add( x0, x1, ... )

**Descripción:** Suma todos los argumentos, que pueden ser números, matrices o listas de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pi() + 10;

```

### Beep

**Sintaxis:** Beep()

**Descripción:** Emite un sonido de alerta..

**JMP Versión agregada:** Antes de la versión 14

```jsl

Beep();

```

### Blob MD5

**Sintaxis:** blobResult = Blob MD5( blob )

**Descripción:** Obtiene un BLOB de 16 bytes a partir de un BLOB origen (Binary Large OBject). El BLOB de 16 bytes es la suma de comprobación MD5 (o el hash) del BLOB de partida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex(/* make it printable */ Blob MD5(/* get the hash */		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",			BLOB/* the result is a BLOB, not a string */		)	)) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */;

```

### Blob Peek

**Sintaxis:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**Descripción:** Obtiene un BLOB nuevo a partir de un subconjunto de bytes del BLOB dado. El argumento offset se cuenta a partir de cero, así que el primer byte tiene offset cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**Sintaxis:** y = Build Information()

**Descripción:** Devuelve la fecha y la hora de la compilación, la versión liberación o depuración y el nombre del producto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Build Information();

```

### Caption

**Sintaxis:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**Descripción:** Muestra una ventana de encabezado en la ubicación especificada por {h, v}, la cual contiene el texto especificado por el argumento text. El argumento Delayed( seconds ) establece el tiempo de espera en segundos antes de que se muestre cada uno de los encabezados.

**JMP Versión agregada:** Antes de la versión 14

#### Quitar título

```jsl

Caption( "explanation" );Wait( 2 );Caption( remove );

```

#### Título con formato

```jsl

Caption(	{100, 200},	"explanation",	Font( "Arial Black" ),	Font Size( 16 ),	Text Color( "blue" ),	Back Color( "yellow" ),	Spoken( 1 ));

```

### Current Journal

**Sintaxis:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**Descripción:** Devuelve una referencia al diario actual del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.



Si no existe ningún diario actual en el proyecto especificado, se creará uno automáticamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Current Journal();

```

### Data Connector Registry

**Sintaxis:** Data Connector Registry()

**Descripción:** La colección de conectores de datos para JMP.

**JMP Versión agregada:** 18

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**Sintaxis:** y = Open Datafeed( ... )

**Descripción:** Crea un objeto y una ventana a los cuales se pueden enviar mensajes con el fin de gestionar feeds de datos en tiempo real.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Debug Break

**Sintaxis:** Debug Break()

**Descripción:** Cuando el Depurador JSL evalúa esta expresión, detiene la ejecución del script.

**JMP Versión agregada:** Antes de la versión 14

```jsl

// Right-click and select Debug.// In the JSL Debugger, click Run.x = 5;y = 8;Debug Break();z = x + yy;Show( z );

```

### Decode URI

**Sintaxis:** Decode URI( value )

**Descripción:** Codificar la cadena usando la codificación URI

**JMP Versión agregada:** 14

```jsl

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Sintaxis:** y = Decode64 Blob( base64String )

**Descripción:** Decodifica una cadena imprimible de texto Base 64 en un blob.

**JMP Versión agregada:** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Sintaxis:** y = Decode64 Double( base64String )

**Descripción:** Devuelve el número de coma flotante de precisión doble a partir de la cadena de caracteres codificada en Base64.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**Sintaxis:** Disable JMP Live URL(url)

**Descripción:** Deshabilita una URL de JMP Live. Este método solo está disponible durante jmpStartAdmin.jsl. Se puede utilizar un asterisco \* como comodín para especificar URL como \* (cualquier URL), \*.jmp.com (una URL que acabe en .jmp.com), http://public.\* (una URL que comience por http://public.) o \*public\* (una URL que contenga el término public).

**JMP Versión agregada:** 15

```jsl

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Sintaxis:** Disable Proxy Settings( 1|0 )

**Descripción:** Deshabilita o habilita la configuración de proxy durante la ejecución de jmpStartAdmin.jsl. La configuración de proxy está habilitada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

Disable Proxy Settings( 1 );

```

### Divide

**Sintaxis:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**Descripción:** Divide todos los argumentos posteriores a partir del primer argumento. Los argumentos pueden ser números, matrices o listas de números. Cuando se llama con un solo argumento, el resultado será el recíproco.

**JMP Versión agregada:** Antes de la versión 14

#### Recíproco

```jsl

x = Divide( 5 );y = 1 / 5;Show( x, y );

```

#### Simple

```jsl

6 / 3 / 2;

```

### Empty

**Sintaxis:** y = Empty()

**Descripción:** Devuelve un valor vacío. Se usa en el editor de fórmulas para argumentos no especificados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Empty();

```

### Enable JMP Live URL

**Sintaxis:** Enable JMP Live URL(url)

**Descripción:** Habilita una URL de JMP Live. Este método solo está disponible durante jmpStartAdmin.jsl. Se puede utilizar un asterisco \* como comodín para especificar URL como \* (cualquier URL), \*.jmp.com (una URL que acabe en .jmp.com), http://public.\* (una URL que comience por http://public.) o \*public\* (una URL que contenga el término public).

**JMP Versión agregada:** 15

```jsl

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Sintaxis:** Enable Proxy Settings( 1|0 )

**Descripción:** Habilita o deshabilita la configuración de proxy durante la ejecución de jmpStartAdmin.jsl. La configuración de proxy está habilitada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

Enable Proxy Settings( 0 );

```

### Encode URI

**Sintaxis:** Encode URI( value )

**Descripción:** Codificar la cadena usando la codificación URI

**JMP Versión agregada:** 14

```jsl

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Sintaxis:** s = Encode64 Blob( x )

**Descripción:** Codifica un blob en una cadena imprimible de texto Base 64.

**JMP Versión agregada:** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Sintaxis:** s = Encode64 Double( x )

**Descripción:** Devuelve una cadena codificada en Base64 correspondiente al número de coma flotante.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**Sintaxis:** points = Faure Quasi Random Sequence(nDim, nRow)

**Descripción:** Genera una secuencia de números casi aleatorios que llenan el espacio con la secuencia de Faure.

**JMP Versión agregada:** Antes de la versión 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Format Pattern

**Sintaxis:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;) x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; ) obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**Descripción:** Los patrones de formato son cadenas de caracteres que definen un formato de fecha y hora, como "<AAAA></><MM></><DD> <hh><:><mm><:><ss><ampm>". Las partes del patrón que se encuentran entre paréntesis angulares se denominan descriptores de campo. Los descriptores de campo representan un valor (como "<AAAA>", que es un año de cuatro dígitos) u otro texto de fecha y hora (como "</>", que es un separador de fecha específico de la configuración regional). Un patrón de formato le permite crear formatos que no se proporcionan en JMP. Estos formatos pueden utilizarse para dar formato a los datos e introducirlos.

**JMP Versión agregada:** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );Show( s, x );                                                /*Descriptores de campoFechas(no se pueden utilizar con descriptores de campo de duración)================================================================================<YYYY>        Año de cuatro dígitos. (Acepta entre 1 y 4 dígitos en la entrada).<YY>          Año de dos dígitos<yyyy>        Año ISO de cuatro dígitos; corresponde a semanas ISO. (Acepta de 1              a 4 dígitos en la entrada).<yy>          Año ISO de dos dígitos; corresponde a semanas ISO.<YYYY.>       Año con año fraccional. Describe completamente la fecha y la hora.<M>           Número de mes (1..12)<MM>          Número de mes, completado con ceros (01..12)<Month>       Nombre del mes largo<Mmm>         Nombre del mes abreviado<MMM>         Nombre del mes "en línea". Siempre tres letras.<WW1>         Número de semana de dos dígitos, completado con ceros. La semana 2              comienza el primer domingo del año. La semana 1 es una semana              parcial antes del primer domingo. (01..54)<WW2>         Número de semana de dos dígitos, completado con ceros. La semana 1              comienza el primer domingo del año. La semana 0 es una semana              parcial antes del primer domingo. (00..53)<ww>          Número de semana ISO de dos dígitos, completado con ceros. La              semana comienza el lunes. La semana 1 es la primera semana de ese              año con cuatro o más días. No hay semanas parciales, sino que la              primera o la última semana se pueden considerar del año anterior o              el siguiente, respectivamente. (01..53)<D>           Día del mes (1..31)<DD>          Día del mes, completado con ceros (01..31)<Q>           Trimestre del año (1..4)<Q#>          "T" seguido del trimestre del año (1..4)<DayOfWeek>   Nombre del día de la semana<DW>          Día de la semana en número. 1 = domingo, 7 = sábado<dw>          Día de la semana en número. 1 = lunes, 7 = domingo</>           El separador de fecha de la configuración regional. (Acepta los              separadores más comunes en la entrada).<->           El separador de fecha ISO "-". (Acepta los separadores más comunes              en la entrada).</?>          Separador de fecha opcional en la entrada de fecha. El separador              no se escribe nunca en la salida.<'T'>         La "T" en las fechas ISOHoras(algunas se pueden utilizar con descriptores de campo de duración)================================================================================<hh>          Se ha aplicado un formato de hora acorde a la configuración              regional actual. Si hay presente un descriptor <ampm>, se usará un              reloj de 12 o 24 horas en función de la configuración regional. Si              hay presente un descriptor <AMPM>, se usará un reloj de 12 horas.              De lo contrario, se usará un reloj de 24 horas. (No se puede              utilizar con descriptores del campo de duración).<zhh>         Se ha aplicado un formato de hora acorde con la configuración              regional actual y completado con ceros. Si hay presente un              descriptor <ampm>, se usará un reloj de 12 o 24 horas en función              de la configuración regional. Si hay presente un descriptor              <AMPM>, se usará un reloj de 12 horas. De lo contrario, se usará              un reloj de 24 horas. (No se puede utilizar con descriptores del              campo de duración).<hh24>        Hora en formato de 24 horas y completada con ceros (00..23)<mm>          Minuto, completado con ceros (00..59)<ss>          Segundo, completado con ceros (00..59)<ampm>        Símbolo a. m./p. m. para la configuración regional actual. (No se              puede utilizar con descriptores de campo de duración).<AMPM>        Símbolo de a. m./p. m. "a. m." o "p. m." independiente de la              configuración regional. (No se puede utilizar con descriptores del              campo de duración).<:>           El separador de fecha y hora de la configuración regional.<::>          El separador de fecha y hora ISO ":". (También acepta el separador              de fecha y hora de la configuración regional en la entrada).<:?>          Separador de hora opcional en la entrada de fecha. El separador no              se escribe nunca en la salida.Duraciones(no se puede utilizar con los descriptores de campo de fecha)================================================================================<Day>         Conteo de días. Se utiliza como el campo más significativo de las              duraciones. No se puede utilizar con ningún otro "conteo".<Hour>        Conteo de horas. Se utiliza como el campo más significativo de las              duraciones. No se puede utilizar con ningún otro "conteo".<Minute>      Conteo de minutos. Se utiliza como el campo más significativo de              las duraciones. No se puede utilizar con ningún otro "conteo".Otro================================================================================<<>           Reemplazado por un "<"*/

```

### Get Addin

**Sintaxis:** Get Addin( ID )

**Descripción:** Recupera un complemento registrado mediante su ID.

**JMP Versión agregada:** Antes de la versión 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Sintaxis:** Get Addins( )

**Descripción:** Devuelve una lista de todos los complementos registrados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

addins = Get Addins();addin ids = Get Addins() << id;Show( addins, addin ids );

```

### Get Addr Info

**Sintaxis:** Get Addr Info( string )

**Descripción:** Busca la dirección numérica correspondiente a un nombre. En la mayoría de los casos se debería usar el nombre para garantizar la compatibilidad futura con IPV6.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**Sintaxis:** Get Clipboard()

**Descripción:** Obtiene el contenido actual del portapapeles

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Clipboard();

```

### Get Name Info

**Sintaxis:** Get Name Info( string )

**Descripción:** Busca el nombre correspondiente a una dirección numérica. En la mayoría de los casos se debería usar el nombre para garantizar la compatibilidad futura con IPV6.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**Sintaxis:** notebookList = Get Notebook List()

**Descripción:** Devuelve una lista de todos los cuadernos especificados.

**JMP Versión agregada:** 19

### Get OAuth2 Grant Types

**Sintaxis:** Get OAuth2 Grant Types

**Descripción:** Obtiene los tipos de concesiones OAuth2 de JMP compatibles.

**JMP Versión agregada:** 15

```jsl

/*https://oauth.net/2/grant-types/*/grant_types = Get OAuth2 Grant Types();Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Versión agregada:** 15

```jsl

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";aa = Get OpenID Connect Discovery( url );Show( aa );

```

### Get OpenIDC Discovery

**JMP Versión agregada:** 15

### Get Platform Preference

**Sintaxis:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Descripción:** Devuelve las preferencias de la plataforma según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Sintaxis:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Descripción:** Devuelve las preferencias de la plataforma según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Sintaxis:** Get Policies( &lt;Machine|User|Both&gt; )

**Descripción:** Devuelve un arreglo asociativo que contiene los nombres y valores de las políticas actuales.

**JMP Versión agregada:** 18

```jsl

Get Policies();

```

### Get Preference

**Sintaxis:** Get Preferences( pref1, ... )

**Descripción:** Devuelve las preferencias según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**Sintaxis:** Get Preferences( pref1, ... )

**Descripción:** Devuelve las preferencias según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Preferences( Graph marker size );

```

### Glue

**Sintaxis:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Descripción:** Evalúa todos los argumentos y devuelve el último resultado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex1 = 1;ex2 = 2;

```

### Gzip Compress

**Sintaxis:** blob = Gzip Compress( blob )

**Descripción:** Comprime un blob de datos en un blob GZip.

**JMP Versión agregada:** 14

```jsl

Gzip Compress(	Char To Blob( "random data does not usually compress well and may get larger" ));

```

### Gzip Uncompress

**Sintaxis:** blob = Gzip Uncompress( blob )

**Descripción:** Descomprime un blob de datos GZip en un blob.

**JMP Versión agregada:** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/	Char To Blob(		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",		"ascii~hex"	));

```

### Host is

**Sintaxis:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Descripción:** Devuelve 1 si la aplicación JMP coincide con el argumento y 0 en caso contrario. Los argumentos Windows o Mac sirven para comprobar si el sistema operativo es el especificado, y los argumentos Bits32 o Bits64 para comprobar si se trata de la aplicación JMP de 32 bits o de 64 bits. Sólo se puede probar un argumento por vez.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( Host is( "Mac" ),	Show( "On Mac" ),	Show( "Not on Mac" ));If( Host is( "Bits64" ),	Show( "64 bit" ));If(	Host is( "x86_64" ), Show( "On x86_64" ),	Host is( "arm64" ), Show( "On arm64" ));

```

### Is Alt Key

**Sintaxis:** y = Is Alt Key()

**Descripción:** Devuelve 1 si la tecla Alt está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos. En Mac, Alt es la tecla Option.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Command Key

**Sintaxis:** y = Is Command Key()

**Descripción:** Devuelve 1 si la tecla Command está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Command Key(),			Text( {60, 50}, "Command Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Context Key

**Sintaxis:** y = Is Context Key()

**Descripción:** Devuelve 1 si la tecla Context está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Context Key(),			Text( {60, 50}, "Context Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Control Key

**Sintaxis:** y = Is Control Key()

**Descripción:** Devuelve 1 si la tecla Control está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos. En Mac, Control es la tecla Command.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is JMP Live URL Enabled

**Sintaxis:** Is JMP Live URL Enabled(url)

**Descripción:** Determina si la URL especificada se puede utilizar en esta sesión de JMP. Las URL pueden habilitarse o deshabilitarse con el script jmpStartAdmin.jsl. Esto no determina si se trata de una URL válida, ni si el usuario puede iniciar sesión. Solo determina si la URL está bloqueada por JMP.

**JMP Versión agregada:** 15

```jsl

url = "http://public.jmp.com";Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**Sintaxis:** y = Is Option Key()

**Descripción:** Devuelve 1 si la tecla Option está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Option Key(),			Text( {60, 50}, "Option Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Shift Key

**Sintaxis:** y = Is Shift Key()

**Descripción:** Devuelve 1 si la tecla Mayús está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### JMP Product Name

**Sintaxis:** y = JMP Product Name()

**Descripción:** Devuelve "Standard" o "Pro" en función de la versión del producto de la que se disponga licencia.

**JMP Versión agregada:** Antes de la versión 14

```jsl

JMP Product Name();

```

### JMP Version

**Sintaxis:** y = JMP Version()

**Descripción:** Devuelve la versión de JMP (versión.revisión{.parche}); no disponible antes de la versión 6.0.

**JMP Versión agregada:** Antes de la versión 14

```jsl

JMP Version();

```

### JSL Encrypted

**Sintaxis:** y = JSL Encrypted(script)

**Descripción:** Integra un script encriptado con otro. Para crear un script encriptado, seleccione Editar > Encriptar script en el menú principal de un editor de scripts. Introduzca las contraseñas y el texto encriptado aparecerá en una ventana nueva. Copie este texto en un comando de JSL Encrypted("") para integrar el script encriptado en otro.

**JMP Versión agregada:** Antes de la versión 14

```jsl

JSL Encrypted(	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*");

```

### JSL Quote

**Sintaxis:** y = JSL Quote(script)

**Descripción:** Guarda un script JSL en una variable, incluidos todos los comentarios y el formato.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = JSL Quote(/* Begin quote. */    For (i = 1, i <= 5, i++,        // Print the value of i.        Print(i);    );    // End expression.);New Window( "editor", Script Box( x ) );

```

### Load DLL

**Sintaxis:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Descripción:** Carga una DLL situada en la ruta especificada.

**JMP Versión agregada:** Antes de la versión 14

#### Cross platform using Base Name()

```jsl

dll = Load DLL( Base Name( "/path/to/dll/financial" ) );// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac// Declarations for "irr" and "npv" are auto-loadedmyirr = dll << irr( 0.1, -51000, 1000, 900, 950 );mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );dll << UnloadDLL();

```

#### Windows only

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << CallDLL( "MessageBeep", "n", 0 );	Wait( 1 );	dll << CallDLL( "MessageBeep", "n", 0 );	dll << UnloadDLL(););

```

### Mail

**Sintaxis:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**Descripción:** Crea un mensaje de correo electrónico saliente de la forma especificada si el sistema operativo lo permite. No funcionarán todas las opciones en todas las versiones de sistema operativo. Consulte la Ayuda para obtener más detalles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Sintaxis:** menu = Main Menu( command, &lt;window name&gt; )

**Descripción:** Ejecuta el comando del menú principal especificado.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Main Menu( "Sample Index" );

```

**Ejemplo 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Minus

**Sintaxis:** y = -x; y = Minus( x )

**Descripción:** Niega x, que puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

-Pi();

```

### Multiple File Import

**Sintaxis:** mfiObj = Multiple File Import();

**Descripción:** Crea un objeto de importación de varios archivos; el objeto acepta mensajes para establecer una carpeta, filtrar archivos e importar. Para abrir un cuadro de diálogo, utilice el mensaje "Crear ventana". Para importar inmediatamente, utilice el mensaje "Importar datos", que devolverá una lista de las tablas que se crearon.

**JMP Versión agregada:** 14

**Ejemplo de scripting**

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );mfi << Set Name Filter( "*.txt" );mfi << Set Name Enable( 1 );tables = mfi << Import Data();

```

**Ejemplo interactivo**

```jsl

// use the save-script-to-script-window button // in the MFI dialog to see more messages// for filtering files and controlling the importMultiple File Import(	<<Set Folder( "$DESKTOP" ),	<<Set Name Filter( "*.csv;" ),	<<Set Name Enable( 1 )) << Create Window;

```

### Multiply

**Sintaxis:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Descripción:** Multiplica todos los argumentos, que pueden ser números, matrices o listas de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

2 * Pi();

```

### Name

**Sintaxis:** Name(string)

**Descripción:** Un nombre es simplemente algo para llamar a un elemento. Los nombres se utilizan para las variables y para las funciones, y pueden emplearse directamente en scripts, siempre que se sigan ciertas reglas. Si el nombre comienza por un carácter alfabético o un guión bajo, y continúa con caracteres alfanuméricos, espacios en blanco, símbolos matemáticos Unicode y ciertos símbolos de puntuación (apóstrofos (’), signos de porcentaje (%), puntos (.), barras inversas (\\) y guiones bajos (_)), el nombre puede utilizarse directamente en scripts. Los nombres que no siguen estas reglas pueden emplearse mediante la palabra clave del Name().

**JMP Versión agregada:** 14

```jsl

Name( "taxable income(2011)" ) = 456000;tax = .25;Print( tax * Name( "taxable income(2011)" ) );

```

### New HTTP Request

**Sintaxis:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Descripción:** Crea una solicitud para enviar a un servicio web.

**JMP Versión agregada:** 14

```jsl

getSentiment = Function( {text},	{Default Local},	fields = Associative Array();	fields["text"] = text;	s = New HTTP Request(		URL( "http://text-processing.com/api/sentiment/" ),		Method( "POST" ),		Form( Fields( fields ) ),		Headers( {"Accept: application/json"} )	) << Send;	sAsList = Parse JSON( s );	retval = Associative Array();	retval["pos"] = sAsList["probability"]["pos"];	retval["neg"] = sAsList["probability"]["neg"];	retval["neutral"] = sAsList["probability"]["neutral"];	retval["label"] = sAsList["label"];	retval;);                         addSentimentColumns = Function( {dt, colname, bLabel, bValues},	{Default Local},	col = Column( dt, colname );	colLabel = "Sentiment_Label(" || colname || ")";	colValPos = "Sentiment_Pos(" || colname || ")";	colValNeg = "Sentiment_Neg(" || colname || ")";	colValNeutral = "Sentiment_Neutral(" || colname || ")";	If( bLabel,		dt << New Column( colLabel, Character )	);	If( bValues,		dt << New Column( colValPos, Numeric );		dt << New Column( colValNeg, Numeric );		dt << New Column( colValNeutral, Numeric );	);	For( i = 1, i <= N Rows( dt ), i++,		sentiment = getSentiment( col[i] );		If( bLabel,			Column( dt, colLabel )[i] = sentiment["label"]		);		If( bValues,			Column( dt, colValPos )[i] = sentiment["pos"];			Column( dt, colValNeg )[i] = sentiment["neg"];			Column( dt, colValNeutral )[i] = sentiment["neutral"];		);	););                         dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Multi HTTP Request

**Sintaxis:** multi_request = New Multi HTTP Request()

**Descripción:** Envía o descarga múltiples solicitudes HTTP en paralelo.

**JMP Versión agregada:** 17

```jsl

requests = New Multi HTTP Request();requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"		)	));requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"		)	));data = requests << Download( "show progress", "detailed" );http_requests = requests << Get Requests();For( i = 1, i <= N Items( http_requests ), i++,	Show( http_requests[i] << Get Mime Type() ));

```

### New OAuth2

**Sintaxis:** oauth2 = New OAuth2()

**Descripción:** Crea una nueva autorización de OAuth2.

**JMP Versión agregada:** 15

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";redirect_url = "http://localhost/myapp/";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";client_secret = "JqQX2PNo9bpM0uEihUPzyrh";scope = "openid offline_access https://graph.microsoft.com/user.read";auth_fields = [=> ];token_fields = [=> ];                                          oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );                                          auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;                                          oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );                                          auth_header = oauth2 << Get Auth Header();request = New HTTP Request(	URL( "https://graph.microsoft.com/v1.0/me" ),	Headers( {auth_header} ),	Method( "GET" ));data = request << Send;

```

### New OAuth2 Token

**Sintaxis:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Descripción:** Crea un token OAuth2 para acceder de forma segura a los datos en muchas API web distintas.

**JMP Versión agregada:** 15

```jsl

token = New OAuth2 Token(	Account( "jmpgoogldev@gmail.com" ),	Client ID( "test" ),	Client Secret( "test 2" ),	Refresh Token( "" ),	Token URL( "" ));

```

### New Web Report

**Sintaxis:** obj = New Web Report(...)

**Descripción:** Crea un informe HTML interactivo.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );webreport = New Web Report(	Add Report(		Distribution(			Continuous Distribution( Column( :weight ) ),			Nominal Distribution( Column( :age ) )		),		Title( "Distribution Web Report" ),		Description( "This report was created with the sample found in the Scripting Index" )	),	Add Report(		Bivariate(			Y( :weight ),			X( :height ),			Automatic Recalc( 1 ),			Fit Line( {Line Color( {213, 72, 87} )} ),			Local Data Filter( Add Filter( columns( :sex ) ) )		)	));webreport << Index( Title( "Big Class Report" ) );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Notebook

**Sintaxis:** nb = Notebook( name|number )

**Descripción:** Devuelve una referencia al cuaderno especificado.

**JMP Versión agregada:** 19

### Open Datafeed

**Sintaxis:** y = Open Datafeed( ... )

**Descripción:** Crea un objeto y una ventana a los cuales se pueden enviar mensajes con el fin de gestionar feeds de datos en tiempo real.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Open Help

**Sintaxis:** w = Open Help( "Help" | "Scripting Index", ... )

**Descripción:** Abre la ayuda en línea de JMP o el Índice de scripts.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open Help( "Help" );

```

**Ejemplo 2**

```jsl

Open Help(	"Scripting Index",	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext( Category( "Functions" ) ));

```

**Ejemplo 3**

```jsl

Open Help(	"Scripting Index",	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext(		Category( "All Categories" ),		Object( "Search results" ),		Method( "Get Alpha" )	));

```

### Parse XML

**Sintaxis:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Descripción:** Analiza una expresión XML con las expresiones OnElement aplicadas a etiquetas XML especificadas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

/*See example two for more details*/ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

**Ejemplo 2**

```jsl

doc ="<a title='one'>    WWWa    <b>BB<c>ZZZ</c>B1</b>    XXXa    <b>BBB2</b>    YYYa    <c>CCC</c></a>";// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,// to show why text should be collected by Text(...) and then processed by EndTag(...)// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.docname = "undefined";doctext = "";recordtext = "";records = {};NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting levelParse XML( doc,	On Element(		"a",		Start Tag(			docname = XML Attr( "title" );			NestLevel++;		),         // decide here to trim the CRLF and blanks and use a single blank		Text( doctext = doctext || Trim( XML Text() ) || " " ),		End Tag( NestLevel-- )	),	On Element(		"b",		Start Tag( NestLevel++ ),         // comment out the next line and...		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),		End Tag(            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records			// recordtext = XMLText();			Insert Into( records, recordtext );			recordtext = "";			NestLevel--;		)	));Show( docname, doctext, records, NestLevel );

```

### Pdf Page Count

**Sintaxis:** Pdf Page Count( file name)

**Descripción:** Devuelve el número de páginas en un archivo PDF.

**JMP Versión agregada:** Antes de la versión 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Pref

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**Sintaxis:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;AutoLoad(0|1)&gt; )

**Descripción:** Register an add-in. An Autoload value of 1 forces the add-in to load when registered. A value of 0 leaves the add-in unloaded. If AutoLoad is not specified the addin.def setting will be used if found otherwise the default will be for the add-in to be loaded.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Register Addin(	"com.mycompany.myaddin",	"$DOCUMENTS/myaddin",	displayname( "Sample Addin" ));

```

### Revert Menu

**Sintaxis:** Revert Menu()

**Descripción:** Vuelve a recuperar los menús predeterminados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Reverts menus back to factory default settings. */

```

### Run Program

**Sintaxis:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt; )

**Descripción:** Controla un programa externo mediante stdin y stdout.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

RP = Run Program(	Executable( "PING.EXE"/*path probably not needed*/ ),	Options( {"-n 5", "localhost"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**Ejemplo 2**

```jsl

RP = Run Program(	Executable( "CMD.EXE"/*path probably not needed*/ ),	Options( {"/a", "/q", "/c dir"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**Ejemplo 3**

```jsl

commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};icommand = 0;RP = Run Program(	Executable( "CMD.EXE" ),	Options( {"/a", "/q"} ),	ReadFunction( Function( {this}, Write( this << Read ) ) ),	WriteFunction(		Function( {this},			icommand++;			If( icommand <= N Items( commands ),				this << Write( commands[icommand] );				Show( commands[icommand] );			,				this << WriteEOF;				Show( this << CanRead, this << CanWrite, this << isReadEOF );			);		)	));

```

### Schedule

**Sintaxis:** Schedule( sec, scpt )

**Descripción:** Programa un evento que ejecuta el argumento de script scpt transcurridos sec segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Schedule(	10,	Beep();	Print( "Time's up!" ););

```

### Set Clipboard

**Sintaxis:** Set Clipboard( text )

**Descripción:** Coloca el texto especificado en el portapapeles del sistema que utiliza el menú Edición.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Set Clipboard( "example" );

```

### Set Platform Preference

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Preference

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Sintaxis:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**Descripción:** Establece la visibilidad de una barra de herramientas determinada para una clase de ventana concreta. El nombre de la barra de herramientas se refiere al nombre interno de la misma. Si se introduce "Default" como nombre de la barra de herramientas, se restablece la barra de herramientas predeterminada para la clase de ventana correspondiente. Ejemplos de nombres de clase de ventana son Data Table, Script, Report y Journal. Si el nombre de clase de ventana es All, entonces se establece la visibilidad de la barra de herramientas especificada en todas las clases de ventanas. 

Devuelve 1 si la operación se ha realizado con éxito y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

// Make the Analyze toolbar visible in Script windowsSet Toolbar Visibility( "Analyze", Script, true );// Make the Analyze toolbar visible in all classes of windowsSet Toolbar Visibility( "Analyze", All, true );// Revert Script windows to the default toolbar set for Script windowsSet Toolbar Visibility( Default, Script );// Revert all windows to their default toolbar setSet Toolbar Visibility( Default, All );

```

### Shortest Edit Script

**Sintaxis:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Descripción:** Devuelve uno de los scripts de edición más cortos para convertir la cadena de caracteres A en la cadena de caracteres B. La forma simple sólo devuelve una lista. strings() y lines() disponen de una opción para devolver una matriz o una lista, mientras que sequences() solamente devuelve una matriz. El elemento opcional limit() detiene la función antes de tiempo si la lista de edición contiene más inserciones y eliminaciones que los indicados por limit. lines() compara líneas en lugar de caracteres. Los elementos opcionales ignore("caracteres") o ignoreWhiteSpace() tienen como valor predeterminado no ignorar ningún carácter. ESC detiene la función si es necesario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),	i++,	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2		] /* the snippet */	));common;

```

### Show Addin Builder Dialog

**Sintaxis:** Show Addin Builder Dialog()

**Descripción:** Abre un cuadro de diálogo que se puede utilizar para generar complementos personalizados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**Sintaxis:** Show Addins Dialog()

**Descripción:** Abre un cuadro de diálogo que muestra el estado de todos los complementos registrados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Addins Dialog();

```

### Show Commands

**Sintaxis:** Show Commands( &lt;keyword=Builtins&gt; )

**Descripción:** Crea una o más tablas de datos que contienen información sobre varios componentes de JSL. El argumento keyword determina el contenido de la tabla de salida. Especifique Elementos integrados (el valor predeterminado) para las funciones y operadores integrados. Especifique Elementos para scripts para todos los comandos que admitan scripts para los objetos. Especifique las traducciones del inglés y las versiones localizadas de los comandos que admiten scripts. Especifica los cuadros de visualización para los comandos que admiten scripts relacionados con los cuadros de visualización y los segmentos de visualización. Especifique Nombres que admiten scripts para los nombres de los objetos que admiten scripts. Especifique Nombres de plataforma para los nombres de las plataformas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Commands();

```

### Show Preferences

**Sintaxis:** Show Preferences()

**Descripción:** Muestra en el registro la configuración actual de preferencias.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Preferences();

```

### Show Properties

**Sintaxis:** Show Properties( object )

**Descripción:** Muestra en el registro los mensajes a los que un objeto puede responder.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**Sintaxis:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Descripción:** Genera una secuencia de números casi aleatorios que llenan el espacio con la secuencia de Sobol en hasta 4000 dimensiones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Sintaxis:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**Descripción:** Crea una variable de socket que se puede comunicar con sockets en el propio ordenador u otro conectado a la red. El argumento predeterminado es STREAM. Puede probarlo con el sitio web de su propia empresa.

**JMP Versión agregada:** Antes de la versión 14

```jsl

// see the socket's OBJECT messages in the scripting index for better examplestCall = Socket();tcall << Ioctl( FIONBIO, 1 );rc = tCall << connect( "www.jmp.com", "80" );If( rc[2] == "ok",	tCall << <<Char To Blob(		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",		"ASCII~HEX"	);	While( 1,		tMessage = tCall << Recv( 100000 );		If(			tMessage[2] == "ok",				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes		,			Starts With( tMessage[2], "WOULDBLOCK" ),				Show( "waiting" ) // sometimes data might not be available yet		,			Starts With( tMessage[2], "CLOSED" ),				Break(); // this is the desired result		, // else			Show( tMessage );			Stop();		);	);	tCall << Close();// done, // else	Show( rc );	Stop(););

```

### Speak

**Sintaxis:** Speak( text, &lt;Wait( sync )&gt; )

**Descripción:** Convierte en voz el texto, siempre que el sistema operativo lo admita. El argumento opcional Wait(true) sirve para especificar el retraso de la ejecución del script hasta que finalice la locución.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Speak( "Hello" );

```

### Status Msg

**Sintaxis:** Status Msg( message )

**Descripción:** Muestra el mensaje especificado en la barra de estado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Status Msg( "calculating..." );

```

### Subtract

**Sintaxis:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Descripción:** Resta todos los argumentos subsiguientes al primer argumento. Los argumentos pueden ser números, matrices o listas de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

6 - 2 - 1;

```

### Unregister Addin

**Sintaxis:** Unregister Addin( uniqueId)

**Descripción:** Elimina el registro de un complemento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**Sintaxis:** Web( string, &lt;JMP Window&gt; )

**Descripción:** Abre la URL o el archivo almacenado en string en el navegador web predeterminado. El segundo argumento opcional especifica que el HTML se abre en una ventana del navegador de JMP.

**JMP Versión agregada:** Antes de la versión 14

#### Controlador de sucesos

```jsl

//Making a clickable link show up in a formula columnNew Table( "Example",	Add Rows( 2 ),	New Column( "URL",		"Character",		"Nominal",		Formula( "https://www.jmp.com/" || :Page ),		Set Property(			"Event Handler",			Event Handler(				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )			)		)	),	New Column( "Page",		"Character",		"Nominal",		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )	));

```

#### Simple

```jsl

Web( "http://www.jmp.com/" );

```

### XML Attr

**Sintaxis:** value = XML Attr( attr name ); aa = XML Attr()

**Descripción:** Extrae el valor, en forma de cadena de caracteres, de un atributo XML en el contexto aplicación del comando Parse XML(). Si no se indica ningún nombre, devuelve un arreglo asociativo de todos los pares nombre/valor.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### XML Decode

**Sintaxis:** text = XML Decode( textxml )

**Descripción:** Descodifica símbolos en XML en forma de texto ordinario. Sustituye " por ", < por <, &gt por >; & por &.

**JMP Versión agregada:** Antes de la versión 14

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Sintaxis:** textxml = XML Encode( text )

**Descripción:** Prepara un texto para introducirlo en XML, sustituyendo " por ", < por <, > por > & por &.

**JMP Versión agregada:** Antes de la versión 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Sintaxis:** value = XML Text()

**Descripción:** Extrae el texto de cadena del cuerpo de una etiqueta XML en el contexto de la evaluación con el comando Parse XML().

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### \\[...]\\

**Sintaxis:** y = \\[string]\\

**Descripción:** Los pasajes que requieren numerosos caracteres de escape pueden utilizar el separador \\[...]\\.

**JMP Versión agregada:** Antes de la versión 14

```jsl

jslPhrase ="The JSL to do this is :\[a = "hello";b = a|| " world.";show(b);]\ and you use the Submit command to run it.";Show( jslPhrase );

```

