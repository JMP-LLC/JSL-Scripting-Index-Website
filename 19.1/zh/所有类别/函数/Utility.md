# Utility



### Add

**语法:** y = x0 + x1; y = Add( x0, x1, ... )

**说明:** 将所有参数相加，这些参数可以是数字、矩阵或数字列表。

**JMP添加的版本:** 早于版本 14

```jsl

Pi() + 10;

```

### Beep

**语法:** Beep()

**说明:** 发出警示声。

**JMP添加的版本:** 早于版本 14

```jsl

Beep();

```

### Blob MD5

**语法:** blobResult = Blob MD5( blob )

**说明:** 从源 BLOB（二进制大对象）生成 16 字节的 BLOB。这一 16 字节的 BLOB 是源 BLOB 的 MD5 校验和（或者是 Hash）。

**JMP添加的版本:** 早于版本 14

```jsl

Hex(/* make it printable */ Blob MD5(/* get the hash */		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",			BLOB/* the result is a BLOB, not a string */		)	)) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */;

```

### Blob Peek

**语法:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**说明:** 根据给定 blob 的一小部分字节创建新的 blob。offset 参数从零开始计数，因此第一个字节的偏移为零。

**JMP添加的版本:** 早于版本 14

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**语法:** y = Build Information()

**说明:** 返回内部版本的日期和时间、发布版或调试内部版本以及产品名称。

**JMP添加的版本:** 早于版本 14

```jsl

Build Information();

```

### Caption

**语法:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**说明:** 在 {h, v} 指定的位置显示包含 text 参数指定的文本的说明文字窗口。Delayed( seconds ) 参数设置每个说明文字前面的等待时间（以秒表示）。

**JMP添加的版本:** 早于版本 14

#### 删除说明文字

```jsl

Caption( "explanation" );Wait( 2 );Caption( remove );

```

#### 已格式化说明文字

```jsl

Caption(	{100, 200},	"explanation",	Font( "Arial Black" ),	Font Size( 16 ),	Text Color( "blue" ),	Back Color( "yellow" ),	Spoken( 1 ));

```

### Current Journal

**语法:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**说明:** 返回对当前项目中当前记录的引用（若项目中没有运行脚本则没有项目）。



要指定项目，将可选 Project() 参数与标题、索引、显示框或窗口对象一起使用。使用 Project(0) 指定当在项目中运行脚本时没有项目。



若给定项目中不存在当前记录，则自动创建一个。

**JMP添加的版本:** 早于版本 14

```jsl

Current Journal();

```

### Data Connector Registry

**语法:** Data Connector Registry()

**说明:** JMP 数据连接器的集合。

**JMP添加的版本:** 18

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**语法:** y = Open Datafeed( ... )

**说明:** 创建一个对象和窗口，以便您能够发送消息来管理实时数据传送。

**JMP添加的版本:** 早于版本 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Debug Break

**语法:** Debug Break()

**说明:** 当在 JSL 调试器中计算该表达式时，调试器停止执行脚本。

**JMP添加的版本:** 早于版本 14

```jsl

// Right-click and select Debug.// In the JSL Debugger, click Run.x = 5;y = 8;Debug Break();z = x + yy;Show( z );

```

### Decode URI

**语法:** Decode URI( value )

**说明:** 使用 URI 编码进行字符串编码

**JMP添加的版本:** 14

```jsl

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**语法:** y = Decode64 Blob( base64String )

**说明:** 将 base 64 文本的可打印字符串解码为 blob。

**JMP添加的版本:** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**语法:** y = Decode64 Double( base64String )

**说明:** 从 Base64 编码字符串返回双精度浮点数。

**JMP添加的版本:** 早于版本 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**语法:** Disable JMP Live URL(url)

**说明:** 禁用 JMP Live URL。该方法仅在 jmpStartAdmin.jsl 中可用。星号 \* 可用作通配符以将 URL 指定为 \*（任意 URL）、\*.jmp.com（以 .jmp.com 结束的 URL）、http://public.\*（以 http://public. 开头的 URL）或 \*public\*（包含 public 的 URL）。

**JMP添加的版本:** 15

```jsl

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**语法:** Disable Proxy Settings( 1|0 )

**说明:** 禁用或启用 jmpStartAdmin.jsl 执行期间的代理设置。默认情况下启用代理设置。

**JMP添加的版本:** 15

```jsl

Disable Proxy Settings( 1 );

```

### Divide

**语法:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**说明:** 从第一个参数除以所有的后续参数。参数可以是数字、矩阵或数字列表。当仅使用一个参数调用时，结果将为倒数。

**JMP添加的版本:** 早于版本 14

#### 倒数

```jsl

x = Divide( 5 );y = 1 / 5;Show( x, y );

```

#### 简单

```jsl

6 / 3 / 2;

```

### Empty

**语法:** y = Empty()

**说明:** 返回空值。用于未指定参数的公式编辑器中。

**JMP添加的版本:** 早于版本 14

```jsl

Empty();

```

### Enable JMP Live URL

**语法:** Enable JMP Live URL(url)

**说明:** 启用 JMP Live URL。该方法仅在 jmpStartAdmin.jsl 中可用。星号 \* 可用作通配符以将 URL 指定为 \*（任意 URL）、\*.jmp.com（以 .jmp.com 结束的 URL）、http://public.\*（以 http://public. 开头的 URL）或 \*public\*（包含 public 的 URL）。

**JMP添加的版本:** 15

```jsl

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**语法:** Enable Proxy Settings( 1|0 )

**说明:** 启用或禁用 jmpStartAdmin.jsl 执行期间的代理设置。默认情况下启用代理设置。

**JMP添加的版本:** 15

```jsl

Enable Proxy Settings( 0 );

```

### Encode URI

**语法:** Encode URI( value )

**说明:** 使用 URI 编码进行字符串编码

**JMP添加的版本:** 14

```jsl

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**语法:** s = Encode64 Blob( x )

**说明:** 将 blob 编码为 base 64 文本的可打印字符串。

**JMP添加的版本:** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**语法:** s = Encode64 Double( x )

**说明:** 返回浮点数的 Base64 字符串编码。

**JMP添加的版本:** 早于版本 14

```jsl

Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**语法:** points = Faure Quasi Random Sequence(nDim, nRow)

**说明:** 使用 Faure 序列生成一系列空间填充拟随机数。

**JMP添加的版本:** 早于版本 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Format Pattern

**语法:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;) x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; ) obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**说明:** 格式模式是定义日期时间格式的字符串，例如“<YYYY></><MM></><DD> <hh><:><mm><:><ss><ampm>”。尖括号中的模式部分称为字段描述符。字段描述符表示一个值（例如“<YYYY>”，这是一个四位数的年份）或其他日期时间文本（例如，“</>”，它是一个特定于语言/区域的日期分隔符）。格式模式使您可以构建 JMP 中未提供的格式。这些格式可用于格式化和输入数据。

**JMP添加的版本:** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );Show( s, x );                                                /*Descriptores de campoFechas(no se pueden utilizar con descriptores de campo de duración)================================================================================<YYYY>        Año de cuatro dígitos. (Acepta entre 1 y 4 dígitos en la entrada).<YY>          Año de dos dígitos<yyyy>        Año ISO de cuatro dígitos; corresponde a semanas ISO. (Acepta de 1              a 4 dígitos en la entrada).<yy>          Año ISO de dos dígitos; corresponde a semanas ISO.<YYYY.>       Año con año fraccional. Describe completamente la fecha y la hora.<M>           Número de mes (1..12)<MM>          Número de mes, completado con ceros (01..12)<Month>       Nombre del mes largo<Mmm>         Nombre del mes abreviado<MMM>         Nombre del mes "en línea". Siempre tres letras.<WW1>         Número de semana de dos dígitos, completado con ceros. La semana 2              comienza el primer domingo del año. La semana 1 es una semana              parcial antes del primer domingo. (01..54)<WW2>         Número de semana de dos dígitos, completado con ceros. La semana 1              comienza el primer domingo del año. La semana 0 es una semana              parcial antes del primer domingo. (00..53)<ww>          Número de semana ISO de dos dígitos, completado con ceros. La              semana comienza el lunes. La semana 1 es la primera semana de ese              año con cuatro o más días. No hay semanas parciales, sino que la              primera o la última semana se pueden considerar del año anterior o              el siguiente, respectivamente. (01..53)<D>           Día del mes (1..31)<DD>          Día del mes, completado con ceros (01..31)<Q>           Trimestre del año (1..4)<Q#>          "T" seguido del trimestre del año (1..4)<DayOfWeek>   Nombre del día de la semana<DW>          Día de la semana en número. 1 = domingo, 7 = sábado<dw>          Día de la semana en número. 1 = lunes, 7 = domingo</>           El separador de fecha de la configuración regional. (Acepta los              separadores más comunes en la entrada).<->           El separador de fecha ISO "-". (Acepta los separadores más comunes              en la entrada).</?>          Separador de fecha opcional en la entrada de fecha. El separador              no se escribe nunca en la salida.<'T'>         La "T" en las fechas ISOHoras(algunas se pueden utilizar con descriptores de campo de duración)================================================================================<hh>          Se ha aplicado un formato de hora acorde a la configuración              regional actual. Si hay presente un descriptor <ampm>, se usará un              reloj de 12 o 24 horas en función de la configuración regional. Si              hay presente un descriptor <AMPM>, se usará un reloj de 12 horas.              De lo contrario, se usará un reloj de 24 horas. (No se puede              utilizar con descriptores del campo de duración).<zhh>         Se ha aplicado un formato de hora acorde con la configuración              regional actual y completado con ceros. Si hay presente un              descriptor <ampm>, se usará un reloj de 12 o 24 horas en función              de la configuración regional. Si hay presente un descriptor              <AMPM>, se usará un reloj de 12 horas. De lo contrario, se usará              un reloj de 24 horas. (No se puede utilizar con descriptores del              campo de duración).<hh24>        Hora en formato de 24 horas y completada con ceros (00..23)<mm>          Minuto, completado con ceros (00..59)<ss>          Segundo, completado con ceros (00..59)<ampm>        Símbolo a. m./p. m. para la configuración regional actual. (No se              puede utilizar con descriptores de campo de duración).<AMPM>        Símbolo de a. m./p. m. "a. m." o "p. m." independiente de la              configuración regional. (No se puede utilizar con descriptores del              campo de duración).<:>           El separador de fecha y hora de la configuración regional.<::>          El separador de fecha y hora ISO ":". (También acepta el separador              de fecha y hora de la configuración regional en la entrada).<:?>          Separador de hora opcional en la entrada de fecha. El separador no              se escribe nunca en la salida.Duraciones(no se puede utilizar con los descriptores de campo de fecha)================================================================================<Day>         Conteo de días. Se utiliza como el campo más significativo de las              duraciones. No se puede utilizar con ningún otro "conteo".<Hour>        Conteo de horas. Se utiliza como el campo más significativo de las              duraciones. No se puede utilizar con ningún otro "conteo".<Minute>      Conteo de minutos. Se utiliza como el campo más significativo de              las duraciones. No se puede utilizar con ningún otro "conteo".Otro================================================================================<<>           Reemplazado por un "<"*/

```

### Get Addin

**语法:** Get Addin( ID )

**说明:** 检索按 ID 指定的注册插件。

**JMP添加的版本:** 早于版本 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**语法:** Get Addins( )

**说明:** 返回所有注册插件的列表。

**JMP添加的版本:** 早于版本 14

```jsl

addins = Get Addins();addin ids = Get Addins() << id;Show( addins, addin ids );

```

### Get Addr Info

**语法:** Get Addr Info( string )

**说明:** 查找名称的数值地址。绝大多数情况下，使用该名称是为实现将来 IPV6 的兼容性。

**JMP添加的版本:** 早于版本 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**语法:** Get Clipboard()

**说明:** 获取剪贴板的当前内容

**JMP添加的版本:** 早于版本 14

```jsl

Get Clipboard();

```

### Get Name Info

**语法:** Get Name Info( string )

**说明:** 查找数值地址的名称。绝大多数情况下，使用该名称是为实现将来 IPV6 的兼容性。

**JMP添加的版本:** 早于版本 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**语法:** notebookList = Get Notebook List()

**说明:** 返回所有打开笔记本的列表。

**JMP添加的版本:** 19

### Get OAuth2 Grant Types

**语法:** Get OAuth2 Grant Types

**说明:** 获取支持的 JMP OAuth2 授权类型。

**JMP添加的版本:** 15

```jsl

/*https://oauth.net/2/grant-types/*/grant_types = Get OAuth2 Grant Types();Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP添加的版本:** 15

```jsl

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";aa = Get OpenID Connect Discovery( url );Show( aa );

```

### Get OpenIDC Discovery

**JMP添加的版本:** 15

### Get Platform Preference

**语法:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**说明:** 获取指定的平台首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**语法:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**说明:** 获取指定的平台首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**语法:** Get Policies( &lt;Machine|User|Both&gt; )

**说明:** 返回包含当前策略名称和值的关联数组。

**JMP添加的版本:** 18

```jsl

Get Policies();

```

### Get Preference

**语法:** Get Preferences( pref1, ... )

**说明:** 获取指定的首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**语法:** Get Preferences( pref1, ... )

**说明:** 获取指定的首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Get Preferences( Graph marker size );

```

### Glue

**语法:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**说明:** 计算每一个参数，并返回最后的结果。

**JMP添加的版本:** 早于版本 14

```jsl

ex1 = 1;ex2 = 2;

```

### Gzip Compress

**语法:** blob = Gzip Compress( blob )

**说明:** 将 blob 的数据压缩为 gzip blob。

**JMP添加的版本:** 14

```jsl

Gzip Compress(	Char To Blob( "random data does not usually compress well and may get larger" ));

```

### Gzip Uncompress

**语法:** blob = Gzip Uncompress( blob )

**说明:** 将 blob 的 gzip 数据解压缩为 blob。

**JMP添加的版本:** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/	Char To Blob(		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",		"ascii~hex"	));

```

### Host is

**语法:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**说明:** 若当前 JMP 应用程序与参数匹配，则返回 1；否则返回 0。Windows 或 Mac 参数用于检验指定的操作系统。Bits32 或 Bits64 参数用于检验指定的 32 位或 64 位 JMP 应用程序。每次只能检验一个参数。

**JMP添加的版本:** 早于版本 14

```jsl

If( Host is( "Mac" ),	Show( "On Mac" ),	Show( "Not on Mac" ));If( Host is( "Bits64" ),	Show( "64 bit" ));If(	Host is( "x86_64" ), Show( "On x86_64" ),	Host is( "arm64" ), Show( "On arm64" ));

```

### Is Alt Key

**语法:** y = Is Alt Key()

**说明:** 按 Alt 键返回 1，否则返回 0。用于图形回调脚本。在 Mac 计算机上，Alt 即 Option 键。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Command Key

**语法:** y = Is Command Key()

**说明:** 按 Command 键返回 1，否则返回 0。用于图形回调脚本。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Command Key(),			Text( {60, 50}, "Command Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Context Key

**语法:** y = Is Context Key()

**说明:** 按 Context 键返回 1，否则返回 0。用于图形回调脚本。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Context Key(),			Text( {60, 50}, "Context Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Control Key

**语法:** y = Is Control Key()

**说明:** 按 Control 键返回 1，否则返回 0。用于图形回调脚本。在 Mac 计算机上，Control 即 Command 键。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is JMP Live URL Enabled

**语法:** Is JMP Live URL Enabled(url)

**说明:** 确定指定的 URL 是否可以在该 JMP 会话中使用。可以使用 jmpStartAdmin.jsl 脚本启用和/或禁用 URL。这不会确定它是否为有效的 URL，也不确定用户是否可以登录。它仅确定 URL 是否被 JMP 阻止。

**JMP添加的版本:** 15

```jsl

url = "http://public.jmp.com";Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**语法:** y = Is Option Key()

**说明:** 按 Option 键返回 1，否则返回 0。用于图形回调脚本。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Option Key(),			Text( {60, 50}, "Option Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Shift Key

**语法:** y = Is Shift Key()

**说明:** 按 Shift 键返回 1，否则返回 0。用于图形回调脚本。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### JMP Product Name

**语法:** y = JMP Product Name()

**说明:** 根据所许可的产品版本，返回 "Standard" 或 "Pro"。

**JMP添加的版本:** 早于版本 14

```jsl

JMP Product Name();

```

### JMP Version

**语法:** y = JMP Version()

**说明:** 返回 JMP 版本（发布版本.修订版本{.修复版本}）；不适用于 6.0 以前的版本。

**JMP添加的版本:** 早于版本 14

```jsl

JMP Version();

```

### JSL Encrypted

**语法:** y = JSL Encrypted(script)

**说明:** 在另一脚本中嵌入加密脚本。通过选择脚本编辑器主菜单中的“编辑 > 加密脚本”，创建加密脚本。输入您的密码，然后加密文本将出现在新窗口中。将该文本复制到 JSL Encrypted("") 命令中即可在另一脚本中嵌入加密脚本。

**JMP添加的版本:** 早于版本 14

```jsl

JSL Encrypted(	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*");

```

### JSL Quote

**语法:** y = JSL Quote(script)

**说明:** 在变量中储存 JSL 脚本，包括所有注释和格式。

**JMP添加的版本:** 早于版本 14

```jsl

x = JSL Quote(/* Begin quote. */    For (i = 1, i <= 5, i++,        // Print the value of i.        Print(i);    );    // End expression.);New Window( "editor", Script Box( x ) );

```

### Load DLL

**语法:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**说明:** 加载指定路径所指向的 DLL。

**JMP添加的版本:** 早于版本 14

#### Cross platform using Base Name()

```jsl

dll = Load DLL( Base Name( "/path/to/dll/financial" ) );// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac// Declarations for "irr" and "npv" are auto-loadedmyirr = dll << irr( 0.1, -51000, 1000, 900, 950 );mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );dll << UnloadDLL();

```

#### Windows only

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << CallDLL( "MessageBeep", "n", 0 );	Wait( 1 );	dll << CallDLL( "MessageBeep", "n", 0 );	dll << UnloadDLL(););

```

### Mail

**语法:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**说明:** 若操作系统允许，则创建一个指定的传出邮件消息。并不是所有选项都适用于所有操作系统版本。详细信息，请参见帮助。

**JMP添加的版本:** 早于版本 14

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**语法:** menu = Main Menu( command, &lt;window name&gt; )

**说明:** 执行指定的主菜单命令。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Main Menu( "Sample Index" );

```

**示例 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Minus

**语法:** y = -x; y = Minus( x )

**说明:** 对 x 求反，参数可以是数值、矩阵或数值列表。

**JMP添加的版本:** 早于版本 14

```jsl

-Pi();

```

### Multiple File Import

**语法:** mfiObj = Multiple File Import();

**说明:** 创建“多个文件导入”对象；该对象接受设置文件夹、过滤文件和导入的消息。要显示对话框，请使用“创建窗口”消息。要立即导入，请使用“导入数据”消息，该消息将返回已创建表的列表。

**JMP添加的版本:** 14

**交互式示例**

```jsl

// use the save-script-to-script-window button // in the MFI dialog to see more messages// for filtering files and controlling the importMultiple File Import(	<<Set Folder( "$DESKTOP" ),	<<Set Name Filter( "*.csv;" ),	<<Set Name Enable( 1 )) << Create Window;

```

**脚本示例**

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );mfi << Set Name Filter( "*.txt" );mfi << Set Name Enable( 1 );tables = mfi << Import Data();

```

### Multiply

**语法:** y = x0 * x1; y = Multiply( x0, x1, ... )

**说明:** 将所有参数相乘，这些参数可以是数字、矩阵或数字列表。

**JMP添加的版本:** 早于版本 14

```jsl

2 * Pi();

```

### Name

**语法:** Name(string)

**说明:** 名称只是用于调用某项。名称用于变量和函数，并且可以直接在脚本中使用，但需要遵守一些规则。若名称以字母字符或下划线开头，并且后面的字符为字母数字、空格、Unicode 数学符号和某些标点符号（撇号 (’)、百分比符号 (%)、句点 (.)、反斜杠 (\\) 和下划线 (_)），则名称可以直接在脚本中使用。不遵守这些规则的名称可以通过使用 Name() 关键字来使用。

**JMP添加的版本:** 14

```jsl

Name( "taxable income(2011)" ) = 456000;tax = .25;Print( tax * Name( "taxable income(2011)" ) );

```

### New HTTP Request

**语法:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**说明:** 创建请求以发送至 Web 服务。

**JMP添加的版本:** 14

```jsl

getSentiment = Function( {text},	{Default Local},	fields = Associative Array();	fields["text"] = text;	s = New HTTP Request(		URL( "http://text-processing.com/api/sentiment/" ),		Method( "POST" ),		Form( Fields( fields ) ),		Headers( {"Accept: application/json"} )	) << Send;	sAsList = Parse JSON( s );	retval = Associative Array();	retval["pos"] = sAsList["probability"]["pos"];	retval["neg"] = sAsList["probability"]["neg"];	retval["neutral"] = sAsList["probability"]["neutral"];	retval["label"] = sAsList["label"];	retval;);                         addSentimentColumns = Function( {dt, colname, bLabel, bValues},	{Default Local},	col = Column( dt, colname );	colLabel = "Sentiment_Label(" || colname || ")";	colValPos = "Sentiment_Pos(" || colname || ")";	colValNeg = "Sentiment_Neg(" || colname || ")";	colValNeutral = "Sentiment_Neutral(" || colname || ")";	If( bLabel,		dt << New Column( colLabel, Character )	);	If( bValues,		dt << New Column( colValPos, Numeric );		dt << New Column( colValNeg, Numeric );		dt << New Column( colValNeutral, Numeric );	);	For( i = 1, i <= N Rows( dt ), i++,		sentiment = getSentiment( col[i] );		If( bLabel,			Column( dt, colLabel )[i] = sentiment["label"]		);		If( bValues,			Column( dt, colValPos )[i] = sentiment["pos"];			Column( dt, colValNeg )[i] = sentiment["neg"];			Column( dt, colValNeutral )[i] = sentiment["neutral"];		);	););                         dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Multi HTTP Request

**语法:** multi_request = New Multi HTTP Request()

**说明:** 并行发送或下载多个 HTTP 请求。

**JMP添加的版本:** 17

```jsl

requests = New Multi HTTP Request();requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"		)	));requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"		)	));data = requests << Download( "show progress", "detailed" );http_requests = requests << Get Requests();For( i = 1, i <= N Items( http_requests ), i++,	Show( http_requests[i] << Get Mime Type() ));

```

### New OAuth2

**语法:** oauth2 = New OAuth2()

**说明:** 创建新的 OAuth2 授权。

**JMP添加的版本:** 15

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";redirect_url = "http://localhost/myapp/";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";client_secret = "JqQX2PNo9bpM0uEihUPzyrh";scope = "openid offline_access https://graph.microsoft.com/user.read";auth_fields = [=> ];token_fields = [=> ];                                          oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );                                          auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;                                          oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );                                          auth_header = oauth2 << Get Auth Header();request = New HTTP Request(	URL( "https://graph.microsoft.com/v1.0/me" ),	Headers( {auth_header} ),	Method( "GET" ));data = request << Send;

```

### New OAuth2 Token

**语法:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**说明:** 创建 OAuth2 令牌以便安全访问来自多个不同 Web API 的数据。

**JMP添加的版本:** 15

```jsl

token = New OAuth2 Token(	Account( "jmpgoogldev@gmail.com" ),	Client ID( "test" ),	Client Secret( "test 2" ),	Refresh Token( "" ),	Token URL( "" ));

```

### New Web Report

**语法:** obj = New Web Report(...)

**说明:** 创建交互式 HTML 报表。

**JMP添加的版本:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );webreport = New Web Report(	Add Report(		Distribution(			Continuous Distribution( Column( :weight ) ),			Nominal Distribution( Column( :age ) )		),		Title( "Distribution Web Report" ),		Description( "This report was created with the sample found in the Scripting Index" )	),	Add Report(		Bivariate(			Y( :weight ),			X( :height ),			Automatic Recalc( 1 ),			Fit Line( {Line Color( {213, 72, 87} )} ),			Local Data Filter( Add Filter( columns( :sex ) ) )		)	));webreport << Index( Title( "Big Class Report" ) );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Notebook

**语法:** nb = Notebook( name|number )

**说明:** 返回对指定笔记本的引用。

**JMP添加的版本:** 19

### Open Datafeed

**语法:** y = Open Datafeed( ... )

**说明:** 创建一个对象和窗口，以便您能够发送消息来管理实时数据传送。

**JMP添加的版本:** 早于版本 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Open Help

**语法:** w = Open Help( "Help" | "Scripting Index", ... )

**说明:** 打开 JMP 联机帮助或“脚本索引”。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Open Help( "Help" );

```

**示例 2**

```jsl

Open Help(	"Scripting Index",	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext( Category( "Functions" ) ));

```

**示例 3**

```jsl

Open Help(	"Scripting Index",	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext(		Category( "All Categories" ),		Object( "Search results" ),		Method( "Get Alpha" )	));

```

### Parse XML

**语法:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**说明:** 使用指定的 XML 标记的 OnElement 表达式解析 XML 表达式。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

/*See example two for more details*/ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

**示例 2**

```jsl

doc ="<a title='one'>    WWWa    <b>BB<c>ZZZ</c>B1</b>    XXXa    <b>BBB2</b>    YYYa    <c>CCC</c></a>";// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,// to show why text should be collected by Text(...) and then processed by EndTag(...)// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.docname = "undefined";doctext = "";recordtext = "";records = {};NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting levelParse XML( doc,	On Element(		"a",		Start Tag(			docname = XML Attr( "title" );			NestLevel++;		),         // decide here to trim the CRLF and blanks and use a single blank		Text( doctext = doctext || Trim( XML Text() ) || " " ),		End Tag( NestLevel-- )	),	On Element(		"b",		Start Tag( NestLevel++ ),         // comment out the next line and...		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),		End Tag(            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records			// recordtext = XMLText();			Insert Into( records, recordtext );			recordtext = "";			NestLevel--;		)	));Show( docname, doctext, records, NestLevel );

```

### Pdf Page Count

**语法:** Pdf Page Count( file name)

**说明:** 返回 PDF 文件中的页数。

**JMP添加的版本:** 早于版本 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**语法:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**说明:** 按指定值设置平台首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**语法:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**说明:** 按指定值设置平台首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Pref

**语法:** Preferences( pref1( value1 ), ... )

**说明:** 按指定值设置首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**语法:** Preferences( pref1( value1 ), ... )

**说明:** 按指定值设置首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**语法:** Preferences( pref1( value1 ), ... )

**说明:** 按指定值设置首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**语法:** Preferences( pref1( value1 ), ... )

**说明:** 按指定值设置首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**语法:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;AutoLoad(0|1)&gt; )

**说明:** Register an add-in. An Autoload value of 1 forces the add-in to load when registered. A value of 0 leaves the add-in unloaded. If AutoLoad is not specified the addin.def setting will be used if found otherwise the default will be for the add-in to be loaded.

**JMP添加的版本:** 早于版本 14

```jsl

Register Addin(	"com.mycompany.myaddin",	"$DOCUMENTS/myaddin",	displayname( "Sample Addin" ));

```

### Revert Menu

**语法:** Revert Menu()

**说明:** 恢复为出厂默认菜单。

**JMP添加的版本:** 早于版本 14

```jsl

/* Reverts menus back to factory default settings. */

```

### Run Program

**语法:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt; )

**说明:** 使用 stdin 和 stdout 控制外部程序。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

RP = Run Program(	Executable( "PING.EXE"/*path probably not needed*/ ),	Options( {"-n 5", "localhost"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**示例 2**

```jsl

RP = Run Program(	Executable( "CMD.EXE"/*path probably not needed*/ ),	Options( {"/a", "/q", "/c dir"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**示例 3**

```jsl

commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};icommand = 0;RP = Run Program(	Executable( "CMD.EXE" ),	Options( {"/a", "/q"} ),	ReadFunction( Function( {this}, Write( this << Read ) ) ),	WriteFunction(		Function( {this},			icommand++;			If( icommand <= N Items( commands ),				this << Write( commands[icommand] );				Show( commands[icommand] );			,				this << WriteEOF;				Show( this << CanRead, this << CanWrite, this << isReadEOF );			);		)	));

```

### Schedule

**语法:** Schedule( sec, scpt )

**说明:** 计划一个事件，在经过 sec 秒后运行 scpt 脚本参数。

**JMP添加的版本:** 早于版本 14

```jsl

Schedule(	10,	Beep();	Print( "Time's up!" ););

```

### Set Clipboard

**语法:** Set Clipboard( text )

**说明:** 将指定文本添加到“编辑”菜单使用的系统剪贴板。

**JMP添加的版本:** 早于版本 14

```jsl

Set Clipboard( "example" );

```

### Set Platform Preference

**语法:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**说明:** 按指定值设置平台首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**语法:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**说明:** 按指定值设置平台首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Preference

**语法:** Preferences( pref1( value1 ), ... )

**说明:** 按指定值设置首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**语法:** Preferences( pref1( value1 ), ... )

**说明:** 按指定值设置首选项。

**JMP添加的版本:** 早于版本 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**语法:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**说明:** 设置给定类别窗口的给定工具栏的可见性。toolbar-name 是工具栏的内部名称。若 Default 作为工具栏名称传入，则指定的窗口类恢复为该类窗口的默认工具栏集。window-class-name 的示例为数据表、脚本、报表和记录。若 window-class-name 为 All，则为所有类别的窗口设置指定工具栏的可见性。

成功返回 1，失败返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

// Make the Analyze toolbar visible in Script windowsSet Toolbar Visibility( "Analyze", Script, true );// Make the Analyze toolbar visible in all classes of windowsSet Toolbar Visibility( "Analyze", All, true );// Revert Script windows to the default toolbar set for Script windowsSet Toolbar Visibility( Default, Script );// Revert all windows to their default toolbar setSet Toolbar Visibility( Default, All );

```

### Shortest Edit Script

**语法:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**说明:** 返回将字符串 A 转换为字符串 B 的最短编辑脚本之一。简单形式仅返回一个列表。strings() 和 lines() 包含选项，可选择返回矩阵或列表。sequences() 仅返回矩阵。若编辑列表具有的插入和删除比限制多，则可选 limit() 将提前停止函数。lines() 比较行而非字符；可选 ignore("characters") 或 ignoreWhiteSpace() 默认设置为没有忽略的字符。ESC 将停止函数（若需要）。

**JMP添加的版本:** 早于版本 14

```jsl

editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),	i++,	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2		] /* the snippet */	));common;

```

### Show Addin Builder Dialog

**语法:** Show Addin Builder Dialog()

**说明:** 弹出可用于定制插件的对话框。

**JMP添加的版本:** 早于版本 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**语法:** Show Addins Dialog()

**说明:** 弹出显示所有注册插件状态的对话框。

**JMP添加的版本:** 早于版本 14

```jsl

Show Addins Dialog();

```

### Show Commands

**语法:** Show Commands( &lt;keyword=Builtins&gt; )

**说明:** 创建一个或多个数据表，其中包含有关各种 JSL 组件的信息。keyword 参数确定输出表的内容。为内置运算符和函数指定“内置”（默认值）。为对象的所有可脚本化命令指定“脚本化”。为可脚本化命令的英语和本地化版本指定“翻译”。为与显示框和显示段相关的可脚本化命令指定“显示框”。为可脚本化对象的名称指定“脚本化名称”。为平台名称指定“平台名称”。

**JMP添加的版本:** 早于版本 14

```jsl

Show Commands();

```

### Show Preferences

**语法:** Show Preferences()

**说明:** 在日志中显示当前首选项设置。

**JMP添加的版本:** 早于版本 14

```jsl

Show Preferences();

```

### Show Properties

**语法:** Show Properties( object )

**说明:** 在日志中显示对象响应的消息。

**JMP添加的版本:** 早于版本 14

```jsl

Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**语法:** points = Sobol Quasi Random Sequence(nDim, nRow)

**说明:** 使用高达 4000 维中的 Sobol 序列生成一系列空间填充拟随机数。

**JMP添加的版本:** 早于版本 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**语法:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**说明:** 创建可与本机或其他联网计算机进行套接字通信的套接字变量。默认参数为 STREAM。尝试访问您公司的网站。

**JMP添加的版本:** 早于版本 14

```jsl

// see the socket's OBJECT messages in the scripting index for better examplestCall = Socket();tcall << Ioctl( FIONBIO, 1 );rc = tCall << connect( "www.jmp.com", "80" );If( rc[2] == "ok",	tCall << <<Char To Blob(		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",		"ASCII~HEX"	);	While( 1,		tMessage = tCall << Recv( 100000 );		If(			tMessage[2] == "ok",				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes		,			Starts With( tMessage[2], "WOULDBLOCK" ),				Show( "waiting" ) // sometimes data might not be available yet		,			Starts With( tMessage[2], "CLOSED" ),				Break(); // this is the desired result		, // else			Show( tMessage );			Stop();		);	);	tCall << Close();// done, // else	Show( rc );	Stop(););

```

### Speak

**语法:** Speak( text, &lt;Wait( sync )&gt; )

**说明:** 若操作系统支持，则读出文本。指定可选 Wait(true) 参数会延迟脚本在语音读完之后执行。

**JMP添加的版本:** 早于版本 14

```jsl

Speak( "Hello" );

```

### Status Msg

**语法:** Status Msg( message )

**说明:** 在状态栏中显示该指定消息。

**JMP添加的版本:** 早于版本 14

```jsl

Status Msg( "calculating..." );

```

### Subtract

**语法:** y = x0 - x1; y = Subtract( x0, x1, ... )

**说明:** 从第一个参数中减去所有后续参数。参数可以是数字、矩阵或数字列表。

**JMP添加的版本:** 早于版本 14

```jsl

6 - 2 - 1;

```

### Unregister Addin

**语法:** Unregister Addin( uniqueId)

**说明:** 注销插件

**JMP添加的版本:** 早于版本 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**语法:** Web( string, &lt;JMP Window&gt; )

**说明:** 在默认 Web 浏览器中打开储存在“string”中的 URL 或文件。可选的第二个参数指定在 JMP 浏览器窗口中打开 HTML。

**JMP添加的版本:** 早于版本 14

#### 事件处理程序

```jsl

//Making a clickable link show up in a formula columnNew Table( "Example",	Add Rows( 2 ),	New Column( "URL",		"Character",		"Nominal",		Formula( "https://www.jmp.com/" || :Page ),		Set Property(			"Event Handler",			Event Handler(				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )			)		)	),	New Column( "Page",		"Character",		"Nominal",		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )	));

```

#### 简单

```jsl

Web( "http://www.jmp.com/" );

```

### XML Attr

**语法:** value = XML Attr( attr name ); aa = XML Attr()

**说明:** 提取 Parse XML() 命令评估上下文中的 XML 属性的字符串值。若未指定名称，则返回所有属性名称/值对的关联数组。

**JMP添加的版本:** 早于版本 14

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### XML Decode

**语法:** text = XML Decode( textxml )

**说明:** 将 XML 中的符号解码为普通文本，并将 " 改为 "，< 改为 <，&gt 改为 >，& 改为 &。

**JMP添加的版本:** 早于版本 14

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**语法:** textxml = XML Encode( text )

**说明:** 准备嵌入 XML 的文本，将 " 改为 "，< 改为 <，> 改为 >，& 改为 &。

**JMP添加的版本:** 早于版本 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**语法:** value = XML Text()

**说明:** 提取 Parse XML() 命令评估上下文中的 XML 标记主体的字符串文本。

**JMP添加的版本:** 早于版本 14

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### \\[...]\\

**语法:** y = \\[string]\\

**说明:** 需要多个转义字符的段落可以使用分隔符 \\[...]\\。

**JMP添加的版本:** 早于版本 14

```jsl

jslPhrase ="The JSL to do this is :\[a = "hello";b = a|| " world.";show(b);]\ and you use the Submit command to run it.";Show( jslPhrase );

```

