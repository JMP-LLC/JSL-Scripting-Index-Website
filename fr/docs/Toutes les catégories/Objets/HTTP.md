# HTTP



## HTTPRequest

### Messages d'éléments

#### Authentication Method

**Syntaxe :** obj &lt;&lt; Authentication Method(method)

**Description :** Impose une méthode d&apos;authentification. Les valeurs valides sont :



	NONE         - Pas d&apos;authentification HTTP



	BASIC        - Authentification HTTP basique



	KERBEROS     - Kerberos HTTP



	NEGOTIATE    - Authentification HTTP Negotiate (SPNEGO)



	NTLM         - Authentification HTTP NTLM



	ANY          - Tous les types définis (par défaut)



	ANYSAFE      - Tous les types sauf Basic



	DEFAULT      - L&apos;authentification par défaut



Par défaut, JMP et le service web négocient la méthode d&apos;authentification la plus sûre.

**JMP Version ajoutée :** 17

```jsl


request = New HTTP Request();
request << Authentication Method( "KERBEROS" );

```

#### Blob

**Syntaxe :** obj &lt;&lt; Blob( binary data, &lt;content-type&gt; )

**Description :** Une valeur blob sera définie dans la demande. La valeur blob sera utilisée pour le corps du document. L&apos;en-tête de type Contenu de la demande sera automatiquement défini comme "Content-Type: application/octet-stream".

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Bypass Proxy(localhost)

**Description :** Liste des hôtes (séparés par une virgule) qui n&apos;utilisent pas de proxy, si un proxy est spécifié. Le seul caractère générique est un caractère * unique qui associe tous les hôtes et qui désactive le proxy. Chaque nom de cette liste est associé soit en tant que domaine contenant le nom d&apos;hôte, soit en tant que nom d&apos;hôte. Par exemple, local.com pourrait être associé à local.com, local.com:80 et www.local.com, mais pas à www.notlocal.com.

**JMP Version ajoutée :** 15

```jsl


request = New HTTP Request();
request << Proxy Server( "http://my_proxy.com" );
request << Proxy User( "clark%20kent:superman" );
request << Bypass Proxy( "localhost" );

```

#### Certificates

**Syntaxe :** obj &lt;&lt; Certificates(certificate file)

**Description :** Utilisez le fichier de certificat spécifié pour la vérification. Le fichier peut contenir plusieurs certificats de l&apos;autorité de certification. Le ou les certificats doivent être au format PEM.

**JMP Version ajoutée :** 16

```jsl


request = New HTTP Request();
request << Certificates( "c:\certs\my_certificate.crt" );

```

#### Cookie

**Syntaxe :** obj &lt;&lt; Cookie([[ key=&gt; value ]]

**Description :** Définir un cookie dans la demande.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Cookie( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Cookie File

**Syntaxe :** obj &lt;&lt; Cookie File(&lt;path&gt;, &lt;"replace" | "rename" | "append"&gt;)

**Description :** Spécifier un fichier de cookie alternatif.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request();
data = request << Cookie File( "$DESKTOP\..\cookie.txt" );

```

#### Curlrc

**Syntaxe :** obj &lt;&lt; Curlrc(&lt;true | false&gt;)

**Description :** Configure la requête de sorte à utiliser un fichier .curl standard.

Le fichier .curlrc (_curlrc sous Windows) contient les options par défaut utilisées pour curl.

**JMP Version ajoutée :** 15

```jsl


request = New HTTP Request();
request << Curlrc( "true" );

```

#### Curlrc File

**Syntaxe :** obj &lt;&lt; Curlrc File(&lt;path&gt;)

**Description :** Configure la requête de sorte à utiliser un autre fichier .curlrc.

Le fichier .curlrc (_curlrc sous Windows) contient les options par défaut utilisées pour curl.

**JMP Version ajoutée :** 15

```jsl


request = New HTTP Request();
request << Curlrc File( "$DESKTOP\..\my_curlrc.txt" );
request << Curlrc( "true" );

```

#### DNS Timeout

**Syntaxe :** obj &lt;&lt; DNS Timeout(seconds)

**Description :** Le temps de cache DNS par défaut pour la connexion est de 60 secondes. Cette valeur peut être ajustée en fonction de la mise en cache DNS. Définir sur 0 pour désactiver complètement la mise en cache, ou définir sur -1 pour conserver les entrées mises en cache dans la mémoire.

**JMP Version ajoutée :** 16

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

**Syntaxe :** obj &lt;&lt; Decode64 Char( value )

**Description :** Décoder la chaîne à l&apos;aide du codage Base 64

**JMP Version ajoutée :** 16

```jsl


request = New HTTP Request();
data = request << Decode64 Char(
	"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4="
);

```

#### Download

**Syntaxe :** obj &lt;&lt; Download( path, &lt;"replace" | "rename" | "append"&gt; )

**Description :** Télécharge la réponse HTTP dans un fichier. Utile pour télécharger des fichiers sur un service web. L&apos;option replace remplace les fichiers existant. L&apos;option rename utilise des noms de fichier séquentiels lorsqu&apos;un nom en doublon est trouvé (fichier, fichier(1), fichier(2)...) L&apos;option append ajoute à la fin du fichier existant. L&apos;utilisation de show progress affiche une barre d&apos;avancement pouvant être annulée avec le pourcentage du fichier téléchargé.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Encode64 Char( value )

**Description :** Coder la chaîne à l&apos;aide du codage Base 64

**JMP Version ajoutée :** 16

```jsl


request = New HTTP Request();
data = request << Encode64 Char(
	"Man is distinguished, not only by his reason, but ..."
);

```

#### File

**Syntaxe :** obj &lt;&lt; File ( path, &lt;content-type&gt; )

**Description :** Une valeur Fichier sera définie dans la demande. Le contenu Fichier sera utilisé pour le corps du document. L&apos;en-tête de type Contenu de la demande sera automatiquement défini comme le contenu approprié selon l&apos;extension du fichier ou comme application/octet-stream s&apos;il est introuvable.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Form(Fields([[ key=&gt; value ]], &lt;URI Encode(1 | 0 | Safe(...))&gt;), Files({ key1, {path1, path2, ..}, key2, {path3, path4} }))

**Description :** Définit la valeur des données du formulaire dans la demande. Le formulaire sera utilisé en tant que corps du document. Les données du formulaire peuvent avoir des éléments de champs et de fichiers.

**JMP Version ajoutée :** 14

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
			[["A" => "a", "B" => "b", "C" => "c", "1" => "one", "2" => "two", "3" =>
			"three"]]
		),
		Files( {"group 1", {file1, file2}, "group 2", {file2, file4}} )
	)
);
data = request << Send;

```

#### Get Certificate Info

**Syntaxe :** obj &lt;&lt; Get Certificate Info

**Description :** Affiche les détails du certificat, tels que l&apos;émetteur, la date d&apos;expiration et d&apos;autres informations prouvant que le certificat est digne de confiance.

**JMP Version ajoutée :** 19

```jsl


request = New HTTP Request( URL( "https://google.com" ) );
request << Get Certificate Info;

```

#### Get Last URL

**Syntaxe :** obj &lt;&lt; Get Last URL

**Description :** Obtient la dernière URL utilisée dans la demande. Utile pour trouver l&apos;URL redirigée.

**JMP Version ajoutée :** 14

```jsl


baseURL = "http://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/10" ), Method( "GET" ) );
request << Send;
Write( Char( request << Get Last URL ) );

```

#### Get MIME Type

**Syntaxe :** mimetype = obj &lt;&lt; Get MIME Type

**Description :** Suite à l&apos;utilisation d&apos;Envoyer (ou Télécharger) dans une demande, celle-ci peut être utilisée pour récupérer le type MIME des données renvoyées.

**JMP Version ajoutée :** 14

```jsl


url =
"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
request = New HTTP Request( URL( url ), Method( "GET" ) );
request << Send;
Write( request << Get Mime Type() || "\!n" );

```

#### Get Method

**Syntaxe :** obj &lt;&lt; Get Last Method

**Description :** Obtient la dernière méthode HTTP utilisée dans la demande.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Get Response Headers

**Description :** Les en-têtes de réponse sont un tableau associatif des paires de clés/valeurs renvoyées après l&apos;envoi d&apos;une demande. Les définitions des en-têtes HTTP sont disponibles à l&apos;adresse suivante : https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Les clés Date, Expires et Last-Modified seront converties en dates JMP. Les clés Age et Content-Length seront converties en nombres. Toutes les autres valeurs seront de type caractère.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Get Status

**Description :** Renvoie le statut de la demande après un Send. S&apos;il n&apos;y a pas d&apos;erreur de connexion, il s&apos;agira du statut HTTP. Dans le cas contraire, il s&apos;agira de celui de la connexion. Un statut de 200-299 indique une connexion réussie.

**JMP Version ajoutée :** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/1" ), Method( "GET" ) );
data = request << Send;
If( request << Get Status == 200,
	Write( "Success!!!!\!n" || Char( data ) || "\!n" )
);

```

#### Get Status Message

**Syntaxe :** obj &lt;&lt; Get Status Message

**Description :** Renvoie le message relatif au statut de la demande après un message Send. S&apos;il n&apos;y a pas d&apos;erreur de connexion, le message renvoyé sera celui du statut HTTP. Dans le cas contraire, il s&apos;agira de celui du statut de la connexion. Un statut de 200-299 indique une connexion réussie.

**JMP Version ajoutée :** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Get Status Msg

**Syntaxe :** obj &lt;&lt; Get Status Msg

**Description :** Renvoie le message relatif au statut de la demande après un Send. Il s&apos;agit d&apos;un alias de GetStatusMessage. S&apos;il n&apos;y a pas d&apos;erreur de connexion, le message renvoyé sera celui du statut HTTP. Dans le cas contraire, il s&apos;agira de celui du statut de la connexion. Un statut de 200-299 indique une connexion réussie.

**JMP Version ajoutée :** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/people/100" ), Method( "GET" ) );
request << Send;
Write( "\!n" || Char( request << Get Status Msg ) || "\!n" );

```

#### Get Warning Headers

**Syntaxe :** obj &lt;&lt; Get Warning Headers

**Description :** Obtient les valeurs d&apos;en-tête d&apos;avertissement (s&apos;il y en a) à partir de la requête.

**JMP Version ajoutée :** 14

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

**Syntaxe :** request &lt;&lt; GetVersion

**Description :** Renvoie la version de cURL actuellement utilisée dans JMP

**JMP Version ajoutée :** 14

```jsl

Write( New HTTP Request() << GetVersion );

```

#### Has Client Error

**Syntaxe :** obj &lt;&lt; Has Client Error

**Description :** Vrai si le statut HTTP est 400-499.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request(
	URL( "http://pokeapi.co/api/v2/pokemon/25/" ),
	Method( "GET" )
);
json = request << Send;
If( request << Has Client Error,
	msg = "Has Client Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Error

**Syntaxe :** obj &lt;&lt; Has Error

**Description :** Vrai si le statut HTTP est 400-599.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request(
	URL( "http://pokeapi.co/api/v2/pokemon/1/" ),
	Method( "GET" )
);
json = request << Send;
If( request << Has Error,
	msg = "Has Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Information

**Syntaxe :** obj &lt;&lt; Has Information

**Description :** Vrai si le statut HTTP est 100-199.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Has Redirection

**Description :** Vrai si le statut HTTP est 300-399.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Has Server Error

**Description :** Vrai si le statut HTTP est 500-599.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request(
	URL( "http://pokeapi.co/api/v2/pokemon/25/" ),
	Method( "GET" )
);
json = request << Send;
If( request << Has Server Error,
	msg = "Has Server Error: " || Char( request << Get Status Message ),
	msg = "Success!"
);
Write( msg );

```

#### Has Warning

**Syntaxe :** obj &lt;&lt; Has Warning

**Description :** Vrai si le statut HTTP a des en-têtes d&apos;avertissement

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Headers({header 1}, {header 2} | [[ key=&gt; value, key2=&gt;value2 ]])

**Description :** Les définitions des en-têtes HTTP sont disponibles à l&apos;adresse suivante :

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html. Un en-tête est utilisé pour spécifier diverses métadonnées concernant la demande et aider le service Internet à répondre de façon appropriée. Ces valeurs doivent être considérées comme des "conseils" destinés au service Internet puisqu&apos;il peut choisir de respecter ou non les paramètres. Consultez l&apos;API du service Internet pour vérifier la prise en charge. Pour la demande, "Content-Type: application/json" est utilisé lors de la spécification des valeurs JSON, "Content-Type: application/octet-stream" est utilisé pour spécifier les valeurs Blob, "Content-Type: [extension/mime type mapping]" est utilisé avec les valeurs Fichier et "Content-Type: application/x-www-form-urlencoded" ou "Content-Type: multipart/form-data" selon le contenu du formulaire. Les en-têtes "conseillent" également le service Internet sur le type de données à renvoyer. Les en-têtes courants sont "Accept: application/json", "Accept: application/xml", "Accept: text/csv", et "Accept: text/html". Les valeurs d&apos;en-tête peuvent être spécifiées sous la forme d&apos;une liste JSL de données de type caractère ou d&apos;un tableau associatif de paires de clés/valeurs de type caractère.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Insecure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**Description :** La validation du certificat est activée par défaut. Si elle est définie sur true, les demandes pourront s&apos;exécuter sans validation du certificat. Si elle est définie sur prompt, un utilisateur pourra accepter le certificat et terminer la requête si nécessaire.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Is Success

**Description :** Vrai si le statut HTTP est 200-299.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Is Successful

**Description :** Vrai si le statut HTTP est 200-299.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Is Valid

**Description :** Est la demande valide

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request();
data = request << Is Valid();

```

#### Is Verbose

**Syntaxe :** obj &lt;&lt; Is Verbose

**Description :** Est la demande qui journalise automatiquement les messages de statut

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request();
data = request << Is Verbose();

```

#### JSON

**Syntaxe :** obj &lt;&lt; JSON( json data )

**Description :** Une valeur Chaîne JSON sera définie dans la demande. La chaîne JSON sera utilisée pour le corps du document. L&apos;en-tête de type Contenu de la demande sera automatiquement défini comme "Content-Type: application/json ». Vous pouvez utiliser la méthode "En tant qu&apos;expression JSON" pour convertir un tableau associatif en une chaîne JSON.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	JSON( "\[{"username":"bob","address":"12345"}]\" )
);
data = request << Send;

```

#### Max Redirect

**Syntaxe :** obj &lt;&lt; Max Redirect(...)

**Description :** Spécifier le nombre de redirections que la demande devra suivre.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Method("Post" | "Get" | "Put" | "Patch"| "Delete")

**Description :** Définit la méthode pour la demande. Get, Post, Put, Patch, Delete et Head sont actuellement prises en charge.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Netrc(&lt;true | false&gt;)

**Description :** Configure la demande de sorte à utiliser un fichier .netrc standard.

Le fichier .netrc (_netrc sous Windows) contient les données de connexion à un hôte distant sur le réseau.

Ce fichier réside dans le répertoire personnel de l&apos;utilisateur, sur l&apos;ordinateur à l&apos;origine du transfert de fichier.

Ses permissions doivent être définies de sorte à interdire l&apos;accès en lecture au groupe et autres.

Les tokens suivants sont reconnus. Ils peuvent être séparés par un espace, une tabulation ou des sauts de lignes :





ordinateur



	identifie un nom d&apos;ordinateur distant. Le processus de connexion automatique recherche le fichier .netrc pour un token ordinateur correspondant à l&apos;ordinateur distant spécifié. Une fois l&apos;appariement effectué, les tokens .netrc suivants sont traités, et le traitement prend fin lorsque l&apos;EOF est atteinte ou qu&apos;un autre token ordinateur est rencontré.



login



	identifie un utilisateur sur l&apos;ordinateur distant. Si ce token est présent, le processus de connexion automatique lancera une connexion à l&apos;aide du nom spécifié.



mot de passe



	fournit un mot de passe. Si ce token est présent, le processus de connexion automatique fournira la chaîne spécifiée si le serveur distant exige un mot de passe dans le cadre du processus de connexion.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request();
request << Netrc( "true" );

```

#### Netrc File

**Syntaxe :** obj &lt;&lt; Netrc File(&lt;path&gt;)

**Description :** Configure la demande de sorte à utiliser un fichier .netrc alternatif.

Le fichier .netrc (_netrc sous Windows) contient les données de connexion à un hôte distant sur le réseau.

Ce fichier réside dans le répertoire personnel de l&apos;utilisateur, sur l&apos;ordinateur à l&apos;origine du transfert de fichier.

Ses permissions doivent être définies de sorte à interdire l&apos;accès en lecture au groupe et autres.

Les tokens suivants sont reconnus. Ils peuvent être séparés par un espace, une tabulation ou des sauts de lignes :



ordinateur



	identifie un nom d&apos;ordinateur distant. Le processus de connexion automatique recherche le fichier .netrc pour un token ordinateur correspondant à l&apos;ordinateur distant spécifié. Une fois l&apos;appariement effectué, les tokens .netrc suivants sont traités, et le traitement prend fin lorsque l&apos;EOF est atteinte ou qu&apos;un autre token ordinateur est rencontré.



login



	identifie un utilisateur sur l&apos;ordinateur distant. Si ce token est présent, le processus de connexion automatique lancera une connexion à l&apos;aide du nom spécifié.



mot de passe



	fournit un mot de passe. Si ce token est présent, le processus de connexion automatique fournira la chaîne spécifiée si le serveur distant exige un mot de passe dans le cadre du processus de connexion.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request();
request << Netrc File( "$DESKTOP\..\my_netrc.txt" );
request << Netrc( "true" );

```

#### Password

**Syntaxe :** obj &lt;&lt; Password(passwd)

**Description :** Définit le mot de passe sur la demande utilisée pour l&apos;authentification basique. Cette valeur est utilisée avec le nom d&apos;utilisateur associé à la demande, où le nom d&apos;utilisateur et le mot de passe sont concaténés avec &apos;:&apos; (nom:mot de passe) et transmis au service Internet. Dans le cas présent, une valeur nom d&apos;utilisateur/mot de passe encodée (Kerberos V5 encodé, par exemple) peut également être utilisée.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Proxy Server(proxy_url)

**Description :** L&apos;URL Proxy peut être spécifié de la même façon que les variables d&apos;environnement Proxy, notamment pour le préfixe du protocole (http://) et l&apos;utilisateur intégré + le mot de passe.

**JMP Version ajoutée :** 15

```jsl


request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );

```

#### Proxy User

**Syntaxe :** obj &lt;&lt; Proxy User(username:password)

**Description :** L&apos;utilisateur et le mot de passe susceptibles d&apos;être fournis dans la chaîne proxy sont des URL décodés. Cela vous permet de transmettre des caractères spéciaux tels que @ en utilisant %40 ou de transmettre deux-points avec %3a.

**JMP Version ajoutée :** 15

```jsl


request = New HTTP Request();
url = "http://my_proxy.com";
request << Proxy Server( url );
request << Proxy User( "clark%20kent:superman" );

```

#### Query String

**Syntaxe :** obj &lt;&lt; Query String([[ key=&gt; value ]], &lt;URI Encode(1|0|Safe(...))&gt;)

**Description :** Définit la valeur Chaîne de requête dans la demande. Il s&apos;agit d&apos;une série de clés/valeurs de données de type caractère d&apos;un tableau associatif. Les paires de clés/valeurs sont envoyées au service Internet à l&apos;aide d&apos;un URL encodé (échappement).

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/get" ),
	Method( "GET" ),
	Query String( [["username" => "bob", "address" => "12345"]] )
);
data = request << Send;

```

#### Reset

**Syntaxe :** obj &lt;&lt; Reset(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Description :** Réinitialise la demande en fonction des nouvelles valeurs.

**JMP Version ajoutée :** 14

```jsl


request = New HTTP Request(
	URL( "http://pokeapi.co/api/v2/pokemon/1/" ),
	Method( "GET" )
);
json1 = request << Send;
request << Reset( URL( "http://pokeapi.co/api/v2/pokemon/25/" ), Method( "GET" ) );
json2 = request << Send;

```

#### Run

**Syntaxe :** obj &lt;&lt; Run

**Description :** Exécute la demande. Il s&apos;agit d&apos;un alias de Send. La valeur de renvoie de la fonction JSL Run will be either character data or binary BLOB. You can check the return with the Is String.

**JMP Version ajoutée :** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### SSL Version

**Syntaxe :** obj &lt;&lt; SSL Version (version)

**Description :** "DEFAULT"  Use the default negotiated version (recommended).

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

**JMP Version ajoutée :** 19

```jsl


request = New HTTP Request();
request << SSL Version( "1+" );

```

#### Secure

**Syntaxe :** obj &lt;&lt; Secure(&lt;"true"&gt; | &lt;"false"&gt;) | &lt;"prompt"&gt;

**Description :** La validation du certificat est activée par défaut. Si elle est définie sur false, les demandes pourront s&apos;exécuter sans validation du certificat. Si elle est définie sur prompt, un utilisateur pourra accepter le certificat et terminer la requête si nécessaire.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**Description :** Envoie la demande. La valeur de retour de Send sera une donnée de caractères ou un BLOB binaire. Vous pouvez consulter le retour avec la fonction JSL Is String. L&apos;utilisation de show progress download affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données téléchargées. L&apos;utilisation de show progress upload affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données envoyées. L&apos;utilisation de show progress both affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données téléchargées et envoyées. L&apos;utilisation de show progress affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données envoyées et téléchargées (ou les deux). Pour la publication des formulaires, show progress affichera l&apos;avancement des envois et des téléchargements. Pour la publication de fichiers, show progress affichera l&apos;avancement des envois. Pour récupérer des données, show progress affichera l&apos;avancement du téléchargement.

**JMP Version ajoutée :** 14

```jsl


baseURL = "https://swapi.co/api";
request = New HTTP Request( URL( baseURL || "/planets" ), Method( "GET" ) );
json = request << Send;
Write( json || "\!n" );

```

#### Text

**Syntaxe :** obj &lt;&lt; Text( text data, &lt;content-type&gt;)

**Description :** Une valeur de chaîne Texte sera définie dans la demande. La chaîne Texte sera utilisée pour le corps du document. L&apos;en-tête de type Contenu de la demande sera automatiquement défini comme "Content-Type: text/plain".

**JMP Version ajoutée :** 15

```jsl


request = New HTTP Request(
	url( "http://httpbin.org/post" ),
	Method( "POST" ),
	Text( "Hello World" )
);
data = request << Send;

```

#### Timeout

**Syntaxe :** obj &lt;&lt; Timeout(seconds)

**Description :** Par défaut, l&apos;intervalle de temps nécessaire à l&apos;action demandée est de 60 secondes. Cette valeur peut être ajustée pour s&apos;adapter à des actions de service Internet plus chronophages.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; URL(path)

**Description :** Lorsque la demande est créée (ou utilisée avec Réinitialiser), elle peut être utilisée comme un paramètre. obj = HTTP Request(URL("http://google.com"));

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Use Cookies(&lt;true | false&gt;))

**Description :** Configure la requête pour utiliser les cookies pour la session. La valeur par défaut est vrai.

**JMP Version ajoutée :** 17

```jsl


request = New HTTP Request();
data = request << Use Cookies( "false" );

```

#### UserPwd

**Syntaxe :** obj &lt;&lt; UserPwd(clark kent:superman)

**Description :** Définit le champ de l&apos;utilisateur et du mot de passe dans la demande utilisée pour l&apos;authentification. Le format est : [nom d&apos;utilisateur]:[mot de passe]. Les chaînes de l&apos;utilisateur et du mot de passe ne sont pas des URL décodées, il n&apos;y a donc aucun moyen d&apos;envoyer un nom d&apos;utilisateur contenant un deux-points avec cette option.

**JMP Version ajoutée :** 18

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

**Syntaxe :** obj &lt;&lt; Username(name)

**Description :** Définit le nom d&apos;utilisateur sur la demande utilisée pour l&apos;authentification basique. Cette valeur est utilisée conjointement avec le mot de passe associé à la demande, où le nom d&apos;utilisateur et le mot de passe sont concaténés avec &apos;:&apos; (nom:mot de passe) et transmis au service Internet.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Verbose(&lt;"true"&gt; | &lt;"false"&gt;)

**Description :** Écrit les messages d&apos;erreur importants dans le log. Vrai par défaut.

**JMP Version ajoutée :** 14

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
request << Reset(
	URL( baseURL || "/people/1000" ),
	Method( "GET" ),
	Verbose( "false" )
);
request << Send;
Write( "\!n" || Char( request << Get Status Message ) || "\!n" );

```

#### Verify SSL

**Syntaxe :** obj &lt;&lt; Verify SSL(&lt;"true"&gt; | &lt;"false"&gt;)

**Description :** La vérification de certificat est activée. Si elle est définie sur false, les demandes pourront s&apos;exécuter sans validation du certificat.

**JMP Version ajoutée :** 16

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

**Syntaxe :** obj &lt;&lt; XML( xml data )

**Description :** Une valeur de chaîne XML sera définie dans la demande. La chaîne XML sera utilisée pour le corps du document. L&apos;en-tête de type Contenu de la demande sera automatiquement défini comme "Content-Type: application/xml".

**JMP Version ajoutée :** 15

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

### Messages d'éléments

#### Add

**Syntaxe :** obj &lt;&lt; Add(request, &lt;label&gt;)

**Description :** Ajouter une demande HTTP à MultiHTTPRequest. Une étiquette facultative peut être utilisée. Cela est utile pour effectuer plusieurs téléchargements en parallèle. Toutes les demandes HTTP sont validées avant d&apos;être utilisées.

**JMP Version ajoutée :** 17

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

**Syntaxe :** obj &lt;&lt; Download(&lt;"show progress"&gt;, &lt;"detailed"&gt;)

**Description :** Télécharge les réponses HTTP dans des fichiers en parallèle. Utile pour télécharger plusieurs fichiers en une fois à partir d&apos;un ou de plusieurs services web. L&apos;utilisation de show progress affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des fichiers téléchargés. L&apos;utilisation de details affichera l&apos;avancement individuel des téléchargements.

**JMP Version ajoutée :** 17

**Exemple 1**

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

**Exemple 2**

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

**Syntaxe :** obj &lt;&lt; Get Requests()

**JMP Version ajoutée :** 17

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
	URL(
		"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
	)
);

requests << Add( http_request_1 );

requests << Add( http_request_2 );
http_requests = requests << Get Requests();
//http_request_1 is the same as http_requests[1]
//http_request_2 is the same as http_requests[2]

```

#### Has Error

**Syntaxe :** obj &lt;&lt; Has Error

**Description :** Renvoie vrai si la demande multiple a une erreur. La demande multiple a une erreur si l&apos;une de ses demandes HTTP a une erreur.

**JMP Version ajoutée :** 14

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
	URL(
		"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
	)
);

requests << Add( http_request_1 );

requests << Add( http_request_2 );
data = requests << Download( "show progress", "detailed" );
Show( requests << Has Error );

```

#### Is Success

**Syntaxe :** obj &lt;&lt; Is Success

**Description :** Renvoie vrai si la demande multiple a réussi. La demande multiple a réussi si toutes ses demandes HTTP ont réussi.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Is Successful

**Description :** Renvoie vrai si la demande multiple a réussi. La demande multiple a réussi si toutes ses demandes HTTP ont réussi.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Is Valid

**Description :** La demande multiple est-elle valide. La demande multiple est valide si toutes ses demandes HTTP sont valides.

**JMP Version ajoutée :** 17

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
	URL(
		"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
	)
);

requests << Add( http_request_1 );

requests << Add( http_request_2 );
Show( requests << Is Valid() );

```

#### Reset

**Syntaxe :** obj &lt;&lt; Reset()

**Description :** Réinitialise les demandes multiples. Cela réinitialise toutes les demandes HTTP déjà ajoutées.

**JMP Version ajoutée :** 17

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

**Syntaxe :** obj &lt;&lt; Send(&lt;"text" | "blob"&gt;, &lt;"show progress download" | "show progress upload" | "show progress both" | "show progress"&gt;)

**Description :** La valeur de retour de Send sera une donnée de caractères ou un BLOB binaire. Vous pouvez consulter le retour avec la fonction JSL Is String. L&apos;utilisation de show progress download affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données téléchargées. L&apos;utilisation de show progress upload affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données envoyées. L&apos;utilisation de show progress both affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données téléchargées et envoyées. L&apos;utilisation de show progress affichera une barre d&apos;avancement pouvant être annulée indiquant l&apos;avancement des données envoyées et téléchargées (ou les deux). Pour la publication des formulaires, show progress affichera l&apos;avancement des envois et des téléchargements. Pour la publication de fichiers, show progress affichera l&apos;avancement des envois. Pour récupérer des données, show progress affichera l&apos;avancement du téléchargement.

**JMP Version ajoutée :** 17

**Exemple 1**

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

**Exemple 2**

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

### Messages d'éléments

#### Authorization Fields

**Syntaxe :** oauth2 &lt;&lt; Authorization Fields(...)

**Description :** Les champs d&apos;autorisation sont représentés par un tableau associatif de paires de clés et de valeurs à utiliser dans la chaîne de requête de l&apos;URL d&apos;autorisation OAuth2.

**JMP Version ajoutée :** 15

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

**Syntaxe :** oauth2 &lt;&lt; Authorization URL(...)

**Description :** Définit l&apos;URL d&apos;autorisation OAuth2.

**JMP Version ajoutée :** 15

```jsl


oauth2 = New OAuth2();
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
oauth2 << Authorization URL( auth_url );

```

#### Browser Type

**Syntaxe :** oauth2 &lt;&lt; Browser Type("Default" | "Embedded" | "External")

**Description :** L&apos;option Par défaut utilise le navigateur intégré pour l&apos;authentification OAuth2 sauf pour l&apos;authentification avec Google. L&apos;option Intégré utilise le navigateur intégré pour l&apos;authentification OAuth2 sauf pour l&apos;authentification avec Google (actuellement la même chose que l&apos;option Par défaut). L&apos;option Externe utilise le navigateur externe pour l&apos;authentification OAuth2 et copie le code/URL de sortie dans la zone de texte afin de compléter l&apos;authentification.

**JMP Version ajoutée :** 17

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

**Syntaxe :** oauth2 &lt;&lt; Client Id(...)

**Description :** Définit l&apos;identifiant client OAuth2 en tant qu&apos;identifiant public utilisé lors de la création du service Web.

**JMP Version ajoutée :** 15

```jsl


/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
oauth2 = New OAuth2();
oauth2 << Client Id( client_id );

```

#### Client Secret

**Syntaxe :** oauth2 &lt;&lt; Client Secret(...)

**Description :** Définit le secret client OAuth2 qui a été créé lors de la création du service Web.

**JMP Version ajoutée :** 15

```jsl


/*
https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
*/
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
oauth2 = New OAuth2();
oauth2 << Client Secret( client_secret );

```

#### Code Verifier

**Syntaxe :** oauth2 &lt;&lt; Code Verifier(&lt;"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"&gt;

**Description :** Le vérificateur de code est une chaîne de caractères cryptographiquement aléatoire utilisée par le client pour s&apos;identifier lors d&apos;un échange de code d&apos;autorisation pour un token d&apos;accès. Il a une longueur minimum de 43 caractères et une longueur maximum de 128 caractères.

**JMP Version ajoutée :** 19

```jsl


oauth2 = New OAuth2();
oauth2 << Code Verifier(
	"cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"
);

```

#### Get Access Token

**Syntaxe :** oauth2 &lt;&lt; Get Access Token()

**Description :** Obtient le token d&apos;accès OAuth2 actuel. Lance la communication avec le serveur d&apos;autorisation, si nécessaire.

**JMP Version ajoutée :** 15

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
client_id =
"581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
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

**Syntaxe :** oauth2 &lt;&lt; Get Authentication Response Error()

**Description :** Obtient l&apos;erreur de réponse OAuth2.

**JMP Version ajoutée :** 18

```jsl


oauth2 = New OAuth2();
error = oauth2 << Get Authentication Response Error();

```

#### Get Auth Response Fields

**Syntaxe :** obj &lt;&lt; Get Auth Response Fields

**JMP Version ajoutée :** 15

#### Get Authentication Response Error

**Syntaxe :** obj &lt;&lt; Get Authentication Response Error

**JMP Version ajoutée :** 18

#### Get Authorization Header

**Syntaxe :** oauth2 &lt;&lt; Get Authorization Header

**Description :** Obtient l&apos;en-tête sous la forme : 

Autorisation : porteur [token OAuth2]

 où [token OAuth2] est le token porteur obtenu auprès d&apos;un serveur d&apos;autorisation.

**JMP Version ajoutée :** 15

**Exemple 1**

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

**Exemple 2**

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
client_id =
"581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
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

**Syntaxe :** oauth2 &lt;&lt; Get Authorization Response Fields()

**Description :** Obtient les valeurs actuelles des réponses OAuth2 du serveur d&apos;autorisation.

**JMP Version ajoutée :** 15

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
client_id =
"581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
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

**Syntaxe :** oauth2 &lt;&lt; Get Code()

**Description :** Obtient le code OAuth2 actuel. Lance la communication avec le serveur d&apos;autorisation, si nécessaire.

**JMP Version ajoutée :** 15

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
client_id =
"581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
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

**Syntaxe :** oauth2 &lt;&lt; Get Grant Type()

**Description :** Obtient le type d&apos;autorisation OAuth2 actuel.

**JMP Version ajoutée :** 15

```jsl


oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
oauth2 << Grant Type( grant_types[1] );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Get Grant Types

**Syntaxe :** oauth2 &lt;&lt; Get Grant Types

**Description :** Obtient les types d&apos;autorisation OAuth2 JMP pris en charge.

**JMP Version ajoutée :** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
oauth2 = New OAuth2();
grant_types = oauth2 << Get Grant Types();
Show( grant_types );

```

#### Get ID Token

**Syntaxe :** oauth2 &lt;&lt; Get ID Token()

**Description :** Obtient le token d&apos;identification OAuth2 actuel. Lance la communication avec le serveur d&apos;autorisation, si nécessaire.

**JMP Version ajoutée :** 15

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

**Syntaxe :** oauth2 &lt;&lt; Get Refresh Token()

**Description :** Obtient le token de rafraîchissement OAuth2 actuel. Lance la communication avec le serveur d&apos;autorisation, si nécessaire.

**JMP Version ajoutée :** 15

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
client_id =
"581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
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

**Syntaxe :** oauth2 &lt;&lt; Get Scope()

**Description :** Obtient la portée OAuth2 actuelle.

**JMP Version ajoutée :** 15

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
client_id =
"581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
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

**Syntaxe :** oauth2 &lt;&lt; Get Window Title

**Description :** Récupère le titre de la fenêtre OAuth2.

**JMP Version ajoutée :** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );
title = oauth2 << Get Window Title;

```

#### Grant Type

**Syntaxe :** oauth2 &lt;&lt; Grant Type("Authorization Code" | "Client Credentials" | "Refresh Token")

**Description :** Le type d&apos;autorisation demandé doit être l&apos;un de ceux pris en charge par JMP et le fournisseur d&apos;autorisation OAuth2.

**JMP Version ajoutée :** 15

```jsl


oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
grant = oauth2 << Get Grant Type();
Show( grant );

```

#### Has Auth Response  Error

**Syntaxe :** obj &lt;&lt; Has Auth Response Error

**JMP Version ajoutée :** 18

#### Has Authentication Response  Error

**Syntaxe :** oauth2 &lt;&lt; Has Authentication Response Error()

**Description :** Recherche une erreur de réponse d&apos;authentification OAuth2.

**JMP Version ajoutée :** 18

```jsl


oauth2 = New OAuth2();
If( oauth2 << Has Authentication Response Error(),
	Show( oauth2 << Get Authentication Response Error )
);

```

#### Is Expired

**Syntaxe :** oauth2 &lt;&lt; Is Expired()

**Description :** Renvoie si le token d&apos;accès OAuth2 actuel a expiré.

**JMP Version ajoutée :** 15

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
client_id =
"581786658708-elflankerquo1a6vsckabbhn25hclla0.apps.googleusercontent.com";
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

**Syntaxe :** oauth2 &lt;&lt; Login Hint(hint)

**Description :** Définit la valeur login_hint. login_hint est un paramètre FACULTATIF de la demande d&apos;authentification qui sert « d&apos;indice » au serveur d&apos;autorisation concernant l&apos;identifiant de connexion que l&apos;utilisateur final pourra utiliser pour se connecter (si nécessaire).

**JMP Version ajoutée :** 17

```jsl


oauth2 = New OAuth2();
oauth2 << Login Hint( "jmp_user@jmp.com" );

```

#### Password

**Syntaxe :** oauth2 &lt;&lt; Password(...)

**Description :** Définit le mot de passe OAuth2 pour le type d&apos;autorisation par mot de passe.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

```

#### Redirect URL

**Syntaxe :** oauth2 &lt;&lt; Redirect URL(...)

**Description :** Définit l&apos;URL de redirection OAuth2 qui a été utilisé lors de la création du service Web.

**JMP Version ajoutée :** 15

```jsl


redirect_url = "http://localhost/myapp/";
oauth2 = New OAuth2();
oauth2 << Redirect URL( redirect_url );

```

#### Scope

**Syntaxe :** oauth2 &lt;&lt; Scope(...)

**Description :** Définit la portée OAuth2, une façon de limiter l&apos;accès d&apos;une application à un compte.

**JMP Version ajoutée :** 15

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

**Syntaxe :** oauth2 &lt;&lt; Set Window Title(title)

**Description :** Définit le titre de la fenêtre OAuth2.

**JMP Version ajoutée :** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Set Window Title( "Authorization Window" );

```

#### Token Fields

**Syntaxe :** obj &lt;&lt; Token Fields

**Description :** Un tableau associatif de paires de clés et de valeurs à utiliser dans la chaîne de requête de l&apos;URL du token OAuth2.

**JMP Version ajoutée :** 15

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

**Syntaxe :** oauth2 &lt;&lt; Token URL(...)

**Description :** Définit l&apos;URL du token OAuth2.

**JMP Version ajoutée :** 15

```jsl


oauth2 = New OAuth2();
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
oauth2 << Token URL( token_url );

```

#### Use Default Window Title

**Syntaxe :** oauth2 &lt;&lt; Use Default Window Title(1 | 0)

**Description :** Récupère le titre de la fenêtre OAuth2.

**JMP Version ajoutée :** 16

```jsl


oauth2 = New OAuth2();
oauth2 << Use Default Window Title( 1 );
title = oauth2 << Get Window Title;

```

#### Username

**Syntaxe :** oauth2 &lt;&lt; Username(...)

**Description :** Définit le nom d&apos;utilisateur OAuth2 pour le type d&apos;autorisation par mot de passe.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

```

