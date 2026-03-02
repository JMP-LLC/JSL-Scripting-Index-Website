# Compare Data Tables



## Constructeurs associés

### Compare Data Tables

**Syntaxe :** Compare Data Tables( &lt;Compare with( Data Table( name ))&gt;, &lt;show window(0 | 1)&gt;, &lt;limit(integer)&gt;, &lt;Compare table properties(0 | 1)&gt;, &lt;Compare column attributes and properties(0 | 1)&gt;, &lt;Compare data(0 | 1)&gt;, &lt;Fuzzy compare( &lt;0 | 1&gt;, &lt;Relative Error(number)&gt;)&gt;, &lt;Show difference summary(0 | 1)&gt;, &lt;Show difference plot(0 | 1)&gt; )

**Description :** Compare deux tables de données ouvertes et signale les différences entre les données, ainsi que les métadonnées.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);

```

## Messages d'éléments

### Are Data Different

**Syntaxe :** obj &lt;&lt; Are Data Different

**Description :** Renvoie vrai ou faux selon que les données des deux tables sont différentes ou non.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
how = (obj << Are Data Different);

```

### Auto compare

**Syntaxe :** Auto Compare(0|1)

**Description :** Effectuer les comparaisons dès qu&apos;un paramètre est modifié

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Auto Compare( 1 );

```

### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** Fermer l’objet Comparer la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << close;

```

### Compare

**Syntaxe :** Compare()

**Description :** Effectuer les comparaisons maintenant

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Compare();

```

### Compare Column Attributes and Properties

**Syntaxe :** obj &lt;&lt; Compare Column Attributes and Properties( state=0|1 )

**Description :** Activer ou désactiver l’indicateur de comparaison des attributs et des propriétés de colonne. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << compare column attributes and properties( 1 );

```

### Compare Data

**Syntaxe :** obj &lt;&lt; Compare Data( state=0|1 )

**Description :** Activer ou désactiver l’indicateur de comparaison des données de colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << compare data( 0 );

```

### Compare Table Properties

**Syntaxe :** obj &lt;&lt; Compare Table Properties( state=0|1 )

**Description :** Activer ou désactiver l’indicateur de comparaison des variables et des scripts des tables de données. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << compare table properties;

```

### Compare With

**Syntaxe :** obj &lt;&lt; Compare With( Data Table( name ) )

**Description :** Comparer la première table avec cette table. Renvoie la valeur Vrai ou Faux.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
obj = dt << Compare Data Tables();
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
same = obj << compare with( dt2 );

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Copier le script Comparer les tables de données dans le presse-papier.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Copy Script;

```

### Fuzzy Compare

**Syntaxe :** obj &lt;&lt; Fuzzy Compare( &lt;(state= 1 | 0)&gt;, &lt;Relative Error (number)&gt; )

**Description :** Activer ou désactiver l’indicateur de comparaison des données de colonnes.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << fuzzy compare( relative error( 0.0001 ) );

```

### Get column attributes differences

**Syntaxe :** obj &lt;&lt; Get column attributes differences( columns( column) )

**Description :** Obtenir la liste des attributs de colonnes différents dans les colonnes comparées.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
attribDiff = (obj << Get columns attributes differences( :name ));

```

### Get column properties differences

**Syntaxe :** obj &lt;&lt; Get column properties differences( columns( column) )

**Description :** Obtenir la liste des propriétés de colonnes différentes dans les colonnes comparées.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
propDiff = (obj << Get columns properties differences( :name ));

```

### Get columns list

**Syntaxe :** obj &lt;&lt; Get columns list( ( &lt;differed in data&gt; | &lt;differed in properties&gt; | &lt;mismatched data type&gt; | &lt;differed in attributes&gt;) )

**Description :** Obtenir la liste des colonnes dont les données, les propriétés, le type de données ou d’autres attributs de colonne sont différents.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
colDiff = (obj << Get columns list( differed in attributes ));
Show( colDiff );

```

### Get difference summary matrix

**Syntaxe :** obj &lt;&lt; Get difference summary matrix

**Description :** Obtient le résumé des différences sous le format de matrice. Les colonnes de la matrice correspondent aux colonnes du résumé des différences. La première colonne, action, est représentée dans la matrice par -1 qui signifie Supprimer, 0 pour Remplacer et 1 pour Ajouter.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
mtx = (obj << Get Difference Summary matrix);

```

### Get table scripts difference list

**Syntaxe :** obj &lt;&lt; Get table scripts difference list

**Description :** Obtenir la liste des scripts de table de données différents ou manquants.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
scriptDiff = (obj << Get table scripts difference list);

```

### Get table variables difference list

**Syntaxe :** obj &lt;&lt; Get table variables difference list

**Description :** Obtenir la liste des variables de table de données différentes ou manquantes.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
tvdiff = (obj << Get table variables difference list);

```

### Get unmatched columns list

**Syntaxe :** obj &lt;&lt; Get unmatched columns list

**Description :** Obtenir la liste des colonnes non appariées, celles pour lesquelles il ne correspond aucune colonne à comparer

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
colDiff = (obj << Get unmatched columns list);

```

### Hide column properties with no differences

**Syntaxe :** Hide column properties with no differences(0|1)

**Description :** Masquer les propriétés identiques lors de la comparaison des propriétés des colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Hide column properties with no differences( 0 );

```

### Hide columns with no differences

**Syntaxe :** Hide columns with no differences(0|1)

**Description :** Masquer les colonnes identiques lors de la comparaison des données des tables.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Hide columns with no differences( 0 );

```

### Hide rows with no differences

**Syntaxe :** Hide rows with no differences(0|1)

**Description :** Masquer les lignes identiques lors de la comparaison des données des tables.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Hide rows with no differences( 0 );

```

### Hide table properties with no differences

**Syntaxe :** Hide table properties with no differences(0|1)

**Description :** Masquer les éléments identiques lors de la comparaison des métadonnées des tables.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Hide table properties with no differences( 0 );

```

### Ignore case

**Syntaxe :** Ignore Case(0|1)

**Description :** Ignorer la casse des caractères lors de la comparaison des données

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Ignore Case( 1 );

```

### Ignore missing

**Syntaxe :** Ignore Missing(0|1)

**Description :** Ignorer les valeurs manquantes lors de la comparaison des données

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Ignore Missing( 1 );

```

### Ignore whitespace

**Syntaxe :** Ignore Whitespce(0|1)

**Description :** Ignorer les caractères d&apos;espace blanc lors de la comparaison des données

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Ignore Whitespace( 1 );

```

### Limit

**Syntaxe :** obj &lt;&lt; Limit( integer )

**Description :** Définir le nombre limite des différences. La comparaison s’arrête lorsque le nombre limite est atteint.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << limit( 100 );

```

### Link

**Syntaxe :** Link({"col1", "col2", &lt;ID(0|1)&gt;, &lt;No Compare(0|1)&gt;, &lt;Fuzzy Compare(&lt;Ignore Case(0|1)&gt;, &lt;Ignore Whitespace(0|1)&gt;, &lt;Ignore Missing(0|1)&gt;, &lt;Relative Error(&lt;amount&gt;)&gt;)&gt;

**Description :** Spécifier les paires de colonnes à comparer et autres options de comparaison.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Link( {:age, :weight}, );

```

### Relative Error

**Syntaxe :** obj &lt;&lt; Relative Error( integer )

**Description :** Définir l’erreur relative pour la comparaison approximative.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Relative Error( 0.00001 );

```

### Report

**Syntaxe :** obj &lt;&lt; Report

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Row Alignment

**Syntaxe :** obj &lt;&lt; Row Alignment (Flexible by Row|By Row|Use ID Columns)

**Description :** Définit l&apos;alignement des lignes pour la comparaison. 

Flexible par ligne : tente de trouver autant de lignes correspondantes que possible en ignorant les blocs de lignes sans correspondance.

Par ligne : compare chaque ligne par numéro de ligne.

Utiliser les colonnes ID : les colonnes ID spécifiées sont utilisées pour créer une clé pour chaque ligne. Cette clé est utilisée pour mettre les lignes en correspondance.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Row Alignment( "By Row" );

```

### Save Difference Summary

**Syntaxe :** obj &lt;&lt; Save Difference Summary( &lt;invisible(0 | 1)&gt; )

**Description :** Enregistrer le résumé des différences dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
summaryDT = (obj << save difference summary( invisible ));

```

### Save Script to Data Table

**Syntaxe :** obj &lt;&lt; Save Script to Data Table

**Description :** Enregistrer le script Comparer les tables de données en tant que propriété de table dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Ajouter un bouton au journal contenant le script Comparer les tables de données.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Ajouter le script Comparer les tables de données à la fenêtre active contenant le texte du script.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Save Script to Script Window;

```

### Show Window

**Syntaxe :** obj &lt;&lt; Show Window( Show window( 0|1) )

**Description :** Afficher ou masquer la fenêtre du script Comparer la table de données

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << show window( 1 );

```

### Show fuzzy differences

**Syntaxe :** Show Fuzzy Differences(0|1)

**Description :** Surligner les différences dans la comparaison des données pour les valeurs égales uniquement en raison des paramètres de comparaison approximative.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Show Fuzzy Differences( 1 );

```

### Unlink

**Syntaxe :** Unlink(&lt;column name 1&gt;, &lt;column name 2&gt;)

**Description :** Supprimer la comparaison des colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Unlink( {"a", "b"} );

```

### Unlink All

**Syntaxe :** Unlink All

**Description :** Supprimer toutes les comparaisons des colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables(
	compare With( Data Table( "Students2" ) )
);
obj << Unlink All;

```

