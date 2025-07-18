# Notebook



## Constructores asociados

### Notebook

**Sintaxis:** Notebook

**Descripción:** Crea un nuevo cuaderno o devuelve el cuaderno con el nombre o índice proporcionado.

```jsl


nb = Notebook();

```

## Mensajes del elemento

### Enable Inline Logging

**Sintaxis:** obj &lt;&lt; Enable Inline Logging( 0|1 )

**Descripción:** Habilita o deshabilita el registro de la salida en bloques del cuaderno.

```jsl



nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Sintaxis:** obj &lt;&lt; Export to a Workflow( &lt;Create(wfb name)&gt;|&lt;AddTo(wfb name)&gt; )

**Descripción:** Exporta los bloques del cuaderno a un flujo de trabajo.

```jsl



nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
nb << Export to a Workflow;

```

### Get Window

**Sintaxis:** obj &lt;&lt; Get Window

**Descripción:** Devuelve la ventana de este cuaderno.

```jsl



nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**Sintaxis:** obj &lt;&lt; Import .ipynb File( file path )

**Descripción:** Carga el archivo .ipynb proporcionado como bloques en el cuaderno.

```jsl



nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**Sintaxis:** obj &lt;&lt; Run All Scripts

**Descripción:** Ejecuta el cuaderno completo.

```jsl



nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;

```

### Show Embedded Log

**Sintaxis:** obj &lt;&lt; Show Embedded Log( 0|1 )

**Descripción:** Habilita o deshabilita el registro incrustado en el cuaderno.

```jsl



nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**Sintaxis:** obj &lt;&lt; Title( title )

**Descripción:** Establece el título de este cuaderno.

```jsl



nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

## Block

### Constructores asociados

#### Block

**Sintaxis:** Block

```jsl


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### Mensajes del elemento

#### Block Name

**Sintaxis:** obj &lt;&lt; Block Name( name )

**Descripción:** Establece u obtiene el título de este bloque.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**Sintaxis:** obj &lt;&lt; Duplicate Block

**Descripción:** Duplica este bloque y agrega el nuevo bloque como hermano.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

#### Get Content

**Sintaxis:** obj &lt;&lt; Get Content

**Descripción:** Obtiene el contenido del bloque.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

#### Get Output

**Sintaxis:** obj &lt;&lt; Get Output

**Descripción:** Obtiene la salida del árbol de visualización del bloque.

```jsl



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

**Sintaxis:** obj &lt;&lt; Import .ipynb File( file path )

**Descripción:** Carga el archivo .ipynb proporcionado como bloques agregados a esta sección.

```jsl


nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**Sintaxis:** obj &lt;&lt; Line Count( number )

**Descripción:** Establece el número máximo de líneas mostradas en este bloque antes de activar el desplazamiento. Defínalo como cero para habilitar el tamaño automático.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

#### Move Block Down

**Sintaxis:** obj &lt;&lt; Move Block Down

**Descripción:** Desplaza este bloque una posición hacia abajo en la lista.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block << Move Block Down;

```

#### Move Block Up

**Sintaxis:** obj &lt;&lt; Move Block Up

**Descripción:** Desplaza este bloque una posición hacia arriba en la lista.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block2 << Move Block Up;

```

#### Popout Results

**Sintaxis:** obj &lt;&lt; Popout Results

**Descripción:** Envía la salida actual de este bloque a una nueva ventana.

```jsl



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

**Sintaxis:** obj &lt;&lt; Remove Block

**Descripción:** Quita este bloque de su progenitor.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

#### Remove Section

**Sintaxis:** obj &lt;&lt; Remove Section

**Descripción:** Quita esta sección de su progenitor.

```jsl


nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

#### Run Script

**Sintaxis:** obj &lt;&lt; Run Script

**Descripción:** Ejecuta el contenido del bloque actual.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

#### Run Section

**Sintaxis:** obj &lt;&lt; Run Section

**Descripción:** Ejecuta los hijos de esta sección en orden.

```jsl


nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

#### Set Content

**Sintaxis:** obj &lt;&lt; Set Content( content )

**Descripción:** Establece el contenido del bloque.

```jsl



nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

