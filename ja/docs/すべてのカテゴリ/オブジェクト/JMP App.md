# JMP App



## 項目のメッセージ

### Combine Windows

**構文:** obj << Combine Windows( {list of reports or data tables}, {...} )

**説明:** 複数のレポートおよびデータテーブルをまとめて、1つのウィンドウに表示する。1つにまとめたいレポートやデータテーブルは、引数にリストの形式で指定する。このメッセージを実行するとき、アプリケーションが実行中や編集中であってはいけない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
biv = Bivariate( Y( :weight ), X( :height ) );
app = JMP App();
app << Set Name( "Instant App" );
app << Combine Windows( {dist << Report, biv << Report} );
(app << Get Modules)[1] << Set Window Title( "My Report" );
app << Run;

```

### Debug

**構文:** obj << Debug

**説明:** アプリケーションをデバッガで実行する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );
app << Debug;

```

### Edit

**構文:** obj << Edit

**説明:** アプリケーションまたはダッシュボードをアプリケーションビルダーまたはダッシュボードビルダーで編集する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;

```

### Get Modules

**構文:** list = obj << Get Modules

**説明:** アプリケーション内で定義されているモジュールのリストを取得する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit Application;
app << Get Modules();

```

### Get Namespace

**構文:** obj << Get Namespace

**説明:** モジュールインスタンスの名前空間を取得する。

```jsl

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get Windows

**構文:** obj << Get Windows

**説明:** アプリケーションモジュールのインスタンスとして作成された、開いているウィンドウのリストを戻します。アプリケーションのスクリプトで作成された他のウィンドウのうち、New Window()または他の関数を使用して作成されたものはこのリストに含まれません。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Names Default To Here( 1 );
app = JMP App();
Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;
app << Get Windows();

```

**例 2**

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );
app << Run;
launcher = (app << Get Windows())[1];
launcher[Button Box( 1 )] << Click;
launcher[Button Box( 1 )] << Click;
app << Get Windows();

```

### Open File

**構文:** obj << Open File( <path> )

**説明:** 指定のファイルからアプリケーションをロードする。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
box = app << Edit Application;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** ダッシュボードまたはアプリケーションを再起動し、新たに実行したアプリケーションのコピーを作成する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Relaunch Analysis;

```

### Run

**構文:** obj << Run

**説明:** アプリケーションまたはダッシュボードを実行する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Save a New Window() script

```jsl

Names Default To Here( 1 );
app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );
app << Run;
app << Save Script for All Objects;

```

### Save Script to Add-In

**構文:** obj << Save Script to Add-In

**説明:** この分析を行うためのスクリプト(JSL)を生成し、アドインビルダーにロードする。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << "Save Script to Add-In";

```

### Save Script to Data Table

**構文:** app << Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Data Table;

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Journal;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Script Window;

```

