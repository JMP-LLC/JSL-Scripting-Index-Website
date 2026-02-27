# Columns Manager



## Messages d'éléments

### Clear All Filters

**Syntaxe :** obj &lt;&lt; Clear All Filters

**Description :** Cette option supprime tous les filtres du tableau récapitulatif. Notez que la commande Définir les colonnes n&apos;est pas un filtre, donc l&apos;appel de cette commande ne supprime pas cette restriction sur les colonnes affichées.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "t" );obj << Clear All Filters;

```

### Create Data Dictionary

**Syntaxe :** obj &lt;&lt; Create Data Dictionary

**Description :** Créez un journal qui regroupe les statistiques et les informations de propriétés de chaque colonne.

**JMP Version ajoutée :** 18

### Extended Statistics

**Syntaxe :** obj &lt;&lt; Extended Statistics(&lt;list of statistics&gt;)

**Description :** Remplacez le jeu de statistiques étendues par défaut sans avoir à configurer la liste dans les préférences.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager( Include Extended Statistics( 1 ) );obj << Extended Statistics( {"Median Absolute Deviation", "Q1"} );

```

### Force calculations for all categorical columns

**Syntaxe :** obj &lt;&lt; Force calculations for all categorical columns( state=0|1 )

**Description :** Avec cette option activée, les statistiques sont calculées pour toutes les colonnes catégorielles, pas uniquement pour les colonnes de caractères. Par exemple, une colonne d&apos;expression calcule le nombre de valeurs manquantes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Force calculations for all categorical columns( 1 );

```

### Force calculations for all numeric columns

**Syntaxe :** obj &lt;&lt; Force calculations for all numeric columns( state=0|1 )

**Description :** Si cette option est activée, les statistiques numériques sont calculées pour toutes les colonnes numériques, si possible. Par exemple, le nombre de valeurs uniques est calculé pour les colonnes désignées comme continues.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Force calculations for all numeric columns( 1 );

```

### Get Summary Table

**Syntaxe :** obj &lt;&lt; Get Summary Table

**Description :** Obtenir la boîte de tableau pour le tableau récapitulatif

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;tab = obj << Get Summary table;tab << Sort By Column( "n unique" );

```

### Hide Excluded Columns

**Syntaxe :** obj &lt;&lt; Hide Excluded Columns( state=0|1 )

**Description :** Incluez ou supprimez les colonnes marquées comme Exclues dans le tableau récapitulatif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Excluded Columns( 0 );

```

### Hide Hidden Columns

**Syntaxe :** obj &lt;&lt; Hide Hidden Columns( state=0|1 )

**Description :** Incluez ou supprimez les colonnes marquées comme Masquées dans le tableau récapitulatif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Hidden Columns( 0 );

```

### Include Extended Statistics

**Syntaxe :** obj &lt;&lt; Include Extended Statistics( state=0|1 )

**Description :** L&apos;ensemble des statistiques supplémentaires peut être configuré dans Préférences.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Include Extended Statistics( 1 );

```

### Select Rows

**Syntaxe :** obj &lt;&lt; Select Rows(&lt;empty&gt; | All | None | &lt;column references&gt;)

**Description :** Cette option sélectionne les lignes correspondant aux colonnes dans le tableau récapitulatif. Ignorez en ne saisissant aucun argument. Sélectionnez toutes ou aucune des lignes visibles en passant All ou None. Lignes spécifiques sélectionnées en passant une liste de références de colonne.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );

```

### Set Columns

**Syntaxe :** obj &lt;&lt; Set Columns(&lt;columns&gt;)

**Description :** Par défaut, le gestionnaire de colonnes inclut toutes les colonnes de la table de données comme son ensemble de colonnes de base. Cet ensemble pourrait (ou non) être réduit dans le rapport en appliquant la suppression des colonnes exclues. Cette option permet de restreindre le jeu de colonnes auquel le gestionnaire de colonnes a accès.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Columns( {:height, :weight} );

```

### Set Modeling Type Filter

**Syntaxe :** obj &lt;&lt; Set Modeling Type Filter(&lt;empty&gt; | &lt;Continuous, Nominal, Ordinal, Vector, Unstructured Text, Multiple Response, None&gt;)

**Description :** Cette option définit le filtre du type de modélisation. Ignorez en ne passant aucun argument, ou spécifiez un ou plusieurs noms de types de modélisation. Le filtre conserve les colonnes qui correspondent à l&apos;un des types d&apos;analyse.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Modeling Type Filter( "Continuous", "Ordinal" );

```

### Set Property Filter

**Syntaxe :** obj &lt;&lt; Set Property Filter(&lt;empty&gt; | At Least One Property | &lt;list of property names&gt;)

**Description :** Cette option définit le filtre des propriétés. Ignorez en ne passant aucun argument, ou spécifiez un ou plusieurs noms de propriété. Le filtre est spécifié par les colonnes qui contiennent l&apos;une des propriétés. Il y a également une valeur particulière qui est appariée aux colonnes ayant des propriétés quelconques.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Set Property Filter( "Matrix Column Names", "Value colors" );

```

### Set Selection Filter

**Syntaxe :** obj &lt;&lt; Set Selection Filter(&lt;empty&gt; | Keep | Hide)

**Description :** Cette option définit le filtre de sélection. Permet à l&apos;utilisateur de réaliser une sélection arbitraire de colonnes, puis de filtrer la liste selon cet ensemble de colonnes (avec Garder, ou l&apos;inverse avec Masquer). Ignorez en ne passant aucun argument.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );obj << Set Selection Filter( "Keep" );

```

### Set Text Filter

**Syntaxe :** obj &lt;&lt; Set Text Filter(&lt;empty&gt; | &lt;search text&gt;)

**Description :** Cette option définit les données du filtre de texte actuel, ce qui réduit le nombre de colonnes affichées dans le tableau récapitulatif. Le filtre de texte est appliqué uniquement aux noms de colonne.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "me" );

```

### Show Attributes

**Syntaxe :** obj &lt;&lt; Show Attributes( state=0|1 )

**Description :** Développez ou réduisez la section du tableau récapitulatif contenant les attributs de colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Attributes( 0 );

```

### Show Properties

**Syntaxe :** obj &lt;&lt; Show Properties( state=0|1 )

**Description :** Développez ou réduisez la section du tableau récapitulatif contenant les propriétés de colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Properties( 0 );

```

### Show Statistics

**Syntaxe :** obj &lt;&lt; Show Statistics( state=0|1 )

**Description :** Développez ou réduisez la section du tableau récapitulatif contenant les statistiques de colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Statistics( 0 );

```

