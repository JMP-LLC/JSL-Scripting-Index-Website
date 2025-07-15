# ZipArchive



## 关联的构造器

### Open

**语法:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**说明:** 返回对数据表或其他 JMP 文件或基于文件创建的对象的引用。若未指定路径，则“打开”对话框显示。若指定了文件夹路径，则打开系统文件浏览器并且不返回对象。请参阅语法参考获取可用选项的完整说明。

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

## 项消息

### Dir

**语法:** memlist = obj &lt;&lt; Dir

**说明:** 在 zip 存档中返回成员文件列表。

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

**语法:** memdata = obj &lt;&lt; Read( memname, &lt;Format(blob|string)&gt;, &lt;Encoding(charset)&gt; )

**说明:** 将 zip 存档成员文件读入字符串或 blob。

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

**语法:** actual name = obj &lt;&lt; Write( memname, memdata, &lt; "replace" &gt; )

**说明:** 将文本或 Blob 写入 zip 存档成员文件。若指定了可选的“replace”参数，并且存在具有该名称的现有文件，则将替换成员文件。否则，将更改此成员名称，以防止覆盖现有成员；返回实际使用的名称。

```jsl

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

