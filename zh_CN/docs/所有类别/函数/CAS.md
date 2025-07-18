# CAS



### CAS Connect

**语法:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**说明:** 连接至新的 CAS 服务器。CAS 连接使用 URL、User name、Password 参数以及可选参数 Prompt 和 Session。Prompt 可以为 IfNeeded、Always 或 Never。若 Prompt 参数为 IfNeeded 或 Always，则可以忽略 URL、user name 和 password。Prompt 的默认值为 Never。Session 可用于重新连接至现有的 CAS 会话。会话必须对连接中使用的 URL、user name 和 password 有效。可选 Certificates 参数用于为与 CAS 的 https 连接提供受信任的证书 。可选的 Verify Certificates 或 No Verify Certificates 参数用于临时接受自签名证书。可选的 Proxy Server 参数用于在代理环境中提供代理主机。可选的 Proxy User 参数用于提供代理环境的用户和密码信息。可选的 Bypass Proxy 参数用于绕过某些主机的代理。可选 Timeout 参数可设置 CAS 连接操作的超时值。可选 Authorization Method 参数指定 JMP 如何与 CAS 连接。这取决于 CAS 部署。

**JMP添加的版本:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect(
	URL( url ),
	Username( "myCas_user" ),
	Prompt( Always ),
	Certificates( "c:\mycerts.crt" )
);

```

### CAS Delete Table

**语法:** CAS Delete Table(tablename, &lt;remove&gt;)

**说明:** 该操作删除文件系统表。in memory 表不受影响。指定“静音”将隐藏不存在的表的错误。指定 remACs 将删除表的访问控制。指定“删除”还将从内存中删除表。

**JMP添加的版本:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**语法:** CAS Disconnect()

**说明:** 与 CAS 服务器断开连接并且可以选择终止会话。默认情况下，断开连接时会终止会话。

**JMP添加的版本:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**语法:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**说明:** 将表导出至 CAS 服务器。jmp_data_table 是要导出的 JMP 数据表，而 cas_libref 和 cas_dataset 是 CAS 服务器上的目标位置。可选的命名参数为 Save(1|0)。当表导出至 CAS 时，它不会保留到 CAS 文件系统，除非使用了“保存”选项。大多数 CAS 操作在内存中执行。

**JMP添加的版本:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**语法:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**说明:** 获取可用的 CAS 数据集列表。这些数据集位于 CAS 文件系统中。可选参数将数据集列表限制为 CAS 逻辑库。若没有使用参数，则数据集列表包含完全限定的数据集名称 (library.dataset)。若使用了参数，则数据集列表是数据集名称的列表。

**JMP添加的版本:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );

```

### CAS Get Libraries

**语法:** y = CAS Get Libraries()

**说明:** 获取可用 CAS 逻辑库的列表。

**JMP添加的版本:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**语法:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**说明:** 从 CAS 服务器导入表。可选的命名参数为 Invisible(0|1)、Private(0|1) 和 UseLabelsForVarNames(0|1)。

**JMP添加的版本:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**语法:** CAS Is Connected

**说明:** 若存在活动的 CAS 服务器连接，则返回 1。否则返回 0。

**JMP添加的版本:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**语法:** CAS Remove Table(tablename, &lt;delete&gt;)

**说明:** 该操作会删除 in-memory 表。使用保存操作创建的表不受影响。指定删除也将从文件系统中删除表。

**JMP添加的版本:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**语法:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**说明:** 将 SAS CAS 表 JSON 文本转换为 JMP 数据表。

**JMP添加的版本:** 15

```jsl


json =
"\[
{
  "_ctb": true,
  "label": "Selected Rows from Table BIG CLASS",
  "name": "Fetch",
  "title": "Selected Rows from Table BIG CLASS",
  "schema": [
    {
      "format": "",
      "label": "",
      "name": "_Index_",
      "type": "int",
      "width": 4
    },
    {
      "format": "",
      "label": "",
      "name": "name",
      "type": "string",
      "width": 9
    },
    {
      "format": "",
      "label": "",
      "name": "age",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "sex",
      "type": "string",
      "width": 1
    },
    {
      "format": "",
      "label": "",
      "name": "height",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "weight",
      "type": "double",
      "width": 8
    }
  ],
  "rows": [
    [
      1,
      "KATIE",
      12,
      "F",
      59,
      95
    ],
    [
      2,
      "LOUISE",
      12,
      "F",
      61,
      123
    ],
    [
      3,
      "JANE",
      12,
      "F",
      55,
      74
    ],
    [
      4,
      "JACLYN",
      12,
      "F",
      66,
      145
    ],
    [
      5,
      "LILLIE",
      12,
      "F",
      52,
      64
    ],
    [
      6,
      "TIM",
      12,
      "M",
      60,
      84
    ],
    [
      7,
      "JAMES",
      12,
      "M",
      61,
      128
    ],
    [
      8,
      "ROBERT",
      12,
      "M",
      51,
      79
    ],
    [
      9,
      "BARBARA",
      13,
      "F",
      60,
      112
    ],
    [
      10,
      "ALICE",
      13,
      "F",
      61,
      107
    ],
    [
      11,
      "SUSAN",
      13,
      "F",
      56,
      67
    ],
    [
      12,
      "JOHN",
      13,
      "M",
      65,
      98
    ],
    [
      13,
      "JOE",
      13,
      "M",
      63,
      105
    ],
    [
      14,
      "MICHAEL",
      13,
      "M",
      58,
      95
    ],
    [
      15,
      "DAVID",
      13,
      "M",
      59,
      79
    ],
    [
      16,
      "JUDY",
      14,
      "F",
      61,
      81
    ],
    [
      17,
      "ELIZABETH",
      14,
      "F",
      62,
      91
    ],
    [
      18,
      "LESLIE",
      14,
      "F",
      65,
      142
    ],
    [
      19,
      "CAROL",
      14,
      "F",
      63,
      84
    ],
    [
      20,
      "PATTY",
      14,
      "F",
      62,
      85
    ]
  ]
}
]\";
dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**语法:** CAS Terminate Sessions

**说明:** 终止当前用户拥有的全部 CAS 会话。

**JMP添加的版本:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Current CAS Connection

**语法:** Current CAS Connection()

**说明:** 获取与当前 CAS 服务器的连接。

**JMP添加的版本:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### New CAS Action

**语法:** action = New CAS Action(...)

**说明:** 创建 CAS 操作。

**JMP添加的版本:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**语法:** action = New CAS DATA Step Action(...)

**说明:** 创建 CAS DATA 步操作。

**JMP添加的版本:** 15

```jsl


cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";
action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );

```

### New CAS Server

**语法:** cas = New CAS Server(&lt;...&gt;)

**说明:** 创建新的 CAS 服务器。

**JMP添加的版本:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

