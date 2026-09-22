# Notebook



## Costruttori associati

### Notebook

**Sintassi:** Notebook

**Descrizione:** Crea un nuovo blocco appunti o restituisce il blocco appunti con il nome o l&apos;indice fornito.

```jsl

nb = Notebook();

```

## Messaggi degli elementi

### Enable Inline Logging

**Sintassi:** obj &lt;&lt; Enable Inline Logging( 0|1 )

**Descrizione:** Abilita/disabilita la registrazione dell&apos;output nei blocchi del blocco appunti.

```jsl

nb = Notebook();nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Sintassi:** obj &lt;&lt; Export to a Workflow( &lt;Create(wfb name)&gt;|&lt;AddTo(wfb name)&gt; )

**Descrizione:** Esporta i blocchi del blocco appunti in un workflow.

```jsl

nb = Notebook();nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");nb << Export to a Workflow;

```

### Get Window

**Sintassi:** obj &lt;&lt; Get Window

**Descrizione:** Restituisce la finestra di questo blocco appunti.

```jsl

nb = Notebook();nb << Get Window;

```

### Import .ipynb File

**Sintassi:** obj &lt;&lt; Import .ipynb File( file path )

**Descrizione:** Carica il file .ipynb fornito come blocchi nel blocco appunti.

```jsl

nb = Notebook();nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**Sintassi:** obj &lt;&lt; Run All Scripts

**Descrizione:** Esegue il blocco appunti completo.

```jsl

nb = Notebook();nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");Wait( 1 );nb << Run All Scripts;

```

### Show Embedded Log

**Sintassi:** obj &lt;&lt; Show Embedded Log( 0|1 )

**Descrizione:** Abilita/disabilita il log integrato nel blocco appunti.

```jsl

nb = Notebook();nb << Show Embedded Log( 1 );

```

### Title

**Sintassi:** obj &lt;&lt; Title( title )

**Descrizione:** Imposta il titolo di questo blocco appunti.

```jsl

nb = Notebook();nb << Title( "Example Title" );Show( nb << Title );

```

## Block

### Costruttori associati

#### Block

**Sintassi:** Block

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### Messaggi degli elementi

#### Block Name

**Sintassi:** obj &lt;&lt; Block Name( name )

**Descrizione:** Imposta/ottiene il titolo di questo blocco.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**Sintassi:** obj &lt;&lt; Duplicate Block

**Descrizione:** Duplica questo blocco e aggiunge il nuovo blocco come elemento di pari livello.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Duplicate Block;

```

#### Get Content

**Sintassi:** obj &lt;&lt; Get Content

**Descrizione:** Carica il contenuto del blocco.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );Show( block << Get Content );

```

#### Get Output

**Sintassi:** obj &lt;&lt; Get Output

**Descrizione:** Ottiene l&apos;output della struttura di visualizzazione del blocco.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");Wait( 1 );nb << Run All Scripts;block2 << Get Output;

```

#### Import .ipynb File

**Sintassi:** obj &lt;&lt; Import .ipynb File( file path )

**Descrizione:** Carica il file .ipynb fornito come blocchi aggiunti a questa sezione.

```jsl

nb = Notebook();section = nb << Add New Block( "Section" );section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**Sintassi:** obj &lt;&lt; Line Count( number )

**Descrizione:** Imposta il numero massimo di linee visualizzate in questo blocco prima di abilitare lo scorrimento. Imposta a zero per abilitare il dimensionamento automatico.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Line Count( 1 );

```

#### Move Block Down

**Sintassi:** obj &lt;&lt; Move Block Down

**Descrizione:** Sposta questo blocco in basso di uno nell&apos;elenco.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");block << Move Block Down;

```

#### Move Block Up

**Sintassi:** obj &lt;&lt; Move Block Up

**Descrizione:** Sposta questo blocco in alto di uno nell&apos;elenco.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");block2 << Move Block Up;

```

#### Popout Results

**Sintassi:** obj &lt;&lt; Popout Results

**Descrizione:** Invia l&apos;output corrente di questo blocco a una nuova finestra.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block2 = nb << Add New Block(	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )");Wait( 1 );nb << Run All Scripts;block2 << Popout Results;

```

#### Remove Block

**Sintassi:** obj &lt;&lt; Remove Block

**Descrizione:** Rimuove questo blocco dal suo elemento padre.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Remove Block;

```

#### Remove Section

**Sintassi:** obj &lt;&lt; Remove Section

**Descrizione:** Rimuove questa sezione dal suo elemento padre.

```jsl

nb = Notebook();section = nb << Add New Block( "Section" );section << Remove Section;

```

#### Run Script

**Sintassi:** obj &lt;&lt; Run Script

**Descrizione:** Esegue il contenuto del blocco corrente.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );Wait( 1 );block << Run Script;

```

#### Run Section

**Sintassi:** obj &lt;&lt; Run Section

**Descrizione:** Esegue gli elementi di livello inferiore di questa sezione in ordine.

```jsl

nb = Notebook();section = nb << Add New Block( "Section" );section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );Wait( 1 );section << Run Section;

```

#### Set Content

**Sintassi:** obj &lt;&lt; Set Content( content )

**Descrizione:** Imposta il contenuto del blocco.

```jsl

nb = Notebook();block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );block << Set Content( "Print(Char(Pi(), 10))" );

```

