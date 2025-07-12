# Text Explorer



## Colonnes

### By

**Syntaxe :** obj << By( column(s) )

**Description :** Produire plusieurs rapports, un pour chaque niveau de la ou des variables.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );

```

### ID

**Syntaxe :** obj << ID( column )

**Description :** Une colonne qui sert à distinguer les personnes interrogées dans la table de données de sortie Enregistrer la DTM empilée pour association, ainsi que dans le rapport Analyse des classes latentes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	ID( :School Age Children )
);
obj << Save Stacked DTM For Association;

```

### Text Columns

**Syntaxe :** obj << Text Columns( column(s) )

**Description :** Une colonne de texte qui contient les documents à traiter. Chaque valeur de ligne est traitée comme un document.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Validation

**Syntaxe :** obj << Validation( column )

**Description :** Une colonne numérique contenant deux ou trois valeurs distinctes. Si deux valeurs sont présentes, la valeur inférieure définit l&apos;ensemble d&apos;apprentissage et la valeur supérieure définit l&apos;ensemble de validation. Si trois valeurs sont présentes, elles représentent les ensembles d&apos;apprentissage, de validation et de tests, par ordre croissant de taille. Si plus de trois valeurs sont présentes, seules les trois plus petites valeurs sont prises en compte.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Validation( :School Age Children )
);
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

## Constructeurs associés

### Text Explorer

**Syntaxe :** Text Explorer( Text Columns( columns ) )

**Description :** Analyse les mots à partir du texte d&apos;une colonne, les dénombre, les associe avec d&apos;autres colonnes, enregistre les indicateurs, et représente graphiquement les relations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

## Messages d'éléments

### Add Delimiters

**Syntaxe :** obj << Add Delimiters( "string" )

**Description :** Ajoute les caractères séparateurs transmis par l&apos;utilisateur, dans une chaîne unique, à la liste par défaut des caractères séparateurs destinés à séparer les mots.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
Wait( 1 );
obj << Add Delimiters( "{}" );

```

### Add Phrase Exceptions

**Syntaxe :** obj << Add Phrase Exceptions( list )

**Description :** Ajoute une liste de phrases à supprimer de la liste des termes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Phrases( {"twice a day", "every time", "time consuming"} );
Wait( 1 );
obj << Add Phrase Exceptions( {"every time"} );

```

### Add Phrases

**Syntaxe :** obj << Add Phrases( list )

**Description :** Ajoute une liste de phrases à la liste de termes à analyser comme termes uniques. Les dénombrements des termes sont mis à jour en conséquence.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Phrases( {"twice a day", "every time"} );

```

### Add Recode Exceptions

**Syntaxe :** obj << Add Recode Exceptions( { {pair1}, {pair2}, ...} )

**Description :** Ajoute une liste de chaînes de texte recodées à supprimer.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );
Wait( 1 );
obj << Add Recode Exceptions( {"neglagent", "negligent"} );

```

### Add Recodes

**Syntaxe :** obj << Add Recodes( { {pair1}, {pair2}, ...} )

**Description :** Ajoute une liste de paires de mots à recoder.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );

```

### Add Stem Exceptions

**Syntaxe :** obj << Add Stem Exceptions( list )

**Description :** Ajoute une liste de mots à exclure de l&apos;indexation par radicaux.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stem Overrides

**Syntaxe :** obj << Add Stem Overrides( list )

**Description :** Ajoute une liste de mots qui peuvent toujours être indexés par radicaux.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Overrides( {"care"} );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stop Word Exceptions

**Syntaxe :** obj << Add Stop Word Exceptions( list )

**Description :** Ajoute une liste de mots à supprimer comme mots vides et à ajouter à la liste de termes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Word Exceptions( {"again", "are"} );

```

### Add Stop Words

**Syntaxe :** obj << Add Stop Words( list )

**Description :** Ajoute une liste de mots à supprimer de la liste des termes et à ignorer dans l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Words( {"use", "feel", "like"} );

```

### Cloud Width

**Syntaxe :** obj << Cloud Width( number )

**Description :** Définit la largeur du nuage de mots au nombre de pixels spécifié.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Cloud Width( 150 );

```

### Coloring

**Syntaxe :** obj << Coloring( "Aucun"|"Couleur uniforme"|"Gris arbitraires"|"Couleurs arbitraires"|"Par valeurs de colonne..." )

**Description :** Spécifie la couleur des termes dans le nuage de mots.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );

```

### Custom Stemmer

**Syntaxe :** obj << Custom Stemmer( Function( {string, dot}, ... ) )

**Description :** Effectue l&apos;indexation par radicaux conformément à vos spécifications. Spécifier une fonction qui prend l&apos;argument « chaîne » (un terme d&apos;un document), qui le teste afin de déterminer son modèle et qui, si nécessaire, remplace des caractères par l&apos;argument « point ». Cette fonction remplace l&apos;algorithme d&apos;indexation par radicaux standard. Tous les mots modifiés doivent inclure le point d&apos;indexation par radicaux à la fin. Si l&apos;indexation par radicaux est activée pour la plate-forme, cette fonction est appelée pour chaque terme unique identifié dans le corpus.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
//This custom stemmer looks only for words ending in 'ing' and replaces the end with the stemming dot.
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);

```

### Customize Regex

**Syntaxe :** obj = Text Explorer(...Customize Regex( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Ouvre l&apos;éditeur d&apos;expressions régulières de l&apos;explorateur de texte pour modifier les paramètres d&apos;expression régulière. Cette option est uniquement disponible avec la méthode Tokenisation des expressions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Regex" );
obj << Customize Regex();

```

### Discriminant Analysis

**Syntaxe :** obj << Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**Description :** Prévoit une classification de chaque document en une catégorie d&apos;une colonne de réponse spécifiée à l&apos;aide d&apos;une analyse discriminante linéaire de la matrice de termes du document.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Discriminant Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Column( :Gender )
);

```

### Font

**Syntaxe :** obj << Font( font )

**Description :** Spécifie la police, le style et la taille des termes dans le nuage de mots.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Font( "Arial Narrow", 11, "Plain" );

```

### Include Builtin Phrases

**Syntaxe :** obj << Include Builtin Phrases( state=0|1 )

**Description :** Spécifie que les phrases intégrées sont incluses dans les mots vides utilisés dans le processus de tokenisation. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Phrases( 0 );

```

### Include Builtin Stop Words

**Syntaxe :** obj << Include Builtin Stop Words( state=0|1 )

**Description :** Spécifie que les mots vides intégrés sont inclus dans les mots vides utilisés dans le processus de tokenisation. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Stop Words( 0 );

```

### Language

**Syntaxe :** obj = Text Explorer(...Language( "Langue d&apos;affichage"|"Anglais"|"Allemand"|"Espagnol"|"Français"|"Italien"|"Japonais"|"Chinois (simplifié)"|"Chinois (traditionnel)"|"Coréen" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la langue utilisée pour le traitement de texte. Cela affecte l&apos;indexation par radicaux et les listes intégrées de mots vides, de recodages et de phrases.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Language( "German" )
);

```

### Latent Class Analysis

**Syntaxe :** obj << Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**Description :** Groupe les documents en clusters de documents semblables à l&apos;aide d&apos;une analyse des classes latentes de la matrice binaire pondérée des termes du document.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### Latent Semantic Analysis

**Syntaxe :** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Description :** Effectue une décomposition parcimonieuse en valeurs singulières de la matrice de termes du document.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Layout

**Syntaxe :** obj << Layout( "Classé(e)"|"Alphabétique"|"Centré(e)" )

**Description :** Spécifie l&apos;organisation des termes dans le nuage de mots.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Layout( "Alphabetical" );

```

### Maximum Characters per Word

**Syntaxe :** obj = Text Explorer(...Maximum Characters per Word( number=50 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les number caractères qu&apos;un mot peut contenir au maximum pour être inclus en tant que terme dans l&apos;analyse. "50" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Characters per Word( 15 )
);

```

### Maximum Number of Phrases

**Syntaxe :** obj = Text Explorer(...Maximum Number of Phrases( number=5000 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le number maximum de phrases qui apparaissent dans la liste des phrases. "5000" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Number of Phrases( 50 )
);

```

### Maximum Words per Phrase

**Syntaxe :** obj = Text Explorer(...Maximum Words per Phrase( number=4 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie un maximum de number mots qu&apos;une phrase peut contenir et à inclure en tant que phrase dans l&apos;analyse. "4" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Words per Phrase( 2 )
);

```

### Minimum Characters per Word

**Syntaxe :** obj = Text Explorer(...Minimum Characters per Word( number=1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les number caractères qu&apos;un mot doit contenir au minimum pour être inclus en tant que terme dans l&apos;analyse. "1" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Minimum Characters per Word( 3 )
);

```

### Minimum Frequency for Phrase

**Syntaxe :** obj << Minimum Frequency for Phrase( number )

**Description :** Spécifie le number d&apos;occurrences d&apos;une phrase pour que cette phrase soit incluse dans la liste des phrases. Il n&apos;y a pas de minimum par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Minimum Frequency for Phrase( 5 );

```

### Phrases Alphabetical

**Syntaxe :** obj << Phrases Alphabetical( state=0|1 )

**Description :** Trie la liste des phrases par ordre alphabétique. Par défaut, elle est triée par dénombrement décroissant.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Phrases Alphabetical( 1 );

```

### Rotated SVD

**Syntaxe :** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Description :** Réalise une décomposition en valeurs singulières pivotée varimax de la matrice de termes du document pour produire des groupes de termes appelés des rubriques.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### SVD

**Syntaxe :** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Description :** Effectue une décomposition parcimonieuse en valeurs singulières de la matrice de termes du document.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Save DTM Formula

**Syntaxe :** obj << Save DTM Formula( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**Description :** Enregistre une colonne de formule de valeurs de vecteurs dans la table de données à l&apos;aide de la fonction JSL Text Score. La longueur du vecteur dépend des options spécifiées par l&apos;utilisateur pour le nombre maximum de termes, la fréquence minimum des termes et la pondération.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save DTM Formula(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Document Term Matrix

**Syntaxe :** obj << Save Document Term Matrix( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**Description :** Enregistre des colonnes dans la table de données pour chaque colonne de la matrice de termes du document. Le nombre de colonnes dépend des options spécifiées par l&apos;utilisateur pour le nombre maximum de termes, la fréquence minimum des termes et la pondération.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Document Term Matrix(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Stacked DTM for Association

**Syntaxe :** obj << Save Stacked DTM for Association

**Description :** Enregistre une version empilée de la matrice de termes du document dans une nouvelle table de données. Si une variable ID est spécifiée dans la fenêtre de lancement de l&apos;explorateur de texte, la variable ID est utilisée pour identifier les lignes de chaque terme dans la table de données du texte d&apos;origine.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Stacked DTM For Association;

```

### Save Term Table

**Syntaxe :** obj << Save Term Table

**Description :** Crée une table de données JMP qui contient chaque terme de la liste des termes, le nombre d&apos;occurrences et le nombre de documents contenant chaque terme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Term Table;

```

### SaveRegexColumn

**Syntaxe :** obj << SaveRegexColumn( text )

**Description :** Enregistre les expressions régulières personnalisées spécifiées dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
 
dt = New Table( "WordTable",
	New Column( "Original Words",
		Character,
		"Nominal",
		Set Values( {"Quick brown", "foxes jumped", "over the", "lazy dog."} )
	)
);
dt << Text Explorer(
	Text Columns( :Original Words ), 
// the regex: [a-z]*? means 0 or more letters, reluctantly. [aeiou] means one vowel.	
	// {2} means repeat twice. 
	// [a-z]* means 0 or more letters, greedily. (the rest of the word)
	Set Regex(
		Custom(
			Title( "Two Vowels" ),
			Regex( "(([a-z]*?[aeiou]){2}[a-z]*)" ),
			Result( "\[\1]\" ),

		)
	),
	Include Builtin Stop Words( 0 ), // "over" is a stop word, but we want to see it
	SaveRegexColumn( "Poly Vowel Words" )
);

```

### Score Terms by Column

**Syntaxe :** obj << Score Terms by Column( column )

**Description :** Enregistre les scores en fonction des valeurs dans une colonne spécifiée de la table de données créée par l&apos;option Enregistrer la table des termes. Pour chaque terme, les scores correspondent à la valeur moyenne de la colonne spécifiée, pondérée par le nombre d&apos;occurrences du terme dans chaque ligne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Score Terms By Column( :Salary );

```

### Sentiment Analysis

**Syntaxe :** obj << Sentiment Analysis( state=0|1 )

**Description :** Utilise une analyse lexicale pour identifier les termes de sentiment dans les documents et évalue le sentiment positif, négatif et global des documents.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );

```

### Set Delimiters

**Syntaxe :** obj << Set Delimiters( "string" )

**Description :** Remplace la liste par défaut des caractères séparateurs pour diviser les mots avec les caractères transmis par l&apos;utilisateur dans une chaîne unique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
obj << Set Delimiters( " " );

```

### Set Regex

**Syntaxe :** obj << Set Regex( ... )

**Description :** Remplace les expressions régulières par défaut utilisées dans la méthode Tokénisation de l&apos;expression régulière.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Set Regex( Library( "Words" ) );

```

### Show Delimiters

**Syntaxe :** obj << Show Delimiters( state=0|1 )

**Description :** Affiche ou masque les séparateurs utilisés pour la tokenisation. Cette option est uniquement disponible lorsque la méthode de tokenisation est Mots élémentaires.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
Wait( 1 );
obj << Show Delimiters( 1 );

```

### Show Filters for all Tables

**Syntaxe :** obj << Show Filters for all Tables( state=0|1 )

**Description :** Affiche ou masque des filtres qui peuvent être utilisés pour effectuer des recherches dans les tables du rapport. Cette option s&apos;applique aux tables suivantes : Mots vides, Phrases spécifiées, Exceptions du radical, Liste des termes, Liste des phrases, et Rapport des radicaux.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Filters for All Tables( 1 );

```

### Show Legend

**Syntaxe :** obj << Show Legend( state=0|1 )

**Description :** Affiche ou masque la légende du nuage de mots. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );
Wait( 1 );
obj << Show Legend( 0 );

```

### Show Phrase List

**Syntaxe :** obj << Show Phrase List( state=0|1 )

**Description :** Affiche ou masque le rapport Liste des phrases. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Phrase List( 0 );

```

### Show Recodes

**Syntaxe :** obj << Show Recodes( state=0|1 )

**Description :** Affiche ou masque une liste des termes enregistrés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Recodes( {{"flossing", "floss"}} );
Wait( 1 );
obj << Show Recodes( 1 );

```

### Show Selected Rows

**Syntaxe :** obj << Show Selected Rows

**Description :** Ouvre une fenêtre qui contient le texte des documents qui se trouvent dans les lignes actuellement sélectionnées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
Current Data Table() << Select Rows( [1 2 3 4] );
obj << Show Selected Rows( 1 );

```

### Show Specified Phrases

**Syntaxe :** obj << Show Specified Phrases( state=0|1 )

**Description :** Affiche ou masque une liste des phrases spécifiées par l&apos;utilisateur pour être gérées comme termes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Specified Phrases( 1 );
Report( obj )["Specified Phrases"] << Close( 0 );

```

### Show Stem Exceptions

**Syntaxe :** obj << Show Stem Exceptions( state=0|1 )

**Description :** Affiche ou masque les termes exclus de l&apos;indexation par radicaux.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stem Exceptions( 1 );

```

### Show Stem Report

**Syntaxe :** obj << Show Stem Report( state=0|1 )

**Description :** Affiche ou masque le rapport Indexation par radicaux qui contient deux tables de données des résultats de l&apos;indexation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem for Combining" );
obj << Show Stem Report( 1 );

```

### Show Stop Words

**Syntaxe :** obj << Show Stop Words( state=0|1 )

**Description :** Affiche ou masque une liste de mots vides utilisés dans l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stop Words( 1 );

```

### Show Summary Counts

**Syntaxe :** obj << Show Summary Counts( state=0|1 )

**Description :** Affiche ou masque une table de données des dénombrements de résumé. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Summary Counts( 0 );

```

### Show Term List

**Syntaxe :** obj << Show Term List( state=0|1 )

**Description :** Affiche ou masque le rapport Liste des termes. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term List( 0 );

```

### Show Term and Phrase Options

**Syntaxe :** obj << Show Term and Phrase Options( state=0|1 )

**Description :** Affiche ou masque des boutons dans le rapport Listes des termes et des phrases qui correspondent aux options disponibles dans les menus contextuels pour chaque liste.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term and Phrase Options( 1 );

```

### Show Word Cloud

**Syntaxe :** obj << Show Word Cloud( state=0|1 )

**Description :** Affiche ou masque le nuage de mots.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Word Cloud( 1 );

```

### Stemming

**Syntaxe :** obj = Text Explorer(...Stemming( "Aucune indexation par radicaux"|"Indexer par radicaux pour combiner"|"Indexer tous les termes par radicaux" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une méthode pour combiner les termes avec des caractères de début similaires mais des caractères de fin différents.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem All Terms" );

```

### Term Selection

**Syntaxe :** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )), Model Choice( <index> ))

**Description :** Analyse quels termes expliquent le mieux les différentes réponses. La sélection des termes est également utile pour l&apos;analyse de sentiment lorsque les réponses sont des scores.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Terms Alphabetical

**Syntaxe :** obj << Terms Alphabetical( state=0|1 )

**Description :** Trie la liste des termes par ordre alphabétique. Par défaut, elle est triée par dénombrement décroissant.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Terms Alphabetical( 1 );

```

### Tokenizing

**Syntaxe :** obj = Text Explorer(...Tokenizing( "Expression régulière"|"Mots élémentaires" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une méthode pour analyser le texte en termes ou en tokens. Les méthodes disponibles sont les méthodes Expression régulière et Mots élémentaires.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );

```

### Topic Analysis

**Syntaxe :** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Description :** Réalise une décomposition en valeurs singulières pivotée varimax de la matrice de termes du document pour produire des groupes de termes appelés des rubriques.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### Treat Numbers as Words

**Syntaxe :** obj = Text Explorer(...Treat Numbers as Words( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Considère les mots entièrement composés de chiffres comme des tokens. Disponible uniquement avec la méthode de tokénisation Mots élémentaires.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );
obj << Treat Numbers as Words( 1 );

```

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

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Data Table Window;

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

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
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

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntaxe :** obj << Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

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

### Window View

**Syntaxe :** obj = Text Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Window View( "Private" ),
	Y( :weight ),
	X( :height ),
	Fit Line
);
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit",
		Text Box( eqn, <<Set Base Font( "Title" ) )
	)
);

```

## Discriminant Analysis

### Constructeurs associés

#### Discriminant Analysis

**Syntaxe :** obj << Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**Description :** Prévoit une classification de chaque document en une catégorie d&apos;une colonne de réponse spécifiée à l&apos;aide d&apos;une analyse discriminante linéaire de la matrice de termes du document.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);

```

### Messages d'éléments

#### Canonical Plot

**Syntaxe :** obj << Canonical Plot( state=0|1, N Canon( number ) )

**Description :** Affiche ou masque un graphique des moyennes des documents et des moyennes de groupe dans l&apos;espace canonique. L&apos;espace canonique est l&apos;espace le plus grand entre les groupes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Canonical Plot( 1, N Canon( 3 ) );

```

#### Remove

**Syntaxe :** obj << Remove

**Description :** Supprime le rapport Analyse discriminante de la fenêtre du rapport Explorateur de texte.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
Wait( 1 );
obj2 << Remove;

```

#### Save Canonical Scores

**Syntaxe :** obj << Save Canonical Scores( N Canon( number ) )

**Description :** Enregistre les colonnes dans la table de données contenant les scores de l&apos;espace canonique pour chaque observation. L&apos;espace canonique est l&apos;espace le plus grand entre les groupes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Canonical Scores( N Canon( 3 ) );

```

#### Save Probabilities

**Syntaxe :** obj << Save Probabilities

**Description :** Enregistre une colonne de probabilité dans la table de données, pour chaque niveau de réponse, ainsi qu&apos;une colonne contenant la réponse la plus probable.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**Syntaxe :** obj << Save Probability Formulas

**Description :** Enregistre les colonnes de formule dans la table de données pour la prévision de la réponse la plus probable. Ces colonnes utilisent la fonction Text Score pour calculer la probabilité pour chaque niveau de réponse.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probability Formulas;

```

## LCA Analysis

### Constructeurs associés

#### Latent Class Analysis

**Syntaxe :** obj << Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**Description :** Groupe les documents en clusters de documents semblables à l&apos;aide d&apos;une analyse des classes latentes de la matrice binaire pondérée des termes du document.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### Messages d'éléments

#### Cluster Mixture Probabilities

**Syntaxe :** obj << Cluster Mixture Probabilities( state=0|1 )

**Description :** Affiche ou masque une table des probabilités d&apos;une observation appartenant à chaque cluster. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Mixture Probabilities( 0 );

```

#### Cluster Probabilities by Row

**Syntaxe :** obj << Cluster Probabilities by Row( state=0|1 )

**Description :** Affiche ou masque la table Probabilités de mélange, qui contient les probabilités d&apos;appartenance à un cluster pour chaque ligne. La colonne Cluster le plus probable indique le cluster ayant la plus grande probabilité d&apos;appartenance pour chaque ligne. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Probabilities by row( 0 );

```

#### Color by Cluster

**Syntaxe :** obj << Color by Cluster

**Description :** Colorie chaque ligne de la table de données en fonction de son cluster le plus probable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Color by Cluster;

```

#### MDS Plot

**Syntaxe :** obj << MDS Plot( state=0|1 )

**Description :** Affiche ou masque un graphique de l&apos;échelonnement multidimensionnel, qui est une représentation bidimensionnelle de la proximité des clusters. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << MDS Plot( 0 );

```

#### Remove

**Syntaxe :** obj << Remove

**Description :** Supprime le rapport de l&apos;analyse des classes latentes du rapport Explorateur de texte.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Remove;

```

#### Rename Clusters

**Syntaxe :** obj << Rename Clusters( "name1", "name2", ...  )

**Description :** Vous permet d&apos;ajouter des noms descriptifs à un ou plusieurs clusters.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Rename Clusters( "First", "Second", "Third", "Fourth", "Fifth" );

```

#### Save Probabilities

**Syntaxe :** obj << Save Probabilities

**Description :** Enregistre la probabilité d&apos;appartenance d&apos;un document à chaque cluster dans une colonne séparée de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**Syntaxe :** obj << Save Probability Formulas

**Description :** Enregistre une colonne de formule pour chaque cluster dans la table de données ainsi qu&apos;une colonne de formule pour le cluster le plus probable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probability Formulas;

```

#### Set Random Seed

**Syntaxe :** obj << Latent Class Analysis( Set Random Seed( number ) )

**Description :** Définit une graine aléatoire pour l&apos;analyse.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 ),
	Set Random Seed( 1234 )
);

```

#### Term Probabilities by Cluster

**Syntaxe :** obj << Term Probabilities by Cluster( state=0|1 )

**Description :** Affiche ou masque une table de termes avec une estimation pour chaque cluster. L&apos;estimation est la probabilité conditionnelle qu&apos;un document contienne le terme, sachant que le document appartient à un cluster donné. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Term Probabilities by Cluster( 0 );

```

#### Top Terms by Cluster

**Syntaxe :** obj << Top Terms by Cluster( state=0|1 )

**Description :** Affiche ou masque une table de données des dix termes avec les plus grands scores dans chaque cluster. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Top Terms by Cluster( 0 );

```

#### Word Clouds by Cluster

**Syntaxe :** obj << Word Clouds by Cluster( state=0|1 )

**Description :** Affiche ou masque une matrice de nuages de mots, un pour chaque cluster.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Word Clouds by Cluster( 1 );

```

## SVD Analysis > Topic Analysis

### Constructeurs associés

#### Rotated SVD

**Syntaxe :** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Description :** Réalise une décomposition en valeurs singulières pivotée varimax de la matrice de termes du document pour produire des groupes de termes appelés des rubriques.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### Topic Analysis

**Syntaxe :** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Description :** Réalise une décomposition en valeurs singulières pivotée varimax de la matrice de termes du document pour produire des groupes de termes appelés des rubriques.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### Messages d'éléments

#### Remove

**Syntaxe :** obj << Remove

**Description :** Supprime le rapport Analyse de rubrique du rapport SVD.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Remove;

```

#### Rename Topics

**Syntaxe :** obj << Rename Topics

**Description :** Vous permet d&apos;ajouter des noms descriptifs à une ou plusieurs rubriques.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Rename Topics( "Too Busy", "Less Often", "Difficult", "Bed", "Week" );

```

#### Rotation Matrix

**Syntaxe :** obj << Rotation Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice de rotation pour la rotation varimax.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Rotation Matrix( 1 );
Report( obj )["Rotation Matrix"] << Close( 0 );

```

#### Save Document Topic Vectors

**Syntaxe :** obj << Save Document Topic Vectors

**Description :** Enregistre les vecteurs singuliers de l&apos;analyse des rubriques dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Document Topic Vectors;

```

#### Save Item Topic Vectors

**Syntaxe :** obj << Save Item Topic Vectors

**Description :** Enregistre les vecteurs de rubrique dans une nouvelle table de données Scores de la rubrique Élément.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Item Topic Vectors;

```

#### Save Term Topic Vectors

**Syntaxe :** obj << Save Term Topic Vectors

**Description :** Enregistre les vecteurs de rubrique de l&apos;analyse de rubriques comme colonnes dans une nouvelle table de données. Si une table de données des termes est déjà ouverte, les colonnes sont enregistrées dans cette table.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj << Save Term Table;
obj3 << Save Term Topic Vectors;

```

#### Save Topic Vector Formula

**Syntaxe :** obj << Save Topic Vector Formula

**Description :** Enregistre une formule avec le type de modélisation vectorielle qui contient la décomposition en valeurs singulières pivotée dans la table de données. La colonne résultante utilise la fonction Text Score.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Topic Vector Formula;

```

#### Save Transaction Topic Vectors

**Syntaxe :** obj << Save Transaction Topic Vectors

**Description :** Enregistre un nombre de vecteurs singuliers défini par l&apos;utilisateur depuis la décomposition en valeurs singulières pivotée (vecteurs de rubrique) dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Transaction Topic Vectors;

```

#### Top Loadings by Topic

**Syntaxe :** obj << Top Loadings by Topic( state=0|1 )

**Description :** Affiche ou masque le rapport Principaux loadings par rubrique, qui contient une table de données des termes pour chaque rubrique . Les termes dans chaque table de données sont ceux qui ont les plus grands loadings en valeur absolue pour chaque rubrique. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Top Loadings by Topic( 0 );

```

#### Topic Loadings

**Syntaxe :** obj << Topic Loadings( state=0|1 )

**Description :** Affiche ou masque la table de données Loadings des rubriques, qui contient une matrice des loadings sur l&apos;ensemble des rubriques pour chaque terme. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Loadings"] << Close( 0 );
Wait( 1 );
obj3 << Topic Loadings( 0 );

```

#### Topic Scatterplot Matrix

**Syntaxe :** obj << Topic Scatterplot Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice de nuage de points des vecteurs de la décomposition en valeurs singulières pivotée.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Topic Scatterplot Matrix( 1 );

```

#### Topic Scores

**Syntaxe :** obj << Topic Scores( state=0|1 )

**Description :** Affiche ou masque une matrice de scores dans l&apos;ensemble des rubriques pour chaque document. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores( 0 );

```

#### Topic Scores Plots

**Syntaxe :** obj << Topic Scores Plots( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient un graphique des scores de rubriques pour chaque document. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores Plots"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores Plots( 0 );

```

#### Variance Explained by Each Topic

**Syntaxe :** obj << Variance Explained by Each Topic( state=0|1 )

**Description :** Affiche ou masque une table de données qui contient la variance expliquée par chaque rubrique. La table contient également les colonnes de pourcentage et de pourcentage cumulé de la variation expliquée par chaque rubrique.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Variance Explained by Each Topic( 1 );
Report( obj )["Variance Explained by Each Topic"] << Close( 0 );

```

#### Word Clouds by Topic

**Syntaxe :** obj << Word Clouds by Topic( state=0|1 )

**Description :** Affiche ou masque une matrice de nuages de mots, un pour chaque rubrique.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Word Clouds by Topic( 1 );
Report( obj )["Word Clouds by Topic"] << Close( 0 );

```

## SVD Analysis

### Constructeurs associés

#### Latent Semantic Analysis

**Syntaxe :** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Description :** Effectue une décomposition parcimonieuse en valeurs singulières de la matrice de termes du document.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

#### SVD

**Syntaxe :** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Description :** Effectue une décomposition parcimonieuse en valeurs singulières de la matrice de termes du document.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

### Messages d'éléments

#### Cluster Documents

**Syntaxe :** obj << Cluster Documents( state=0|1 )

**Description :** Affiche ou masque une analyse de classification hiérarchique des documents dans les données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Cluster Documents( 1 );

```

#### Cluster Items

**Syntaxe :** obj << Cluster Items( state=0|1 )

**Description :** Affiche ou masque une analyse de classification hiérarchique des termes dans les données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Items( 1 );

```

#### Cluster Terms

**Syntaxe :** obj << Cluster Terms( state=0|1 )

**Description :** Affiche ou masque une analyse de classification hiérarchique des termes dans les données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << obj << Cluster Terms( 1 );

```

#### Cluster Transactions

**Syntaxe :** obj << Cluster Transactions( state=0|1 )

**Description :** Affiche ou masque une analyse de classification hiérarchique des documents dans les données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Transactions( 1 );

```

#### Remove

**Syntaxe :** obj << Remove

**Description :** Supprime le rapport SVD de la fenêtre du rapport Explorateur de texte.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
Wait( 1 );
obj2 << Remove;

```

#### Rotated SVD

**Syntaxe :** obj << Topic Analysis( Number of Topics ( number ) )   

obj << Rotated SVD( Number of Topics( number ) )

**Description :** Réalise une décomposition en valeurs singulières pivotée varimax de la matrice de termes du document pour produire des groupes de termes appelés des rubriques.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### SVD Scatterplot Matrix

**Syntaxe :** obj << SVD Scatterplot Matrix( state=0|1, Number of Vectors( number ) )

**Description :** Affiche ou masque une matrice de nuage de points des vecteurs de la décomposition en valeurs singulières du terme et du document pour chaque graphique SVD.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << SVD Scatterplot Matrix( 1, Number of Vectors( 8 ) );

```

#### Save Document Singular Vectors

**Syntaxe :** obj << Save Document Singular Vectors(number)

**Description :** Enregistre le nombre de vecteurs singuliers spécifié depuis la décomposition en valeurs singulières du document dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Document Singular Vectors( 5 );

```

#### Save Item SVD

**Syntaxe :** obj << Save Item SVD

**Description :** Crée une table de données qui contient un nombre de vecteurs singuliers que vous spécifiez pour chaque élément. Il s&apos;agit des valeurs singulières de droite dans la matrice des éléments de transaction.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item SVD( 5 );

```

#### Save Item Singular Vectors

**Syntaxe :** obj << Save Item Singular Vectors

**Description :** Crée une table de données qui contient un nombre de vecteurs singuliers que vous spécifiez pour chaque élément. Il s&apos;agit des valeurs singulières de droite dans la matrice des éléments de transaction.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item Singular Vectors( 5 );

```

#### Save Singular Vector Formula

**Syntaxe :** obj << Save Singular Vector Formula

**Description :** Enregistre une colonne de formule de valeurs de vecteurs qui contient la décomposition en valeurs singulières dans la table de données. La colonne de formule utilise la fonction Text Score.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Singular Vector Formula;

```

#### Save Term Singular Vectors

**Syntaxe :** obj << Save Term Singular Vectors( number )

**Description :** Enregistre le nombre spécifié de vecteurs singuliers depuis la décomposition en valeurs singulières des termes sous la forme de colonnes d&apos;une nouvelle table de données. Chaque ligne correspond à un terme. Si une table de termes est déjà ouverte, les colonnes sont alors enregistrées dans cette table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Term Singular Vectors( 5 );

```

#### Save Transaction SVD

**Syntaxe :** obj << Save Transaction SVD

**Description :** Crée une table de données qui contient un nombre de vecteurs singuliers que vous spécifiez pour chaque transaction. Il s&apos;agit des valeurs singulières de gauche dans la matrice des éléments de transaction.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction SVD( 5 );

```

#### Save Transaction Singular Vectors

**Syntaxe :** obj << Save Transaction Singular Vectors

**Description :** Crée une table de données qui contient un nombre de vecteurs singuliers que vous spécifiez pour chaque transaction. Il s&apos;agit des valeurs singulières de gauche dans la matrice des éléments de transaction.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction Singular Vectors( 5 );

```

#### Select Near Neighbors

**Syntaxe :** obj << Select Near Neighbors( number=10 )

**Description :** Recherche et sélectionne les k plus proches voisins des points sélectionnés dans le graphique SVD du document. "10" par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
dt << Select Rows( [102, 237] );
obj2 << Select Near Neighbors( 8 );

```

#### Topic Analysis

**Syntaxe :** obj << Topic Analysis( Number of Topics ( number ) )   

obj << Rotated SVD( Number of Topics( number ) )

**Description :** Réalise une décomposition en valeurs singulières pivotée varimax de la matrice de termes du document pour produire des groupes de termes appelés des rubriques.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

## Sentiment Analysis

### Constructeurs associés

#### Sentiment Analysis

**Syntaxe :** Sentiment Analysis( state=0|1 )

**Description :** Utilise une analyse lexicale pour identifier les termes de sentiment dans les documents et évalue le sentiment positif, négatif et global des documents.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );

```

### Messages d'éléments

#### Add Feature Words

**Syntaxe :** obj << Add Feature Words( list )

**Description :** Ajoute une liste de mots à évaluer comme fonctions.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
sent << Add Feature Words( {"floss"} );

```

#### Add Intensifier Exception Words

**Syntaxe :** obj << Add Intensifier Exception Words( list )

**Description :** Ajoute une liste de termes intensificateurs à supprimer de l&apos;analyse.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Exception Words( {"almost"} );

```

#### Add Intensifier Words

**Syntaxe :** obj << Add Intensifier Words( {{<word, multiplier>}, {<word>, <multiplier>}, ... } )

**Description :** Ajoute une liste de mots à utiliser comme termes intensificateurs dans l&apos;analyse. Les multiplicateurs sont des nombres à virgule flottante se trouvant généralement dans l&apos;intervalle [-2, 2].

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Words( {{"extreme", 1.8}, {"extremely", 1.8}} );

```

#### Add Negation Exception Words

**Syntaxe :** obj << Add Negation Exception Words( list )

**Description :** Ajoute une liste de termes de négation à supprimer de l&apos;analyse.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Exception Words( {"without"} );

```

#### Add Negation Words

**Syntaxe :** obj << Add Negation Words( list )

**Description :** Ajoute une liste de mots à utiliser comme termes de négation dans l&apos;analyse.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Words( {"dont"} );

```

#### Add Sentiment Exception Words

**Syntaxe :** obj << Add Sentiment Exception Words( list )

**Description :** Ajoute une liste de termes de sentiment à supprimer de l&apos;analyse.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Exception Words( {"easy"} );

```

#### Add Sentiment Words

**Syntaxe :** obj << Add Sentiment Words( {{<word>, <score>}, {<word>, <score>}, ... } )

**Description :** Ajoute une liste de mots à utiliser comme termes de sentiment dans l&apos;analyse. Les scores sont des nombres entiers dans l&apos;intervalle [-100, 100].

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Words( {{"difficult", -70}, {"necessary", -20}} );

```

#### Include Builtin Intensifier Terms

**Syntaxe :** obj << Include Builtin Intensifier Terms( state=0|1 )

**Description :** Spécifie que les termes intensificateurs intégrés sont inclus dans les termes intensificateurs utilisés pour l&apos;analyse de sentiment. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Intensifier Terms( 0 );

```

#### Include Builtin Negation Terms

**Syntaxe :** obj << Include Builtin Negation Terms( state=0|1 )

**Description :** Spécifie que les termes de négation intégrés sont inclus dans les termes de négation utilisés pour l&apos;analyse de sentiment. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Negation Terms( 0 );

```

#### Include Builtin Sentiment Terms

**Syntaxe :** obj << Include Builtin Sentiment Terms( state=0|1 )

**Description :** Spécifie que les termes de sentiment intégrés sont inclus dans les termes de sentiment utilisés pour l&apos;analyse de sentiment. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Sentiment Terms( 0 );

```

#### Parse Documents

**Syntaxe :** obj << Parse Documents( state=0|1 )

**Description :** Spécifie que le traitement automatique du langage naturel (TALN) est utilisé pour analyser les documents. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Parse Documents( 0 );

```

#### Save Count of Sentiment Scores by Document

**Syntaxe :** obj << Save Count of Sentiment Scores by Document

**Description :** Enregistre une colonne dans la table de données pour chaque terme de sentiment. Chaque colonne contient les dénombrements des occurrences de chaque terme de sentiment dans chaque document.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
sent << Save Count of Sentiment Scores by Document;

```

#### Save Document Scores

**Syntaxe :** obj << Save Document Scores

**Description :** Enregistre les scores des documents dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
sent << Save Document Scores;

```

#### Score Column

**Syntaxe :** obj << Score Column( column )

**Description :** Spécifie une colonne qui contient des informations connues à comparer avec le sentiment calculé.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
sent << Score Column( :Gender );

```

#### Scoring

**Syntaxe :** obj << Scoring( "Réduit(e)"|"Minimum Maximum" )

**Description :** Définit le style d&apos;évaluation pour calculer le score global des documents. L&apos;option Mis à l&apos;échelle fait la somme des scores des phrases positives et négatives, puis divise la somme par le nombre de phrases. L&apos;option Min Max est calculée comme la somme du score positif maximum et du score négatif minimum.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Scoring( "Min Max" );

```

#### Show Feature Finder

**Syntaxe :** obj << Show Feature Finder( state=0|1 )

**Description :** Affiche ou masque un rapport vous permettant de découper le sentiment selon des caractéristiques sélectionnées. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Features"] << Close( 0 );
Wait( 2 );
sent << Show Feature Finder( 0 );

```

#### Show Intensifier Terms

**Syntaxe :** obj << Show Intensifier Terms( state=0|1 )

**Description :** Affiche ou masque la table des termes intensificateurs. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Intensifier Terms"] << Close( 0 );
Wait( 2 );
sent << Show Intensifier Terms( 0 );

```

#### Show Negation Terms

**Syntaxe :** obj << Show Negation Terms( state=0|1 )

**Description :** Affiche ou masque la table des termes de négation. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Negation Terms"] << Close( 0 );
Wait( 2 );
sent << Show Negation Terms( 0 );

```

#### Show Sentiment Cloud

**Syntaxe :** obj << Show Sentiment Cloud( state=0|1 )

**Description :** Affiche ou masque le nuage de mots des phrases de sentiment.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
sent << Show Sentiment Cloud( 1 );

```

#### Show Sentiment Terms

**Syntaxe :** obj << Show Sentiment Terms( state=0|1 )

**Description :** Affiche ou masque la table des termes de sentiment. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Sentiment Terms"] << Close( 0 );
Wait( 2 );
sent << Show Sentiment Terms( 0 );

```

## Term Selection

### Constructeurs associés

#### Term Selection

**Syntaxe :** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )), Model Choice( <index> ))

**Description :** Analyse quels termes expliquent le mieux les différentes réponses. La sélection des termes est également utile pour l&apos;analyse de sentiment lorsque les réponses sont des scores.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Messages d'éléments

#### Model Choice

**Syntaxe :** obj << Term Selection( Model Choice(<index>) )

**Description :** Spécifie le modèle actuel pour la zone de résumé.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Models

**Syntaxe :** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )))

**Description :** Spécifie les informations nécessaires pour générer un modèle.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Remove

**Syntaxe :** obj << Remove

**Description :** Supprime le rapport Sélection des termes de la fenêtre du rapport Explorateur de texte.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
Wait( 1 );
term << Remove;

```

#### Save Document Scores

**Syntaxe :** obj << Save Document Scores

**Description :** Enregistre les scores des documents dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Document Scores;

```

#### Save Prediction Formulas

**Syntaxe :** obj << Save Prediction Formulas

**Description :** Enregistre des colonnes dans la table de données qui contiennent les formules de prévision pour l&apos;analyse actuellement sélectionnée.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Prediction Formulas;

```

#### Save Term Score DTM

**Syntaxe :** obj << Save Term Score DTM

**Description :** Enregistre des colonnes dans la table de données pour chaque terme pertinent dans l&apos;analyse actuellement sélectionnée.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Term Score DTM;

```

#### Show Term Cloud

**Syntaxe :** obj << Show Term Cloud( state=0|1 )

**Description :** Affiche ou masque un nuage de mots des termes de coefficient.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Language( "English" )
);
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Show Term Cloud;

```

