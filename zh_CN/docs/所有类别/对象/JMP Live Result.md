# JMP Live Result



## 项消息

### As Scriptable

**语法:** jmplivereport = jmpliveresult << As Scriptable()

**说明:** 根据生成 JMP Live 结果的操作，返回 JMP Live 报表、JMP Live 文件夹或 JMP Live 帖子进行进一步的脚本操作。

**JMP添加的版本:** 16

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

**语法:** messagetext = jmpliveresult << Get Error Message()

**说明:** 以字符串形式获取最后一个操作产生的任何消息。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**语法:** statuscode = jmpliveresult << Get HTTP Status()

**说明:** 从上一个操作获取 HTTP 状态代码。这是行业标准的整数代码。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**语法:** liveconnection = jmpliveresult << Get JMP Live()

**说明:** 检索底层 JMP Live 连接对象。

**JMP添加的版本:** 16

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

**语法:** responsevalue = jmpliveresult << Get Response Type()

**说明:** 以字符串形式获取上一个操作产生的响应类型。

**JMP添加的版本:** 16

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

**语法:** success = jmpliveresult << Succeeded()

**说明:** 返回当上一个操作是成功 (1) 还是不成功 (0)。

**JMP添加的版本:** 16

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

