# ZipArchive



## 関連するコンストラクター

### Open

**構文:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**説明:** ファイルから作成されたデータテーブルやその他のJMPファイル、またはオブジェクトへの参照を戻す。パスが指定されていない場合、「データファイルを開く」ダイアログが表示される。フォルダのパスが指定されている場合、システムのファイルブラウザが開かれ、オブジェクトは戻されない。使用できるオプションについては、構文リファレンスを参照。

```jsl

Names Default To Here( 1 );
/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

## 項目のメッセージ

### Dir

**構文:** memlist = obj << Dir

**説明:** ZIPアーカイブ内にあるメンバファイルのリストを戻す。

```jsl

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Read

**構文:** memdata = obj << Read( memname, <Format(blob|string)>, <Encoding(charset)> )

**説明:** ZIPアーカイブメンバファイルを読み込み文字列またはBLOBにする。

```jsl

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Write

**構文:** actual name = obj << Write( memname, memdata, < "replace" > )

**説明:** テキストまたはBLOBをZIPアーカイブメンバファイルに書き込む。オプションの"replace"パラメータが指定されていて、その名前を持つファイルが存在している場合は、メンバファイルが置き換えられる。それ以外の場合は、既存のメンバが上書きされないようにメンバ名を変更する。実際に使用される名前を戻す。

```jsl

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

