# File



### Close

**구문:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**설명:** 첫 번째 인수에 의해 참조되는 데이터 테이블(기본적으로 현재 데이터 테이블)을 닫습니다. 이 데이터 테이블은 기본적으로 현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 현재 데이터 테이블입니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.



두 번째 인수는 데이터 테이블을 저장하는 데 사용됩니다. 경로에 적절한 파일 확장자를 사용하여 데이터 테이블을 비 JMP 형식으로 저장하십시오. NoSave를 지정하면 변경 사항을 저장할지 또는 삭제할지 묻는 메시지가 표시되지 않습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**구문:** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**설명:** 데이터 테이블, 저널 또는 보고서 등, 특정 유형의 열린 리소스를 모두 닫습니다.



현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 창만 닫힙니다. 프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Convert File Path

**구문:** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**설명:** 변환된 경로를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS", "SAMPLE_IMAGES",
	"USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write( pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv ) || "\!N" )
);

```

### Copy Directory

**구문:** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**설명:** 파일을 한 디렉터리에서 다른 디렉터리로 복사합니다. 필요한 경우 하위 디렉터리도 복사합니다. 디렉터리 이름은 to 경로에 생성되며 to 경로의 일부가 아니어야 합니다. 디렉터리가 복사되면 1을 반환하고, 디렉터리를 복사할 수 없으면 0을 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " || Char( rc4 ) || " "
 || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**구문:** rc = Copy File( from, to )

**설명:** 파일을 같은 이름 또는 다른 이름으로 원래 파일에서 새 파일로 복사합니다. 대상의 전체 경로 및 파일 이름을 지정해야 합니다. 파일이 복사되면 1을 반환하고, 파일을 복사할 수 없으면 0을 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다. from 또는 to 경로가 올바르지 않거나, to 파일이 이미 있으면 파일을 복사할 수 없습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " || Char( rc4 );/* 0 1 1 1 0 */

```

### Create Directory

**구문:** rc = Create Directory( path )

**설명:** 디렉터리를 생성합니다. 디렉터리가 생성되면 1을 반환하고, 디렉터리가 이미 있거나 JMP에서 디렉터리를 생성할 수 없으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**구문:** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**설명:** 열려 있는 JMP 데이터 테이블에서 Excel 통합 문서를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {"Big Class", "Abrasion"}, {"Big", "Abrasive"} );

```

### Creation Date

**구문:** date = Creation Date( path )

**설명:** 파일 또는 디렉터리 생성 날짜를 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**구문:** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**설명:** 디렉터리와 포함된 파일 및 하위 디렉터리를 삭제합니다. 디렉터리가 삭제되면 1을 반환하고, 디렉터리를 삭제할 수 없거나 경로가 올바르지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**구문:** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**설명:** 파일을 삭제합니다. 파일이 삭제되면 1을 반환하고, 파일을 삭제할 수 없으면 0을 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**구문:** rc = Directory Exists( path )

**설명:** 디렉터리가 있는지 확인합니다. 경로가 있으면 1을 반환하고, 경로가 올바르지 않거나 없으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### File Exists

**구문:** rc = File Exists( path )

**설명:** 파일이 있는지 확인합니다. 파일 경로가 있으면 1을 반환하고, 경로가 올바르지 않거나 없으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**구문:** size = File Size( path )

**설명:** 지정된 경로의 파일 크기를 반환합니다. 파일 경로가 올바르지 않거나 없으면 결측값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**구문:** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**설명:** path에 지정된 디렉터리의 파일 이름 목록을 반환합니다. Recursive가 지정되지 않으면 디렉터리 이름이 목록에 포함됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Files In Directory( "$HOME" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Find All

**구문:** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**설명:** 데이터 테이블, 저널 또는 보고서와 같은 특정 유형의 열려 있는 리소스를 모두 찾습니다.



현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 창만 포함됩니다. 프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### Get Default Directory

**구문:** y = Get Default Directory()

**설명:** 추후 상대 경로에 대한 기준으로 사용할 JMP 기본 디렉터리를 반환합니다. 이 경로는 스크립트가 저장되는 경우 현재 실행 중인 스크립트를 포함하는 디렉터리입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Excel Worksheets

**구문:** list = Get Excel Worksheets("filepath")

**설명:** Excel 통합 문서 내에 워크시트 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get File Search Path

**구문:** y = Get File Search Path()

**설명:** 파일을 열기 위해 검색할 현재 디렉터리 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get File Search Path();

```

### Get Path Variable

**구문:** value = Get Path Variable( name )

**설명:** 경로 변수를 반환합니다. 경로 변수는 SAMPLE_DATA와 같은 이름입니다.

**JMP추가된 버전:** 버전 14 이전

**목록**

```jsl

Names Default To Here( 1 );
// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME", "USER_APPDATA", "ALL_HOME",
"BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS", "SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA",
"SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );
path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );

New Window( "Path Variables",
	<<Type( "Dialog" ),
	Outline Box( "Path Variables",
		H List Box(
			Button Box( "Open Paths",
				For Each( {row}, tbl << Get Selected Rows, {path},
					path = tbl[String Col Box( 2 )] << Get( row );
					Open( path );
				)
			),
			Button Box( "Copy Paths",
				If( N Items( tbl << Get Selected Rows ),
					Set Clipboard(
						Concat Items(
							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),
								tbl[String Col Box( 2 )] << Get( row )
							),
							"\!N"
						)
					)
				)
			)
		),
		window:tbl = Table Box(
			String Col Box( "Variable", path vars ),
			String Col Box( "Path", Transform Each( {var}, path vars, Get Path Variable( var ) ) ),
			<<Set Selectable Rows
		)
	)
);

```

**예제 1**

```jsl

Names Default To Here( 1 );
Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

### Google Sheet Export

**구문:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**설명:** 데이터 테이블을 새 Google 스프레드시트로 내보내거나 기존 Google 스프레드시트 내의 새 시트로 내보냅니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Google Sheet Export( dt, Email( email ), New Spreadsheet( "JSL Example" ), Sheet Name( "Example 1" ) );

```

### Google Sheet Import

**구문:** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**설명:** Google 스프레드시트 파일을 엽니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
spreadsheet = "https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/"; 
                                        
Google Sheet Import(
	Email( email ),
	Spreadsheet( spreadsheet ),
	Sheets( "Sheet1", "Sheet2" ),
	Sheet Settings(
		Has Column Headers( 0 ),
		Data Starts on Row( 1 ),
		Cell Range( "A1:C2" ),
		Import Cell Colors( 0 ),
		Suppress Empty Columns( 1 )
	)
);

```

### Is Directory

**구문:** rc = Is Directory( path )

**설명:** 지정된 경로가 디렉터리인지 확인합니다. 경로가 올바르지 않거나 없으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**구문:** rc = Is Directory Writable( path )

**설명:** 지정된 디렉터리 경로에 쓸 수 있는지 확인합니다. 경로가 올바르지 않거나 없으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**구문:** rc = Is File( path )

**설명:** 지정된 경로가 파일인지 확인합니다. 경로가 올바르지 않거나 없으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**구문:** rc = Is File Writable( path )

**설명:** 지정된 파일 경로에 쓸 수 있는지 확인합니다. 경로가 올바르지 않거나 없으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**구문:** l = JSON Literal( string )

**설명:** 지정된 모수에 따라 올바른 JSON 부울 또는 null 상수 값을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

myJSON =
"{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";
parsed = Parse JSON( myJSON );
x = parsed["myBool"];
Show( x );
If( x == JSON Literal( true ),
	Show( "Worked" ),
	Show( "Didn't work" )
);

```

### JSON To Data Table

**구문:** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**설명:** JSON 텍스트를 JMP 데이터 테이블로 변환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**구문:** l = JSON To List( jsonstring )

**설명:** JSON 텍스트를 JSON 데이터에 의해 지정된 구조를 나타내는 JSL 목록으로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Last Modification Date

**구문:** date = Last Modification Date( path )

**설명:** 파일 또는 디렉터리를 마지막으로 수정한 날짜를 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**구문:** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**설명:** 전체 텍스트 파일을 JSL 변수로 읽어옵니다. Load Text File()은 파일 이름을 묻습니다. Load Text File( path )는 문자열을 반환합니다. XMLParse 옵션은 XML을 표현식 트리로 변환합니다. SASODSXML은 SAS ODS 기본 XML로 파싱합니다. [{JSON}] 옵션은 JSON을 표현식 트리로 변환합니다. BLOB 인수는 JSL Blob 변수의 이진 데이터를 반환합니다. BLOB에 대해 명명된 선택적 파라미터를 사용하면 파일에서 하위 문자열을 읽을 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = Load Text File(
	Get Path Variable( "sample_import_data" ) || "/animals.txt"
/*, Charset("ascii")*/
/*, LineSeparator("\!r\!n")*/
/*, BLOB*/
);
Word( 4, ex, " \!t\!n\!r" );

```

### Move Directory

**구문:** rc = Move Directory( from, to )

**설명:** 디렉터리를 한 위치에서 다른 위치로 이동합니다. 디렉터리가 이동되면 1을 반환하고, 디렉터리를 이동할 수 없으면 0을 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/subB" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
Create Directory( "$TEMP/subB" );
rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subB" );
rc4 = Delete Directory( "$TEMP/subB" );
rc5 = Directory Exists( "$TEMP/subB" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " || Char( rc4 ) || " "
 || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**구문:** rc = Move File( from, to )

**설명:** 파일을 한 위치에서 다른 위치로 이동합니다. 파일이 이동되면 1을 반환하고, 파일을 이동할 수 없으면 0을 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
If( File Exists( "$TEMP/y.jmp" ),
	Delete File( "$TEMP/y.jmp" )
);
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " || Char( rc4 ) || " "
 || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Open

**구문:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**설명:** 데이터 테이블이나 기타 JMP 파일 또는 파일에서 생성된 개체에 대한 참조를 반환합니다. 경로를 지정하지 않으면 열기 대화상자가 나타납니다. 폴더 경로를 지정하면 시스템 파일 브라우저가 열리고 개체가 반환되지 않습니다. 사용 가능한 옵션에 대한 전체 설명은 구문 참조에서 확인하십시오.

**JMP추가된 버전:** 버전 14 이전

**Add-In**

```jsl

Names Default To Here( 1 );
/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Excel**

```jsl

Names Default To Here( 1 );
/* Excel files imported into a data table:
   Open( excelFilePath,
     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,
     <Use for all sheets(0|1)>,
     <Concatenate Worksheets(0|1)>,
     <Create Concatenation Column(0|1)>,
     <Worksheet Settings( 0|1,
       Has Column Headers(0|1),
       Number of Rows in Headers(n),
       Headers Start on Row(n),
       Data Starts on Row(n),
       Data Starts on Column(n),
       Data Ends on Row(n),
       Data Ends on Column(n),
       Replicated Spanned Rows(0|1),
       Suppress Hidden Rows(0|1),
       Suppress Hidden Columns(0|1),
       Treat as Hierarchy(0|1)
     )>,
     <Invisible | Private>
   )
*/

/* Using the Excel Wizard dialog:
   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  
*/

dt = Open(
	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",
	Worksheets( "Ungrouped Team Results" ),
	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) )
);

```

**Folder**

```jsl

Names Default To Here( 1 );
/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**PDF**

```jsl

Names Default To Here( 1 );
/* PDF file imported as one or multiple data tables
open(pdfFilePath,
    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |
    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |
    PDF Text(<Pages(n, ...)>, <sort>) |
    PDF Wizard
);*/
dt = Open( "$SAMPLE_DATA\big class.jmp" );
w = New Window( "test", Data Table Box( dt ) );
w << save picture( "$DOCUMENTS\test.pdf", pdf );
pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rows
pdftable2 = Open(
	"$DOCUMENTS\test.pdf",
	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) )
);

```

**그림**

```jsl

Names Default To Here( 1 );
/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**기타**

```jsl

Names Default To Here( 1 );
/* Other options:
   SAS File imported as a data table:
   Open( sasFilePath,
     <Invisible | Private>,
     <Use Labels for Var Names(0|1)>,
     <Password( "password" )>
   )
   
   SAS Transport File imported as a data table, members are separate tables within the larger file:
   Open( sasTransportFilePath,
     <Use Labels for Var Names(0|1)>,
     <Members({"Table1", "Table2"})>
   )
   
   HTML file imported as a data table:
   Open( htmlFilePath,
     <Invisible | Private>,
     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>
   )
   
   Get column names as a list for a JMP Data Table without opening the table:
   Open( jmpDataTableFilePath, 
     "Column Names Only"
   )
   
   esriShapeFile opened for use as a map shape data table:
   Open( esriShapeFilePath,
     <Invisible | Private>,
     Columns( Shape=numeric(n),
     Part=numeric(n),
     X=numeric(n),
     Y=numeric(n) ),
              Polygon Import Options(Simplification Factor(f), Geodesic(g))
   )
*/
//SAS Example:
dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );

// HTML Example:
dt2 = Open(
	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",
	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) )
);

// Column Names Only Example: 
colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );

// SHP Shapefile Example with polygon simplification: 
Open(
	"$SAMPLE_IMPORT_DATA/parishes.shp",
	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) )
);

```

**데이터 테이블**

```jsl

Names Default To Here( 1 );
/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

**텍스트**

```jsl

Names Default To Here( 1 );
/* Text files imported into a data table:
   Open( textFilePath,
     <Invisible | Private>,
     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"
     <Number of Columns(n)>,
     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column
     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,
     <EOF Other ("char")>,
     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,
     <EOL Other ("char")>,
     <Strip Quotes|Strip Enclosing Quotes (0|1)>,
     <Labels|Table Contains Column Headers (0|1)>,
     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".
     Treat Empty Columns as Numeric(0|1)
     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.
     <Column Names Start|Column Names are on line (n)>,
     <Data Starts|Data starts on line (n)>,
     <Lines to Read>, // a number
     <Use Apostrophe as Quotation Mark>,
     <CompressNumericColumns(0|1)>,
     <CompressCharacterColumns(0|1)>,
     <CompressAllowListCheck(0|1)>
   )
*/
dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Parse JSON

**구문:** l = Parse JSON( jsonstring )

**설명:** JSON 텍스트를 JSON 데이터에 의해 지정된 구조를 나타내는 JSL 목록 또는 연관 배열로 변환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Pick Directory

**구문:** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**설명:** 사용자에게 디렉터리 열기 창을 표시하고 선택된 디렉터리의 경로 이름을 반환합니다. 선택적 prompt 문자열은 창 맨 위에 표시됩니다. Show Files는 세 인수 중 하나일 수 있으며 부울 인수를 사용합니다. 1은 디렉터리 선택 창에 파일을 표시하고 0은 표시하지 않습니다. 기본값은 0입니다. path 문자열은 디렉터리 선택 창에 처음에 표시되는 디렉터리를 지정합니다. path 문자열을 사용할 경우 prompt 문자열 다음에 나와야 하지만 Show Files는 둘 사이에 나올 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**Show Files**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

**단순**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory" );

```

### Pick File

**구문:** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**설명:** 사용자에게 열기 창을 표시하고 선택된 파일의 경로 이름을 반환합니다. filterList 인수는 "Label|suffix1;suffix2;..." 형식의 문자열 목록입니다. first filter 인수는 처음에 표시되는 필터를 지정합니다. 다섯 번째 인수는 창이 저장(saveFlag = 1) 창으로 작동하는지 아니면 열기(saveFlag = 0) 창으로 작동하는지를 나타냅니다. default file 인수는 처음에 선택되는 파일을 지정합니다. multiple 인수는 여러 파일을 선택할 수 있도록 허용합니다(saveFlag가 0인 경우).

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Pick File(
	"Select JMP File",
	"$DOCUMENTS",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"newJmpFile.jmp"
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
Files = Pick File(
	"Select JMP File",
	"$SAMPLE_DATA",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"",
	"multiple"
);
For( i = 1, i <= N Items( Files ), i++,
	Try( Open( Files[i] ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
filename = Pick File(
	"Save As Text",
	"$DOCUMENTS",
	{"Text File|txt"},
	1,
	1, // Save Flag
	"export.txt"
);
If( Is Missing( filename ),
	Print( "Canceled" ),
	Save Text File( filename, "The quick brown fox" )
);

```

### Rename Directory

**구문:** rc = Rename Directory( old, new )

**설명:** 디렉터리를 이동/복사하지 않고 이름을 바꿉니다. 새 이름에는 경로가 포함되지 않습니다. 디렉터리 이름이 바뀌면 1을 반환하고, 디렉터리 이름을 바꿀 수 없거나 경로가 올바르지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/subD" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subD" );
rc4 = Delete Directory( "$TEMP/subD" );
rc5 = Directory Exists( "$TEMP/subD" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " || Char( rc4 ) || " "
 || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**구문:** rc = Rename File( old, new )

**설명:** 파일을 이동/복사하지 않고 이름을 바꿉니다. 새 이름에는 경로가 포함되지 않습니다. 파일 이름이 바뀌면 1을 반환하고, 파일 이름을 바꿀 수 없으면 0을 반환합니다. 경로가 올바르지 않거나 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " || Char( rc4 ) || " "
 || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Save Text File

**구문:** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**설명:** path 인수에 지정된 파일 이름과 text 문자열 인수에 지정된 내용으로 텍스트 파일을 생성합니다. 저장에 성공하면 Save Text File() 함수는 생성된 파일의 경로 이름을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**구문:** Set Default Directory( path )

**설명:** 추후 상대 경로에 대한 기준으로 사용할 JMP 기본 디렉터리를 설정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set File Search Path

**구문:** Set File Search Path(path | {list of paths})

**설명:** 파일을 열기 위해 검색할 현재 디렉터리 목록을 설정합니다. "."는 현재 디렉터리를 의미합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Set File Search Path(
	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )}
);
Show( Get File Search Path() );
Show( Convert File Path( "Air.jmp", search ) );
Show( Convert File Path( "Full of Air.jmp", search ) );
Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Path Variable

**구문:** Set Path Variable( name, &lt;value&gt; )

**설명:** 경로 변수를 설정합니다. 경로 변수는 SAMPLE_DATA와 같은 이름입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**구문:** TripleSImport( &lt;path to xml file&gt; )

**설명:** Triple-S 파일을 엽니다. Triple-S 형식은 xml 또는 sss 파일과 csv 파일 또는 dat/asc 파일을 구성합니다. 두 파일은 적절한 확장자를 가진 동일한 이름이어야 하고 동일한 디렉터리에 있어야 합니다. 데이터를 가져오려면 xml 또는 sss 파일 경로를 지정하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

