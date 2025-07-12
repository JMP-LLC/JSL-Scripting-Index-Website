# Notebook



## Constructores asociados

### Notebook

**Sintaxis:** Notebook

**Descripción:** Crea un nuevo cuaderno o devuelve el cuaderno con el nombre o índice proporcionado.

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

## Mensajes del elemento

### Enable Inline Logging

**Sintaxis:** obj << Enable Inline Logging( 0|1 )

**Descripción:** Habilita o deshabilita el registro de la salida en bloques del cuaderno.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Sintaxis:** obj << Export to a Workflow( <Create(wfb name)>|<AddTo(wfb name)> )

**Descripción:** Exporta los bloques del cuaderno a un flujo de trabajo.

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

**Sintaxis:** obj << Get Window

**Descripción:** Devuelve la ventana de este cuaderno.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**Sintaxis:** obj << Import .ipynb File( file path )

**Descripción:** Carga el archivo .ipynb proporcionado como bloques en el cuaderno.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**Sintaxis:** obj << Run All Scripts

**Descripción:** Ejecuta el cuaderno completo.

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

**Sintaxis:** obj << Show Embedded Log( 0|1 )

**Descripción:** Habilita o deshabilita el registro incrustado en el cuaderno.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**Sintaxis:** obj << Title( title )

**Descripción:** Establece el título de este cuaderno.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

## Block

### Constructores asociados

#### Block

**Sintaxis:** Block

```jsl

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### Mensajes del elemento

#### Block Name

**Sintaxis:** obj << Block Name( name )

**Descripción:** Establece u obtiene el título de este bloque.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**Sintaxis:** obj << Duplicate Block

**Descripción:** Duplica este bloque y agrega el nuevo bloque como hermano.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

#### Get Content

**Sintaxis:** obj << Get Content

**Descripción:** Obtiene el contenido del bloque.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

#### Get Output

**Sintaxis:** obj << Get Output

**Descripción:** Obtiene la salida del árbol de visualización del bloque.

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

**Sintaxis:** obj << Import .ipynb File( file path )

**Descripción:** Carga el archivo .ipynb proporcionado como bloques agregados a esta sección.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**Sintaxis:** obj << Line Count( number )

**Descripción:** Establece el número máximo de líneas mostradas en este bloque antes de activar el desplazamiento. Defínalo como cero para habilitar el tamaño automático.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

#### Move Block Down

**Sintaxis:** obj << Move Block Down

**Descripción:** Desplaza este bloque una posición hacia abajo en la lista.

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

**Sintaxis:** obj << Move Block Up

**Descripción:** Desplaza este bloque una posición hacia arriba en la lista.

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

**Sintaxis:** obj << Popout Results

**Descripción:** Envía la salida actual de este bloque a una nueva ventana.

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

**Sintaxis:** obj << Remove Block

**Descripción:** Quita este bloque de su progenitor.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

#### Remove Section

**Sintaxis:** obj << Remove Section

**Descripción:** Quita esta sección de su progenitor.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

#### Run Script

**Sintaxis:** obj << Run Script

**Descripción:** Ejecuta el contenido del bloque actual.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

#### Run Section

**Sintaxis:** obj << Run Section

**Descripción:** Ejecuta los hijos de esta sección en orden.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

#### Set Content

**Sintaxis:** obj << Set Content( content )

**Descripción:** Establece el contenido del bloque.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

