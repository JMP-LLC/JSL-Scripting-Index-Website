# HTTP



## HTTPRequest

### 项消息

#### Authentication Method

**语法:** obj << Authentication Method(method)

**说明:** 强制一个身份验证方法。有效值包括:



	NONE         - 不进行 HTTP 身份验证



	BASIC        - HTTP 基本身份验证



	KERBEROS     - HTTP Kerberos



	NEGOTIATE    - HTTP 协商 (SPNEGO) 身份验证



	NTLM         - HTTP NTLM 身份验证



	ANY          - 所有类型集合（默认）



	ANYSAFE      - 除基本之外的所有类型



	DEFAULT      - 默认身份验证



默认情况下 JMP 和 Web 服务协商最安全的身份验证方法。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Authentication Method( "KERBEROS" );

```

#### Blob

**语法:** obj << Blob( binary data, <content-type> )

**说明:** 该项将设置请求中的 Blob 值。Blob 值将用作文档的正文。请求内容类型标头将自动设置为“Content-Type: application/octet-stream”。

**JMP添加的版本:** 14

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

**语法:** obj << Bypass Proxy(localhost)

**说明:** 不使用代理的主机的逗号分隔列表（若指定了一个）。唯一的通配符是单个 * 字符，它匹配所有主机，可以有效地禁用代理。该列表中的每个名称匹配为包含主机名的域或主机名本身。例如，local.com 匹配 local.com、local.com:80 和 www.local.com，但不匹配 www.notlocal.com。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Proxy Server( "http://my_proxy.com" );
request << Proxy User( "clark%20kent:superman" );
request << Bypass Proxy( "localhost" );

```

#### Certificates

**语法:** obj << Certificates(certificate file)

**说明:** 使用指定的证书文件进行验证。文件可能包含多个 CA 证书。证书必须采用 PEM 格式。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**语法:** obj << Cookie([[ key=> value ]]

**说明:** 设置请求中的 Cookie。

**JMP添加的版本:** 14

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

**语法:** obj << Cookie File(<path>, <"replace" | "rename" | "append">)

**说明:** 指定备用 Cookie 文件。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**语法:** obj << Curlrc(<true | false>)

**说明:** 配置请求以使用标准 .curl 文件。

.curlrc（Windows 上的 _curlrc）文件包含用于 curl 的默认选项。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc( "true" );

```

#### Curlrc File

**语法:** obj << Curlrc File(<path>)

**说明:** 配置请求以使用备用 .curlrc 文件。

.curlrc（Windows 上的 _curlrc）文件包含用于 curl 的默认选项。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );
request << Curlrc( "true" );

```

#### DNS Timeout

**语法:** obj << DNS Timeout(seconds)

**说明:** 连接的默认 DNS 缓存超时为 60 秒。可以调整该值以适应 DNS 缓存。设置为 0 可以完全禁用缓存，或设置为 -1 可以使缓存的条目保留在内存中。

**JMP添加的版本:** 16

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

**语法:** obj << Decode64 Char( value )

**说明:** 使用 Base 64 编码进行字符串解码

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Decode64 Char(
	"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4="
);

```

#### Download

**语法:** obj << Download( path, <"replace" | "rename" | "append"> )

**说明:** 将 HTTP 响应下载至文件。从 Web 服务下载文件时很有用。replace 选项会覆盖任何现有文件。当找到重复名称时，rename 选项使用顺序文件名 (file, file(1), file(2)...)。append 选项会追加至现有文件。使用 show progress 显示带有已下载文件百分比的可取消进度条。

**JMP添加的版本:** 14

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

**语法:** obj << Encode64 Char( value )

**说明:** 使用 Base 64 编码进行字符串编码

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Encode64 Char( "Man is distinguished, not only by his reason, but ..." );

```

#### File

**语法:** obj << File ( path, <content-type> )

**说明:** 该项将在请求中设置“文件”值。“文件”内容将用作文档的正文。请求内容类型标头将自动根据文件扩展名或 application/octet-stream（若未找到）设置为适当的内容。

**JMP添加的版本:** 14

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

**语法:** obj << Form(Fields([[ key=> value ]], <URI Encode(1 | 0 | Safe(...))>), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**说明:** 设置请求中的表单数据值。该表单将用作文档的正文。表单数据可以具有字段和文件元素。

**JMP添加的版本:** 14

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

**语法:** obj << Get Certificate Info

**说明:** 显示有关证书的详细信息，例如颁发它的人员、何时到期，以及其他可确保证书可信的信息。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "https://google.com" ) );
request << Get Certificate Info;

```

#### Get Last URL

**语法:** obj << Get Last URL

**说明:** 获取请求中使用的最后的 URL。用于查找重定向 URL。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**语法:** mimetype = obj << Get MIME Type

**说明:** “发送”（或“下载”）与请求一起使用之后，该项可用于检索返回数据的 MIME 类型。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
request = New HTTP Request( URL( url ), Method( "GET" ) );
request << Send;
Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**语法:** obj << Get Last Method

**说明:** 获取请求中使用的最后一个 HTTP 方法。

**JMP添加的版本:** 14

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

**语法:** obj << Get Response Headers

**说明:** 响应标头是发送请求之后返回的键/值对的关联数组。HTTP 标头定义位于此处: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html。“Date”、“Expires”和“Last-Modified”键将转换为 JMP 日期。“Age”和“Content-Length”键将转换为数字。所有其他值为字符。

**JMP添加的版本:** 14

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

**语法:** obj << Get Status

**说明:** "Send"之后返回请求的状态。若没有连接错误，该状态为 HTTP 状态。否则，它为连接状态。200-299 为成功。

**JMP添加的版本:** 14

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

**语法:** obj << Get Status Message

**说明:** "Send"消息之后返回请求的状态消息。若没有连接错误，该状态消息为 HTTP 状态消息。否则，它为连接状态消息。状态 200-299 为成功。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**语法:** obj << Get Status Msg

**说明:** "Send"之后返回请求的状态消息。该项是 GetStatusMessage 的别名。若没有连接错误，该状态消息为 HTTP 状态消息。否则，它为连接状态消息。状态 200-299 为成功。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**语法:** obj << Get Warning Headers

**说明:** 从请求中获取警告标头值（若有）。

**JMP添加的版本:** 14

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

**语法:** request << GetVersion

**说明:** 返回 JMP 中正在使用的 cURL 的当前版本

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**语法:** obj << Has Client Error

**说明:** 若 HTTP 状态为 400-499，则为真。

**JMP添加的版本:** 14

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

**语法:** obj << Has Error

**说明:** 若 HTTP 状态为 400-599，则为真。

**JMP添加的版本:** 14

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

**语法:** obj << Has Information

**说明:** 若 HTTP 状态为 100-199，则为真。

**JMP添加的版本:** 14

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

**语法:** obj << Has Redirection

**说明:** 若 HTTP 状态为 300-399，则为真。

**JMP添加的版本:** 14

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

**语法:** obj << Has Server Error

**说明:** 若 HTTP 状态为 500-599，则为真。

**JMP添加的版本:** 14

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

**语法:** obj << Has Warning

**说明:** 若 HTTP 状态具有警告标头，则为真

**JMP添加的版本:** 14

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

**语法:** obj << Headers({header 1}, {header 2} | [[ key=> value, key2=>value2 ]])

**说明:** HTTP 标头定义位于此处:

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html。它用于指定有关请求的各种元信息，以适当地帮助 Web 服务响应。这些值应被认为是 Web 服务的“提示”，因为它可以选择不接受参数。查阅 Web 服务 API 以验证支持。对于请求，“Content-Type: application/json”在指定 JSON 值时使用，“Content-Type: application/octet-stream”在指定 Blob 值时使用，“Content-Type: [extension/mime type mapping]”与“文件”值一起使用，“Content-Type: application/x-www-form-urlencoded”或“Content-Type: multipart/form-data”取决于“表单”的内容。标头还“提示”Web 服务应返回的数据类型。通用标头为“Accept: application/json”、“Accept: application/xml”、“Accept: text/csv”和“Accept: text/html”。标头值可以指定为字符数据的 JSL 列表或字符键/值对的关联数组。

**JMP添加的版本:** 14

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

**语法:** obj << Insecure(<"true"> | <"false">) | <"prompt">

**说明:** 默认情况下，证书验证为开启。若设置为 true，这将允许请求在没有证书验证的情况下完成。若设置为 prompt，这将允许用户接受证书并根据需要完成请求。

**JMP添加的版本:** 14

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

**语法:** obj << Is Success

**说明:** 若 HTTP 状态为 200-299，则为真。

**JMP添加的版本:** 14

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

**语法:** obj << Is Successful

**说明:** 若 HTTP 状态为 200-299，则为真。

**JMP添加的版本:** 14

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

**语法:** obj << Is Valid

**说明:** 请求有效

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Valid();

```

#### Is Verbose

**语法:** obj << Is Verbose

**说明:** 请求自动记录状态消息吗

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Verbose();

```

#### JSON

**语法:** obj << JSON( json data )

**说明:** 该项将设置请求中的 JSON 字符串值。JSON 字符串将用作文档的正文。请求内容类型标头将自动设置为“Content-Type: application/json”。您可以使用 As JSON Expr 方法将关联数组转换为 JSON 字符串。

**JMP添加的版本:** 14

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

**语法:** obj << Max Redirect(...)

**说明:** 指定请求将遵循的重定向数。

**JMP添加的版本:** 14

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

**语法:** obj << Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**说明:** 设置请求的方法。当前支持 Get、Post、Put、Patch、Delete 和 Head。

**JMP添加的版本:** 14

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

**语法:** obj << Netrc(<true | false>)

**说明:** 配置请求以使用标准 .netrc 文件。

.netrc（Windows 上的 _netrc）文件包含通过网络登录远程主机所使用的数据。

该文件驻留在初始化文件传输的机器上的用户主目录中。

它的权限应设置为禁用群组和其他用户读取访问权限。

可以识别下列令牌。它们可以用空格、制表符或新行字符进行分隔: 





机器



	标识远程机器名。自动登录过程搜索 .netrc 文件以查找匹配指定远程机器的机器令牌。匹配成功之后，会处理后续的 .netrc 令牌，当达到 EOF 或遇到另一机器令牌时停止。



登录



	标识远程机器上的用户。若该令牌存在，自动登录过程将使用指定名称初始化登录。



密码



	提供密码。若该令牌存在，当远程服务器要求登录过程提供密码时，自动登录过程将提供指定的字符串。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc( "true" );

```

#### Netrc File

**语法:** obj << Netrc File(<path>)

**说明:** 配置请求以使用备用 .netrc 文件。

.netrc（Windows 上的 _netrc）文件包含通过网络登录远程主机所使用的数据。

该文件驻留在初始化文件传输的机器上的用户主目录中。

它的权限应设置为禁用群组和其他用户读取访问权限。

可以识别下列令牌。它们可以用空格、制表符或新行字符进行分隔: 



机器



	标识远程机器名。自动登录过程搜索 .netrc 文件以查找匹配指定远程机器的机器令牌。匹配成功之后，会处理后续的 .netrc 令牌，当达到 EOF 或遇到另一机器令牌时停止。



登录



	标识远程机器上的用户。若该令牌存在，自动登录过程将使用指定名称初始化登录。



密码



	提供密码。若该令牌存在，当远程服务器要求登录过程提供密码时，自动登录过程将提供指定的字符串。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc File( "$DESKTOP\..\my_netrc.txt" );
request << Netrc( "true" );

```

#### Password

**语法:** obj << Password(passwd)

**说明:** 设置请求的密码用于基本身份验证。该值与请求用户名一起使用，用户名和密码以“:”连接 (name:password) 并传递给 Web 服务。此外，此处可以使用编码（例如 Kerberos V5 编码）的用户名/密码值。

**JMP添加的版本:** 14

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

**语法:** obj << Proxy Server(proxy_url)

**说明:** 代理 URL 可以采用相同的方式指定为代理环境变量，包括协议前缀 (http://) 和嵌入的用户 + 密码。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );

```

#### Proxy User

**语法:** obj << Proxy User(username:password)

**说明:** 代理字符串中可能提供的用户和密码采用 URL 解码。这允许您使用 %40 传入特殊字符（例如 @）或使用 %3a 传入冒号。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );
request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**语法:** obj << Query String([[ key=> value ]], <URI Encode(1|0|Safe(...))>)

**说明:** 设置请求中的“查询字符串”值。该项是字符数据的关联数组键/值集合。当键/值对发送至 Web 服务时它们经过 URL 编码（转义）。

**JMP添加的版本:** 14

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

**语法:** obj << Reset(URL(...), Method(...), <Form(<Fields(...)>, <Files(...)>)> | <File(...)> | <Blob(...)> | <JSON(...)>, <QueryString(...)>, <Headers(...)>, <Username(...)>, <Password(...)>)

**说明:** 将请求重置为新值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json1 = request << Send;
request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json2 = request << Send;

```

#### Run

**语法:** obj << Run

**说明:** 运行请求。该项是 Send 的别名。Run will be either character data or binary BLOB. You can check the return with the Is String JSL 函数的返回值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### SSL Version

**语法:** obj << SSL Version (version)

**说明:** "DEFAULT"  Use the default negotiated version (recommended).

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

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << SSL Version( "1+" );

```

#### Secure

**语法:** obj << Secure(<"true"> | <"false">) | <"prompt">

**说明:** 默认情况下，证书验证为开启。若设置为 false，这将允许请求在没有证书验证的情况下完成。若设置为 prompt，这将允许用户接受证书并根据需要完成请求。

**JMP添加的版本:** 14

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

**语法:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**说明:** 发送请求。Send 的返回值将为字符数据或二进制 BLOB。您可以使用 Is String JSL 函数检查返回。使用 show progress download 将显示带有已下载数据进度的可取消进度条。使用 show progress upload 将显示带有已上载数据进度的可取消进度条。使用 show progress both 将显示带有已上载和已下载数据进度的可取消进度条。使用 show progress 将显示带有已上载或已下载（或两者）进度的可取消进度条。对于发布表单，show progress 将显示上载和下载进度。对于发布文件，show progress 将显示上载进度。对于检索数据，show progress 将显示下载进度。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### Text

**语法:** obj << Text( text data, <content-type>)

**说明:** 该项将设置请求中的文本字符串值。文本字符串将用作文档的正文。请求内容类型标头将自动设置为“Content-Type: text/plain”。

**JMP添加的版本:** 15

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

**语法:** obj << Timeout(seconds)

**说明:** 请求操作完成的默认超时是 60 秒。可以调整该值以适应更耗时的 Web 服务操作。

**JMP添加的版本:** 14

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

**语法:** obj << URL(path)

**说明:** 创建请求时（或与“重置”一起使用），该项可以用作参数。obj = HTTP Request(URL("http://google.com"));

**JMP添加的版本:** 14

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

**语法:** obj << Use Cookies(<true | false>))

**说明:** 配置请求在会话中使用 cookie。默认值为 true。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Use Cookies( "false" );

```

#### UserPwd

**语法:** obj << UserPwd(clark kent:superman)

**说明:** 应用于身份验证的请求设置用户和密码字段。其格式为 [用户名]:[密码]。用户和密码字符串没有经过 URL 解码，因此无法使用该选项发送包含冒号的用户名。

**JMP添加的版本:** 18

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

**语法:** obj << Username(name)

**说明:** 设置请求的用户名用于基本身份验证。该值与请求密码一起使用，用户名和密码以“:”连接 (name:password) 并传递给 Web 服务。

**JMP添加的版本:** 14

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

**语法:** obj << Verbose(<"true"> | <"false">)

**说明:** 将大量错误消息写入日志。默认值为 true。

**JMP添加的版本:** 14

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

**语法:** obj << Verify SSL(<"true"> | <"false">)

**说明:** 证书验证已开启。若设置为 false，将允许不带证书验证完成请求。

**JMP添加的版本:** 16

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

**语法:** obj << XML( xml data )

**说明:** 该项将设置请求中的 xml 字符串值。xml 字符串将用作文档的正文。请求内容类型标头将自动设置为“Content-Type: application/xml”。

**JMP添加的版本:** 15

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

### 项消息

#### Add

**语法:** obj << Add(request, <label>)

**说明:** 将 HTTP 请求添加至 MultiHTTPRequest。可以使用可选标签。当执行并行下载时这很有用。所有 HTTP 请求会在使用前进行验证。

**JMP添加的版本:** 17

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

**语法:** obj << Download(<"show progress">, <"detailed">)

**说明:** 并行将 HTTP 响应下载至文件。对从一个或多个 Web 服务一次下载多个文件很有用。使用 show progress 将显示带有已下载文件进度的可取消进度条。使用 details 将显示单个下载进度。

**JMP添加的版本:** 17

**示例 1**

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

**示例 2**

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

**语法:** obj << Get Requests()

**JMP添加的版本:** 17

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

**语法:** obj << Has Error

**说明:** 若多请求有错误，则返回 true。若其任何 HTTP 请求有错误，则多请求有错误。

**JMP添加的版本:** 14

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

**语法:** obj << Is Success

**说明:** 若多请求成功，则返回 true。若其所有 HTTP 请求都成功，则多请求成功。

**JMP添加的版本:** 14

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

**语法:** obj << Is Successful

**说明:** 若多请求成功，则返回 true。若其所有 HTTP 请求都成功，则多请求成功。

**JMP添加的版本:** 14

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

**语法:** obj << Is Valid

**说明:** 多请求有效。若其所有 HTTP 请求都有效，则多请求有效。

**JMP添加的版本:** 17

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

**语法:** obj << Reset()

**说明:** 重置多个请求。这将重置已添加的任何 HTTP 请求。

**JMP添加的版本:** 17

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

**语法:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**说明:** Send 的返回值将为字符数据或二进制 BLOB。您可以使用 Is String JSL 函数检查返回。使用 show progress download 将显示带有已下载数据进度的可取消进度条。使用 show progress upload 将显示带有已上载数据进度的可取消进度条。使用 show progress both 将显示带有已上载和已下载数据进度的可取消进度条。使用 show progress 将显示带有已上载或已下载（或两者）进度的可取消进度条。对于发布表单，show progress 将显示上载和下载进度。对于发布文件，show progress 将显示上载进度。对于检索数据，show progress 将显示下载进度。

**JMP添加的版本:** 17

**示例 1**

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

**示例 2**

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

### 项消息

#### Authorization Fields

**语法:** oauth2 << Authorization Fields(...)

**说明:** 授权字段是要在 OAuth2 授权 URL 的查询字符串中使用的键值对的联合数组。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Authorization URL(...)

**说明:** 设置 OAuth2 授权 URL。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**语法:** oauth2 << Browser Type("Default" | "Embedded" | "External")

**说明:** “默认”选项是使用嵌入式浏览器进行 OAuth2 身份验证，除非使用 Google 进行身份验证。“嵌入”选项是使用嵌入式浏览器进行 OAuth2 身份验证，除非使用 Google 进行身份验证（当前与“默认”相同）。“外部”选项是使用外部浏览器进行 OAuth2 身份验证，并将生成的代码/URL 复制到文本区域以便完成身份验证。

**JMP添加的版本:** 17

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

**语法:** oauth2 << Client Id(...)

**说明:** 设置 OAuth2 客户端 ID，它是在 Web 服务创建期间使用的公共标识符。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Client Secret(...)

**说明:** 设置在 Web 服务创建期间创建的 OAuth2 客户端密钥。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Code Verifier(<"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~">

**说明:** 代码验证程序是一个加密随机字符串，客户端在交换访问令牌的授权代码时使用它来识别自身。它的最小长度是 43 个字符，最大长度是 128 个字符。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Code Verifier( "cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" );

```

#### Get Access Token

**语法:** oauth2 << Get Access Token()

**说明:** 获取当前 OAuth2 访问令牌。若需要，这将初始化与授权服务器的通信。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Get Authentication Response Error()

**说明:** 获取 OAuth2 响应错误。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**语法:** obj << Get Auth Response Fields

**JMP添加的版本:** 15

#### Get Authentication Response Error

**语法:** obj << Get Authentication Response Error

**JMP添加的版本:** 18

#### Get Authorization Header

**语法:** oauth2 << Get Authorization Header

**说明:** 获取以下格式的标头:

授权: 持有者 [OAuth2 令牌]

其中 [OAuth2 令牌] 是从授权服务器获取的持有者令牌。

**JMP添加的版本:** 15

**示例 1**

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

**示例 2**

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

**语法:** oauth2 << Get Authorization Response Fields()

**说明:** 从授权服务器获取当前 OAuth2 响应值。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Get Code()

**说明:** 获取当前 OAuth2 代码。若需要，这将初始化与授权服务器的通信。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Get Grant Type()

**说明:** 获取当前 OAuth2 授权类型。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
oauth2 << Grant Type( grant_types[1] );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Get Grant Types

**语法:** oauth2 << Get Grant Types

**说明:** 获取支持的 JMP OAuth2 授权类型。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Get ID Token()

**说明:** 获取当前 OAuth2 ID 令牌。若需要，这将初始化与授权服务器的通信。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Get Refresh Token()

**说明:** 获取当前 OAuth2 刷新令牌。若需要，这将初始化与授权服务器的通信。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Get Scope()

**说明:** 获取当前 OAuth2 范围。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Get Window Title

**说明:** 获取 OAuth2 窗口标题。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );
title = oauth2 << Get Window Title;

```

#### Grant Type

**语法:** oauth2 << Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**说明:** 请求的授予类型必须为 JMP 和 OAuth2 授权提供程序支持的授予类型之一。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Has Auth Response  Error

**语法:** obj << Has Auth Response  Error

**JMP添加的版本:** 18

#### Has Authentication Response  Error

**语法:** oauth2 << Has Authentication Response Error()

**说明:** 检查 OAuth2 身份验证响应错误。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
If( oauth2 << Has Authentication Response Error(),
	Show( oauth2 << Get Authentication Response Error )
);

```

#### Is Expired

**语法:** oauth2 << Is Expired()

**说明:** 返回当前 OAuth2 访问令牌是否已到期。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Login Hint(hint)

**说明:** 设置 login_hint 值。login_hint 是身份验证请求中的 OPTIONAL 参数，作为最终用户登录时可能使用的登录标识符的“提示”提供给授权服务器（若需要）。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**语法:** oauth2 << Password(...)

**说明:** 为密码授予类型设置 OAuth2 密码。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

```

#### Redirect URL

**语法:** oauth2 << Redirect URL(...)

**说明:** 设置在 Web 服务创建期间使用的 OAuth2 重定向 URL。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

redirect_url = "http://localhost/myapp/";
oauth2 = New OAuth2();
oauth2 << Redirect URL( redirect_url );

```

#### Scope

**语法:** oauth2 << Scope(...)

**说明:** 设置 OAuth2 范围，一种限制应用程序访问帐户的方式。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Set Window Title(title)

**说明:** 设置 OAuth2 窗口标题。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**语法:** obj << Token Fields

**说明:** 要在 OAuth2 令牌 URL 的查询字符串中使用的键值对的关联数组。

**JMP添加的版本:** 15

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

**语法:** oauth2 << Token URL(...)

**说明:** 设置 OAuth2 令牌 URL。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**语法:** oauth2 << Use Default Window Title(1 | 0)

**说明:** 获取 OAuth2 窗口标题。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Use Default Window Title( 1 );
title = oauth2 << Get Window Title;

```

#### Username

**语法:** oauth2 << Username(...)

**说明:** 为密码授予类型设置 OAuth2 用户名。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

```

