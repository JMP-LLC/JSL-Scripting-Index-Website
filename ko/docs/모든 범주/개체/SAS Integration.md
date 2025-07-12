# SAS Integration



## 연결된 생성자

### Check SAS Dependencies

**구문:** Check SAS Dependencies()

**설명:** SAS Integration 종속성 상태를 확인합니다. 성공하면 1을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies();
	Print( "Dependencies are installed" );
,
	Print( "Dependencies are installed" )
);

```

### Current SAS Connection

**구문:** sas = Current SAS Connection()

**설명:** 활성 SAS 서버 연결(있는 경우)을 스크립트 가능 개체로 반환합니다.

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**구문:** array = Current SAS Connections()

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
array = Current SAS Connections();
array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**구문:** Install SAS Dependencies()

**설명:** SAS Integration에 필요한 종속성을 설치합니다. 성공하면 1을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies(),
	Print( "Dependencies are installed" )
);

```

### SAS Connect

**구문:** SAS Connect(<( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**설명:** SAS 연결을 엽니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );

```

**예제 2**

```jsl

Names Default To Here( 1 );

iom_win = New Data Connector( Type( "SAS Local" ) );
SAS Connect( iom_win );
sas = Current SAS Connection();
librefs = sas << Get Librefs();
For( i = 1, i <= N Items( librefs ), i++,
	tables = sas << Get Data Sets( librefs[i] );
	Write( "\!n\!nLibref:" || librefs[i] );
	Write( "\!nTables:" || Char( tables ) );
);
sas << Disconnect();

```

**예제 3**

```jsl

Names Default To Here( 1 );
SAS Connect(
	New Data Connector(
		ID( "com.jmp.sas_remote" ),
		Port( 8591 ),
		User( "jmpuser" ),
		Host Name( "sashost.com" )
	),
	Prompt( If Needed )
);

```

**예제 4**

```jsl

Names Default To Here( 1 );
SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**구문:** Update SAS Dependencies()

**설명:** SAS Integration에 필요한 종속성을 업데이트합니다. 성공하면 1을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

If( Check SAS Dependencies(),
	Update SAS Dependencies(),
	Print( "Dependencies are not installed" )
);

```

## SAS Results

### 항목 메시지

#### Get Log

**구문:** obj << Get Log

**설명:** 활성 SAS 서버 연결의 로그 창 내용을 포함하는 문자열을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ), GetSASLog( False ) );
result = sas << Get Results;
log = result << Get Log();
Show( log );

```

#### Get Output

**구문:** obj << Get Output

**설명:** 활성 SAS 서버 연결의 로그 창 내용을 포함하는 문자열을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Results;
out = result << Get Output();
Show( out );

```

#### Get Output Datasets

**구문:** obj << Get Output Datasets

**설명:** 활성 SAS 서버 연결의 로그 창 내용을 포함하는 문자열을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc corr data=sashelp.class
    outp=pearson outs=spearman;
    var height weight;
    run;",
	NoOutputWindow( True )
);
result = sas << Get Results;
data = result << Get Output Datasets;
Show( data );

```

## SAS Server

### 항목 메시지

#### Connect

**구문:** sas << Connect( <( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**설명:** 연결이 끊어진 SAS 서버 연결 개체를 다시 연결하려고 합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();
sas << Connect();

```

#### Current CAS Connection

**구문:** result = sas << Current CAS Connection()

**설명:** 현재 CAS 서버에 대한 연결을 가져옵니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
Show( cas );

```

**예제 2**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
connected = cas << Is Connected();
Show( connected );

```

#### Data Set Exists

**구문:** result = sas << Data Set Exists( libref, dsname )

**설명:** SAS 데이터 집합이 있으면 1을 반환합니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP", "AIRLINE" );
Show( result );

```

**예제 2**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP.AIRLINE" );
Show( result );

```

#### Disconnect

**구문:** obj << Disconnect

**설명:** 이 SAS 서버의 연결을 끊습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();

```

#### Export Data

**구문:** y = sas << Export Data( dt, libref, dataset, <named_arguments> );

y = sas << SAS Export Data( dt, libref.dataset, <named_arguments> )

**설명:** JMP 데이터 테이블을 활성 SAS 서버 연결의 SAS 데이터 집합으로 내보냅니다. 명명된 선택적 인수에는 Columns(list|col1,col2,...,coln), 문자열 값 인수 Password, AlterPassword, ReadPassword, WritePassword, 부울 값 인수 HonorExcludedRows, PreserveSASColumnNames, PreserveSASFormats, ReplaceExisting, ExistingAlterPassword, SaveJMPMetadata 등이 있습니다. 내보내기가 성공하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

#### Get Data Sets

**구문:** result = sas << Get Data Sets( libref )

**설명:** SAS 라이브러리에 정의된 데이터 집합 목록을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Data Sets( "SASHELP" );
Show( result );

```

#### Get Host Name

**구문:** var = sas << Get Host Name( )

**설명:** SAS 서버의 호스트 이름 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Host Name();
Show( result );

```

#### Get Lib Refs

**구문:** result = sas << Get Lib Refs()

**설명:** 활성 SAS 서버 연결에서 현재 정의된 SAS 라이브러리 참조 목록을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Lib Refs();
Show( result );

```

#### Get Log

**구문:** result = sas << Get Log()

**설명:** 활성 SAS 서버 연결의 로그 창 내용을 포함하는 문자열을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ), GetSASLog( False ) );
result = sas << Get Log();
Show( result );

```

#### Get Macro Var

**구문:** var = sas << GetMacroVar( "name" )

**설명:** SAS 매크로 변수의 값 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var( "SYSVLONG" );
Show( result );

```

#### Get Macro Var Names

**구문:** var = sas << GetMacroVarNames( )

**설명:** SAS 매크로 변수 목록 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var Names();
Show( result );

```

#### Get Option Names

**구문:** var = sas << GetOptionNames( )

**설명:** SAS 옵션 목록 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Names();
Show( result );

```

#### Get Option Value

**구문:** var = sas << Get Option Value( "name" )

**설명:** SAS 옵션의 값 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Value( "MEMLIB" );
Show( result );

```

#### Get Output

**구문:** result = sas << Get Output()

**설명:** 활성 SAS 서버 연결에 마지막으로 전송된 SAS 코드의 출력 목록을 포함하는 문자열을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Output();
Show( result );

```

#### Get Results

**구문:** result = sas << Get Results()

**설명:** 이 서버에 대한 마지막 전송 결과 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Results();
Show( result );

```

#### Get Submit Status

**구문:** result = sas << Get Submit Status()

**설명:** 이 서버에 대한 마지막 전송 상태 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Submit Status;
Show( result );

```

#### Get Var Info

**구문:** result = sas << Get Var Info( libref, dataset );

result = sas << Get Var Info( libref.dataset )

**설명:** SAS 데이터 집합의 변수에 대한 정보 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Info( "SASHELP", "CLASS" );
Show( result );

```

#### Get Var Names

**구문:** result = sas << Get Var Names( libref, dataset );

result = sas << SAS Get Var Names( libref.dataset )

**설명:** 활성 SAS 서버 연결에서 지정된 데이터 집합에 포함된 변수 이름을 가져옵니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Names( "SASHELP", "CLASS" );
Show( result );

```

#### Get Version

**구문:** ver = sas << GetVersion( < Long > )

**설명:** SAS 버전 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Version;
Show( result );

```

#### Get Work Folder

**구문:** obj << Get Work Folder

**설명:** 서버의 WORK 라이브러리 폴더 가져오기

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Work Folder;
Show( result );

```

#### Import Data

**구문:** dt = sas << Import Data( libref, dataset, <named_arguments> );

dt = sas << Import Data( libref.dataset|path, <named_arguments> )

**설명:** 활성 SAS 서버 연결의 SAS 데이터 집합을 JMP 데이터 테이블로 가져옵니다. 명명된 선택적 인수에는 Sample(<named_arguments>), Columns(list|col1,col2,...,coln), 문자열 값 인수 Where, 부울 값 인수 ConvertCustomFormats, Invisible, UseLabelsForVarNames, SQLTableVariable 등이 있습니다. JMP 데이터 테이블 개체를 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
dt = sas << Import Data( "SASHELP.CLASS" );

```

#### List Output Data Sets

**구문:** sas << List Output Data Sets(sas code)

**설명:** 지정된 SAS 코드의 출력 데이터 집합을 나열합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
datasets = sas << List Output Datasets(
	"\[
proc means data=sashelp.class;
    var age height weight;
run;
]\"
);
Show( datasets );

```

#### Name

**구문:** serverName = sas << Name

**설명:** 서버 이름을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
serverName = sas << Name;
Show( serverName );

```

#### Submit

**구문:** result = sas << Submit( <GetSASLog(<True|False|OnError>, <OnSubmitComplete(script)>, <OpenOutputDatasets(<All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN>)>, <ODSFormat>, <ODS Style>, <Title>, <OpenODSResults>, <NoOutputWindow>

**설명:** SAS 코드를 활성 SAS 서버 연결에 전송합니다. 성공하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",
	ODSStyle( "default" ),
	OpenODSResults( true ),
	OpenOutputDatasets( All )
);

```

#### Submit File

**구문:** result = sas << Submit File( "filename.sas" )

**설명:** SAS 코드가 포함된 파일을 활성 SAS 서버 연결에 전송합니다. 명명된 선택적 인수는 SAS Submit의 인수와 동일합니다. 성공하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit File( "MySASProgram.sas" );

```

