# JMP App



## Messages d'éléments

### Combine Windows

**Syntaxe :** obj &lt;&lt; Combine Windows( {list of reports or data tables}, {...} )

**Description :** Combiner la liste donnée des rapports ou des table de données de la plate-forme dans un nouveau module. L&apos;application ne doit pas être en cours d&apos;exécution ni se trouver en état de modification.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));biv = Bivariate( Y( :weight ), X( :height ) );app = JMP App();app << Set Name( "Instant App" );app << Combine Windows( {dist << Report, biv << Report} );(app << Get Modules)[1] << Set Window Title( "My Report" );app << Run;

```

### Debug

**Syntaxe :** obj &lt;&lt; Debug

**Description :** Exécuter l’application dans le débogueur.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );app << Debug;

```

### Edit

**Syntaxe :** obj &lt;&lt; Edit

**Description :** Modifier l&apos;application ou le tableau de bord dans le constructeur.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;

```

### Get Modules

**Syntaxe :** list = obj &lt;&lt; Get Modules

**Description :** Obtenir une liste de modules définis dans l’application.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit Application;app << Get Modules();

```

### Get Namespace

**Syntaxe :** obj &lt;&lt; Get Namespace

**Description :** Obtenir l’espace de noms de l’instance de module.

```jsl

app = JMP App();(app << Get Namespace) << Show Contents;

```

### Get Windows

**Syntaxe :** obj &lt;&lt; Get Windows

**Description :** Renvoie une liste des fenêtres ouvertes créées en tant qu&apos;instances des modules applicatifs. Notez que les autres fenêtres créées par les scripts applicatifs, à l&apos;aide de la fonction New Window() ou d&apos;autres fonctions, ne seront pas incluses.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

app = JMP App();Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;app << Get Windows();

```

**Exemple 2**

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );app << Run;launcher = (app << Get Windows())[1];launcher[Button Box( 1 )] << Click;launcher[Button Box( 1 )] << Click;app << Get Windows();

```

### Open File

**Syntaxe :** obj &lt;&lt; Open File( &lt;path&gt; )

**Description :** Charger l’application à partir du fichier donné.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );box = app << Edit Application;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Relance le tableau de bord ou l&apos;application, en créant une nouvelle copie en exécution de l&apos;application.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Relaunch Analysis;

```

### Run

**Syntaxe :** obj &lt;&lt; Run

**Description :** Exécuter l&apos;application ou le tableau de bord.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Save a New Window() script

```jsl

app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );app << Run;app << Save Script for All Objects;

```

### Save Script to Add-In

**Syntaxe :** obj &lt;&lt; Save Script to Add-In

**Description :** Créer un script (JSL) pour réaliser cette analyse, puis le charger dans le Générateur de complément.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << "Save Script to Add-In";

```

### Save Script to Data Table

**Syntaxe :** app &lt;&lt; Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Data Table;

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Journal;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Script Window;

```

