# JMP App Module



## 項目のメッセージ

### Create Instance

**構文:** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**説明:** モジュールのインスタンスを作成する。パラメータは、モジュールスクリプトで定義されたOnModuleLoad()関数に渡される。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**構文:** app = obj &lt;&lt; Get Application

**説明:** そのモジュールを所有するアプリケーションを取得する。

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```

