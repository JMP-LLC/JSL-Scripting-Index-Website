# JMP Live Result



## Elementmeldungen

### As Scriptable

**Syntax:** jmplivereport = jmpliveresult << As Scriptable()

**Beschreibung:** Abhängig von dem Vorgang, der das JMP Live-Ergebnis erzeugt hat, wird ein JMP Live-Bericht, ein JMP Live-Ordner oder ein JMP Live-Beitrag für weitere Skriptvorgänge zurückgegeben.

**JMP Version hinzugefügt:** 16

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

**Syntax:** messagetext = jmpliveresult << Get Error Message()

**Beschreibung:** Ruft alle von der letzten Operation erzeugten Meldungen als Zeichenkette ab.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**Syntax:** statuscode = jmpliveresult << Get HTTP Status()

**Beschreibung:** Ruft den HTTP-Statuscode der letzten Operation ab. Dies ist ein ganzzahliger Code, der Industriestandard ist.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**Syntax:** liveconnection = jmpliveresult << Get JMP Live()

**Beschreibung:** Ruft das zugrundeliegende JMP Live-Verbindungsobjekt ab.

**JMP Version hinzugefügt:** 16

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

**Syntax:** responsevalue = jmpliveresult << Get Response Type()

**Beschreibung:** Ruft die von der letzten Operation erzeugte Art der Antwort als Zeichenkette ab.

**JMP Version hinzugefügt:** 16

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

**Syntax:** success = jmpliveresult << Succeeded()

**Beschreibung:** Gibt zurück, ob die letzte Aktion erfolgreich (1) war oder nicht (0).

**JMP Version hinzugefügt:** 16

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

