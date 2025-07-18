# CAS



### CAS Connect

**構文:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**説明:** 新しいCASサーバーに接続する。CAS Connectには、URL、User name、Passwordの引数、およびオプションで PromptとSessionの引数を指定できる。Prompt引数には、IfNeeded、Always、Neverのいずれかを指定する。Prompt引数がIfNeededまたはAlwaysの場合、URL、User name、Passwordは省略できる。Promptのデフォルト値はNever。Sessionは、既存のCASセッションへの再接続に使用できる。セッションは、接続に使用されているURL、ユーザ名、パスワードで使用可能なものでなければならない。オプションのCertificates引数は、CASへのHTTPS接続の際に信頼された証明書を提供するのに使用できる。オプションのVerify Certificates引数またはNo Verify Certificates引数は、自己署名証明書を一時的に受け入れるのに使用できる。オプションのProxy Server引数は、プロキシ環境でプロキシホストを指定するのに使用できる。オプションのProxy User引数は、プロキシ環境のためのユーザ名とパスワード情報を指定するのに使用できる。オプションのBypass Proxy引数は、特定のホストについてプロキシをバイパスする場合に使用する。オプションのTimeout引数は、CAS接続処理のタイムアウト値を設定する。オプションのAuthorization Method引数は、JMPからCASへの接続方法を指定する。これは、CASのデプロイメントによって異なる。

**JMP追加されたバージョン:** 15

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

**構文:** CAS Delete Table(tablename, &lt;remove&gt;)

**説明:** このアクションはファイルシステムのテーブルを削除する。メモリ上のテーブルには影響しない。Quietを指定すると、存在しないテーブルについてのエラーは表示されない。remACsを指定すると、テーブルのアクセス制御が削除される。Removeを指定すると、テーブルがメモリから削除される。

**JMP追加されたバージョン:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**構文:** CAS Disconnect()

**説明:** CASサーバーへの接続を切断する。オプションでセッションを終了するかどうかも指定できる。デフォルトでは、接続の切断と共にセッションが終了する。

**JMP追加されたバージョン:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**構文:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**説明:** CASサーバーにテーブルを書き出す。jmp_data_tableは書き出すJMPデータテーブル、cas_librefおよびcas_datasetはCASサーバー上にある書き出し先の場所。オプションとして、名前付き引数のSave(1|0)がある。Saveオプションが指定されない限り、CASのファイルシステムまでは書き込まれない。多くのCASアクションはインメモリで行われる。

**JMP追加されたバージョン:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**構文:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**説明:** 利用可能なCASデータセットのリストを取得する。これらのデータセットはCASファイルシステム上にある。オプションの引数により、指定したライブラリのCASデータセットのみのリストも取得できる。引数を指定しない場合、データセットのリストは「ライブラリ名.データセット名」の完全修飾の形式で戻される。引数が指定されると、データセット名のみのリストとなる。

**JMP追加されたバージョン:** 15

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

**構文:** y = CAS Get Libraries()

**説明:** 使用可能なCASライブラリのリストを取得する。

**JMP追加されたバージョン:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**構文:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**説明:** CASサーバーからテーブルを読み込む。オプションの名前付きの引数として、Invisible(0|1)、Private(0|1)、UseLabelsForVarNames(0|1)がある。

**JMP追加されたバージョン:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**構文:** CAS Is Connected

**説明:** アクティブなCASサーバー接続がある場合は1を戻し、そうでない場合は0を戻す。

**JMP追加されたバージョン:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**構文:** CAS Remove Table(tablename, &lt;delete&gt;)

**説明:** インメモリ上のテーブルを削除する。Saveアクションによりファイルに保存されているテーブルは削除されない。ファイルに保存されているテーブルは、Delete Tableにより削除される。

**JMP追加されたバージョン:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**構文:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**説明:** SAS CASテーブルのJSONテキストをJMPデータテーブルに変換する。

**JMP追加されたバージョン:** 15

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

**構文:** CAS Terminate Sessions

**説明:** 現在のユーザによって実行されているCASセッションをすべて終了する。

**JMP追加されたバージョン:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Current CAS Connection

**構文:** Current CAS Connection()

**説明:** 現在のCASサーバー接続を取得する。

**JMP追加されたバージョン:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### New CAS Action

**構文:** action = New CAS Action(...)

**説明:** CASアクションを作成する。

**JMP追加されたバージョン:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**構文:** action = New CAS DATA Step Action(...)

**説明:** CAS DATAステップアクションを作成する。

**JMP追加されたバージョン:** 15

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

**構文:** cas = New CAS Server(&lt;...&gt;)

**説明:** 新しいCASサーバーを作成する。

**JMP追加されたバージョン:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

