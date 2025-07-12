# JMP App Module Instance



## Messages d'éléments

### Create Objects

**Syntaxe :** obj << Create Objects

**Description :** Crée les objets de l’instance de module.  Cet outil peut être appelé uniquement à l’intérieur d’un script pour un module d’App JMP.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Get Box

**Syntaxe :** obj << Get Box

**Description :** Obtenir la boîte d’affichage de l’instance de module.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
inst = modules[1] << Create Instance;
inst << Get Box;

```

### Get Namespace

**Syntaxe :** obj << Get Namespace

**Description :** Obtenir l’espace de noms de l’instance de module.

```jsl

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**Syntaxe :** obj << Get User Data

**Description :** Renvoie les données d&apos;utilisateur associées à l&apos;instance du module.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Set User Data

**Syntaxe :** inst << Set User Data(expr)

**Description :** Enregistre une valeur JSL dans l&apos;instance du module de l&apos;application JMP ; la valeur peut être un nombre, une chaîne, une liste, un tableau associatif ou tout autre type JSL.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

