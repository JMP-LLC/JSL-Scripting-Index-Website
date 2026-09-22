# JMP Live Result



## Item Messages

### As Scriptable

**Syntax:** jmplivereport = jmpliveresult &lt;&lt; As Scriptable()

**Description:** Depending on the operation that produced the JMP Live Result, returns a JMP Live Report, JMP Live Folder or JMP Live Post for further scripting operations.

**JMP Version Added:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));worked = jmpliveresult << Succeeded();If( worked == 1,	folder = jmpliveresult << As Scriptable;	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );	Write( "\!nTitle: ", folder << Get Title ););

```

### Get Error Message

**Syntax:** messagetext = jmpliveresult &lt;&lt; Get Error Message()

**Description:** Gets any message produced by the last operation as a string.

**JMP Version Added:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );httpstatus = jmpliveresult << Get HTTP Status();httpmessage = jmpliveresult << Get Error Message();Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**Syntax:** statuscode = jmpliveresult &lt;&lt; Get HTTP Status()

**Description:** Gets the HTTP status code from the last operation. This is an industry standard integer code.

**JMP Version Added:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );httpstatus = jmpliveresult << Get HTTP Status();httpmessage = jmpliveresult << Get Error Message();Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**Syntax:** liveconnection = jmpliveresult &lt;&lt; Get JMP Live()

**Description:** Retrieves the underlying JMP Live Connection object.

**JMP Version Added:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));secondliveconnection = jmpliveresult << Get JMP Live();name = secondliveconnection << Get Connection Name();Write( "\!nConnection Name: ", name );

```

### Get Response Type

**Syntax:** responsevalue = jmpliveresult &lt;&lt; Get Response Type()

**Description:** Gets the type of response produced by the last operation as a string.

**JMP Version Added:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));worked = jmpliveresult << Succeeded();If( worked == 1,	folder = jmpliveresult << As Scriptable;	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );	Write( "\!nTitle: ", folder << Get Title ););

```

### Succeeded

**Syntax:** success = jmpliveresult &lt;&lt; Succeeded()

**Description:** Returns whether the last action was successful (1) or not (0).

**JMP Version Added:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));worked = jmpliveresult << Succeeded();If( worked == 1,	folder = jmpliveresult << As Scriptable;	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );	Write( "\!nTitle: ", folder << Get Title ););

```

