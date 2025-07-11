# Notebook



## Block

### Block

**Sintassi:** Block

```js

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### Block Name

**Sintassi:** obj << Block Name( name )

**Descrizione:** Imposta/ottiene il titolo di questo blocco.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

### Duplicate Block

**Sintassi:** obj << Duplicate Block

**Descrizione:** Duplica questo blocco e aggiunge il nuovo blocco come elemento di pari livello.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

### Get Content

**Sintassi:** obj << Get Content

**Descrizione:** Carica il contenuto del blocco.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

### Get Output

**Sintassi:** obj << Get Output

**Descrizione:** Ottiene l&apos;output della struttura di visualizzazione del blocco.

```js

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

**Sintassi:** obj << Import .ipynb File( file path )

**Descrizione:** Carica il file .ipynb fornito come blocchi aggiunti a questa sezione.

```js

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

### Line Count

**Sintassi:** obj << Line Count( number )

**Descrizione:** Imposta il numero massimo di linee visualizzate in questo blocco prima di abilitare lo scorrimento. Imposta a zero per abilitare il dimensionamento automatico.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

### Move Block Down

**Sintassi:** obj << Move Block Down

**Descrizione:** Sposta questo blocco in basso di uno nell&apos;elenco.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block << Move Block Down;

```

### Move Block Up

**Sintassi:** obj << Move Block Up

**Descrizione:** Sposta questo blocco in alto di uno nell&apos;elenco.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block2 << Move Block Up;

```

### Popout Results

**Sintassi:** obj << Popout Results

**Descrizione:** Invia l&apos;output corrente di questo blocco a una nuova finestra.

```js

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

**Sintassi:** obj << Remove Block

**Descrizione:** Rimuove questo blocco dal suo elemento padre.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

### Remove Section

**Sintassi:** obj << Remove Section

**Descrizione:** Rimuove questa sezione dal suo elemento padre.

```js

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

### Run Script

**Sintassi:** obj << Run Script

**Descrizione:** Esegue il contenuto del blocco corrente.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

### Run Section

**Sintassi:** obj << Run Section

**Descrizione:** Esegue gli elementi di livello inferiore di questa sezione in ordine.

```js

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

### Set Content

**Sintassi:** obj << Set Content( content )

**Descrizione:** Imposta il contenuto del blocco.

```js

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

### Enable Inline Logging

**Sintassi:** obj << Enable Inline Logging( 0|1 )

**Descrizione:** Abilita/disabilita la registrazione dell&apos;output nei blocchi del blocco appunti.

```js

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Sintassi:** obj << Export to a Workflow( <Create(wfb name)>|<AddTo(wfb name)> )

**Descrizione:** Esporta i blocchi del blocco appunti in un workflow.

```js

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
nb << Export to a Workflow;

```

### Get Window

**Sintassi:** obj << Get Window

**Descrizione:** Restituisce la finestra di questo blocco appunti.

```js

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**Sintassi:** obj << Import .ipynb File( file path )

**Descrizione:** Carica il file .ipynb fornito come blocchi nel blocco appunti.

```js

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Notebook

**Sintassi:** Notebook

**Descrizione:** Crea un nuovo blocco appunti o restituisce il blocco appunti con il nome o l&apos;indice fornito.

```js

Names Default To Here( 1 );

nb = Notebook();

```

### Run All Scripts

**Sintassi:** obj << Run All Scripts

**Descrizione:** Esegue il blocco appunti completo.

```js

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

**Sintassi:** obj << Show Embedded Log( 0|1 )

**Descrizione:** Abilita/disabilita il log integrato nel blocco appunti.

```js

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**Sintassi:** obj << Title( title )

**Descrizione:** Imposta il titolo di questo blocco appunti.

```js

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

