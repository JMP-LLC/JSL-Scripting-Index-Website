# SAS Integration



## 関連するコンストラクター

### Check SAS Dependencies

**構文:** Check SAS Dependencies()

**説明:** SASインテグレーションに依存関係のあるファイルのステータスを確認する。処理が正常に行われた場合は1を戻す。

**JMP追加されたバージョン:** 19

```jsl

If( !Check SAS Dependencies(),	Install SAS Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Current SAS Connection

**構文:** sas = Current SAS Connection()

**説明:** アクティブなSASサーバー接続をスクリプト可能なオブジェクトとして戻す。

```jsl

SAS Connect( "my sas connection" );sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**構文:** array = Current SAS Connections()

**JMP追加されたバージョン:** 19

```jsl

array = Current SAS Connections();array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**構文:** Install SAS Dependencies()

**説明:** SASインテグレーションに依存関係のあるファイルをインストールする。処理が正常に行われた場合は1を戻す。

**JMP追加されたバージョン:** 19

```jsl

If( !Check SAS Dependencies(),	Install SAS Dependencies(),	Print( "Dependencies are installed" ));

```

### SAS Connect

**構文:** SAS Connect(&lt;( data_connector_or_id )&gt;, &lt;Prompt( Always|Never|IfNeeded )&gt;)

**説明:** SAS接続を開く。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

SAS Connect( "my sas connection" );

```

**例 2**

```jsl

iom_win = New Data Connector( Type( "SAS Local" ) );SAS Connect( iom_win );sas = Current SAS Connection();librefs = sas << Get Librefs();For( i = 1, i <= N Items( librefs ), i++,	tables = sas << Get Data Sets( librefs[i] );	Write( "\!n\!nLibref:" || librefs[i] );	Write( "\!nTables:" || Char( tables ) ););sas << Disconnect();

```

**例 3**

```jsl

SAS Connect(	New Data Connector(		ID( "com.jmp.sas_remote" ),		Port( 8591 ),		User( "jmpuser" ),		Host Name( "sashost.com" )	),	Prompt( If Needed ));

```

**例 4**

```jsl

SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**構文:** Update SAS Dependencies()

**説明:** SASインテグレーションに依存関係のあるファイルを更新する。処理が正常に行われた場合は1を戻す。

**JMP追加されたバージョン:** 19

```jsl

If( Check SAS Dependencies(),	Update SAS Dependencies(),	Print( "Dependencies are not installed" ));

```

## SAS Results

### 項目のメッセージ

#### Get Log

**構文:** obj &lt;&lt; Get Log

**説明:** アクティブなSASサーバー接続のログウィンドウの内容を含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc print data=sashelp.class; run;",	NoOutputWindow( True ),	GetSASLog( False ));result = sas << Get Results;log = result << Get Log();Show( log );

```

#### Get Output

**構文:** obj &lt;&lt; Get Output

**説明:** アクティブなSASサーバー接続のログウィンドウの内容を含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );result = sas << Get Results;out = result << Get Output();Show( out );

```

#### Get Output Datasets

**構文:** obj &lt;&lt; Get Output Datasets

**説明:** アクティブなSASサーバー接続のログウィンドウの内容を含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc corr data=sashelp.class    outp=pearson outs=spearman;    var height weight;    run;",	NoOutputWindow( True ));result = sas << Get Results;data = result << Get Output Datasets;Show( data );

```

## SAS Server

### 項目のメッセージ

#### Connect

**構文:** sas &lt;&lt; Connect( &lt;( data_connector_or_id )&gt;, &lt;Prompt( Always|Never|IfNeeded )&gt;)

**説明:** 切断されたSASサーバー接続オブジェクトへの接続を再試行する。

**JMP追加されたバージョン:** 19

```jsl

SAS Connect( "my sas connection" );sas = Current SAS Connection();sas << Disconnect();sas << Connect();

```

#### Current CAS Connection

**構文:** result = sas &lt;&lt; Current CAS Connection()

**説明:** 現在のCASサーバー接続を取得する。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

sas = Current SAS Connection();cas = sas << Current CAS Connection;Show( cas );

```

**例 2**

```jsl

sas = Current SAS Connection();cas = sas << Current CAS Connection;connected = cas << Is Connected();Show( connected );

```

#### Data Set Exists

**構文:** result = sas &lt;&lt; Data Set Exists( libref, dsname )

**説明:** SASデータセットが存在する場合は1を戻す。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

sas = Current SAS Connection();result = sas << Data Set Exists( "SASHELP", "AIRLINE" );Show( result );

```

**例 2**

```jsl

sas = Current SAS Connection();result = sas << Data Set Exists( "SASHELP.AIRLINE" );Show( result );

```

#### Disconnect

**構文:** obj &lt;&lt; Disconnect

**説明:** このSASサーバーへの接続を切断する。

**JMP追加されたバージョン:** 19

```jsl

SAS Connect( "my sas connection" );sas = Current SAS Connection();sas << Disconnect();

```

#### Export Data

**構文:** y = sas &lt;&lt; Export Data( dt, libref, dataset, &lt;named_arguments&gt; ); y = sas &lt;&lt; SAS Export Data( dt, libref.dataset, &lt;named_arguments&gt; )

**説明:** JMPデータテーブルをSASデータセットとしてアクティブなSASサーバー接続に書き出す。オプションの名前付き引数には、Columns(list|col1,col2,...,coln)、文字値の引数のPassword、AlterPassword、ReadPassword、WritePassword、ブール値の引数のHonorExcludedRows、PreserveSASColumnNames、PreserveSASFormats、ReplaceExisting、ExistingAlterPassword、SaveJMPMetadataがある。書き出しが正常に行われた場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

#### Get Data Sets

**構文:** result = sas &lt;&lt; Get Data Sets( libref )

**説明:** SASライブラリで定義されているデータセットのリストを戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Data Sets( "SASHELP" );Show( result );

```

#### Get Host Name

**構文:** var = sas &lt;&lt; Get Host Name( )

**説明:** SASサーバーのホスト名を取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Host Name();Show( result );

```

#### Get Lib Refs

**構文:** result = sas &lt;&lt; Get Lib Refs()

**説明:** アクティブなSASサーバー接続から、現在定義されているSASライブラリ参照名のリストを戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Lib Refs();Show( result );

```

#### Get Log

**構文:** result = sas &lt;&lt; Get Log()

**説明:** アクティブなSASサーバー接続のログウィンドウの内容を含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc print data=sashelp.class; run;",	NoOutputWindow( True ),	GetSASLog( False ));result = sas << Get Log();Show( result );

```

#### Get Macro Var

**構文:** var = sas &lt;&lt; GetMacroVar( "name" )

**説明:** SASマクロ変数の値を取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Macro Var( "SYSVLONG" );Show( result );

```

#### Get Macro Var Names

**構文:** var = sas &lt;&lt; GetMacroVarNames( )

**説明:** SASマクロ変数のリストを取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Macro Var Names();Show( result );

```

#### Get Option Names

**構文:** var = sas &lt;&lt; GetOptionNames( )

**説明:** SASオプションのリストを取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Option Names();Show( result );

```

#### Get Option Value

**構文:** var = sas &lt;&lt; Get Option Value( "name" )

**説明:** SASオプションの値を取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Option Value( "MEMLIB" );Show( result );

```

#### Get Output

**構文:** result = sas &lt;&lt; Get Output()

**説明:** アクティブなSASサーバー接続に最後にサブミットされたSASコードのアウトプットを含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );result = sas << Get Output();Show( result );

```

#### Get Results

**構文:** result = sas &lt;&lt; Get Results()

**説明:** このサーバーへの最後のサブミットの結果を取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;" );result = sas << Get Results();Show( result );

```

#### Get Submit Status

**構文:** result = sas &lt;&lt; Get Submit Status()

**説明:** このサーバーへの最後のサブミットのステータスを取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;" );result = sas << Get Submit Status;Show( result );

```

#### Get Var Info

**構文:** result = sas &lt;&lt; Get Var Info( libref, dataset ); result = sas &lt;&lt; Get Var Info( libref.dataset )

**説明:** SASデータセットの変数に関する情報を取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Var Info( "SASHELP", "CLASS" );Show( result );

```

#### Get Var Names

**構文:** result = sas &lt;&lt; Get Var Names( libref, dataset ); result = sas &lt;&lt; SAS Get Var Names( libref.dataset )

**説明:** アクティブなSASサーバー接続から、指定されたデータセットに含まれる変数の名前を取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Var Names( "SASHELP", "CLASS" );Show( result );

```

#### Get Version

**構文:** ver = sas &lt;&lt; GetVersion( &lt; Long &gt; )

**説明:** SASのバージョンを取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Version;Show( result );

```

#### Get Work Folder

**構文:** obj &lt;&lt; Get Work Folder

**説明:** サーバー上のWORKライブラリのフォルダを取得する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();result = sas << Get Work Folder;Show( result );

```

#### Import Data

**構文:** dt = sas &lt;&lt; Import Data( libref, dataset, &lt;named_arguments&gt; ); dt = sas &lt;&lt; Import Data( libref.dataset|path, &lt;named_arguments&gt; )

**説明:** アクティブなSASサーバー接続からSASデータセットをJMPデータテーブルに読み込む。オプションの名前付き引数には、Sample(<named_arguments>)、Columns(list|col1,col2,...,coln)、文字値の引数のWhere、ブール値の引数のConvertCustomFormats、Invisible、UseLabelsForVarNames、SQLTableVariableがある。JMPデータテーブルオブジェクトを戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();dt = sas << Import Data( "SASHELP.CLASS" );

```

#### List Output Data Sets

**構文:** sas &lt;&lt; List Output Data Sets(sas code)

**説明:** 指定されたSASコードの出力データセットを一覧表示する。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();datasets = sas << List Output Datasets(	"\[proc means data=sashelp.class;    var age height weight;run;]\");Show( datasets );

```

#### Name

**構文:** serverName = sas &lt;&lt; Name

**説明:** サーバーの名前を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();serverName = sas << Name;Show( serverName );

```

#### Submit

**構文:** result = sas &lt;&lt; Submit( &lt;GetSASLog(&lt;True|False|OnError&gt;, &lt;OnSubmitComplete(script)&gt;, &lt;OpenOutputDatasets(&lt;All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN&gt;)&gt;, &lt;ODSFormat&gt;, &lt;ODS Style&gt;, &lt;Title&gt;, &lt;OpenODSResults&gt;, &lt;NoOutputWindow&gt;

**説明:** アクティブなSASサーバー接続にSASコードをサブミットする。処理が正常に行われた場合は1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",	ODSStyle( "default" ),	OpenODSResults( true ),	OpenOutputDatasets( All ));

```

#### Submit File

**構文:** result = sas &lt;&lt; Submit File( "filename.sas" )

**説明:** SASコードを含むファイルをアクティブなSASサーバー接続にサブミットする。オプションの名前付きの引数は、SASサブミットのものと同じ。処理が正常に行われた場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** 19

```jsl

sas = Current SAS Connection();sas << Submit File( "MySASProgram.sas" );

```

