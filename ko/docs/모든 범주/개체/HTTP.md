# HTTP



## HTTPRequest

### 항목 메시지

#### Authentication Method

**구문:** obj << Authentication Method(method)

**설명:** 인증 방법을 적용합니다. 유효한 값은 다음과 같습니다.



	NONE         - HTTP 인증 안 함



	BASIC        - HTTP 기본(Basic) 인증



	KERBEROS     - HTTP Kerberos



	NEGOTIATE    - HTTP 협상(SPNEGO) 인증



	NTLM         - HTTP NTLM 인증



	ANY          - 모든 유형 설정(기본값)



	ANYSAFE      - &apos;기본&apos;(Basic) 인증을 제외한 모든 유형



	DEFAULT      - 기본 인증



기본적으로 JMP와 웹 서비스는 가장 안전한 인증 방법을 협상합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Authentication Method( "KERBEROS" );

```

#### Blob

**구문:** obj << Blob( binary data, <content-type> )

**설명:** 요청에 Blob 값을 설정합니다. Blob 값은 문서의 본문으로 사용됩니다. 요청의 콘텐츠 유형 머리글은 자동으로 "Content-Type: application/octet-stream"으로 설정됩니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Bypass Proxy(localhost)

**설명:** 프록시가 지정된 경우 프록시를 사용하지 않을 호스트의 쉼표 구분 목록입니다. 와일드카드로는 * 문자 하나만 허용됩니다. 이 와일드카드는 모든 호스트를 나타내며 실질적으로 프록시를 비활성화합니다. 이 목록의 각 이름은 호스트 이름이 포함된 도메인 또는 호스트 이름 자체와 매칭됩니다. 예를 들어 local.com은 local.com, local.com:80 및 www.local.com과 매칭되지만 www.notlocal.com과는 매칭되지 않습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Proxy Server( "http://my_proxy.com" );
request << Proxy User( "clark%20kent:superman" );
request << Bypass Proxy( "localhost" );

```

#### Certificates

**구문:** obj << Certificates(certificate file)

**설명:** 확인을 위해 지정된 인증서 파일을 사용하십시오. 파일에 CA 인증서가 여러 개 있을 수 있습니다. 인증서는 PEM 형식이어야 합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**구문:** obj << Cookie([[ key=> value ]]

**설명:** 요청에 쿠키를 설정합니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Cookie File(<path>, <"replace" | "rename" | "append">)

**설명:** 대체 쿠키 파일을 지정하십시오.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**구문:** obj << Curlrc(<true | false>)

**설명:** 표준 .curl 파일을 사용하도록 요청을 구성합니다.

.curlrc(Windows의 경우 _curlrc) 파일에는 curl에 사용되는 기본 옵션이 포함되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc( "true" );

```

#### Curlrc File

**구문:** obj << Curlrc File(<path>)

**설명:** 대체 .curlrc 파일을 사용하도록 요청을 구성합니다.

.curlrc(Windows의 경우 _curlrc) 파일에는 curl에 사용되는 기본 옵션이 포함되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );
request << Curlrc( "true" );

```

#### DNS Timeout

**구문:** obj << DNS Timeout(seconds)

**설명:** 연결을 위한 기본 DNS 캐시 타임아웃은 60초입니다. 이 값을 조정하여 DNS 캐시를 적용할 수 있습니다. 캐시를 사용하지 않으려면 0으로 설정하고, 캐시된 항목을 메모리에 유지하려면 -1로 설정하십시오.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url( "https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png" ),
	Method( "GET" ),
	DNS Timeout( 120 )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### Decode64 Char

**구문:** obj << Decode64 Char( value )

**설명:** Base 64 인코딩을 사용하여 문자열을 디코딩합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Decode64 Char( "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4=" );

```

#### Download

**구문:** obj << Download( path, <"replace" | "rename" | "append"> )

**설명:** HTTP 응답을 파일에 다운로드합니다. 웹 서비스에서 파일을 다운로드할 때 유용합니다. replace 옵션은 기존 파일을 덮어씁니다. 중복 이름이 있는 경우 rename 옵션은 순차적 파일 이름(file, file(1), file(2)...)을 사용하고 append 옵션은 기존 파일에 추가합니다. show progress를 사용하면 다운로드된 파일의 백분율을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	URL( "https://community.jmp.com/kvoqx44227/attachments/kvoqx44227/sample-data/49/1/BlueBirds.jmp" ),
	Method( "Get" )
);
file = request << Download( "$TEMP/BlueBirds.jmp", "replace", "show progress" );
If( !Is Empty( file ),
	Open( file )
);

```

#### Encode64 Char

**구문:** obj << Encode64 Char( value )

**설명:** Base 64 인코딩을 사용하여 문자열을 인코딩합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Encode64 Char( "Man is distinguished, not only by his reason, but ..." );

```

#### File

**구문:** obj << File ( path, <content-type> )

**설명:** 요청에 파일 값을 설정합니다. 파일 내용은 문서의 본문으로 사용됩니다. 요청의 콘텐츠 유형 머리글은 파일 확장자 또는 application/octet-stream(파일 확장자를 찾을 수 없는 경우)을 기반으로 적절한 콘텐츠로 자동 설정됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

my_file = Save Text File( "$TEMP/test_file.txt", "Testing, Testing 1, 2, 3" );
request = New HTTP Request( url( "http://httpbin.org/post" ), Method( "POST" ), File( my_file ) );
data = request << Send;

```

#### Form

**구문:** obj << Form(Fields([[ key=> value ]], <URI Encode(1 | 0 | Safe(...))>), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**설명:** 요청에 양식 데이터 값을 설정합니다. 양식은 문서의 본문으로 사용됩니다. 양식 데이터는 필드 및 파일 요소를 포함할 수 있습니다.

**JMP추가된 버전:** 14

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
		Fields( [["A" => "a", "B" => "b", "C" => "c", "1" => "one", "2" => "two", "3" => "three"]] ),
		Files( {"group 1", {file1, file2}, "group 2", {file2, file4}} )
	)
);
data = request << Send;

```

#### Get Certificate Info

**구문:** obj << Get Certificate Info

**설명:** 인증서 발급자, 인증서 만료일 등 인증서 상세 정보와 인증서의 신뢰성을 보장하는 기타 정보를 표시합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "https://google.com" ) );
request << Get Certificate Info;

```

#### Get Last URL

**구문:** obj << Get Last URL

**설명:** 요청에 사용된 마지막 URL을 가져옵니다. 리디렉션된 URL을 찾을 때 유용합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**구문:** mimetype = obj << Get MIME Type

**설명:** 요청과 함께 보내기(또는 다운로드)가 사용된 후 반환된 데이터의 MIME 유형을 검색하는 데 사용될 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
request = New HTTP Request( URL( url ), Method( "GET" ) );
request << Send;
Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**구문:** obj << Get Last Method

**설명:** 요청에 사용된 마지막 HTTP 메서드를 가져옵니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Get Response Headers

**설명:** 응답 머리글이 요청이 전송된 후 반환된 키/값 쌍의 연관 배열입니다. 다음 위치에서 머리글 정의를 찾을 수 있습니다. https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Date, Expires 및 Last-Modified 키는 JMP 날짜로 변환됩니다. Age 및 Content-Length 키는 숫자로 변환됩니다. 다른 모든 값은 문자입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Get Status

**설명:** Send 뒤에 요청의 상태를 반환합니다. 연결 오류가 없는 경우에는 상태가 HTTP 상태이고 그렇지 않은 경우에는 연결 상태입니다. 200 ~ 299는 성공을 나타냅니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Get Status Message

**설명:** Send 메시지 뒤에 요청의 상태 메시지를 반환합니다. 연결 오류가 없는 경우에는 상태 메시지가 HTTP 상태 메시지이고 그렇지 않은 경우에는 연결 상태 메시지입니다. 상태 200 ~ 299는 성공을 나타냅니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**구문:** obj << Get Status Msg

**설명:** Send 뒤에 요청의 상태 메시지를 반환합니다. GetStatusMessage의 별칭입니다. 연결 오류가 없는 경우에는 상태 메시지가 HTTP 상태 메시지이고 그렇지 않은 경우에는 연결 상태 메시지입니다. 상태 200 ~ 299는 성공을 나타냅니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**구문:** obj << Get Warning Headers

**설명:** 요청에서 경고 머리글 값(있는 경우)을 가져옵니다.

**JMP추가된 버전:** 14

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

**구문:** request << GetVersion

**설명:** JMP에서 사용 중인 cURL의 현재 버전을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**구문:** obj << Has Client Error

**설명:** HTTP 상태가 400 ~ 499이면 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Has Error

**설명:** HTTP 상태가 400 ~ 599이면 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Has Information

**설명:** HTTP 상태가 100 ~ 199이면 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Has Redirection

**설명:** HTTP 상태가 300 ~ 399이면 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Has Server Error

**설명:** HTTP 상태가 500 ~ 599이면 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Has Warning

**설명:** HTTP 상태에 경고 머리글이 포함된 경우 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Headers({header 1}, {header 2} | [[ key=> value, key2=>value2 ]])

**설명:** 다음 위치에서 HTTP 머리글 정의를 찾을 수 있습니다.

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. 머리글 정의는 웹 서비스가 적절히 응답할 수 있도록 요청에 대한 다양한 메타 정보를 지정하는 데 사용됩니다. 머리글 정의 값은 웹 서비스에 대한 "힌트"로 생각할 수 있습니다. 웹 서비스가 파라미터를 고려하지 않을 수도 있기 때문입니다. 지원 여부를 확인하려면 웹 서비스 API를 참조하십시오. 요청의 경우 JSON 값을 지정할 때는 "Content-Type: application/json"이, Blob 값을 지정할 때는 "Content-Type: application/octet-stream"이, File 값에는 "Content-Type: [extension/mime type mapping]"이 사용되고 양식의 내용에 따라 "Content-Type: application/x-www-form-urlencoded" 또는 "Content-Type: multipart/form-data"가 사용됩니다. 머리글은 웹 서비스가 반환해야 할 데이터 유형에 대한 "힌트"도 제공합니다. 일반적인 머리글은 "Accept: application/json", "Accept: application/xml", "Accept: text/csv" 및 "Accept: text/html"입니다. 머리글 값은 문자 데이터의 JSL 목록 또는 문자 키/값 쌍의 연관 배열로 지정할 수 있습니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Insecure(<"true"> | <"false">) | <"prompt">

**설명:** 인증서 검증은 기본적으로 수행됩니다. true로 설정하면 인증서 검증 없이 요청을 완료할 수 있습니다. prompt로 설정하면 사용자가 인증서를 수락하고 필요에 따라 요청을 완료할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url( "https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png" ),
	Method( "GET" ),
	Insecure( "true" )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### Is Success

**구문:** obj << Is Success

**설명:** HTTP 상태가 200 ~ 299이면 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Is Successful

**설명:** HTTP 상태가 200 ~ 299이면 True입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Is Valid

**설명:** 요청이 올바름

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Valid();

```

#### Is Verbose

**구문:** obj << Is Verbose

**설명:** 요청이 상태 메시지를 자동으로 로깅 중

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Verbose();

```

#### JSON

**구문:** obj << JSON( json data )

**설명:** 요청에 JSON 문자열 값을 설정합니다. JSON 문자열은 문서의 본문으로 사용됩니다. 요청의 콘텐츠 유형 머리글은 자동으로 "Content-Type: application/json"으로 설정됩니다. As JSON Expr 메서드를 사용하여 연관 배열을 JSON 문자열로 변환할 수 있습니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Max Redirect(...)

**설명:** 요청이 따라갈 리디렉션 수를 지정하십시오.

**JMP추가된 버전:** 14

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

**구문:** obj << Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**설명:** 요청에 대한 메서드를 설정합니다. 현재는 Get, Post, Put, Patch, Delete 및 Head가 지원됩니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Netrc(<true | false>)

**설명:** 표준 .netrc 파일을 사용하도록 요청을 구성합니다.

.netrc(Windows에서는 _netrc) 파일에는 네트워크를 통해 원격 호스트에 로그인하는 데 필요한 데이터가 포함되어 있습니다.

이 파일은 파일 전송을 시작한 컴퓨터의 사용자 홈 디렉터리에 있습니다.

그룹 및 다른 사용자에 의한 읽기 액세스를 허용하지 않도록 파일에 대한 사용 권한이 설정되어야 합니다.

다음 토큰이 인식됩니다. 공백, 탭 또는 줄바꿈 문자로 토큰을 구분할 수 있습니다.





machine



	원격 컴퓨터 이름을 식별합니다. 자동 로그인 프로세스는 .netrc 파일을 검색하여 지정된 원격 컴퓨터와 매칭되는 컴퓨터 토큰을 찾습니다. 매칭되는 항목을 찾으면 이후 .netrc 토큰이 처리되며 EOF에 도달하거나 다른 컴퓨터 토큰을 발견하면 처리가 중지됩니다.



login



	원격 컴퓨터의 사용자를 식별합니다. 이 토큰이 있으면 자동 로그인 프로세스는 지정된 이름을 사용하여 로그인을 시작합니다.



password



	암호를 제공합니다. 이 토큰이 있으면 자동 로그인 프로세스는 로그인 프로세스 중 원격 서버에서 암호를 요구할 경우 지정된 문자열을 제공합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc( "true" );

```

#### Netrc File

**구문:** obj << Netrc File(<path>)

**설명:** 대체 .netrc 파일을 사용하도록 요청을 구성합니다.

.netrc(Windows에서는 _netrc) 파일에는 네트워크를 통해 원격 호스트에 로그인하는 데 필요한 데이터가 포함되어 있습니다.

이 파일은 파일 전송을 시작한 컴퓨터의 사용자 홈 디렉터리에 있습니다.

그룹 및 다른 사용자에 의한 읽기 액세스를 허용하지 않도록 파일에 대한 사용 권한이 설정되어야 합니다.

다음 토큰이 인식됩니다. 공백, 탭 또는 줄바꿈 문자로 토큰을 구분할 수 있습니다.



machine



	원격 컴퓨터 이름을 식별합니다. 자동 로그인 프로세스는 .netrc 파일을 검색하여 지정된 원격 컴퓨터와 매칭되는 컴퓨터 토큰을 찾습니다. 매칭되는 항목을 찾으면 이후 .netrc 토큰이 처리되며 EOF에 도달하거나 다른 컴퓨터 토큰을 발견하면 처리가 중지됩니다.



login



	원격 컴퓨터의 사용자를 식별합니다. 이 토큰이 있으면 자동 로그인 프로세스는 지정된 이름을 사용하여 로그인을 시작합니다.



password



	암호를 제공합니다. 이 토큰이 있으면 자동 로그인 프로세스는 로그인 프로세스 중 원격 서버에서 암호를 요구할 경우 지정된 문자열을 제공합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc File( "$DESKTOP\..\my_netrc.txt" );
request << Netrc( "true" );

```

#### Password

**구문:** obj << Password(passwd)

**설명:** 요청에 기본 인증에 사용되는 암호를 설정합니다. 이 값은 요청 사용자 이름과 함께 사용됩니다. 이때 사용자 이름과 암호는 &apos;:&apos;를 사용하여 연결되고(이름:암호) 웹 서비스에 전달됩니다. 여기에 인코딩된(예: Kerberos V5로 인코딩됨) 사용자 이름/암호 값을 사용할 수도 있습니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Proxy Server(proxy_url)

**설명:** 프록시 URL은 프로토콜 접두사(http://)와 포함된 사용자 + 암호를 포함하여 프록시 환경 변수와 동일한 방식으로 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );

```

#### Proxy User

**구문:** obj << Proxy User(username:password)

**설명:** 프록시 설정에서 제공될 수 있는 사용자 및 암호가 URL로 디코딩됩니다. 이렇게 하면 @(%40 사용) 또는 콜론(%3a 사용) 같은 특수 문자를 전달할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );
request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**구문:** obj << Query String([[ key=> value ]], <URI Encode(1|0|Safe(...))>)

**설명:** 요청에 쿼리 문자열 값을 설정합니다. 이 값은 문자 데이터의 연관 배열 키/값 컬렉션입니다. 키/값 쌍은 웹 서비스로 전송될 때 URL로 인코딩됩니다(이스케이프됨).

**JMP추가된 버전:** 14

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

**구문:** obj << Reset(URL(...), Method(...), <Form(<Fields(...)>, <Files(...)>)> | <File(...)> | <Blob(...)> | <JSON(...)>, <QueryString(...)>, <Headers(...)>, <Username(...)>, <Password(...)>)

**설명:** 요청을 새 값으로 재설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json1 = request << Send;
request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json2 = request << Send;

```

#### Run

**구문:** obj << Run

**설명:** 요청을 실행합니다. Send의 별칭입니다. Run will be either character data or binary BLOB. You can check the return with the Is String JSL 함수의 반환 값입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### SSL Version

**구문:** obj << SSL Version (version)

**설명:** "DEFAULT"  Use the default negotiated version (recommended).

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

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << SSL Version( "1+" );

```

#### Secure

**구문:** obj << Secure(<"true"> | <"false">) | <"prompt">

**설명:** 인증서 검증은 기본적으로 수행됩니다. false로 설정하면 인증서 검증 없이 요청을 완료할 수 있습니다. prompt로 설정하면 사용자가 인증서를 수락하고 필요에 따라 요청을 완료할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url( "https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png" ),
	Method( "GET" ),
	Secure( 1 )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### Send

**구문:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**설명:** 요청을 보냅니다. Send의 반환 값은 문자 데이터 또는 이진 BLOB입니다. Is String JSL 함수를 사용하여 반환 값을 확인할 수 있습니다. show progress download를 사용하면 다운로드된 데이터의 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. show progress upload를 사용하면 업로드된 데이터의 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. show progress both를 사용하면 업로드된 데이터와 다운로드된 데이터의 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. show progress를 사용하면 업로드된 데이터나 다운로드된 데이터 또는 둘 다에 대한 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. 양식을 게시하는 경우 show progress는 업로드 및 다운로드 진행률을 표시하고, 파일을 게시하는 경우 show progress는 업로드 진행률을 표시합니다. 데이터를 검색하는 경우 show progress는 다운로드 진행률을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### Text

**구문:** obj << Text( text data, <content-type>)

**설명:** 요청에 텍스트 문자열 값을 설정합니다. 텍스트 문자열은 문서의 본문으로 사용됩니다. 요청의 콘텐츠 유형 머리글은 자동으로 "Content-Type: application/text/plain"으로 설정됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

request = New HTTP Request( url( "http://httpbin.org/post" ), Method( "POST" ), Text( "Hello World" ) );
data = request << Send;

```

#### Timeout

**구문:** obj << Timeout(seconds)

**설명:** 요청 작업이 완료될 때까지의 기본 타임아웃 값은 60초입니다. 이 값을 조정하여 시간이 오래 걸리는 웹 서비스 작업을 허용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url( "https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png" ),
	Method( "GET" ),
	Timeout( 120 )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### URL

**구문:** obj << URL(path)

**설명:** 요청이 생성될 때(또는 Reset과 함께 사용될 때) 파라미터로 사용될 수 있습니다. obj = HTTP Request(URL("http://google.com"));

**JMP추가된 버전:** 14

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

**구문:** obj << Use Cookies(<true | false>))

**설명:** 세션에 쿠키를 사용하도록 요청을 구성합니다. 기본값은 true입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Use Cookies( "false" );

```

#### UserPwd

**구문:** obj << UserPwd(clark kent:superman)

**설명:** 인증에 사용되는 요청의 사용자 및 암호 필드를 설정합니다. 형식은 [사용자 이름]:[암호]입니다. 사용자 및 암호 문자열은 URL로 디코딩되지 않으므로 이 옵션을 사용하면 콜론이 포함된 사용자 이름을 전송할 방법이 없습니다.

**JMP추가된 버전:** 18

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

**구문:** obj << Username(name)

**설명:** 요청에 기본 인증에 사용되는 사용자 이름을 설정합니다. 이 값은 요청 사용자 암호와 함께 사용됩니다. 이때 사용자 이름과 암호는 &apos;:&apos;를 사용하여 연결되고(이름:암호) 웹 서비스에 전달됩니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Verbose(<"true"> | <"false">)

**설명:** 로그에 자세한 오류 메시지를 기록합니다. 기본값은 true입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Verify SSL(<"true"> | <"false">)

**설명:** 인증서 확인이 설정되어 있습니다. false로 설정하면 인증서 확인 없이 요청을 완료할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

request = New HTTP Request(
	Url( "https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png" ),
	Method( "GET" ),
	Verify SSL( "false" )
);
bytes = request << Send;
img = Open( bytes, jpg );
obj = New Window( "Mastering JMP", img );

```

#### XML

**구문:** obj << XML( xml data )

**설명:** 요청에 xml 문자열 값을 설정합니다. xml 문자열은 문서의 본문으로 사용됩니다. 요청의 콘텐츠 유형 머리글은 자동으로 "Content-Type: application/xml"로 설정됩니다.

**JMP추가된 버전:** 15

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

### 항목 메시지

#### Add

**구문:** obj << Add(request, <label>)

**설명:** HTTP 요청을 MultiHTTPRequest에 추가합니다. 선택적 라벨을 사용할 수 있습니다. 라벨을 사용하면 병렬 다운로드를 수행할 때 유용합니다. 모든 HTTP 요청은 사용 전에 먼저 유효성이 검사됩니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL( "http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso" )
	),
	"My First Download"
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" )
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

#### Download

**구문:** obj << Download(<"show progress">, <"detailed">)

**설명:** HTTP 응답을 파일에 병렬로 다운로드합니다. 하나 이상의 웹 서비스에서 여러 파일을 한 번에 다운로드할 때 유용합니다. show progress를 사용하면 파일 다운로드 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. details를 사용하면 개별 다운로드 진행률이 표시됩니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );

urls = {"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso",
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

**예제 2**

```jsl

Names Default To Here( 1 );

urls = {"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso",
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

**구문:** obj << Get Requests()

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request(
	Method( "GET" ),
	URL( "http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso" )
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

**구문:** obj << Has Error

**설명:** 다중 요청에 오류가 있으면 true를 반환합니다. 임의의 HTTP 요청에 오류가 있는 경우 다중 요청에 오류가 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request(
	Method( "GET" ),
	URL( "http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso" )
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

**구문:** obj << Is Success

**설명:** 다중 요청이 성공하면 true를 반환합니다. 모든 HTTP 요청이 성공한 경우 다중 요청이 성공한 것입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Is Successful

**설명:** 다중 요청이 성공하면 true를 반환합니다. 모든 HTTP 요청이 성공한 경우 다중 요청이 성공한 것입니다.

**JMP추가된 버전:** 14

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

**구문:** obj << Is Valid

**설명:** 다중 요청이 유효한지 여부를 나타냅니다. 모든 HTTP 요청이 유효한 경우 다중 요청이 유효합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
http_request_1 = New HTTP Request(
	Method( "GET" ),
	URL( "http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso" )
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

**구문:** obj << Reset()

**설명:** 다중 요청을 재설정합니다. 이렇게 하면 이미 추가된 HTTP 요청이 재설정됩니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL( "http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso" )
	),
	"My First Download"
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" )
	)
);
requests << Reset();

```

#### Send

**구문:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**설명:** Send의 반환 값은 문자 데이터 또는 이진 BLOB입니다. Is String JSL 함수를 사용하여 반환 값을 확인할 수 있습니다. show progress download를 사용하면 다운로드된 데이터의 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. show progress upload를 사용하면 업로드된 데이터의 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. show progress both를 사용하면 업로드된 데이터와 다운로드된 데이터의 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. show progress를 사용하면 업로드된 데이터나 다운로드된 데이터 또는 둘 다에 대한 진행률을 보여 주는 취소 가능한 진행률 표시줄이 나타납니다. 양식을 게시하는 경우 show progress는 업로드 및 다운로드 진행률을 표시하고, 파일을 게시하는 경우 show progress는 업로드 진행률을 표시합니다. 데이터를 검색하는 경우 show progress는 다운로드 진행률을 표시합니다.

**JMP추가된 버전:** 17

**예제 1**

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

**예제 2**

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

### 항목 메시지

#### Authorization Fields

**구문:** oauth2 << Authorization Fields(...)

**설명:** "Authorization fields"는 OAuth2 권한 부여 URL의 쿼리 문자열에 사용되는 키/값 쌍의 연관 배열입니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Authorization URL(...)

**설명:** OAuth2 권한 부여 URL을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**구문:** oauth2 << Browser Type("Default" | "Embedded" | "External")

**설명:** "기본값" 옵션은 Google로 인증하는 경우 외에는 포함된 브라우저를 사용하여 OAuth2 인증을 수행합니다. "포함" 옵션은 Google로 인증하는 경우 외에는 포함된 브라우저를 사용하여 OAuth2 인증을 수행합니다(현재 "기본값"과 동일). "외부" 옵션은 외부 브라우저를 사용하여 OAuth2 인증을 수행하고 결과 코드/URL을 텍스트 영역에 복사하여 인증을 완료합니다.

**JMP추가된 버전:** 17

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

**구문:** oauth2 << Client Id(...)

**설명:** 웹 서비스 생성 시 사용된 공개 식별자인 OAuth2 클라이언트 ID를 설정합니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Client Secret(...)

**설명:** 웹 서비스 생성 시 생성된 OAuth2 클라이언트 비밀번호를 설정합니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Code Verifier(<"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~">

**설명:** 코드 확인자는 액세스 토큰에 대한 권한 부여 코드를 교환할 때 클라이언트가 자신을 식별하는 데 사용하는 암호화된 무작위 문자열입니다. 문자열 길이는 최소 43자, 최대 128자입니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Code Verifier( "cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" );

```

#### Get Access Token

**구문:** oauth2 << Get Access Token()

**설명:** 현재 OAuth2 액세스 토큰을 가져옵니다. 필요한 경우 권한 부여 서버와의 통신이 시작됩니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Get Authentication Response Error()

**설명:** OAuth2 응답 오류를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**구문:** obj << Get Auth Response Fields

**JMP추가된 버전:** 15

#### Get Authentication Response Error

**구문:** obj << Get Authentication Response Error

**JMP추가된 버전:** 18

#### Get Authorization Header

**구문:** oauth2 << Get Authorization Header

**설명:** 다음 형식의 헤더를 가져옵니다.

Authorization: Bearer [OAuth2 token]

여기서 [OAuth2 token]은 권한 부여 서버에서 얻은 전달자 토큰입니다.

**JMP추가된 버전:** 15

**예제 1**

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

**예제 2**

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

**구문:** oauth2 << Get Authorization Response Fields()

**설명:** 권한 부여 서버에서 받은 현재 OAuth2 응답 값을 가져옵니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Get Code()

**설명:** 현재 OAuth2 코드를 가져옵니다. 필요한 경우 권한 부여 서버와의 통신이 시작됩니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Get Grant Type()

**설명:** 현재 OAuth2 승인 유형을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
oauth2 << Grant Type( grant_types[1] );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Get Grant Types

**구문:** oauth2 << Get Grant Types

**설명:** 지원되는 JMP OAuth2 승인 유형을 가져옵니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Get ID Token()

**설명:** 현재 OAuth2 ID 토큰을 가져옵니다. 필요한 경우 권한 부여 서버와의 통신이 시작됩니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Get Refresh Token()

**설명:** 현재 OAuth2 갱신 토큰을 가져옵니다. 필요한 경우 권한 부여 서버와의 통신이 시작됩니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Get Scope()

**설명:** 현재 OAuth2 범위를 가져옵니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Get Window Title

**설명:** OAuth2 창 제목을 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );
title = oauth2 << Get Window Title;

```

#### Grant Type

**구문:** oauth2 << Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**설명:** 요청된 승인 유형은 JMP와 OAuth2 권한 부여 공급자가 지원하는 승인 유형 중 하나여야 합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Has Auth Response  Error

**구문:** obj << Has Auth Response  Error

**JMP추가된 버전:** 18

#### Has Authentication Response  Error

**구문:** oauth2 << Has Authentication Response Error()

**설명:** OAuth2 인증 응답 오류가 있는지 확인합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
If( oauth2 << Has Authentication Response Error(),
	Show( oauth2 << Get Authentication Response Error )
);

```

#### Is Expired

**구문:** oauth2 << Is Expired()

**설명:** 현재 OAuth2 액세스 토큰이 만료되었는지 여부를 반환합니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Login Hint(hint)

**설명:** login_hint 값을 설정합니다. login_hint는 최종 사용자가 로그인하는 데 사용할 수 있는 로그인 식별자와 관련된 "힌트"로, 권한 부여 서버에 대한 인증 요청의 선택적 파라미터입니다(필요한 경우).

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**구문:** oauth2 << Password(...)

**설명:** 암호 승인 유형의 OAuth2 암호를 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

```

#### Redirect URL

**구문:** oauth2 << Redirect URL(...)

**설명:** 웹 서비스 생성 시 사용된 OAuth2 리디렉션 URL을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

redirect_url = "http://localhost/myapp/";
oauth2 = New OAuth2();
oauth2 << Redirect URL( redirect_url );

```

#### Scope

**구문:** oauth2 << Scope(...)

**설명:** 계정에 대한 응용 프로그램의 액세스를 제한하는 수단인 OAuth2 범위를 설정합니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Set Window Title(title)

**설명:** OAuth2 창 제목을 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**구문:** obj << Token Fields

**설명:** OAuth2 토큰 URL의 쿼리 문자열에 사용되는 키/값 쌍의 연관 배열입니다.

**JMP추가된 버전:** 15

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

**구문:** oauth2 << Token URL(...)

**설명:** OAuth2 토큰 URL을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**구문:** oauth2 << Use Default Window Title(1 | 0)

**설명:** OAuth2 창 제목을 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Use Default Window Title( 1 );
title = oauth2 << Get Window Title;

```

#### Username

**구문:** oauth2 << Username(...)

**설명:** 암호 승인 유형의 OAuth2 사용자 이름을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

```

