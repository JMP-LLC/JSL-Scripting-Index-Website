# Preferences



## 項目のメッセージ

### Add Color Theme

**構文:** obj &lt;&lt; Add Color Theme( Add Color Theme({"Name", &lt;type|style&gt;, {color, ..., &lt;Missing(color)&gt;}, &lt;{position, ...}&gt;}, &lt;color blindness discernability&gt;) )

**説明:** 新しいカスタムカラーテーマを作成し、テーマピッカーに登録する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference(
	Add Color Theme(
		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0, 0.5,
		0.642857142857143, 1}}
	)
);
Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**構文:** obj &lt;&lt; Add Rows default number of rows( number )

**説明:** 「行の追加」ウィンドウの追加行数の初期値。

**JMP追加されたバージョン:** 18

### Add Rows recall last value

**構文:** obj &lt;&lt; Add Rows recall last value( state=0|1 )

**説明:** 最後に入力した値が、追加する行数として使用される。

**JMP追加されたバージョン:** 18

### Add files opened by scripts to the Recent Files list

**構文:** obj &lt;&lt; Add files opened by scripts to the Recent Files list( state=0|1 )

**説明:** JSLのOpen()関数で開いたファイルを［最近使ったファイル］リストに表示するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**構文:** obj &lt;&lt; Allow 16 Bit List Check Compression( state=0|1 )

**説明:** 列に255個を超える一意の値がある場合にリストチェックを使って値をエンコードするかどうかを指定する。エンコードした列は、JMP 14以前では読み込めなくなる。

**JMP追加されたバージョン:** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**構文:** obj &lt;&lt; Allow Compress Selected Columns to create compact columns( state=0|1 )

**説明:** [選択された列の圧縮]は、ディスク容量の節約につながる場合にコンパクト列を作成する。

**JMP追加されたバージョン:** 18

### Allow Unquoted Strings in JSL

**構文:** obj &lt;&lt; Allow Unquoted Strings in JSL( "許可しない"|"許可する(警告あり)"|"許可する(警告なし)" )

### Allow mixed ISO format patterns

**構文:** obj &lt;&lt; Allow mixed ISO format patterns( state=0|1 )

**説明:** ISOの週<ww>と非ISOの年<YYYY>または<YY>の両方、および非ISOの週<WW1>または<WW2>とISOの年<yyyy>または<yy>の両方を持つ形式パターンの日付を使用できるようにする。ISO形式の週および年は、ISO形式でない週および年と互換性がないため、混合するべきではなく、デフォルトでは、そのような日付形式の作成は許可されていない。

**JMP追加されたバージョン:** 18

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**構文:** obj &lt;&lt; Allow short numeric data format( state=0|1 )

**説明:** 整数型(short-integer)を使用可能にするかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Auto Hide Menus

**構文:** obj &lt;&lt; Auto Hide Menus( "常に"|"しない"|"ウィンドウサイズに基づいて" )

**説明:** メニューとツールバーを自動的に非表示にするかどうか、またいつ非表示にするかを指定する。注: Windowsのみで使用可能。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**構文:** obj &lt;&lt; Auto Run Recent JSL( state=0|1 )

**説明:** 最近使ったファイルで選択したJSLスクリプトを開かずに実行する機能のデフォルト設定を変更する。注: Windowsのみで使用可能。

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**構文:** obj &lt;&lt; Auto match brackets in script editor( state=0|1 )

**説明:** スクリプトウィンドウで開き括弧を入力すると自動的に閉じ括弧を挿入する機能のデフォルト設定を変更する。注: Windowsのみで使用可能。

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**構文:** obj &lt;&lt; Autosave maximum data table columns( number )

**説明:** 自動的に保存されるデータテーブルの最大列数。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**構文:** obj &lt;&lt; Autosave maximum data table rows( number )

**説明:** 自動的に保存されるデータテーブルの最大行数。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**構文:** obj &lt;&lt; Autosave timeout( number )

**説明:** 自動保存の時間の間隔は分単位。この時間が経過すると、開いているもののうち変更されたファイルがすべて保存される。デフォルト値は"0"で、自動保存は実行されない。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**構文:** obj &lt;&lt; Axis Title Above( state=0|1 )

**説明:** グラフのY軸のラベルの位置を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**構文:** obj &lt;&lt; Background Color( color )

**説明:** すべてのウィンドウの背景色のデフォルトを変更する。注:Windowsのみで使用可能。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**構文:** obj &lt;&lt; Bad to Good Color Theme( "name" )

**説明:** すべてのグラフにおける連続変数に対するカラーテーマのデフォルトを変更する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Bad to Good Color Theme( "Green to Purple" ) );
Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**構文:** obj &lt;&lt; Box Plot Line Width( number )

**説明:** 箱ひげ図のデフォルトの線の幅を変更する。

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**構文:** obj &lt;&lt; Bypass Proxy( text )

**説明:** 指定したホストに対してプロキシサーバーを使用しない。

**JMP追加されたバージョン:** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**構文:** obj &lt;&lt; Categorical Color Theme( "name" )

**説明:** すべてのグラフにおけるカテゴリカル変数に対するカラーテーマのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Categorical Color Theme ) );
Set Preference( Categorical Color Theme( "Jet" ) );
Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**構文:** obj &lt;&lt; Categorical graph type( "自動"|"ヒストグラム"|"棒"|"ヒートマップ"|"モザイク"|"ランチャート"|"ランチャート" )

**説明:** 名義尺度および順序尺度の列のヘッダに表示するデフォルトのグラフ。

**JMP追加されたバージョン:** 18

### Classic Data Table Selection

**構文:** obj &lt;&lt; Classic Data Table Selection( state=0|1 )

**説明:** データテーブル内で従来のクリック選択動作を有効にする。このモードでは、列の選択は行の選択に影響せず、行の選択は列の選択に影響しない。

**JMP追加されたバージョン:** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**構文:** obj &lt;&lt; Color Mode( "システム設定を使用"|"ライト"|"ダーク"|"ハイコントラスト" )

**説明:** JMPのウィンドウで特定のカラーテーマを使用するか、OSのシステム設定に従うかを切り替える。

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**構文:** obj &lt;&lt; Columns Manager

**JMP追加されたバージョン:** 18

### Conditional formatting rules

**構文:** obj &lt;&lt; Conditional formatting rules

**説明:** [条件付き表示形式の使用]環境設定により表示または非表示にする、カスタム条件ルールを作成する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Conditional Formatting Rules(
		RuleSet(
			RuleName( "My Special Rule" ),
			GreaterThan(
				Value( 0 ),
				Inclusive( 0 ),
				Format(
					Text Color( "Medium Dark Red" ),
					Back Color( "Light Yellow" ),
					Annotation( 1 ),
					FontStyle( Bold )
				)
			)
		)
	)
);

```

### Continuous Color Theme

**構文:** obj &lt;&lt; Continuous Color Theme( "name" )

**説明:** すべてのグラフにおける連続変数に対するカラーテーマのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Continuous Color Theme( "Green to Purple" ) );
Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**構文:** obj &lt;&lt; Continuous graph type( "自動"|"ヒストグラム"|"棒"|"ヒートマップ"|"モザイク"|"ランチャート"|"ランチャート" )

**説明:** 連続尺度の列のヘッダに表示するデフォルトのグラフ。

**JMP追加されたバージョン:** 18

### Custom Locale Settings

**構文:** obj &lt;&lt; Custom Locale Settings

**説明:** 小数点記号や桁区切りなどのロケール設定よりも優先される。

**JMP追加されたバージョン:** 16

#### 例 1

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator() ) );

```

#### 例 2

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

// Clear all locale overrides...
Preferences( Custom Locale Settings( Reset to Defaults ) );

```

#### 例 3

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**構文:** obj &lt;&lt; Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**構文:** obj &lt;&lt; Data Filter Check Box Display( state=0|1 )

**説明:** カテゴリカルなフィルタ列のデフォルトの表示を、チェックボックス表示にする。

### Data Filter Conditional

**構文:** obj &lt;&lt; Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**構文:** obj &lt;&lt; Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**構文:** obj &lt;&lt; Data Filter Histograms and Bars( state=0|1 )

**説明:** フィルタ列のヒストグラムと棒グラフを表示する。

**JMP追加されたバージョン:** 15

### Data Filter Include Check

**構文:** obj &lt;&lt; Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**構文:** obj &lt;&lt; Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**構文:** obj &lt;&lt; Data Filter Show Check( state=0|1 )

### Data Table Actions

**構文:** obj &lt;&lt; Data Table Actions( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**構文:** obj &lt;&lt; Data Table Title on Output( state=0|1 )

**説明:** データテーブル名をレポートの出力の最上部に表示するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**構文:** obj &lt;&lt; Date Title on Output( state=0|1 )

**説明:** 日付を出力のタイトルに表示するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**構文:** obj &lt;&lt; Default Field Width( number )

**説明:** 数値タイプの列を新規作成したときにデフォルトで適用されるフィールド幅を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**構文:** obj &lt;&lt; Default Project Show Bookmarks( state=0|1 )

**説明:** 新規プロジェクトに「プロジェクト」ペインを表示する。

**JMP追加されたバージョン:** 16

### Default Project Show Contents

**構文:** obj &lt;&lt; Default Project Show Contents( state=0|1 )

**説明:** 新規プロジェクトに「コンテンツ」ペインを表示する。

**JMP追加されたバージョン:** 16

### Default Project Show Log

**構文:** obj &lt;&lt; Default Project Show Log( state=0|1 )

**説明:** 新規プロジェクトに「ログ」ペインを表示する。

**JMP追加されたバージョン:** 16

### Default Project Show Recent Files

**構文:** obj &lt;&lt; Default Project Show Recent Files( state=0|1 )

**説明:** 新規プロジェクトに「最近使ったファイル」ペインを表示する。

**JMP追加されたバージョン:** 16

### Default Project Show Workspace

**構文:** obj &lt;&lt; Default Project Show Workspace( state=0|1 )

**説明:** 新規プロジェクトに「ワークスペース」ペインを表示する。

**JMP追加されたバージョン:** 16

### Display JSL SAS results as HTML

**構文:** obj &lt;&lt; Display JSL SAS results as HTML( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Display JSL SAS results as HTML"n( 1 ) );

```

### Display indexes in English

**構文:** obj &lt;&lt; Display indexes in English( state=0|1 )

**説明:** オブジェクトのスクリプトの索引、JSL関数の索引、およびディスプレイボックスの索引を英語で表示する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**構文:** obj &lt;&lt; Double Click Opens Column Info( state=0|1 )

**説明:** 列見出しをダブルクリックすると、列名の編集が可能になるのではなく、列情報ダイアログが開く。

**JMP追加されたバージョン:** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**構文:** obj &lt;&lt; Empty Project at Startup( "常に"|"開いているプロジェクトがない場合"|"しない" )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**構文:** obj &lt;&lt; Emulate Zoom Mode( state=0|1 )

**説明:** ウィンドウを最大化したときにウィンドウリストを表示するかどうかを指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**構文:** obj &lt;&lt; Enable Advanced Linear Algebra Routines( state=0|1 )

**説明:** 複数のプラットフォームおよびJSLの関数で使用されている線形代数計算ルーチンを変更する。この項目を選択すると、BLASおよびLAPACKライブラリに基づく高度な線形代数ルーチンが使用できるようになる。JMPのドキュメントに、この環境設定の影響を受けるプラットフォームとJSL関数についての詳細が記載されている。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Telemetry

**構文:** obj &lt;&lt; Enable Telemetry( state=0|1 )

### Enable direct input from IME

**構文:** obj &lt;&lt; Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**構文:** obj &lt;&lt; End Menu Item Marking After Deadline( state=0|1 )

**説明:** 設定された期限を過ぎると、メニューにマークが表示されなくなる。

**JMP追加されたバージョン:** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**構文:** obj &lt;&lt; Enhanced Log Alternate Table Rows( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**構文:** obj &lt;&lt; Enhanced Log Color By Window( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**構文:** obj &lt;&lt; Enhanced Log Color By Window Color Theme( "name" )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Enhanced Log Color By Window Color Theme ) );
Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );
Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**構文:** obj &lt;&lt; Enhanced Log Filter Action( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**構文:** obj &lt;&lt; Enhanced Log Filter Error( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**構文:** obj &lt;&lt; Enhanced Log Filter Log( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**構文:** obj &lt;&lt; Enhanced Log Filter Result( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**構文:** obj &lt;&lt; Enhanced Log Filter Script( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**構文:** obj &lt;&lt; Enhanced Log Filter Warn( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**構文:** obj &lt;&lt; Enhanced Log Origin Column( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**構文:** obj &lt;&lt; Enhanced Log Result Column( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**構文:** obj &lt;&lt; Enhanced Log Shade Table Cells( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**構文:** obj &lt;&lt; Enhanced Log Shade Table Headings( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**構文:** obj &lt;&lt; Enhanced Log Table Column Borders( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**構文:** obj &lt;&lt; Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**構文:** obj &lt;&lt; Enhanced Log Table Row Borders( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**構文:** obj &lt;&lt; Enhanced Log Timestamp Column( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**構文:** obj &lt;&lt; Enhanced Log Underline Table Headings( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**構文:** obj &lt;&lt; Enter Key moves down( state=0|1 )

**説明:** 数字キーパッドにあるEnterキーの動作のデフォルト設定を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**構文:** obj &lt;&lt; Evaluate OnOpen Scripts( "確認"|"しない"|"常に" )

**説明:** OnOpenスクリプトの実行を許可しない場合は[しない]に設定する。作成元が不明なスクリプトは実行するべきではない。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**構文:** obj &lt;&lt; Excel Open Method( "すべてのシートを開く"|"個々のExcelシートを選択"|"Excelウィザードを使用" )

### Fast Marker Threshold

**構文:** obj &lt;&lt; Fast Marker Threshold( number )

**説明:** グラフ上のマーカーを更新するときの処理のデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**構文:** obj &lt;&lt; Fill Hollow Markers( state=0|1 )

**説明:** 中抜きマーカーがグラフの背景色で塗られる。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**構文:** obj &lt;&lt; Fill Selection Color( color )

**説明:** 塗りつぶし選択モードが[選択されたものを指定の色で表示]に設定されている場合に、選択されたものに使用される色。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**構文:** obj &lt;&lt; Fill Selection Fade( number )

**説明:** 選択されていないものの塗りつぶしをどの程度薄く表示するかのデフォルト設定を変更する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**構文:** obj &lt;&lt; Fill Selection Mode( "選択されたものにパターンを付ける"|"選択されたものを濃く表示する"|"選択されたものに輪郭をつける"|"選択されたものを指定の色で表示"|"選択されていないものを薄く表示" )

**説明:** ヒストグラムや棒グラフなどで選択した矩形の表示方法を変更する。デフォルトでは、選択したものにはパターンが描かれる。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**構文:** obj &lt;&lt; Formula Evaluation( "アイドル時に"|"直ちに" )

**説明:** 計算式の評価をアイドル時間中に行うか、直ちにフォアグラウンドで行うかを指定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**構文:** obj &lt;&lt; Frame Border( state=0|1 )

**説明:** すべてのグラフに対して、軸でない側のフレームの枠線を表示するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**構文:** obj &lt;&lt; Frame Color( color )

**説明:** すべてのグラフに対して、フレームを表示するかどうかのデフォルト設定を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**構文:** obj &lt;&lt; Get

**説明:** 特定の環境設定を指定するためのスクリプトを戻す。

```jsl

a = Preferences[1] << Get( Show the Tip of the Day at startup );
Show( a );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** 環境設定を設定するスクリプトを戻す。

```jsl

a = Preferences[1] << Get Script;
Show( a );

```

### Graph Background Color

**構文:** obj &lt;&lt; Graph Background Color( color )

**説明:** すべてのグラフの背景色のデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**構文:** obj &lt;&lt; Graph Border( state=0|1 )

**説明:** すべてのグラフに対して、境界線を表示するかどうかのデフォルト設定を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**構文:** obj &lt;&lt; Graph Height( number )

**説明:** すべてのグラフにおけるグラフの高さ(縦幅)のデフォルトを変更する

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**構文:** obj &lt;&lt; Graph Marker( marker )

**説明:** すべてのグラフにおけるマーカーの形状のデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**構文:** obj &lt;&lt; Graph Marker Theme( "標準"|"中抜き"|"塗りつぶし"|"ペア"|"クラシック"|"英数字" )

**説明:** すべてのグラフにおけるマーカーのテーマのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**構文:** obj &lt;&lt; Graph Marker Unselected Fade( number )

**説明:** 選択されていないマーカーをどの程度薄く表示するかのデフォルト設定を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**構文:** obj &lt;&lt; Graph Marker size( "ドット"|"小"|"中"|"大"|"XL"|"XXL"|"XXXL" )

**説明:** すべてのグラフにおけるマーカーサイズのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**構文:** obj &lt;&lt; HDF5PathDelimiter( text )

**JMP追加されたバージョン:** 17

### Header summary heat map color theme

**構文:** obj &lt;&lt; Header summary heat map color theme( "name" )

**説明:** すべてのグラフにおける連続変数に対するカラーテーマのデフォルトを変更する。

**JMP追加されたバージョン:** 18

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.
Show( Get Preference( Header summary heat map color theme ) );
Set Preference( Header summary heat map color theme( "Green to Purple" ) );
Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**構文:** obj &lt;&lt; Hide &apos;Find and Replace&apos; window( state=0|1 )

**説明:** 検索/置換を行った後、すぐに「検索/置換」ウィンドウを閉じるかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**構文:** obj &lt;&lt; Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**構文:** obj &lt;&lt; Hide Overlapping Labels( state=0|1 )

**説明:** グラフ内の重なっているラベルを表示しない。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**構文:** obj &lt;&lt; Histogram Color( color )

**説明:** ヒストグラムのデフォルトの色を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**構文:** obj &lt;&lt; Histogram Line Color( color )

**説明:** ヒストグラムのデフォルトの線の色を変更する。

**JMP追加されたバージョン:** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
 
Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**構文:** obj &lt;&lt; Hover Help( state=0|1 )

**説明:** マウスで円に動かすと表示されるツールヒント型ヘルプ

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**構文:** obj &lt;&lt; Image Format for PowerPoint( "デフォルトのOS形式"|"PNG"|"JPEG" )

### Include Responses Not in Data

**構文:** obj &lt;&lt; Include Responses Not in Data( state=0|1 )

**説明:** データテーブルに出現しない応答値の値ラベルを表示する。

### Initial JMP Window

**構文:** obj &lt;&lt; Initial JMP Window( "ホームウィンドウ"|"JMPスターター"|"ウィンドウリスト" )

**説明:** JMPを起動したときに呼び出すJMPウィンドウを決定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**構文:** obj &lt;&lt; Initial Log Window( state=0|1 )

**説明:** 開始時にログウィンドウを表示するか非表示にするかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**構文:** obj &lt;&lt; Initial Splash Window( state=0|1 )

**説明:** 開始時のスプラッシュウィンドウの表示／非表示のデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**構文:** obj &lt;&lt; Inside Ticks( state=0|1 )

**説明:** グラフのフレーム内に軸目盛りを表示するかどうかのデフォルト設定を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**構文:** obj &lt;&lt; Interactive HTML Color( "明るい背景色"|"暗い背景色"|"グレーの背景色" )

**説明:** インタラクティブHTMLのカラーテーマのデフォルト設定を変更する。

**JMP追加されたバージョン:** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**構文:** obj &lt;&lt; Internet Open Timeout( number )

**説明:** [インターネットから開く]を実行してから、接続の試みを中止するまでの時間を秒数で指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**構文:** obj &lt;&lt; JMP Live Timeout( number )

**説明:** JMP Liveへの発行のタイムアウト値を設定する。デフォルトは180秒。

**JMP追加されたバージョン:** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**構文:** obj &lt;&lt; JMP Theme( "従来型"|"ゆったり"|"JMP Live"|"JMP Clinical" )

**説明:** JMPのすべてでテーマを切り替える。

**JMP追加されたバージョン:** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

restore theme = Get Preference( JMP Theme );
Set Preference( JMP Theme( "Traditional" ) );
Wait( 2 );
Set Preference( JMP Theme( "Comfortable" ) );
Wait( 2 );
Set Preference( JMP Theme( "JMP Live" ) );
Wait( 2 );
restore theme;

```

### JSL save column groups with group name

**構文:** obj &lt;&lt; JSL save column groups with group name( state=0|1 )

**説明:** 列のリストを含むスクリプトを保存する際、列のリストが列グループである場合にcolumn groupの構文を使用する。

**JMP追加されたバージョン:** 16

### JSS Dir

**構文:** obj &lt;&lt; JSS Dir( text )

**説明:** Changes the JSS directory for development use.

**JMP追加されたバージョン:** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**構文:** obj &lt;&lt; Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**構文:** obj &lt;&lt; Language Switch Warning( state=0|1 )

**説明:** 言語の変更が検出されたときに警告を出すかどうかのデフォルトを変更する。注: Windowsでのみ使用可能。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**構文:** obj &lt;&lt; Laser pointer( "オフ"|"紫"|"青"|"緑"|"黄色"|"オレンジ"|"赤" )

**説明:** レポート上に表示するレーザーポインタのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**構文:** obj &lt;&lt; Line Width( number )

**説明:** グラフコンテンツのデフォルトの線の幅を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**構文:** obj &lt;&lt; Log Mode( "拡張"|"テキスト" )

**説明:** ログの表示形式に関するデフォルト設定を変更する。メインログとプロジェクトログが対象。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**構文:** obj &lt;&lt; Log Window Height( number )

**説明:** ログウィンドウのサイズのデフォルト設定を変更する。注: Windowsのみで使用可能。

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**構文:** obj &lt;&lt; Major Grid Line Color( color )

**説明:** 主目盛りのグリッド線のデフォルトの色を指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**構文:** obj &lt;&lt; Major Grid Lines( state=0|1 )

**説明:** 主目盛りのグリッド線の表示/非表示のデフォルトを切り替える。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**構文:** obj &lt;&lt; Mark Menu Items Added Since( "なし"|"現在のバージョン"|"18"|"17"|"16"|"15"|"14" )

**説明:** 特定のJMPバージョンより新しいメニュー項目にマークを付ける。

**JMP追加されたバージョン:** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**構文:** obj &lt;&lt; Marker Label Color( color )

**説明:** [マーカーラベルの色の種類]が[指定した色]に設定されている場合のマーカーラベルの色。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**構文:** obj &lt;&lt; Marker Label Color Style( "マーカーの色"|"マーカーの色を薄く表示"|"指定した色" )

**説明:** マーカーラベルのデフォルトの色付けスタイルを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**構文:** obj &lt;&lt; Marker Selection Mode( "選択されていないものを薄く表示"|"選択されたもの大きく表示"|"選択されたものの周りを囲む"|"選択されたものに輪郭をつける"|"選択されたものを指定の色で表示" )

**説明:** マーカー選択モードのデフォルト設定を変更する。デフォルトは[選択されていないものを薄く表示]。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**構文:** obj &lt;&lt; Maximum Auto Size Column List Width( number )

**JMP追加されたバージョン:** 18

### Maximum JMP Call Depth

**構文:** obj &lt;&lt; Maximum JMP Call Depth( number )

**説明:** JMPにおける呼び出しの最大の深さのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**構文:** obj &lt;&lt; Maximum Parse Depth( number )

**説明:** スクリプトをJMPが解析するときの深さの最大値を変更する。デフォルト値は512。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**構文:** obj &lt;&lt; Maximum Symbol Evaluation Recursion Depth( number )

**説明:** シンボルの再帰的評価の最大深さのデフォルトを変更する。デフォルト値は25。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**構文:** obj &lt;&lt; Minor Grid Line Color( color )

**説明:** 補助目盛りのグリッド線のデフォルトの色を指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**構文:** obj &lt;&lt; Minor Grid Lines( state=0|1 )

**説明:** 補助目盛りのグリッド線の表示/非表示のデフォルトを切り替える。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**構文:** obj &lt;&lt; New Project Template( text )

**説明:** 新しい空白のプロジェクトに使用するファイル。

**JMP追加されたバージョン:** 16

### New character columns default to compact

**構文:** obj &lt;&lt; New character columns default to compact( state=0|1 )

**説明:** 新しい文字タイプの列、またはデータタイプを文字タイプに切り替えた列が、自動的にコンパクト列になる。

**JMP追加されたバージョン:** 18

### OAuth2 Authentication Browser

**構文:** obj &lt;&lt; OAuth2 Authentication Browser( text=Default )

**説明:** OAuth2サーバーに、指定した種類のブラウザでサインインする。有効な値は、［デフォルト］、［組み込み］、［外部］。 デフォルトの値は"Default"。

**JMP追加されたバージョン:** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set(
	Sign in to OAuth2 servers with the specified browser type( "Embedded" )
);

```

### ODBC Allow Table Replace

**構文:** Preferences[1] &lt;&lt; Name("ODBC Allow Table Replace") ( state = 0|1 )

**説明:** ODBCでのテーブルの置換を許可するには、このオプションを選択する。デフォルトではこのオプションは選択されている。ODBCテーブルを置換すると、データベース内の既存のテーブルが削除され、新しいテーブルで置き換えられる。

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.
     
Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**構文:** obj &lt;&lt; ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**構文:** obj &lt;&lt; Open Text File Charset( "自動識別"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**説明:** Unicode BOMがない場合に使用するエンコーディングを指定する。デフォルトでは、ファイルの内容からエンコーディングを自動識別します。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**構文:** obj &lt;&lt; Open character columns as compact columns( state=0|1 )

**説明:** JMPが最適と判断した場合に、文字タイプの列を自動的にコンパクト列として開く。

**JMP追加されたバージョン:** 18

### Open files from outside projects in

**構文:** obj &lt;&lt; Open files from outside projects in( "プロジェクトの外"|"[プロジェクトを開く]または[プロジェクトの外]"|"[プロジェクトを開く]または[プロジェクトの新規作成]"|"プロジェクトの新規作成" )

**JMP追加されたバージョン:** 16

### Outline Close Orientation

**構文:** obj &lt;&lt; Outline Close Orientation( "自動"|"横"|"縦" )

**説明:** アウトラインボックスを縦に折りたたむオプション。横方向のスペースを節約することができる。

### Parallel Data Table Column Decompression

**構文:** obj &lt;&lt; Parallel Data Table Column Decompression( state=0|1 )

**説明:** 列の展開を並列処理で行うかどうかの設定を変更する。デフォルトでは並列処理を行う。このオプションをオフにすると、非常に大規模なテーブルを読み込むことができるようになる可能性がある。

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**構文:** obj &lt;&lt; Partial Selection Indicator( "なし"|"バー"|"円"|"ワッフル" )

**説明:** グループの部分選択の表示方法。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**構文:** obj &lt;&lt; Platform Launch Actions( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**構文:** Preferences[1] &lt;&lt; Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
     
Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**構文:** obj &lt;&lt; Preserve SAS formats when exporting to SAS( state=0|1 )

**説明:** SASへの書き出し時にSASフォーマットを保持するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**構文:** obj &lt;&lt; Preserve SAS variable names when exporting to SAS( state=0|1 )

**説明:** SASへの書き出し時にSAS変数名を保持するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**構文:** obj &lt;&lt; Print Data Grid as is( state=0|1 )

**説明:** データグリッドを画面表示のまま印刷するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**構文:** obj &lt;&lt; Prompt to save when closing summary tables( state=0|1 )

**説明:** 要約テーブルを閉じるときに保存を促すメッセージを表示するかしないか。

**JMP追加されたバージョン:** 14

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**構文:** obj &lt;&lt; Proxy Port( number )

**説明:** 指定したポートを使用する。

**JMP追加されたバージョン:** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**構文:** obj &lt;&lt; Proxy Server( text )

**説明:** 指定したプロキシを使用する。

**JMP追加されたバージョン:** 15

```jsl


//Caution: Changing a preference will 
//affect the default behavior of JMP.

url = "http:://myproxy.com:80";
Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**構文:** obj &lt;&lt; Proxy User( text )

**説明:** プロキシ認証に使用するユーザ名とパスワード。[ユーザ名]:[パスワード]

**JMP追加されたバージョン:** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**構文:** obj &lt;&lt; Reopen the initial JMP window on last window close( state=0|1 )

**説明:** 最後のJMPウィンドウを閉じたときに開始時のJMPウィンドウを自動的に再度開くかどうかのデフォルトを決定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**構文:** obj &lt;&lt; Report Invalid Display Box Messages( state=0|1 )

**説明:** ディスプレイボックスに対するメッセージが無効な場合にエラーを表示するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**構文:** obj &lt;&lt; Report JSL warnings and errors interactively( state=0|1 )

**説明:** JSLで発生した警告やエラーがログに出力され、同時にダイアログでも表示される。無効にした場合、警告とエラーはログに出力されるだけで、ダイアログは表示されない。

**JMP追加されたバージョン:** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**構文:** obj &lt;&lt; Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**構文:** obj &lt;&lt; Report Snapshot On Close( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**構文:** obj &lt;&lt; Row Editor Always Show All Columns( state=0|1 )

**説明:** チェックすると、行の編集ウィンドウに、選択されている列があるかどうかにかかわらずデータテーブルのすべての列が表示される。

**JMP追加されたバージョン:** 16

### Ruler Tool Units

**構文:** obj &lt;&lt; Ruler Tool Units( "キロメートル"|"マイル" )

**説明:** グラフビルダーの地図で使用される場合に、定規ツールの単位を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**構文:** obj &lt;&lt; SAS Automatically Generate ODS results( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**構文:** obj &lt;&lt; SAS Connect to CAS with SAS Viya( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
          
Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**構文:** obj &lt;&lt; SAS Data Import Close Warning( state=0|1 )

**JMP追加されたバージョン:** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**構文:** obj &lt;&lt; SAS Data Import Uses Labels( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**構文:** obj &lt;&lt; SAS Import generated datasets into JMP( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**構文:** obj &lt;&lt; SAS ODS Results Format( "HTML"|"テキスト" )

### SAS ODS Style

**構文:** obj &lt;&lt; SAS ODS Style( text=Statistical )

**説明:** デフォルトの値は"Statistical"。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS ODS Style"n( "HTMLBlue" ) );

```

### SAS Organize results in JMP project

**構文:** obj &lt;&lt; SAS Organize results in JMP project( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**構文:** obj &lt;&lt; SAS Transport Use UTF8( state=0|1 )

**説明:** 移送ファイルのデフォルトの文字エンコーディングをUTF-8に変更してください。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**構文:** obj &lt;&lt; SPSSMultiResponseDelimiter( text=| )

**説明:** デフォルトの値は"|"。

**JMP追加されたバージョン:** 16

### Save Data Table Columns GZ Compressed

**構文:** obj &lt;&lt; Save Data Table Columns GZ Compressed( state=0|1 )

**説明:** データテーブルをGZip圧縮形式で保存するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**構文:** obj &lt;&lt; Save Image DPI( number )

**説明:** イメージを保存する際に使用するDPI設定を指定します。指定しない場合、デフォルト値が使用されます。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
            
Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**構文:** obj &lt;&lt; Save Journals GZ Compressed( state=0|1 )

**説明:** ジャーナルをGZip圧縮形式で保存するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**構文:** obj &lt;&lt; Save Scripts in English( state=0|1 )

**説明:** スクリプトを表示言語ではなく英語で保存するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**構文:** obj &lt;&lt; Save Text Files as Unicode( state=0|1 )

**説明:** テキストファイルをUnicode形式で保存するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**構文:** obj &lt;&lt; Save table with report( "常に"|"しない"|"確認" )

**説明:** レポートを保存する際、データテーブルも組み込むかどうかを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**構文:** obj &lt;&lt; Save the session when exiting( "常に"|"しない"|"確認" )

**説明:** JMPを終了する際のセッション保存に関する処理のデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**構文:** obj &lt;&lt; Selected Marker Color( color )

**説明:** [マーカー選択モード]で[選択されたものを指定の色で表示]を使用する場合に選択されたマーカーの色を変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**構文:** obj &lt;&lt; Semantic formatting

**説明:** 設定した条件が現在のレポートコンテキストに一致する場合に使用されるセマンティック表示形式を作成する。

**JMP追加されたバージョン:** 17

#### 例 1

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

Preferences(
	Semantic formatting(
		Add Semantic Format(
			Format Name( "My Format 1" ),
			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" )
			)
		),
		Add Semantic Format(
			Format Name( "My Format 2" ),
			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" ),
				Row Name( "M" )
			)
		)
	)
);

```

#### 例 2

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**構文:** obj &lt;&lt; Sequential Color Theme( "name" )

**説明:** すべてのグラフにおける連続変数に対するカラーテーマのデフォルトを変更する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Sequential Color Theme( "Green to Purple" ) );
Show( Get Preference( Sequential Color Theme ) );

```

### Set

**構文:** obj &lt;&lt; Set

**説明:** 特定の環境設定を指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Shade Alternate Table Rows

**構文:** obj &lt;&lt; Shade Alternate Table Rows( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**構文:** obj &lt;&lt; Shade Table Cells( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**構文:** obj &lt;&lt; Shade Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**構文:** obj &lt;&lt; Shape Boundary Color( color )

**説明:** すべてのグラフ(背景地図など)に対し、シェープ境界線の色のデフォルト設定を変更する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**構文:** obj &lt;&lt; Show Alternate Column Name( state=0|1 )

**説明:** ダイアログとデータテーブルの列パネルに別名を表示するかどうかのデフォルト設定を変更する。

### Show Personalization at startup

**構文:** obj &lt;&lt; Show Personalization at startup( state=0|1 )

**説明:** 次回JMP起動時にパーソナライゼーションダイアログを表示する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show SAS Log

**構文:** obj &lt;&lt; Show SAS Log( "Never"|"Always"|"On Error" )

### Show Search box on Columns Panel

**構文:** obj &lt;&lt; Show Search box on Columns Panel( state=0|1 )

**説明:** 列パネルにデフォルトで検索編集ボックスを表示する。

**JMP追加されたバージョン:** 16

### Show Status Bar

**構文:** obj &lt;&lt; Show Status Bar( state=0|1 )

**説明:** ステータスバーを表示するか非表示にするかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**構文:** obj &lt;&lt; Show conditional formatting( "常に"|"画面のみ"|"しない" )

**説明:** レポートで使われる条件付き表示形式のデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**構文:** obj &lt;&lt; Show menu tips( state=0|1 )

**説明:** 赤い三角ボタンのメニュー項目の上にマウスを置いた際にメニューのヒントを表示するか非表示にするかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**構文:** obj &lt;&lt; Show missing data bars or bins in summary graphs( state=0|1 )

**説明:** 要約グラフに欠測データの棒またはビンをデフォルトで表示するかどうか。表示、非表示は、個々の要約グラフを右クリックして[欠測値の棒]または[欠測値のビン]を選択することでも切り替えられる。

**JMP追加されたバージョン:** 16

### Show semantic formatting

**構文:** obj &lt;&lt; Show semantic formatting( "常に"|"No Row Matching"|"しない" )

**説明:** レポートでセマンティック表示形式を使用するかどうかのデフォルト設定を変更する。指定できる値は、「常に」、「行のマッチなし」、「しない」。行のセマンティック表示形式を使用しないようにするには「行のマッチなし」を選択する。

**JMP追加されたバージョン:** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**構文:** obj &lt;&lt; Show summary graphs below column names( state=0|1 )

**説明:** データテーブルの行数がパフォーマンスのための閾値(300万行)を超えない場合に、列名とデータセルの間にデフォルトで要約グラフを表示するかどうかを指定する。デフォルトをどちらに指定しても、各データテーブルの列名の隣にあるアイコンを使って、要約グラフの表示/非表示を切り替えられる。

**JMP追加されたバージョン:** 15

### Show the Quick Start at startup

**構文:** obj &lt;&lt; Show the Quick Start at startup( state=0|1 )

**説明:** 「クイックスタート」ウィンドウを表示するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**構文:** obj &lt;&lt; Summary Graph Continuous Color( color )

**説明:** 要約グラフやデータフィルタに表示する連続尺度データの色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**構文:** obj &lt;&lt; Summary Graph Continuous Highlight Color( color )

**説明:** 要約グラフやデータフィルタに表示する連続尺度データの強調色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**構文:** obj &lt;&lt; Summary Graph Continuous Missing Color( color )

**説明:** 要約グラフやデータフィルタに表示する連続尺度の欠測データの色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**構文:** obj &lt;&lt; Summary Graph Continuous Missing Highlight Color( color )

**説明:** 要約グラフやデータフィルタに表示する連続尺度の欠測データの強調色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Color

**構文:** obj &lt;&lt; Summary Graph Name Ordered Color( color )

**説明:** 要約グラフやデータフィルタに表示する名義尺度データの色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**構文:** obj &lt;&lt; Summary Graph Name Ordered Highlight Color( color )

**説明:** 要約グラフやデータフィルタに表示する名義尺度データの強調色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Color

**構文:** obj &lt;&lt; Summary Graph Other Color( color )

**説明:** 要約グラフやデータフィルタに表示する「その他」の棒の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**構文:** obj &lt;&lt; Summary Graph Other Highlight Color( color )

**説明:** 要約グラフやデータフィルタに表示する「その他」の棒の強調色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**構文:** obj &lt;&lt; Summary Graph Run Chart Color( color )

**説明:** 要約グラフやデータフィルタに表示する「その他」の棒の色を設定する。

**JMP追加されたバージョン:** 18

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**構文:** obj &lt;&lt; Summary Graph Size Ordered Color( color )

**説明:** 要約グラフやデータフィルタに表示する順序尺度データの色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**構文:** obj &lt;&lt; Summary Graph Size Ordered Highlight Color( color )

**説明:** 要約グラフやデータフィルタに表示する順序尺度データの強調色を設定する。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Suppress Formula Eval on Open

**構文:** obj &lt;&lt; Suppress Formula Eval on Open( state=0|1 )

**説明:** データテーブルを開いた際に自動評価を抑制するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**構文:** obj &lt;&lt; Table Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**構文:** obj &lt;&lt; Table Column Group Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**構文:** obj &lt;&lt; Table Heading Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**構文:** obj &lt;&lt; Table Row Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**構文:** obj &lt;&lt; Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**説明:** WindowsタスクバーにどのJMPウィンドウを表示するかを指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**構文:** obj &lt;&lt; Transparent background for report PNG images( state=0|1 )

**説明:** レポートの全部または一部をPNG画像として保存するときに、背景を透明にする。

**JMP追加されたバージョン:** 14

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**構文:** obj &lt;&lt; Underline Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**構文:** obj &lt;&lt; Use Excel Labels as Headings( "形式を識別する"|"常に"|"しない" )

**説明:** Excelファイルを開いたときにExcelラベルをJMPの列名として読み込むかどうかを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**構文:** obj &lt;&lt; Use Greek letters( state=0|1 )

**説明:** レポートでギリシャ文字を使用できるようにするかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**構文:** obj &lt;&lt; Use JMP Locale Settings( state=0|1 )

**説明:** 数字、日付、通貨の表示形式のデフォルト設定を変更する。注: Windowsのみで使用可能。

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**構文:** obj &lt;&lt; Use Numerical Ordering( state=0|1 )

**説明:** 列を並べ替える際に、数字を含むテキストが数値順になるようにする。文字型に変換されている列でも、[値の表示順序]列プロパティを持たないものは適用対象になる。

**JMP追加されたバージョン:** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**構文:** obj &lt;&lt; Use Project Log( "常に"|"開いている場合"|"しない" )

**説明:** プロジェクト内のスクリプトやウィンドウによって生成されたログメッセージを(メインログウィンドウではなく)プロジェクトログウィンドウに送るかどうか。

**JMP追加されたバージョン:** 16

### Use SPSS labels for column names during import

**構文:** obj &lt;&lt; Use SPSS labels for column names during import( state=0|1 )

**説明:** SPSSファイルを読み込んだときにSPSSラベルをJMPの列名として読み込むかどうかを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**構文:** obj &lt;&lt; Use Thousands Separator( state=0|1 )

**説明:** 数値を表示する際に桁区切りを使用するかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**構文:** obj &lt;&lt; Use Triple-S Labels as Headings( state=0|1 )

**説明:** ラベルをTriple-S変数の列名として使用するかどうかのデフォルトを指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**構文:** obj &lt;&lt; Use a Floating Window for Data Filters( state=0|1 )

**説明:** このオプションを有効にすると、データフィルタが、データテーブルや関連ウィンドウの手前に表示される。設定しない場合は、他のウィンドウと同様に配置される通常のウィンドウとなる。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**構文:** obj &lt;&lt; Use an Asterisk with the PValue Format( state=0|1 )

**説明:** p値の表示形式にアスタリスクを追加します。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**構文:** obj &lt;&lt; Use column references in Dispatch( state=0|1 )

**説明:** レポートのカスタマイズ内容を保存するときに、カスタマイズした要素を文字列ではなく列参照で記述する。これにより、列名の変更に対してより頑健なスクリプトを生成できる。この設定で保存したカスタマイズ内容は、JMP18.0以降のバージョンのみで動作する。

**JMP追加されたバージョン:** 18

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**構文:** obj &lt;&lt; Use math symbols( state=0|1 )

**説明:** JMPレポートで数学記号を使用できるようにするかどうかのデフォルトを変更する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**構文:** obj &lt;&lt; Virtual Join Auto Open Linked Table( state=0|1 )

**説明:** この列が参照するデータテーブルを自動的に開く。

**JMP追加されたバージョン:** 16

### Virtual Join Use Linked Column Name

**構文:** obj &lt;&lt; Virtual Join Use Linked Column Name( state=0|1 )

**説明:** 仮想結合で参照しているテーブルの列名をそのまま使用する。

**JMP追加されたバージョン:** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**構文:** obj &lt;&lt; Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**説明:** コンパクト形式のファイルは、JMP 17以前のバージョンでは開くことができない。

**JMP追加されたバージョン:** 18

### Warn when referenced table name has changed

**構文:** obj &lt;&lt; Warn when referenced table name has changed( state=0|1 )

**説明:** 仮想結合でリンクしているテーブル(参照テーブル)の名前が変更されたときに警告メッセージを表示する。

**JMP追加されたバージョン:** 15

## Platform Preferences

### 項目のメッセージ

#### Get

**構文:** obj &lt;&lt; Get

**説明:** 特定の環境設定を指定するためのスクリプトを戻す。

```jsl

a = Platform Preferences[1] << Get( Distribution );
Show( a );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** 環境設定を設定するスクリプトを戻す。

```jsl

a = Platform Preferences[1] << Get Script;
Show( a );

```

#### Set

**構文:** obj &lt;&lt; Set

**説明:** 特定の環境設定を指定する。

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

