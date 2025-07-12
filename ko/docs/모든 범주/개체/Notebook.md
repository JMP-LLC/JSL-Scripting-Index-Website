# Notebook



## 연결된 생성자

### Notebook

**구문:** Notebook

**설명:** 새 노트북을 생성하거나, 제공된 이름 또는 인덱스를 사용하여 노트북을 반환합니다.

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

## 항목 메시지

### Enable Inline Logging

**구문:** obj << Enable Inline Logging( 0|1 )

**설명:** 노트북 블록에서 출력 로깅을 활성화/비활성화합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**구문:** obj << Export to a Workflow( <Create(wfb name)>|<AddTo(wfb name)> )

**설명:** 노트북의 블록을 워크플로우로 내보냅니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block( "JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )" );
nb << Export to a Workflow;

```

### Get Window

**구문:** obj << Get Window

**설명:** 이 노트북의 창을 반환합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**구문:** obj << Import .ipynb File( file path )

**설명:** 제공된 .ipynb 파일을 노트북의 블록으로 로드합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**구문:** obj << Run All Scripts

**설명:** 전체 노트북을 실행합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block( "JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )" );
Wait( 1 );
nb << Run All Scripts;

```

### Show Embedded Log

**구문:** obj << Show Embedded Log( 0|1 )

**설명:** 노트북에 중첩된 로그를 활성화/비활성화합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**구문:** obj << Title( title )

**설명:** 이 노트북의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

## Block

### 연결된 생성자

#### Block

**구문:** Block

```jsl

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### 항목 메시지

#### Block Name

**구문:** obj << Block Name( name )

**설명:** 이 블록의 제목을 설정하거나 가져옵니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**구문:** obj << Duplicate Block

**설명:** 이 블록을 복제하고 새 블록을 형제 항목으로 추가합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

#### Get Content

**구문:** obj << Get Content

**설명:** 블록의 콘텐츠를 가져옵니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

#### Get Output

**구문:** obj << Get Output

**설명:** 블록의 표시 트리 출력을 가져옵니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block( "JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )" );
Wait( 1 );
nb << Run All Scripts;
block2 << Get Output;

```

#### Import .ipynb File

**구문:** obj << Import .ipynb File( file path )

**설명:** 제공된 .ipynb 파일을 이 섹션에 추가된 블록으로 로드합니다.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**구문:** obj << Line Count( number )

**설명:** 스크롤을 활성화하기 전에 이 블록에 표시되는 최대 줄 수를 설정합니다. 자동 크기 조정을 사용하려면 0으로 설정합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

#### Move Block Down

**구문:** obj << Move Block Down

**설명:** 이 블록을 목록에서 한 단계 아래로 이동합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block( "JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )" );
block << Move Block Down;

```

#### Move Block Up

**구문:** obj << Move Block Up

**설명:** 이 블록을 목록에서 한 단계 위로 이동합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block( "JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )" );
block2 << Move Block Up;

```

#### Popout Results

**구문:** obj << Popout Results

**설명:** 이 블록의 현재 출력을 새 창으로 보냅니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block( "JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )" );
Wait( 1 );
nb << Run All Scripts;
block2 << Popout Results;

```

#### Remove Block

**구문:** obj << Remove Block

**설명:** 이 블록을 상위 항목에서 제거합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

#### Remove Section

**구문:** obj << Remove Section

**설명:** 이 섹션을 상위 항목에서 제거합니다.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

#### Run Script

**구문:** obj << Run Script

**설명:** 현재 블록의 콘텐츠를 실행합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

#### Run Section

**구문:** obj << Run Section

**설명:** 이 섹션의 하위 항목을 순서대로 실행합니다.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

#### Set Content

**구문:** obj << Set Content( content )

**설명:** 블록의 콘텐츠를 설정합니다.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

