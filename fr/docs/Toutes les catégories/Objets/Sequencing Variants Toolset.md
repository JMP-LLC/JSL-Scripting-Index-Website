# Sequencing Variants Toolset



## Constructeurs associés

### Sequencing Variants Toolset

**Syntaxe :** Sequencing Variants Toolset

**Description :** Fournit une infrastructure pour traiter et analyser les données de séquençage à débit élevé avec SamTools et BcfTools.

## Messages d'éléments

### Arguments

**Syntaxe :** obj << Arguments

**Description :** Permet de spécifier des options pour exécuter la plate-forme à partir de la fenêtre de scriptage.

### Run Cmd

**Syntaxe :** obj << Run Cmd

**Description :** Détermine la tâche de l&apos;ensemble d&apos;outils de séquençage des variantes à exécuter à partir de la fenêtre de scriptage.

### Run Spec

**Syntaxe :** obj << Run Spec

**Description :** Détermine la tâche de l&apos;ensemble d&apos;outils de séquençage des variantes à exécuter à partir de la fenêtre de l&apos;interface.

### Specification

**Syntaxe :** obj << Specification

**Description :** Permet de spécifier une tâche.

## Messages d'éléments partagés

### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
obj << Copy Script;

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container",
			(gb << Get Container) << Get Picture
		)
	)
);

```

### Get Data Table

**Syntaxe :** obj << Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntaxe :** obj << Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate(
	X( :height ),
	Y( :weight ),
	Where( :age < 14 & :height > 60 )
);
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntaxe :** obj << View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Sequencing Variants Toolset Run

### Messages d'éléments

#### Auto Send Output to Files List

**Syntaxe :** obj << Auto Send Output to Files List( state=0|1 )

**Description :** Envoie les fichiers de résultats dans le panneau de liste de fichiers.

#### Bam Files

**Syntaxe :** obj << Bam Files

**Description :** Spécifie les fichiers BAM.

#### Bcf Files

**Syntaxe :** obj << Bcf Files

**Description :** Spécifie les fichiers BCF.

#### Caller

**Syntaxe :** obj << Caller( "À plusieurs allèles"|"Consensus"="À plusieurs allèles" )

**Description :** "À plusieurs allèles" par défaut.

#### Copy Task Specification

**Syntaxe :** obj << Copy Task Specification

**Description :** Copie les spécifications actuelles de l&apos;ensemble d&apos;outils de séquençage des variantes vers le presse-papiers.

**JMP Version ajoutée :** 19

#### Files

**Syntaxe :** obj << Files

**Description :** Charger les fichiers d&apos;entrée à exécuter dans samtools.

#### Ploidy

**Syntaxe :** obj << Ploidy( number=2 )

**Description :** "2" par défaut.

#### Recall in Task Specification

**Syntaxe :** obj << Recall in Task Specification

**Description :** Définit la spécification de la tâche dans le rapport Spécification des tâches de sorte qu&apos;elle corresponde au modèle spécifié.

#### Ref Files

**Syntaxe :** obj << Ref Files

**Description :** Spécifie les fichiers du génome de référence.

#### Remove Run

**Syntaxe :** obj << ( Run[number] << Remove Run( state=0|1 ) )

**Description :** Supprime le rapport de l&apos;essai spécifié de la fenêtre de rapport.

#### Results Folder

**Syntaxe :** obj << Results Folder

**Description :** Spécifie le dossier de résultats.

#### Sam Files

**Syntaxe :** obj << Sam Files

**Description :** Spécifie les fichiers SAM.

#### Send Output to Files List

**Syntaxe :** obj << Send Output to Files List( state=0|1 )

**Description :** Envoie les fichiers de résultats dans le panneau de liste de fichiers.

#### Sort Reads By

**Syntaxe :** obj << Sort Reads By( "Coordonnées"|"Alphanumérique"|"Lexicographique"="Coordonnées" )

**Description :** "Coordonnées" par défaut.

#### Summary

**Syntaxe :** obj << Summary( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les détails de l&apos;essai. Actif par défaut.

#### Target Regions

**Syntaxe :** obj << Target Regions

**Description :** Définit les régions cibles. La spécification des régions requiert que le fichier BAM soit trié par coordonnées et indexé.

#### Task

**Syntaxe :** obj << Task( "Indexer Fasta"|"Convertir SAM en BAM"|"Trier les fragments"|"Ajouter les coordonnées du partenaire"|"Supprimer les doublons"|"Fusionner les fichiers"|"Indexer BAM"|"Convertir BAM en SAM"|"Extraire les fragments mappées"|"Extraire les fragments non mappés"|"Extraire les régions cibles"|"Extraire les éléments correctement alignés"|"Extraire le premier fragment"|"Erreurs de correspondance et insertions d&apos;étiquette"|"Alignement du dénombrement"|"Alignement du dénombrement par indicateur"|"Alignement du dénombrement par référence"|"Générer les statistiques"|"Générer la qualité d&apos;alignement de base"|"Générer la profondeur de fragment"|"Compression Bgzip"|"Décompression Bgzip"|"Générer les vraisemblances de génotype"|"Générer les appels de génotype"|"Convertir Bcf en Vcf"|"Convertir Vcf en Bcf" )

**Description :** Détermine la tâche à exécuter.

#### Title

**Syntaxe :** obj << Title

**Description :** Définit un titre.

#### Unthreaded

**Syntaxe :** obj << Unthreaded( state=0|1 )

**Description :** Utiliser uniquement le Thread principal pour les calculs

#### Vcf Files

**Syntaxe :** obj << Vcf Files

**Description :** Spécifie les fichiers VCF.

## Sequencing Variants Toolset Specification

### Messages d'éléments

#### Auto Send Output to Files List

**Syntaxe :** obj << Auto Send Output to Files List( state=0|1 )

**Description :** Envoie les fichiers de résultats dans le panneau de liste de fichiers.

#### Bam Files

**Syntaxe :** obj << Bam Files

**Description :** Spécifie les fichiers BAM.

#### Bcf Files

**Syntaxe :** obj << Bcf Files

**Description :** Spécifie les fichiers BCF.

#### Caller

**Syntaxe :** obj << Caller( "À plusieurs allèles"|"Consensus"="À plusieurs allèles" )

**Description :** "À plusieurs allèles" par défaut.

#### Files

**Syntaxe :** obj << Files

**Description :** Charger les fichiers d&apos;entrée à exécuter dans samtools.

#### Ploidy

**Syntaxe :** obj << Ploidy( number=2 )

**Description :** Spécifie un nombre positif indiquant le niveau de ploïdie. "2" par défaut.

#### Ref Files

**Syntaxe :** obj << Ref Files

**Description :** Spécifie les fichiers du génome de référence.

#### Results Folder

**Syntaxe :** obj << Results Folder

**Description :** Spécifie le dossier de résultats.

#### Sam Files

**Syntaxe :** obj << Sam Files

**Description :** Spécifie les fichiers SAM.

#### Sort Reads By

**Syntaxe :** obj << Sort Reads By( "Coordonnées"|"Alphanumérique"|"Lexicographique"="Coordonnées" )

**Description :** "Coordonnées" par défaut.

#### Target Regions

**Syntaxe :** obj << Target Regions

**Description :** Définit les régions cibles. La spécification des régions requiert que le fichier BAM soit trié par coordonnées et indexé.

#### Task

**Syntaxe :** obj << Task( "Indexer Fasta"|"Convertir SAM en BAM"|"Trier les fragments"|"Ajouter les coordonnées du partenaire"|"Supprimer les doublons"|"Fusionner les fichiers"|"Indexer BAM"|"Convertir BAM en SAM"|"Extraire les fragments mappées"|"Extraire les fragments non mappés"|"Extraire les régions cibles"|"Extraire les éléments correctement alignés"|"Extraire le premier fragment"|"Erreurs de correspondance et insertions d&apos;étiquette"|"Alignement du dénombrement"|"Alignement du dénombrement par indicateur"|"Alignement du dénombrement par référence"|"Générer les statistiques"|"Générer la qualité d&apos;alignement de base"|"Générer la profondeur de fragment"|"Compression Bgzip"|"Décompression Bgzip"|"Générer les vraisemblances de génotype"|"Générer les appels de génotype"|"Convertir Bcf en Vcf"|"Convertir Vcf en Bcf"="Indexer Fasta" )

**Description :** Détermine la tâche à exécuter. "Indexer Fasta" par défaut.

#### Title

**Syntaxe :** obj << Title

**Description :** Définit un titre.

#### Unthreaded

**Syntaxe :** obj << Unthreaded( state=0|1 )

**Description :** Utiliser uniquement le Thread principal pour les calculs

#### Vcf Files

**Syntaxe :** obj << Vcf Files

**Description :** Spécifie les fichiers VCF.

