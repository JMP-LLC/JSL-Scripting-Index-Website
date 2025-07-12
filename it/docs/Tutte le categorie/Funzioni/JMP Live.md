# JMP Live



## Funzioni

### New JMP Live

**Sintassi:** New JMP Live(Connection("Connection Name"), <Prompt("No" | "If Needed")>)

**Descrizione:** Avvia una connessione a JMP Live utilizzando le informazioni di connessione memorizzate. La connessione è facoltativa e l&apos;impostazione di default è quella specificata come di default in Gestione connessioni. Se fornita, cerca la connessione in base al nome. Prompt è facoltativo e il valore di default è "No". I valori validi per il prompt sono "Sì", "No" e "Se necessario". Un valore "Sì" richiede sempre le credenziali di accesso. Un valore "No" non richiede mai le credenziali di accesso, ma potrebbe causare un insuccesso dell&apos;autenticazione. Un valore "Se necessario" richiede le credenziali solo se le credenziali al momento memorizzate non sono valide. Restituisce un oggetto Connessione a JMP Live.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Names Default To Here( 1 );
jmplive = New JMP Live();

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**Sintassi:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")>

**Descrizione:** Crea contenuti interattivi da pubblicare su JMP Live. 

	Il primo parametro è obbligatorio e specifica i dati da utilizzare per il contenuto. Tali dati possono essere un report, una tabella di dati, una mappa o un&apos;immagine. 

	Titolo e Descrizione sono utilizzati per personalizzare qualsiasi tipo di contenuto pubblicato. I parametri rimanenti sono facoltativi e vengono utilizzati solo per personalizzare il contenuto del report. 

	Pubblica dati indica se i dati utilizzati nel report sono pubblicati su JMP Live. I dati del report sono pubblicati di default.

	Abilita avvertimenti indica se gli avvertimenti del diagramma di controllo devono essere abilitati per il report. Le avvertenze della carta di controllo sono disabilitate di default. 

	L&apos;ottimizzazione viene utilizzata per personalizzare il modo in cui il report viene pubblicato su JMP Live. Il report viene pubblicato di default per consentire una maggiore interattività.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

