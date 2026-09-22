# Notebook



## Associated Constructors

### Notebook

**Syntax:** nb = Notebook( name|number )

**Description:** Creates a new notebook, or returns the notebook with the provided name or index.

```jsl

nb = Notebook();

```

## Item Messages

### Enable Inline Logging

**Syntax:** obj &lt;&lt; Enable Inline Logging( 0|1 )

**Description:** Enables/disables the logging of output in notebook blocks.

```jsl

nb = Notebook();nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Syntax:** obj &lt;&lt; Export to a Workflow( &lt;Create(wfb name)&gt;|&lt;AddTo(wfb name)&gt; )

**Description:** Exports the blocks of the notebook to a workflow.

```jsl

nb = Notebook();nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");nb << Export to a Workflow;

```

### Get Window

**Syntax:** obj &lt;&lt; Get Window

**Description:** Returns the window of this notebook.

```jsl

nb = Notebook();nb << Get Window;

```

### Import .ipynb File

**Syntax:** obj &lt;&lt; Import .ipynb File( file path )

**Description:** Loads the provided .ipynb file as blocks in the notebook.

```jsl

nb = Notebook();nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**Syntax:** obj &lt;&lt; Run All Scripts

**Description:** Runs the full notebook.

```jsl

nb = Notebook();nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");Wait( 1 );nb << Run All Scripts;

```

### Show Embedded Log

**Syntax:** obj &lt;&lt; Show Embedded Log( 0|1 )

**Description:** Enables/disables the embedded log in the notebook.

```jsl

nb = Notebook();nb << Show Embedded Log( 1 );

```

### Title

**Syntax:** obj &lt;&lt; Title( title )

**Description:** Sets the title of this notebook.

```jsl

nb = Notebook();nb << Title( "Example Title" );Show( nb << Title );

```

## Block

### Associated Constructors

#### Block

**Syntax:** Block

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### Item Messages

#### Block Name

**Syntax:** obj &lt;&lt; Block Name( name )

**Description:** Sets/gets the title of this block.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**Syntax:** obj &lt;&lt; Duplicate Block

**Description:** Duplicates this block and adds the new block as its sibling.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Duplicate Block;

```

#### Get Content

**Syntax:** obj &lt;&lt; Get Content

**Description:** Gets the content of the block.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );Show( block << Get Content );

```

#### Get Output

**Syntax:** obj &lt;&lt; Get Output

**Description:** Gets the display tree output of the block.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");Wait( 1 );nb << Run All Scripts;block2 << Get Output;

```

#### Import .ipynb File

**Syntax:** obj &lt;&lt; Import .ipynb File( file path )

**Description:** Loads the provided .ipynb file as blocks added to this section.

```jsl

nb = Notebook();section = nb << Add New Block( "Section" );section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**Syntax:** obj &lt;&lt; Line Count( number )

**Description:** Sets the maximum number of lines shown in this block before enabling scrolling. Set to zero to enable auto-sizing.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Line Count( 1 );

```

#### Move Block Down

**Syntax:** obj &lt;&lt; Move Block Down

**Description:** Moves this block down by one in the list.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");block << Move Block Down;

```

#### Move Block Up

**Syntax:** obj &lt;&lt; Move Block Up

**Description:** Moves this block up by one in the list.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");block2 << Move Block Up;

```

#### Popout Results

**Syntax:** obj &lt;&lt; Popout Results

**Description:** Sends the current output of this block to a new window.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");Wait( 1 );nb << Run All Scripts;block2 << Popout Results;

```

#### Remove Block

**Syntax:** obj &lt;&lt; Remove Block

**Description:** Removes this block from its parent.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Remove Block;

```

#### Remove Section

**Syntax:** obj &lt;&lt; Remove Section

**Description:** Removes this section from its parent.

```jsl

nb = Notebook();section = nb << Add New Block( "Section" );section << Remove Section;

```

#### Run Script

**Syntax:** obj &lt;&lt; Run Script

**Description:** Executes the contents of the current block.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );Wait( 1 );block << Run Script;

```

#### Run Section

**Syntax:** obj &lt;&lt; Run Section

**Description:** Runs the children of this section in order.

```jsl

nb = Notebook();section = nb << Add New Block( "Section" );section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );Wait( 1 );section << Run Section;

```

#### Set Content

**Syntax:** obj &lt;&lt; Set Content( content )

**Description:** Sets the content of the block.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Set Content( "Print(Char(Pi(), 10))" );

```

