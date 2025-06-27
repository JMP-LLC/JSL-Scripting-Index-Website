# Notebook



## Block

### Block

**Syntax:** Block

```

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### Block Name

**Syntax:** obj << Block Name

**Description:** Sets/gets the title of this block.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

### Duplicate Block

**Syntax:** obj << Duplicate Block

**Description:** Duplicates this block and adds the new block as its sibling.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

### Get Content

**Syntax:** obj << Get Content

**Description:** Gets the content of the block.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

### Get Output

**Syntax:** obj << Get Output

**Description:** Gets the display tree output of the block.

```

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

### Import .ipynb File

**Syntax:** obj << Import .ipynb File

**Description:** Loads the provided .ipynb file as blocks added to this section.

```

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

### Line Count

**Syntax:** obj << Line Count( number )

**Description:** Sets the maximum number of lines shown in this block before enabling scrolling. Set to zero to enable auto-sizing.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

### Move Block Down

**Syntax:** obj << Move Block Down

**Description:** Moves this block down by one in the list.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block << Move Block Down;

```

### Move Block Up

**Syntax:** obj << Move Block Up

**Description:** Moves this block up by one in the list.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block2 << Move Block Up;

```

### Popout Results

**Syntax:** obj << Popout Results

**Description:** Sends the current output of this block to a new window.

```

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

### Remove Block

**Syntax:** obj << Remove Block

**Description:** Removes this block from its parent.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

### Remove Section

**Syntax:** obj << Remove Section

**Description:** Removes this section from its parent.

```

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

### Run Script

**Syntax:** obj << Run Script

**Description:** Executes the contents of the current block.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

### Run Section

**Syntax:** obj << Run Section

**Description:** Runs the children of this section in order.

```

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

### Set Content

**Syntax:** obj << Set Content

**Description:** Sets the content of the block.

```

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

### Enable Inline Logging

**Syntax:** obj << Enable Inline Logging( state=0|1 )

**Description:** Enables/disables the logging of output in notebook blocks.

```

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Syntax:** obj << Export to a Workflow

**Description:** Exports the blocks of the notebook to a workflow.

```

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
nb << Export to a Workflow;

```

### Get Window

**Syntax:** obj << Get Window

**Description:** Returns the window of this notebook.

```

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**Syntax:** obj << Import .ipynb File

**Description:** Loads the provided .ipynb file as blocks in the notebook.

```

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Notebook

**Syntax:** nb = Notebook( name|number )

**Description:** Creates a new notebook, or returns the notebook with the provided name or index.

```

Names Default To Here( 1 );

nb = Notebook();

```

### Run All Scripts

**Syntax:** obj << Run All Scripts

**Description:** Runs the full notebook.

```

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

**Syntax:** obj << Show Embedded Log( state=0|1 )

**Description:** Enables/disables the embedded log in the notebook.

```

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**Syntax:** obj << Title( text )

**Description:** Sets the title of this notebook.

```

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

