# Compare Data Tables



## Costruttori associati

### Compare Data Tables

**Sintassi:** Compare Data Tables( <Compare with( Data Table( name ))>, <show window(0 | 1)>, <limit(integer)>, <Compare table properties(0 | 1)>, <Compare column attributes and properties(0 | 1)>, <Compare data(0 | 1)>, <Fuzzy compare( <0 | 1>, <Relative Error(number)>)>, <Show difference summary(0 | 1)>, <Show difference plot(0 | 1)> )

**Descrizione:** Confronta due tabelle di dati aperte e riporta le differenze tra i dati e tra i metadati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );

```

## Messaggi degli elementi

### Are Data Different

**Sintassi:** obj << Are Data Different

**Descrizione:** Restituisce vero o falso in base alla presenza o meno di differenze tra le due tabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
how = (obj << Are Data Different);

```

### Auto compare

**Sintassi:** Auto Compare(0|1)

**Descrizione:** Esegue confronti non appena viene modificata qualsiasi impostazione

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Auto Compare( 1 );

```

### Close

**Sintassi:** obj << Close

**Descrizione:** Chiude l&apos;oggetto Confronta tabelle di dati

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << close;

```

### Compare

**Sintassi:** Compare()

**Descrizione:** Esegue confronti adesso

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Compare();

```

### Compare Column Attributes and Properties

**Sintassi:** obj << Compare Column Attributes and Properties( state=0|1 )

**Descrizione:** Imposta o cancella il flag per confrontare gli attributi e le proprietà delle colonne. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare column attributes and properties( 1 );

```

### Compare Data

**Sintassi:** obj << Compare Data( state=0|1 )

**Descrizione:** Imposta o cancella il flag per confrontare i dati delle colonne. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare data( 0 );

```

### Compare Table Properties

**Sintassi:** obj << Compare Table Properties( state=0|1 )

**Descrizione:** Imposta o cancella il flag per confrontare le variabili e gli script delle tabelle. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare table properties;

```

### Compare With

**Sintassi:** obj << Compare With( Data Table( name ) )

**Descrizione:** Confronta la prima tabella con questa tabella. Restituisce vero o falso.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
obj = dt << Compare Data Tables();
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
same = obj << compare with( dt2 );

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Inserisce lo script Confronta tabelle di dati negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Copy Script;

```

### Fuzzy Compare

**Sintassi:** obj << Fuzzy Compare( <(state= 1 | 0)>, <Relative Error (number)> )

**Descrizione:** Imposta o cancella il flag per confrontare i dati delle colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << fuzzy compare( relative error( 0.0001 ) );

```

### Get column attributes differences

**Sintassi:** obj << Get column attributes differences( columns( column) )

**Descrizione:** Ottiene l&apos;elenco degli attributi della colonna che sono differenti nelle colonne confrontate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
attribDiff = (obj << Get columns attributes differences( :name ));

```

### Get column properties differences

**Sintassi:** obj << Get column properties differences( columns( column) )

**Descrizione:** Ottiene l&apos;elenco delle proprietà della colonna che sono differenti nelle colonne confrontate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
propDiff = (obj << Get columns properties differences( :name ));

```

### Get columns list

**Sintassi:** obj << Get columns list( ( <differed in data> |  <differed in properties> | <mismatched data type> | <differed in attributes>) )

**Descrizione:** Ottiene l&apos;elenco di colonne che differiscono per dati, proprietà, tipo di dati o altri attributi delle colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get columns list( differed in attributes ));
Show( colDiff );

```

### Get difference summary matrix

**Sintassi:** obj << Get difference summary matrix

**Descrizione:** Ottiene il riepilogo delle differenze in forma di matrice. Le colonne della matrice corrispondono alle colonne nel riepilogo delle differenze. La prima colonna, azione, è rappresentata nella matrice con -1 per Elimina, 0 per Sostituisci e 1 per Aggiungi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
mtx = (obj << Get Difference Summary matrix);

```

### Get table scripts difference list

**Sintassi:** obj << Get table scripts difference list

**Descrizione:** Ottiene l&apos;elenco degli script della tabella che sono differenti o mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
scriptDiff = (obj << Get table scripts difference list);

```

### Get table variables difference list

**Sintassi:** obj << Get table variables difference list

**Descrizione:** Ottiene l&apos;elenco delle variabili della tabella che sono differenti o mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
tvdiff = (obj << Get table variables difference list);

```

### Get unmatched columns list

**Sintassi:** obj << Get unmatched columns list

**Descrizione:** Ottiene l&apos;elenco di colonne non corrispondenti, quelle prive di colonne di riscontro da confrontare.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get unmatched columns list);

```

### Hide column properties with no differences

**Sintassi:** Hide column properties with no differences(0|1)

**Descrizione:** Nasconde le proprietà che sono uguali quando si confrontano le proprietà delle colonne.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide column properties with no differences( 0 );

```

### Hide columns with no differences

**Sintassi:** Hide columns with no differences(0|1)

**Descrizione:** Nasconde le colonne che sono uguali quando si confrontano i dati delle tabelle.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide columns with no differences( 0 );

```

### Hide rows with no differences

**Sintassi:** Hide rows with no differences(0|1)

**Descrizione:** Nasconde le righe che sono uguali quando si confrontano i dati delle tabelle.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide rows with no differences( 0 );

```

### Hide table properties with no differences

**Sintassi:** Hide table properties with no differences(0|1)

**Descrizione:** Nasconde gli elementi che sono uguali quando si confrontano i metadati delle tabelle.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide table properties with no differences( 0 );

```

### Ignore case

**Sintassi:** Ignore Case(0|1)

**Descrizione:** Ignora le maiuscole/minuscole durante il confronto dei dati

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Case( 1 );

```

### Ignore missing

**Sintassi:** Ignore Missing(0|1)

**Descrizione:** Ignora i valori mancanti durante il confronto dei dati

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Missing( 1 );

```

### Ignore whitespace

**Sintassi:** Ignore Whitespce(0|1)

**Descrizione:** Ignorare gli spazi durante il confronto dei dati

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Whitespace( 1 );

```

### Limit

**Sintassi:** obj << Limit( integer )

**Descrizione:** Imposta il limite per il numero di differenze. Quando il limite viene raggiunto, il confronto si interrompe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << limit( 100 );

```

### Link

**Sintassi:** Link({"col1", "col2", <ID(0|1)>, <No Compare(0|1)>, <Fuzzy Compare(<Ignore Case(0|1)>, <Ignore Whitespace(0|1)>, <Ignore Missing(0|1)>, <Relative Error(<amount>)>)>

**Descrizione:** Specifica le coppie di colonne da confrontare e altre opzioni di confronto.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Link( {:age, :weight}, );

```

### Relative Error

**Sintassi:** obj << Relative Error( integer )

**Descrizione:** Imposta l&apos;errore relativo per un confronto fuzzy.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Relative Error( 0.00001 );

```

### Report

**Sintassi:** obj << Report

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Row Alignment

**Sintassi:** obj << Row Alignment (Flexible by Row|By Row|Use ID Columns)

**Descrizione:** Imposta la modalità di allineamento delle righe per il confronto. 

Flessibile per riga: cerca di trovare il maggior numero possibile di righe corrispondenti nell&apos;ordine saltando blocchi di righe non corrispondenti.

Per riga: confronta ogni riga per numero di riga.

Usa colonne ID: le colonne ID specificate vengono utilizzate per creare una chiave per ogni riga. Questa chiave viene usata per far corrispondere le righe.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Row Alignment( "By Row" );

```

### Save Difference Summary

**Sintassi:** obj << Save Difference Summary( <invisible(0 | 1)> )

**Descrizione:** Salva il riepilogo delle differenze in una tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
summaryDT = (obj << save difference summary( invisible ));

```

### Save Script to Data Table

**Sintassi:** obj << Save Script to Data Table

**Descrizione:** Salva lo script Confronta tabelle di dati come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Data Table;

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Aggiunge un pulsante al journal contenente lo script Confronta tabelle di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Journal;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Aggiunge lo script Confronta tabelle di dati alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Script Window;

```

### Show Window

**Sintassi:** obj << Show Window( Show window( 0|1) )

**Descrizione:** Mostra/Nasconde la finestra dell&apos;oggetto Confronta tabelle di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << show window( 1 );

```

### Show fuzzy differences

**Sintassi:** Show Fuzzy Differences(0|1)

**Descrizione:** Evidenzia le differenze nel confronto dei dati per valori che sono uguali solo a causa di impostazioni di confronto fuzzy

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Show Fuzzy Differences( 1 );

```

### Unlink

**Sintassi:** Unlink(<column name 1>, <column name 2>)

**Descrizione:** Rimuove il confronto tra le colonne.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink( {"a", "b"} );

```

### Unlink All

**Sintassi:** Unlink All

**Descrizione:** Rimuove tutti i confronti tra le colonne.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink All;

```

