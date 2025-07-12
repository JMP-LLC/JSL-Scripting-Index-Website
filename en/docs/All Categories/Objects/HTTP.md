# HTTP



## HTTPRequest

### Item Messages

#### Authentication Method

**Syntax:** obj << Authentication Method(method)

**Description:** Enforces an authentication method. Valid values are:



	NONE         - No HTTP authentication



	BASIC        - HTTP Basic authentication



	KERBEROS     - HTTP Kerberos



	NEGOTIATE    - HTTP Negotiate (SPNEGO) authentication



	NTLM         - HTTP NTLM authentication



	ANY          - All types set (default)



	ANYSAFE      - All types except Basic



	DEFAULT      - The default authentication



By default JMP and the web service negotiate the most secure authentication method.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Authentication Method( "KERBEROS" );

```

#### Blob

**Syntax:** obj << Blob( binary data, <content-type> )

**Description:** This will set a Blob value in the request. The Blob value will be used as the body of the document. The request content type header will automatically be set to "Content-Type: application/octet-stream".

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

**Syntax:** obj << Bypass Proxy(localhost)

**Description:** Comma-separated list of hosts which do not use a proxy, if one is specified. The only wildcard is a single * character, which matches all hosts, and effectively disables the proxy. Each name in this list is matched as either a domain which contains the hostname, or the hostname itself. For example, local.com would match local.com, local.com:80, and www.local.com, but not www.notlocal.com.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Proxy Server( "http://my_proxy.com" );
request << Proxy User( "clark%20kent:superman" );
request << Bypass Proxy( "localhost" );

```

#### Certificates

**Syntax:** obj << Certificates(certificate file)

**Description:** Use the specified certificate file for verification. The file might contain multiple CA certificates. The certificate(s) must be in PEM format.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**Syntax:** obj << Cookie([[ key=> value ]]

**Description:** Set a cookie in the request.

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

**Syntax:** obj << Cookie File(<path>, <"replace" | "rename" | "append">)

**Description:** Specify an alternate cookie file.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**Syntax:** obj << Curlrc(<true | false>)

**Description:** Configures the request to use a standard .curl file.

The .curlrc (_curlrc on Windows) file contains default options used for curl.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc( "true" );

```

#### Curlrc File

**Syntax:** obj << Curlrc File(<path>)

**Description:** Configures the request to use an alternate .curlrc file.

The .curlrc (_curlrc on Windows) file contains default options used for curl.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );
request << Curlrc( "true" );

```

#### DNS Timeout

**Syntax:** obj << DNS Timeout(seconds)

**Description:** The default DNS cache timeout for the connection is 60 seconds. This value can be adjusted to accommodate DNS caching. Set to 0 to completely disable caching, or set to -1 to make the cached entries remain in memory.

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

**Syntax:** obj << Decode64 Char( value )

**Description:** Decode the string using Base 64 encoding

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Decode64 Char(
	"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4="
);

```

#### Download

**Syntax:** obj << Download( path, <"replace" | "rename" | "append"> )

**Description:** Downloads the HTTP Response to a file. Useful for downloading files from a web service.The replace option overwrites any existing file.The rename option uses sequential file names when a duplicate name is found(file, file(1), file(2)...).The append option appends to the existing file. Using show progress shows a cancelable progress bar with the percentage of the file downloaded.

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

**Syntax:** obj << Encode64 Char( value )

**Description:** Encode the string using Base 64 encoding

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Encode64 Char( "Man is distinguished, not only by his reason, but ..." );

```

#### File

**Syntax:** obj << File ( path, <content-type> )

**Description:** This will set a File value in the request. The File contents will be used as the body of the document. The request content-type header will automatically be set to the appropriate content based on the file extension or application/octet-stream if not found.

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

**Syntax:** obj << Form(Fields([[ key=> value ]], <URI Encode(1 | 0 | Safe(...))>), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**Description:** Sets the form data value in the request. The form will be used as the body of the document. Form data can have fields and files elements.

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

**Syntax:** obj << Get Certificate Info

**Description:** Shows details about the certificate, such as who issued it, when it expires, and other information to ensure the certificate is trustworthy.

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "https://google.com" ) );
request << Get Certificate Info;

```

#### Get Last URL

**Syntax:** obj << Get Last URL

**Description:** Gets the last URL used in the request. Useful to find the redirected URL.

```jsl

Names Default To Here( 1 );

baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**Syntax:** mimetype = obj << Get MIME Type

**Description:** After Send (or Download) is used with a request, this can be used to retrieve the MIME type of the returned data.

```jsl

Names Default To Here( 1 );

url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
request = New HTTP Request( URL( url ), Method( "GET" ) );
request << Send;
Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**Syntax:** obj << Get Last Method

**Description:** Gets the last HTTP method used in the request.

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

**Syntax:** obj << Get Response Headers

**Description:** The response headers are an associative array of key/value pairs returned after a request has been sent. HTTP header definitions can be found here: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Date, Expires and Last-Modified keys will be converted to JMP dates. Age and Content-Length keys will be converted to numbers. All other values will be character.

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

**Syntax:** obj << Get Status

**Description:** Returns the status of the request after a Send. The status is the HTTP status if there are no connection errors. Otherwise, the connection status. 200-299 is successful.

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

**Syntax:** obj << Get Status Message

**Description:** Returns the status message of the request after a Send message. The status message is the HTTP status message if there are no connection errors. Otherwise, the connection status message. A status of 200-299 is successful.

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**Syntax:** obj << Get Status Msg

**Description:** Returns the status message of the request after a Send. This is an alias of GetStatusMessage. The status message is the HTTP status message if there are no connection errors. Otherwise, the connection status message. A status of 200-299 is successful.

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**Syntax:** obj << Get Warning Headers

**Description:** Gets the warning header values (if any) from the request.

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

**Syntax:** request << GetVersion

**Description:** Returns the Current version of cURL being used in JMP

```jsl

Names Default To Here( 1 );
Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**Syntax:** obj << Has Client Error

**Description:** True if the HTTP status is 400-499.

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

**Syntax:** obj << Has Error

**Description:** True if the HTTP status is 400-599.

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

**Syntax:** obj << Has Information

**Description:** True if the HTTP status is 100-199.

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

**Syntax:** obj << Has Redirection

**Description:** True if the HTTP status is 300-399.

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

**Syntax:** obj << Has Server Error

**Description:** True if the HTTP status is 500-599.

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

**Syntax:** obj << Has Warning

**Description:** True if the HTTP status has warning headers

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

**Syntax:** obj << Headers({header 1}, {header 2} | [[ key=> value, key2=>value2 ]])

**Description:** HTTP header definitions can be found here:

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. It is used to specify various meta information about the request to help the webservice response appropriately. These values should be thought of as "hints" to the webservice since it may choose not to honor the parameters. Consult the webservice API to verify support. For the request, "Content-Type: application/json" is used when specifying JSON values, "Content-Type: application/octet-stream" is used when specifying Blob values, "Content-Type: [extension/mime type mapping]" is used with File values, and, "Content-Type: application/x-www-form-urlencoded" or "Content-Type: multipart/form-data" depending on the content of the Form. The headers also "hint" to the webservice the type of data that should be returned. Common headers are "Accept: application/json", "Accept: application/xml", "Accept: text/csv", and "Accept: text/html". Header values can be specified as either a JSL list of character data or an Associative Array of character key/value pairs.

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

**Syntax:** obj << Insecure(<"true"> | <"false">) | <"prompt">

**Description:** By default, certificate validation is on. If set to true, this will allow requests to complete without certificate validation. If set to prompt, this will allow a user to accept the certificate and complete the request as needed.

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

**Syntax:** obj << Is Success

**Description:** True if the HTTP status is 200-299.

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

**Syntax:** obj << Is Successful

**Description:** True if the HTTP status is 200-299.

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

**Syntax:** obj << Is Valid

**Description:** Is the request valid

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Valid();

```

#### Is Verbose

**Syntax:** obj << Is Verbose

**Description:** Is the request automatically logging status messages

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Is Verbose();

```

#### JSON

**Syntax:** obj << JSON( json data )

**Description:** This will set a JSON string value in the request. The JSON string will be used as the body of the document. The request content type header will automatically be set to "Content-Type: application/json". You can use the As JSON Expr method to convert an Associative Array to a JSON string.

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

**Syntax:** obj << Max Redirect(...)

**Description:** Specify number of redirects the request will follow.

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

**Syntax:** obj << Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**Description:** Sets the method for the request. Currently, Get, Post, Put, Patch, Delete, and Head are supported.

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

**Syntax:** obj << Netrc(<true | false>)

**Description:** Configures the request to use a standard .netrc file.

The .netrc (_netrc on Windows) file contains data for logging in to a remote host over the network.

This file resides in the user&apos;s home directory on the machine initiating the file transfer.

Its permissions should be set to disallow Read access by group and others.

The following tokens are recognized. They may be separated by space, tab, or newline characters:





machine



	identifies a remote machine name. The auto-login process searches the .netrc file for a machine token that matches the remote machine specified. Once a match is made, the subsequent .netrc tokens are processed, stopping when the EOF is reached or another machine token is encountered.



login



	identifies a user on the remote machine. If this token is present, the auto-login process will initiate a login using the specified name.



password



	supplies a password. If this token is present, the auto-login process will supply the specified string if the remote server requires a password as part of the login process.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc( "true" );

```

#### Netrc File

**Syntax:** obj << Netrc File(<path>)

**Description:** Configures the request to use an alternate .netrc file.

The .netrc (_netrc on Windows) file contains data for logging in to a remote host over the network.

This file resides in the user&apos;s home directory on the machine initiating the file transfer.

Its permissions should be set to disallow Read access by the group and others.

The following tokens are recognized. They may be separated by space, tab, or newline characters:



machine



	identifies a remote machine name. The auto-login process searches the .netrc file for a machine token that matches the remote machine specified. Once a match is made, the subsequent .netrc tokens are processed, stopping when the EOF is reached or another machine token is encountered.



login



	identifies a user on the remote machine. If this token is present, the auto-login process will initiate a login using the specified name.



password



	supplies a password. If this token is present, the auto-login process will supply the specified string if the remote server requires a password as part of the login process.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << Netrc File( "$DESKTOP\..\my_netrc.txt" );
request << Netrc( "true" );

```

#### Password

**Syntax:** obj << Password(passwd)

**Description:** Sets the password on the request used for basic authentication. This value is used with the request user name, where both user name and password are concatenated with a &apos;:&apos; (name:password) and passed to the web service. In addition, an encoded (such as a Kerberos V5 encoded) username/password value can be used here.

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

**Syntax:** obj << Proxy Server(proxy_url)

**Description:** The proxy URL can be specified the same way as the proxy environment variables, including the protocol prefix (http://) and the embedded user + password.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );

```

#### Proxy User

**Syntax:** obj << Proxy User(username:password)

**Description:** User and password that might be provided in the proxy string are URL decoded. This allows you to pass in special characters such as @ by using %40 or pass in a colon with %3a.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );
request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**Syntax:** obj << Query String([[ key=> value ]], <URI Encode(1|0|Safe(...))>)

**Description:** Sets the Query String value in the request. This is an Associative Array key/value collection of character data. The key/value pairs are URL encoded (escaped) when they are sent to the web service.

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

**Syntax:** obj << Reset(URL(...), Method(...), <Form(<Fields(...)>, <Files(...)>)> | <File(...)> | <Blob(...)> | <JSON(...)>, <QueryString(...)>, <Headers(...)>, <Username(...)>, <Password(...)>)

**Description:** Resets request to new values.

```jsl

Names Default To Here( 1 );

request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json1 = request << Send;
request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json2 = request << Send;

```

#### Run

**Syntax:** obj << Run

**Description:** Runs the request. This is an alias of Send. The return value from Run will be either character data or binary BLOB. You can check the return with the Is String JSL function.

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### SSL Version

**Syntax:** obj << SSL Version (version)

**Description:** "DEFAULT"  Use the default negotiated version (recommended).

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

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
request << SSL Version( "1+" );

```

#### Secure

**Syntax:** obj << Secure(<"true"> | <"false">) | <"prompt">

**Description:** By default, certificate validation is on. If set to false, this will allow requests to complete without certificate validation. If set to prompt, this will allow a user to accept the certificate and complete the request as needed.

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

**Syntax:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**Description:** Sends the request. The return value from Send will be either character data or binary BLOB. You can check the return with the Is String JSL function. Using show progress download will show a cancelable progress bar with the progress of data downloaded. Using show progress upload will show a cancelable progress bar with the progress of data uploaded. Using show progress both will show a cancelable progress bar with the progress of data uploaded and downloaded. Using show progress will show a cancelable progress bar with the progress of data uploaded or downloaded (or both). For posting forms, show progress will show upload and download progress. For posting files, show progress will show upload progress. For retrieving data, show progress will show download progress.

```jsl

Names Default To Here( 1 );

baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### Text

**Syntax:** obj << Text( text data, <content-type>)

**Description:** This will set text string value in the request. The text string will be used as the body of the document. The request content type header will automatically be set to "Content-Type: text/plain"

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

**Syntax:** obj << Timeout(seconds)

**Description:** The default timeout for the request action to complete is 60 seconds. This value can be adjusted to accommodate more time consuming web service actions.

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

**Syntax:** obj << URL(path)

**Description:** When the request is created (or used with Reset), this can be used as a parameter. obj = HTTP Request(URL("http://google.com"));

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

**Syntax:** obj << Use Cookies(<true | false>))

**Description:** Configures the request to use cookies for the session. The default is true.

```jsl

Names Default To Here( 1 );

request = New HTTP Request();
data = request << Use Cookies( "false" );

```

#### UserPwd

**Syntax:** obj << UserPwd(clark kent:superman)

**Description:** Sets the user and password field on the request used for authentication. The format of which is: [user name]:[password]. The user and password strings are not URL decoded, so there is no way to send in a user name containing a colon using this option.

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

**Syntax:** obj << Username(name)

**Description:** Sets the user name on the request used for basic authentication. This value is used in conjunction with request password, where both user name and password are concatenated with a &apos;:&apos; (name:password) and passed to the web service.

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

**Syntax:** obj << Verbose(<"true"> | <"false">)

**Description:** Writes extensive error messages to the log. The default is true.

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

**Syntax:** obj << Verify SSL(<"true"> | <"false">)

**Description:** Certificate verification is on. If set to false, requests to complete without certificate verification will be allowed.

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

**Syntax:** obj << XML( xml data )

**Description:** This will set an xml string value in the request. The xml string will be used as the body of the document. The request content type header will automatically be set to "Content-Type: application/xml"

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

### Item Messages

#### Add

**Syntax:** obj << Add(request, <label>)

**Description:** Add an HTTP Request to MultiHTTPRequest. An optional label can be used. This is useful when performing parallel downloads. All HTTP Requests are validated before they are used.

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

**Syntax:** obj << Download(<"show progress">, <"detailed">)

**Description:** Downloads the HTTP Responses to files in parallel. Useful for downloading multiple files at once from one or more web services. Using show progress will show a cancelable progress bar with the progress of the files downloaded. Using details will show the individual download progress.

**Example 1**

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

**Example 2**

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

**Syntax:** obj << Get Requests()

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

**Syntax:** obj << Has Error

**Description:** Returns true if the multi request has an error. The multi request has an error if any its HTTP requests have an error.

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

**Syntax:** obj << Is Success

**Description:** Returns true if the multi request is successful. The multi request is successful if all of its HTTP requests are successful.

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

**Syntax:** obj << Is Successful

**Description:** Returns true if the multi request is successful. The multi request is successful if all of its HTTP requests are successful.

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

**Syntax:** obj << Is Valid

**Description:** Is the multi request valid. The multi request is valid if all its HTTP requests are valid.

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

**Syntax:** obj << Reset()

**Description:** Resets multi requests. This resets any HTTP request that has already been added.

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

**Syntax:** obj << Send(<"text" | "blob">, <"show progress download" | "show progress upload" | "show progress both" | "show progress">)

**Description:** The return value from Send will be either character data or binary BLOB. You can check the return with the Is String JSL function. Using show progress download will show a cancelable progress bar with the progress of data downloaded. Using show progress upload will show a cancelable progress bar with the progress of data uploaded. Using show progress both will show a cancelable progress bar with the progress of data uploaded and downloaded. Using show progress will show a cancelable progress bar with the progress of data uploaded or downloaded (or both). For posting forms, show progress will show upload and download progress. For posting files, show progress will show upload progress. For retrieving data, show progress will show download progress.

**Example 1**

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

**Example 2**

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

### Item Messages

#### Authorization Fields

**Syntax:** oauth2 << Authorization Fields(...)

**Description:** Authorization fields is an associative array of key and value pairs to be used in the query string for the OAuth2 authorization URL.

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

**Syntax:** oauth2 << Authorization URL(...)

**Description:** Sets the OAuth2 authorization URL.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**Syntax:** oauth2 << Browser Type("Default" | "Embedded" | "External")

**Description:** The Default option is to use the embedded browser for OAuth2 authentication unless authenticating with Google. The Embedded option is to use the embedded browser for OAuth2 authentication unless authenticating with Google (currently the same as Default). The External option is to use the external browser for OAuth2 authentication and copy the resulting code/URL into the text area in order to complete authentication.

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

**Syntax:** oauth2 << Client Id(...)

**Description:** Sets the OAuth2 client ID is a public identifier that was used during web service creation.

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

**Syntax:** oauth2 << Client Secret(...)

**Description:** Sets the OAuth2 client secret that was created during web service creation.

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

**Syntax:** oauth2 << Code Verifier(<"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~">

**Description:** The code verifier is a cryptographically random string that the client uses to identify itself when exchanging an authorization code for an access token. It has a minimum length of 43 characters and a maximum length of 128 characters.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Code Verifier( "cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" );

```

#### Get Access Token

**Syntax:** oauth2 << Get Access Token()

**Description:** Gets the current OAuth2 access token. This initiates communication to the authorization server if needed.

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

**Syntax:** oauth2 << Get Authentication Response Error()

**Description:** Gets the OAuth2 response error.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**Syntax:** obj << Get Auth Response Fields

#### Get Authentication Response Error

**Syntax:** obj << Get Authentication Response Error

#### Get Authorization Header

**Syntax:** oauth2 << Get Authorization Header

**Description:** Gets the header in the form:

Authorization: Bearer [OAuth2 token]

where [OAuth2 token] is the bearer token obtained from an authorization server.

**Example 1**

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

**Example 2**

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

**Syntax:** oauth2 << Get Authorization Response Fields()

**Description:** Gets the current OAuth2 response values from the authorization server.

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

**Syntax:** oauth2 << Get Code()

**Description:** Gets the current OAuth2 code. This initiates communication to the authorization server if needed.

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

**Syntax:** oauth2 << Get Grant Type()

**Description:** Gets the current OAuth2 grant type.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
oauth2 << Grant Type( grant_types[1] );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Get Grant Types

**Syntax:** oauth2 << Get Grant Types

**Description:** Gets the supported JMP OAuth2 grant types.

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

**Syntax:** oauth2 << Get ID Token()

**Description:** Gets the current OAuth2 ID token. This initiates communication to the authorization server if needed.

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

**Syntax:** oauth2 << Get Refresh Token()

**Description:** Gets the current OAuth2 refresh token. This initiates communication to the authorization server if needed.

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

**Syntax:** oauth2 << Get Scope()

**Description:** Gets the current OAuth2 scope.

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

**Syntax:** oauth2 << Get Window Title

**Description:** Gets the OAuth2 window title.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );
title = oauth2 << Get Window Title;

```

#### Grant Type

**Syntax:** oauth2 << Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**Description:** The requested grant type has to be one of the grant types supported by JMP and the OAuth2 authorization provider.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Has Auth Response  Error

**Syntax:** obj << Has Auth Response  Error

#### Has Authentication Response  Error

**Syntax:** oauth2 << Has Authentication Response Error()

**Description:** Checks for an OAuth2 authentication response error.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
If( oauth2 << Has Authentication Response Error(),
	Show( oauth2 << Get Authentication Response Error )
);

```

#### Is Expired

**Syntax:** oauth2 << Is Expired()

**Description:** Returns whether the current OAuth2 access token has expired.

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

**Syntax:** oauth2 << Login Hint(hint)

**Description:** Sets the login_hint value. login_hint is an OPTIONAL parameter in the Authentication Request as a "Hint" to the Authorization Server about the login identifier the End-User might use to log in (if necessary).

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**Syntax:** oauth2 << Password(...)

**Description:** Sets the OAuth2 password for the password grant type.

```jsl

Names Default To Here( 1 );

```

#### Redirect URL

**Syntax:** oauth2 << Redirect URL(...)

**Description:** Sets the OAuth2 redirect URL that was used during web service creation.

```jsl

Names Default To Here( 1 );

redirect_url = "http://localhost/myapp/";
oauth2 = New OAuth2();
oauth2 << Redirect URL( redirect_url );

```

#### Scope

**Syntax:** oauth2 << Scope(...)

**Description:** Sets the OAuth2 scope, a way to limit an application&apos;s access to an account.

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

**Syntax:** oauth2 << Set Window Title(title)

**Description:** Sets the OAuth2 window title.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**Syntax:** obj << Token Fields

**Description:** An associative array of key and value pairs to be used in the query string for the OAuth2 token URL.

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

**Syntax:** oauth2 << Token URL(...)

**Description:** Sets the OAuth2 token URL.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**Syntax:** oauth2 << Use Default Window Title(1 | 0)

**Description:** Gets the OAuth2 window title.

```jsl

Names Default To Here( 1 );

oauth2 = New OAuth2();
oauth2 << Use Default Window Title( 1 );
title = oauth2 << Get Window Title;

```

#### Username

**Syntax:** oauth2 << Username(...)

**Description:** Sets the OAuth2 user name for the password grant type.

```jsl

Names Default To Here( 1 );

```

