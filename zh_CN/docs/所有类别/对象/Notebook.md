# Notebook



## 关联的构造器

### Notebook

**语法:** Notebook

**说明:** 创建新笔记本，或返回具有提供的名称或索引的笔记本。

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

## 项消息

### Enable Inline Logging

**语法:** obj << Enable Inline Logging( 0|1 )

**说明:** 在笔记本块中启用/禁用记录输出。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**语法:** obj << Export to a Workflow( <Create(wfb name)>|<AddTo(wfb name)> )

**说明:** 将笔记本的块导出到工作流。

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

**语法:** obj << Get Window

**说明:** 返回该笔记本的窗口。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**语法:** obj << Import .ipynb File( file path )

**说明:** 将提供的 .ipynb 文件作为块加载到笔记本中。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**语法:** obj << Run All Scripts

**说明:** 运行完整笔记本。

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

**语法:** obj << Show Embedded Log( 0|1 )

**说明:** 在笔记本中启用/禁用嵌入式日志。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**语法:** obj << Title( title )

**说明:** 设置该笔记本的标题。

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

## Block

### 关联的构造器

#### Block

**语法:** Block

```jsl

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### 项消息

#### Block Name

**语法:** obj << Block Name( name )

**说明:** 设置/获取该块的标题。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**语法:** obj << Duplicate Block

**说明:** 复制该块并将添加新块作为其平级项。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

#### Get Content

**语法:** obj << Get Content

**说明:** 获取该块的内容。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

#### Get Output

**语法:** obj << Get Output

**说明:** 获取该块的显示树输出。

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

**语法:** obj << Import .ipynb File( file path )

**说明:** 将提供的 .ipynb 文件作为块加载并添加到该部分中。

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**语法:** obj << Line Count( number )

**说明:** 设置启用滚动之前该块中显示的最大行数。设置为零以启用自动调整大小。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

#### Move Block Down

**语法:** obj << Move Block Down

**说明:** 将该块在列表中下移一个位置。

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

**语法:** obj << Move Block Up

**说明:** 将该块在列表中上移一个位置。

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

**语法:** obj << Popout Results

**说明:** 将该块的当前输出发送到新窗口。

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

**语法:** obj << Remove Block

**说明:** 从该块的父级中删除该块。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

#### Remove Section

**语法:** obj << Remove Section

**说明:** 从该部分的父级中删除该部分。

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

#### Run Script

**语法:** obj << Run Script

**说明:** 执行当前块的内容。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

#### Run Section

**语法:** obj << Run Section

**说明:** 按顺序运行该部分的子级。

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

#### Set Content

**语法:** obj << Set Content( content )

**说明:** 设置该块的内容。

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

