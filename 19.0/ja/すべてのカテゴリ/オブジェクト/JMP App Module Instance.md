# JMP App Module Instance



## 項目のメッセージ

### Create Objects

**構文:** obj &lt;&lt; Create Objects

**説明:** モジュールインスタンスのオブジェクトを作成する。JMPアプリケーションモジュールのスクリプトの中でのみ呼び出せる。

```jsl

// This command is only valid within a JMP App Module Script

```

### Get Box

**構文:** obj &lt;&lt; Get Box

**説明:** モジュールインスタンスのディスプレイボックスを取得する。

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
inst = modules[1] << Create Instance;
inst << Get Box;

```

### Get Namespace

**構文:** obj &lt;&lt; Get Namespace

**説明:** モジュールインスタンスの名前空間を取得する。

```jsl

app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**構文:** obj &lt;&lt; Get User Data

**説明:** モジュールのインスタンスに関連付けられているユーザデータを戻す。

```jsl

// This command is only valid within a JMP App Module Script

```

### Set User Data

**構文:** inst &lt;&lt; Set User Data(expr)

**説明:** JMP AppモジュールインスタンスのJSL値を保存する。値には、数値、文字値、リスト、連想配列、またはその他のJSLタイプのものを使用可能。

```jsl

// This command is only valid within a JMP App Module Script

```

