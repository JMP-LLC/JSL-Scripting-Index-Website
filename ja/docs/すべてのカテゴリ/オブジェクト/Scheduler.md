# Scheduler



## 関連するコンストラクター

### Schedule

**構文:** Schedule( seconds, script )

**説明:** sec秒が経過したらスクリプトscptを実行するようなイベントをスケジュールする。 注:スケジューラはアイドル時間にのみ実行される。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););

```

## 項目のメッセージ

### Clear Schedule

**構文:** obj &lt;&lt; Clear Schedule

**説明:** 現在スケジュールされているすべてのイベントをキャンセルする。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Clear Schedule;

```

### Close

**構文:** obj &lt;&lt; Close

**説明:** スケジューラを閉じる。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););Wait( 2 );s << Close;

```

### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););t = s << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**構文:** obj &lt;&lt; Restart

**説明:** 現在スケジュールされているすべてのイベントの実行を停止した後、スケジューラを再始動させる。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;Wait( 2 );s << Restart;

```

### Show Schedule

**構文:** obj &lt;&lt; Show Schedule

**説明:** 現在スケジュールされている次のイベントを表示する。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Show Schedule;

```

### Stop

**構文:** obj &lt;&lt; Stop

**説明:** 現在スケジュールされているすべてのイベントの実行を停止する。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;

```

