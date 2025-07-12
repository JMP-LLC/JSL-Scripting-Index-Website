# JMP Live Result



## Messaggi degli elementi

### As Scriptable

**Sintassi:** jmplivereport = jmpliveresult << As Scriptable()

**Descrizione:** In base all&apos;operazione che ha prodotto il risultato di JMP Live, restituisce un report di JMP Live, una cartella di JMP Live o un post di JMP Live per ulteriori operazioni di scripting.

**JMP Versione aggiunta:** 16

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

**Sintassi:** messagetext = jmpliveresult << Get Error Message()

**Descrizione:** Ottiene qualsiasi messaggio prodotto dall&apos;ultima operazione come stringa.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**Sintassi:** statuscode = jmpliveresult << Get HTTP Status()

**Descrizione:** Ottiene il codice di stato HTTP dall&apos;ultima operazione. Si tratta di un codice standard di settore a numeri interi.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**Sintassi:** liveconnection = jmpliveresult << Get JMP Live()

**Descrizione:** Recupera l&apos;oggetto Connessione a JMP Live sottostante.

**JMP Versione aggiunta:** 16

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

**Sintassi:** responsevalue = jmpliveresult << Get Response Type()

**Descrizione:** Ottiene il tipo di risposta prodotta dall&apos;ultima operazione come stringa.

**JMP Versione aggiunta:** 16

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

**Sintassi:** success = jmpliveresult << Succeeded()

**Descrizione:** Indica se l&apos;ultima azione ha avuto successo (1) o meno (0).

**JMP Versione aggiunta:** 16

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

