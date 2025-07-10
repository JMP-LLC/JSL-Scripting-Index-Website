# Columns Manager



### Clear All Filters

**Sintassi:** obj << Clear All Filters

**Descrizione:** Questa opzione rimuove tutti i filtri dalla tabella di riepilogo. Si osservi che il comando Imposta colonne non è un filtro, quindi chiamare questo comando non rimuove la restrizione sulle colonne visualizzate.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Text Filter( "t" );
obj << Clear All Filters;

```

### Create Data Dictionary

**Sintassi:** obj << Create Data Dictionary

**Descrizione:** Crea un journal che includa statistiche e informazioni sulle proprietà di ogni colonna.

**JMP Versione aggiunta:** 18

### Extended Statistics

**Sintassi:** obj << Extended Statistics(<list of statistics>)

**Descrizione:** Ignora l&apos;insieme di default di statistiche estese senza dover configurare l&apos;elenco nelle preferenze.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager( Include Extended Statistics( 1 ) );
obj << Extended Statistics( {"Median Absolute Deviation", "Q1"} );

```

### Force calculations for all categorical columns

**Sintassi:** obj << Force calculations for all categorical columns( state=0|1 )

**Descrizione:** Con questa opzione attivata, le statistiche vengono calcolate per tutte le colonne categoriche, non solo per le colonne alfanumeriche. Per esempio, una colonna espressione calcola il numero di valori mancanti.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Columns Manager;
obj << Force calculations for all categorical columns( 1 );

```

### Force calculations for all numeric columns

**Sintassi:** obj << Force calculations for all numeric columns( state=0|1 )

**Descrizione:** Con questa opzione attivata, le statistiche numeriche sono calcolate per tutte le colonne numeriche, se possibile. Per esempio, il numero di valori univoci è calcolato per le colonne designate come continue.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Force calculations for all numeric columns( 1 );

```

### Get Summary Table

**Sintassi:** obj << Get Summary Table

**Descrizione:** Ottiene il riquadro della tabella per la tabella di riepilogo

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
tab = obj << Get Summary table;
tab << Sort By Column( "n unique" );

```

### Hide Excluded Columns

**Sintassi:** obj << Hide Excluded Columns( state=0|1 )

**Descrizione:** Include o rimuove le colonne contrassegnate come Escluse dalla tabella di riepilogo.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Hide Excluded Columns( 0 );

```

### Hide Hidden Columns

**Sintassi:** obj << Hide Hidden Columns( state=0|1 )

**Descrizione:** Include o rimuove le colonne contrassegnate come Nascoste dalla tabella di riepilogo.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Hide Hidden Columns( 0 );

```

### Include Extended Statistics

**Sintassi:** obj << Include Extended Statistics( state=0|1 )

**Descrizione:** La serie di statistiche aggiuntive può essere configurata in Preferenze.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Include Extended Statistics( 1 );

```

### Select Rows

**Sintassi:** obj << Select Rows(<empty> | All | None | <column references>)

**Descrizione:** Questa opzione seleziona righe nella tabella di riepilogo corrispondenti alle colonne. Cancella non passando alcun argomento. Seleziona tutte o nessuna delle righe visibili passando Tutto o Nessuno. Righe specifiche selezionate passando un elenco di riferimenti di colonna.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Select Rows( :age, :height );

```

### Set Columns

**Sintassi:** obj << Set Columns(<columns>)

**Descrizione:** Di default, Gestione colonne include tutte le colonne della tabella di dati come insieme di colonne di base. Tale insieme potrebbe (o meno) essere ridotto nel report applicando la rimozione delle colonne escluse. Questa opzione consente di limitare l&apos;insieme di colonne a cui ha accesso Gestione colonne.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Columns( {:height, :weight} );

```

### Set Modeling Type Filter

**Sintassi:** obj << Set Modeling Type Filter(<empty> | <Continuous, Nominal, Ordinal, Vector, Unstructured Text, Multiple Response, None>)

**Descrizione:** Questa opzione imposta il filtro sul tipo di modellizzazione. Cancella senza passare alcun argomento o specifica uno o più nomi dei tipi di modellizzazione. Il filtro è soddisfatto da colonne che corrispondono a uno qualsiasi dei tipi di analisi.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Modeling Type Filter( "Continuous", "Ordinal" );

```

### Set Property Filter

**Sintassi:** obj << Set Property Filter(<empty> | At Least One Property | <list of property names>)

**Descrizione:** Questa opzione imposta il filtro sulle proprietà. Cancella senza passare alcun argomento o specifica uno o più nomi di proprietà. Il filtro è specificato da colonne che contengono una qualsiasi delle proprietà. Esiste anche un valore speciale che corrisponde a colonne con qualsiasi proprietà.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Columns Manager;
obj << Set Property Filter( "Matrix Column Names", "Value colors" );

```

### Set Selection Filter

**Sintassi:** obj << Set Selection Filter(<empty> | Keep | Hide)

**Descrizione:** Questa opzione imposta il filtro di selezione. Consente all&apos;utente di effettuare una selezione arbitraria di colonne e quindi di filtrare l&apos;elenco in base a quell&apos;insieme di colonne (con Mantieni o il suo inverso con Nascondi). Cancella non passando alcun argomento.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Select Rows( :age, :height );
obj << Set Selection Filter( "Keep" );

```

### Set Text Filter

**Sintassi:** obj << Set Text Filter(<empty> | <search text>)

**Descrizione:** Questa opzione imposta i dati del filtro di testo corrente, riducendo il numero di colonne mostrate nella tabella di riepilogo. Il filtro di testo viene applicato solo ai nomi delle colonne.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Text Filter( "me" );

```

### Show Attributes

**Sintassi:** obj << Show Attributes( state=0|1 )

**Descrizione:** Espande o comprime la sezione della tabella di riepilogo che contiene gli attributi della colonna.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Attributes( 0 );

```

### Show Properties

**Sintassi:** obj << Show Properties( state=0|1 )

**Descrizione:** Espande o comprime la sezione della tabella di riepilogo che contiene le proprietà della colonna.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Properties( 0 );

```

### Show Statistics

**Sintassi:** obj << Show Statistics( state=0|1 )

**Descrizione:** Espande o comprime la sezione della tabella di riepilogo che contiene le statistiche delle colonne.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Statistics( 0 );

```

