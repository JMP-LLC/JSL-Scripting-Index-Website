# Notebook



## 関連するコンストラクター

### Notebook

**構文:** Notebook

**説明:** 新しいノートブックを作成するか、指定した名前またはインデックスを持つノートブックを戻す。

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

## 項目のメッセージ

### Enable Inline Logging

**構文:** obj << Enable Inline Logging( 0|1 )

**説明:** ノートブックのブロックにおける出力のログを有効または無効にする。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**構文:** obj << Export to a Workflow( <Create(wfb name)>|<AddTo(wfb name)> )

**説明:** ノートブックのブロックをワークフローに書き出す。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
nb << Export to a Workflow;

```

### Get Window

**構文:** obj << Get Window

**説明:** ノートブックのウィンドウを戻す。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**構文:** obj << Import .ipynb File( file path )

**説明:** 指定した.ipynbファイルをノートブックのブロックとしてロードする。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**構文:** obj << Run All Scripts

**説明:** ノートブックのすべてを実行する。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;

```

### Show Embedded Log

**構文:** obj << Show Embedded Log( 0|1 )

**説明:** ノートブックに埋め込みんだログの表示を有効または無効にする。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**構文:** obj << Title( title )

**説明:** ノートブックのタイトルを設定する。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

## Block

### 関連するコンストラクター

#### Block

**構文:** Block

```jsl

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### 項目のメッセージ

#### Block Name

**構文:** obj << Block Name( name )

**説明:** このブロックのタイトルを設定/取得する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**構文:** obj << Duplicate Block

**説明:** このブロックを複製し、兄弟として追加する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

#### Get Content

**構文:** obj << Get Content

**説明:** ブロックの内容を取得する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

#### Get Output

**構文:** obj << Get Output

**説明:** ブロックの出力の表示ツリーを取得する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;
block2 << Get Output;

```

#### Import .ipynb File

**構文:** obj << Import .ipynb File( file path )

**説明:** 指定した.ipynbファイルをブロックとして読み込み、このセクションに追加する。

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**構文:** obj << Line Count( number )

**説明:** このブロックに表示される行の最大数を設定する。この行数を超えるとスクロールが可能になる。自動的に調整するには、0に設定する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

#### Move Block Down

**構文:** obj << Move Block Down

**説明:** リスト内でこのブロックを1つ下に移動させる。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block << Move Block Down;

```

#### Move Block Up

**構文:** obj << Move Block Up

**説明:** リスト内でこのブロックを1つ上に移動させる。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block2 << Move Block Up;

```

#### Popout Results

**構文:** obj << Popout Results

**説明:** このブロックの現在の出力を新しいウィンドウに送る。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;
block2 << Popout Results;

```

#### Remove Block

**構文:** obj << Remove Block

**説明:** このブロックを親から削除する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

#### Remove Section

**構文:** obj << Remove Section

**説明:** このセクションを親から削除する。

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

#### Run Script

**構文:** obj << Run Script

**説明:** 現在のブロックの内容を実行する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

#### Run Section

**構文:** obj << Run Section

**説明:** このセクションの子を順番に実行する。

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

#### Set Content

**構文:** obj << Set Content( content )

**説明:** ブロックの内容を設定する。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

