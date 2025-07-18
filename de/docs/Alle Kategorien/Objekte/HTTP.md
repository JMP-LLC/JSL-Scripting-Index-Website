# HTTP



## HTTPRequest

### Elementmeldungen

#### Authentication Method

**Syntax:** obj &lt;&lt; Authentication Method(method)

**Beschreibung:** Erzwingt ein Authentifizierungsverfahren. Gültige Werte sind:



	NONE         - Keine HTTP-Authentifizierung



	BASIC        - HTTP Basic-Authentifizierung



	KERBEROS     - HTTP Kerberos



	NEGOTIATE    - HTTP Negotiate (SPNEGO)-Authentifizierung



	NTLM         - HTTP NTLM-Authentifizierung



	ANY          - Alle Typen festgelegt (Standard)



	ANYSAFE      - Alle Typen außer Basic



	DEFAULT      - Die Standardauthentifizierung



Standardmäßig handeln JMP und der Webservice das sicherste Authentifizierungsverfahren aus.

**JMP Version hinzugefügt:** 17

```jsl


request = New HTTP Request();
request << Authentication Method( "KERBEROS" );

```

#### Blob

**Syntax:** obj &lt;&lt; Blob( binary data, &lt;content-type&gt; )

**Beschreibung:** Hiermit wird ein Blobwert im Request festgelegt. Der Blobwert wird als Textkörper des Dokuments verwendet. Der Header „Content Type“ des Requests wird automatisch auf „Content-Type: application/octet-stream“ gesetzt.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Bypass Proxy(localhost)

**Beschreibung:** Durch Komma getrennte Liste von Hosts, die keinen Proxy verwenden, sofern einer angegeben ist. Der einzige Platzhalter ist ein einzelnes Zeichen *, das allen Hosts entspricht und den Proxy effektiv deaktiviert. Jeder Name in dieser Liste entspricht entweder einer Domäne, die den Hostnamen enthält, oder dem Hostnamen selbst. Beispiel: local.com würde local.com, local.com:80 und www.local.com entsprechen, nicht jedoch www.notlocal.com.

**JMP Version hinzugefügt:** 15

```jsl


request = New HTTP Request();
request << Proxy Server( "http://my_proxy.com" );
request << Proxy User( "clark%20kent:superman" );
request << Bypass Proxy( "localhost" );

```

#### Certificates

**Syntax:** obj &lt;&lt; Certificates(certificate file)

**Beschreibung:** Verwenden Sie die angegebene Zertifikatsdatei für die Verifizierung. Die Datei enthält möglicherweise mehrere CA-Zertifikate. Die Zertifikate müssen im PEM-Format sein.

**JMP Version hinzugefügt:** 16

```jsl


request = New HTTP Request();
request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**Syntax:** obj &lt;&lt; Cookie([[ key=&gt; value ]]

**Beschreibung:** Einen Cookie im Request festlegen.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Cookie( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Cookie File

**Syntax:** obj &lt;&lt; Cookie File(&lt;path&gt;, &lt;"replace" | "rename" | "append"&gt;)

**Beschreibung:** Geben Sie eine alternative Cookie-Datei an.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request();
data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**Syntax:** obj &lt;&lt; Curlrc(&lt;true | false&gt;)

**Beschreibung:** Konfiguriert den Request so, dass eine Standarddatei *.curl verwendet wird.

Die Datei *.curlrc (_curlrc unter Windows) enthält Standardoptionen für curl.

**JMP Version hinzugefügt:** 15

```jsl


request = New HTTP Request();
request << Curlrc( "true" );

```

#### Curlrc File

**Syntax:** obj &lt;&lt; Curlrc File(&lt;path&gt;)

**Beschreibung:** Konfiguriert den Request so, dass eine andere Datei *.curlcr verwendet wird.

Die Datei *.curlrc (_curlrc unter Windows) enthält Standardoptionen für curl.

**JMP Version hinzugefügt:** 15

```jsl


request = New HTTP Request();
request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );
request << Curlrc( "true" );

```

#### DNS Timeout

**Syntax:** obj &lt;&lt; DNS Timeout(seconds)

**Beschreibung:** Das Standard-Timeout des DNS-Cache für die Verbindung beträgt 60 Sekunden. Dieser Wert kann für DNS-Caching angepasst werden. Setzen Sie den Wert auf 0, um das Puffern komplett zu deaktivieren, oder setzen Sie ihn auf -1, damit die gepufferten Einträge im Speicher bleiben.

**JMP Version hinzugefügt:** 16

```jsl


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

**Syntax:** obj &lt;&lt; Decode64 Char( value )

**Beschreibung:** Zeichenkette mit Base 64-Verschlüsselung entschlüsseln

**JMP Version hinzugefügt:** 16

```jsl


request = New HTTP Request();
data = request << Decode64 Char(
	"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4="
);

```

#### Download

**Syntax:** obj &lt;&lt; Download( path, &lt;"replace" | "rename" | "append"&gt; )

**Beschreibung:** Lädt die HTTP-Antwort in eine Datei. Nützlich beim Herunterladen von Dateien von einem Webservice. Die Option replace überschreibt ggf. vorhandene Dateien. Die Option rename verwendet sequentielle Dateinamen, wenn ein doppelter Name gefunden wird (Datei, Datei(1), Datei(2)...). Die Optionappend hängt die Antwort an die vorhandene Datei an. Bei Verwendung von show progress wird eine abbrechbare Fortschrittsleiste mit dem Prozentsatz der heruntergeladenen Datei angezeigt.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Encode64 Char( value )

**Beschreibung:** Zeichenkette mit Base 64-Verschlüsselung verschlüsseln

**JMP Version hinzugefügt:** 16

```jsl


request = New HTTP Request();
data = request << Encode64 Char( "Man is distinguished, not only by his reason, but ..." );

```

#### File

**Syntax:** obj &lt;&lt; File ( path, &lt;content-type&gt; )

**Beschreibung:** Hiermit wird ein Dateiwert im Request festgelegt. Der Dateiinhalt wird als Textkörper des Dokuments verwendet. Der Header „Content-Type“ des Requests wird, wenn er nicht gefunden wird, basierend auf der Dateierweiterung oder der Anwendung bzw. dem Oktettstrom automatisch auf den entsprechenden Inhalt gesetzt.

**JMP Version hinzugefügt:** 14

```jsl


my_file = Save Text File( "$TEMP/test_file.txt", "Testing, Testing 1, 2, 3" );
request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	File( my_file )
);
data = request << Send;

```

#### Form

**Syntax:** obj &lt;&lt; Form(Fields([[ key=&gt; value ]], &lt;URI Encode(1 | 0 | Safe(...))&gt;), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**Beschreibung:** Legt den Wert für die Formulardaten im Request fest. Das Formular wird als Textkörper des Dokuments verwendet. Formulardaten können Felder und Dateien als Elemente enthalten.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Get Certificate Info

**Beschreibung:** Zeigt Details über das Zertifikat an, z. B. wer es ausgestellt hat, wann es abläuft und andere Informationen, um sicherzustellen, dass das Zertifikat vertrauenswürdig ist.

**JMP Version hinzugefügt:** 19

```jsl


request = New HTTP Request( URL( "https://google.com" ) );
request << Get Certificate Info;

```

#### Get Last URL

**Syntax:** obj &lt;&lt; Get Last URL

**Beschreibung:** Ruft die zuletzt im Request verwendete URL ab. Nützlich, um die weitergeleitete URL zu finden.

**JMP Version hinzugefügt:** 14

```jsl


baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**Syntax:** mimetype = obj &lt;&lt; Get MIME Type

**Beschreibung:** Nachdem Senden (oder Herunterladen) in Zusammenhang mit einem Request verwendet wurde, können Sie hiermit den MIME-Typ der zurückgegebenen Daten abrufen.

**JMP Version hinzugefügt:** 14

```jsl


url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
request = New HTTP Request( URL( url ), Method( "GET" ) );
request << Send;
Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**Syntax:** obj &lt;&lt; Get Last Method

**Beschreibung:** Ruft die zuletzt im Request verwendete HTTP-Methode ab.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Get Response Headers

**Beschreibung:** Die Antwort-Header sind ein assoziatives Array aus Schlüssel/Paar-Werten, die zurückgegeben werden, nachdem ein Request gesendet wurde. Die Definitionen der HTTP-Header finden Sie hier: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Die Schlüssel Date, Expires und Last-Modified werden in JMP-Datumsangaben konvertiert. Die Schlüssel Age und Content-Length werden in Zahlen konvertiert. Alle anderen Werte sind Zeichen.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Get Status

**Beschreibung:** Gibt den Status des Requests nach einem Befehl Send zurück. Der Status ist der HTTP-Status, wenn keine Verbindungsfehler vorliegen. Ansonsten ist der Verbindungsstatus 200-299 erfolgreich.

**JMP Version hinzugefügt:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/1" ), Method( "GET" ) );
data = request << Send;
If( request << Get Status == 200,
	Write( "Success!!!!\!n" || Char( data ) || "\!n" )
);

```

#### Get Status Message

**Syntax:** obj &lt;&lt; Get Status Message

**Beschreibung:** Gibt die Statusmeldung des Requests nach einer Send-Meldung zurück. Die Statusmeldung ist die HTTP-Statusmeldung, wenn keine Verbindungsfehler vorliegen. Ansonsten ist der Verbindungsstatus 200-299 erfolgreich.

**JMP Version hinzugefügt:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**Syntax:** obj &lt;&lt; Get Status Msg

**Beschreibung:** Gibt die Statusmeldung des Requests nach einem Befehl Send zurück. Dies ist ein Alias von GetStatusMessage. Die Statusmeldung ist die HTTP-Statusmeldung, wenn keine Verbindungsfehler vorliegen. Ansonsten ist der Verbindungsstatus 200-299 erfolgreich.

**JMP Version hinzugefügt:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**Syntax:** obj &lt;&lt; Get Warning Headers

**Beschreibung:** Ruft die Warn-Headerwerte (sofern vorhanden) aus dem Request ab.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** request &lt;&lt; GetVersion

**Beschreibung:** Gibt die aktuelle Version vom in JMP verwendeten cURL zurück

**JMP Version hinzugefügt:** 14

```jsl

Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**Syntax:** obj &lt;&lt; Has Client Error

**Beschreibung:** Wahr, wenn der HTTP-Status 400-499 ist.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json = request << Send;
If( request << Has Client Error,
	msg = "Has Client Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Error

**Syntax:** obj &lt;&lt; Has Error

**Beschreibung:** Wahr, wenn der HTTP-Status 400-599 ist.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json = request << Send;
If( request << Has Error,
	msg = "Has Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Information

**Syntax:** obj &lt;&lt; Has Information

**Beschreibung:** Wahr, wenn der HTTP-Status 100-199 ist.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Has Redirection

**Beschreibung:** Wahr, wenn der HTTP-Status 300-399 ist.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Has Server Error

**Beschreibung:** Wahr, wenn der HTTP-Status 500-599 ist.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json = request << Send;
If( request << Has Server Error,
	msg = "Has Server Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Warning

**Syntax:** obj &lt;&lt; Has Warning

**Beschreibung:** Wahr, wenn der HTTP-Status Warn-Header hat

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Headers({header 1}, {header 2} | [[ key=&gt; value, key2=&gt;value2 ]])

**Beschreibung:** Definitionen der HTTP-Header finden Sie hier:

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Die Header dienen dazu, verschiedene Meta-Informationen über den Request anzugeben, damit der Webservice entsprechend antworten kann. Diese Werte sollten als „Hinweise“ für den Webservice verstanden werden, da dieser die Parameter nicht unbedingt berücksichtigt. In der Webservice-API finden Sie weitere Informationen dazu, welche Parameter unterstützt werden. Für den Request wird „Content-Type: application/json“ zur Angabe von JSON-Werten verwendet, „Content-Type: application/octet-stream“ wird zur Angabe von Blobwerten verwendet, „Content-Type: [extension/mime type mapping]“ wird für Dateiwerte verwendet und „Content-Type: application/x-www-form-urlencoded“ oder „Content-Type: multipart/form-data“ ist vom Inhalt des Formulars abhängig. Die Header geben dem Webservice außerdem „Tipps“ dazu, welche Art von Daten zurückgegeben werden sollen. Häufig verwendete Header hierfür sind „Accept: application/json“, „Accept: application/xml“, „Accept: text/csv“ und „Accept: text/html“. Header-Werte können entweder als JSL-Liste mit Zeichendaten oder als assoziatives Array mit Zeichenpaaren Schlüssel/Wert angegeben werden.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Insecure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**Beschreibung:** Standardmäßig ist die Zertifikatsüberprüfung aktiviert. Wenn auf true gesetzt, können Anfragen ohne Zertifikatsüberprüfung abgeschlossen werden. Wenn auf prompt gesetzt, kann der Benutzer das Zertifikat akzeptieren und die Anfrage nach Bedarf abschließen.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Is Success

**Beschreibung:** Wahr, wenn der HTTP-Status 200-299 ist.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Is Successful

**Beschreibung:** Wahr, wenn der HTTP-Status 200-299 ist.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Is Valid

**Beschreibung:** Ist der Request gültig

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request();
data = request << Is Valid();

```

#### Is Verbose

**Syntax:** obj &lt;&lt; Is Verbose

**Beschreibung:** Der Request protokolliert automatisch Statusmeldungen

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request();
data = request << Is Verbose();

```

#### JSON

**Syntax:** obj &lt;&lt; JSON( json data )

**Beschreibung:** Hiermit wird eine JSON-Zeichenkette im Request festgelegt. Die JSON-Zeichenkette wird als Textkörper des Dokuments verwendet. Der Header „Content Type“ des Requests wird automatisch auf „Content-Type: application/json“ gesetzt. Mit der Methode As JSON Expr können Sie ein assoziatives Array in eine JSON-Zeichenkette konvertieren.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" )
);
data = request << Send;

```

#### Max Redirect

**Syntax:** obj &lt;&lt; Max Redirect(...)

**Beschreibung:** Anzahl der Weiterleitungen angeben, denen der Request folgen soll.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Query String( [["username" => "bob", "address" => "12345"]] ),
	MaxRedirect( 2 )
);
data = request << Send;

```

#### Method

**Syntax:** obj &lt;&lt; Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**Beschreibung:** Legt die Methode für den Request fest. Derzeit werden Get, Post, Put, Patch, Delete und Head unterstützt.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Netrc(&lt;true | false&gt;)

**Beschreibung:** Konfiguriert die Anforderung, eine Standarddatei vom Typ *.netrc zu verwenden.

Die Datei *.netrc (_netrc unter Windows) enthält Daten für die Anmeldung an einem entfernten Host über das Netzwerk.

Diese Datei befindet sich im Stammverzeichnis des Benutzers auf dem Rechner, der die Dateiübertragung anstößt.

Die Dateiberechtigungen sollten so eingestellt sein, dass der Lesezugriff von Gruppen und anderen nicht zulässig ist.

Die nachfolgend aufgeführten Token werden erkannt. Sie können durch Leerzeichen, Tabstopp oder Zeilenschaltungszeichen getrennt werden:





machine



	gibt den Namen eines entfernten Rechners an. Der automatische Anmeldevorgang durchsucht die Datei *.netrc nach einem machine-Token, das dem angegebenen entfernten Rechner entspricht. Sobald eine Übereinstimmung gefunden wird, werden die nachfolgenden Token in der Datei *.netrc verarbeitet. Der Vorgang wird beendet, wenn das Dateiende EOF erreicht ist oder ein weiterer machine-Token erkannt wird.



login



	gibt einen Benutzer auf dem entfernten Rechner an. Wenn dieses Token vorhanden ist, stößt der automatische Anmeldevorgang eine Anmeldung mit dem angegebenen Namen an.



password



	gibt ein Kennwort an. Wenn dieses Token vorhanden ist, liefert der automatische Anmeldevorgang die angegebene Zeichenkette, wenn der entfernte Server im Rahmen des Anmeldevorgangs ein Kennwort verlangt.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request();
request << Netrc( "true" );

```

#### Netrc File

**Syntax:** obj &lt;&lt; Netrc File(&lt;path&gt;)

**Beschreibung:** Konfiguriert die Anforderung, eine alternative Datei vom Typ *.netrc zu verwenden.

Die Datei *.netrc (_netrc unter Windows) enthält Daten für die Anmeldung an einem entfernten Host über das Netzwerk.

Diese Datei befindet sich im Stammverzeichnis des Benutzers auf dem Rechner, der die Dateiübertragung anstößt.

Die Dateiberechtigungen sollten so eingestellt sein, dass der Lesezugriff der Gruppe und von anderen nicht zulässig ist.

Die nachfolgend aufgeführten Token werden erkannt. Sie können durch Leerzeichen, Tabstopp oder Zeilenschaltungszeichen getrennt werden:



machine



	gibt den Namen eines entfernten Rechners an. Der automatische Anmeldevorgang durchsucht die Datei *.netrc nach einem machine-Token, das dem angegebenen entfernten Rechner entspricht. Sobald eine Übereinstimmung gefunden wird, werden die nachfolgenden Token in der Datei *.netrc verarbeitet. Der Vorgang wird beendet, wenn das Dateiende EOF erreicht ist oder ein weiterer machine-Token erkannt wird.



login



	gibt einen Benutzer auf dem entfernten Rechner an. Wenn dieses Token vorhanden ist, stößt der automatische Anmeldevorgang eine Anmeldung mit dem angegebenen Namen an.



password



	gibt ein Kennwort an. Wenn dieses Token vorhanden ist, liefert der automatische Anmeldevorgang die angegebene Zeichenkette, wenn der entfernte Server im Rahmen des Anmeldevorgangs ein Kennwort verlangt.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request();
request << Netrc File( "$DESKTOP\..\my_netrc.txt" );
request << Netrc( "true" );

```

#### Password

**Syntax:** obj &lt;&lt; Password(passwd)

**Beschreibung:** Legt das Kennwort für den Request fest, das für die grundlegende Authentifizierung verwendet wird. Dieser Wert wird mit dem Request-Benutzernamen verwendet, wo sowohl Benutzername als auch Kennwort mit einem &apos;:&apos; (Name:Kennwort) verkettet sind und an den Webservice übergeben werden. Zusätzlich kann hier ein verschlüsselter (z. B. Kerberos V5-codierter) Benutzername/Kennwort-Wert verwendet werden.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" ),
	Password( "cm9zczpBYmMxMjM=" ),

);
data = request << Send;

```

#### Proxy Server

**Syntax:** obj &lt;&lt; Proxy Server(proxy_url)

**Beschreibung:** Die Proxy-URL kann genau so angegeben werden wie die Proxy-Umgebungsvariablen, einschließlich des Protokollpräfixes (http://) und dem eingebetteten Benutzer + Kennwort.

**JMP Version hinzugefügt:** 15

```jsl


request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );

```

#### Proxy User

**Syntax:** obj &lt;&lt; Proxy User(username:password)

**Beschreibung:** Benutzer und Kennwort, die möglicherweise in der Proxy-Zeichenkette enthalten sind, sind URL-decodiert. Dadurch können Sie Sonderzeichen eingeben wie @, indem Sie %40 verwenden oder einen Doppelpunkt mit %3a übergeben.

**JMP Version hinzugefügt:** 15

```jsl


request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );
request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**Syntax:** obj &lt;&lt; Query String([[ key=&gt; value ]], &lt;URI Encode(1|0|Safe(...))&gt;)

**Beschreibung:** Legt den Wert für die Abfragezeichenkette im Request fest. Hierbei handelt es sich um Zeichendaten in Form eines assoziativen Arrays aus Schlüssel/Wert-Paaren. Die Schlüssel/Wert-Paare sind URL-codiert (mit Escape-Zeichen versehen), wenn sie an den Webservice gesendet werden.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Query String( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Reset

**Syntax:** obj &lt;&lt; Reset(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Beschreibung:** Setzt den Request auf neue Wert zurück.

**JMP Version hinzugefügt:** 14

```jsl


request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json1 = request << Send;
request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json2 = request << Send;

```

#### Run

**Syntax:** obj &lt;&lt; Run

**Beschreibung:** Führt den Request aus. Dies ist ein Alias von Send. Der Rückgabewert von der JSL-Funktion Run will be either character data or binary BLOB. You can check the return with the Is String.

**JMP Version hinzugefügt:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### SSL Version

**Syntax:** obj &lt;&lt; SSL Version (version)

**Beschreibung:** "DEFAULT"  Use the default negotiated version (recommended).

\\

         "1+"     Force TLS version 1.0 or higher, depending on what the server and client both support.

\\

         1.0        Force TLS 1.0

\\

         1.1        Force TLS 1.1

\\

         1.2        Force TLS 1.2

\\

         1.3        Force TLS 1.3

\\

         2.0        Force TLS 2.0 (not recommended)

\\

         3.0        Force TLS 3.0 (not recommended)

\\

         "MAX"    Automatically choose the highest supported version

**JMP Version hinzugefügt:** 19

```jsl


request = New HTTP Request();
request << SSL Version( "1+" );

```

#### Secure

**Syntax:** obj &lt;&lt; Secure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**Beschreibung:** Standardmäßig ist die Zertifikatsüberprüfung aktiviert. Wenn auf false gesetzt, können Anfragen ohne Zertifikatsüberprüfung abgeschlossen werden. Wenn auf prompt gesetzt, kann der Benutzer das Zertifikat akzeptieren und die Anfrage nach Bedarf abschließen.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**Beschreibung:** Sendet den Request. Beim Rückgabewert von Send handelt es sich entweder um Zeichendaten oder einen binären BLOB. Sie können die Rückgabe mit der JSL-Funktion Is String prüfen. Bei Verwendung von show progress download wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der heruntergeladenen Daten angezeigt. Bei Verwendung von show progress upload wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der hochgeladenen Daten angezeigt. Bei Verwendung von show progress both wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der hoch- und heruntergeladenen Daten angezeigt. Bei Verwendung von show progress wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der hoch- oder heruntergeladenen Daten (oder beiden) angezeigt. Beim Veröffentlichen von Formularen zeigt show progress den Upload- und Download-Fortschritt an. Beim Veröffentlichen von Dateien zeigt show progress den Upload-Fortschritt an. Beim Abrufen von Daten zeigt show progress den Download-Fortschritt an.

**JMP Version hinzugefügt:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### Text

**Syntax:** obj &lt;&lt; Text( text data, &lt;content-type&gt;)

**Beschreibung:** Hiermit wird ein Textzeichenkettenwert im Request festgelegt. Die Textzeichenkette wird als Textkörper des Dokuments verwendet. Der Header „Content Type“ des Requests wird automatisch auf „Content-Type: text/plain“ gesetzt.

**JMP Version hinzugefügt:** 15

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	Text( "Hello World" )
);
data = request << Send;

```

#### Timeout

**Syntax:** obj &lt;&lt; Timeout(seconds)

**Beschreibung:** Das Standard-Timeout für die Request-Aktion beträgt 60 Sekunden. Dieser Wert kann angepasst werden, um zeitintensivere Webservice-Aktionen zu berücksichtigen.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; URL(path)

**Beschreibung:** Wenn der Request erstellt wird (oder mit Rücksetzen verwendet wird), kann dies als Parameter verwendet werden. obj = HTTP Request(URL("http://google.com"));

**JMP Version hinzugefügt:** 14

```jsl


fields = Associative Array();
fields["text"] = "statistics";
s = New HTTP Request(
	URL( "http://text-processing.com/api/sentiment/" ),
	Method( "POST" ),
	Form( Fields( fields ) )
) << Send;

```

#### Use Cookies

**Syntax:** obj &lt;&lt; Use Cookies(&lt;true | false&gt;))

**Beschreibung:** Konfiguriert den Request so, dass Cookies für die Sitzung verwendet werden. Die Voreinstellung ist wahr.

**JMP Version hinzugefügt:** 17

```jsl


request = New HTTP Request();
data = request << Use Cookies( "false" );

```

#### UserPwd

**Syntax:** obj &lt;&lt; UserPwd(clark kent:superman)

**Beschreibung:** Legt den Benutzer und das Kennwortfeld im Request für die Authentifizierung fest. Hat das Format: [Benutzername]:[Kennwort]. Die Zeichenketten für Benutzer und Kennwort sind nicht URL-entschlüsselt, deshalb gibt es keine Möglichkeit, mit dieser Option einen Benutzernamen mit einem Doppelpunkt einzugeben.

**JMP Version hinzugefügt:** 18

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" ),
	UserPwd( "clark kent:superman" ),

);
data = request << Send;

```

#### Username

**Syntax:** obj &lt;&lt; Username(name)

**Beschreibung:** Legt den Benutzernamen im Request fest, der für die grundlegende Authentifizierung verwendet wird. Dieser Wert wird in Verbindung mit dem Request-Kennwort verwendet, wo sowohl Benutzername als auch Kennwort mit einem &apos;:&apos; (Name:Kennwort) verkettet sind und an den Webservice übergeben werden.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Verbose(&lt;"true"&gt; | &lt;"false"&gt;)

**Beschreibung:** Schreibt umfangreiche Fehlermeldungen in das Protokoll. Die Voreinstellung ist wahr.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Verify SSL(&lt;"true"&gt; | &lt;"false"&gt;)

**Beschreibung:** Die Zertifikatsverifizierung ist eingeschaltet. Wenn false festgelegt ist, sind Abschlussanforderungen ohne Zertifikatsverifizierung zulässig.

**JMP Version hinzugefügt:** 16

```jsl


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

**Syntax:** obj &lt;&lt; XML( xml data )

**Beschreibung:** Hiermit wird ein XML-Zeichenkettenwert im Request festgelegt. Die XML-Zeichenkette wird als Textkörper des Dokuments verwendet. Der Header „Content Type“ des Requests wird automatisch auf „Content-Type: application/xml“ gesetzt.

**JMP Version hinzugefügt:** 15

```jsl


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

### Elementmeldungen

#### Add

**Syntax:** obj &lt;&lt; Add(request, &lt;label&gt;)

**Beschreibung:** Einen HTTP-Request zu MultiHTTPRequest hinzufügen. Optional kann eine Beschriftung verwendet werden. Das ist nützlich, wenn mehrere Ladevorgänge parallel durchgeführt werden. Alle HTTP-Requests werden vor der Nutzung validiert.

**JMP Version hinzugefügt:** 17

```jsl


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

**Syntax:** obj &lt;&lt; Download(&lt;"show progress"&gt;, &lt;"detailed"&gt;)

**Beschreibung:** Lädt die HTTP-Antworten parallel in Dateien. Nützlich beim Herunterladen mehrerer Dateien gleichzeitig von einem oder mehreren Webservices. Bei Verwendung von show progress wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der heruntergeladenen Dateien angezeigt. Bei Verwendung von details wird der Fortschritt einzelner Ladevorgänge angezeigt.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl


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

**Beispiel 2**

```jsl


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

**Syntax:** obj &lt;&lt; Get Requests()

**JMP Version hinzugefügt:** 17

```jsl


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

**Syntax:** obj &lt;&lt; Has Error

**Beschreibung:** Gibt „wahr“ zurück, wenn der Multi-Request einen Fehler hat. Der Multi-Request hat einen Fehler, wenn einer seiner HTTP-Requests fehlerhaft ist.

**JMP Version hinzugefügt:** 14

```jsl


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

**Syntax:** obj &lt;&lt; Is Success

**Beschreibung:** Gibt „wahr“ zurück, wenn der Multi-Request erfolgreich ist. Der Multi-Request ist erfolgreich, wenn alle seine HTTP-Requests erfolgreich sind.

**JMP Version hinzugefügt:** 14

```jsl


requests = New Multi HTTP Request();
http_request_1 = New HTTP Request( Method( "GET" ), URL( "https://google.com" ) );
http_request_2 = New HTTP Request( Method( "GET" ), URL( "https://jmp.com" ) );

requests << Add( http_request_1 );

requests << Add( http_request_2 );
data = requests << Download( "show progress", "detailed" );
Show( requests << Is Successful );

```

#### Is Successful

**Syntax:** obj &lt;&lt; Is Successful

**Beschreibung:** Gibt „wahr“ zurück, wenn der Multi-Request erfolgreich ist. Der Multi-Request ist erfolgreich, wenn alle seine HTTP-Requests erfolgreich sind.

**JMP Version hinzugefügt:** 14

```jsl


requests = New Multi HTTP Request();
http_request_1 = New HTTP Request( Method( "GET" ), URL( "https://google.com" ) );
http_request_2 = New HTTP Request( Method( "GET" ), URL( "https://jmp.com" ) );

requests << Add( http_request_1 );

requests << Add( http_request_2 );
data = requests << Download( "show progress", "detailed" );
Show( requests << Is Successful );

```

#### Is Valid

**Syntax:** obj &lt;&lt; Is Valid

**Beschreibung:** Ist der Multi-Request gültig. Der Multi-Request ist gültig, wenn alle seine HTTP-Requests gültig sind.

**JMP Version hinzugefügt:** 17

```jsl


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

**Syntax:** obj &lt;&lt; Reset()

**Beschreibung:** Setzt Multi-Requests zurück. Dadurch wird jeder bereits hinzugefügte HTTP-Request zurückgesetzt.

**JMP Version hinzugefügt:** 17

```jsl


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

**Syntax:** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**Beschreibung:** Beim Rückgabewert von Send handelt es sich entweder um Zeichendaten oder einen binären BLOB. Sie können die Rückgabe mit der JSL-Funktion Is String prüfen. Bei Verwendung von show progress download wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der heruntergeladenen Daten angezeigt. Bei Verwendung von show progress upload wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der hochgeladenen Daten angezeigt. Bei Verwendung von show progress both wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der hoch- und heruntergeladenen Daten angezeigt. Bei Verwendung von show progress wird eine abbrechbare Fortschrittsleiste mit dem Fortschritt der hoch- oder heruntergeladenen Daten (oder beiden) angezeigt. Beim Veröffentlichen von Formularen zeigt show progress den Upload- und Download-Fortschritt an. Beim Veröffentlichen von Dateien zeigt show progress den Upload-Fortschritt an. Beim Abrufen von Daten zeigt show progress den Download-Fortschritt an.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl


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

**Beispiel 2**

```jsl


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

### Elementmeldungen

#### Authorization Fields

**Syntax:** oauth2 &lt;&lt; Authorization Fields(...)

**Beschreibung:** Autorisierungsfelder ist ein assoziatives Array aus Paaren aus Schlüssel und Wert, das in der Zeichenkette für die Abfrage für die OAuth2-Autorisierungs-URL verwendet werden soll.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Authorization URL(...)

**Beschreibung:** Legt die OAuth2-Autorisierungs-URL fest.

**JMP Version hinzugefügt:** 15

```jsl


oauth2 = New OAuth2();
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**Syntax:** oauth2 &lt;&lt; Browser Type("Default" | "Embedded" | "External")

**Beschreibung:** Bei der Standardoption wird der eingebettete Browser für die OAuth2-Authentifizierung verwendet, sofern die Authentifizierung nicht über Google erfolgt. Bei der Option „Eingebettet“ wird der eingebettete Browser für die OAuth2-Authentifizierung verwendet, sofern die Authentifizierung nicht über Google erfolgt (derzeit identisch mit der Standardoption). Bei der Option „Extern“ wird der externe Browser für die OAuth2-Authentifizierung verwendet und der resultierende Code bzw. die URL wird in den Textbereich kopiert, um die Authentifizierung durchzuführen.

**JMP Version hinzugefügt:** 17

```jsl


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

**Syntax:** oauth2 &lt;&lt; Client Id(...)

**Beschreibung:** Die OAuth2-Kunden-ID ist eine öffentliche Kennung, die bei der Webservice-Erstellung verwendet wurde.

**JMP Version hinzugefügt:** 15

```jsl


/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
oauth2 = New OAuth2();
oauth2 << Client Id( client_id );

```

#### Client Secret

**Syntax:** oauth2 &lt;&lt; Client Secret(...)

**Beschreibung:** Legt das OAuth2-Kundengeheimnis fest, das bei der Webservice-Erstellung erstellt wurde.

**JMP Version hinzugefügt:** 15

```jsl


/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
oauth2 = New OAuth2();
oauth2 << Client Secret( client_secret );

```

#### Code Verifier

**Syntax:** oauth2 &lt;&lt; Code Verifier(&lt;"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"&gt;

**Beschreibung:** Der Codeverifikator ist eine kryptografisch zufällige Zeichenkette, die der Client verwendet, um sich beim Austausch eines Autorisierungscodes gegen ein Zugangstoken zu identifizieren. Er hat eine Mindestlänge von 43 Zeichen und eine Höchstlänge von 128 Zeichen.

**JMP Version hinzugefügt:** 19

```jsl


oauth2 = New OAuth2();
oauth2 << Code Verifier( "cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" );

```

#### Get Access Token

**Syntax:** oauth2 &lt;&lt; Get Access Token()

**Beschreibung:** Ruft den aktuellen OAuth2-Zugriffstoken ab. Dadurch wird bei Bedarf die Kommunikation mit dem Autorisierungsserver initiiert.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Get Authentication Response Error()

**Beschreibung:** Ruft den OAuth2-Antwortfehler ab.

**JMP Version hinzugefügt:** 18

```jsl


oauth2 = New OAuth2();
error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**Syntax:** obj &lt;&lt; Get Auth Response Fields

**JMP Version hinzugefügt:** 15

#### Get Authentication Response Error

**Syntax:** obj &lt;&lt; Get Authentication Response Error

**JMP Version hinzugefügt:** 18

#### Get Authorization Header

**Syntax:** oauth2 &lt;&lt; Get Authorization Header

**Beschreibung:** Ruft den Header in folgender Form ab:

Autorisierung: Inhaber [OAuth2-Token]

, dabei ist [OAuth2-Token] der von einem Autorisierungsserver abgerufene Inhaber-Token.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl


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

**Beispiel 2**

```jsl


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

**Syntax:** oauth2 &lt;&lt; Get Authorization Response Fields()

**Beschreibung:** Ruft die aktuellen OAuth2-Antwortwerte vom Autorisierungsserver ab.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Get Code()

**Beschreibung:** Ruft den aktuellen OAuth2-Code ab. Dadurch wird bei Bedarf die Kommunikation mit dem Autorisierungsserver initiiert.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Get Grant Type()

**Beschreibung:** Ruft den aktuellen OAuth2-Berechtigungstyp ab.

**JMP Version hinzugefügt:** 15

```jsl


oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
oauth2 << Grant Type( grant_types[1] );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Get Grant Types

**Syntax:** oauth2 &lt;&lt; Get Grant Types

**Beschreibung:** Ruft die von JMP unterstützten OAuth2-Berechtigungstypen ab.

**JMP Version hinzugefügt:** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
Show( grant_types );

```

#### Get ID Token

**Syntax:** oauth2 &lt;&lt; Get ID Token()

**Beschreibung:** Ruft den aktuellen OAuth2-ID-Token ab. Dadurch wird bei Bedarf die Kommunikation mit dem Autorisierungsserver initiiert.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Get Refresh Token()

**Beschreibung:** Ruft den aktuellen OAuth2-Aktualisierungstoken ab. Dadurch wird bei Bedarf die Kommunikation mit dem Autorisierungsserver initiiert.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Get Scope()

**Beschreibung:** Ruft den aktuellen OAuth2-Gültigkeitsbereich ab.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Get Window Title

**Beschreibung:** Ruft den OAuth2-Fenstertitel ab.

**JMP Version hinzugefügt:** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );
title = oauth2 << Get Window Title;

```

#### Grant Type

**Syntax:** oauth2 &lt;&lt; Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**Beschreibung:** Der geforderte Berechtigungstyp muss einer der von JMP und vom OAuth2-Autorisierungsanbieter unterstützten Berechtigungstypen sein.

**JMP Version hinzugefügt:** 15

```jsl


oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Has Auth Response  Error

**Syntax:** obj &lt;&lt; Has Auth Response Error

**JMP Version hinzugefügt:** 18

#### Has Authentication Response  Error

**Syntax:** oauth2 &lt;&lt; Has Authentication Response Error()

**Beschreibung:** Prüft auf einen Antwortfehler der OAuth2-Authentifizierung.

**JMP Version hinzugefügt:** 18

```jsl


oauth2 = New OAuth2();
If( oauth2 << Has Authentication Response Error(),
	Show( oauth2 << Get Authentication Response Error )
);

```

#### Is Expired

**Syntax:** oauth2 &lt;&lt; Is Expired()

**Beschreibung:** Gibt zurück, ob der aktuelle OAuth2-Zugriffstoken abgelaufen ist.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Login Hint(hint)

**Beschreibung:** Legt den login_hint-Wert fest. login_hint ist ein OPTIONALER Parameter in der Authentifizierungsanforderung als „Tipp“ für den Autorisierungsserver im Hinblick auf die Anmeldekennung, mit der sich der Endbenutzer möglicherweise anmeldet (falls nötig).

**JMP Version hinzugefügt:** 17

```jsl


oauth2 = New OAuth2();
oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**Syntax:** oauth2 &lt;&lt; Password(...)

**Beschreibung:** Legt das OAuth2-Kennwort für den Berechtigungstyp „Kennwort“ fest.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

```

#### Redirect URL

**Syntax:** oauth2 &lt;&lt; Redirect URL(...)

**Beschreibung:** Legt die OAuth2-Weiterleitungs-URL fest, die bei der Webservice-Erstellung verwendet wurde.

**JMP Version hinzugefügt:** 15

```jsl


redirect_url = "http://localhost/myapp/";
oauth2 = New OAuth2();
oauth2 << Redirect URL( redirect_url );

```

#### Scope

**Syntax:** oauth2 &lt;&lt; Scope(...)

**Beschreibung:** Legt den OAuth2-Gültigkeitsbereich fest, eine Möglichkeit, den Zugriff einer Anwendung auf ein Konto zu beschränken.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Set Window Title(title)

**Beschreibung:** Legt den OAuth2-Fenstertitel fest.

**JMP Version hinzugefügt:** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**Syntax:** obj &lt;&lt; Token Fields

**Beschreibung:** Ein assoziatives Array aus Paaren aus Schlüssel und Wert, das in der Zeichenkette für die Abfrage für die OAuth2-Token-URL verwendet werden soll.

**JMP Version hinzugefügt:** 15

```jsl


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

**Syntax:** oauth2 &lt;&lt; Token URL(...)

**Beschreibung:** Legt die OAuth2-Token-URL fest.

**JMP Version hinzugefügt:** 15

```jsl


oauth2 = New OAuth2();
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**Syntax:** oauth2 &lt;&lt; Use Default Window Title(1 | 0)

**Beschreibung:** Ruft den OAuth2-Fenstertitel ab.

**JMP Version hinzugefügt:** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Use Default Window Title( 1 );
title = oauth2 << Get Window Title;

```

#### Username

**Syntax:** oauth2 &lt;&lt; Username(...)

**Beschreibung:** Legt den OAuth2-Benutzernamen für den Berechtigungstyp „Kennwort“ fest.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

```

