# File



### Close

**構文:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**説明:** 最初の引数で参照されるデータテーブル(デフォルトは現在のプロジェクトの現在のデータテーブル)を閉じる。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。



2番目の引数はデータテーブルを保存するために使用する。JMPの形式以外のファイル形式でデータテーブルを保存する場合は、パスの中で適切なファイル拡張子を指定する。NoSaveを指定すると、保存するか、変更を破棄するかを尋ねずに閉じる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**構文:** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**説明:** 現在開いている、特定のタイプ(データテーブル、ジャーナル、レポート)のリソースすべてを閉じる。



現在のプロジェクトのウィンドウを閉じる。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Convert File Path

**構文:** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**説明:** 変換したパスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",
	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write(
		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )
		 || "\!N"
	)
);

```

### Copy Directory

**構文:** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**説明:** ある場所から別の場所にディレクトリをコピーする。また、オプションで、サブディレクトリもコピーする。toのパスで指定された場所にディレクトリが作成されるので、コピーするディレクトリの名前を、toのパスに含めてはいけない。ディレクトリがコピーされた場合は1、ディレクトリがコピーできなかった場合は0を戻す。ディレクトリのパスが無効または存在しない場合はエラーを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**構文:** rc = Copy File( from, to )

**説明:** 指定されたファイルを、元のファイルと同名のファイルに、または、別名の新しいファイルにコピーする。コピー先として、ファイル名を含むフルパスを指定する。ファイルがコピーされた場合は1、コピーできなかった場合は0を戻す。パスが無効または存在しない場合はエラーをスローする。fromまたはtoのパスが無効な場合、またはtoファイルがすでに存在する場合、ファイルはコピーできない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 );/* 0 1 1 1 0 */

```

### Create Directory

**構文:** rc = Create Directory( path )

**説明:** ディレクトリを作成する。ディレクトリを作成した場合は1、ディレクトリがすでに存在する場合または作成できなかった場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**構文:** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**説明:** 開いているJMPデータテーブルからExcelワークブックを作成する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook(
	"$TEMP/MyWorkbook.xlsx",
	{"Big Class", "Abrasion"},
	{"Big", "Abrasive"}
);

```

### Creation Date

**構文:** date = Creation Date( path )

**説明:** ファイルまたはディレクトリが作成された日付を戻す。パスが無効または存在しない場合はエラーをスローする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**構文:** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**説明:** ディレクトリとその中のファイルおよびサブディレクトリを削除する。ディレクトリを削除した場合は1、削除できなかった場合またはパスが無効な場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**構文:** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**説明:** ファイルを削除する。ファイルを削除した場合は1、削除できなかった場合は0を戻す。パスが無効または存在しない場合はエラーをスローする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**構文:** rc = Directory Exists( path )

**説明:** ディレクトリが存在するかどうかを調べる。ディレクトリのパスが存在する場合は1、無効または存在しない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### File Exists

**構文:** rc = File Exists( path )

**説明:** ファイルが存在するかどうかを調べる。ファイルのパスが存在する場合は1、無効または存在しない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**構文:** size = File Size( path )

**説明:** 指定のパスにあるファイルのサイズを戻す。ファイルパスが無効または存在しない場合は欠測値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**構文:** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**説明:** pathで指定されたディレクトリにあるファイルの名前をリストで戻す。引数Recursiveが指定されていない場合、結果のリストにはディレクトリ名も含まれる。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Files In Directory( "$HOME" );

```

**例 2**

```jsl

Names Default To Here( 1 );
Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Find All

**構文:** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**説明:** 現在開いている、特定のタイプ(データテーブル、ジャーナル、レポート)のリソースすべてを戻す。



現在のプロジェクトのウィンドウが含まれる。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。

**JMP追加されたバージョン:** 14

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

**構文:** y = Get Default Directory()

**説明:** JMPのデフォルトのディレクトリを戻す。このディレクトリが以降の相対パスのベースとなる。現在実行中のスクリプトが保存されている場合、このパスはスクリプトが保存されているディレクトリとなる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Excel Worksheets

**構文:** list = Get Excel Worksheets("filepath")

**説明:** 指定されたExcelワークブック内にあるワークシート名を、リストで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get File Search Path

**構文:** y = Get File Search Path()

**説明:** 開くファイルを検索するために参照するディレクトリのリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Get File Search Path();

```

### Get Path Variable

**構文:** value = Get Path Variable( name )

**説明:** たとえば、SAMPLE_DATAのような名前のパス変数を戻す。パス変数は、パスを指定した場合、設定された文字列に置換される。

**JMP追加されたバージョン:** バージョン14より前

**一覧表示**

```jsl

Names Default To Here( 1 );
// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME",
"USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS",
"SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
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
			String Col Box( "Path",
				Transform Each( {var}, path vars, Get Path Variable( var ) )
			),
			<<Set Selectable Rows
		)
	)
);

```

**例 1**

```jsl

Names Default To Here( 1 );
Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

### Google Sheet Export

**構文:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**説明:** 新しいGoogleスプレッドシートまたは既存のGoogleスプレッドシート内の新しいシートにデータテーブルを書き出す。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Google Sheet Export(
	dt,
	Email( email ),
	New Spreadsheet( "JSL Example" ),
	Sheet Name( "Example 1" )
);

```

### Google Sheet Import

**構文:** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**説明:** Googleスプレッドシートファイルを開く。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
spreadsheet =
"https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/"; 
                                        
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

**構文:** rc = Is Directory( path )

**説明:** 指定のパスがディレクトリかどうかを調べる。パスが無効または存在しない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**構文:** rc = Is Directory Writable( path )

**説明:** 指定のパスにあるディレクトリが書き込み可能かどうかを調べる。パスが無効または存在しない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**構文:** rc = Is File( path )

**説明:** 指定のパスがファイルかどうかを調べる。パスが無効または存在しない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**構文:** rc = Is File Writable( path )

**説明:** 指定のパスにあるファイルが書き込み可能かどうかを調べる。パスが無効または存在しない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**構文:** l = JSON Literal( string )

**説明:** 指定したパラメータによって、有効なJSONブールまたはヌルである定数の値を戻す。

**JMP追加されたバージョン:** 14

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

**構文:** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**説明:** JSONテキストをJMPデータテーブルに変換する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**構文:** l = JSON To List( jsonstring )

**説明:** JSON形式のテキストを、JSLのリストに変換する。戻されたリストの構造は、JSON形式のテキストでの構造を反映している。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Last Modification Date

**構文:** date = Last Modification Date( path )

**説明:** ファイルまたはディレクトリが最後に変更された日付を戻す。パスが無効または存在しない場合はエラーをスローする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**構文:** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**説明:** テキストファイル全体をJSL変数に読み込む。Load Text File()を指定すると、ファイルを指定するウィンドウが呼び出される。Load Text File( path )は文字列を戻す。XMLParseオプションはXMLをツリー構造に変換する。SASODSXMLは、SASのODSにおけるデフォルトのXML形式として解析する。[{JSON}]オプションはJSONをツリー構造に変換する。引数BLOB はBLOB形式のバイナリデータを戻す。BLOBに関するオプションの名前つきパラメータは、ファイルからテキストの一部を読み取る場合に用いる。

**JMP追加されたバージョン:** バージョン14より前

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

**構文:** rc = Move Directory( from, to )

**説明:** ある場所から別の場所にディレクトリを移動する。ディレクトリを移動した場合は1、移動できなかった場合は0を戻す。パスが無効な場合または存在しない場合はエラーを戻す。

**JMP追加されたバージョン:** バージョン14より前

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
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**構文:** rc = Move File( from, to )

**説明:** ある場所から別の場所にファイルを移動する。ファイルを移動した場合は1、移動できなかった場合は0を戻す。パスが無効な場合または存在しない場合はエラーを戻す。

**JMP追加されたバージョン:** バージョン14より前

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
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Open

**構文:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**説明:** ファイルから作成されたデータテーブルやその他のJMPファイル、またはオブジェクトへの参照を戻す。パスが指定されていない場合、「データファイルを開く」ダイアログが表示される。フォルダのパスが指定されている場合、システムのファイルブラウザが開かれ、オブジェクトは戻されない。使用できるオプションについては、構文リファレンスを参照。

**JMP追加されたバージョン:** バージョン14より前

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

**その他**

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

**データテーブル**

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

**テキスト**

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

**画像**

```jsl

Names Default To Here( 1 );
/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

### Parse JSON

**構文:** l = Parse JSON( jsonstring )

**説明:** JSONテキストを、JSLのリストまたは連想配列に変換する。戻されたリストまたは連想配列は、JSONデータで指定された構造となる。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Pick Directory

**構文:** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**説明:** ディレクトリを選択するウィンドウをユーザに表示し、そこで選択されたディレクトリのパス名を戻す。ウィンドウの上部にオプションのprompt文字列が表示される。Show Filesの位置は、3つの引数のうちどこでもよく、ブール値を取る。1はディレクトリの選択ウィンドウにファイルを表示し、0は表示しない。デフォルトの値は0。pathは、ディレクトリの選択ウィンドウに最初に表示されるディレクトリを指定する文字列。path文字列を使用する場合は、その前にprompt文字列がなければならないが、間にShow Filesがあってもよい。

**JMP追加されたバージョン:** バージョン14より前

**Show Files**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

**単純な例**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory" );

```

### Pick File

**構文:** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**説明:** ファイルを選択するための「開く」ウィンドウをユーザに表示し、そこで選択されたファイルのパス名を戻す。引数filterListは、"ラベル|接尾辞1;接尾辞2;..."という形式の文字列のリスト。引数first filterは、最初の状態で用いるフィルタを指定する。第5引数は、保存ウィンドウ(saveFlag = 1)または開くウィンドウ(saveFlag = 0)のどちらにするかを指定する。引数default fileは、最初に選択された状態にしておくファイルを指定する。引数multipleは、saveFlagが0の場合、複数ファイルの選択を可能とする。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

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

**例 2**

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

**例 3**

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

**構文:** rc = Rename Directory( old, new )

**説明:** ディレクトリを移動またはコピーすることなくディレクトリ名を変更する。新しい名前には、パスを含めないこと。ディレクトリ名を変更した場合は1、変更できなかった場合またはパスが無効な場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

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
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**構文:** rc = Rename File( old, new )

**説明:** ファイルを移動またはコピーすることなくファイル名を変更する。新しい名前には、パスを含めないこと。ファイル名を変更した場合は1、変更できなかった場合は0を戻す。パスが無効な場合または存在しない場合はエラーをスローする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Save Text File

**構文:** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**説明:** 引数textによって指定された文字列を含むテキストファイルを、引数pathによって指定されたファイル名で作成する。保存が完了すると、Save Text File()関数は作成されたファイルの名前を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**構文:** Set Default Directory( path )

**説明:** JMPのデフォルトのディレクトリを設定する。このディレクトリが以降の相対パスのベースとなる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set File Search Path

**構文:** Set File Search Path(path | {list of paths})

**説明:** 開くファイルを検索するために参照するディレクトリのリストを設定する。なお、"."は、カレントディレクトリを指す。

**JMP追加されたバージョン:** バージョン14より前

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

**構文:** Set Path Variable( name, &lt;value&gt; )

**説明:** たとえば、SAMPLE_DATAのような名前のパス変数を設定する。パス変数は、パスを指定した場合、設定された文字列に置換される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**構文:** TripleSImport( &lt;path to xml file&gt; )

**説明:** Triple-Sファイルを開く。Triple-S形式は、1つのxmlまたはsssファイルと、1つのcsvファイルまたはdat/ascファイルで構成される。両ファイルは適切な拡張子付きの同じ名前でなければならず、また、同じディレクトリになければならない。データを書き出す際は、xmlまたはsssのフルパスを指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

