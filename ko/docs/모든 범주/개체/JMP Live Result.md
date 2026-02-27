# JMP Live Result



## 항목 메시지

### As Scriptable

**구문:** jmplivereport = jmpliveresult &lt;&lt; As Scriptable()

**설명:** JMP Live 결과를 생성한 작업에 따라 추가 스크립트 작업을 위해 JMP Live 보고서, JMP Live 폴더 또는 JMP Live 게시물을 반환합니다.

**JMP추가된 버전:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));worked = jmpliveresult << Succeeded();If( worked == 1,	folder = jmpliveresult << As Scriptable;	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );	Write( "\!nTitle: ", folder << Get Title ););

```

### Get Error Message

**구문:** messagetext = jmpliveresult &lt;&lt; Get Error Message()

**설명:** 마지막 작업에서 생성된 메시지를 문자열로 가져옵니다.

**JMP추가된 버전:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );httpstatus = jmpliveresult << Get HTTP Status();httpmessage = jmpliveresult << Get Error Message();Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**구문:** statuscode = jmpliveresult &lt;&lt; Get HTTP Status()

**설명:** 마지막 작업에서 HTTP 상태 코드를 가져옵니다. 이 값은 업계 표준 정수 코드입니다.

**JMP추가된 버전:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );httpstatus = jmpliveresult << Get HTTP Status();httpmessage = jmpliveresult << Get Error Message();Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**구문:** liveconnection = jmpliveresult &lt;&lt; Get JMP Live()

**설명:** 기본 JMP Live 연결 개체를 가져옵니다.

**JMP추가된 버전:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));secondliveconnection = jmpliveresult << Get JMP Live();name = secondliveconnection << Get Connection Name();Write( "\!nConnection Name: ", name );

```

### Get Response Type

**구문:** responsevalue = jmpliveresult &lt;&lt; Get Response Type()

**설명:** 마지막 작업에서 생성된 응답 유형을 문자열로 가져옵니다.

**JMP추가된 버전:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));worked = jmpliveresult << Succeeded();If( worked == 1,	folder = jmpliveresult << As Scriptable;	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );	Write( "\!nTitle: ", folder << Get Title ););

```

### Succeeded

**구문:** success = jmpliveresult &lt;&lt; Succeeded()

**설명:** 마지막 작업이 성공한 경우 1을 반환하고, 그렇지 않은 경우 0을 반환합니다.

**JMP추가된 버전:** 16

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Result Example Folder" ),	If Exists( "use" ));worked = jmpliveresult << Succeeded();If( worked == 1,	folder = jmpliveresult << As Scriptable;	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );	Write( "\!nTitle: ", folder << Get Title ););

```

