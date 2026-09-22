# HTTP



## HTTPRequest

### 項目のメッセージ

#### Authentication Method

**構文:** obj &lt;&lt; Authentication Method(method)

**説明:** 認証メソッドを適用する。有効な値:



	NONE         - HTTP認証なし



	BASIC        - HTTP基本認証



	KERBEROS     - HTTP Kerberos



	NEGOTIATE    - HTTPネゴシエート(SPNEGO)認証



	NTLM         - HTTP NTLM認証



	ANY          - 全種類を設定(デフォルト)



	ANYSAFE      - 基本を除く全種類



	DEFAULT      - デフォルトの認証



デフォルトでは、JMPとWebサービスがネゴシエートして最も安全な認証メソッドを使用する。

**JMP追加されたバージョン:** 17

```jsl

request = New HTTP Request();request << Authentication Method( "KERBEROS" );

```

#### Blob

**構文:** obj &lt;&lt; Blob( binary data, &lt;content-type&gt; )

**説明:** リクエストのBLOB値を設定する。BLOB値は、リクエストの本体に使用される。リクエストのヘッダは、自動的に"Content-Type: application/octet-stream"に設定される。

**JMP追加されたバージョン:** 14

```jsl

blob = "Testing, Testing 1, 2, 3";file = Save Text File( "$TEMP/test_blob", blob );request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	Blob( Load Text File( file ) ));data = request << Send;

```

#### Bypass Proxy

**構文:** obj &lt;&lt; Bypass Proxy(localhost)

**説明:** プロキシを使用しないホストのカンマ区切りのリスト。ワイルドカードとしては1つの「\*」のみ使用できる。これはすべてのホストに一致するため、実質的にプロキシを無効にする。リスト内の名前は、該当するホスト名を含む含むドメイン、またはホスト名自体とマッチする。たとえば、local.comは、local.com、local.com:80、www.local.comにはマッチするが、www.notlocal.comにはマッチしない。

**JMP追加されたバージョン:** 15

```jsl

request = New HTTP Request();request << Proxy Server( "http://my_proxy.com" );request << Proxy User( "clark%20kent:superman" );request << Bypass Proxy( "localhost" );

```

#### Certificates

**構文:** obj &lt;&lt; Certificates(certificate file)

**説明:** 指定された証明書を使って検証を行う。ファイルには複数のCA証明書が含まれる場合がある。証明書はPEM形式でなければならない。

**JMP追加されたバージョン:** 16

```jsl

request = New HTTP Request();request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**構文:** obj &lt;&lt; Cookie([[ key=&gt; value ]]

**説明:** リクエストにcookieを設定する。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	url( "http://httpbin.org/get" ),	Method( "GET" ),	Cookie( [["username" => "bob", "address" => "12345"]] ));data = request << Send;

```

#### Cookie File

**構文:** obj &lt;&lt; Cookie File(&lt;path&gt;, &lt;"replace" | "rename" | "append"&gt;)

**説明:** 別のCookieファイルを指定してください。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request();data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**構文:** obj &lt;&lt; Curlrc(&lt;true | false&gt;)

**説明:** 標準の.curlファイルを使用する。

.curlrc (Windowsでは、_curlrc)ファイルは、curlで使用するデフォルトのオプションを含む。

**JMP追加されたバージョン:** 15

```jsl

request = New HTTP Request();request << Curlrc( "true" );

```

#### Curlrc File

**構文:** obj &lt;&lt; Curlrc File(&lt;path&gt;)

**説明:** 代替の.curlrcファイルを使用する。

.curlrc (Windowsでは、_curlrc)ファイルは、curlで使用するデフォルトのオプションを含む。

**JMP追加されたバージョン:** 15

```jsl

request = New HTTP Request();request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );request << Curlrc( "true" );

```

#### DNS Timeout

**構文:** obj &lt;&lt; DNS Timeout(seconds)

**説明:** 接続のDNSキャッシュのタイムアウトはデフォルトで60秒に設定されている。この値はDNSキャッシュに合わせて調整できる。0に設定するとキャッシュが無効になり、-1に設定するとエントリがメモリにキャッシュされる。

**JMP追加されたバージョン:** 16

```jsl

request = New HTTP Request(	Url(		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"	),	Method( "GET" ),	DNS Timeout( 120 ));bytes = request << Send;img = Open( bytes, jpg );obj = New Window( "Mastering JMP", img );

```

#### Decode64 Char

**構文:** obj &lt;&lt; Decode64 Char( value )

**説明:** Base 64エンコーディングで文字列をデコードする。

**JMP追加されたバージョン:** 16

```jsl

request = New HTTP Request();data = request << Decode64 Char(	"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4=");

```

#### Download

**構文:** obj &lt;&lt; Download( path, &lt;"replace" | "rename" | "append"&gt; )

**説明:** HTTPレスポンスをファイルにダウンロードする。Webサービスからファイルをダウンロードする場合に有用。replaceオプションは、既存のファイルを上書きする。renameオプションは、重複する名前が見つかった場合、通し番号を付けたファイル名を使用する（file、file(1)、file(2)...）。appendオプションは、既存のファイルに追加する。show progressを使用すると、ダウンロードをキャンセルすることも可能な、ダウンロードのプログレスバーが表示される。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	URL(		"https://community.jmp.com/kvoqx44227/attachments/kvoqx44227/sample-data/49/1/BlueBirds.jmp"	),	Method( "Get" ));file = request << Download( "$TEMP/BlueBirds.jmp", "replace", "show progress" );If( !Is Empty( file ),	Open( file ));

```

#### Encode64 Char

**構文:** obj &lt;&lt; Encode64 Char( value )

**説明:** Base 64エンコーディングで文字列をエンコードする。

**JMP追加されたバージョン:** 16

```jsl

request = New HTTP Request();data = request << Encode64 Char( "Man is distinguished, not only by his reason, but ..." );

```

#### File

**構文:** obj &lt;&lt; File ( path, &lt;content-type&gt; )

**説明:** リクエストにFile値を設定する。Fileのコンテンツが文書の本体に使用される。リクエストにおけるコンテンツタイプを示すヘッダは、ファイル拡張子(ない場合はapplication/octet-stream)に基づいて自動的に適切なコンテンツに設定される。

**JMP追加されたバージョン:** 14

```jsl

my_file = Save Text File( "$TEMP/test_file.txt", "Testing, Testing 1, 2, 3" );request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	File( my_file ));data = request << Send;

```

#### Form

**構文:** obj &lt;&lt; Form(Fields([[ key=&gt; value ]], &lt;URI Encode(1 | 0 | Safe(...))&gt;), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**説明:** リクエストのフォームデータ値を設定する。指定されたフォームは、文書の本体として使用される。フォームのデータには、フィールドやファイルを要素として含めることができる。

**JMP追加されたバージョン:** 14

```jsl

file1 = Save Text File( "$TEMP/file1", "hello world 1" );file2 = Save Text File( "$TEMP/file2", "hello world 2" );file3 = Save Text File( "$TEMP/file3", "hello world 3" );file4 = Save Text File( "$TEMP/file4", "hello world 4" );request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	Form(		Fields(			[["A" => "a", "B" => "b", "C" => "c", "1" => "one", "2" => "two", "3" => "three"]			]		),		Files( {"group 1", {file1, file2}, "group 2", {file2, file4}} )	));data = request << Send;

```

#### Get Certificate Info

**構文:** obj &lt;&lt; Get Certificate Info

**説明:** 証明書の詳細を表示する。発行者、有効期限などの情報から証明書の信頼性を確認できる。

**JMP追加されたバージョン:** 19

```jsl

request = New HTTP Request( URL( "https://google.com" ) );request << Get Certificate Info;

```

#### Get Last URL

**構文:** obj &lt;&lt; Get Last URL

**説明:** リクエストで前回使用されたURLを取得する。リダイレクトされたURLを見つけるのに役立つ。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "http://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );request << Send;Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**構文:** mimetype = obj &lt;&lt; Get MIME Type

**説明:** リクエストでSend(またはDownload)が行われた場合、これを使って、戻されたデータのMIMEタイプを取得できる。

**JMP追加されたバージョン:** 14

```jsl

url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";request = New HTTP Request( URL( url ), Method( "GET" ) );request << Send;Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**構文:** obj &lt;&lt; Get Last Method

**説明:** リクエストで最後に使用されたHTTPメソッドを取得する。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	JSON( "\[{"username":"bob","address":"12345"}]\" ),	Password( "cm9zczpBYmMxMjM=" ),);request << Send;Write( Char( request << Get Method ) || "\!n" );

```

#### Get Response Headers

**構文:** obj &lt;&lt; Get Response Headers

**説明:** リクエストが送信された後に戻される返答のヘッダを戻す。この戻り値は、キー/値のペアで構成される連想配列の形式となっている。HTTPヘッダの定義については、https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.htmlを参照のこと。なお、Date、Expires、Last-Modifiedキーは、JMPの日付形式に変換される。また、AgeおよびContent-Lengthキーは数字に変換される。その他の値は文字に変換される。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people" ), Method( "GET" ) );json = request << Send;                                          response_headers = request << Get Response Headers;keys = response_headers << Get Keys;For( i = 1, i <= N Items( keys ), i++,	key = keys[i];	value = response_headers[key];	Write( "Key=> " || Char( key ) || ", Value=> " || Char( value ) || "\!n" ););

```

#### Get Status

**構文:** obj &lt;&lt; Get Status

**説明:** Sendの後にリクエストのステータスを戻す。接続エラーがなければHTTPステータス、それ以外の場合は接続ステータスがステータスとなる。200～299は正常であることを示す。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people/1" ), Method( "GET" ) );data = request << Send;If( request << Get Status == 200,	Write( "Success!!!!\!n" || Char( data ) || "\!n" ));

```

#### Get Status Message

**構文:** obj &lt;&lt; Get Status Message

**説明:** Sendの後にリクエストのステータスメッセージを戻す。接続エラーがなければHTTPステータス、それ以外の場合は接続ステータスがステータスとなる。200～299は正常であることを示す。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );request << Send;Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**構文:** obj &lt;&lt; Get Status Msg

**説明:** Sendの後にリクエストのステータスメッセージを戻す。GetStatusMessageの別名。接続エラーがなければHTTPステータス、それ以外の場合は接続ステータスがステータスとなる。200～299は正常であることを示す。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );request << Send;Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**構文:** obj &lt;&lt; Get Warning Headers

**説明:** リクエストのwarningヘッダの値(存在する場合)を取得する。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people" ), Method( "GET" ) );json = request << Send;                                          warning_headers = request << Get Warning Headers;If( !Is Empty( warning_headers ),	keys = warning_headers << Get Keys;	For( i = 1, i <= N Items( keys ), i++,		key = keys[i];		value = response_headers[key];		Write( "Key=> " || Char( key ) || ", Value=> " || Char( value ) || "\!n" );	););

```

#### GetVersion

**構文:** request &lt;&lt; GetVersion

**説明:** JMPで現在使用されているcURLのバージョンを戻す。

**JMP追加されたバージョン:** 14

```jsl

Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**構文:** obj &lt;&lt; Has Client Error

**説明:** HTTPのステータスが400～499の場合にtrue。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );json = request << Send;If( request << Has Client Error,	msg = "Has Client Error: " || Char( request << Get Status Message ),	msg = "Success!");Write( msg );

```

#### Has Error

**構文:** obj &lt;&lt; Has Error

**説明:** HTTPのステータスが400～599の場合にtrue。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );json = request << Send;If( request << Has Error,	msg = "Has Error: " || Char( request << Get Status Message ),	msg = "Success!");Write( msg );

```

#### Has Information

**構文:** obj &lt;&lt; Has Information

**説明:** HTTPのステータスが100～199の場合にtrue。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people/20" ), Method( "GET" ) );request << Send;If( request << Has Information,	msg = "Has Information: " || Char( request << GetStatusMessage ),	msg = "No Status Information available.");Write( msg );

```

#### Has Redirection

**構文:** obj &lt;&lt; Has Redirection

**説明:** HTTPのステータスが300～399の場合にtrue。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "http://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );request << Send;If( request << Has Redirection,	msg = "Has Redirection: " || Char( request << Get Status Message ),	msg = "No Redirection ocurred.");Write( msg );

```

#### Has Server Error

**構文:** obj &lt;&lt; Has Server Error

**説明:** HTTPのステータスが500～599の場合にtrue。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );json = request << Send;If( request << Has Server Error,	msg = "Has Server Error: " || Char( request << Get Status Message ),	msg = "Success!");Write( msg );

```

#### Has Warning

**構文:** obj &lt;&lt; Has Warning

**説明:** HTTPステータスにwarningヘッダがある場合はtrue。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people" ), Method( "GET" ) );json = request << Send;                                          If( !request << Has Warning,	warning_headers = request << Get Warning Headers;	keys = warning_headers << Get Keys;	For( i = 1, i <= N Items( keys ), i++,		key = keys[i];		value = response_headers[key];		Write( "Key=> " || Char( key ) || ", Value=> " || Char( value ) || "\!n" );	););

```

#### Headers

**構文:** obj &lt;&lt; Headers({header 1}, {header 2} | [[ key=&gt; value, key2=&gt;value2 ]])

**説明:** HTTPヘッダの定義については

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.htmlを参照のこと。ヘッダには、Webサービスからの返答を処理するための、リクエストに関する各種メタ情報を指定する。Webサービスが必ずしもパラメータを受け取るわけではないので、Webサービスに対する「ヒント」と考えるとよい。どのようなHTTPヘッダがサポートされているかは、WebサービスのAPIで確認できる場合がある。JSON値を指定するには"Content-Type: application/json"を用いる。BLOB値を指定するには"Content-Type: application/octet-stream"を用いる。File値を指定するには"Content-Type: [extension/mime type mapping]"を用いる。そして、Formの内容に応じて"Content-Type: application/x-www-form-urlencoded"や"Content-Type: multipart/form-data"を用いる。ヘッダは、Webサービスに対して、どのデータタイプを戻すべきかを示すヒントでもある。一般的なヘッダには、"Accept: application/json"、"Accept: application/xml"、"Accept: text/csv"、"Accept: text/html"がある。ヘッダ値は、文字型データのJSLリスト、もしくは、文字キー/値のペアの連想配列で指定すること。

**JMP追加されたバージョン:** 14

```jsl

url = "https://api.nasa.gov/planetary/apod";fields = [=> ];fields["api_key"] = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";                                          request = New HTTP Request(	URL( url ),	Method( "GET" ),	Query String( fields ),	Headers( {"Accept: application/json"} ));json = request << Send;Write( json || "\!n" );

```

#### Insecure

**構文:** obj &lt;&lt; Insecure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**説明:** デフォルトではオンになっており、証明書の検証が行われる。trueに設定すると、証明書が検証されずにリクエストが実行される。promptに設定すると、ユーザは必要に応じて証明書を受け入れ、リクエストを実行できる。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	Url(		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"	),	Method( "GET" ),	Insecure( "true" ));bytes = request << Send;img = Open( bytes, jpg );obj = New Window( "Mastering JMP", img );

```

#### Is Success

**構文:** obj &lt;&lt; Is Success

**説明:** HTTPのステータスが200～299の場合にtrue。

**JMP追加されたバージョン:** 14

```jsl

url = "https://api.nasa.gov/planetary/apod";fields = [=> ];fields["api_key"] = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";                                          request = New HTTP Request( URL( url ), Method( "GET" ), Query String( fields ) );json = request << Send;If( request << Is Success,	JSON To Data Table( json ));

```

#### Is Successful

**構文:** obj &lt;&lt; Is Successful

**説明:** HTTPのステータスが200～299の場合にtrue。

**JMP追加されたバージョン:** 14

```jsl

url = "https://api.nasa.gov/planetary/apod";fields = [=> ];fields["api_key"] = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";                                          request = New HTTP Request( URL( url ), Method( "GET" ), Query String( fields ) );json = request << Send;If( request << Is Successful,	aa = Parse JSON( json );	If( Contains( aa, "url" ),		request << Reset( URL( aa["url"] ), Method( "GET" ) );		bytes = request << Send;		img = Open( bytes, jpg );		obj = New Window( aa["title"], img );	););

```

#### Is Valid

**構文:** obj &lt;&lt; Is Valid

**説明:** リクエストが有効かどうかを確認する

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request();data = request << Is Valid();

```

#### Is Verbose

**構文:** obj &lt;&lt; Is Verbose

**説明:** リクエストのログ出力のステータスを戻す。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request();data = request << Is Verbose();

```

#### JSON

**構文:** obj &lt;&lt; JSON( json data )

**説明:** リクエストのJSON文字列を設定する。指定されたJSON文字列は、リクエストの本体に使用される。リクエストのヘッダは、自動的に"Content-Type: application/json"に設定される。なお、As JSON Exprメソッドによって連想配列をJSON文字列に変換できる。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	JSON( "\[{"username":"bob","address":"12345"}]\" ));data = request << Send;

```

#### Max Redirect

**構文:** obj &lt;&lt; Max Redirect(...)

**説明:** リクエストでのリダイレクトの数を指定する。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	url( "http://httpbin.org/get" ),	Method( "GET" ),	Query String( [["username" => "bob", "address" => "12345"]] ),	MaxRedirect( 2 ));data = request << Send;

```

#### Method

**構文:** obj &lt;&lt; Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**説明:** リクエストのメソッドを設定する。現在、Get、Post、Put、Patch、Delete、Headがサポートされている。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );json = request << Send;dt = JSON To Data Table( json );dt << Set Name( "Swapi.co Planets" );dt << Delete Columns( :next, :count, :previous );dt << Select Where( :name == "" );dt << Delete Rows();

```

#### Netrc

**構文:** obj &lt;&lt; Netrc(&lt;true | false&gt;)

**説明:** 接続する時に標準の.netrcファイルを使用する。

.netrcファイル(Windowsでは_netrcファイル)には、ネットワークを介してリモートホストにログインするためのデータが含まれる。

このファイルは、ファイル転送を開始したマシン上のユーザのホームディレクトリにある。

このファイルへの許可は、グループや他人による読み取りができないように設定されていなければならない。

次のトークンが認識される。これらのトークンは、スペース、タブ、または改行文字で区切る。





マシン



	これはリモートマシン名である。自動ログインプロセスは、指定されたリモートマシン名に一致する「マシン」トークンを.netrcファイルにおいて検索する。検索が完了すると、後続の.netrcトークンが処理され、EOFに達した時点または別の「マシン」トークンに遭遇した時点で停止する。



ログイン



	これはリモートマシンでのユーザ名である。このトークンがある場合、自動ログインプロセスは、指定のユーザ名を使ってログインを開始する。



パスワード



	これはログインのパスワードである。「パスワード」トークンがある場合、リモートサーバーからパスワードを求められたときに指定の文字列を提供し、自動ログインを試みる。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request();request << Netrc( "true" );

```

#### Netrc File

**構文:** obj &lt;&lt; Netrc File(&lt;path&gt;)

**説明:** 接続する時に、標準ではない、代替の.netrcファイルを使用する。

.netrcファイル(Windowsでは_netrcファイル)には、ネットワークを介してリモートホストにログインするためのデータが含まれる。

このファイルは、ファイル転送を開始したマシン上のユーザのホームディレクトリにある。

このファイルへの許可は、グループや他人による読み取りができないように設定されていなければならない。

次のトークンが認識される。これらのトークンは、スペース、タブ、または改行文字で区切る。



マシン



	これはリモートマシン名である。自動ログインプロセスは、指定されたリモートマシン名に一致する「マシン」トークンを.netrcファイルにおいて検索する。検索が完了すると、後続の.netrcトークンが処理され、EOFに達した時点または別の「マシン」トークンに遭遇した時点で停止する。



ログイン



	これはリモートマシンでのユーザ名である。このトークンがある場合、自動ログインプロセスは、指定のユーザ名を使ってログインを開始する。



パスワード



	これはログインのパスワードである。「パスワード」トークンがある場合、リモートサーバーからパスワードを求められたときに指定の文字列を提供し、自動ログインを試みる。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request();request << Netrc File( "$DESKTOP\..\my_netrc.txt" );request << Netrc( "true" );

```

#### Password

**構文:** obj &lt;&lt; Password(passwd)

**説明:** リクエストにおける基本的な認証に使うユーザ名を設定する。ユーザ名として指定された値は、パスワードとともにWebサービスに渡される。その際、ユーザ名とパスワードは、&apos;:&apos;で連結され、「name:password」という形式でWebサービスに渡される。なお、(Kerberos V5などで)エンコードされたユーザ名/パスワード値を使用することができる。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	JSON( "\[{"username":"bob","address":"12345"}]\" ),	Password( "cm9zczpBYmMxMjM=" ),);data = request << Send;

```

#### Proxy Server

**構文:** obj &lt;&lt; Proxy Server(proxy_url)

**説明:** プロキシURLは、proxy環境変数と同様、プロトコル接頭辞(http://)を含み、ユーザおよびパスワードを埋め込んで指定できる。

**JMP追加されたバージョン:** 15

```jsl

request = New HTTP Request();url = "http://my_proxy.com";request << Proxy Server( url );

```

#### Proxy User

**構文:** obj &lt;&lt; Proxy User(username:password)

**説明:** プロキシ文字列で指定されるユーザ名およびパスワードは、URLデコードされる。そのため、%40を使って@を指定したり、%3aを使ってコロンを指定したりできる。

**JMP追加されたバージョン:** 15

```jsl

request = New HTTP Request();url = "http://my_proxy.com";request << Proxy Server( url );request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**構文:** obj &lt;&lt; Query String([[ key=&gt; value ]], &lt;URI Encode(1|0|Safe(...))&gt;)

**説明:** リクエストのQuery String値を設定する。文字データのキー/値をもつ連想配列で指定する。なお、指定されたキー/値のペアは、Webサービスへの送信時にURLエンコード(エスケープ)される。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	url( "http://httpbin.org/get" ),	Method( "GET" ),	Query String( [["username" => "bob", "address" => "12345"]] ));data = request << Send;

```

#### Reset

**構文:** obj &lt;&lt; Reset(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**説明:** リクエストを新しい値にリセットする。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );json1 = request << Send;request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );json2 = request << Send;

```

#### Run

**構文:** obj &lt;&lt; Run

**説明:** リクエストを実行する。Sendの別名。Run will be either character data or binary BLOB. You can check the return with the Is String JSL関数からの戻り値。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );json = request << Send;Write( json || "\!n" );

```

#### SSL Version

**構文:** obj &lt;&lt; SSL Version (version)

**説明:** "DEFAULT"  ネゴシエーションしたデフォルトのバージョンを使用する(推奨)。

\\

]         "1+"     サーバーとクライアントが何をサポートしているかによって、TLSバージョン1.0以上を強制的に使用する。

\\

         1.0        TLS 1.0を強制

\\

         1.1        TLS 1.1を強制

\\

         1.2        TLS 1.2を強制

\\

         1.3        TLS 1.3を強制

\\

         2.0        TLS 2.0を強制(推奨しない)

\\

         3.0        TLS 3.0を強制(推奨しない)

\\

         "MAX"    自動的に最上位バージョンを選択

**JMP追加されたバージョン:** 19

```jsl

request = New HTTP Request();request << SSL Version( "1+" );

```

#### Secure

**構文:** obj &lt;&lt; Secure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**説明:** デフォルトではオンになっており、証明書の検証が行われる。falseに設定すると、証明書が検証されずにリクエストが実行される。promptに設定すると、ユーザは必要に応じて証明書を受け入れ、リクエストを実行できる。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	Url(		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"	),	Method( "GET" ),	Secure( 1 ));bytes = request << Send;img = Open( bytes, jpg );obj = New Window( "Mastering JMP", img );

```

#### Send

**構文:** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**説明:** リクエストを送る。Sendの戻り値は、文字データまたはバイナリのBLOB。Is String JSL関数を使用して戻り値を確認できる。show progress downloadを使用すると、ダウンロードをキャンセルすることも可能な、ダウンロードのプログレスバーが表示される。show progress uploadを使用すると、アップロードをキャンセルすることも可能な、アップロードのプログレスバーが表示される。show progress bothを使用すると、データのアップロードとダウンロードのプログレスバーが表示される。show progressを使用すると、キャンセルも可能な、アップロードまたはダウンロード（またはその両方）のプログレスバーが表示される。フォームを投稿する場合、show progressでアップロードとダウンロードの進行状況が表示される。ファイルを投稿する場合、show progressでアップロードの進行状況が表示される。データを取得する場合、show progressでダウンロードの進行状況が表示される。

**JMP追加されたバージョン:** 14

```jsl

baseURL = "https://swapi.co/api";request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );json = request << Send;Write( json || "\!n" );

```

#### Text

**構文:** obj &lt;&lt; Text( text data, &lt;content-type&gt;)

**説明:** リクエストのテキスト文字列を設定する。テキスト文字列は、リクエストのboty部分に使用される。リクエストのヘッダは、自動的に"Content-Type: text/plain"に設定される。

**JMP追加されたバージョン:** 15

```jsl

request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	Text( "Hello World" ));data = request << Send;

```

#### Timeout

**構文:** obj &lt;&lt; Timeout(seconds)

**説明:** リクエストアクションを完了する際のタイムアウト値はデフォルトで60秒。時間のかかるWebサービスアクションの場合は、値を調整できる。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	Url(		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"	),	Method( "GET" ),	Timeout( 120 ));bytes = request << Send;img = Open( bytes, jpg );obj = New Window( "Mastering JMP", img );

```

#### URL

**構文:** obj &lt;&lt; URL(path)

**説明:** リクエストを作成するときに(またはResetと共に使用するときに）パラメータとして指定できる。obj = HTTP Request(URL("http://google.com"));

**JMP追加されたバージョン:** 14

```jsl

fields = Associative Array();fields["text"] = "statistics";s = New HTTP Request(	URL( "http://text-processing.com/api/sentiment/" ),	Method( "POST" ),	Form( Fields( fields ) )) << Send;

```

#### Use Cookies

**構文:** obj &lt;&lt; Use Cookies(&lt;true | false&gt;))

**説明:** セッションにcookieを使用するようリクエストを設定する。デフォルトの値はtrue。

**JMP追加されたバージョン:** 17

```jsl

request = New HTTP Request();data = request << Use Cookies( "false" );

```

#### UserPwd

**構文:** obj &lt;&lt; UserPwd(clark kent:superman)

**説明:** 認証に使用するリクエストのユーザ名とパスワードのフィールドを設定する。形式は[user name]:[password]。ユーザ名とパスワードの文字列はURLデコードされないため、このオプションでコロンを含むユーザ名を送ることはできない。

**JMP追加されたバージョン:** 18

```jsl

request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	JSON( "\[{"username":"bob","address":"12345"}]\" ),	UserPwd( "clark kent:superman" ),);data = request << Send;

```

#### Username

**構文:** obj &lt;&lt; Username(name)

**説明:** リクエストにおける基本的な認証に使うユーザ名を設定する。ユーザ名として指定された値は、パスワードとともにWebサービスに渡される。その際、ユーザ名とパスワードは、&apos;:&apos;で連結され、「name:password」という形式でWebサービスに渡される。

**JMP追加されたバージョン:** 14

```jsl

request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	JSON( "\[{"username":"bob","address":"12345"}]\" ),	Username( "ross" ),	Password( "Abc123" ),);data = request << Send;

```

#### Verbose

**構文:** obj &lt;&lt; Verbose(&lt;"true"&gt; | &lt;"false"&gt;)

**説明:** ログに詳細なエラーメッセージを書き込む。デフォルトはtrue。

**JMP追加されたバージョン:** 14

```jsl

Write(	"\!Verbose is true by default.\!nIt automatically outputs status so you'll see the status message twice....\!n");baseURL = "http://swapi.co/api";request = New HTTP Request( URL( baseURL || "/people/1000" ), Method( "GET" ) );request << Send;Write( "\!n" || Char( request << Get Status Message ) || "\!n" );Write( "\!nSetting Verbose to false controls writing the status....\!n" );baseURL = "http://swapi.co/api";request << Reset( URL( baseURL || "/people/1000" ), Method( "GET" ), Verbose( "false" ) );request << Send;Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Verify SSL

**構文:** obj &lt;&lt; Verify SSL(&lt;"true"&gt; | &lt;"false"&gt;)

**説明:** 証明書の検証がオンになっている。falseに設定すると、証明書が検証されずにリクエストが実行される。

**JMP追加されたバージョン:** 16

```jsl

request = New HTTP Request(	Url(		"https://community.jmp.com/html/assets/community-icons/community-icon-mastering.png"	),	Method( "GET" ),	Verify SSL( "false" ));bytes = request << Send;img = Open( bytes, jpg );obj = New Window( "Mastering JMP", img );

```

#### XML

**構文:** obj &lt;&lt; XML( xml data )

**説明:** リクエストのXML文字列を設定する。XML文字列は、リクエストのbody部分に使用される。リクエストのヘッダは、自動的に"Content-Type: application/xml"に設定される。

**JMP追加されたバージョン:** 15

```jsl

request = New HTTP Request(	url( "http://httpbin.org/post" ),	Method( "POST" ),	XML(		"\[<?xml version="1.0" encoding="UTF-8"?>		<serv:message xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">		<body>			<bodyContent				xsi:type="java:com.webex.service.binding.attendee.LstMeetingAttendee">				<meetingKey>123456</meetingKey>			</bodyContent>		</body>	</serv:message>]\"	));data = request << Send;

```

## MultiHTTPRequests

### 項目のメッセージ

#### Add

**構文:** obj &lt;&lt; Add(request, &lt;label&gt;)

**説明:** HTTP RequestをMultiHTTPRequestに追加する。オプションでラベルを使用できる。これはパラレルダウンロードを行う場合に有用。すべてのHTTP Requestは、使用される前に検証される。

**JMP追加されたバージョン:** 17

```jsl

requests = New Multi HTTP Request();requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"		)	),	"My First Download");requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"		)	));data = requests << Download( "show progress", "detailed" );http_requests = requests << Get Requests();For( i = 1, i <= N Items( http_requests ), i++,	Show( http_requests[i] << Get Mime Type() ));

```

#### Download

**構文:** obj &lt;&lt; Download(&lt;"show progress"&gt;, &lt;"detailed"&gt;)

**説明:** HTTPレスポンスのファイルへのダウンロードをパラレルに行う。1つ以上のWebサービスから、複数のファイルを一度にダウンロードする場合に有用。show progressを使用すると、ダウンロードをキャンセルすることも可能な、ダウンロードのプログレスバーが表示される。detailsを使うと、個別のダウンロードの進行状況が表示される。

**JMP追加されたバージョン:** 17

**例 1**

```jsl

urls ={"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso","http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso","https://download.manjaro.org/xfce/21.1.0/manjaro-xfce-21.1.0-210817-linux513.iso"};requests = New Multi HTTP Request();For( i = 1, i <= N Items( urls ), i++,	request = New HTTP Request( Method( "GET" ), URL( urls[i] ) );	requests << Add( request ););http_requests = requests << Get Requests();data = requests << Download( "show progress", "detailed" );Show( requests << Has Error );For( i = 1, i <= N Items( http_requests ), i++,	Show( http_requests[i] << Get Mime Type() ));

```

**例 2**

```jsl

urls ={"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso","http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso","https://download.manjaro.org/xfce/21.1.0/manjaro-xfce-21.1.0-210817-linux513.iso"};process_result = Function( {p, r},	{Default Local},	Show( r ));process_error = Function( {p, e, t},	{Default Local},	Show( e );	Show( t ););requests = New Multi HTTP Request();For( i = 1, i <= N Items( urls ), i++,	request = New HTTP Request( Method( "GET" ), URL( urls[i] ) );	requests << Add( request ););http_requests = requests << Get Requests();promise = requests << Download( "async" );promise << On Result( process_result );promise << On Error( process_error );

```

#### Get Requests

**構文:** obj &lt;&lt; Get Requests()

**JMP追加されたバージョン:** 17

```jsl

requests = New Multi HTTP Request();http_request_1 = New HTTP Request(	Method( "GET" ),	URL(		"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"	));http_request_2 = New HTTP Request(	Method( "GET" ),	URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" ));requests << Add( http_request_1 );requests << Add( http_request_2 );http_requests = requests << Get Requests();//http_request_1 is the same as http_requests[1]//http_request_2 is the same as http_requests[2]

```

#### Has Error

**構文:** obj &lt;&lt; Has Error

**説明:** 複数のリクエストにエラーがある場合は、Trueを戻す。複数のリクエストは、そのHTTPリクエストのいずれかにエラーがある場合にエラーとなる。

**JMP追加されたバージョン:** 14

```jsl

requests = New Multi HTTP Request();http_request_1 = New HTTP Request(	Method( "GET" ),	URL(		"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"	));http_request_2 = New HTTP Request(	Method( "GET" ),	URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" ));requests << Add( http_request_1 );requests << Add( http_request_2 );data = requests << Download( "show progress", "detailed" );Show( requests << Has Error );

```

#### Is Success

**構文:** obj &lt;&lt; Is Success

**説明:** 複数のリクエストに成功した場合は、Trueを戻す。複数のリクエストは、そのHTTPリクエストがすべて成功した場合に成功となる。

**JMP追加されたバージョン:** 14

```jsl

requests = New Multi HTTP Request();http_request_1 = New HTTP Request( Method( "GET" ), URL( "https://google.com" ) );http_request_2 = New HTTP Request( Method( "GET" ), URL( "https://jmp.com" ) );requests << Add( http_request_1 );requests << Add( http_request_2 );data = requests << Download( "show progress", "detailed" );Show( requests << Is Successful );

```

#### Is Successful

**構文:** obj &lt;&lt; Is Successful

**説明:** 複数のリクエストに成功した場合は、Trueを戻す。複数のリクエストは、そのHTTPリクエストがすべて成功した場合に成功となる。

**JMP追加されたバージョン:** 14

```jsl

requests = New Multi HTTP Request();http_request_1 = New HTTP Request( Method( "GET" ), URL( "https://google.com" ) );http_request_2 = New HTTP Request( Method( "GET" ), URL( "https://jmp.com" ) );requests << Add( http_request_1 );requests << Add( http_request_2 );data = requests << Download( "show progress", "detailed" );Show( requests << Is Successful );

```

#### Is Valid

**構文:** obj &lt;&lt; Is Valid

**説明:** 複数のリクエストが有効かどうかを確認する。複数のリクエストは、そのすべてのHTTPリクエストが有効である場合に有効となる。

**JMP追加されたバージョン:** 17

```jsl

requests = New Multi HTTP Request();http_request_1 = New HTTP Request(	Method( "GET" ),	URL(		"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"	));http_request_2 = New HTTP Request(	Method( "GET" ),	URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" ));requests << Add( http_request_1 );requests << Add( http_request_2 );Show( requests << Is Valid() );

```

#### Reset

**構文:** obj &lt;&lt; Reset()

**説明:** 複数のリクエストをリセットする。このメッセージにより、すでに追加されているすべてのHTTPリクエストがリセットされる。

**JMP追加されたバージョン:** 17

```jsl

requests = New Multi HTTP Request();requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"		)	),	"My First Download");requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"		)	));requests << Reset();

```

#### Send

**構文:** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**説明:** Sendの戻り値は、文字データまたはバイナリのBLOB。Is String JSL関数を使用して戻り値を確認できる。show progress downloadを使用すると、ダウンロードをキャンセルすることも可能な、ダウンロードのプログレスバーが表示される。 show progress uploadを使用すると、アップロードをキャンセルすることも可能な、アップロードのプログレスバーが表示される。 show progress bothを使用すると、データのアップロードとダウンロードのプログレスバーが表示される。 show progressを使用すると、キャンセルも可能な、アップロードまたはダウンロード（またはその両方）のプログレスバーが表示される。フォームを投稿する場合、show progressでアップロードとダウンロードの進行状況が表示される。ファイルを投稿する場合、show progressでアップロードの進行状況が表示される。データを取得する場合、show progressでダウンロードの進行状況が表示される。

**JMP追加されたバージョン:** 17

**例 1**

```jsl

//Taken from the Scripting Index Example for New HTTP Requestrequests = New Multi HTTP Request();bLabel = 0;bValues = 0;dt = Empty();process_result = Function( {p, r},	{Default Local},	sentiments = {};	For( i = 1, i <= N Items( r ), i++,		Insert Into( sentiments, r[i]["content"] )	);	//loop through the returned sentiments	For( i = 1, i <= N Items( sentiments ), i++,		s = sentiments[i];		sAsList = Parse JSON( s );		retval = Associative Array();		retval["pos"] = sAsList["probability"]["pos"];		retval["neg"] = sAsList["probability"]["neg"];		retval["neutral"] = sAsList["probability"]["neutral"];		retval["label"] = sAsList["label"];		sentiment = retval;		If( bLabel,			Column( dt, colLabel )[i] = sentiment["label"]		);		If( bValues,			Column( dt, colValPos )[i] = sentiment["pos"];			Column( dt, colValNeg )[i] = sentiment["neg"];			Column( dt, colValNeutral )[i] = sentiment["neutral"];		);	););process_error = Function( {p, e, t},	{Default Local},	Show( e );	Show( t ););//this is now just going to configure a New HTTP Request and add it to New Multi HTTP RequestgetSentiment = Function( {text},	fields = Associative Array();	fields["text"] = text;	requests << Add(		New HTTP Request(			URL( "http://text-processing.com/api/sentiment/" ),			Method( "POST" ),			Form( Fields( fields ) ),			Headers( {"Accept: application/json"} )		)	););                      addSentimentColumns = Function( {dt3, colname, cLabel, cValues},	dt = dt3;	bLabel = cLabel;	bValues = cValues;	col = Column( dt, colname );	colLabel = "Sentiment_Label(" || colname || ")";	colValPos = "Sentiment_Pos(" || colname || ")";	colValNeg = "Sentiment_Neg(" || colname || ")";	colValNeutral = "Sentiment_Neutral(" || colname || ")";	If( bLabel,		dt << New Column( colLabel, Character )	);	If( bValues,		dt << New Column( colValPos, Numeric );		dt << New Column( colValNeg, Numeric );		dt << New Column( colValNeutral, Numeric );	);	For( i = 1, i <= N Rows( dt ), i++,		getSentiment( col[i] )	);	//this executes in parallel, with a promise	promise = requests << Send( "async" );	promise << On Result( process_result );	promise << On Error( process_error ););                      dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );addSentimentColumns( dt2, "Name", 1, 1 );

```

**例 2**

```jsl

//Taken from the Scripting Index Example for New HTTP Requestrequests = New Multi HTTP Request();//this is now just going to configure a New HTTP Request and add it to New Multi HTTP RequestgetSentiment = Function( {text},	fields = Associative Array();	fields["text"] = text;	requests << Add(		New HTTP Request(			URL( "http://text-processing.com/api/sentiment/" ),			Method( "POST" ),			Form( Fields( fields ) ),			Headers( {"Accept: application/json"} )		)	););                      addSentimentColumns = Function( {dt, colname, bLabel, bValues},	col = Column( dt, colname );	colLabel = "Sentiment_Label(" || colname || ")";	colValPos = "Sentiment_Pos(" || colname || ")";	colValNeg = "Sentiment_Neg(" || colname || ")";	colValNeutral = "Sentiment_Neutral(" || colname || ")";	If( bLabel,		dt << New Column( colLabel, Character )	);	If( bValues,		dt << New Column( colValPos, Numeric );		dt << New Column( colValNeg, Numeric );		dt << New Column( colValNeutral, Numeric );	);	For( i = 1, i <= N Rows( dt ), i++,		getSentiment( col[i] )	);	//this executes in parallel	sentiments = requests << Send( "show progress", "detailed" );	//loop through the returned sentiments	Show( N Items( requests << Get Requests() ) ); //number of requests in parallel	For( i = 1, i <= N Items( sentiments ), i++,		s = sentiments[i];		sAsList = Parse JSON( s );		retval = Associative Array();		retval["pos"] = sAsList["probability"]["pos"];		retval["neg"] = sAsList["probability"]["neg"];		retval["neutral"] = sAsList["probability"]["neutral"];		retval["label"] = sAsList["label"];		sentiment = retval;		If( bLabel,			Column( dt, colLabel )[i] = sentiment["label"]		);		If( bValues,			Column( dt, colValPos )[i] = sentiment["pos"];			Column( dt, colValNeg )[i] = sentiment["neg"];			Column( dt, colValNeutral )[i] = sentiment["neutral"];		);	););                      dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );addSentimentColumns( dt2, "Name", 1, 1 );

```

## OAuth2

### 項目のメッセージ

#### Authorization Fields

**構文:** oauth2 &lt;&lt; Authorization Fields(...)

**説明:** Authorization fieldsは、OAuth2承認URLのクエリ文字列に使用するキーと値のペアの連想配列。

**JMP追加されたバージョン:** 15

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";scope = "https://graph.microsoft.com/user.read";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";auth_fields = [=> ];auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;oauth2 = New OAuth2();oauth2 << Authorization Fields( auth_fields );

```

#### Authorization URL

**構文:** oauth2 &lt;&lt; Authorization URL(...)

**説明:** OAuth2承認URLを設定する。

**JMP追加されたバージョン:** 15

```jsl

oauth2 = New OAuth2();auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**構文:** oauth2 &lt;&lt; Browser Type("Default" | "Embedded" | "External")

**説明:** ［Default］オプションは、Googleで認証する場合を除き、OAuth2認証に組み込みブラウザを使用する。［Embedded］オプションは、Googleで認証する場合を除き、OAuth2認証に組み込みブラウザを使用する（現時点では［デフォルト］と同じ）。［External］オプションは、OAuth2認証に外部ブラウザを使用し、生成されるコード/URLをテキストエリアにコピーして認証を完了する。

**JMP追加されたバージョン:** 17

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*//*Note: the copy the url into the text area after authentication is complete*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";redirect_url = "http://localhost/myapp/";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";client_secret = "JqQX2PNo9bpM0uEihUPzyrh";scope = "openid offline_access https://graph.microsoft.com/user.read";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2( Browser Type( "External" ) );oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );auth_header = oauth2 << Get Auth Header();request = New HTTP Request(	URL( "https://graph.microsoft.com/v1.0/me" ),	Headers( {auth_header} ),	Method( "GET" ));data = request << Send;

```

#### Client Id

**構文:** oauth2 &lt;&lt; Client Id(...)

**説明:** Webサービスの作成時に使用されたパブリックIDであるOAuth2クライアントIDを設定する。

**JMP追加されたバージョン:** 15

```jsl

/*https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/*/client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";oauth2 = New OAuth2();oauth2 << Client Id( client_id );

```

#### Client Secret

**構文:** oauth2 &lt;&lt; Client Secret(...)

**説明:** Webサービスの作成時に作成されたOAuth2クライアントシークレットを設定する。

**JMP追加されたバージョン:** 15

```jsl

/*https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/*/client_secret = "JqQX2PNo9bpM0uEihUPzyrh";oauth2 = New OAuth2();oauth2 << Client Secret( client_secret );

```

#### Code Verifier

**構文:** oauth2 &lt;&lt; Code Verifier(&lt;"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"&gt;

**説明:** コード検証ツールは、クライアントが認可コードとアクセストークンをやりとりする際にそのアイデンティティの証明に使用する暗号学的にランダムな文字列。長さは最小で43文字、最大で128文字。

**JMP追加されたバージョン:** 19

```jsl

oauth2 = New OAuth2();oauth2 << Code Verifier( "cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" );

```

#### Get Access Token

**構文:** oauth2 &lt;&lt; Get Access Token()

**説明:** 現在のOAuth2アクセストークンを取得する。このとき、必要に応じて承認サーバーとの通信が開始される。

**JMP追加されたバージョン:** 15

```jsl

/*https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://accounts.google.com/o/oauth2/v2/auth";token_url = "https://www.googleapis.com/oauth2/v4/token";redirect_url = "http://localhost/myapp/";client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";scope = "openid profile";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );access_token = oauth2 << Get Access Token();

```

#### Get Auth Response Error

**構文:** oauth2 &lt;&lt; Get Authentication Response Error()

**説明:** OAuth2レスポンスエラーを取得する。

**JMP追加されたバージョン:** 18

```jsl

oauth2 = New OAuth2();error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**構文:** obj &lt;&lt; Get Auth Response Fields

**JMP追加されたバージョン:** 15

#### Get Authentication Response Error

**構文:** obj &lt;&lt; Get Authentication Response Error

**JMP追加されたバージョン:** 18

#### Get Authorization Header

**構文:** oauth2 &lt;&lt; Get Authorization Header

**説明:** ヘッダを

 Authorization: Bearer [OAuth2トークン]

の形式で取得する。[OAuth2トークン]は、承認サーバーから取得するBearerトークン。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";redirect_url = "http://localhost/myapp/";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";client_secret = "JqQX2PNo9bpM0uEihUPzyrh";scope = "openid offline_access https://graph.microsoft.com/user.read";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );auth_header = oauth2 << Get Auth Header();request = New HTTP Request(	URL( "https://graph.microsoft.com/v1.0/me" ),	Headers( {auth_header} ),	Method( "GET" ));data = request << Send;

```

**例 2**

```jsl

/*https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://accounts.google.com/o/oauth2/v2/auth";token_url = "https://www.googleapis.com/oauth2/v4/token";redirect_url = "http://localhost/myapp/";client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";scope = "openid profile";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );auth_header = oauth2 << Get Auth Header();request = New HTTP Request(	URL( "https://www.googleapis.com/oauth2/v3/userinfo" ),	Headers( {auth_header} ),	Method( "GET" ));data = request << Send;If( !Is Empty( data ),	json_jsl = Parse JSON( data );	If( json_jsl << Contains( "picture" ),		picture_url = json_jsl["picture"];		New Window( "Example", Picture Box( Open( picture_url ) ) );	,		Show( data )	););

```

#### Get Authorization Response Fields

**構文:** oauth2 &lt;&lt; Get Authorization Response Fields()

**説明:** 承認サーバーから現在のOAuth2レスポンスの値を取得する。

**JMP追加されたバージョン:** 15

```jsl

/*https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://accounts.google.com/o/oauth2/v2/auth";token_url = "https://www.googleapis.com/oauth2/v4/token";redirect_url = "http://localhost/myapp/";client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";scope = "openid profile";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );token = oauth2 << Get Access Token();auth_response = oauth2 << Get Authorization Response Fields();

```

#### Get Code

**構文:** oauth2 &lt;&lt; Get Code()

**説明:** 現在のOAuth2コードを取得する。このとき、必要に応じて承認サーバーとの通信が開始される。

**JMP追加されたバージョン:** 15

```jsl

/*https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://accounts.google.com/o/oauth2/v2/auth";token_url = "https://www.googleapis.com/oauth2/v4/token";redirect_url = "http://localhost/myapp/";client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";scope = "openid profile";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );code = oauth2 << Get Code();

```

#### Get Grant Type

**構文:** oauth2 &lt;&lt; Get Grant Type()

**説明:** 現在のOAuth2グラントタイプを取得する。

**JMP追加されたバージョン:** 15

```jsl

oauth2 = New OAuth2();grant_types = oauth2 << Get Grant Types();oauth2 << Grant Type( grant_types[1] );grant = oauth2 << Get Grant Type();Show( grant );

```

#### Get Grant Types

**構文:** oauth2 &lt;&lt; Get Grant Types

**説明:** JMPでサポートされているOAuth2グラントタイプを取得する。

**JMP追加されたバージョン:** 15

```jsl

/*https://oauth.net/2/grant-types/*/oauth2 = New OAuth2();grant_types = oauth2 << Get Grant Types();Show( grant_types );

```

#### Get ID Token

**構文:** oauth2 &lt;&lt; Get ID Token()

**説明:** 現在のOAuth2 IDトークンを取得する。このとき、必要に応じて承認サーバーとの通信が開始される。

**JMP追加されたバージョン:** 15

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";redirect_url = "http://localhost/myapp/";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";client_secret = "JqQX2PNo9bpM0uEihUPzyrh";scope = "openid offline_access https://graph.microsoft.com/user.read";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );id_token = oauth2 << Get ID Token();

```

#### Get Refresh Token

**構文:** oauth2 &lt;&lt; Get Refresh Token()

**説明:** 現在のOAuth2更新トークンを取得する。このとき、必要に応じて承認サーバーとの通信が開始される。

**JMP追加されたバージョン:** 15

```jsl

/*https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://accounts.google.com/o/oauth2/v2/auth";token_url = "https://www.googleapis.com/oauth2/v4/token";redirect_url = "http://localhost/myapp/";client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";scope = "openid profile";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );refresh_token = oauth2 << Get Refresh Token();

```

#### Get Scope

**構文:** oauth2 &lt;&lt; Get Scope()

**説明:** 現在のOAuth2スコープを取得する。

**JMP追加されたバージョン:** 15

```jsl

/*https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://accounts.google.com/o/oauth2/v2/auth";token_url = "https://www.googleapis.com/oauth2/v4/token";redirect_url = "http://localhost/myapp/";client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";scope = "openid profile";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );code = oauth2 << Get Scope();

```

#### Get Window Title

**構文:** oauth2 &lt;&lt; Get Window Title

**説明:** OAuth2のウィンドウタイトルを取得する。

**JMP追加されたバージョン:** 16

```jsl

oauth2 = New OAuth2();oauth2 << Set Window Title( "Authorization Window" );title = oauth2 << Get Window Title;

```

#### Grant Type

**構文:** oauth2 &lt;&lt; Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**説明:** 要求されるグラントタイプは、JMPとOAuth2承認プロバイダによってサポートされているものでなければなりません。

**JMP追加されたバージョン:** 15

```jsl

oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );grant = oauth2 << Get Grant Type();Show( grant );

```

#### Has Auth Response  Error

**構文:** obj &lt;&lt; Has Auth Response Error

**JMP追加されたバージョン:** 18

#### Has Authentication Response  Error

**構文:** oauth2 &lt;&lt; Has Authentication Response Error()

**説明:** OAuth2認証のレスポンスエラーをチェックする。

**JMP追加されたバージョン:** 18

```jsl

oauth2 = New OAuth2();If( oauth2 << Has Authentication Response Error(),	Show( oauth2 << Get Authentication Response Error ));

```

#### Is Expired

**構文:** oauth2 &lt;&lt; Is Expired()

**説明:** 現在のOAuth2アクセストークンの有効期限が切れているかどうかを戻す。

**JMP追加されたバージョン:** 15

```jsl

/*https://github.com/googlesamples/oauth-apps-for-windows/blob/master/OAuthConsoleApp/OAuthConsoleApp/Program.cs*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://accounts.google.com/o/oauth2/v2/auth";token_url = "https://www.googleapis.com/oauth2/v4/token";redirect_url = "http://localhost/myapp/";client_id = "581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";client_secret = "3f6NggMbPtrmIBpgx-MK2xXK";scope = "openid profile";auth_fields = [=> ];token_fields = [=> ];oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );token = oauth2 << Get Access Token();expired = oauth2 << Is Expired();

```

#### Login Hint

**構文:** oauth2 &lt;&lt; Login Hint(hint)

**説明:** Login_hint値を設定する。login_hintは、エンドユーザーがログインするために（必要に応じて）使用する可能性があるログイン識別子に関する承認サーバーへの「ヒント」として、認証リクエストで使用されるオプションのパラメータ。

**JMP追加されたバージョン:** 17

```jsl

oauth2 = New OAuth2();oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**構文:** oauth2 &lt;&lt; Password(...)

**説明:** パスワードグラントタイプのOAuth2パスワードを設定する。

**JMP追加されたバージョン:** 15

```jsl



```

#### Redirect URL

**構文:** oauth2 &lt;&lt; Redirect URL(...)

**説明:** Webサービスの作成時に使用されたOAuth2リダイレクトURLを設定する。

**JMP追加されたバージョン:** 15

```jsl

redirect_url = "http://localhost/myapp/";oauth2 = New OAuth2();oauth2 << Redirect URL( redirect_url );

```

#### Scope

**構文:** oauth2 &lt;&lt; Scope(...)

**説明:** アプリケーションによるアカウントへのアクセスを制限するOAuth2スコープを設定する。

**JMP追加されたバージョン:** 15

```jsl

/*https://oauth.net/2/scope/https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent*/scope = {"openid", "offline_access", "https://graph.microsoft.com/user.read"};auth_fields = [=> ];auth_fields["scope"] = Concat Items( scope, " " );Show( auth_fields );oauth2 = New OAuth2();oauth2 << Authorization Fields( auth_fields );

```

#### Set Window Title

**構文:** oauth2 &lt;&lt; Set Window Title(title)

**説明:** OAuth2のウィンドウタイトルを設定する。

**JMP追加されたバージョン:** 16

```jsl

oauth2 = New OAuth2();oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**構文:** obj &lt;&lt; Token Fields

**説明:** OAuth2トークンURLのクエリ文字列に使用するキーと値のペアの連想配列。

**JMP追加されたバージョン:** 15

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*/tokem_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";client_secret = "6731de76-14a6-49ae-97bc-6eba6914391e";token_fields = [=> ];scope = "openid profile";token_fields["scope"] = scope;oauth2 = New OAuth2();oauth2 << Token Fields( token_fields );

```

#### Token URL

**構文:** oauth2 &lt;&lt; Token URL(...)

**説明:** OAuth2トークンURLを設定する。

**JMP追加されたバージョン:** 15

```jsl

oauth2 = New OAuth2();token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**構文:** oauth2 &lt;&lt; Use Default Window Title(1 | 0)

**説明:** OAuth2のウィンドウタイトルを取得する。

**JMP追加されたバージョン:** 16

```jsl

oauth2 = New OAuth2();oauth2 << Use Default Window Title( 1 );title = oauth2 << Get Window Title;

```

#### Username

**構文:** oauth2 &lt;&lt; Username(...)

**説明:** パスワードグラントタイプのOAuth2ユーザ名を設定する。

**JMP追加されたバージョン:** 15

```jsl



```

