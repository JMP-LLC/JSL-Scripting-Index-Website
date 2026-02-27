# Multiple File Import



## 関連するコンストラクター

### Multiple File Import

**構文:** mfiObj = Multiple File Import();

**説明:** Multiple File Importオブジェクトを作成する。このオブジェクトは、フォルダの設定、ファイルの絞り込み、ファイルの読み込みを行うメッセージを受け入れる。ダイアログを表示するには、"Create Window"メッセージを使用する。すぐに読み込むには、"Import Data"メッセージを使用する。"Import Data"メッセージの戻り値は、作成されたデータテーブルのリストである。

```jsl

// use the save-script-to-script-window button // in the MFI dialog to see more messages// for filtering files and controlling the importMultiple File Import(	<<Set Folder( "$DESKTOP" ),	<<Set Name Filter( "*.csv;" ),	<<Set Name Enable( 1 )) << Create Window;

```

## 項目のメッセージ

### Create Window

**構文:** obj &lt;&lt; Create Window

**説明:** ウィンドウを開き、現在の設定を表示する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << set folder( "$sample_import_data" );mfi << create window();

```

### Get Add File Date Column

**構文:** obj &lt;&lt; Get Add File Date Column

**説明:** 読み込んだテーブルに、行の読み込み元であるファイルの名前の列が含まれている場合は、1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Date Column( 1 );mfi << Get Add File Date Column();

```

### Get Add File Name Column

**構文:** obj &lt;&lt; Get Add File Name Column

**説明:** 読み込んだテーブルに、行の読み込み元であるファイルの名前の列が含まれている場合は、1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Name Column( 1 );mfi << Get Add File Name Column();

```

### Get Add File Size Column

**構文:** obj &lt;&lt; Get Add File Size Column

**説明:** 読み込んだテーブルに、行の読み込み元であるファイルのサイズの列が含まれている場合は、1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Size Column( 1 );mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**構文:** obj &lt;&lt; Get CSV Allow Numeric

**説明:** 数値と見られるデータから数値タイプの列が作成される場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**構文:** obj &lt;&lt; Get CSV EOF Comma

**説明:** 各列を表すフィールドをカンマで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**構文:** obj &lt;&lt; Get CSV EOF Other

**説明:** 各列を表すフィールドの区切りとして使用する値を設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**構文:** obj &lt;&lt; Get CSV EOF Space

**説明:** 各列を表すフィールドを1つのスペースで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**構文:** obj &lt;&lt; Get CSV EOF Spaces

**説明:** 各列を表すフィールドを複数のスペースで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**構文:** obj &lt;&lt; Get CSV EOF Tab

**説明:** 各列を表すフィールドをタブで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**構文:** obj &lt;&lt; Get CSV EOL CR

**説明:** 各行の区切りとしてCRが使用される場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**構文:** obj &lt;&lt; Get CSV EOL CRLF

**説明:** 各行の区切りとしてCRLFが使用される場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**構文:** obj &lt;&lt; Get CSV EOL LF

**説明:** 各行を形成するラインの区切りとしてLFが使用される場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**構文:** obj &lt;&lt; Get CSV EOL Other

**説明:** 入力ファイルの行を区切るカスタム値を取得する。この値により行が決まる。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**構文:** obj &lt;&lt; Get CSV EOL Semicolon

**説明:** 各行の区切りとしてセミコロンが使用される場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**構文:** obj &lt;&lt; Get CSV Escape

**説明:** フィールドの終わり、行の終わり、引用符のような特殊文字をエスケープする文字を取得する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Escape();

```

### Get CSV First Data Line

**構文:** obj &lt;&lt; Get CSV First Data Line

**説明:** 読み込まれるファイルの、データの開始行。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**構文:** obj &lt;&lt; Get CSV First Header Line

**説明:** 読み込むファイルで列見出しの開始行を取得する。この行から列名が作成される。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV First Header Line( 2 );mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**構文:** obj &lt;&lt; Get CSV Has Headers

**説明:** 読み込みの際に列見出しの設定を使用する場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**構文:** obj &lt;&lt; Get CSV Number Of Header Lines

**説明:** 列名の作成に使用する列見出しの行数を取得する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV Number Of Header Lines( 2 );mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**構文:** obj &lt;&lt; Get CSV Quote

**説明:** 引用符の文字を取得する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Quote();

```

### Get Charset

**構文:** obj &lt;&lt; Get Charset

**説明:** データの読み込みに使用される文字コードを戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get Charset();

```

### Get Date Count

**構文:** obj &lt;&lt; Get Date Count

**説明:** 日時フィルタが有効な場合は、その範囲にあるファイルの数を戻し、有効でない場合はファイルの総数を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$downloads" );mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );mfi << Get Date Count();

```

### Get Date Enable

**構文:** obj &lt;&lt; Get Date Enable

**説明:** 日時フィルタが有効な場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get Date Enable();

```

### Get Date Filter

**構文:** obj &lt;&lt; Get Date Filter

**説明:** 現在の日時フィルタを戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**構文:** obj &lt;&lt; Get Excel Add Sheet Name Column

**説明:** 読み込まれたテーブルに、読み込むスプレッドシートの名前の列を追加する場合は1を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**構文:** obj &lt;&lt; Get Excel Best Guess

**説明:** データおよび列見出しを動的に見つける場合は1を戻す。Excelデータを読み込むときに他のExcel設定を使用する場合は0を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**構文:** obj &lt;&lt; Get Excel Column Headers As Hierarchies

**説明:** 見出し行に結合されたセルを持つスプレッドシートで、見出しのセルを階層として扱う場合は、1を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**構文:** obj &lt;&lt; Get Excel Column Name Separator

**説明:** 複数のセルを連結して列見出しの名前にするときに、区切り文字として使用する文字列を取得する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**構文:** obj &lt;&lt; Get Excel First Data Column

**説明:** データとして読み込む、最初の列の番号を戻す。(先頭部分にある空白の列は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**構文:** obj &lt;&lt; Get Excel First Data Line

**説明:** データとして読み込む、最初の行を戻す。(先頭部分にある空白の行は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**構文:** obj &lt;&lt; Get Excel First Header Line

**説明:** 列見出しとして読み込む、最初の行の番号を戻す。(先頭部分にある空白の行は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**構文:** obj &lt;&lt; Get Excel Has Headers

**説明:** スプレッドシートから見出しを読み込む場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**構文:** obj &lt;&lt; Get Excel Import Color Cells

**説明:** スプレッドシートのデータセルの背景色を読み込む場合は、1を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**構文:** obj &lt;&lt; Get Excel Last Data Column

**説明:** スプレッドシートの、データ領域として読み込む最後の列を戻す。欠測値が戻された場合は、最後の列を動的に検索する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**構文:** obj &lt;&lt; Get Excel Last Data Row

**説明:** データとして読み込む最後の行を戻す。最後の行が動的に検索される場合は欠測値が戻されます。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**構文:** obj &lt;&lt; Get Excel Limit Column Type Detection

**説明:** 各列のデータタイプを検出する際に、すべてのセルをチェックする場合は0を戻し、一部だけをチェックする場合は1を戻す。スプレッドシートのサイズが大きい場合は、チェックを制限することで性能が向上する可能性がある。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**構文:** obj &lt;&lt; Get Excel Multiple Series Stack

**説明:** [Set Excel Column Headers As Hierarchies]が1に設定されていて、結合された列を積み重ねる場合は1を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**構文:** obj &lt;&lt; Get Excel Number of Header Lines

**説明:** スプレッドシート内で列見出しとして読み込む行数を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**構文:** obj &lt;&lt; Get Excel Replicate Data In Spanned Rows

**説明:** 1を指定すると、複数の見出し行が縦方向に結合されている場合に、その値を繰り返す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**構文:** obj &lt;&lt; Get Excel Replicate Headers In Spanned Rows

**説明:** JMPテーブルの列名を作成する際に、スプレッドシートの結合された見出しセルのセル値を繰り返す場合は1を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**構文:** obj &lt;&lt; Get Excel Suppress Empty Columns

**説明:** 空の列が読み込まれないようにするには、1を指定する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**構文:** obj &lt;&lt; Get Excel Suppress Hidden Columns

**説明:** 非表示の列を読み込まない場合は1を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**構文:** obj &lt;&lt; Get Excel Suppress Hidden Rows

**説明:** 非表示の行を読み込まない場合は1を戻す。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**構文:** obj &lt;&lt; Get Excel Worksheet Filter

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Worksheet Filter;

```

### Get File List

**構文:** obj &lt;&lt; Get File List

**JMP追加されたバージョン:** 18

```jsl



```

### Get Folder

**構文:** obj &lt;&lt; Get Folder

**説明:** フォルダ名を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );mfi << Get Folder;

```

### Get Folder Count

**構文:** obj &lt;&lt; Get Folder Count

**説明:** フォルダ内のファイル数を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );mfi << Get Folder Count;

```

### Get Import Callback

**構文:** obj &lt;&lt; Get Import Callback

**JMP追加されたバージョン:** 15

```jsl

Create Directory( "$temp/deleteme" );Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );mfi = Multiple File Import(	<<Set Folder( "$temp/deleteme/" ),	<<Set Name Filter( "test?.txt;" ),	<<Set Name Enable( 1 ),	<<Set Add File Name Column( 1 ),	<<Set Import Callback(		Function( {a, b},			Write( "\!na=", a );			Write( "\!nb=", b );		)	));mfi << Get Import Callback();

```

### Get Import Mode

**構文:** obj &lt;&lt; Get Import Mode

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Import Mode( "Row Per Line" );mfi << Get Import Mode();

```

### Get JSON Guess

**構文:** obj &lt;&lt; Get JSON Guess

**説明:** JSONデータを読み込んでデータテーブルを作成するビルトインの方法を戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Guess();

```

### Get JSON Method

**構文:** obj &lt;&lt; Get JSON Method

**説明:** JSONデータの読み込みに現在使用されている方法を戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Method();

```

### Get JSON Settings

**構文:** obj &lt;&lt; Get JSON Settings

**説明:** JSONデータを読み込むカスタムスクリプトを戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Settings();

```

### Get Name Count

**構文:** obj &lt;&lt; Get Name Count

**説明:** Set Name Enableが設定されている場合は現在の名前フィルタに一致するファイルの数を戻し、設定されていない場合はファイルの総数を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get Name Count();

```

### Get Name Enable

**構文:** obj &lt;&lt; Get Name Enable

**説明:** ファイルの読み込みに現在の名前フィルタが適用される場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Enable( 1 );mfi << Get Name Enable();

```

### Get Name Filter

**構文:** obj &lt;&lt; Get Name Filter

**説明:** 現在の名前フィルタを戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Filter( "*.csv;*.txt" );mfi << Set Name Enable( 1 );mfi << Get Name Filter();

```

### Get PDF Method

**構文:** obj &lt;&lt; Get PDF Method

**説明:** PDFデータの読み込みに現在使用されている方法を戻す。

**JMP追加されたバージョン:** 17

```jsl

mfi = Multiple File Import();mfi << Get PDF Method();

```

### Get PDF Settings

**構文:** obj &lt;&lt; Get PDF Settings

**説明:** PDFデータを読み込むカスタムJSLを戻す。

**JMP追加されたバージョン:** 17

```jsl

mfi = Multiple File Import();mfi << Get PDF Settings();

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** 現在の設定からスクリプトを作成する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get Script();

```

### Get Show Hidden

**構文:** obj &lt;&lt; Get Show Hidden

**説明:** 非表示のファイルが含まれるかどうかを戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set Show Hidden( 1 );mfi << Get Show Hidden();

```

### Get Size Count

**構文:** obj &lt;&lt; Get Size Count

**説明:** Set Size Enableが設定されている場合は現在のサイズフィルタに一致するファイルの数を戻し、設定されていない場合はファイルの総数を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Documents" );mfi << Set Size Filter( {0, 1000} );mfi << Set Size Enable( 1 );Print( mfi << Get Size Count() );mfi << Set Size Enable( 0 );Print( mfi << Get Size Count() );

```

### Get Size Enable

**構文:** 0|1 = obj &lt;&lt; Get Size Enable

**説明:** サイズフィルタが有効な場合は1を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );mfi << Get Size Enable();

```

### Get Size Filter

**構文:** obj &lt;&lt; Get Size Filter

**説明:** 読み込まれるファイルのうち最小のもののサイズを1つ目の値、最大のもののサイズを2つ目の値として持つリストを戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Filter( {0, 1000} );mfi << Get Size Filter();

```

### Get Stack Mode

**構文:** obj &lt;&lt; Get Stack Mode

**説明:** 類似した入力ファイルが、読み込みの際に1つのテーブルに連結される場合は"Stack Similar"を戻し、入力ファイルごとに1つのテーブルが作成される場合は"Table Per File"を戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Get Stack Mode();

```

### Get Subfolders

**構文:** obj &lt;&lt; Get Subfolders

**説明:** サブフォルダ内のファイルが含まれる場合は1を戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set Subfolders( 1 );mfi << Get Subfolders();

```

### Get Use File List

**構文:** obj &lt;&lt; Get Use File List

**JMP追加されたバージョン:** 18

```jsl



```

### Get XML Guess

**構文:** obj &lt;&lt; Get XML Guess

**説明:** XMLデータを読み込んでデータテーブルを作成するビルトインの方法を戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Guess();

```

### Get XML Method

**構文:** obj &lt;&lt; Get XML Method

**説明:** XMLデータの読み込みに現在使用されている方法を戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Method();

```

### Get XML Settings

**構文:** obj &lt;&lt; Get XML Settings

**説明:** xmlデータを読み込むためのカスタムスクリプトを戻す。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Settings();

```

### Import Data

**構文:** list of data tables = obj &lt;&lt; Import Data

**説明:** 現在の設定に基づいてデータを読み込み、データテーブルのリストを戻す。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );mfi << Set Name Filter( "*.txt" );mfi << Set Name Enable( 1 );tables = mfi << Import Data();

```

### Set Add File Date Column

**構文:** obj &lt;&lt; Set Add File Date Column

**説明:** これを設定すると、その行の読み込み元であるファイルのサイズを値として持つ列が作成される。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**構文:** obj &lt;&lt; Set Add File Name Column

**説明:** これを設定すると、その行の読み込み元であるファイルの名前を値として持つ列が作成される。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**構文:** obj &lt;&lt; Set Add File Size Column

**説明:** これを設定すると、その行の読み込み元であるファイルのサイズを値として持つ列が作成される。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**構文:** obj &lt;&lt; Set CSV Allow Numeric

**説明:** すべて文字タイプの列にする場合は0、数値と見られるデータから数値タイプの列を作成する場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**構文:** obj &lt;&lt; Set CSV EOF Comma

**説明:** 各列を表すフィールドをカンマで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**構文:** obj &lt;&lt; Set CSV EOF Other

**説明:** 各列を表すフィールドの区切りとして使用する値を設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**構文:** obj &lt;&lt; Set CSV EOF Space

**説明:** 各列を表すフィールドを1つのスペースで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**構文:** obj &lt;&lt; Set CSV EOF Spaces

**説明:** 各列を表すフィールドを1つのスペースで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**構文:** obj &lt;&lt; Set CSV EOF Tab

**説明:** 各列を表すフィールドをタブで区切る場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**構文:** obj &lt;&lt; Set CSV EOL CR

**説明:** 各行の区切りとしてCRを使用する場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**構文:** obj &lt;&lt; Set CSV EOL CRLF

**説明:** 各行の区切りとしてCRLFを使用する場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**構文:** obj &lt;&lt; Set CSV EOL LF

**説明:** 各行の区切りとしてLFを使用する場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**構文:** obj &lt;&lt; Set CSV EOL Other

**説明:** 入力ファイルの行を区切るカスタム値を設定する。この値により行が決まる。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**構文:** obj &lt;&lt; Set CSV EOL Semicolon

**説明:** 各行の区切りとしてセミコロンが使用される場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**構文:** obj &lt;&lt; Set CSV Escape

**説明:** フィールドの終わり、行の終わり、引用符のような特殊文字をエスケープする文字を設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**構文:** obj &lt;&lt; Set CSV First Data Line

**説明:** 読み込まれるファイルの、データの開始行。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**構文:** obj &lt;&lt; Set CSV First Header Line

**説明:** 読み込むファイルの列見出しの開始行を設定する。この行から列名が作成される。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**構文:** obj &lt;&lt; Set CSV Has Headers

**説明:** "CSV First Header Line"と"CSV Number Of Header Lines"を使用する場合は1に設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**構文:** obj &lt;&lt; Set CSV Number Of Header Lines

**説明:** 列名の作成に使用する列見出しの行数を設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**構文:** obj &lt;&lt; Set CSV Quote

**説明:** 引用符の文字を設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Quote( "'" );

```

### Set Charset

**構文:** obj &lt;&lt; Set Charset

**説明:** データの読み込み時に使用する文字コードを設定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**構文:** obj &lt;&lt; Set Date Enable

**説明:** 日時フィルタを有効にする。デフォルト値はオフで、日時フィルタは設定されている場合でも無視される。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );

```

### Set Date Filter

**構文:** obj &lt;&lt; Set Date Filter( {start of date time range, end of date time range} )

**説明:** 読み込むファイルを日時の範囲に基づいてフィルタリングする。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**構文:** obj &lt;&lt; Set Excel Add Sheet Name Column

**説明:** 1を指定すると、読み込まれたテーブルに、読み込むスプレッドシートの名前を持つ列が追加される。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**構文:** obj &lt;&lt; Set Excel Best Guess

**説明:** 各スプレッドシートのデータを動的に検索し、列名を推測する。これを設定すると、[Set Excel Add Sheet Name Column]以外のExcelパラメータは使用されない。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**構文:** obj &lt;&lt; Set Excel Column Headers As Hierarchies

**説明:** 複数の列見出し行を階層として扱う場合は1を指定する。これにより、結合されたセルの情報が見出しとして再編成され、生成されたテーブルに配置される。

**JMP追加されたバージョン:** 18

```jsl

Multiple File Import(	fJust << Set Folder( "$sample_import_data" ),	<<Set Name Filter( "texas precipitation.xlsx" ),	<<Set Name Enable( 1 ),	<<Set Excel Best Guess( 0 ),	<<Set Excel Has Headers( 1 ),	<<Set Excel Number of Header Lines( 2 ),	<<Set Excel First Data Line( 3 ),	<<Set Excel Last Data Row( 6 ),	<<Set Excel Column Headers As Hierarchies( 1 )) << import data;

```

### Set Excel Column Name Separator

**構文:** obj &lt;&lt; Set Excel Column Name Separator

**説明:** 複数のセルを連結して列見出しの名前にするときに、区切り文字として使用する文字列を設定する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**構文:** obj &lt;&lt; Set Excel First Data Column

**説明:** データとして読み込む、最初の列の番号を設定する。(先頭部分にある空白の列は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**構文:** obj &lt;&lt; Set Excel First Data Line

**説明:** データとして読み込む、最初の行の番号を設定する。(先頭部分にある空白の行は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**構文:** obj &lt;&lt; Set Excel First Header Line

**説明:** 列見出しの定義に使用される、最初の行の番号を設定する。(先頭部分にある空白の行は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**構文:** obj &lt;&lt; Set Excel Has Headers

**説明:** 設定した場合、[Set Excel First Header Line]と[Set Excel Number of Header Lines]が列見出しの定義に使用される。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**構文:** obj &lt;&lt; Set Excel Import Color Cells

**説明:** 1を指定すると、データセルの背景色が読み込まれる。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**構文:** obj &lt;&lt; Set Excel Last Data Column

**説明:** スプレッドシートの、データ領域として読み込む最後の列を設定する。 (先頭部分にある空白の列は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**構文:** obj &lt;&lt; Set Excel Last Data Row

**説明:** データとして読み込む最後の行を設定する。(先頭部分にある空白の行は除いて数える。)

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**構文:** obj &lt;&lt; Set Excel Limit Column Type Detection

**説明:** 列のデータタイプを自動検出するときに、列の一部の行だけをチェックする場合は1に設定する。値を1にすると高速になるが、列の先頭と末尾でデータタイプが異なる場合は、間違ったデータタイプを選択する可能性がある。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**構文:** obj &lt;&lt; Set Excel Multiple Series Stack

**説明:** このメッセージで1を指定し、[ Set Excel Column Headers As Hierarchies]も1が指定されている場合、結合された列が積み重ねられます。

**JMP追加されたバージョン:** 18

```jsl

Multiple File Import(	<<Set Folder( "$sample_import_data" ),	<<Set Name Filter( "texas precipitation.xlsx" ),	<<Set Name Enable( 1 ),	<<Set Excel Best Guess( 0 ),	<<Set Excel Has Headers( 1 ),	<<Set Excel Number of Header Lines( 2 ),	<<Set Excel First Data Line( 3 ),	<<Set Excel Last Data Row( 6 ),	<<Set Excel Column Headers As Hierarchies( 1 ), // must be set for Multiple Series Stack	<<Set Excel Multiple Series Stack( 1 ),) << import data;

```

### Set Excel Number of Header Lines

**構文:** obj &lt;&lt; Set Excel Number of Header Lines

**説明:** スプレッドシート内で列見出しとして読み込む行数を設定する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**構文:** obj &lt;&lt; Set Excel Replicate Data In Spanned Rows

**説明:** 1を指定した場合、複数の見出し行があり、1つのセルがそれらの行にまたがっていて、かつ水平方向には結合されていると、列見出しを作成するときに結合後の領域の先頭の値が繰り返される。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**構文:** obj &lt;&lt; Set Excel Replicate Headers In Spanned Rows

**説明:** 1に設定した場合、複数の見出し行があり、1つのセルがそれらの行にまたがっていて、かつ水平方向には結合されていない場合、列見出しを作成するときに結合された領域の先頭の値が繰り返される。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**構文:** obj &lt;&lt; Set Excel Suppress Empty Columns

**説明:** 空の列が読み込まれないようにするには、1を指定する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**構文:** obj &lt;&lt; Set Excel Suppress Hidden Columns

**説明:** 非表示の列を読み込まないようにするには1を指定する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**構文:** obj &lt;&lt; Set Excel Suppress Hidden Rows

**説明:** 非表示の行を読み込まないようにするには1を指定する。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**構文:** obj &lt;&lt; Set Excel Worksheet Filter

**説明:** フィルタに一致するワークシートだけを読み込む。

**JMP追加されたバージョン:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**構文:** obj &lt;&lt; Set File List

**JMP追加されたバージョン:** 18

```jsl



```

### Set Folder

**構文:** obj &lt;&lt; Set Folder

**説明:** 別のフォルダを選択する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**構文:** obj &lt;&lt; Set Import Callback

**説明:** 読み込みプロセスの最終ステップで実行するカスタムコールバック関数を指定する。Multiple File Import()関数は、コールバック関数にMultiple File Importオブジェクトと開いたデータテーブルのリストを渡す。

**JMP追加されたバージョン:** 15

```jsl

Create Directory( "$temp/deleteme" );Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );mfi = Multiple File Import(	<<Set Folder( "$temp/deleteme/" ),	<<Set Name Filter( "test?.txt;" ),	<<Set Name Enable( 1 ),	<<Set Add File Name Column( 1 ),	<<Set Import Callback(		Function( {a, b}, // a is the same is mfi			// b is a list of datatables that were created			Write( "\!na=", a );			Write( "\!nb=", b );		)	));mfi << Import Data;

```

### Set Import Mode

**構文:** obj &lt;&lt; Set Import Mode

**説明:** "Row Per File"に設定するとファイルごとに1行、"Row Per Line"に設定すると各ファイルのラインごとに1行が作成される。また、" CSVData"に設定すると[設定]の読み込みオプションが使用される。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**構文:** obj &lt;&lt; Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**説明:** 読み込むJSONデータに合ったJSON識別のタイプを設定する。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set JSON Method( "Guess" );mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**構文:** obj &lt;&lt; Set JSON Method

**説明:** ビルトインの識別機能を使用するには"Guess"、カスタムスクリプトを入力するには"JSON Settings"を設定する。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set JSON Method( "Guess" );mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**構文:** obj &lt;&lt; Set JSON Settings

**説明:** JSONデータを読み込むカスタムJSLを指定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$sample_data\big class.jmp" );dt << Save( "$Documents\Big Class.json" );Close( dt );Multiple File Import(	<<Set Folder( "$DOCUMENTS" ),	<<Set Name Filter( "big*.JSON" ),	<<Set Name Enable( 1 ),	<<Set JSON Method( "JSON Settings" ),	<<Set JSON Settings(		JSON Settings(			Stack( 0 ),			Row( "/root" ),			Col(				"/root/name",				Column Name( "name" ),				Fill( "Use Once" ),				Type( "Character" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/age",				Column Name( "age" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/sex",				Column Name( "sex" ),				Fill( "Use Once" ),				Type( "Character" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/height",				Column Name( "height" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/weight",				Column Name( "weight" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			)		)	)) << Import Data;

```

### Set Name Enable

**構文:** obj &lt;&lt; Set Name Enable

**説明:** 現在の名前フィルタを適用するかどうかを設定する。デフォルト値は0で、名前フィルタが設定されている場合でも無視する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Enable( 1 );

```

### Set Name Filter

**構文:** obj &lt;&lt; Set Name Filter

**説明:** 読み込むファイルを、ワイルドカード文字を使いセミコロンで区切られたリストでフィルタリングする。セミコロンや「|」を含んだファイル名を読み込むには、「?」または「\*」のようなワイルドカード文字を使う必要がある。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**構文:** obj &lt;&lt; Set PDF Method

**説明:** ビルトインの識別機能を使用するには"Guess"、カスタムjslを使用するには"PDF Settings"を指定する。

**JMP追加されたバージョン:** 17

```jsl

mfi = Multiple File Import();mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**構文:** obj &lt;&lt; Set PDF Settings

**説明:** PDFデータを読み込むカスタムJSLを指定する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$sample_data\big class.jmp" );win = New Window( "temp", Data Table Box( dt ) );win << Save pdf( "$Documents\big class.PDF" );win << Close window;Close( dt );Multiple File Import(	<<Set Folder( "$DOCUMENTS" ),	<<Set Name Filter( "big*.pdf" ),	<<Set Name Enable( 1 ),	<<Set PDF Method( "PDF Settings" ),	<<Set PDF Settings( PDF All Tables( combine( all ) ) )) << Import Data;

```

### Set Show Hidden

**構文:** obj &lt;&lt; Set Show Hidden

**説明:** Windowsで通常非表示になっているファイルを含めるかどうかを設定する。デフォルトでは、非表示のファイルは含めない。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**構文:** obj &lt;&lt; Set Size Enable

**説明:** 現在のサイズフィルタを適用するかどうかを設定する。デフォルト値はオフで、サイズフィルタが設定されている場合でも無視する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**構文:** obj &lt;&lt; Set Size Filter( {smallest size to include, largest size to include} )

**説明:** 読み込むファイルをサイズに基づいてフィルタリングする。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**構文:** obj &lt;&lt; Set Stack Mode( "Stack Similar" | "Table Per File )

**説明:** ファイルを読み込む際、類似したものを1つのテーブルに結合するか、ファイルごとに1つのテーブルを作成するかを指定する。

**JMP追加されたバージョン:** 14

```jsl

mfi = Multiple File Import();mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**構文:** obj &lt;&lt; Set Subfolders

**説明:** サブフォルダ内のファイルを含めるかどうかを設定する。デフォルトでは含めない。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set Subfolders( 1 );

```

### Set Use File List

**構文:** obj &lt;&lt; Set Use File List

**JMP追加されたバージョン:** 18

```jsl



```

### Set XML Guess

**構文:** obj &lt;&lt; Set XML Guess( "Tall"|"Wide"|"Huge" )

**説明:** 読み込むXMLデータに合ったXML識別のタイプを指定する。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set XML Method( "Guess" );mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**構文:** obj &lt;&lt; Set XML Method

**説明:** データが縦長か、横長か、巨大かをJMPに特定させる場合は"Guess"を指定する。カスタムスクリプトを設定する場合は"XML Settings"を指定する。

**JMP追加されたバージョン:** 15

```jsl

mfi = Multiple File Import();mfi << Set XML Method( "Guess" );mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**構文:** obj &lt;&lt; Set XML Settings

**説明:** XMLデータを読み込むカスタムスクリプトを指定する。

**JMP追加されたバージョン:** 15

```jsl

Multiple File Import(	<<Set Folder( "$SAMPLE_IMPORT_DATA" ),	<<Set Name Filter( "*.xml" ),	<<Set Name Enable( 1 ),	<<Set XML Method( "XML Settings" ),	<<Set XML Settings(		XML Settings(			Row( "/book/story/chapter/para" ),			Col(				"/book/story/chapter/para",				Column Name( "story.chapter.para" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/book/story/chapter/para/price",				Column Name( "story.chapter.para.price" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/book/story/chapter/para/quantity",				Column Name( "story.chapter.para.quantity" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			)		)	)) << Import Data;

```

