# Utility



### Add

**構文:** y = x0 + x1; y = Add( x0, x1, ... )

**説明:** すべての引数を足す。引数は、数値、行列、または数値リスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pi() + 10;

```

### Beep

**構文:** Beep()

**説明:** 警告音を鳴らす。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Beep();

```

### Blob MD5

**構文:** blobResult = Blob MD5( blob )

**説明:** ソースのBLOB(Binary Large OBject)から16バイトのBLOBを生成する。結果の16バイトのBLOBは、ソースのBLOBのMD5チェックサム(ハッシュ)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Hex(/* make it printable */ Blob MD5(/* get the hash */		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",			BLOB/* the result is a BLOB, not a string */		)	)) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */;

```

### Blob Peek

**構文:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**説明:** 与えられたBLOBの一部の範囲のバイトから新しいBLOBを作成する。offsetは0を基準としており、最初のバイトのオフセットは0。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**構文:** y = Build Information()

**説明:** ビルド日時、リリースビルドとデバッグビルドの区別、および製品名を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Build Information();

```

### Caption

**構文:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**説明:** 引数textで指定されたテキストを含んだキャプションウィンドウを{h, v}で指定された位置に表示する。引数Delayed( seconds )は、各キャプションを表示するまでの時間(秒)。

**JMP追加されたバージョン:** バージョン14より前

#### キャプションの削除

```jsl

Caption( "explanation" );Wait( 2 );Caption( remove );

```

#### 書式付きキャプション

```jsl

Caption(	{100, 200},	"explanation",	Font( "Arial Black" ),	Font Size( 16 ),	Text Color( "blue" ),	Back Color( "yellow" ),	Spoken( 1 ));

```

### Current Journal

**構文:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**説明:** 現在のプロジェクトにある現在のジャーナルへの参照を戻す。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。



指定したプロジェクトに現在のジャーナルが存在しない場合は、自動的に作成される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Current Journal();

```

### Data Connector Registry

**構文:** Data Connector Registry()

**説明:** JMP用の一連のデータコネクタ。

**JMP追加されたバージョン:** 18

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**構文:** y = Open Datafeed( ... )

**説明:** リアルタイムでデータフィードを管理するための、メッセージ送信用オブジェクトとウィンドウを作成。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Debug Break

**構文:** Debug Break()

**説明:** この式をJSLデバッガ内で評価すると、デバッガによるスクリプトの実行が停止する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

// Right-click and select Debug.// In the JSL Debugger, click Run.x = 5;y = 8;Debug Break();z = x + yy;Show( z );

```

### Decode URI

**構文:** Decode URI( value )

**説明:** URIエンコーディングで文字列をエンコードする。

**JMP追加されたバージョン:** 14

```jsl

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**構文:** y = Decode64 Blob( base64String )

**説明:** Base64でエンコードされた文字列をBLOBにデコードする。

**JMP追加されたバージョン:** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**構文:** y = Decode64 Double( base64String )

**説明:** Base64でエンコードされた文字列から、倍精度浮動小数点数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**構文:** Disable JMP Live URL(url)

**説明:** JMP LiveのURLを無効にする。このメソッドは、jmpStartAdmin.jslでのみ使用できる。アスタリスク(\*) はURLを指定するときのワイルドカードとして、次のように使用できる。「\*」はすべてのURL、「\*.jmp.com」は.jmp.comで終わるURL、「http://public.\*」はhttp://public.で始まるURL、「\*public\*」はpublicを含むURL。

**JMP追加されたバージョン:** 15

```jsl

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**構文:** Disable Proxy Settings( 1|0 )

**説明:** jmpStartAdmin.jslの実行時にプロキシ設定を無効または有効にする。プロキシ設定は、デフォルトでは有効。

**JMP追加されたバージョン:** 15

```jsl

Disable Proxy Settings( 1 );

```

### Divide

**構文:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**説明:** 後続のすべての引数で最初の引数を割る。引数には、数値、行列、数値のリストを指定できる。引数が1つのみの場合、結果は逆数となる。

**JMP追加されたバージョン:** バージョン14より前

**単純な例**

```jsl

6 / 3 / 2;

```

#### 逆数

```jsl

x = Divide( 5 );y = 1 / 5;Show( x, y );

```

### Empty

**構文:** y = Empty()

**説明:** 空の値を戻す。計算式エディタで未指定の引数に使用される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Empty();

```

### Enable JMP Live URL

**構文:** Enable JMP Live URL(url)

**説明:** JMP LiveのURLを有効にする。このメソッドは、jmpStartAdmin.jslでのみ使用できる。アスタリスク(\*) はURLを指定するときのワイルドカードとして、次のように使用できる。「\*」はすべてのURL、「\*.jmp.com」は.jmp.comで終わるURL、「http://public.\*」はhttp://public.で始まるURL、「\*public\*」はpublicを含むURL。

**JMP追加されたバージョン:** 15

```jsl

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**構文:** Enable Proxy Settings( 1|0 )

**説明:** jmpStartAdmin.jslの実行時にプロキシ設定を有効または無効にする。プロキシ設定は、デフォルトでは有効。

**JMP追加されたバージョン:** 15

```jsl

Enable Proxy Settings( 0 );

```

### Encode URI

**構文:** Encode URI( value )

**説明:** URIエンコーディングで文字列をエンコードする。

**JMP追加されたバージョン:** 14

```jsl

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**構文:** s = Encode64 Blob( x )

**説明:** BLOBをBase64の文字列にエンコードする。

**JMP追加されたバージョン:** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**構文:** s = Encode64 Double( x )

**説明:** 浮動小数点数から、Base64でエンコーディングされた文字列を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**構文:** points = Faure Quasi Random Sequence(nDim, nRow)

**説明:** Faure列を用いてSpace Fillingの一連の擬似乱数を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

A = Faure Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Format Pattern

**構文:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;) x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; ) obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**説明:** Format Patternsは、日付時間形式を定義する"<YYYY></><MM></><DD> <hh><:><mm><:><ss><ampm>"のような文字列。山括弧に囲まれた部分をフィールド記述子という。フィールド記述子は、値(たとえば、4桁の年を表す"<YYYY>")または他の日付時間テキスト(たとえば、ロケール固有の日付区切り文字、"</>")を示す。形式パターンを使うと、JMPに用意されていない形式を作成できる。これらの形式は、データの書式設定とデータの入力の両方に使用できる。

**JMP追加されたバージョン:** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );Show( s, x );                                                /*フィールド記述子日付(時間の長さのフィールド記述子とともに使うことはできません)================================================================================<YYYY>        4桁の年。(入力時は1～4桁を受け入れる。)<YY>          2桁の年<yyyy>        ISO形式の4桁の年。ISOの週に対応している。(入力時は1～4桁を受け入れる。)<yy>          ISO形式の2桁の年。ISOの週に対応している。<YYYY.>       小数点以下の値を持つ年。日時を完全に表す。<M>           月(1～12)<MM>          2桁の月、1桁の場合は前にゼロをつける(01～12)。<Month>       月名<Mmm>         短い形式の月名<MMM>         短い形式の月名。3文字に統一。<WW1>         2桁の週。1桁の場合は前にゼロをつける。年の最初の日曜日に第2週が始まる。第1週は、最初の日曜日に先立つ6日間以下の週。(01～54)<WW2>         2桁の週。1桁の場合は前にゼロをつける。年の最初の日曜日に第1週が始まる。第0週は、最初の日曜日に先立つ6日間以下の週。(00～53)<ww>          ISO形式の2桁の週。1桁の場合は前にゼロをつける。月曜日を週の始まりとする。第1週は、年の初めの4日以上の週。年をまたぐ週は、日数が多い方の年に属するものとされる。(01～53)<D>           月の中の日(1～31)<DD>          2桁の、月の中の日。1桁の場合は前にゼロをつける(01～31)。<Q>           四半期(1～4)<Q#>          Q記号に続く四半期(1～4)<DayOfWeek>   曜日名<DW>          曜日番号。1は日曜日で、7は土曜日。<dw>          曜日番号。1は月曜日で、7は日曜日。</>           ロケールの日付区切り文字。(入力時は一般的な区切り文字を受け入れる。)<->           ISOの日付区切り文字(-)。(入力時は一般的な区切りを受け入れる。)</?>          日付の入力時に使用するオプションの日付区切り文字。出力時には使用されない。<'T'>         ISO日付形式の「T」記号時間(時間の長さのフィールド記述子とともに使えるものもあります)================================================================================<hh>          現在のロケールの時間形式。              <ampm>記述子が存在する場合、ロケールにより12時間形式または24時間形式を使用する。<AMPM>記述子が存在する場合、12時間形式を使用する。それ以外の場合、24時間形式を使用する。(時間の長さのフィールド記述子とともに使うことはできない。)<zhh>         現在のロケールの時間形式。1桁の場合は前にゼロを付ける。              <ampm>記述子が存在する場合、ロケールにより12時間形式または24時間形式を使用する。<AMPM>記述子が存在する場合、12時間形式を使用する。それ以外の場合、24時間形式を使用する              (時間の長さのフィールド記述子とともに使うことはできない)。<hh24>        2桁の24時間形式の時間。1桁の場合は前にゼロをつける(00～23)。<mm>          2桁の分。1桁の場合は前にゼロをつける(00～59)。<ss>          2桁で統一した秒。1桁の場合は前にゼロをつける(00～59)。<ampm>        現在のロケールのAM/PM記号。(時間の長さのフィールド記述子とともに使うことはできない。)<AMPM>        ロケールに依存しないAM/PM記号「AM」または「PM」(時間の長さのフィールド記述子とともに使うことはできない)。<:>           ロケールの時間の区切り文字。<::>          ISOの時間の区切り文字(:)。(入力時はロケールの時間区切り文字も受け入れる。)<:?>          日付の入力時に使用するオプションの時間区切り文字。出力時には使用されない。時間の長さ(日付のフィールド記述子とともに使うことはできません)================================================================================<Day>         日数。時間の長さにおいて最も重要なフィールド。他の「数(カウント)」とともに使うことはできない。<Hour>        時間数。時間の長さにおいて最も重要なフィールド。他の「数 (カウント)」とともに使うことはできない。<Minute>      分数。時間の長さにおいて最も重要なフィールド。他の「数 (カウント)」とともに使うことはできない。その他================================================================================<<>           <で置換される。*/

```

### Get Addin

**構文:** Get Addin( ID )

**説明:** IDによって指定された登録済みアドインを取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**構文:** Get Addins( )

**説明:** 登録されているアドインのリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

addins = Get Addins();addin ids = Get Addins() << id;Show( addins, addin ids );

```

### Get Addr Info

**構文:** Get Addr Info( string )

**説明:** 名前に対する数値アドレスを調べる。将来、IPV6との互換性を持たせるためには名前を使用した方がよい。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**構文:** Get Clipboard()

**説明:** クリップボードの現在の内容を取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Clipboard();

```

### Get Name Info

**構文:** Get Name Info( string )

**説明:** 数値アドレスに対する名前を調べる。将来、IPV6との互換性を持たせるためには名前を使用した方がよい。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**構文:** notebookList = Get Notebook List()

**説明:** 開いているすべてのノートブックのリストを戻す。

**JMP追加されたバージョン:** 19

### Get OAuth2 Grant Types

**構文:** Get OAuth2 Grant Types

**説明:** JMPでサポートされているOAuth2グラントタイプを取得する。

**JMP追加されたバージョン:** 15

```jsl

/*https://oauth.net/2/grant-types/*/grant_types = Get OAuth2 Grant Types();Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP追加されたバージョン:** 15

```jsl

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";aa = Get OpenID Connect Discovery( url );Show( aa );

```

### Get OpenIDC Discovery

**JMP追加されたバージョン:** 15

### Get Platform Preference

**構文:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**説明:** 指定されたプラットフォームの環境設定を取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**構文:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**説明:** 指定されたプラットフォームの環境設定を取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**構文:** Get Policies( &lt;Machine|User|Both&gt; )

**説明:** 現在のポリシーの名前と値を含んだ連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Get Policies();

```

### Get Preference

**構文:** Get Preferences( pref1, ... )

**説明:** 指定された環境設定を取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**構文:** Get Preferences( pref1, ... )

**説明:** 指定された環境設定を取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Preferences( Graph marker size );

```

### Glue

**構文:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**説明:** 各引数を評価して最後の結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex1 = 1;ex2 = 2;

```

### Gzip Compress

**構文:** blob = Gzip Compress( blob )

**説明:** BLOBデータを gzip BLOBに圧縮する。

**JMP追加されたバージョン:** 14

```jsl

Gzip Compress(	Char To Blob( "random data does not usually compress well and may get larger" ));

```

### Gzip Uncompress

**構文:** blob = Gzip Uncompress( blob )

**説明:** BLOBのgzipデータをBLOBに解凍する。

**JMP追加されたバージョン:** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/	Char To Blob(		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",		"ascii~hex"	));

```

### Host is

**構文:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**説明:** 動作中のJMPアプリケーションが指定された引数に一致する場合は1、そうでない場合は0を戻す。引数WindowsまたはMacは、オペレーティングシステムの種類、引数Bits32またはBits64は、JMPアプリケーションが32ビット版か64ビット版かをテストする。テストできるのは一度に1つの引数のみ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

If( Host is( "Mac" ),	Show( "On Mac" ),	Show( "Not on Mac" ));If( Host is( "Bits64" ),	Show( "64 bit" ));If(	Host is( "x86_64" ), Show( "On x86_64" ),	Host is( "arm64" ), Show( "On arm64" ));

```

### Is Alt Key

**構文:** y = Is Alt Key()

**説明:** Altキーが押されている場合は1、それ以外の場合は0を戻す。グラフィックのコールバックスクリプトでの使用を意図している。Macintoshの場合、AltキーはOptionキーになります。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Command Key

**構文:** y = Is Command Key()

**説明:** コマンドキーが押されている場合は1、そうでない場合は0を戻す。グラフィックのコールバックスクリプトでの使用を意図している。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Command Key(),			Text( {60, 50}, "Command Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Context Key

**構文:** y = Is Context Key()

**説明:** コンテキストキーが押されている場合は1、そうでない場合は0を戻す。グラフィックのコールバックスクリプトで使用する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Context Key(),			Text( {60, 50}, "Context Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Control Key

**構文:** y = Is Control Key()

**説明:** Ctrlキーが押されている場合は1、それ以外の場合は0を戻す。グラフィックのコールバックスクリプトでの使用を意図している。Macintoshの場合、Ctrlキーはコマンドキーになります。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is JMP Live URL Enabled

**構文:** Is JMP Live URL Enabled(url)

**説明:** 指定されたURLをこのJMPセッションで使用できるかどうかをチェックする。URLは、jmpStartAdmin.jslスクリプトを使って有効または無効にできる。適切なURLかどうか、ユーザがログインできるかどうかはチェックされず、URLがJMPによってブロックされているかどうかだけが確認できる。

**JMP追加されたバージョン:** 15

```jsl

url = "http://public.jmp.com";Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**構文:** y = Is Option Key()

**説明:** Optionキーが押されている場合は1、そうでない場合は0を戻す。グラフィックのコールバックスクリプトで使用する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Option Key(),			Text( {60, 50}, "Option Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Shift Key

**構文:** y = Is Shift Key()

**説明:** Shiftキーが押されている場合は1、それ以外の場合は0を戻す。グラフィックのコールバックスクリプトで使用されることを目的としている。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### JMP Product Name

**構文:** y = JMP Product Name()

**説明:** 製品のライセンスに基づいて"Standard"または"Pro"を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

JMP Product Name();

```

### JMP Version

**構文:** y = JMP Version()

**説明:** JMPのバージョン (リリース、リビジョン、{フィックス})を戻す。6.0以前では使用できない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

JMP Version();

```

### JSL Encrypted

**構文:** y = JSL Encrypted(script)

**説明:** 暗号化したスクリプトを別のスクリプトの中に埋め込む。スクリプトエディタのメインメニューで[編集]>[スクリプトの暗号化]を選択することで、暗号化スクリプトを作成する。パスワードを入力すると、新規ウィンドウに暗号化したテキストが表示される。このテキストをJSLのEncrypted("")コマンドにコピーすると、暗号化したスクリプトが別のスクリプトに埋め込まれる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

JSL Encrypted(	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*");

```

### JSL Quote

**構文:** y = JSL Quote(script)

**説明:** JSLスクリプトを、コメントや書式を含めて変数に保存する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

x = JSL Quote(/* Begin quote. */    For (i = 1, i <= 5, i++,        // Print the value of i.        Print(i);    );    // End expression.);New Window( "editor", Script Box( x ) );

```

### Load DLL

**構文:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**説明:** 指定のパスによって示されたDLLをロードする。

**JMP追加されたバージョン:** バージョン14より前

#### Cross platform using Base Name()

```jsl

dll = Load DLL( Base Name( "/path/to/dll/financial" ) );// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac// Declarations for "irr" and "npv" are auto-loadedmyirr = dll << irr( 0.1, -51000, 1000, 900, 950 );mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );dll << UnloadDLL();

```

#### Windows only

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << CallDLL( "MessageBeep", "n", 0 );	Wait( 1 );	dll << CallDLL( "MessageBeep", "n", 0 );	dll << UnloadDLL(););

```

### Mail

**構文:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**説明:** オペレーティングシステムで許可されている場合、指定に従って送信用メールメッセージを作成する。オペレーティングシステムのバージョンによっては、一部のオプションが機能しない可能性がある。詳しくはヘルプを参照。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**構文:** menu = Main Menu( command, &lt;window name&gt; )

**説明:** 指定したメインメニューのコマンドを実行する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Main Menu( "Sample Index" );

```

**例 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Minus

**構文:** y = -x; y = Minus( x )

**説明:** xの符号を逆にする。引数は数値、行列、または数値のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

-Pi();

```

### Multiple File Import

**構文:** mfiObj = Multiple File Import();

**説明:** Multiple File Importオブジェクトを作成する。このオブジェクトは、フォルダの設定、ファイルの絞り込み、ファイルの読み込みを行うメッセージを受け入れる。ダイアログを表示するには、"Create Window"メッセージを使用する。すぐに読み込むには、"Import Data"メッセージを使用する。"Import Data"メッセージの戻り値は、作成されたデータテーブルのリストである。

**JMP追加されたバージョン:** 14

**対話的に読み込む例**

```jsl

// use the save-script-to-script-window button // in the MFI dialog to see more messages// for filtering files and controlling the importMultiple File Import(	<<Set Folder( "$DESKTOP" ),	<<Set Name Filter( "*.csv;" ),	<<Set Name Enable( 1 )) << Create Window;

```

**直接的に読み込み例**

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );mfi << Set Name Filter( "*.txt" );mfi << Set Name Enable( 1 );tables = mfi << Import Data();

```

### Multiply

**構文:** y = x0 * x1; y = Multiply( x0, x1, ... )

**説明:** すべての引数を掛ける。引数は、数値、行列、または数値リスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

2 * Pi();

```

### Name

**構文:** Name(string)

**説明:** 名前とは、単に項目の呼び方。名前は変数と関数の両方に使われ、規則に従えばスクリプト内で直接使用できる。名前がアルファベットまたはアンダースコアで始まり、それ以降はアルファベット、スペース、Unicodeの数学記号、一部の句読点(アポストロフィ(’)、パーセント記号(%)、ピリオド(.)、バックスラッシュ(\\)、アンダースコア(_))がのいずれかのみが使用されている場合は、スクリプト内で直接使用できる。この規則に従っていない名前を使用するには、Name()キーワードが必要。

**JMP追加されたバージョン:** 14

```jsl

Name( "taxable income(2011)" ) = 456000;tax = .25;Print( tax * Name( "taxable income(2011)" ) );

```

### New HTTP Request

**構文:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**説明:** Webサービスに送るリクエストを作成する。

**JMP追加されたバージョン:** 14

```jsl

getSentiment = Function( {text},	{Default Local},	fields = Associative Array();	fields["text"] = text;	s = New HTTP Request(		URL( "http://text-processing.com/api/sentiment/" ),		Method( "POST" ),		Form( Fields( fields ) ),		Headers( {"Accept: application/json"} )	) << Send;	sAsList = Parse JSON( s );	retval = Associative Array();	retval["pos"] = sAsList["probability"]["pos"];	retval["neg"] = sAsList["probability"]["neg"];	retval["neutral"] = sAsList["probability"]["neutral"];	retval["label"] = sAsList["label"];	retval;);                         addSentimentColumns = Function( {dt, colname, bLabel, bValues},	{Default Local},	col = Column( dt, colname );	colLabel = "Sentiment_Label(" || colname || ")";	colValPos = "Sentiment_Pos(" || colname || ")";	colValNeg = "Sentiment_Neg(" || colname || ")";	colValNeutral = "Sentiment_Neutral(" || colname || ")";	If( bLabel,		dt << New Column( colLabel, Character )	);	If( bValues,		dt << New Column( colValPos, Numeric );		dt << New Column( colValNeg, Numeric );		dt << New Column( colValNeutral, Numeric );	);	For( i = 1, i <= N Rows( dt ), i++,		sentiment = getSentiment( col[i] );		If( bLabel,			Column( dt, colLabel )[i] = sentiment["label"]		);		If( bValues,			Column( dt, colValPos )[i] = sentiment["pos"];			Column( dt, colValNeg )[i] = sentiment["neg"];			Column( dt, colValNeutral )[i] = sentiment["neutral"];		);	););                         dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Multi HTTP Request

**構文:** multi_request = New Multi HTTP Request()

**説明:** 複数のHTTPリクエストを同時に送信またはダウンロードする。

**JMP追加されたバージョン:** 17

```jsl

requests = New Multi HTTP Request();requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"		)	));requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"		)	));data = requests << Download( "show progress", "detailed" );http_requests = requests << Get Requests();For( i = 1, i <= N Items( http_requests ), i++,	Show( http_requests[i] << Get Mime Type() ));

```

### New OAuth2

**構文:** oauth2 = New OAuth2()

**説明:** 新しいOAuth2承認を作成する。

**JMP追加されたバージョン:** 15

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";redirect_url = "http://localhost/myapp/";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";client_secret = "JqQX2PNo9bpM0uEihUPzyrh";scope = "openid offline_access https://graph.microsoft.com/user.read";auth_fields = [=> ];token_fields = [=> ];                                          oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );                                          auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;                                          oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );                                          auth_header = oauth2 << Get Auth Header();request = New HTTP Request(	URL( "https://graph.microsoft.com/v1.0/me" ),	Headers( {auth_header} ),	Method( "GET" ));data = request << Send;

```

### New OAuth2 Token

**構文:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**説明:** さまざまなWeb APIでデータに安全にアクセスするためのOAuth2トークンを作成する。

**JMP追加されたバージョン:** 15

```jsl

token = New OAuth2 Token(	Account( "jmpgoogldev@gmail.com" ),	Client ID( "test" ),	Client Secret( "test 2" ),	Refresh Token( "" ),	Token URL( "" ));

```

### New Web Report

**構文:** obj = New Web Report(...)

**説明:** インタラクティブHTMLレポートを作成する。

**JMP追加されたバージョン:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );webreport = New Web Report(	Add Report(		Distribution(			Continuous Distribution( Column( :weight ) ),			Nominal Distribution( Column( :age ) )		),		Title( "Distribution Web Report" ),		Description( "This report was created with the sample found in the Scripting Index" )	),	Add Report(		Bivariate(			Y( :weight ),			X( :height ),			Automatic Recalc( 1 ),			Fit Line( {Line Color( {213, 72, 87} )} ),			Local Data Filter( Add Filter( columns( :sex ) ) )		)	));webreport << Index( Title( "Big Class Report" ) );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Notebook

**構文:** nb = Notebook( name|number )

**説明:** 指定したノートブックへの参照を戻す。

**JMP追加されたバージョン:** 19

### Open Datafeed

**構文:** y = Open Datafeed( ... )

**説明:** リアルタイムでデータフィードを管理するための、メッセージ送信用オブジェクトとウィンドウを作成。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Open Help

**構文:** w = Open Help( "Help" | "Scripting Index", ... )

**説明:** JMPのオンラインヘルプまたは[スクリプトの索引]を開く。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Open Help( "Help" );

```

**例 2**

```jsl

Open Help(	"Scripting Index",	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext( Category( "Functions" ) ));

```

**例 3**

```jsl

Open Help(	"Scripting Index",	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext(		Category( "All Categories" ),		Object( "Search results" ),		Method( "Get Alpha" )	));

```

### Parse XML

**構文:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**説明:** XMLを解析する。OnElementによってXMLのタグ名などを指定する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

/*See example two for more details*/ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

**例 2**

```jsl

doc ="<a title='one'>    WWWa    <b>BB<c>ZZZ</c>B1</b>    XXXa    <b>BBB2</b>    YYYa    <c>CCC</c></a>";// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,// to show why text should be collected by Text(...) and then processed by EndTag(...)// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.docname = "undefined";doctext = "";recordtext = "";records = {};NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting levelParse XML( doc,	On Element(		"a",		Start Tag(			docname = XML Attr( "title" );			NestLevel++;		),         // decide here to trim the CRLF and blanks and use a single blank		Text( doctext = doctext || Trim( XML Text() ) || " " ),		End Tag( NestLevel-- )	),	On Element(		"b",		Start Tag( NestLevel++ ),         // comment out the next line and...		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),		End Tag(            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records			// recordtext = XMLText();			Insert Into( records, recordtext );			recordtext = "";			NestLevel--;		)	));Show( docname, doctext, records, NestLevel );

```

### Pdf Page Count

**構文:** Pdf Page Count( file name)

**説明:** PDFファイルのページ数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**構文:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**説明:** プラットフォームの環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**構文:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**説明:** プラットフォームの環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Pref

**構文:** Preferences( pref1( value1 ), ... )

**説明:** 環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**構文:** Preferences( pref1( value1 ), ... )

**説明:** 環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**構文:** Preferences( pref1( value1 ), ... )

**説明:** 環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**構文:** Preferences( pref1( value1 ), ... )

**説明:** 環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**構文:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;AutoLoad(0|1)&gt; )

**説明:** Register an add-in. An Autoload value of 1 forces the add-in to load when registered. A value of 0 leaves the add-in unloaded. If AutoLoad is not specified the addin.def setting will be used if found otherwise the default will be for the add-in to be loaded.

**JMP追加されたバージョン:** バージョン14より前

```jsl

Register Addin(	"com.mycompany.myaddin",	"$DOCUMENTS/myaddin",	displayname( "Sample Addin" ));

```

### Revert Menu

**構文:** Revert Menu()

**説明:** 出荷時のデフォルトメニューに戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* Reverts menus back to factory default settings. */

```

### Run Program

**構文:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt; )

**説明:** 標準入力(stdin)と標準出力(stdout)を使って外部プログラムを実行する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

RP = Run Program(	Executable( "PING.EXE"/*path probably not needed*/ ),	Options( {"-n 5", "localhost"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**例 2**

```jsl

RP = Run Program(	Executable( "CMD.EXE"/*path probably not needed*/ ),	Options( {"/a", "/q", "/c dir"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**例 3**

```jsl

commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};icommand = 0;RP = Run Program(	Executable( "CMD.EXE" ),	Options( {"/a", "/q"} ),	ReadFunction( Function( {this}, Write( this << Read ) ) ),	WriteFunction(		Function( {this},			icommand++;			If( icommand <= N Items( commands ),				this << Write( commands[icommand] );				Show( commands[icommand] );			,				this << WriteEOF;				Show( this << CanRead, this << CanWrite, this << isReadEOF );			);		)	));

```

### Schedule

**構文:** Schedule( sec, scpt )

**説明:** sec秒が経過したらスクリプトscptを実行するようなイベントをスケジュールする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Schedule(	10,	Beep();	Print( "Time's up!" ););

```

### Set Clipboard

**構文:** Set Clipboard( text )

**説明:** 指定のテキストをクリップボードに保管し、[編集]メニューで使用できるようにする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Set Clipboard( "example" );

```

### Set Platform Preference

**構文:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**説明:** プラットフォームの環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**構文:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**説明:** プラットフォームの環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Preference

**構文:** Preferences( pref1( value1 ), ... )

**説明:** 環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**構文:** Preferences( pref1( value1 ), ... )

**説明:** 環境設定を指定どおりに設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**構文:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**説明:** 指定したウィンドウクラスの特定のツールバーに対し、表示させるか否かを設定する。toolbar-nameは、ツールバーの内部名。ツールバー名としてDefaultを指定した場合、ウィンドウクラスに対し、そのウィンドウクラスに設定されているデフォルトのツールバーが復元される。ウィンドウクラス名は、Data Table、Script、Report、Journalなど。window-class-nameをAllとした場合、指定したツールバーがすべてのウィンドウクラスで表示される。

処理が正常に行われた場合は1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

// Make the Analyze toolbar visible in Script windowsSet Toolbar Visibility( "Analyze", Script, true );// Make the Analyze toolbar visible in all classes of windowsSet Toolbar Visibility( "Analyze", All, true );// Revert Script windows to the default toolbar set for Script windowsSet Toolbar Visibility( Default, Script );// Revert all windows to their default toolbar setSet Toolbar Visibility( Default, All );

```

### Shortest Edit Script

**構文:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**説明:** 文字列Aを文字列Bに変換するための最短編集スクリプト(Shortest Edit Script)の一形態を戻す。単純な形式では、戻り値はリストである。strings()とlines()の場合、戻り値として、行列またはリストのいずれかを選択できる。sequences()の場合、戻り値は行列だけである。オプションのlimit()は、編集リストにlimitで指定した数以上の挿入と削除があった場合に、処理を途中で停止する。lines()は文字ではなく行を比較する。オプションのignore("文字列")、またはignoreWhiteSpace()は、無視する文字列を設定する。処理中にESCキーを押すと、処理を停止する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),	i++,	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2		] /* the snippet */	));common;

```

### Show Addin Builder Dialog

**構文:** Show Addin Builder Dialog()

**説明:** カスタムアドインを作成するためのダイアログを開く。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**構文:** Show Addins Dialog()

**説明:** 登録されているすべてのアドインのステータスを示すダイアログを開く。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show Addins Dialog();

```

### Show Commands

**構文:** Show Commands( &lt;keyword=Builtins&gt; )

**説明:** JSLで用意されている関数やメッセージに関する情報を含むデータテーブルを作成する。keyword引数は、データテーブルに出力する内容を決定する。ビルトインの演算子および関数を一覧するデータテーブルを作成したい場合には、Builtins(デフォルト)を指定する。オブジェクトに対するスクリプト可能コマンドを一覧するデータテーブルを作成したい場合には、Scriptablesを指定する。オブジェクトに対するスクリプト可能コマンドの英語版およびローカライズ版を一覧するデータテーブルを作成したい場合には、Translationsを指定する。ディスプレイボックスやディスプレイセグメントに関連するスクリプト可能コマンドを一覧するデータテーブルを作成するには、Display Boxesを指定する。スクリプト可能オブジェクトの名前を一覧するデータテーブルを作成したい場合には、Scriptable Namesを指定する。プラットフォームの名前を一覧するデータテーブルを作成したい場合には、Platform Namesを指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show Commands();

```

### Show Preferences

**構文:** Show Preferences()

**説明:** 現在の環境設定の設定をログに表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show Preferences();

```

### Show Properties

**構文:** Show Properties( object )

**説明:** オブジェクトが応答するメッセージをログに表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**構文:** points = Sobol Quasi Random Sequence(nDim, nRow)

**説明:** Sobol列を用いてSpace Fillingの一連の疑似乱数(最大4000次元)を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**構文:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**説明:** このコンピュータまたはネットワーク上の別のコンピュータとソケット通信するためのソケット変数を作成する。デフォルトの引数はSTREAM。各自のWebサイトで試してみてください。

**JMP追加されたバージョン:** バージョン14より前

```jsl

// see the socket's OBJECT messages in the scripting index for better examplestCall = Socket();tcall << Ioctl( FIONBIO, 1 );rc = tCall << connect( "www.jmp.com", "80" );If( rc[2] == "ok",	tCall << <<Char To Blob(		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",		"ASCII~HEX"	);	While( 1,		tMessage = tCall << Recv( 100000 );		If(			tMessage[2] == "ok",				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes		,			Starts With( tMessage[2], "WOULDBLOCK" ),				Show( "waiting" ) // sometimes data might not be available yet		,			Starts With( tMessage[2], "CLOSED" ),				Break(); // this is the desired result		, // else			Show( tMessage );			Stop();		);	);	tCall << Close();// done, // else	Show( rc );	Stop(););

```

### Speak

**構文:** Speak( text, &lt;Wait( sync )&gt; )

**説明:** オペレーティングシステムがサポートしていれば、テキストを音声で読み上げる。引数Wait(true)は音声が終了するまでの遅延時間。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Speak( "Hello" );

```

### Status Msg

**構文:** Status Msg( message )

**説明:** 指定のメッセージをステータスバーに表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Status Msg( "calculating..." );

```

### Subtract

**構文:** y = x0 - x1; y = Subtract( x0, x1, ... )

**説明:** 第1引数から後続の引数をすべて引いていく。引数は、数値、行列、または数値リスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

6 - 2 - 1;

```

### Unregister Addin

**構文:** Unregister Addin( uniqueId)

**説明:** アドインの登録を解除する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**構文:** Web( string, &lt;JMP Window&gt; )

**説明:**  stringで指定されたURLまたはファイルをデフォルトのWebブラウザで開く。オプションの2つ目の引数を指定すると、JMPの中のブラウザウィンドウでページが開く。

**JMP追加されたバージョン:** バージョン14より前

#### イベントハンドラー

```jsl

//Making a clickable link show up in a formula columnNew Table( "Example",	Add Rows( 2 ),	New Column( "URL",		"Character",		"Nominal",		Formula( "https://www.jmp.com/" || :Page ),		Set Property(			"Event Handler",			Event Handler(				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )			)		)	),	New Column( "Page",		"Character",		"Nominal",		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )	));

```

**単純な例**

```jsl

Web( "http://www.jmp.com/" );

```

### XML Attr

**構文:** value = XML Attr( attr name ); aa = XML Attr()

**説明:**  Parse XML()コマンドによるXMLの解析において、指定されたXML属性の文字列の値を抽出する。名前が指定されなかった場合、すべての属性の名前/値のペアを、連想配列で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### XML Decode

**構文:** text = XML Decode( textxml )

**説明:** XML内の記号を通常のテキストにデコードする。"を"、<を<、>を>、&を&に変更する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**構文:** textxml = XML Encode( text )

**説明:** XMLに埋め込むテキストを準備する。"を"、<を<、>を>、&を&に変更する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**構文:** value = XML Text()

**説明:** Parse XML()によるXMLの解析において、XMLタグの本体の文字列テキストを抽出する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### \\[...]\\

**構文:** y = \\[string]\\

**説明:** 多数のエスケープ文字が必要な文字列には、区切り文字\\[...]\\を使用することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

jslPhrase ="The JSL to do this is :\[a = "hello";b = a|| " world.";show(b);]\ and you use the Submit command to run it.";Show( jslPhrase );

```

