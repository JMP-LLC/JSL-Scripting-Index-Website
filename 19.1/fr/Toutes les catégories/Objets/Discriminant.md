# Discriminant



## Colonnes

### By

**Syntaxe :** obj = Discriminant(...&lt;By( column(s) )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Categories

**Syntaxe :** obj = Discriminant(...Categories( column )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la colonne qui contient les catégories ou groupes dans lesquels les observations doivent être classées.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Covariates

**Syntaxe :** obj = Discriminant(...Covariates( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les colonnes qui contiennent des variables continues utilisées pour classifier les observations en catégories.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Freq

**Syntaxe :** obj = Discriminant(...&lt;Freq( column )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Freq( :_freqcol ));

```

### Validation

**Syntaxe :** obj = Discriminant(...&lt;Validation( column )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une colonne numérique qui définit les échantillons de validation. Cette colonne doit contenir au maximum trois valeurs distinctes.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );obj = dt << Discriminant(	X( :Severity ),	Validation( :Validation ),	Y( :BMI, :Age, :Time ),	Use Matrix Columns( 1 ));

```

### Weight

**Syntaxe :** obj = Discriminant(...&lt;Weight( column )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Weight( :_weightcol ));

```

### X

**Syntaxe :** obj = Discriminant(...X( column )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la colonne qui contient les catégories ou groupes dans lesquels les observations doivent être classées.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Y

**Syntaxe :** obj = Discriminant(...Y( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les colonnes qui contiennent des variables continues utilisées pour classifier les observations en catégories.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## Constructeurs associés

### Discriminant

**Syntaxe :** Discriminant( Y( columns ), X( columns ) )

**Description :** Estime la distance entre chaque observation et la moyenne multivariée (centroïde) de chaque groupe à l&apos;aide de la distance de Mahalanobis. Les observations sont ensuite classées dans le groupe le plus proche.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## Messages d'éléments

### Apply This Model

**Syntaxe :** obj &lt;&lt; Apply This Model

**Description :** Applique la sélection de variables actuelle au modèle dans la sélection de variables par régression pas à pas puis ferme la boîte de dialogue.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Step Forward;Wait( 2 );obj << Apply This Model;

```

### Biplot Ray Position

**Syntaxe :** obj &lt;&lt; Biplot Ray Position( [x position, y position, radius scaling] )

**Description :** Vous permet de spécifier la position et la mise à l&apos;échelle de rayon des rayons du biplot dans le graphique canonique et le graphique 3D canonique.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Biplot Ray Position( [0, 1.7, 3.5] );

```

### Canonical 3D Plot

**Syntaxe :** obj &lt;&lt; Canonical 3D Plot( state=0|1 )

**Description :** Affiche ou masque une version tridimensionnelle du diagramme canonique. Remarque : disponible uniquement lorsqu&apos;il y a quatre groupes ou plus.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );obj = dt << Discriminant(	X( :location name ),	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ));obj << Canonical 3D Plot( 1 );(obj << report)["Discriminant Scores"] << Close( 1 );

```

### Canonical Plot

**Syntaxe :** obj &lt;&lt; Canonical Plot( state=0|1 )

**Description :** Affiche ou masque le graphique canonique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Canonical Plot( 1 );

```

### Color Points

**Syntaxe :** obj &lt;&lt; Color Points

**Description :** Colorie les points dans le graphique canonique et le graphique 3D canonique en fonction des niveaux de la variable X. Les marqueurs de couleur sont ajoutés aux lignes dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));dt << Clear Row States;Wait( 2 );obj << Color Points;

```

### Consider New Levels

**Syntaxe :** obj &lt;&lt; Consider New Levels( fraction )

**Description :** Spécifie que certains points ne peuvent être ajustés dans aucun groupe connu et doivent être considérés comme appartenant à un nouveau groupe sans score. Entrez la probabilité par défaut d&apos;un nouveau niveau.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Consider New Levels( 0.05 );

```

### Cross Validate by Excluded Rows

**Syntaxe :** obj = Discriminant(...Cross Validate by Excluded Rows( state=0 )...)

**Description :** Spécifie que les lignes exclues forment un ensemble de validation pour lequel les statistiques d&apos;ajustement seront calculées. "0" par défaut.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

### Discriminant Method

**Syntaxe :** obj &lt;&lt; Discriminant Method( Linear ); obj &lt;&lt; Discriminant Method( Quadratic ); obj &lt;&lt; Discriminant Method( Regularized, Regularization Lambda( fraction ), Regularization Gamma( fraction ) ); obj &lt;&lt; Discriminant Method( Wide Linear ) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode discriminante.

L&apos;option Regularized requiert des arguments supplémentaires. Le paramètre Regularization Lambda varie de 0 (analyse discriminante quadratique) à 1 (analyse discriminante linéaire). Le paramètre Regularization Gamma varie de 0 (pas de réduction) à 1 (diagonales uniquement).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Discriminant Method(	Regularized,	Regularization Lambda( 0.2 ),	Regularization Gamma( 0.6 ));

```

### Discriminant Scores

**Syntaxe :** obj &lt;&lt; Discriminant Scores( state=0|1 )

**Description :** Affiche ou masque un tableau des scores discriminants pour chaque ligne. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Discriminant Scores( 1 );

```

### Enter All

**Syntaxe :** obj &lt;&lt; Enter All

**Description :** Ajoute toutes les variables au modèle dans la sélection de variables par régression pas à pas.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;

```

### Get Discrim Matrices

**Syntaxe :** obj &lt;&lt; Get Discrim Matrices

**Description :** Renvoie une liste contenant les matrices discriminantes issues de l&apos;analyse. La liste contient une liste nommée pour chaque élément suivant : les noms Y, les noms X, les valeurs X, les moyennes Y.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));z = obj << Get Discrim Matrices;Show( z );

```

### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Get Measures;

```

### Go

**Syntaxe :** obj &lt;&lt; Go

**Description :** Entre les covariables en pas Forward jusqu&apos;à ce qu&apos;il n&apos;y ait plus d&apos;amélioration possible en R carré.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Go;

```

### Make Scoring Script

**Syntaxe :** obj &lt;&lt; Make Scoring Script

**Description :** Crée un script qui construit les colonnes de formule enregistrées avec l&apos;option Enregistrer les formules. Vous pouvez enregistrer ce script et l&apos;utiliser, en combinaison avec d&apos;autres tables de données si vous le souhaitez, pour créer les colonnes de formule qui calculent les probabilités d&apos;appartenance et prévoient l&apos;appartenance de groupe.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Make Scoring Script;

```

### Precision Recall Curve

**Syntaxe :** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Description :** Affiche ou masque la courbe précision-rappel, qui contient une courbe pour chaque niveau de la variable de réponse. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel pour différents seuils.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Precision Recall Curve( 1 );

```

### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Profiler;

```

### Publish Probability Formulas

**Syntaxe :** obj &lt;&lt; Publish Probability Formulas

**Description :** Crée des formules de probabilité et les enregistre comme scripts de colonne de formule dans la plate-forme de dépôt des formules. Si un rapport de dépôt des formules n&apos;est pas ouvert, cette option en crée un nouveau.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Publish Probability Formulas;

```

### ROC Curve

**Syntaxe :** obj &lt;&lt; ROC Curve( state=0|1 )

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));Wait( 0 );obj << ROC Curve( 1 );

```

### Remove All

**Syntaxe :** obj &lt;&lt; Remove All

**Description :** Supprime toutes les variables du modèle dans la sélection de variables par régression pas à pas.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;Wait( 2 );obj << Remove All;

```

### Save Canonical Scores

**Syntaxe :** obj &lt;&lt; Save Canonical Scores

**Description :** Enregistre les colonnes dans la table de données, contenant les formules de score canonique pour chaque observation.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Canonical Scores;

```

### Save Discrim Matrices

**Syntaxe :** obj &lt;&lt; Save Discrim Matrices

**Description :** Enregistre un script dans la table de données contenant une liste des matrices discriminantes issues de l&apos;analyse. La liste contient une liste nommée pour chaque élément suivant : les noms Y, les noms X, les valeurs X, les moyennes Y.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Discrim Matrices;

```

### Save Formulas

**Syntaxe :** obj &lt;&lt; Save Formulas

**Description :** Enregistre les formules de distance, de probabilité et d&apos;appartenance prévue dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Formulas;

```

### Save To New Data Table

**Syntaxe :** obj &lt;&lt; Save To New Data Table

**Description :** Enregistre les moyennes de groupe et les rayons du biplot concernant les variables canoniques, ainsi que les scores canoniques, dans une nouvelle table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save To New Data Table;

```

### Scatterplot Matrix

**Syntaxe :** obj &lt;&lt; Scatterplot Matrix

**Description :** Ouvre un rapport Matrice de graphiques de nuages de points qui affiche une matrice avec un nuage de points pour chaque paire de covariables. L&apos;option fait appel à la plate-forme Matrice de graphiques de nuages de points avec des ellipses de densité ombrées pour chaque groupe. Les nuages de points incluent toutes les observations dans la table de données, même si la validation est utilisée.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Scatterplot Matrix( 1 );

```

### Score Data

**Syntaxe :** obj &lt;&lt; Score Data( state=0|1 )

### Select Misclassified Rows

**Syntaxe :** obj &lt;&lt; Select Misclassified Rows

**Description :** Sélectionne les lignes mal classées dans la table de données et dans les fenêtres de rapport qui affichent un listing par ligne.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );obj << Select Misclassified Rows;

```

### Select Uncertain Rows

**Syntaxe :** obj &lt;&lt; Select Uncertain Rows( fraction )

**Description :** Sélectionne les lignes ayant des classifications incertaines dans la table de données et dans les fenêtres de rapport qui affichent un listing par ligne. Une ligne incertaine a une probabilité d&apos;appartenance à un groupe qui n&apos;approche ni 0 ni 1 pour aucun groupe. L&apos;argument fraction représente la différence entre la probabilité et 0 ou 1 pour définir les lignes comme incertaines.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );obj << Select Uncertain Rows( 0.2 );

```

### Show Biplot Rays

**Syntaxe :** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**Description :** Affiche ou masque les rayons du biplot dans le graphique canonique et le graphique 3D canonique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Biplot Rays( 1 );

```

### Show Canonical Details

**Syntaxe :** obj &lt;&lt; Show Canonical Details( state=0|1 )

**Description :** Affiche ou masque le rapport des détails canoniques.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Canonical Details( 1 );

```

### Show Canonical Structure

**Syntaxe :** obj &lt;&lt; Show Canonical Structure( state=0|1 )

**Description :** Affiche ou masque le rapport des structures canoniques.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Canonical Structure( 1 );

```

### Show Canonical Structures

**Syntaxe :** obj &lt;&lt; Show Canonical Structures( state=0|1 )

### Show Classification Counts

**Syntaxe :** obj &lt;&lt; Show Classification Counts( state=0|1 )

**Description :** Affiche ou masque les matrices de confusion, qui indiquent les dénombrements réels par rapport aux dénombrements prévus, dans le rapport des résumés des scores. Par défaut, ce rapport affiche une matrice de confusion pour chaque niveau du X catégoriel.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Classification Counts( 1 );

```

### Show Distances to Each Group

**Syntaxe :** obj &lt;&lt; Show Distances to Each Group( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient le carré de la distance de Mahalanobis de chaque observation à la moyenne de chaque groupe.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Distances to each group( 1 );

```

### Show Group Means

**Syntaxe :** obj &lt;&lt; Show Group Means( state=0|1 )

**Description :** Affiche ou masque le rapport des moyennes du groupe qui affiche la moyenne de chaque covariable, ainsi que les moyennes pour chaque niveau de la variable X et les grandes moyennes.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Group Means( 1 );

```

### Show Interesting Rows Only

**Syntaxe :** obj &lt;&lt; Show Interesting Rows Only( state=0|1 )

**Description :** Dans le rapport des scores discriminants, affiche uniquement les lignes mal classées et les lignes dont la probabilité prévue est comprise entre 0,05 et 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );

```

### Show Means CL Ellipses

**Syntaxe :** obj &lt;&lt; Show Means CL Ellipses( state=0|1 )

**Description :** Affiche ou masque les ellipses de confiance à 95 % pour la moyenne de chaque groupe sur le graphique canonique et le graphique 3D canonique, en supposant la normalité. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Means CL Ellipses( 1 );

```

### Show Normal 50% Contours

**Syntaxe :** obj &lt;&lt; Show Normal 50% Contours( state=0|1 )

**Description :** Affiche ou masque la région de l&apos;ellipse normale dont on estime qu&apos;elle contient 50 % de la population de chaque groupe sur le graphique canonique et le graphique 3D canonique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Normal 50% Contours( 1 );

```

### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique canonique et le graphique 3D canonique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Points( 1 );

```

### Show Probabilities to Each Group

**Syntaxe :** obj &lt;&lt; Show Probabilities to Each Group( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient la probabilité qu&apos;une observation appartienne à chaque groupe défini par le X catégoriel.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Probabilities to each group( 1 );

```

### Show Within Covariances

**Syntaxe :** obj &lt;&lt; Show Within Covariances( state=0|1 )

**Description :** Affiche ou masque les rapports liés aux matrices de covariance. Les rapports affichés dépendent de la méthode discriminante spécifiée. Non disponible pour la méthode discriminante linéaire en grande dimension.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Within Covariances( 1 );

```

### Shrink Covariances

**Syntaxe :** obj = Discriminant(...Shrink Covariances( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Réduit les éléments hors diagonale de la matrice de covariance intra-groupe groupée et des matrices de covariance intra-groupe. Cela permet d&apos;améliorer la stabilité et de réduire la variance des prévisions.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Shrink Covariances( 1 ));

```

### Specify Priors

**Syntaxe :** obj &lt;&lt; Specify Priors( Equal Probabilities | Proportional to Occurrence | [matrix of priors] )

**Description :** Définit les probabilités a priori pour chaque niveau de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );obj = dt << Discriminant(	X( :location name ),	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ));obj << Specify Priors( Proportional to Occurrence );

```

### Step Backward

**Syntaxe :** obj &lt;&lt; Step Backward

**Description :** Recule d&apos;un pas dans la sélection de variables par régression pas à pas en supprimant une variable du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;Wait( 2 );obj << Step Backward;

```

### Step Forward

**Syntaxe :** obj &lt;&lt; Step Forward

**Description :** Avance d&apos;un pas dans la sélection de variables par régression pas à pas en ajoutant une variable au modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Step Forward;

```

### Stepwise Variable Selection

**Syntaxe :** obj = Discriminant(...Stepwise Variable Selection( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Affiche ou masque le panneau de contrôle Sélection de colonnes. Ce panneau de contrôle contient les options qui vous permettent d&apos;effectuer la sélection de variable pas à pas en utilisant l&apos;analyse de covariance et les p-valeurs. Cette option n&apos;est pas disponible pour la méthode linéaire en grande dimension.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );

```

### Uncentered Canonical

**Syntaxe :** obj = Discriminant(...Uncentered Canonical( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Supprime le centrage des scores canoniques pour maintenir la compatibilité avec les versions antérieures de JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Uncentered Canonical( 1 ));

```

### Use Matrix Columns

**Syntaxe :** obj &lt;&lt; Use Matrix Columns( state=0|1 )

**Description :** Spécifie l&apos;utilisation des colonnes de matrice dans les calculs. Les colonnes de la matrice peuvent réduire la surcharge dans le calcul des prévisions du score dans les colonnes de formule.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Use Matrix Columns( 1 ));

```

### Use Pseudoinverses

**Syntaxe :** obj = Discriminant(...Use Pseudoinverses( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Utilise les pseudoinverses de Moore-Penrose dans l&apos;analyse lorsque la matrice de covariance est singulière. Les scores trouvés impliquent toutes les covariables. Si décoché, l&apos;analyse ne prend pas en compte les covariables qui sont des combinaisons linéaires de covariables précédentes dans la liste Y, covariables. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Use Pseudoinverses( 0 ));

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

#### Préconfiguration anonyme

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Rechercher dans les dossiers

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Rechercher par nom

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Discriminant(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

