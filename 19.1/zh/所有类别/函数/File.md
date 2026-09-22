# File



### Close

**语法:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**说明:** 关闭第一个参数所引用的数据表，它默认为当前项目中的当前数据表（若项目中没有运行脚本则没有项目）。



要指定项目，将可选 Project() 参数与标题、索引、显示框或窗口对象一起使用。使用 Project(0) 指定当在项目中运行脚本时没有项目。



第二个参数用于保存数据表。在路径中使用合适的文件扩展名将数据表另存为非 JMP 格式。指定 NoSave 会跳过保存提示或忽略所做的更改。

**JMP添加的版本:** 早于版本 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 3 );Close( exdt, NoSave );

```

### Close All

**语法:** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**说明:** 关闭特定类型的所有打开的资源: 数据表、记录或报表。



仅关闭当前项目中的窗口（若项目中没有运行脚本则没有项目）。要指定项目，将可选 Project() 参数与标题、索引、显示框或窗口对象一起使用。使用 Project(0) 指定当在项目中运行脚本时没有项目。

**JMP添加的版本:** 早于版本 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );Wait( 3 );Close All( Data Tables, NoSave );

```

### Convert File Path

**语法:** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**说明:** 返回转换的路径。

**JMP添加的版本:** 早于版本 14

```jsl

For Each( {pv},	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},	Write(		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )		 || "\!N"	));

```

### Copy Directory

**语法:** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**说明:** 将文件从一个目录复制到另一个目录，可选择是否复制子目录。目录名称将在 to 路径中创建，不应是 to 路径的一部分。若目录已复制，则返回 1，若目录无法复制，则返回 0。若路径无效或不存在，则抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );rc4 = Delete Directory( "$TEMP/Loss Function Templates" );rc5 = Directory Exists( "$TEMP/Loss Function Templates" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**语法:** rc = Copy File( from, to )

**说明:** 将文件从原始文件复制到具有相同或不同名称的新文件。指定目标的完整路径和文件名。若文件已复制，则返回 1。若无法复制文件，则返回 0。若路径无效或不存在，则抛出错误。当 from 或 to 路径无效时，或 to 文件已存在，则无法复制文件。

**JMP添加的版本:** 早于版本 14

```jsl

rc0 = File Exists( "$TEMP/x.jmp" );rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = Delete File( "$TEMP/x.jmp" );rc4 = File Exists( "$TEMP/x.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 );/* 0 1 1 1 0 */

```

### Create Directory

**语法:** rc = Create Directory( path )

**说明:** 创建目录。若目录已创建，则返回 1。若目录已存在或 JMP 无法创建目录，则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Delete Directory( "$TEMP/sub1" );rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );rc1 = Delete Directory( "$TEMP/sub1" );rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**语法:** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**说明:** 基于打开的 JMP 数据表生成 Excel 工作簿

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**示例 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Abrasion.jmp" );Create Excel Workbook(	"$TEMP/MyWorkbook.xlsx",	{"Big Class", "Abrasion"},	{"Big", "Abrasive"});

```

### Creation Date

**语法:** date = Creation Date( path )

**说明:** 返回文件或目录的创建日期。当路径无效或不存在时抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**语法:** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**说明:** 删除目录及其文件和子目录。若目录已删除，则返回 1。若无法删除目录或路径无效，则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Delete Directory( "$TEMP/sub1" );rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );rc1 = Delete Directory( "$TEMP/sub1" );rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**语法:** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**说明:** 删除文件。若文件已删除，则返回 1。若无法删除文件，则返回 0。当路径无效或不存在时抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = File Exists( "$TEMP/x.jmp" );rc2 = Delete File( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/x.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**语法:** rc = Directory Exists( path )

**说明:** 确定目录是否存在。若路径存在，则返回 1。若路径无效或不存在，则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),	"ok",	"missing!");

```

### File Exists

**语法:** rc = File Exists( path )

**说明:** 确定文件是否存在。若文件路径存在，则返回 1。若路径无效或不存在，则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),	"ok",	"missing!");

```

### File Size

**语法:** size = File Size( path )

**说明:** 返回给定路径下文件的大小。当文件路径无效或不存在时，返回缺失值。

**JMP添加的版本:** 早于版本 14

```jsl

File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**语法:** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**说明:** 返回 path 指定的目录中的文件名列表。若未指定 Recursive 参数，则列表中包括目录名称。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Files In Directory( "$HOME" );

```

**示例 2**

```jsl

Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),	Contains( Lowercase( fn ), "stacked" ));

```

### Find All

**语法:** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**说明:** 查找特定类型的所有打开的资源: 数据表、记录或报表。



仅包括当前项目中的窗口（若项目中没有运行脚本则没有项目）。要指定项目，将可选 Project() 参数与标题、索引、显示框或窗口对象一起使用。使用 Project(0) 指定当在项目中运行脚本时没有项目。

**JMP添加的版本:** 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );windows = Find All( Data Tables );For( i = 1, i <= N Items( windows ), i++,	Write( Char( windows[i] << Get Window Title ) || "\!N" ));

```

### Get Default Directory

**语法:** y = Get Default Directory()

**说明:** 返回 JMP 默认目录，该目录用作后续相对路径的基路径。该路径是包含当前执行脚本（若脚本已保存）的目录。

**JMP添加的版本:** 早于版本 14

```jsl

Show( Get Default Directory() );Set Default Directory( "$SAMPLE_DATA" );Show( Get Default Directory() );

```

### Get Excel Worksheets

**语法:** list = Get Excel Worksheets("filepath")

**说明:** 返回 Excel 工作簿中的工作表列表

**JMP添加的版本:** 早于版本 14

```jsl

sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );Show( sheetList );

```

### Get File Search Path

**语法:** y = Get File Search Path()

**说明:** 返回目录的当前列表，以便搜索打开的文件。

**JMP添加的版本:** 早于版本 14

```jsl

Get File Search Path();

```

### Get Path Variable

**语法:** value = Get Path Variable( name )

**说明:** 返回路径变量的值，路径变量是在路径名中要替换的比如 SAMPLE_DATA 这样的名称。

**JMP添加的版本:** 早于版本 14

#### 列表输出

```jsl

// Run for a Path Variable listingpath vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME","USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS","SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );New Window( "Path Variables",	<<Type( "Dialog" ),	Outline Box( "Path Variables",		H List Box(			Button Box( "Open Paths",				For Each( {row}, tbl << Get Selected Rows, {path},					path = tbl[String Col Box( 2 )] << Get( row );					Open( path );				)			),			Button Box( "Copy Paths",				If( N Items( tbl << Get Selected Rows ),					Set Clipboard(						Concat Items(							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),								tbl[String Col Box( 2 )] << Get( row )							),							"\!N"						)					)				)			)		),		window:tbl = Table Box(			String Col Box( "Variable", path vars ),			String Col Box( "Path",				Transform Each( {var}, path vars, Get Path Variable( var ) )			),			<<Set Selectable Rows		)	));

```

**示例 1**

```jsl

Get Path Variable( "SAMPLE_DATA" );/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTSSee full listing of Path Variables in the other exampleSee also Convert File Path() and Set Path Variable() */

```

### Google Sheet Export

**语法:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**说明:** 将数据表导出至新的 Google Spreadsheet 或现有 Google Spreadsheet 中新的工作表

**JMP添加的版本:** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your emaildt = Open( "$SAMPLE_DATA/Big Class.jmp" );Google Sheet Export(	dt,	Email( email ),	New Spreadsheet( "JSL Example" ),	Sheet Name( "Example 1" ));

```

### Google Sheet Import

**语法:** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**说明:** 打开 Google Sheet 文件。

**JMP添加的版本:** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your emailspreadsheet ="https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/";                                         Google Sheet Import(	Email( email ),	Spreadsheet( spreadsheet ),	Sheets( "Sheet1", "Sheet2" ),	Sheet Settings(		Has Column Headers( 0 ),		Data Starts on Row( 1 ),		Cell Range( "A1:C2" ),		Import Cell Colors( 0 ),		Suppress Empty Columns( 1 )	));

```

### Is Directory

**语法:** rc = Is Directory( path )

**说明:** 确定给定的路径是否是目录。当路径无效或不存在时返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

rc0 = Is Directory( "$SAMPLE_DATA" );rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**语法:** rc = Is Directory Writable( path )

**说明:** 确定给定的目录路径是否可写。当路径无效或不存在时返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**语法:** rc = Is File( path )

**说明:** 确定给定的路径是否是文件。当路径无效或不存在时返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

rc0 = Is File( "$SAMPLE_DATA" );rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**语法:** rc = Is File Writable( path )

**说明:** 确定给定的文件路径是否可写。当路径无效或不存在时返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**语法:** l = JSON Literal( string )

**说明:** 根据指定的参数，返回有效的 JSON 布尔值或空常数值。

**JMP添加的版本:** 14

```jsl

myJSON ="{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";parsed = Parse JSON( myJSON );x = parsed["myBool"];Show( x );If( x == JSON Literal( true ),	Show( "Worked" ),	Show( "Didn't work" ));

```

### JSON To Data Table

**语法:** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**说明:** 将 JSON 文本转换为 JMP 数据表

**JMP添加的版本:** 14

```jsl

dt = JSON To Data Table(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");

```

### JSON To List

**语法:** l = JSON To List( jsonstring )

**说明:** 将 JSON 文本转换为表示 JSON 数据所指定的结构的 JSL 列表。

**JMP添加的版本:** 早于版本 14

```jsl

l = JSON To List(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");Show( l );

```

### Last Modification Date

**语法:** date = Last Modification Date( path )

**说明:** 返回文件或目录的最后修改日期。当路径无效或不存在时抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**语法:** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**说明:** 将整个文本文件读入到一个 JSL 变量。Load Text File() 提示指定文件名。Load Text File( path ) 返回字符串。XMLParse 选项将 XML 转换为表达式树。SASODSXML 解析为 SAS ODS 默认 XML。[{JSON}] 选项将 JSON 转换为表达式树。BLOB 参数在 JSL Blob 变量中返回二进制数据；BLOB 的可选的命名参数允许从文件读取子字符串。

**JMP添加的版本:** 早于版本 14

```jsl

ex = Load Text File(	Get Path Variable( "sample_import_data" ) || "/animals.txt"/*, Charset("ascii")*//*, LineSeparator("\!r\!n")*//*, BLOB*/);Word( 4, ex, " \!t\!n\!r" );

```

### Move Directory

**语法:** rc = Move Directory( from, to )

**说明:** 将目录从一个位置移至另一个位置。若目录已移动，则返回 1。若目录无法移动，则返回 0。若路径无效或不存在，则抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

Delete Directory( "$TEMP/subB" );Delete Directory( "$TEMP/Loss Function Templates" );rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );Create Directory( "$TEMP/subB" );rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );rc2 = Directory Exists( "$TEMP/Loss Function Templates" );rc3 = Directory Exists( "$TEMP/subB" );rc4 = Delete Directory( "$TEMP/subB" );rc5 = Directory Exists( "$TEMP/subB" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**语法:** rc = Move File( from, to )

**说明:** 将文件从一个位置移至另一个位置。若文件已移动，则返回 1。若文件无法移动，则返回 0。若路径无效或不存在，则抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

If( File Exists( "$TEMP/y.jmp" ),	Delete File( "$TEMP/y.jmp" ));rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/y.jmp" );rc4 = Delete File( "$TEMP/y.jmp" );rc5 = File Exists( "$TEMP/y.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Open

**语法:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**说明:** 返回对数据表或其他 JMP 文件或基于文件创建的对象的引用。若未指定路径，则“打开”对话框显示。若指定了文件夹路径，则打开系统文件浏览器并且不返回对象。请参阅语法参考获取可用选项的完整说明。

**JMP添加的版本:** 早于版本 14

#### Add-In

```jsl

/* Installing Add-In:Open( Add-In to open,    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

#### Excel

```jsl

/* Excel files imported into a data table:   Open( excelFilePath,     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,     <Use for all sheets(0|1)>,     <Concatenate Worksheets(0|1)>,     <Create Concatenation Column(0|1)>,     <Worksheet Settings( 0|1,       Has Column Headers(0|1),       Number of Rows in Headers(n),       Headers Start on Row(n),       Data Starts on Row(n),       Data Starts on Column(n),       Data Ends on Row(n),       Data Ends on Column(n),       Replicated Spanned Rows(0|1),       Suppress Hidden Rows(0|1),       Suppress Hidden Columns(0|1),       Treat as Hierarchy(0|1)     )>,     <Invisible | Private>   )*//* Using the Excel Wizard dialog:   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  */dt = Open(	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",	Worksheets( "Ungrouped Team Results" ),	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) ));

```

#### Folder

```jsl

/* Open of folder launches file browser */Open( "$SAMPLE_DATA" );

```

#### PDF

```jsl

/* PDF file imported as one or multiple data tablesopen(pdfFilePath,    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |    PDF Text(<Pages(n, ...)>, <sort>) |    PDF Wizard);*/dt = Open( "$SAMPLE_DATA\big class.jmp" );w = New Window( "test", Data Table Box( dt ) );w << save picture( "$DOCUMENTS\test.pdf", pdf );pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rowspdftable2 = Open(	"$DOCUMENTS\test.pdf",	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) ));

```

#### 其他

```jsl

/* Other options:   SAS File imported as a data table:   Open( sasFilePath,     <Invisible | Private>,     <Use Labels for Var Names(0|1)>,     <Password( "password" )>   )      SAS Transport File imported as a data table, members are separate tables within the larger file:   Open( sasTransportFilePath,     <Use Labels for Var Names(0|1)>,     <Members({"Table1", "Table2"})>   )      HTML file imported as a data table:   Open( htmlFilePath,     <Invisible | Private>,     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>   )      Get column names as a list for a JMP Data Table without opening the table:   Open( jmpDataTableFilePath,      "Column Names Only"   )      esriShapeFile opened for use as a map shape data table:   Open( esriShapeFilePath,     <Invisible | Private>,     Columns( Shape=numeric(n),     Part=numeric(n),     X=numeric(n),     Y=numeric(n) ),              Polygon Import Options(Simplification Factor(f), Geodesic(g))   )*///SAS Example:dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );// HTML Example:dt2 = Open(	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) ));// Column Names Only Example: colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );// SHP Shapefile Example with polygon simplification: Open(	"$SAMPLE_IMPORT_DATA/parishes.shp",	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) ));

```

#### 图片

```jsl

/* Picture file imported as a picture object */pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

#### 数据表

```jsl

/* Data tables, other JMP files, external files:   Open( filePath,     <Invisible | Private>,     <Select Columns( "col", ... )>,     <Ignore Columns( "col", ... )>,     <Add to Recent Files(bool)>,     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>     <Force Refresh>,     <Enable Filter Views(bool)>,     <"file type">   )*///Basic data table opendt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );//Data table open with some optionsdt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

#### 文本

```jsl

/* Text files imported into a data table:   Open( textFilePath,     <Invisible | Private>,     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"     <Number of Columns(n)>,     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,     <EOF Other ("char")>,     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,     <EOL Other ("char")>,     <Strip Quotes|Strip Enclosing Quotes (0|1)>,     <Labels|Table Contains Column Headers (0|1)>,     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".     Treat Empty Columns as Numeric(0|1)     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.     <Column Names Start|Column Names are on line (n)>,     <Data Starts|Data starts on line (n)>,     <Lines to Read>, // a number     <Use Apostrophe as Quotation Mark>,     <CompressNumericColumns(0|1)>,     <CompressCharacterColumns(0|1)>,     <CompressAllowListCheck(0|1)>   )*/dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Parse JSON

**语法:** l = Parse JSON( jsonstring )

**说明:** 将 JSON 文本转换为表示 JSON 数据所指定的结构的 JSL 列表或关联数组。

**JMP添加的版本:** 14

```jsl

l = Parse JSON(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");Show( l );

```

### Pick Directory

**语法:** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**说明:** 使用“打开目录”窗口提示用户，返回选定目录的路径名。可选 prompt 字符串显示在窗口的顶部。Show Files 可以是任意的三个参数，并接受布尔参数。1 会显示“选择目录”窗口中的文件，0 不会。默认值为 0。path 字符串指定“选择目录”窗口最初显示的目录。若您使用 path 字符串，则它必须在 prompt 字符串之后，但 Show Files 可以介于它们之间。

**JMP添加的版本:** 早于版本 14

#### Show Files

```jsl

Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

#### 简单

```jsl

Pick Directory( "Select a directory" );

```

### Pick File

**语法:** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**说明:** 使用“打开”窗口提示用户，返回选定文件的路径名。filterList 参数是“Label|suffix1;suffix2;...”形式的字符串列表。first filter 参数指定初始显示的过滤器。第五个参数指定窗口会充当保存 (saveFlag = 1) 还是打开 (saveFlag = 0) 窗口。default file 参数指定初始选择的文件。若 saveFlag 为 0，则 multiple 参数允许选择多个文件。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Pick File(	"Select JMP File",	"$DOCUMENTS",	{"JMP Files|jmp;jsl;jrn", "All Files|*"},	1,	0,	"newJmpFile.jmp");

```

**示例 2**

```jsl

Files = Pick File(	"Select JMP File",	"$SAMPLE_DATA",	{"JMP Files|jmp;jsl;jrn", "All Files|*"},	1,	0,	"",	"multiple");For( i = 1, i <= N Items( Files ), i++,	Try( Open( Files[i] ) ));

```

**示例 3**

```jsl

filename = Pick File(	"Save As Text",	"$DOCUMENTS",	{"Text File|txt"},	1,	1, // Save Flag	"export.txt");If( Is Missing( filename ),	Print( "Canceled" ),	Save Text File( filename, "The quick brown fox" ));

```

### Rename Directory

**语法:** rc = Rename Directory( old, new )

**说明:** 重命名目录而不移动或复制它；新名称不包含路径。若目录已重命名，则返回 1。若无法重命名目录或路径无效，则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Delete Directory( "$TEMP/subD" );Delete Directory( "$TEMP/Loss Function Templates" );rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );rc2 = Directory Exists( "$TEMP/Loss Function Templates" );rc3 = Directory Exists( "$TEMP/subD" );rc4 = Delete Directory( "$TEMP/subD" );rc5 = Directory Exists( "$TEMP/subD" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**语法:** rc = Rename File( old, new )

**说明:** 重命名文件而不移动或复制它；新名称不包含路径。若文件已重命名，则返回 1。若无法重命名文件，则返回 0。当路径无效或不存在时抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/y.jmp" );rc4 = Delete File( "$TEMP/y.jmp" );rc5 = File Exists( "$TEMP/y.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Save Text File

**语法:** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**说明:** 创建一个文本文件，其文件名由 path 参数指定，内容由 text 字符串参数指定。若保存成功，Save Text File() 函数返回已创建文件的路径名。

**JMP添加的版本:** 早于版本 14

```jsl

Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**语法:** Set Default Directory( path )

**说明:** 设置 JMP 默认目录，该目录用作后续相对路径的基路径。

**JMP添加的版本:** 早于版本 14

```jsl

Set Default Directory( "$SAMPLE_DATA" );Open( "Big Class.jmp" );

```

### Set File Search Path

**语法:** Set File Search Path(path | {list of paths})

**说明:** 设置目录的当前列表，以搜索打开的文件。“.”表示当前目录。

**JMP添加的版本:** 早于版本 14

```jsl

Set File Search Path(	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )});Show( Get File Search Path() );Show( Convert File Path( "Air.jmp", search ) );Show( Convert File Path( "Full of Air.jmp", search ) );Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Path Variable

**语法:** Set Path Variable( name, &lt;value&gt; )

**说明:** 设置路径变量，即在路径名中要替换的比如 SAMPLE_DATA 这样的名称。

**JMP添加的版本:** 早于版本 14

```jsl

Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**语法:** TripleSImport( &lt;path to xml file&gt; )

**说明:** 打开 3S 文件。3S 格式包含 xml 或 sss 文件以及 csv 文件或 dat/asc 文件。这两个文件必须具有使用适当扩展名的相同名称并且必须位于同一目录中。指定 xml 或 sss 文件路径以导入数据。

**JMP添加的版本:** 早于版本 14

```jsl

TripleS Import(); //To get a file dialog to select the XML fileTripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

