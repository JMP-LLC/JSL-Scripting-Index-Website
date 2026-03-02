# Preferences



## Messaggi degli elementi

### Add Color Theme

**Sintassi:** obj &lt;&lt; Add Color Theme( Add Color Theme({"Name", &lt;type|style&gt;, {color, ..., &lt;Missing(color)&gt;}, &lt;{position, ...}&gt;}, &lt;color blindness discernability&gt;) )

**Descrizione:** Crea un nuovo tema colori personalizzato e lo registra nel selettore temi.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Set Preference(	Add Color Theme(		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0, 0.5,		0.642857142857143, 1}}	));Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**Sintassi:** obj &lt;&lt; Add Rows default number of rows( number )

**Descrizione:** Numero iniziale di righe nella finestra Aggiungi righe

**JMP Versione aggiunta:** 18

### Add Rows recall last value

**Sintassi:** obj &lt;&lt; Add Rows recall last value( state=0|1 )

**Descrizione:** L&apos;ultimo valore immesso viene utilizzato per il numero di righe da aggiungere

**JMP Versione aggiunta:** 18

### Add files opened by scripts to the Recent Files list

**Sintassi:** obj &lt;&lt; Add files opened by scripts to the Recent Files list( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per aggiungere o meno i file aperti con la funzione JSL Open() all&apos;elenco dei file recenti.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**Sintassi:** obj &lt;&lt; Allow 16 Bit List Check Compression( state=0|1 )

**Descrizione:** Specifica se usare Verifica elenco per codificare i valori quando la colonna contiene più di 255 valori distinti. Se codificate, queste colonne non possono essere lette da JMP 14 e versioni precedenti.

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**Sintassi:** obj &lt;&lt; Allow Compress Selected Columns to create compact columns( state=0|1 )

**Descrizione:** La funzione Comprimi colonne selezionate compatta le colonne se viene utilizzato meno spazio su disco.

**JMP Versione aggiunta:** 18

### Allow Unquoted Strings in JSL

**Sintassi:** obj &lt;&lt; Allow Unquoted Strings in JSL( "No"|"Sì (con avvertimento)"|"Sì (nessun avvertimento)" )

### Allow mixed ISO format patterns

**Sintassi:** obj &lt;&lt; Allow mixed ISO format patterns( state=0|1 )

**Descrizione:** Consenti il pattern del formato data sia con settimane ISO (<ww>) e anni non ISO (<YYYY> o <YY>) sia con settimane non ISO (<WW1> o <WW2>) e anni ISO (<yyyy> o <yy>). Le settimane e gli anni ISO non sono compatibili con le settimane e gli anni non ISO. Non devono essere mescolati. Di default, JMP non consentirà la creazione di tale formato di data.

**JMP Versione aggiunta:** 18

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**Sintassi:** obj &lt;&lt; Allow short numeric data format( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per consentire il formato dati numerico breve.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Always allow publishing to JMP Public

**Sintassi:** obj &lt;&lt; Always allow publishing to JMP Public( state=0|1 )

**Descrizione:** Attiva sempre la voce di menu per la pubblicazione su JMP Public, anche se sono configurate altre connessioni JMP Live.

**JMP Versione aggiunta:** 19

### Auto Hide Menus

**Sintassi:** obj &lt;&lt; Auto Hide Menus( "Sempre"|"Mai"|"In base alle dimensioni della finestra" )

**Descrizione:** Determina se e quando JMP nasconde automaticamente il menu e le barre degli strumenti. Nota: disponibile solo in Windows.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**Sintassi:** obj &lt;&lt; Auto Run Recent JSL( state=0|1 )

**Descrizione:** Modifica il comportamento predefinito per l&apos;esecuzione automatica di script JSL appena eseguiti. Nota: disponibile solo in Windows.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**Sintassi:** obj &lt;&lt; Auto match brackets in script editor( state=0|1 )

**Descrizione:** Modifica l&apos;impostazione predefinita per il bilanciamento automatico delle parentesi nella finestra di script. Nota: disponibile solo in Windows.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**Sintassi:** obj &lt;&lt; Autosave maximum data table columns( number )

**Descrizione:** Numero massimo di colonne della tabella di dati che verranno salvate automaticamente.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**Sintassi:** obj &lt;&lt; Autosave maximum data table rows( number )

**Descrizione:** Numero massimo di righe della tabella di dati che verranno salvate automaticamente.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**Sintassi:** obj &lt;&lt; Autosave timeout( number )

**Descrizione:** L&apos;intervallo di timeout del salvataggio automatico è in minuti. Al raggiungimento dell&apos;intervallo di timeout tutti i file aperti e modificati vengono salvati. Il valore predefinito è "0", che indica che non verrà effettuato alcun salvataggio automatico.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**Sintassi:** obj &lt;&lt; Axis Title Above( state=0|1 )

**Descrizione:** Cambia la posizione dell&apos;etichetta dell&apos;asse Y nei grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**Sintassi:** obj &lt;&lt; Background Color( color )

**Descrizione:** Cambia l&apos;impostazione predefinita per il colore di sfondo in tutte le finestre. Nota: disponibile solo per Windows.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**Sintassi:** obj &lt;&lt; Bad to Good Color Theme( "name" )

**Descrizione:** Cambia l&apos;impostazione predefinita per il tema di colori continui visibile in tutti i grafici.

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Bad to Good Color Theme( "Green to Purple" ) );Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**Sintassi:** obj &lt;&lt; Box Plot Line Width( number )

**Descrizione:** Cambia la larghezza predefinita della linea per i box plot.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**Sintassi:** obj &lt;&lt; Bypass Proxy( text )

**Descrizione:** Disabilita l&apos;uso del proxy per host specifici

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**Sintassi:** obj &lt;&lt; Categorical Color Theme( "name" )

**Descrizione:** Cambia l&apos;impostazione predefinita per il tema di colori categorici visibile in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Categorical Color Theme ) );Set Preference( Categorical Color Theme( "Jet" ) );Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**Sintassi:** obj &lt;&lt; Categorical graph type( "Automatica"|"Istogramma"|"Barre"|"Heatmap"|"Mosaico"|"Carta sequenziale"|"Carta sequenziale" )

**Descrizione:** Grafico di default da visualizzare nell&apos;intestazione delle colonne per colonne nominali e ordinali.

**JMP Versione aggiunta:** 18

### Classic Data Table Selection

**Sintassi:** obj &lt;&lt; Classic Data Table Selection( state=0|1 )

**Descrizione:** Abilita il comportamento classico di selezione con clic nella tabella di dati. In questa modalità, la selezione di una colonna non ha effetto sulla selezione di righe e la selezione di una riga non ha effetto sulla selezione di colonne.

**JMP Versione aggiunta:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**Sintassi:** obj &lt;&lt; Color Mode( "Usa impostazioni di sistema"|"Chiaro"|"Scuro"|"Alto contrasto" )

**Descrizione:** Stabilisce se JMP utilizza un tema specifico per la colorazione delle finestre o se rispetta le impostazioni del sistema operativo.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**Sintassi:** obj &lt;&lt; Columns Manager

**JMP Versione aggiunta:** 18

### Conditional formatting rules

**Sintassi:** obj &lt;&lt; Conditional formatting rules

**Descrizione:** Crea una regola condizionale personalizzata che viene mostrata o meno in base all&apos;impostazione della preferenza Mostra formattazione condizionale.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences(	Conditional Formatting Rules(		RuleSet(			RuleName( "My Special Rule" ),			GreaterThan(				Value( 0 ),				Inclusive( 0 ),				Format(					Text Color( "Medium Dark Red" ),					Back Color( "Light Yellow" ),					Annotation( 1 ),					FontStyle( Bold )				)			)		)	));

```

### Continuous Color Theme

**Sintassi:** obj &lt;&lt; Continuous Color Theme( "name" )

**Descrizione:** Cambia l&apos;impostazione predefinita per il tema di colori continui visibile in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Continuous Color Theme( "Green to Purple" ) );Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**Sintassi:** obj &lt;&lt; Continuous graph type( "Automatica"|"Istogramma"|"Barre"|"Heatmap"|"Mosaico"|"Carta sequenziale"|"Carta sequenziale" )

**Descrizione:** Grafico di default da visualizzare nell&apos;intestazione delle colonne per colonne continue.

**JMP Versione aggiunta:** 18

### Custom Locale Settings

**Sintassi:** obj &lt;&lt; Custom Locale Settings

**Descrizione:** Ignora le impostazioni locali come il separatore decimale e il separatore delle migliaia

**JMP Versione aggiunta:** 16

**Esempio 1**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );Print( Format( 1.25, "Best" ) );Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );Print( Format( 1.25, "Best" ) );Preferences( Custom Locale Settings( Decimal Separator() ) );

```

**Esempio 2**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. // Clear all locale overrides...Preferences( Custom Locale Settings( Reset to Defaults ) );

```

**Esempio 3**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**Sintassi:** obj &lt;&lt; Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**Sintassi:** obj &lt;&lt; Data Filter Check Box Display( state=0|1 )

**Descrizione:** La visualizzazione predefinita della colonna filtro categorica è la visualizzazione della casella di controllo.

### Data Filter Conditional

**Sintassi:** obj &lt;&lt; Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**Sintassi:** obj &lt;&lt; Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**Sintassi:** obj &lt;&lt; Data Filter Histograms and Bars( state=0|1 )

**Descrizione:** Mostra istogrammi e barre per colonne filtro, ove disponibile

**JMP Versione aggiunta:** 15

### Data Filter Include Check

**Sintassi:** obj &lt;&lt; Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**Sintassi:** obj &lt;&lt; Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**Sintassi:** obj &lt;&lt; Data Filter Show Check( state=0|1 )

### Data Table Actions

**Sintassi:** obj &lt;&lt; Data Table Actions( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**Sintassi:** obj &lt;&lt; Data Table Title on Output( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare i nomi delle tabelle di dati all&apos;inizio dell&apos;output del report.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**Sintassi:** obj &lt;&lt; Date Title on Output( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare la data nel titolo dell&apos;output.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**Sintassi:** obj &lt;&lt; Default Field Width( number )

**Descrizione:** Modifica la larghezza del campo predefinito utilizzato per le nuove colonne numeriche.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**Sintassi:** obj &lt;&lt; Default Project Show Bookmarks( state=0|1 )

**Descrizione:** Mostra il riquadro Progetto nei nuovi progetti

**JMP Versione aggiunta:** 16

### Default Project Show Contents

**Sintassi:** obj &lt;&lt; Default Project Show Contents( state=0|1 )

**Descrizione:** Mostra il riquadro Sommario nei nuovi progetti

**JMP Versione aggiunta:** 16

### Default Project Show Log

**Sintassi:** obj &lt;&lt; Default Project Show Log( state=0|1 )

**Descrizione:** Mostra il riquadro Log nei nuovi progetti

**JMP Versione aggiunta:** 16

### Default Project Show Recent Files

**Sintassi:** obj &lt;&lt; Default Project Show Recent Files( state=0|1 )

**Descrizione:** Mostra il riquadro File recenti nei nuovi progetti

**JMP Versione aggiunta:** 16

### Default Project Show Workspace

**Sintassi:** obj &lt;&lt; Default Project Show Workspace( state=0|1 )

**Descrizione:** Mostra il riquadro Workspace nei nuovi progetti

**JMP Versione aggiunta:** 16

### Display JSL SAS results as HTML

**Sintassi:** obj &lt;&lt; Display JSL SAS results as HTML( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Display JSL SAS results as HTML"n( 1 ) );

```

### Display indexes in English

**Sintassi:** obj &lt;&lt; Display indexes in English( state=0|1 )

**Descrizione:** Visualizza l&apos;Indice di scripting degli oggetti, l&apos;Indice delle funzioni JSL e l&apos;Indice dei riquadri di visualizzazione in inglese.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**Sintassi:** obj &lt;&lt; Double Click Opens Column Info( state=0|1 )

**Descrizione:** Facendo doppio clic sull&apos;intestazione di una colonna si apre la finestra di dialogo delle informazioni sulla colonna anziché modificare il nome della colonna.

**JMP Versione aggiunta:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**Sintassi:** obj &lt;&lt; Empty Project at Startup( "Sempre"|"Se non è aperto alcun altro progetto"|"Mai" )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**Sintassi:** obj &lt;&lt; Emulate Zoom Mode( state=0|1 )

**Descrizione:** Determina se JMP include l&apos;elenco delle finestre in finestre ingrandite

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**Sintassi:** obj &lt;&lt; Enable Advanced Linear Algebra Routines( state=0|1 )

**Descrizione:** Cambia le routine di calcolo per l&apos;algebra lineare che sono utilizzate in più piattaforme e funzioni JSL. Se selezionata, questa preferenza abilita le routine avanzate di algebra lineare che sono basate sulle librerie BLAS e LAPACK. La documentazione di JMP contiene ulteriori informazioni sulle piattaforme e sulle funzioni JSL interessate da questa preferenza.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Telemetry

**Sintassi:** obj &lt;&lt; Enable Telemetry( state=0|1 )

### Enable direct input from IME

**Sintassi:** obj &lt;&lt; Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**Sintassi:** obj &lt;&lt; End Menu Item Marking After Deadline( state=0|1 )

**Descrizione:** Le voci di menu non saranno più contrassegnate allo scadere del limite di tempo

**JMP Versione aggiunta:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**Sintassi:** obj &lt;&lt; Enhanced Log Alternate Table Rows( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**Sintassi:** obj &lt;&lt; Enhanced Log Color By Window( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**Sintassi:** obj &lt;&lt; Enhanced Log Color By Window Color Theme( "name" )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Enhanced Log Color By Window Color Theme ) );Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**Sintassi:** obj &lt;&lt; Enhanced Log Filter Action( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**Sintassi:** obj &lt;&lt; Enhanced Log Filter Error( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**Sintassi:** obj &lt;&lt; Enhanced Log Filter Log( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**Sintassi:** obj &lt;&lt; Enhanced Log Filter Result( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**Sintassi:** obj &lt;&lt; Enhanced Log Filter Script( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**Sintassi:** obj &lt;&lt; Enhanced Log Filter Warn( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**Sintassi:** obj &lt;&lt; Enhanced Log Origin Column( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**Sintassi:** obj &lt;&lt; Enhanced Log Result Column( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**Sintassi:** obj &lt;&lt; Enhanced Log Shade Table Cells( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**Sintassi:** obj &lt;&lt; Enhanced Log Shade Table Headings( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**Sintassi:** obj &lt;&lt; Enhanced Log Table Column Borders( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**Sintassi:** obj &lt;&lt; Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**Sintassi:** obj &lt;&lt; Enhanced Log Table Row Borders( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**Sintassi:** obj &lt;&lt; Enhanced Log Timestamp Column( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**Sintassi:** obj &lt;&lt; Enhanced Log Underline Table Headings( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**Sintassi:** obj &lt;&lt; Enter Key moves down( state=0|1 )

**Descrizione:** Modifica l&apos;impostazione predefinita per il movimento del tasto Invio.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**Sintassi:** obj &lt;&lt; Evaluate OnOpen Scripts( "Richiedi"|"Mai"|"Sempre" )

**Descrizione:** Imposta su "Mai" per impedire sempre l&apos;esecuzione degli script all&apos;apertura. Gli script provenienti da fonti sconosciute non devono essere eseguiti.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**Sintassi:** obj &lt;&lt; Excel Open Method( "Apri tutti i fogli"|"Seleziona fogli di lavoro individuali"|"Usa procedura guidata Excel" )

### Fast Marker Threshold

**Sintassi:** obj &lt;&lt; Fast Marker Threshold( number )

**Descrizione:** Cambia l&apos;impostazione predefinita per aggiornare gli indicatori nei grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**Sintassi:** obj &lt;&lt; Fill Hollow Markers( state=0|1 )

**Descrizione:** Gli indicatori vuoti saranno riempiti con il colore di sfondo del grafico

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**Sintassi:** obj &lt;&lt; Fill Selection Color( color )

**Descrizione:** Colore delle selezioni riempite quando la modalità di selezione del riempimento è impostata su "Selezionato lo stesso colore".

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**Sintassi:** obj &lt;&lt; Fill Selection Fade( number )

**Descrizione:** Cambia l&apos;impostazione predefinita per la quantità di dissolvenza applicata a riempimenti non selezionati.

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**Sintassi:** obj &lt;&lt; Fill Selection Mode( "Selezionati con pattern"|"Selezionati più scuri"|"Selezionato riquadrato"|"Selezionato lo stesso colore"|"Non selezionato ombreggiato" )

**Descrizione:** Cambia il modo in cui viene indicata la selezione per le aree riempite. L&apos;impostazione predefinita è con pattern.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**Sintassi:** obj &lt;&lt; Formula Evaluation( "Quando inattivo"|"Immediatamente" )

**Descrizione:** Determina se la valutazione della formula è effettuata durante il tempo di inattività o se è eseguita immediatamente in primo piano

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**Sintassi:** obj &lt;&lt; Frame Border( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita di visualizzazione del bordo dei frame dei lati non assi di tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**Sintassi:** obj &lt;&lt; Frame Color( color )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare il bordo dei frame in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**Sintassi:** obj &lt;&lt; Get

**Descrizione:** Restituisce lo script per impostare una preferenza specificata.

```jsl

a = Preferences[1] << Get( Show the Tip of the Day at startup );Show( a );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Restituisce lo script per impostare le preferenze.

```jsl

a = Preferences[1] << Get Script;Show( a );

```

### Graph Background Color

**Sintassi:** obj &lt;&lt; Graph Background Color( color )

**Descrizione:** Cambia l&apos;impostazione predefinita per il colore di sfondo in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**Sintassi:** obj &lt;&lt; Graph Border( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare il bordo dei grafici in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**Sintassi:** obj &lt;&lt; Graph Height( number )

**Descrizione:** Cambia l&apos;impostazione predefinita per l&apos;altezza di tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**Sintassi:** obj &lt;&lt; Graph Marker( marker )

**Descrizione:** Cambia l&apos;impostazione predefinita per la forma degli indicatori visibile in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**Sintassi:** obj &lt;&lt; Graph Marker Theme( "Standard"|"Cavo"|"Continuo"|"Appaiato"|"Classico"|"Alfanumerico" )

**Descrizione:** Cambia l&apos;impostazione predefinita per il tema degli indicatori visibile in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**Sintassi:** obj &lt;&lt; Graph Marker Unselected Fade( number )

**Descrizione:** Cambia l&apos;impostazione predefinita per l&apos;ombreggiatura degli indicatori non selezionati.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**Sintassi:** obj &lt;&lt; Graph Marker size( "Punto"|"Piccolo"|"Medio"|"Grande"|"XL"|"XXL"|"XXXL" )

**Descrizione:** Cambia l&apos;impostazione predefinita per la dimensione degli indicatori visibile in tutti i grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**Sintassi:** obj &lt;&lt; HDF5PathDelimiter( text )

**JMP Versione aggiunta:** 17

### Header summary heat map color theme

**Sintassi:** obj &lt;&lt; Header summary heat map color theme( "name" )

**Descrizione:** Cambia l&apos;impostazione predefinita per il tema di colori continui visibile in tutti i grafici.

**JMP Versione aggiunta:** 18

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Show( Get Preference( Header summary heat map color theme ) );Set Preference( Header summary heat map color theme( "Green to Purple" ) );Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**Sintassi:** obj &lt;&lt; Hide &apos;Find and Replace&apos; window( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per mantenere aperta la finestra &apos;Trova e sostituisci&apos; al termine dell&apos;operazione.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**Sintassi:** obj &lt;&lt; Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**Sintassi:** obj &lt;&lt; Hide Overlapping Labels( state=0|1 )

**Descrizione:** Nasconde le etichette sovrapposte di un grafico.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**Sintassi:** obj &lt;&lt; Histogram Color( color )

**Descrizione:** Cambia il colore predefinito per gli istogrammi.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**Sintassi:** obj &lt;&lt; Histogram Line Color( color )

**Descrizione:** Cambia il colore predefinito della linea per gli istogrammi.

**JMP Versione aggiunta:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.  Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**Sintassi:** obj &lt;&lt; Hover Help( state=0|1 )

**Descrizione:** Guida descrizione comandi rispondente ai movimenti circolari del mouse

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**Sintassi:** obj &lt;&lt; Image Format for PowerPoint( "Formato sistema operativo predefinito"|"PNG"|"JPEG" )

### Include Responses Not in Data

**Sintassi:** obj &lt;&lt; Include Responses Not in Data( state=0|1 )

**Descrizione:** Mostra le etichette delle risposte senza occorrenze nella tabella di dati.

### Initial JMP Window

**Sintassi:** obj &lt;&lt; Initial JMP Window( "Finestra Home"|"Avvio di JMP"|"Elenco delle finestre" )

**Descrizione:** Determina la finestra di JMP che viene creata all&apos;avvio di JMP

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**Sintassi:** obj &lt;&lt; Initial Log Window( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare la finestra iniziale Log.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**Sintassi:** obj &lt;&lt; Initial Splash Window( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare la finestra iniziale di apertura.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**Sintassi:** obj &lt;&lt; Inside Ticks( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare le tacche di riferimento degli assi all&apos;interno dei frame dei grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**Sintassi:** obj &lt;&lt; Interactive HTML Color( "Sfondo chiaro"|"Sfondo scuro"|"Sfondo grigio" )

**Descrizione:** Modifica l&apos;impostazione predefinita per il tema colori dell&apos;HTML interattivo.

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**Sintassi:** obj &lt;&lt; Internet Open Timeout( number )

**Descrizione:** L&apos;apertura Internet attenderà questo numero di secondi prima di interrompersi.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**Sintassi:** obj &lt;&lt; JMP Live Timeout( number )

**Descrizione:** Imposta il valore di timeout per la pubblicazione su JMP Live. L&apos;impostazione predefinita è 180 secondi.

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**Sintassi:** obj &lt;&lt; JMP Theme( "Tradizionale"|"Confortevole"|"JMP Live"|"JMP Clinical" )

**Descrizione:** Cambia il tema per tutto JMP.

**JMP Versione aggiunta:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );restore theme = Get Preference( JMP Theme );Set Preference( JMP Theme( "Traditional" ) );Wait( 2 );Set Preference( JMP Theme( "Comfortable" ) );Wait( 2 );Set Preference( JMP Theme( "JMP Live" ) );Wait( 2 );restore theme;

```

### JSL save column groups with group name

**Sintassi:** obj &lt;&lt; JSL save column groups with group name( state=0|1 )

**Descrizione:** Quando si salva lo script con l&apos;elenco delle colonne, usare la sintassi &apos;gruppo di colonne&apos; se l&apos;elenco delle colonne è un gruppo di colonne

**JMP Versione aggiunta:** 16

### JSS Dir

**Sintassi:** obj &lt;&lt; JSS Dir( text )

**Descrizione:** Changes the JSS directory for development use.

**JMP Versione aggiunta:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**Sintassi:** obj &lt;&lt; Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**Sintassi:** obj &lt;&lt; Language Switch Warning( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per avvertire quando viene rilevato un cambiamento di lingua. Nota: disponibile solo per Windows.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**Sintassi:** obj &lt;&lt; Laser pointer( "Disattivato"|"Viola"|"Blu"|"Verde"|"Giallo"|"Arancione"|"Rosso" )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare un puntatore laser che evidenzi parti di un report.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**Sintassi:** obj &lt;&lt; Line Width( number )

**Descrizione:** Cambia la larghezza predefinita della linea per il contenuto del grafico.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**Sintassi:** obj &lt;&lt; Log Mode( "Migliorato"|"Testo" )

**Descrizione:** Cambia l&apos;impostazione predefinita per la visualizzazione dei log. Include i log principale e di progetto.

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**Sintassi:** obj &lt;&lt; Log Window Height( number )

**Descrizione:** Modifica l&apos;impostazione predefinita della dimensione della finestra di log. Nota: disponibile solo in Windows.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**Sintassi:** obj &lt;&lt; Major Grid Line Color( color )

**Descrizione:** Cambia il colore predefinito delle linee principali della griglia nei grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**Sintassi:** obj &lt;&lt; Major Grid Lines( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per la visualizzazione delle linee principali della griglia nei grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**Sintassi:** obj &lt;&lt; Mark Menu Items Added Since( "Nessuno"|"Versione corrente"|"18"|"17"|"16"|"15"|"14" )

**Descrizione:** Contrassegna le voci di menu più recenti di una particolare versione di JMP.

**JMP Versione aggiunta:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**Sintassi:** obj &lt;&lt; Marker Label Color( color )

**Descrizione:** Colore delle etichette degli indicatori se "Stile colore etichetta dell&apos;indicatore" è impostato su "Fisso"

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**Sintassi:** obj &lt;&lt; Marker Label Color Style( "Colore dell&apos;indicatore"|"Colore dell&apos;indicatore ombreggiato"|"Colore fisso" )

**Descrizione:** Cambia il colore predefinito per le etichette degli indicatori

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**Sintassi:** obj &lt;&lt; Marker Selection Mode( "Non selezionato ombreggiato"|"Selezionato più grande"|"Selezionato con alone"|"Selezionato riquadrato"|"Selezionato lo stesso colore" )

**Descrizione:** Cambia l&apos;impostazione predefinita per la modalità di selezione degli indicatori. L&apos;impostazione predefinita è Non selezionato ombreggiato.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**Sintassi:** obj &lt;&lt; Maximum Auto Size Column List Width( number )

**JMP Versione aggiunta:** 18

### Maximum JMP Call Depth

**Sintassi:** obj &lt;&lt; Maximum JMP Call Depth( number )

**Descrizione:** Cambia l&apos;impostazione predefinita per la profondità massima della chiamata di JMP.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**Sintassi:** obj &lt;&lt; Maximum Parse Depth( number )

**Descrizione:** Cambia l&apos;impostazione predefinita per la profondità massima di analisi. Il valore predefinito è 512.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**Sintassi:** obj &lt;&lt; Maximum Symbol Evaluation Recursion Depth( number )

**Descrizione:** Cambia l&apos;impostazione predefinita per la profondità massima di ricorsione della valutazione del simbolo. Il valore predefinito è 25.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**Sintassi:** obj &lt;&lt; Minor Grid Line Color( color )

**Descrizione:** Cambia il colore predefinito delle linee secondarie della griglia nei grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**Sintassi:** obj &lt;&lt; Minor Grid Lines( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per la visualizzazione delle linee secondarie della griglia nei grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**Sintassi:** obj &lt;&lt; New Project Template( text )

**Descrizione:** File da utilizzare per progetti nuovi vuoti.

**JMP Versione aggiunta:** 16

### New character columns default to compact

**Sintassi:** obj &lt;&lt; New character columns default to compact( state=0|1 )

**Descrizione:** Le nuove colonne alfanumeriche o le colonne passate al tipo di dati alfanumerico diventano automaticamente colonne compatte

**JMP Versione aggiunta:** 18

### OAuth2 Authentication Browser

**Sintassi:** obj &lt;&lt; OAuth2 Authentication Browser( text=Default )

**Descrizione:** Accedere ai server OAuth2 con il tipo di browser specificato. I valori validi sono "Predefinito", "Incorporato", "Esterno". "Default", per impostazione predefinita.

**JMP Versione aggiunta:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set(	Sign in to OAuth2 servers with the specified browser type( "Embedded" ));

```

### ODBC Allow Table Replace

**Sintassi:** Preferences[1] &lt;&lt; Name("ODBC Allow Table Replace") ( state = 0|1 )

**Descrizione:** Selezionare questa opzione per consentire la sostituzione della tabella ODBC. Questa opzione è selezionata di default. La sostituzione di una tabella ODBC elimina la tabella esistente nel database e la sostituisce con una nuova tabella.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.     Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**Sintassi:** obj &lt;&lt; ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**Sintassi:** obj &lt;&lt; Open Text File Charset( "Migliore ipotesi"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**Descrizione:** Specifica la codifica da utilizzare se non viene rilevato alcun contrassegno di ordinamento byte Unicode; l&apos;impostazione predefinita prevede di ipotizzare la codifica in base al contenuto del file.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**Sintassi:** obj &lt;&lt; Open character columns as compact columns( state=0|1 )

**Descrizione:** Apre automaticamente le colonne alfanumeriche come colonne compatte quando JMP lo ritiene vantaggioso

**JMP Versione aggiunta:** 18

### Open files from outside projects in

**Sintassi:** obj &lt;&lt; Open files from outside projects in( "Nessun progetto"|"Progetto aperto o Nessun progetto"|"Progetto aperto o Nuovo progetto"|"Nuovo progetto" )

**JMP Versione aggiunta:** 16

### Outline Close Orientation

**Sintassi:** obj &lt;&lt; Outline Close Orientation( "Automatica"|"Orizzontale"|"Verticale" )

**Descrizione:** Opzione per la compressione verticale delle caselle di riquadro per salvare spazio orizzontalmente

### Parallel Data Table Column Decompression

**Sintassi:** obj &lt;&lt; Parallel Data Table Column Decompression( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per la decompressione delle colonne in parallelo. Il valore predefinito dell&apos;impostazione è abilitato. Disabilitare l&apos;opzione potrebbe permettere il caricamento di alcune tabelle di grandi dimensioni.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**Sintassi:** obj &lt;&lt; Partial Selection Indicator( "Nessuno"|"Barra"|"Torta"|"Waffle" )

**Descrizione:** Come viene indicata una selezione parziale di un gruppo.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**Sintassi:** obj &lt;&lt; Platform Launch Actions( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**Sintassi:** Preferences[1] &lt;&lt; Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.      Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**Sintassi:** obj &lt;&lt; Preserve SAS formats when exporting to SAS( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione di default per mantenere i formati SAS esportando in SAS.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**Sintassi:** obj &lt;&lt; Preserve SAS variable names when exporting to SAS( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione di default per mantenere i nomi delle variabili SAS esportando in SAS.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**Sintassi:** obj &lt;&lt; Print Data Grid as is( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per stampare la griglia dei dati come compare sullo schermo.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**Sintassi:** obj &lt;&lt; Prompt to save when closing summary tables( state=0|1 )

**Descrizione:** Effettua o meno la richiesta alla chiusura della tabella di riepilogo.

**JMP Versione aggiunta:** 14

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**Sintassi:** obj &lt;&lt; Proxy Port( number )

**Descrizione:** Usa la porta proxy specificata.

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**Sintassi:** obj &lt;&lt; Proxy Server( text )

**Descrizione:** Usa il proxy specificato.

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.url = "http:://myproxy.com:80";Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**Sintassi:** obj &lt;&lt; Proxy User( text )

**Descrizione:** Il nome utente e la password da usare per l&apos;autenticazione del proxy. [nome utente]:[password]

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**Sintassi:** obj &lt;&lt; Reopen the initial JMP window on last window close( state=0|1 )

**Descrizione:** Determina se viene riaperta automaticamente la finestra iniziale di JMP quando si chiude l&apos;ultima finestra di JMP

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**Sintassi:** obj &lt;&lt; Report Invalid Display Box Messages( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita di output degli errori nei messaggi non validi dei riquadri di visualizzazione.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**Sintassi:** obj &lt;&lt; Report JSL warnings and errors interactively( state=0|1 )

**Descrizione:** Avvertimenti ed errori di esecuzione di JSL saranno registrati e mostrati interattivamente. Se si disabilita questa opzione, gli avvertimenti e gli errori saranno solo registrati

**JMP Versione aggiunta:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**Sintassi:** obj &lt;&lt; Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**Sintassi:** obj &lt;&lt; Report Snapshot On Close( state=0|1 )

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**Sintassi:** obj &lt;&lt; Row Editor Always Show All Columns( state=0|1 )

**Descrizione:** Se selezionato, l&apos;editor delle righe mostrerà tutte le colonne della tabella di dati, che ci siano o meno colonne selezionate.

**JMP Versione aggiunta:** 16

### Ruler Tool Units

**Sintassi:** obj &lt;&lt; Ruler Tool Units( "Chilometri"|"Miglia" )

**Descrizione:** Cambia le unità di misura mostrate dal righello degli strumenti grafici quando viene utilizzato su una mappa nel Costruttore di grafici.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**Sintassi:** obj &lt;&lt; SAS Automatically Generate ODS results( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**Sintassi:** obj &lt;&lt; SAS Connect to CAS with SAS Viya( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.           Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**Sintassi:** obj &lt;&lt; SAS Data Import Close Warning( state=0|1 )

**JMP Versione aggiunta:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**Sintassi:** obj &lt;&lt; SAS Data Import Uses Labels( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**Sintassi:** obj &lt;&lt; SAS Import generated datasets into JMP( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**Sintassi:** obj &lt;&lt; SAS ODS Results Format( "HTML"|"TESTO" )

### SAS ODS Style

**Sintassi:** obj &lt;&lt; SAS ODS Style( text=Statistical )

**Descrizione:** "Statistical", per impostazione predefinita.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS ODS Style"n( "HTMLBlue" ) );

```

### SAS Organize results in JMP project

**Sintassi:** obj &lt;&lt; SAS Organize results in JMP project( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**Sintassi:** obj &lt;&lt; SAS Transport Use UTF8( state=0|1 )

**Descrizione:** Modificare la codifica dei caratteri predefinita per i file di trasporto in UTF-8

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**Sintassi:** obj &lt;&lt; SPSSMultiResponseDelimiter( text=| )

**Descrizione:** "|", per impostazione predefinita.

**JMP Versione aggiunta:** 16

### Save Data Table Columns GZ Compressed

**Sintassi:** obj &lt;&lt; Save Data Table Columns GZ Compressed( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per salvare le tabelle di dati in un formato GZip compresso.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**Sintassi:** obj &lt;&lt; Save Image DPI( number )

**Descrizione:** Specifica un&apos;impostazione DPI da utilizzare quando si salvano immagini, in caso contrario viene utilizzato un valore predefinito.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.             Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**Sintassi:** obj &lt;&lt; Save Journals GZ Compressed( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per salvare i journal in un formato GZip compresso.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**Sintassi:** obj &lt;&lt; Save Scripts in English( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per salvare gli script in inglese anziché nella lingua visualizzata.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**Sintassi:** obj &lt;&lt; Save Text Files as Unicode( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per salvare i file di testo in formato Unicode.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**Sintassi:** obj &lt;&lt; Save table with report( "Incorpora"|"Separa"|"Richiedi" )

**Descrizione:** Modifica il modo in cui vengono memorizzati i dati insieme ai report salvati

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**Sintassi:** obj &lt;&lt; Save the session when exiting( "Sempre"|"Mai"|"Richiedi" )

**Descrizione:** Cambia l&apos;impostazione predefinita per salvare la sessione all&apos;uscita da JMP.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**Sintassi:** obj &lt;&lt; Selected Marker Color( color )

**Descrizione:** Modifica il  colore degli indicatori selezionati quando si utilizza Selezionato lo stesso colore nella modalità di selezione degli indicatori

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**Sintassi:** obj &lt;&lt; Semantic formatting

**Descrizione:** Crea un formato semantico che viene usato quando i suoi criteri corrispondono al contesto del report corrente.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Preferences(	Semantic formatting(		Add Semantic Format(			Format Name( "My Format 1" ),			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),			Criteria(				Object Name( "*mean*" ),				Outline Path( "** :: Means for Oneway Anova" )			)		),		Add Semantic Format(			Format Name( "My Format 2" ),			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),			Criteria(				Object Name( "*mean*" ),				Outline Path( "** :: Means for Oneway Anova" ),				Row Name( "M" )			)		)	));

```

**Esempio 2**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**Sintassi:** obj &lt;&lt; Sequential Color Theme( "name" )

**Descrizione:** Cambia l&apos;impostazione predefinita per il tema di colori continui visibile in tutti i grafici.

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Sequential Color Theme( "Green to Purple" ) );Show( Get Preference( Sequential Color Theme ) );

```

### Set

**Sintassi:** obj &lt;&lt; Set

**Descrizione:** Imposta una preferenza specificata.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Set ODBC Primary Key as Link ID

**Sintassi:** Preferences[1] &lt;&lt; Name("Set ODBC Primary Key as Link ID") ( state = 0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.      Preferences[1] << Name( "Set ODBC Primary Key as Link ID" )(1);

```

### Shade Alternate Table Rows

**Sintassi:** obj &lt;&lt; Shade Alternate Table Rows( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**Sintassi:** obj &lt;&lt; Shade Table Cells( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**Sintassi:** obj &lt;&lt; Shade Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**Sintassi:** obj &lt;&lt; Shape Boundary Color( color )

**Descrizione:** Cambia l&apos;impostazione predefinita per il colore dei contorni delle forme disegnate in tutti i grafici, come mappe di sfondo.

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**Sintassi:** obj &lt;&lt; Show Alternate Column Name( state=0|1 )

**Descrizione:** Modifica impostazione predefinita per la visualizzazione di nomi alternati nella finestra di dialogo e nel riquadro colonne tabella di dati

### Show Personalization at startup

**Sintassi:** obj &lt;&lt; Show Personalization at startup( state=0|1 )

**Descrizione:** La finestra Personalizzazione sarà visualizzata al successivo avvio di JMP.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show SAS Log

**Sintassi:** obj &lt;&lt; Show SAS Log( "Mai"|"Sempre"|"In caso di errore" )

### Show Search box on Columns Panel

**Sintassi:** obj &lt;&lt; Show Search box on Columns Panel( state=0|1 )

**Descrizione:** Mostra la casella di modifica della ricerca nel riquadro delle colonne per impostazione predefinita

**JMP Versione aggiunta:** 16

### Show Status Bar

**Sintassi:** obj &lt;&lt; Show Status Bar( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare la barra di stato.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**Sintassi:** obj &lt;&lt; Show conditional formatting( "Sempre"|"Solo schermo"|"Mai" )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare la formattazione condizionale nei report.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**Sintassi:** obj &lt;&lt; Show menu tips( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per visualizzare le descrizioni dei menu che compaiono al passaggio del mouse su un triangolo rosso.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**Sintassi:** obj &lt;&lt; Show missing data bars or bins in summary graphs( state=0|1 )

**Descrizione:** Se le barre dei dati mancanti o i bin vengono inizialmente visualizzati in grafici di riepilogo. Qualunque sia il valore qui presente, può essere cambiato su singoli grafici di riepilogo facendo clic con il tasto destro del mouse sul grafico di riepilogo e selezionando "Barra valori mancanti" o "Bin valori mancanti".

**JMP Versione aggiunta:** 16

### Show semantic formatting

**Sintassi:** obj &lt;&lt; Show semantic formatting( "Sempre"|"No Row Matching"|"Mai" )

**Descrizione:** Cambia l&apos;impostazione predefinita per l&apos;uso della formattazione semantica nei report. I valori possibili sono: "Sempre", "Nessuna corrispondenza di riga" e "Mai". Usare "Nessuna corrispondenza di riga" per disabilitare i formati semantici specifici della riga.

**JMP Versione aggiunta:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**Sintassi:** obj &lt;&lt; Show summary graphs below column names( state=0|1 )

**Descrizione:** Se i grafici di riepilogo sono inizialmente visualizzati nella tabella di dati tra i nomi delle colonne e le celle di dati, se il numero di righe è al di sotto di una soglia di performance (3 milioni di righe). Qualunque sia lo stato iniziale, la visualizzazione può essere attivata/disattivata per una singola tabella di dati con l&apos;icona accanto ai nomi delle colonne.

**JMP Versione aggiunta:** 15

### Show the Quick Start at startup

**Sintassi:** obj &lt;&lt; Show the Quick Start at startup( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione di default per visualizzare la finestra Avvio rapido.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**Sintassi:** obj &lt;&lt; Summary Graph Continuous Color( color )

**Descrizione:** Imposta il colore per i dati continui nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**Sintassi:** obj &lt;&lt; Summary Graph Continuous Highlight Color( color )

**Descrizione:** Imposta il colore di evidenziazione per i dati continui nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**Sintassi:** obj &lt;&lt; Summary Graph Continuous Missing Color( color )

**Descrizione:** Imposta il colore per i dati continui mancanti nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**Sintassi:** obj &lt;&lt; Summary Graph Continuous Missing Highlight Color( color )

**Descrizione:** Imposta il colore di evidenziazione per i dati continui mancanti nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Color

**Sintassi:** obj &lt;&lt; Summary Graph Name Ordered Color( color )

**Descrizione:** Imposta il colore per i dati ordinati per nome nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**Sintassi:** obj &lt;&lt; Summary Graph Name Ordered Highlight Color( color )

**Descrizione:** Imposta il colore di evidenziazione per i dati ordinati per nome nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Color

**Sintassi:** obj &lt;&lt; Summary Graph Other Color( color )

**Descrizione:** Imposta il colore per l&apos;altra barra nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**Sintassi:** obj &lt;&lt; Summary Graph Other Highlight Color( color )

**Descrizione:** Imposta il colore di evidenziazione per l&apos;altra barra nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**Sintassi:** obj &lt;&lt; Summary Graph Run Chart Color( color )

**Descrizione:** Imposta il colore per l&apos;altra barra nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 18

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**Sintassi:** obj &lt;&lt; Summary Graph Size Ordered Color( color )

**Descrizione:** Imposta il colore per i dati ordinati per dimensione nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**Sintassi:** obj &lt;&lt; Summary Graph Size Ordered Highlight Color( color )

**Descrizione:** Imposta il colore di evidenziazione per i dati ordinati per dimensione nei grafici di riepilogo e nei filtri sui dati

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Suppress Formula Eval on Open

**Sintassi:** obj &lt;&lt; Suppress Formula Eval on Open( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per eliminare le valutazioni delle formule all&apos;apertura di una tabella di dati.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**Sintassi:** obj &lt;&lt; Table Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**Sintassi:** obj &lt;&lt; Table Column Group Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**Sintassi:** obj &lt;&lt; Table Heading Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**Sintassi:** obj &lt;&lt; Table Row Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**Sintassi:** obj &lt;&lt; Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**Descrizione:** Determina quali finestre di JMP sono visualizzate nella barra delle applicazioni di Windows

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**Sintassi:** obj &lt;&lt; Transparent background for report PNG images( state=0|1 )

**Descrizione:** Quando i report o parti di essi vengono salvati come immagini PNG lo sfondo sarà trasparente.

**JMP Versione aggiunta:** 14

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**Sintassi:** obj &lt;&lt; Underline Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**Sintassi:** obj &lt;&lt; Use Excel Labels as Headings( "Utilizza migliore ipotesi"|"Sempre"|"Mai" )

**Descrizione:** Cambia l&apos;impostazione predefinita per importare etichette Excel come nomi di colonne JMP all&apos;apertura dei file Excel.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**Sintassi:** obj &lt;&lt; Use Greek letters( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per attivare le lettere greche nei report JMP.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**Sintassi:** obj &lt;&lt; Use JMP Locale Settings( state=0|1 )

**Descrizione:** Modifica il comportamento predefinito per la visualizzazione di formati numerici, di data e di valuta. Nota: disponibile solo in Windows.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**Sintassi:** obj &lt;&lt; Use Numerical Ordering( state=0|1 )

**Descrizione:** Configurare l&apos;ordinamento per le nuove colonne in modo che il testo contenente numeri sia ordinato numericamente. Saranno interessate anche le colonne convertite nel tipo di carattere se non contengono già una proprietà Ordinamento dei valori.

**JMP Versione aggiunta:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**Sintassi:** obj &lt;&lt; Use Project Log( "Sempre"|"Se Aperto"|"Mai" )

**Descrizione:** Se inviare messaggi di log generati da script e finestre di un progetto alla finestra di log del progetto (invece della finestra di log principale)

**JMP Versione aggiunta:** 16

### Use SPSS labels for column names during import

**Sintassi:** obj &lt;&lt; Use SPSS labels for column names during import( state=0|1 )

**Descrizione:** Modifica l&apos;impostazione predefinita per importare etichette SPSS come nomi di colonne JMP all&apos;apertura di file SPSS.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**Sintassi:** obj &lt;&lt; Use Thousands Separator( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per utilizzare il separatore delle migliaia nell&apos;output numerico.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**Sintassi:** obj &lt;&lt; Use Triple-S Labels as Headings( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per usare le etichette come nomi di colonne per le variabili tripla S

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**Sintassi:** obj &lt;&lt; Use a Floating Window for Data Filters( state=0|1 )

**Descrizione:** Se si seleziona questa opzione, i filtri sui dati utilizzano una finestra mobile visualizzata sopra le rispettive tabelle di dati e le finestre correlate. In caso contrario sarà utilizzata una finestra posizionabile normalmente con le altre finestre.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**Sintassi:** obj &lt;&lt; Use an Asterisk with the PValue Format( state=0|1 )

**Descrizione:** Il formato p-value aggiungerà un asterisco alle colonne numeriche

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**Sintassi:** obj &lt;&lt; Use column references in Dispatch( state=0|1 )

**Descrizione:** Quando si salvano le personalizzazioni dei report, utilizzare i riferimenti di colonna invece delle stringhe quando si fa riferimento a elementi personalizzati. In questo modo si generano script più robusti rispetto alle modifiche dei nomi di colonna. Le personalizzazioni salvate utilizzando questa preferenza potrebbero funzionare solo in JMP 18.0 e versioni successive.

**JMP Versione aggiunta:** 18

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**Sintassi:** obj &lt;&lt; Use math symbols( state=0|1 )

**Descrizione:** Cambia l&apos;impostazione predefinita per attivare i simboli matematici nei report JMP.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**Sintassi:** obj &lt;&lt; Virtual Join Auto Open Linked Table( state=0|1 )

**Descrizione:** Apre automaticamente la tabella dei dati a cui fa riferimento questa colonna.

**JMP Versione aggiunta:** 16

### Virtual Join Use Linked Column Name

**Sintassi:** obj &lt;&lt; Virtual Join Use Linked Column Name( state=0|1 )

**Descrizione:** Assegna alla colonna virtuale il nome della colonna collegata.

**JMP Versione aggiunta:** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**Sintassi:** obj &lt;&lt; Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**Descrizione:** Impossibile aprire il formato di file compatto in JMP 17 e versioni precedenti.

**JMP Versione aggiunta:** 18

### Warn when referenced table name has changed

**Sintassi:** obj &lt;&lt; Warn when referenced table name has changed( state=0|1 )

**Descrizione:** Invia un messaggio di avvertimento quando cambia il nome di una tabella collegata virtualmente (di riferimento).

**JMP Versione aggiunta:** 15

## Platform Preferences

### Messaggi degli elementi

#### Get

**Sintassi:** obj &lt;&lt; Get

**Descrizione:** Restituisce lo script per impostare una preferenza specificata.

```jsl

a = Platform Preferences[1] << Get( Distribution );Show( a );

```

#### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Restituisce lo script per impostare le preferenze.

```jsl

a = Platform Preferences[1] << Get Script;Show( a );

```

#### Set

**Sintassi:** obj &lt;&lt; Set

**Descrizione:** Imposta una preferenza specificata.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

