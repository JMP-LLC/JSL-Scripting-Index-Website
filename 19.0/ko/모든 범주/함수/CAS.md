# CAS



### CAS Connect

**구문:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**설명:** 새 CAS 서버에 연결합니다. CAS 연결에는 URL, Username, Password 인수와 선택적 Prompt 및 Session이 사용됩니다. Prompt는 IfNeeded, Always 또는 Never일 수 있습니다. Prompt 인수가 IfNeeded 또는 Always이면 URL, Username, Password를 생략할 수 있습니다. Prompt의 기본값은 Never입니다. 기존 CAS 세션에 다시 연결하려면 Session을 사용하면 됩니다. 해당 세션은 연결에 사용된 URL, Username 및 Password에 대해 유효해야 합니다. 선택적 Certificates 인수는 CAS에 https로 연결하기 위해 신뢰할 수 있는 인증서를 제공하는 데 유용합니다. 선택적 Verify Certificates 또는 No Verify Certificates 인수는 자체 서명된 인증서를 일시적으로 수락하는 데 유용합니다. 선택적 Proxy Server 인수는 프록시 환경에서 프록시 호스트를 제공하는 데 유용합니다. 선택적 Proxy User 인수는 프록시 환경에서 사용자/암호 정보를 제공하는 데 유용합니다. 선택적 Bypass Proxy 인수는 특정 호스트에 대해 프록시를 우회하는 데 유용합니다. 선택적 Timeout 인수는 CAS 연결 작업에 대한 타임아웃 값을 설정합니다. 선택적 Authorization Method 인수는 JMP에서 CAS에 연결하는 방법을 지정합니다. 이는 CAS 배포에 따라 다릅니다.

**JMP추가된 버전:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ), Certificates( "c:\mycerts.crt" ) );

```

### CAS Delete Table

**구문:** CAS Delete Table(tablename, &lt;remove&gt;)

**설명:** 이 작업은 파일 시스템 테이블을 삭제합니다. 메모리 내 테이블은 영향을 받지 않습니다. Quiet를 지정하면 존재하지 않는 테이블에 대한 오류가 표시되지 않습니다. remACs를 지정하면 테이블에 대한 액세스 제어가 제거됩니다. Remove를 지정하면 메모리의 테이블도 제거됩니다.

**JMP추가된 버전:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**구문:** CAS Disconnect()

**설명:** CAS 서버와의 연결을 끊고 필요에 따라 세션을 종료합니다. 기본적으로는 연결이 끊어질 때 세션이 종료됩니다.

**JMP추가된 버전:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**구문:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**설명:** 테이블을 CAS 서버로 내보냅니다. jmp_data_table은 내보낼 JMP 데이터 테이블이고, cas_libref 및 cas_dataset은 CAS 서버의 대상 위치입니다. 명명된 선택적 인수는 Save(1|0)입니다. 테이블을 CAS로 내보낼 경우 Save 옵션을 사용하지 않으면 테이블이 CAS 파일 시스템에 저장되지 않습니다. 대부분의 CAS 작업은 메모리에서 수행됩니다.

**JMP추가된 버전:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**구문:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**설명:** 사용 가능한 CAS 데이터 집합의 목록을 가져옵니다. 이 데이터 집합은 CAS 파일 시스템에서 찾을 수 있습니다. 선택적 인수는 데이터 집합 목록을 CAS 라이브러리로 제한합니다. 인수를 사용하지 않을 경우에는 데이터 집합 목록에 정규화된 데이터 집합 이름(library.dataset)이 포함됩니다. 인수를 사용할 경우에는 데이터 집합 목록에 데이터 집합 이름이 포함됩니다.

**JMP추가된 버전:** 15

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

**구문:** y = CAS Get Libraries()

**설명:** 사용 가능한 CAS 라이브러리의 목록을 가져옵니다.

**JMP추가된 버전:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**구문:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**설명:** CAS 서버에서 테이블을 가져옵니다. 명명된 선택적 인수는 Invisible(0|1), Private(0|1) 및 UseLabelsForVarNames(0|1)입니다.

**JMP추가된 버전:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**구문:** CAS Is Connected

**설명:** 활성 CAS 서버 연결이 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**구문:** CAS Remove Table(tablename, &lt;delete&gt;)

**설명:** 이 작업은 메모리 내 테이블을 제거합니다. 저장 작업으로 생성된 파일은 영향을 받지 않습니다. 삭제를 지정하면 해당 테이블이 파일 시스템에서도 삭제됩니다.

**JMP추가된 버전:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**구문:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**설명:** SAS CAS 테이블의 JSON 텍스트를 JMP 데이터 테이블로 변환합니다.

**JMP추가된 버전:** 15

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

**구문:** CAS Terminate Sessions

**설명:** 현재 사용자 소유의 모든 CAS 세션을 종료합니다.

**JMP추가된 버전:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Current CAS Connection

**구문:** Current CAS Connection()

**설명:** 현재 CAS 서버에 대한 연결을 가져옵니다.

**JMP추가된 버전:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### New CAS Action

**구문:** action = New CAS Action(...)

**설명:** CAS 작업을 생성합니다.

**JMP추가된 버전:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**구문:** action = New CAS DATA Step Action(...)

**설명:** CAS DATA 스텝 작업을 생성합니다.

**JMP추가된 버전:** 15

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

**구문:** cas = New CAS Server(&lt;...&gt;)

**설명:** 새 CAS 서버를 생성합니다.

**JMP추가된 버전:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

