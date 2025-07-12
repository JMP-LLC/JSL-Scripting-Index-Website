# JMP Live Result



## Messages d'éléments

### As Scriptable

**Syntaxe :** jmplivereport = jmpliveresult << As Scriptable()

**Description :** Selon l&apos;opération qui a produit le Résultat JMP Live, renvoie un Rapport JMP Live, un Dossier JMP Live ou un Post JMP Live pour les opérations de script postérieures.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

### Get Error Message

**Syntaxe :** messagetext = jmpliveresult << Get Error Message()

**Description :** Récupère tous les messages issus de la dernière opération en tant que chaîne.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**Syntaxe :** statuscode = jmpliveresult << Get HTTP Status()

**Description :** Récupère le code d&apos;état HTTP de la dernière opération. Il s&apos;agit d&apos;un nombre entier standard dans l&apos;industrie.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**Syntaxe :** liveconnection = jmpliveresult << Get JMP Live()

**Description :** Récupère l&apos;objet Connexion JMP Live sous-jacent.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
secondliveconnection = jmpliveresult << Get JMP Live();

name = secondliveconnection << Get Connection Name();
Write( "\!nConnection Name: ", name );

```

### Get Response Type

**Syntaxe :** responsevalue = jmpliveresult << Get Response Type()

**Description :** Récupère le type de réponse issu de la dernière opération en tant que chaîne.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

### Succeeded

**Syntaxe :** success = jmpliveresult << Succeeded()

**Description :** Renvoie 1 si la dernière action était réussie ou 0 sinon.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

