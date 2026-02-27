# HTTP



## HTTPRequest

### Messaggi degli elementi

#### Authentication Method

**Sintassi:** obj &lt;&lt; Authentication Method(method)

**Descrizione:** Applica un metodo di autenticazione. I valori validi sono:



	NONE - Nessuna autenticazione HTTP



	BASIC - Autenticazione HTTP Basic



	KERBEROS - Autenticazione HTTP Kerberos



	NEGOTIATE - Autenticazione HTTP Negotiate (SPNEGO)



	NTLM – Autenticazione HTTP NTLM



	ANY - Tutti i tipi impostati (di default)



	ANYSAFE - Tutti i tipi tranne Basic



	DEFAULT - L&apos;autenticazione di default



Di default, JMP e il servizio Web negoziano il metodo di autenticazione più sicuro.

**JMP Versione aggiunta:** 17

```jsl


request = New HTTP Request();
request << Authentication Method( "KERBEROS" );

```

#### Blob

**Sintassi:** obj &lt;&lt; Blob( binary data, &lt;content-type&gt; )

**Descrizione:** Imposta una valore blob nella richiesta. Il valore blob sarà utilizzato come corpo del documento. L&apos;intestazione del tipo di contenuto della richiesta sarà automaticamente impostata su "Tipo-di-contenuto: applicazione/flusso ottetto".

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Bypass Proxy(localhost)

**Descrizione:** Elenco di host separati da virgola che non utilizzano un proxy, se ne è specificato uno. L&apos;unico carattere jolly è un singolo carattere *, che corrisponde a tutti gli host e disabilita efficacemente il proxy. Ogni nome in questo elenco corrisponde a un dominio che contiene il nome host o al nome host stesso. Per esempio, local.com corrisponde a local.com, local.com:80 e www.local.com, ma non a www.notlocal.com.

**JMP Versione aggiunta:** 15

```jsl


request = New HTTP Request();
request << Proxy Server( "http://my_proxy.com" );
request << Proxy User( "clark%20kent:superman" );
request << Bypass Proxy( "localhost" );

```

#### Certificates

**Sintassi:** obj &lt;&lt; Certificates(certificate file)

**Descrizione:** Usa il file del certificato specificato per la verifica. Il file potrebbe contenere più certificati CA. Il certificato o i certificati devono essere in formato PEM.

**JMP Versione aggiunta:** 16

```jsl


request = New HTTP Request();
request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**Sintassi:** obj &lt;&lt; Cookie([[ key=&gt; value ]]

**Descrizione:** Imposta un cookie nella richiesta.

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Cookie( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Cookie File

**Sintassi:** obj &lt;&lt; Cookie File(&lt;path&gt;, &lt;"replace" | "rename" | "append"&gt;)

**Descrizione:** Specifica un file di cookie alternativo.

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request();
data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**Sintassi:** obj &lt;&lt; Curlrc(&lt;true | false&gt;)

**Descrizione:** Configura la richiesta in modo da utilizzare un file .curl standard.

Il file .curlrc (_curlrc su Windows) contiene opzioni predefinite usate per curl.

**JMP Versione aggiunta:** 15

```jsl


request = New HTTP Request();
request << Curlrc( "true" );

```

#### Curlrc File

**Sintassi:** obj &lt;&lt; Curlrc File(&lt;path&gt;)

**Descrizione:** Configura la richiesta in modo da utilizzare un file .curl alternativo.

Il file .curlrc (_curlrc su Windows) contiene opzioni predefinite usate per curl.

**JMP Versione aggiunta:** 15

```jsl


request = New HTTP Request();
request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );
request << Curlrc( "true" );

```

#### DNS Timeout

**Sintassi:** obj &lt;&lt; DNS Timeout(seconds)

**Descrizione:** Il timeout predefinito della cache DNS per la connessione è di 60 secondi. Questo valore può essere modificato per consentire il caching del DNS. Impostare a 0 per disabilitare completamente la cache o impostare a -1 per far sì che le voci della cache rimangano in memoria.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj &lt;&lt; Decode64 Char( value )

**Descrizione:** Decodifica la stringa utilizzando la codifica Base 64

**JMP Versione aggiunta:** 16

```jsl


request = New HTTP Request();
data = request << Decode64 Char(
	"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4="
);

```

#### Download

**Sintassi:** obj &lt;&lt; Download( path, &lt;"replace" | "rename" | "append"&gt; )

**Descrizione:** Scarica la risposta HTTP in un file. Utile per scaricare file da un servizio Web. L&apos;opzione replace sovrascrive qualsiasi file esistente. L&apos;opzione rename usa nomi di file sequenziali quando viene trovato un nome duplicato (file, file(1), file(2)...). L&apos;opzione append aggiunge al file esistente. Usando show progress viene visualizzata una barra di avanzamento annullabile con la percentuale del file scaricato.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Encode64 Char( value )

**Descrizione:** Codifica la stringa utilizzando la codifica Base 64

**JMP Versione aggiunta:** 16

```jsl


request = New HTTP Request();
data = request << Encode64 Char( "Man is distinguished, not only by his reason, but ..." );

```

#### File

**Sintassi:** obj &lt;&lt; File ( path, &lt;content-type&gt; )

**Descrizione:** Imposta un valore File nella richiesta. Il contenuto del file sarà utilizzato come corpo del documento. L&apos;intestazione del tipo di contenuto della richiesta sarà automaticamente impostata sul contenuto appropriato in base all&apos;estensione del file o all’applicazione/flusso-ottetto se non presente.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Form(Fields([[ key=&gt; value ]], &lt;URI Encode(1 | 0 | Safe(...))&gt;), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**Descrizione:** Imposta il valore dei dati del modulo nella richiesta. Il modulo sarà utilizzato come corpo del documento. I dati del modulo possono avere campi ed elementi file.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Get Certificate Info

**Descrizione:** Mostra i dettagli del certificato, come ad esempio chi l&apos;ha rilasciato, quando scade e altre informazioni per garantire l&apos;affidabilità del certificato.

**JMP Versione aggiunta:** 19

```jsl


request = New HTTP Request( URL( "https://google.com" ) );
request << Get Certificate Info;

```

#### Get Last URL

**Sintassi:** obj &lt;&lt; Get Last URL

**Descrizione:** Ottiene l’ultimo URL usato nella richiesta. Utile per trovare l’URL reindirizzato.

**JMP Versione aggiunta:** 14

```jsl


baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**Sintassi:** mimetype = obj &lt;&lt; Get MIME Type

**Descrizione:** Dopo l&apos;invio (o il download) è utilizzato con una richiesta. Può essere usato per recuperare il tipo MIME dei dati restituiti.

**JMP Versione aggiunta:** 14

```jsl


url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
request = New HTTP Request( URL( url ), Method( "GET" ) );
request << Send;
Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**Sintassi:** obj &lt;&lt; Get Last Method

**Descrizione:** Ottiene l&apos;ultimo metodo HTTP utilizzato nella richiesta.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Get Response Headers

**Descrizione:** Le intestazioni della risposta sono un array associativo di coppie chiave/valore restituito dopo l’invio di una richiesta. Le definizioni delle intestazioni HTTP sono disponibili qui: https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Le chiavi Date, Expires e Last-Modified saranno convertite in date JMP. Le chiavi Age e Content-Length saranno convertite in numeri. Tutti gli altri valori saranno alfanumerici.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Get Status

**Descrizione:** Restituisce lo stato della richiesta dopo un Send. Lo stato è lo stato HTTP se non sono presenti errori di connessione. In caso contrario lo stato di connessione. 200-299 ha esito positivo.

**JMP Versione aggiunta:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/1" ), Method( "GET" ) );
data = request << Send;
If( request << Get Status == 200,
	Write( "Success!!!!\!n" || Char( data ) || "\!n" )
);

```

#### Get Status Message

**Sintassi:** obj &lt;&lt; Get Status Message

**Descrizione:** Restituisce il messaggio di stato della richiesta dopo Send. Il messaggio di stato è il messaggio di stato HTTP se non sono presenti errori di connessione. In caso contrario il messaggio di stato della connessione. Uno stato di 200-299 ha esito positivo.

**JMP Versione aggiunta:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**Sintassi:** obj &lt;&lt; Get Status Msg

**Descrizione:** Restituisce il messaggio di stato della richiesta dopo Send. È un alias di GetStatusMessage. Il messaggio di stato è il messaggio di stato HTTP se non sono presenti errori di connessione. In caso contrario il messaggio di stato della connessione. Uno stato di 200-299 ha esito positivo.

**JMP Versione aggiunta:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**Sintassi:** obj &lt;&lt; Get Warning Headers

**Descrizione:** Ottiene i valori di intestazione di avvertimento (se presenti) dalla richiesta.

**JMP Versione aggiunta:** 14

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

**Sintassi:** request &lt;&lt; GetVersion

**Descrizione:** Restituisce la versione corrente del cURL utilizzata in JMP

**JMP Versione aggiunta:** 14

```jsl

Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**Sintassi:** obj &lt;&lt; Has Client Error

**Descrizione:** Vero se lo stato HTTP è 400-499.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Has Error

**Descrizione:** Vero se lo stato HTTP è 400-599.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Has Information

**Descrizione:** Vero se lo stato HTTP è 100-199.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Has Redirection

**Descrizione:** Vero se lo stato HTTP è 300-399.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Has Server Error

**Descrizione:** Vero se lo stato HTTP è 500-599.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Has Warning

**Descrizione:** Vero se lo stato HTTP ha intestazioni di avvertimento

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Headers({header 1}, {header 2} | [[ key=&gt; value, key2=&gt;value2 ]])

**Descrizione:** Le definizioni delle intestazioni HTTP sono disponibili qui:

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Sono utilizzate per specificare varie meta informazioni sulla richiesta di facilitare adeguatamente la risposta del servizio Web. Questi valori devono essere considerati come "suggerimenti" per il servizio Web in quanto potrebbe scegliere di non rispettare i parametri. Consultare l&apos;API del servizio Web per verificare il supporto. Per la richiesta, "Tipo-di-contenuto: applicazione/json" è utilizzato quando si specificano valori JSON, "Tipo-di-contenuto: applicazione/flusso ottetto" è utilizzato quando si specificano valori blob, "Tipo-di-contenuto: [estensione/mappatura tipo mime]" è utilizzato con valori file, e, "Tipo-di-contenuto: applicazione/x-www-modulo-urlintegrato" o "Tipo-di-contenuto: multiparte/modulo-dati" in base al contenuto del modulo. Le intestazioni "suggeriscono" inoltre al servizio Web il tipo di dati che deve essere restituito. Intestazioni comuni sono "Accetta: applicazione/json", "Accetta: applicazione/xml", "Accetta: testo/csv" e "Accetta: testo/html". I valori delle intestazioni possono essere specificati come elenco JSL di dati alfanumerici o come array associativo di coppie chiave/valore alfanumerico.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Insecure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**Descrizione:** Di default, la validazione del certificato è attiva. Se viene impostata su true, consente di completare le richieste senza la validazione del certificato. Se viene impostata su prompt, questo permetterà all&apos;utente di accettare il certificato e di completare la richiesta secondo necessità.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Is Success

**Descrizione:** Vero se lo stato HTTP è 200-299.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Is Successful

**Descrizione:** Vero se lo stato HTTP è 200-299.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Is Valid

**Descrizione:** È valida la richiesta

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request();
data = request << Is Valid();

```

#### Is Verbose

**Sintassi:** obj &lt;&lt; Is Verbose

**Descrizione:** È la richiesta che automaticamente registra i messaggi di stato

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request();
data = request << Is Verbose();

```

#### JSON

**Sintassi:** obj &lt;&lt; JSON( json data )

**Descrizione:** Questa operazione imposta un valore di stringa JSON nella richiesta. La stringa JSON sarà utilizzata come corpo del documento. L&apos;intestazione del tipo di contenuto della richiesta sarà automaticamente impostata su "Tipo-di-contenuto: applicazione/json". È possibile usare il metodo Espr come JSON per convertire un array associativo in una stringa JSON.

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" )
);
data = request << Send;

```

#### Max Redirect

**Sintassi:** obj &lt;&lt; Max Redirect(...)

**Descrizione:** Specifica il numero di reindirizzamenti che saranno seguiti dalla richiesta.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**Descrizione:** Imposta il metodo della richiesta. Attualmente sono supportati Get, Post, Put, Patch, Delete e Head.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Netrc(&lt;true | false&gt;)

**Descrizione:** Configura la richiesta di utilizzo di un file .netrc standard.

Il file .netrc (_netrc su Windows) contiene i dati per l&apos;accesso a un host remoto sulla rete.

Questo file risiede nella directory principale dell&apos;utente sul computer che avvia il trasferimento di file.

Le autorizzazioni dovrebbero essere impostate in modo da non consentire l&apos;accesso in lettura del gruppo e altri.

I seguenti token sono riconosciuti. Possono essere separati dai caratteri spazio, tabulazione o nuova riga:





computer



	identifica il nome di un computer remoto. Il processo di accesso automatico ricerca il file .netrc per il token di un computer che corrisponde al computer remoto specificato. Quando viene trovata una corrispondenza vengono elaborati i successivi token .netrc, operazione interrotta al raggiungimento di fine campo o quando si incontra il token di un altro computer.



accesso



	identifica un utente sul computer remoto. Se è presente questo token il processo di accesso automatico avvierà un accesso utilizzando il nome specificato.



password



	fornisce una password. Se è presente questo token, il processo di accesso automatico fornirà la stringa specificata se il server remoto richiede una password come parte del processo di accesso.

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request();
request << Netrc( "true" );

```

#### Netrc File

**Sintassi:** obj &lt;&lt; Netrc File(&lt;path&gt;)

**Descrizione:** Configura la richiesta di utilizzo di un file .netrc alternativo.

Il file .netrc (_netrc su Windows) contiene i dati per l&apos;accesso a un host remoto sulla rete.

Questo file risiede nella directory principale dell&apos;utente sul computer che avvia il trasferimento di file.

Le autorizzazioni dovrebbero essere impostate in modo da non consentire l&apos;accesso in lettura del gruppo e altri.

I seguenti token sono riconosciuti. Possono essere separati dai caratteri spazio, tabulazione o nuova riga:



computer



	identifica il nome di un computer remoto. Il processo di accesso automatico ricerca il file .netrc per il token di un computer che corrisponde al computer remoto specificato. Quando viene trovata una corrispondenza vengono elaborati i successivi token .netrc, operazione interrotta al raggiungimento di fine campo o quando si incontra il token di un altro computer.



accesso



	identifica un utente sul computer remoto. Se è presente questo token il processo di accesso automatico avvierà un accesso utilizzando il nome specificato.



password



	fornisce una password. Se è presente questo token, il processo di accesso automatico fornirà la stringa specificata se il server remoto richiede una password come parte del processo di accesso.

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request();
request << Netrc File( "$DESKTOP\..\my_netrc.txt" );
request << Netrc( "true" );

```

#### Password

**Sintassi:** obj &lt;&lt; Password(passwd)

**Descrizione:** Imposta la password della richiesta utilizzata per l&apos;autenticazione di base. Questo valore è utilizzato con il nome utente della richiesta, dove sia il nome utente sia la password sono concatenati con &apos;:&apos; (nome:password) e passati al servizio Web. Inoltre, qui è possibile utilizzare un valore nome utente/password codificato (come con codifica Kerberos V5).

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Proxy Server(proxy_url)

**Descrizione:** L&apos;URL del proxy può essere specificato nello stesso modo delle variabili di ambiente proxy, incluso il prefisso del protocollo (http://) e l&apos;utente incorporato + password.

**JMP Versione aggiunta:** 15

```jsl


request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );

```

#### Proxy User

**Sintassi:** obj &lt;&lt; Proxy User(username:password)

**Descrizione:** L&apos;utente e la password che possono essere indicati nella stringa del proxy presentano URL decodificato. Ciò consente all&apos;utente di introdurre caratteri quali @ utilizzando %40 o di inserire due punti con %3a.

**JMP Versione aggiunta:** 15

```jsl


request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );
request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**Sintassi:** obj &lt;&lt; Query String([[ key=&gt; value ]], &lt;URI Encode(1|0|Safe(...))&gt;)

**Descrizione:** Imposta il valore della stringa di query nella richiesta. Questa è una raccolta chiave/valore dell&apos;array associativo di dati alfanumerici. Le coppie chiave/valore sono codificate con URL (con carattere di escape) quando sono inviate al servizio Web.

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Query String( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Reset

**Sintassi:** obj &lt;&lt; Reset(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Descrizione:** Reimposta la richiesta su nuovi valori.

**JMP Versione aggiunta:** 14

```jsl


request = New HTTP Request( URL( "http://pokeapi.co/api/v2/pokemon/1/" ), Method( "GET" ) );
json1 = request << Send;
request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json2 = request << Send;

```

#### Run

**Sintassi:** obj &lt;&lt; Run

**Descrizione:** Esegue la richiesta. Si tratta di un alias di Send. Il valore di ritorno dalla funzione JSL Run will be either character data or binary BLOB. You can check the return with the Is String.

**JMP Versione aggiunta:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### SSL Version

**Sintassi:** obj &lt;&lt; SSL Version (version)

**Descrizione:** "DEFAULT"  Use the default negotiated version (recommended).

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

**JMP Versione aggiunta:** 19

```jsl


request = New HTTP Request();
request << SSL Version( "1+" );

```

#### Secure

**Sintassi:** obj &lt;&lt; Secure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**Descrizione:** Di default, la validazione del certificato è attiva. Se viene impostata su false, consente di completare le richieste senza la validazione del certificato. Se viene impostata su prompt, questo permetterà all&apos;utente di accettare il certificato e di completare la richiesta secondo necessità.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**Descrizione:** Invia la richiesta. Il valore di ritorno da Send sarà o un dato testuale o un BLOB binario. È possibile controllare la restituzione con la funzione JSL Is String. Usando show progress download verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati scaricati. Usando show progress upload verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati caricati. Usando show progress both verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati caricati e scaricati. Usando show progress verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati caricati o scaricati (o entrambi). Per pubblicare i moduli, show progress mostrerà lo stato di avanzamento di caricamento e download. Per pubblicare i file, show progress visualizzerà lo stato di avanzamento del caricamento. Per recuperare i dati, show progress visualizzerà lo stato di avanzamento del download.

**JMP Versione aggiunta:** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### Text

**Sintassi:** obj &lt;&lt; Text( text data, &lt;content-type&gt;)

**Descrizione:** Imposta un valore di stringa di testo nella richiesta. La stringa di testo sarà utilizzata come corpo del documento. L&apos;intestazione del tipo di contenuto della richiesta sarà automaticamente impostata su "Content-Type: text/plain".

**JMP Versione aggiunta:** 15

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	Text( "Hello World" )
);
data = request << Send;

```

#### Timeout

**Sintassi:** obj &lt;&lt; Timeout(seconds)

**Descrizione:** Il timeout predefinito per il completamento dell’azione di richiesta è 60 secondi. Questo valore può essere corretto per adeguare operazioni di servizio web di durata più lunga.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; URL(path)

**Descrizione:** Quando viene creata la richiesta (o utilizzata con Reimposta), può essere usata come parametro. obj = Richiesta HTTP(URL("http://google.com"));

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Use Cookies(&lt;true | false&gt;))

**Descrizione:** Configura la richiesta di utilizzare i cookie per la sessione. L&apos;impostazione predefinita è true.

**JMP Versione aggiunta:** 17

```jsl


request = New HTTP Request();
data = request << Use Cookies( "false" );

```

#### UserPwd

**Sintassi:** obj &lt;&lt; UserPwd(clark kent:superman)

**Descrizione:** Imposta il campo dell&apos;utente e della password nella richiesta utilizzata per l&apos;autenticazione, il cui formato è: [nome utente]:[password]. Le stringhe utente e password non presentano URL decodificato, quindi non è possibile inviare un nome utente contenente due punti usando questa opzione.

**JMP Versione aggiunta:** 18

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

**Sintassi:** obj &lt;&lt; Username(name)

**Descrizione:** Imposta il nome utente della richiesta utilizzata per l&apos;autenticazione di base. Questo valore è utilizzato in combinazione con la password della richiesta, in cui sia il nome utente sia la password sono concatenati con &apos;:&apos; (nome:password) e passati al servizio Web.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Verbose(&lt;"true"&gt; | &lt;"false"&gt;)

**Descrizione:** Scrive estesi messaggi di errore nel log. L&apos;impostazione predefinita è vero.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Verify SSL(&lt;"true"&gt; | &lt;"false"&gt;)

**Descrizione:** La verifica del certificato è attiva. Se impostata su false, le richieste di completamento senza verifica del certificato saranno consentite.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj &lt;&lt; XML( xml data )

**Descrizione:** Imposta un valore di stringa xml nella richiesta. La stringa xml sarà utilizzata come corpo del documento. L&apos;intestazione del tipo di contenuto della richiesta sarà automaticamente impostata su "Content-Type: application/xml".

**JMP Versione aggiunta:** 15

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

### Messaggi degli elementi

#### Add

**Sintassi:** obj &lt;&lt; Add(request, &lt;label&gt;)

**Descrizione:** Aggiunge una richiesta HTTP a MultiHTTPRequest. Può essere usata un&apos;etichetta facoltativa. Questa opzione è utile quando si eseguono download paralleli. Tutte le richieste HTTP sono convalidate prima di essere usate.

**JMP Versione aggiunta:** 17

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

**Sintassi:** obj &lt;&lt; Download(&lt;"show progress"&gt;, &lt;"detailed"&gt;)

**Descrizione:** Scarica le risposte HTTP nei file in parallelo. Utile per scaricare più file contemporaneamente da uno o più servizi Web. Usando show progress verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei file scaricati. Usando details verrà visualizzato lo stato di avanzamento del singolo download.

**JMP Versione aggiunta:** 17

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** obj &lt;&lt; Get Requests()

**JMP Versione aggiunta:** 17

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

**Sintassi:** obj &lt;&lt; Has Error

**Descrizione:** Restituisce vero se la richiesta multipla presenta un errore. La richiesta multipla presenta un errore se qualsiasi sua richiesta HTTP presenta un errore.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Is Success

**Descrizione:** Restituisce true se la richiesta multipla ha esito positivo. La richiesta multipla ha esito positivo se tutte le sue richieste HTTP hanno esito positivo.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Is Successful

**Descrizione:** Restituisce true se la richiesta multipla ha esito positivo. La richiesta multipla ha esito positivo se tutte le sue richieste HTTP hanno esito positivo.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj &lt;&lt; Is Valid

**Descrizione:** Se la richiesta multipla è valida. La richiesta multipla è valida se tutte le sue richieste HTTP sono valide.

**JMP Versione aggiunta:** 17

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

**Sintassi:** obj &lt;&lt; Reset()

**Descrizione:** Reimposta le richieste multiple. Questa operazione reimposta qualsiasi richiesta HTTP che è già stata aggiunta.

**JMP Versione aggiunta:** 17

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

**Sintassi:** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**Descrizione:** Il valore di ritorno da Send sarà o un dato testuale o un BLOB binario. È possibile controllare la restituzione con la funzione JSL Is String. Usando show progress download verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati scaricati. Usando show progress upload verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati caricati. Usando show progress both verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati caricati e scaricati. Usando show progress verrà visualizzata una barra di avanzamento annullabile con lo stato di avanzamento dei dati caricati o scaricati (o entrambi). Per pubblicare i moduli, show progress mostrerà lo stato di avanzamento di caricamento e download. Per pubblicare i file, show progress visualizzerà lo stato di avanzamento del caricamento. Per recuperare i dati, show progress visualizzerà lo stato di avanzamento del download.

**JMP Versione aggiunta:** 17

**Esempio 1**

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

**Esempio 2**

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

### Messaggi degli elementi

#### Authorization Fields

**Sintassi:** oauth2 &lt;&lt; Authorization Fields(...)

**Descrizione:** Campi di autorizzazione è un array associativo di coppie "chiave, valore" da utilizzare nella stringa della query per l&apos;URL di autorizzazione OAuth2.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Authorization URL(...)

**Descrizione:** Imposta l&apos;URL dell&apos;autorizzazione OAuth2.

**JMP Versione aggiunta:** 15

```jsl


oauth2 = New OAuth2();
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**Sintassi:** oauth2 &lt;&lt; Browser Type("Default" | "Embedded" | "External")

**Descrizione:** L&apos;opzione Predefinito è per usare il browser incorporato per l&apos;autenticazione OAuth2 a meno che non ci si autentichi con Google. L&apos;opzione Incorporato è per usare il browser incorporato per l&apos;autenticazione OAuth2 a meno che non ci si autentichi con Google (attualmente l&apos;impostazione predefinita). L&apos;opzione Esterno è per usare il browser esterno per l&apos;autenticazione OAuth2 e copiare il codice/URL risultante nell&apos;area di testo per completare l&apos;autenticazione.

**JMP Versione aggiunta:** 17

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

**Sintassi:** oauth2 &lt;&lt; Client Id(...)

**Descrizione:** Imposta l&apos;ID del client OAuth2 è un identificativo pubblico utilizzato durante la creazione del servizio Web.

**JMP Versione aggiunta:** 15

```jsl


/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
oauth2 = New OAuth2();
oauth2 << Client Id( client_id );

```

#### Client Secret

**Sintassi:** oauth2 &lt;&lt; Client Secret(...)

**Descrizione:** Imposta il client secret OAuth2 creato durante la creazione del servizio Web.

**JMP Versione aggiunta:** 15

```jsl


/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
oauth2 = New OAuth2();
oauth2 << Client Secret( client_secret );

```

#### Code Verifier

**Sintassi:** oauth2 &lt;&lt; Code Verifier(&lt;"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"&gt;

**Descrizione:** Il verificatore di codice è una stringa crittograficamente casuale che il client utilizza per identificarsi quando scambia un codice di autorizzazione con un token di accesso. Ha una lunghezza minima di 43 caratteri e una lunghezza massima di 128 caratteri.

**JMP Versione aggiunta:** 19

```jsl


oauth2 = New OAuth2();
oauth2 << Code Verifier( "cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" );

```

#### Get Access Token

**Sintassi:** oauth2 &lt;&lt; Get Access Token()

**Descrizione:** Ottiene il token di accesso OAuth2 corrente che avvia la comunicazione con il server di autorizzazione se necessario.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Get Authentication Response Error()

**Descrizione:** Ottiene l&apos;errore di risposta OAuth2.

**JMP Versione aggiunta:** 18

```jsl


oauth2 = New OAuth2();
error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**Sintassi:** obj &lt;&lt; Get Auth Response Fields

**JMP Versione aggiunta:** 15

#### Get Authentication Response Error

**Sintassi:** obj &lt;&lt; Get Authentication Response Error

**JMP Versione aggiunta:** 18

#### Get Authorization Header

**Sintassi:** oauth2 &lt;&lt; Get Authorization Header

**Descrizione:** Ottiene l&apos;intestazione nella forma:

Autorizzazione: connessione [token OAuth2]

dove [token OAuth2] è il token di connessione ottenuto da un server di autorizzazione.

**JMP Versione aggiunta:** 15

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** oauth2 &lt;&lt; Get Authorization Response Fields()

**Descrizione:** Ottiene i valori di risposta OAuth2 correnti dal server di autorizzazione.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Get Code()

**Descrizione:** Ottiene il codice OAuth2 corrente che avvia la comunicazione con il server di autorizzazione se necessario.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Get Grant Type()

**Descrizione:** Ottiene il tipo di concessione OAuth2 corrente.

**JMP Versione aggiunta:** 15

```jsl


oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
oauth2 << Grant Type( grant_types[1] );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Get Grant Types

**Sintassi:** oauth2 &lt;&lt; Get Grant Types

**Descrizione:** Ottiene i tipi di concessione JMP OAuth2 supportati.

**JMP Versione aggiunta:** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
Show( grant_types );

```

#### Get ID Token

**Sintassi:** oauth2 &lt;&lt; Get ID Token()

**Descrizione:** Ottiene il token ID OAuth2 corrente che avvia la comunicazione con il server di autorizzazione se necessario.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Get Refresh Token()

**Descrizione:** Ottiene il token di aggiornamento OAuth2 corrente che avvia la comunicazione con il server di autorizzazione se necessario.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Get Scope()

**Descrizione:** Ottiene l&apos;ambito OAuth2 corrente.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Get Window Title

**Descrizione:** Ottiene il titolo della finestra OAuth2.

**JMP Versione aggiunta:** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );
title = oauth2 << Get Window Title;

```

#### Grant Type

**Sintassi:** oauth2 &lt;&lt; Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**Descrizione:** Il tipo di concessione richiesto deve essere un tipo di concessione supportato da JMP e dal fornitore dell&apos;autorizzazione OAuth2.

**JMP Versione aggiunta:** 15

```jsl


oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Has Auth Response  Error

**Sintassi:** obj &lt;&lt; Has Auth Response Error

**JMP Versione aggiunta:** 18

#### Has Authentication Response  Error

**Sintassi:** oauth2 &lt;&lt; Has Authentication Response Error()

**Descrizione:** Verifica la presenza di un errore di risposta di autenticazione OAuth2.

**JMP Versione aggiunta:** 18

```jsl


oauth2 = New OAuth2();
If( oauth2 << Has Authentication Response Error(),
	Show( oauth2 << Get Authentication Response Error )
);

```

#### Is Expired

**Sintassi:** oauth2 &lt;&lt; Is Expired()

**Descrizione:** Indica se il token di accesso OAuth2 corrente è scaduto.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Login Hint(hint)

**Descrizione:** Imposta il valore login_hint. login_hint è un parametro FACOLTATIVO nella richiesta di autenticazione come "suggerimento" al server di autorizzazione sull&apos;identificativo di accesso che l&apos;utente finale potrebbe usare per accedere (se necessario).

**JMP Versione aggiunta:** 17

```jsl


oauth2 = New OAuth2();
oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**Sintassi:** oauth2 &lt;&lt; Password(...)

**Descrizione:** Imposta la password OAuth2 per il tipo di concessione password.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

```

#### Redirect URL

**Sintassi:** oauth2 &lt;&lt; Redirect URL(...)

**Descrizione:** Imposta l&apos;URL di reindirizzamento OAuth2 utilizzato durante la creazione del servizio web.

**JMP Versione aggiunta:** 15

```jsl


redirect_url = "http://localhost/myapp/";
oauth2 = New OAuth2();
oauth2 << Redirect URL( redirect_url );

```

#### Scope

**Sintassi:** oauth2 &lt;&lt; Scope(...)

**Descrizione:** Imposta l&apos;ambito OAuth2, un modo per limitare l&apos;accesso di un&apos;applicazione a un account.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Set Window Title(title)

**Descrizione:** Imposta il titolo della finestra OAuth2.

**JMP Versione aggiunta:** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**Sintassi:** obj &lt;&lt; Token Fields

**Descrizione:** Un array associativo di coppie "chiave, valore" da utilizzare nella stringa di query per l&apos;URL del token OAuth2.

**JMP Versione aggiunta:** 15

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

**Sintassi:** oauth2 &lt;&lt; Token URL(...)

**Descrizione:** Imposta l&apos;URL del token OAuth2.

**JMP Versione aggiunta:** 15

```jsl


oauth2 = New OAuth2();
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**Sintassi:** oauth2 &lt;&lt; Use Default Window Title(1 | 0)

**Descrizione:** Ottiene il titolo della finestra OAuth2.

**JMP Versione aggiunta:** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Use Default Window Title( 1 );
title = oauth2 << Get Window Title;

```

#### Username

**Sintassi:** oauth2 &lt;&lt; Username(...)

**Descrizione:** Imposta il nome utente OAuth2 per il tipo di concessione password.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

```

