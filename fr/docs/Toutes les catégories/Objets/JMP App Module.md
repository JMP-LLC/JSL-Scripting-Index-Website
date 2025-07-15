# JMP App Module



## Messages d'éléments

### Create Instance

**Syntaxe :** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**Description :** Créer une instance du module.  Les paramètres sont passés à la fonction OnModuleLoad() définie dans le script du module.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**Syntaxe :** app = obj &lt;&lt; Get Application

**Description :** Obtenir l’application qui possède le module.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```

