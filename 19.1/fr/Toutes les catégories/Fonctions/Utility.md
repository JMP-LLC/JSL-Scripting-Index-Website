# Utility



### Add

**Syntaxe :** y = x0 + x1; y = Add( x0, x1, ... )

**Description :** Ajoute tous les arguments, qui peuvent être des nombres, des matrices ou des listes de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pi() + 10;

```

### Beep

**Syntaxe :** Beep()

**Description :** Réalise une alerte sonore.

**JMP Version ajoutée :** Avant la version 14

```jsl

Beep();

```

### Blob MD5

**Syntaxe :** blobResult = Blob MD5( blob )

**Description :** Crée un BLOB (Binary Large OBject) résultat à 16 octets à partir d&apos;un BLOB source. Le BLOB à 16 octets est la somme de contrôle MD5 (ou le hachage) du BLOB source.

**JMP Version ajoutée :** Avant la version 14

```jsl

Hex(/* make it printable */ Blob MD5(/* get the hash */		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",			BLOB/* the result is a BLOB, not a string */		)	)) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */;

```

### Blob Peek

**Syntaxe :** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**Description :** Crée un nouveau blob à partir d&apos;une sous-étendue d’octets du blob donné. L’argument offset partant de zéro, le premier octet est à un offset de zéro.

**JMP Version ajoutée :** Avant la version 14

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**Syntaxe :** y = Build Information()

**Description :** Renvoie l’heure et la date de la version, de la version finale ou de la version de débogage et le nom du produit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Build Information();

```

### Caption

**Syntaxe :** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**Description :** Affiche une fenêtre de légende à la position spécifiée par {h, v} et qui contient le texte spécifié par l’argument text. L’argument Delayed( seconds ) définit le temps d’attente en secondes avant chaque légende.

**JMP Version ajoutée :** Avant la version 14

#### Légende formatée

```jsl

Caption(	{100, 200},	"explanation",	Font( "Arial Black" ),	Font Size( 16 ),	Text Color( "blue" ),	Back Color( "yellow" ),	Spoken( 1 ));

```

#### Supprimer la légende

```jsl

Caption( "explanation" );Wait( 2 );Caption( remove );

```

### Current Journal

**Syntaxe :** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**Description :** Renvoie une référence au journal actif du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Si le projet spécifié ne contient aucun journal actif, il en sera créé un automatiquement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Current Journal();

```

### Data Connector Registry

**Syntaxe :** Data Connector Registry()

**Description :** La collection de connecteurs de données pour JMP.

**JMP Version ajoutée :** 18

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**Syntaxe :** y = Open Datafeed( ... )

**Description :** Crée un objet et une fenêtre permettant d&apos;envoyer des messages, afin de gérer les sources de données en temps réel.

**JMP Version ajoutée :** Avant la version 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Debug Break

**Syntaxe :** Debug Break()

**Description :** Quand cette expression est évaluée dans JSL Debugger, le Debugger arrête l&apos;exécution du script.

**JMP Version ajoutée :** Avant la version 14

```jsl

// Right-click and select Debug.// In the JSL Debugger, click Run.x = 5;y = 8;Debug Break();z = x + yy;Show( z );

```

### Decode URI

**Syntaxe :** Decode URI( value )

**Description :** Coder la chaîne à l&apos;aide du codage URI

**JMP Version ajoutée :** 14

```jsl

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Syntaxe :** y = Decode64 Blob( base64String )

**Description :** Décode une chaîne imprimable de texte en base 64 dans un blob.

**JMP Version ajoutée :** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Syntaxe :** y = Decode64 Double( base64String )

**Description :** Renvoie le nombre à virgule flottante à double précision de la chaîne encodée base64.

**JMP Version ajoutée :** Avant la version 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**Syntaxe :** Disable JMP Live URL(url)

**Description :** Désactive un URL JMP Live. Cette méthode est uniquement disponible lors de l&apos;exécution de jmpStartAdmin.jsl. Un astérisque \* peut être utilisé en tant que caractère générique pour spécifier les URL comme suit : \* (tout URL), \*.jmp.com (un URL se terminant par .jmp.com), http://public.\* (un URL commençant par http://public.), ou \*public\* (un URL contenant public).

**JMP Version ajoutée :** 15

```jsl

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Syntaxe :** Disable Proxy Settings( 1|0 )

**Description :** Désactive ou active les paramètres du proxy lors de l&apos;exécution de jmpStartAdmin.jsl. Les paramètres du proxy sont activés par défaut.

**JMP Version ajoutée :** 15

```jsl

Disable Proxy Settings( 1 );

```

### Divide

**Syntaxe :** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**Description :** Sépare tous les arguments consécutifs du premier argument. Les arguments peuvent être des nombres, des matrices ou des listes de nombres. Lorsque l&apos;appel est fait avec un seul argument, le résultat est la réciproque.

**JMP Version ajoutée :** Avant la version 14

#### Réciproque

```jsl

x = Divide( 5 );y = 1 / 5;Show( x, y );

```

#### Simple

```jsl

6 / 3 / 2;

```

### Empty

**Syntaxe :** y = Empty()

**Description :** Renvoie une valeur vide. Utilisé dans l&apos;éditeur de formules pour les arguments non spécifiés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Empty();

```

### Enable JMP Live URL

**Syntaxe :** Enable JMP Live URL(url)

**Description :** Active un URL JMP Live. Cette méthode est uniquement disponible lors de l&apos;exécution de jmpStartAdmin.jsl. Un astérisque \* peut être utilisé en tant que caractère générique pour spécifier les URL comme suit : \* (tout URL), \*.jmp.com (un URL se terminant par .jmp.com), http://public.\* (un URL commençant par http://public.), ou \*public\* (un URL contenant public).

**JMP Version ajoutée :** 15

```jsl

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Syntaxe :** Enable Proxy Settings( 1|0 )

**Description :** Active ou désactive les paramètres du proxy lors de l&apos;exécution de jmpStartAdmin.jsl. Les paramètres du proxy sont activés par défaut.

**JMP Version ajoutée :** 15

```jsl

Enable Proxy Settings( 0 );

```

### Encode URI

**Syntaxe :** Encode URI( value )

**Description :** Coder la chaîne à l&apos;aide du codage URI

**JMP Version ajoutée :** 14

```jsl

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Syntaxe :** s = Encode64 Blob( x )

**Description :** Code un blob dans une chaîne imprimable de texte en base 64.

**JMP Version ajoutée :** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Syntaxe :** s = Encode64 Double( x )

**Description :** Renvoie un encodage de chaîne base64 du nombre à virgule flottante.

**JMP Version ajoutée :** Avant la version 14

```jsl

Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**Syntaxe :** points = Faure Quasi Random Sequence(nDim, nRow)

**Description :** Générez une séquence de remplissage des nombres quasi-aléatoires à l&apos;aide de la suite de Faure.

**JMP Version ajoutée :** Avant la version 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Format Pattern

**Syntaxe :** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;) x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; ) obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**Description :** Les configurations de format sont des chaînes qui définissent un format de date et heure, comme « <YYYY></><MM></><DD> <hh><:><mm><:><ss><ampm> ». Les parties de la configuration entre <> sont appelées des descripteurs de champ. Ils représentent une valeur (comme « <YYYY> » pour l&apos;année à quatre chiffres) ou un autre texte de date et heure (comme « </> » qui est le séparateur local de date). Une configuration de format vous permet de créer des formats non fournis dans JMP. Ces formats peuvent être utilisés pour le formatage et l&apos;entrée de données.

**JMP Version ajoutée :** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );Show( s, x );                                                /*Descripteurs de champDates(ne peut pas être utilisé avec les descripteurs de champ de durée)================================================================================<YYYY>        Année à quatre chiffres. (Accepte de 1 à 4 chiffres en entrée.)<YY>          Année à deux chiffres<yyyy>        Année ISO à quatre chiffres ; correspond aux semaines ISO.              (Accepte 1 à 4 chiffres en entrée.)<yy>          Année ISO à deux chiffres ; correspond aux semaines ISO.<YYYY.>       Année avec une année fractionnelle. Décrit complètement la date et              l'heure.<M>           Numéro du mois (1 à 12)<MM>          Numéro du mois, précédé par un zéro (01 à 12)<Month>       Nom long du mois<Mmm>         Nom court du mois<MMM>         Nom du mois « en ligne ». Toujours trois lettres.<WW1>         Numéro de semaine à deux chiffres, précédé par un zéro. La semaine              2 commence le premier dimanche de l'année. La semaine 1 comprend              les jours avant le premier dimanche. (01 à 54)<WW2>         Numéro de semaine à deux chiffres, précédé par un zéro. La semaine              1 commence le premier dimanche de l'année. La semaine 0 comprend              les jours avant le premier dimanche. (00 à 53)<ww>          Numéro de semaine ISO à deux chiffres, précédé par un zéro. Les              semaines commencent le lundi. La semaine 1 est la première semaine              de l'année ayant 4 jours ou plus. Aucune semaine partielle. La              première ou la dernière semaine de l'année déborde sur l'année              précédente ou suivante, respectivement. (01 à 53)<D>           Jour du mois (1 à 31)<DD>          Jour du mois, précédé par un zéro (01 à 31)<Q>           Trimestre de l'année (1 à 4)<Q#>          « T » suivi du trimestre de l'année (1 à 4)<DayOfWeek>   Nom du jour de la semaine<DW>          Numéro représentant le jour de la semaine. 1 = dimanche, 7 =              samedi<dw>          Numéro représentant le jour de la semaine. 1 = lundi, 7 = dimanche</>           Le séparateur de date régional . (Accepte la plupart des              séparateurs courants en entrée.)<->           Le séparateur de date ISO « - ». (Accepte la plupart des              séparateurs courants en entrée.)</?>          Séparateur de date facultatif pour la saisie de la date. Le              séparateur n'est jamais écrit en sortie.<'T'>         Le « T » dans les dates ISOTemps(peut parfois être utilisé avec les descripteurs de champ de durée)================================================================================<hh>          Heure formatée selon les paramètres régionaux actuels. Si un              descripteur <ampm> est présent, utilisera une horloge à 12 ou 24              heures selon la région. Si un descripteur <AMPM> est présent,              utilisera une horloge à 12 heures. Sinon, utilisera une horloge à              24 heures. (Ne peut pas être utilisé avec les descripteurs de              champ de durée.)<zhh>         Heure formatée selon les paramètres régionaux actuels et précédée              par un zéro. Si un descripteur <ampm> est présent, utilisera une              horloge à 12 ou 24 heures selon la région. Si un descripteur              <AMPM> est présent, utilisera une horloge à 12 heures. Sinon,              utilisera une horloge à 24 heures. (Ne peut pas être utilisé avec              les descripteurs de champ de durée.)<hh24>        Heure au format 24 heures précédé par un zéro (00 à 23)<mm>          Minute, précédée par un zéro (00 à 59)<ss>          Seconde, précédée par un zéro (00 à 59)<ampm>        Symbole Matin / Après-midi pour les paramètres régionaux actuels.              (Ne peut pas être utilisé avec les descripteurs de champ de              durée.)<AMPM>        Symbole matin/après-midi « AM » ou « PM » indépendant des              paramètres régionaux. (Ne peut pas être utilisé avec les              descripteurs de champ de durée.)<:>           Le séparateur de temps régional.<::>          Le séparateur de temps ISO « : ». (Accepte également le séparateur              de temps régional en entrée.)<:?>          Séparateur d'heure facultatif pour la saisie de la date. Le              séparateur n'est jamais écrit en sortie.Durées(ne peut pas être utilisé avec les descripteurs de champ de date)================================================================================<Day>         Nombre de jour. Utilisé comme champ le plus significatif dans les              durées. Ne peut être utilisé avec aucun autre « count ».<Hour>        Nombre d'heure. Utilisé comme champ le plus significatif dans les              durées. Ne peut être utilisé avec aucun autre « count ».<Minute>      Nombre de minute. Utilisé comme champ le plus significatif dans              les durées. Ne peut être utilisé avec aucun autre « count ».Autre================================================================================<<>           Remplacé par « < »*/

```

### Get Addin

**Syntaxe :** Get Addin( ID )

**Description :** Récupère un complément enregistré spécifié par son identifiant.

**JMP Version ajoutée :** Avant la version 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Syntaxe :** Get Addins( )

**Description :** Renvoie une liste de tous les compléments enregistrés.

**JMP Version ajoutée :** Avant la version 14

```jsl

addins = Get Addins();addin ids = Get Addins() << id;Show( addins, addin ids );

```

### Get Addr Info

**Syntaxe :** Get Addr Info( string )

**Description :** Cherche l&apos;adresse numérique pour un nom. Dans la plupart des cas, le nom devrait être utilisé pour la compatibilité future avec IPV6.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**Syntaxe :** Get Clipboard()

**Description :** Obtenir le contenu actuel du presse-papiers

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Clipboard();

```

### Get Name Info

**Syntaxe :** Get Name Info( string )

**Description :** Cherche le nom pour une adresse numérique. Dans la plupart des cas, le nom devrait être utilisé pour la compatibilité future avec IPV6.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**Syntaxe :** notebookList = Get Notebook List()

**Description :** Renvoie une liste de tous les notebooks ouverts.

**JMP Version ajoutée :** 19

### Get OAuth2 Grant Types

**Syntaxe :** Get OAuth2 Grant Types

**Description :** Obtient les types d&apos;autorisation OAuth2 JMP pris en charge.

**JMP Version ajoutée :** 15

```jsl

/*https://oauth.net/2/grant-types/*/grant_types = Get OAuth2 Grant Types();Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Version ajoutée :** 15

```jsl

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";aa = Get OpenID Connect Discovery( url );Show( aa );

```

### Get OpenIDC Discovery

**JMP Version ajoutée :** 15

### Get Platform Preference

**Syntaxe :** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Description :** Obtient les préférences de la plate-forme telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Syntaxe :** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Description :** Obtient les préférences de la plate-forme telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Syntaxe :** Get Policies( &lt;Machine|User|Both&gt; )

**Description :** Renvoie un tableau associatif contenant les noms et les valeurs de la stratégie actuelle.

**JMP Version ajoutée :** 18

```jsl

Get Policies();

```

### Get Preference

**Syntaxe :** Get Preferences( pref1, ... )

**Description :** Obtient les préférences telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**Syntaxe :** Get Preferences( pref1, ... )

**Description :** Obtient les préférences telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Preferences( Graph marker size );

```

### Glue

**Syntaxe :** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Description :** Évalue chaque argument et retourne le dernier résultat.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex1 = 1;ex2 = 2;

```

### Gzip Compress

**Syntaxe :** blob = Gzip Compress( blob )

**Description :** Compresse un blob de données pour obtenir un blob gzip.

**JMP Version ajoutée :** 14

```jsl

Gzip Compress(	Char To Blob( "random data does not usually compress well and may get larger" ));

```

### Gzip Uncompress

**Syntaxe :** blob = Gzip Uncompress( blob )

**Description :** Décompresse un blob de données gzip dans un blob.

**JMP Version ajoutée :** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/	Char To Blob(		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",		"ascii~hex"	));

```

### Host is

**Syntaxe :** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Description :** Renvoie 1 si l’application JMP correspond à l’argument ; 0 dans le cas contraire. Les arguments Windows ou Mac vérifient le système d’exploitation spécifié et les arguments Bits32 ou Bits64 vérifient l’application JMP spécifiée à 32 ou 64 bits. Un seul argument peut être vérifié à la fois.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( Host is( "Mac" ),	Show( "On Mac" ),	Show( "Not on Mac" ));If( Host is( "Bits64" ),	Show( "64 bit" ));If(	Host is( "x86_64" ), Show( "On x86_64" ),	Host is( "arm64" ), Show( "On arm64" ));

```

### Is Alt Key

**Syntaxe :** y = Is Alt Key()

**Description :** Renvoie 1 si la touche Alt est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques. Sur Mac, il s&apos;agit de la touche Options.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Command Key

**Syntaxe :** y = Is Command Key()

**Description :** Renvoie 1 si la touche Commande est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Command Key(),			Text( {60, 50}, "Command Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Context Key

**Syntaxe :** y = Is Context Key()

**Description :** Renvoie 1 si la touche Contexte est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Context Key(),			Text( {60, 50}, "Context Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Control Key

**Syntaxe :** y = Is Control Key()

**Description :** Renvoie 1 si la touche Contrôle est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques. Sur Mac, il s&apos;agit de la touche Commande.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is JMP Live URL Enabled

**Syntaxe :** Is JMP Live URL Enabled(url)

**Description :** Détermine si l&apos;URL spécifié peut être utilisé dans cette session JMP. Les URL peuvent être activés et/ou désactivés à l&apos;aide du script jmpStartAdmin.jsl. Cela ne détermine pas s&apos;il est valide ou si l&apos;utilisateur peut se connecter. Cela détermine uniquement si l&apos;URL est bloqué par JMP.

**JMP Version ajoutée :** 15

```jsl

url = "http://public.jmp.com";Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**Syntaxe :** y = Is Option Key()

**Description :** Renvoie 1 si la touche Option est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Option Key(),			Text( {60, 50}, "Option Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### Is Shift Key

**Syntaxe :** y = Is Shift Key()

**Description :** Renvoie 1 si la touche Maj est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",	Graph Box(		Rect( 45, 55, 55, 45, 1 );		If( Is Shift Key(),			Text( {50, 60}, "Shift Key" )		);		If( Is Control Key(),			Text( {60, 50}, "Control Key" )		);		If( Is Alt Key(),			Text( {50, 35}, "Alt Key" )		);		Mousetrap( {} );	));

```

### JMP Product Name

**Syntaxe :** y = JMP Product Name()

**Description :** Renvoie "Standard" ou "Pro" en fonction de la version du produit sous licence.

**JMP Version ajoutée :** Avant la version 14

```jsl

JMP Product Name();

```

### JMP Version

**Syntaxe :** y = JMP Version()

**Description :** Renvoie la version de JMP (version.révision{.fix}) ; non disponible avant 6.0.

**JMP Version ajoutée :** Avant la version 14

```jsl

JMP Version();

```

### JSL Encrypted

**Syntaxe :** y = JSL Encrypted(script)

**Description :** Incorpore un script crypté dans un autre script. Créez un script crypté en sélectionnant Éditer > Crypter le script dans le menu principal de l&apos;éditeur de script. Saisissez vos mots de passe et le texte crypté s&apos;affiche dans une nouvelle fenêtre. Copiez ce texte dans une commande de JSL Encrypted("") pour incorporer le script crypté dans un autre script.

**JMP Version ajoutée :** Avant la version 14

```jsl

JSL Encrypted(	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*");

```

### JSL Quote

**Syntaxe :** y = JSL Quote(script)

**Description :** Enregistrer un script JSL dans une variable, en incluant tous les commentaires et le formatage.

**JMP Version ajoutée :** Avant la version 14

```jsl

x = JSL Quote(/* Begin quote. */    For (i = 1, i <= 5, i++,        // Print the value of i.        Print(i);    );    // End expression.);New Window( "editor", Script Box( x ) );

```

### Load DLL

**Syntaxe :** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Description :** Charge une DLL à laquelle conduit le chemin d&apos;accès spécifié.

**JMP Version ajoutée :** Avant la version 14

#### Cross platform using Base Name()

```jsl

dll = Load DLL( Base Name( "/path/to/dll/financial" ) );// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac// Declarations for "irr" and "npv" are auto-loadedmyirr = dll << irr( 0.1, -51000, 1000, 900, 950 );mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );dll << UnloadDLL();

```

#### Windows only

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << CallDLL( "MessageBeep", "n", 0 );	Wait( 1 );	dll << CallDLL( "MessageBeep", "n", 0 );	dll << UnloadDLL(););

```

### Mail

**Syntaxe :** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**Description :** Crée un message électronique sortant comme spécifié si le système d&apos;exploitation le permet. Toutes les options ne fonctionneront pas sur toutes les versions de système d&apos;exploitation. Pour plus de détails, consultez l&apos;aide.

**JMP Version ajoutée :** Avant la version 14

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Syntaxe :** menu = Main Menu( command, &lt;window name&gt; )

**Description :** Exécute la commande du menu principal spécifiée.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Main Menu( "Sample Index" );

```

**Exemple 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Minus

**Syntaxe :** y = -x; y = Minus( x )

**Description :** Opposé de x, qui peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

-Pi();

```

### Multiple File Import

**Syntaxe :** mfiObj = Multiple File Import();

**Description :** Crée un objet Importation de plusieurs fichiers. L&apos;objet accepte les messages pour définir un dossier, filtrer des fichiers et importer. Pour ouvrir une boîte de dialogue, utilisez le message « Créer une fenêtre ». Pour importer immédiatement, utilisez le message « Importer les données » qui renvoie la liste des tables de données créées.

**JMP Version ajoutée :** 14

**Exemple de scriptage**

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );mfi << Set Name Filter( "*.txt" );mfi << Set Name Enable( 1 );tables = mfi << Import Data();

```

**Exemple interactif**

```jsl

// use the save-script-to-script-window button // in the MFI dialog to see more messages// for filtering files and controlling the importMultiple File Import(	<<Set Folder( "$DESKTOP" ),	<<Set Name Filter( "*.csv;" ),	<<Set Name Enable( 1 )) << Create Window;

```

### Multiply

**Syntaxe :** y = x0 * x1; y = Multiply( x0, x1, ... )

**Description :** Multiplie tous les arguments, qui peuvent être des nombres, des matrices ou des listes de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

2 * Pi();

```

### Name

**Syntaxe :** Name(string)

**Description :** Un nom permet simplement d&apos;appeler un élément. Les noms sont utilisés pour les variables et les fonctions, et peuvent être utilisés directement dans les scripts si certaines règles sont respectées. Si le nom commence par un caractère alphabétique ou un trait bas, suivi de caractères alphanumériques, d&apos;un espace, de symboles mathématiques Unicode et de certains signes de ponctuation (apostrophes (’), pourcentages (%), points (.), barres obliques inversées (\\), et traits bas (_)), alors il peut être utilisé directement dans les scripts. Les noms qui ne respectent pas ces règles peuvent être utilisés à l&apos;aide du mot-clé du Nom().

**JMP Version ajoutée :** 14

```jsl

Name( "taxable income(2011)" ) = 456000;tax = .25;Print( tax * Name( "taxable income(2011)" ) );

```

### New HTTP Request

**Syntaxe :** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Description :** Crée une demande d&apos;envoi à un service Internet.

**JMP Version ajoutée :** 14

```jsl

getSentiment = Function( {text},	{Default Local},	fields = Associative Array();	fields["text"] = text;	s = New HTTP Request(		URL( "http://text-processing.com/api/sentiment/" ),		Method( "POST" ),		Form( Fields( fields ) ),		Headers( {"Accept: application/json"} )	) << Send;	sAsList = Parse JSON( s );	retval = Associative Array();	retval["pos"] = sAsList["probability"]["pos"];	retval["neg"] = sAsList["probability"]["neg"];	retval["neutral"] = sAsList["probability"]["neutral"];	retval["label"] = sAsList["label"];	retval;);                         addSentimentColumns = Function( {dt, colname, bLabel, bValues},	{Default Local},	col = Column( dt, colname );	colLabel = "Sentiment_Label(" || colname || ")";	colValPos = "Sentiment_Pos(" || colname || ")";	colValNeg = "Sentiment_Neg(" || colname || ")";	colValNeutral = "Sentiment_Neutral(" || colname || ")";	If( bLabel,		dt << New Column( colLabel, Character )	);	If( bValues,		dt << New Column( colValPos, Numeric );		dt << New Column( colValNeg, Numeric );		dt << New Column( colValNeutral, Numeric );	);	For( i = 1, i <= N Rows( dt ), i++,		sentiment = getSentiment( col[i] );		If( bLabel,			Column( dt, colLabel )[i] = sentiment["label"]		);		If( bValues,			Column( dt, colValPos )[i] = sentiment["pos"];			Column( dt, colValNeg )[i] = sentiment["neg"];			Column( dt, colValNeutral )[i] = sentiment["neutral"];		);	););                         dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Multi HTTP Request

**Syntaxe :** multi_request = New Multi HTTP Request()

**Description :** Envoie ou télécharge plusieurs requêtes HTTP en parallèle.

**JMP Version ajoutée :** 17

```jsl

requests = New Multi HTTP Request();requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"		)	));requests << Add(	New HTTP Request(		Method( "GET" ),		URL(			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"		)	));data = requests << Download( "show progress", "detailed" );http_requests = requests << Get Requests();For( i = 1, i <= N Items( http_requests ), i++,	Show( http_requests[i] << Get Mime Type() ));

```

### New OAuth2

**Syntaxe :** oauth2 = New OAuth2()

**Description :** Crée une nouvelle autorisation OAuth2.

**JMP Version ajoutée :** 15

```jsl

/*https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow*//*Note: the "code" parameter is set automatically after the redirect occurs*/auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";redirect_url = "http://localhost/myapp/";client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";client_secret = "JqQX2PNo9bpM0uEihUPzyrh";scope = "openid offline_access https://graph.microsoft.com/user.read";auth_fields = [=> ];token_fields = [=> ];                                          oauth2 = New OAuth2();oauth2 << Grant Type( "Authorization Code" );oauth2 << Auth URL( auth_url );oauth2 << Token URL( token_url );oauth2 << Redirect URL( redirect_url );                                          auth_fields["scope"] = scope;auth_fields["client_id"] = client_id;token_fields["client_secret"] = client_secret;                                          oauth2 << Auth Fields( auth_fields );oauth2 << Token Fields( token_fields );                                          auth_header = oauth2 << Get Auth Header();request = New HTTP Request(	URL( "https://graph.microsoft.com/v1.0/me" ),	Headers( {auth_header} ),	Method( "GET" ));data = request << Send;

```

### New OAuth2 Token

**Syntaxe :** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Description :** Crée un token OAuth2 pour avoir un accès sécurisé aux données depuis de nombreuses API Internet différentes.

**JMP Version ajoutée :** 15

```jsl

token = New OAuth2 Token(	Account( "jmpgoogldev@gmail.com" ),	Client ID( "test" ),	Client Secret( "test 2" ),	Refresh Token( "" ),	Token URL( "" ));

```

### New Web Report

**Syntaxe :** obj = New Web Report(...)

**Description :** Crée un rapport HTML interactif.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );webreport = New Web Report(	Add Report(		Distribution(			Continuous Distribution( Column( :weight ) ),			Nominal Distribution( Column( :age ) )		),		Title( "Distribution Web Report" ),		Description( "This report was created with the sample found in the Scripting Index" )	),	Add Report(		Bivariate(			Y( :weight ),			X( :height ),			Automatic Recalc( 1 ),			Fit Line( {Line Color( {213, 72, 87} )} ),			Local Data Filter( Add Filter( columns( :sex ) ) )		)	));webreport << Index( Title( "Big Class Report" ) );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Notebook

**Syntaxe :** nb = Notebook( name|number )

**Description :** Renvoie une référence au notebook spécifié.

**JMP Version ajoutée :** 19

### Open Datafeed

**Syntaxe :** y = Open Datafeed( ... )

**Description :** Crée un objet et une fenêtre permettant d&apos;envoyer des messages, afin de gérer les sources de données en temps réel.

**JMP Version ajoutée :** Avant la version 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/	Set Script(		ex = exfeed << getLine;		Show( ex );	));For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Open Help

**Syntaxe :** w = Open Help( "Help" | "Scripting Index", ... )

**Description :** Ouvre l&apos;aide JMP en ligne ou l&apos;index des scripts.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open Help( "Help" );

```

**Exemple 2**

```jsl

Open Help(	"Scripting Index",	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext( Category( "Functions" ) ));

```

**Exemple 3**

```jsl

Open Help(	"Scripting Index",	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),	IndexContext(		Category( "All Categories" ),		Object( "Search results" ),		Method( "Get Alpha" )	));

```

### Parse XML

**Syntaxe :** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Description :** Analyse une expression XML en utilisant les expressions OnElement pour les balises XML spécifiées.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

/*See example two for more details*/ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

**Exemple 2**

```jsl

doc ="<a title='one'>    WWWa    <b>BB<c>ZZZ</c>B1</b>    XXXa    <b>BBB2</b>    YYYa    <c>CCC</c></a>";// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,// to show why text should be collected by Text(...) and then processed by EndTag(...)// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.docname = "undefined";doctext = "";recordtext = "";records = {};NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting levelParse XML( doc,	On Element(		"a",		Start Tag(			docname = XML Attr( "title" );			NestLevel++;		),         // decide here to trim the CRLF and blanks and use a single blank		Text( doctext = doctext || Trim( XML Text() ) || " " ),		End Tag( NestLevel-- )	),	On Element(		"b",		Start Tag( NestLevel++ ),         // comment out the next line and...		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),		End Tag(            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records			// recordtext = XMLText();			Insert Into( records, recordtext );			recordtext = "";			NestLevel--;		)	));Show( docname, doctext, records, NestLevel );

```

### Pdf Page Count

**Syntaxe :** Pdf Page Count( file name)

**Description :** Renvoie le nombre de pages dans un fichier PDF.

**JMP Version ajoutée :** Avant la version 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Pref

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**Syntaxe :** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;AutoLoad(0|1)&gt; )

**Description :** Register an add-in. An Autoload value of 1 forces the add-in to load when registered. A value of 0 leaves the add-in unloaded. If AutoLoad is not specified the addin.def setting will be used if found otherwise the default will be for the add-in to be loaded.

**JMP Version ajoutée :** Avant la version 14

```jsl

Register Addin(	"com.mycompany.myaddin",	"$DOCUMENTS/myaddin",	displayname( "Sample Addin" ));

```

### Revert Menu

**Syntaxe :** Revert Menu()

**Description :** Restaure les menus par défaut.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* Reverts menus back to factory default settings. */

```

### Run Program

**Syntaxe :** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt; )

**Description :** Contrôler un programme externe à l&apos;aide de stdin et stdout.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

RP = Run Program(	Executable( "PING.EXE"/*path probably not needed*/ ),	Options( {"-n 5", "localhost"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**Exemple 2**

```jsl

RP = Run Program(	Executable( "CMD.EXE"/*path probably not needed*/ ),	Options( {"/a", "/q", "/c dir"} ),	ReadFunction( Function( {this}, Write( this << read ) ) ));

```

**Exemple 3**

```jsl

commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};icommand = 0;RP = Run Program(	Executable( "CMD.EXE" ),	Options( {"/a", "/q"} ),	ReadFunction( Function( {this}, Write( this << Read ) ) ),	WriteFunction(		Function( {this},			icommand++;			If( icommand <= N Items( commands ),				this << Write( commands[icommand] );				Show( commands[icommand] );			,				this << WriteEOF;				Show( this << CanRead, this << CanWrite, this << isReadEOF );			);		)	));

```

### Schedule

**Syntaxe :** Schedule( sec, scpt )

**Description :** Planifie un événement qui exécutera le script scpt après un délai de sec secondes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Schedule(	10,	Beep();	Print( "Time's up!" ););

```

### Set Clipboard

**Syntaxe :** Set Clipboard( text )

**Description :** Met le texte spécifié dans le presse-papiers du système utilisé par le menu Édition.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Clipboard( "example" );

```

### Set Platform Preference

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Preference

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Syntaxe :** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**Description :** Définit la visibilité d&apos;une barre d&apos;outils donnée pour une classe de fenêtres donnée. Nom de barre d&apos;outils correspond au nom interne de la barre. Si le nom de barre d&apos;outils donné est Default, la classe de fenêtres spécifiée est remise à la valeur par défaut de la barre d&apos;outils, définie pour cette classe de fenêtres. Voici des exemples de nom de classe de fenêtre: Table de données, Script, Rapport et Journal. Si le nom de classe de fenêtres donné est Tout, la visibilité de la barre d&apos;outils spécifiée est définie pour toutes les classes de fenêtres.

Renvoie 1 en cas de succès, 0 en cas d&apos;échec.

**JMP Version ajoutée :** Avant la version 14

```jsl

// Make the Analyze toolbar visible in Script windowsSet Toolbar Visibility( "Analyze", Script, true );// Make the Analyze toolbar visible in all classes of windowsSet Toolbar Visibility( "Analyze", All, true );// Revert Script windows to the default toolbar set for Script windowsSet Toolbar Visibility( Default, Script );// Revert all windows to their default toolbar setSet Toolbar Visibility( Default, All );

```

### Shortest Edit Script

**Syntaxe :** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Description :** Renvoie un des scripts d’édition les plus courts pour convertir une chaîne A en chaîne B. La forme simple renvoie uniquement une liste. strings() et lines() ont une option permettant de renvoyer une matrice ou une liste. sequences() renvoie uniquement une matrice.  En option, limit() arrêtera la fonction rapidement si la liste d’édition possède plus d’insertions et de suppressions que la limite autorisée. lines() compare les lignes au lieu des caractères ; les options ignore("characters") ou ignoreWhiteSpace() sélectionnent les caractères non ignorés par défaut.   Si nécessaire, ESC arrêtera la fonction.

**JMP Version ajoutée :** Avant la version 14

```jsl

editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),	i++,	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2		] /* the snippet */	));common;

```

### Show Addin Builder Dialog

**Syntaxe :** Show Addin Builder Dialog()

**Description :** Ouvre une boîte de dialogue permettant de créer des compléments personnalisés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**Syntaxe :** Show Addins Dialog()

**Description :** Ouvre une boîte de dialogue affichant l’état de tous les compléments enregistrés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Addins Dialog();

```

### Show Commands

**Syntaxe :** Show Commands( &lt;keyword=Builtins&gt; )

**Description :** Crée une ou plusieurs tables de données contenant des informations sur plusieurs composantes JSL. L&apos;argument keyword détermine le contenu de la table de sortie. Spécifiez les éléments intégrés (par défaut) pour les opérateurs et fonctions intégrés. Spécifiez les objets scriptables pour toutes les commandes scriptables des objets. Spécifiez les traductions pour l&apos;Anglais et les versions traduites des commandes scriptables. Spécifiez les boîtes d&apos;affichage pour les commandes scriptables liées aux boîtes d&apos;affichage et aux segs d&apos;affichage. Spécifiez les noms scriptables pour les noms des objets scriptables. Spécifiez les noms de plate-forme pour les noms des plates-formes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Commands();

```

### Show Preferences

**Syntaxe :** Show Preferences()

**Description :** Affiche les paramètres de préférence actuels dans le registre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Preferences();

```

### Show Properties

**Syntaxe :** Show Properties( object )

**Description :** Affiche dans le registre les messages auxquels correspond un objet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**Syntaxe :** points = Sobol Quasi Random Sequence(nDim, nRow)

**Description :** Générez une séquence de remplissage des nombres quasi-aléatoires à l&apos;aide de la suite de Sobol dans 4 000 dimensions au maximum.

**JMP Version ajoutée :** Avant la version 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );As Table( A );Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Syntaxe :** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**Description :** Crée une variable de socket qui peut communiquer avec les sockets de cet ordinateur ou d&apos;autres du réseau. L&apos;argument par défaut est STREAM. Essayez le site Internet de votre société.

**JMP Version ajoutée :** Avant la version 14

```jsl

// see the socket's OBJECT messages in the scripting index for better examplestCall = Socket();tcall << Ioctl( FIONBIO, 1 );rc = tCall << connect( "www.jmp.com", "80" );If( rc[2] == "ok",	tCall << <<Char To Blob(		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",		"ASCII~HEX"	);	While( 1,		tMessage = tCall << Recv( 100000 );		If(			tMessage[2] == "ok",				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes		,			Starts With( tMessage[2], "WOULDBLOCK" ),				Show( "waiting" ) // sometimes data might not be available yet		,			Starts With( tMessage[2], "CLOSED" ),				Break(); // this is the desired result		, // else			Show( tMessage );			Stop();		);	);	tCall << Close();// done, // else	Show( rc );	Stop(););

```

### Speak

**Syntaxe :** Speak( text, &lt;Wait( sync )&gt; )

**Description :** Énonce le texte si le système d&apos;exploitation le permet. En spécifiant l’argument facultatif Wait(true), l&apos;exécution du script est retardée jusqu’à ce que le discours soit terminé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Speak( "Hello" );

```

### Status Msg

**Syntaxe :** Status Msg( message )

**Description :** Affiche le message spécifié dans la barre d&apos;état.

**JMP Version ajoutée :** Avant la version 14

```jsl

Status Msg( "calculating..." );

```

### Subtract

**Syntaxe :** y = x0 - x1; y = Subtract( x0, x1, ... )

**Description :** Soustrait tous les arguments consécutifs du premier argument. Les arguments peuvent être des nombres, des matrices ou des listes de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

6 - 2 - 1;

```

### Unregister Addin

**Syntaxe :** Unregister Addin( uniqueId)

**Description :** Annule l’enregistrement d’un complément

**JMP Version ajoutée :** Avant la version 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**Syntaxe :** Web( string, &lt;JMP Window&gt; )

**Description :** Ouvre l&apos;URL ou un fichier stocké dans string dans le navigateur web par défaut. Le deuxième argument facultatif permet de spécifier qu’un fichier HTML s’ouvre dans une fenêtre du navigateur JMP.

**JMP Version ajoutée :** Avant la version 14

#### Gestionnaire d'événements

```jsl

//Making a clickable link show up in a formula columnNew Table( "Example",	Add Rows( 2 ),	New Column( "URL",		"Character",		"Nominal",		Formula( "https://www.jmp.com/" || :Page ),		Set Property(			"Event Handler",			Event Handler(				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )			)		)	),	New Column( "Page",		"Character",		"Nominal",		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )	));

```

#### Simple

```jsl

Web( "http://www.jmp.com/" );

```

### XML Attr

**Syntaxe :** value = XML Attr( attr name ); aa = XML Attr()

**Description :** Extrait la valeur de chaîne d&apos;un attribut XML dans le contexte d&apos;une évaluation dans une commande Parse XML(). Si aucun nom n’est donné, un tableau associatif de toutes les paires d&apos;attributs nom/valeur sera renvoyé.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### XML Decode

**Syntaxe :** text = XML Decode( textxml )

**Description :** Décode les symboles XML en texte ordinaire, remplace " par ", < par <, &gt par >; & par &.

**JMP Version ajoutée :** Avant la version 14

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Syntaxe :** textxml = XML Encode( text )

**Description :** Prépare le texte à incorporer dans XML, remplace " par ", < par <, > par > & par &.

**JMP Version ajoutée :** Avant la version 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Syntaxe :** value = XML Text()

**Description :** Extrait le texte de chaîne du corps d&apos;une balise XML dans le contexte d&apos;une évaluation d&apos;une commande Parse XML().

**JMP Version ajoutée :** Avant la version 14

```jsl

ex ="<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";Parse XML( ex,	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),	On Element(		"col",		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )	));

```

### \\[...]\\

**Syntaxe :** y = \\[string]\\

**Description :** Les passages requérant de nombreux caractères d&apos;échappement peuvent utiliser le séparateur \\[...]\\.

**JMP Version ajoutée :** Avant la version 14

```jsl

jslPhrase ="The JSL to do this is :\[a = "hello";b = a|| " world.";show(b);]\ and you use the Submit command to run it.";Show( jslPhrase );

```

