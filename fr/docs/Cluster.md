# Cluster



## Hierarchical Cluster

### Add Spatial Measures

**Syntaxe :** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Vous permet de sélectionner et pondérer les composantes spatiales pour faciliter la classification des signatures défectueuses. Disponible uniquement si les données sont empilées dans la structure de données spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Defects ),
	Object ID( :Lot, :Wafer ),
	Attribute ID( :X_Die, :Y_Die ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 12 ),
	g
    Add Spatial Measures(
		Attributes( 1 ),
		Angle( 1 ),
		Radius( 1 ),
		Streak Angle( 1 ),
		Streak Distance( 1 )
	)
);

```

### By

**Syntaxe :** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	By( _bycol )
);

```

### Cluster Criterion

**Syntaxe :** obj << Cluster Criterion( state=0|1 )

**Description :** Affiche ou masque le critère de classification cubique (CCC) pour l&apos;étendue complète du nombre de clusters. Le CCC sert à estimer le nombre de clusters. Des valeurs supérieures indiquent un meilleur ajustement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Cluster Criterion
);

```

### Cluster Summary

**Syntaxe :** obj << Cluster Summary( state=0|1 )

**Description :** Affiche ou masque un résumé des statistiques pour chacun des clusters spécifiés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Cluster Summary
);

```

### Clustering History

**Syntaxe :** obj << Clustering History( state=0|1 )

**Description :** Affiche ou masque l&apos;historique d&apos;agglomération dans l&apos;ordre des jointures. La table contient les distances triées du plus proche au plus lointain. Actif par défaut.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Clustering History( 0 )
);

```

### Color Clusters

**Syntaxe :** obj << Color Clusters( state=0|1 )

**Description :** Colorie les lignes et les étiquettes du dendrogramme selon l&apos;appartenance au cluster. Les couleurs sont mises à jour quand le nombre de clusters est modifié.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Clusters( 1 );

```

### Color Map

**Syntaxe :** obj << Color Map

**Description :** Affiche ou masque une palette de couleurs à côté du dendrogramme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Map( Green to Black to Red );
Wait( 1 );
obj << Color Map( Blue to Gray to Red );

```

### Column Cluster Criterion

**Syntaxe :** obj << Column Cluster Criterion( state=0|1 )

### Column Dendrogram Position

**Syntaxe :** obj << Column Dendrogram Position( "Au-dessous"|"Au-dessus" )

**Description :** Change la position du dendrogramme pour les colonnes quand la classification à double entrée est utilisée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Column Dendrogram Position( "Above" )
);

```

### Column Label Position

**Syntaxe :** obj << Column Label Position( "Au-dessous"|"Au-dessus" )

**Description :** Change la position des étiquettes sur le dendrogramme pour les colonnes quand la classification à deux facteurs est utilisée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Distance Graph( 0 ),
	Column Label Position( "Above" )
);

```

### Constellation Plot

**Syntaxe :** obj << Constellation Plot( state=0|1 )

**Description :** Affiche ou masque un autre mode de présentation des informations dans le dendogramme de classification hiérarchique. Chaque observation (ligne) est représentée par une extrémité et chaque jointure de cluster est représentée par un nouveau point. Les lignes dessinées représentent l&apos;appartenance au cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );

```

### Dendrogram Scale

**Syntaxe :** obj << Dendrogram Scale( "Échelle de distance"|"Espacement régulier"|"Espacement géométrique" )

**Description :** Spécifie l&apos;échelle du dendrogramme. L&apos;option Espacement régulier permet d&apos;obtenir des espaces réguliers entre les branches du dendrogramme. L&apos;option Espacement géométrique permet d&apos;augmenter l&apos;espacement entre les branches de façon géométrique en remontant l&apos;arbre du dendrogramme. L&apos;option Échelle de distance utilise un espacement des branches proportionnel aux distances.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Dendrogram Scale( Geometric Spacing );

```

### Dendrogram Width

**Syntaxe :** obj << Dendrogram Width( number=min(max(256,n*3),500) )

**Description :** La largeur du cadre du dendrogramme pour la classification des lignes. "min(max(256,n*3),500)" par défaut.

### Distance Graph

**Syntaxe :** obj << Distance Graph( state=0|1 )

**Description :** Affiche ou masque un graphique qui indique la distance passée à chaque jointure de cluster. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Distance Graph( 0 )
);
Wait( 1 );
obj << Distance Graph( 1 );

```

### Get Clusters

**Syntaxe :** obj << Get Clusters

**Description :** Renvoie un vecteur des affectations de cluster pour chaque ligne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);
c = obj << Get Clusters;
Show( c );

```

### Get Column Display Order

**Syntaxe :** obj << Get Column Display Order

**Description :** Renvoie un vecteur de la position d&apos;affichage de chaque colonne dans une classification à double entrée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane,
		:"1-Octanol"n
	),
	Twoway Clustering
);
rowOrder = obj << Get Column Display Order;

```

### Get Column Names

**Syntaxe :** obj << Get Column Names

**Description :** Renvoie les noms de colonne dans l&apos;ordre des clusters après une classification à double entrée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country )
);
c = obj << Get Column Names;
Show( c );

```

### Get Display Order

**Syntaxe :** obj << Get Display Order

**Description :** Renvoie un vecteur de la position d&apos;affichage de chaque ligne dans le cluster, avec les valeurs manquantes correspondant aux lignes non affichées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane,
		:"1-Octanol"n
	)
);
rowOrder = obj << Get Display Order;

```

### Get Distance Matrix

**Syntaxe :** obj << Get Distance Matrix

**Description :** Renvoie la matrice de distance utilisée pour la classification hiérarchique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Number of Clusters( 8 )
);
m = obj << Get Distance Matrix;
Show( m );

```

### Hierarchical Cluster

**Syntaxe :** Hierarchical Cluster( Y( columns ) )

**Description :** Classe les lignes sur la base des variables continues ou catégorielles. La classification hiérarchique traite d&apos;abord chaque ligne comme étant son propre cluster, puis combine successivement deux clusters à la fois.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country )
);

```

### Hybrid Cycles

**Syntaxe :** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre minimum de cycles de jointure des proches voisins exécutés avant de passer à la routine de classification hiérarchique. "30" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Cycles( 20 )
);

```

### Hybrid Goal

**Syntaxe :** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre maximum de clusters autorisés avant de passer à la routine de classification hiérarchique. Lorsque la routine de classification hiérarchique démarre, le nombre de clusters doit être inférieur ou égal à la cible hybride. "400" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Goal( 300 )
);

```

### Hybrid Initial K

**Syntaxe :** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre initial de voisins utilisés dans les cycles de jointure des proches voisins. Le nombre de voisins peut augmenter ou diminuer en fonction du nombre de proches voisins uniques dans le cycle précédent. "10" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Initial K( 8 )
);

```

### Hybrid Log Details

**Syntaxe :** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie si le statut et les minutages de chaque état de la méthode de Ward hybride doivent être affichés dans le registre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Log Details( 1 )
);

```

### Hybrid RandomPCA Dim

**Syntaxe :** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre de dimensions à utiliser dans la technique de réduction de dimension ACP randomisée. Cette technique est utilisée lorsque la valeur de la dim. ACP aléatoire hybride est supérieure à zéro et permet d&apos;obtenir des améliorations de la vitesse. "0" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid RandomPCA Dim( 3 )
);

```

### Late Join Outliers

**Syntaxe :** obj << Late Join Outliers( state=0|1 )

**Description :** Affiche ou masque un rapport sur lequel les éléments sont classifiés très tard dans l&apos;agglomération.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Late Join Outliers( 1 )
);

```

### Legend

**Syntaxe :** obj << Legend( state=0|1 )

**Description :** Affiche ou masque une légende pour la palette de couleurs à droite du dendrogramme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Map( Blue to Gray to Red )
);
obj << Legend( 1 );

```

### Mark Clusters

**Syntaxe :** obj << Mark Clusters( state=0|1 )

**Description :** Affecte les marqueurs aux lignes de la table de données correspondant au cluster auquel les lignes appartiennent. Les marqueurs sont mis à jour si vous modifiez le nombre de clusters. Si vous désélectionnez cette option, les marqueurs ne seront plus mis à jour en fonction du nombre de clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Mark Clusters;

```

### Method

**Syntaxe :** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" )

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la méthode de distance utilisée pour former les clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Method( "Complete" )
);

```

### Missing value imputation

**Syntaxe :** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Saisit les valeurs manquantes en utilisant l&apos;imputation SVD multivariée ou normale multivariée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Missing value imputation( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 6 )
);

```

### More Color Map Columns

**Syntaxe :** obj << More Color Map Columns( column )

**Description :** Ajoute une autre palette de couleur en fonction de la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map columns( :sex )
);

```

### Number of Clusters

**Syntaxe :** obj << Number of Clusters( number )

**Description :** Permet de définir le nombre de clusters et l&apos;emplacement où couper l&apos;arbre afin d&apos;établir des groupes de clusters. Une icône à glisser en forme de losange permet également de changer le nombre de clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);

```

### Number of Column Clusters

**Syntaxe :** obj << Number of Column Clusters( number )

**Description :** Spécifie le nombre de classes de colonnes avant l&apos;enregistrement. Disponible uniquement pour la classification à double entrée.

**JMP Version ajoutée :** 17

### Parallel Coord Plots

**Syntaxe :** obj << Parallel Coord Plots

**Description :** Crée un graphique des coordonnées parallèles pour chaque cluster, tous contenus dans une fenêtre séparée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:Type, :Weight, :Turning Circle, :Displacement, :Horsepower,
		:Gas Tank Size
	),
	Label( :Model ),
	Number of Clusters( 3 )
);
obj << Parallel Coord Plots;

```

### Pivot on Selected Cluster

**Syntaxe :** obj << Pivot on Selected Cluster

**Description :** Inverse l&apos;ordre des deux sous-clusters du cluster actuellement sélectionné.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country )
);
dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );
Wait( 2 );
obj << Pivot on Selected Cluster;

```

### Release Zoom

**Syntaxe :** obj << Release Zoom

**Description :** Annule le zoom du dendrogramme sur les lignes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y(
		:Type, :Weight, :Turning Circle, :Displacement, :Horsepower,
		:Gas Tank Size
	),
	Label( :Model )
);
obj << Zoom to Selected Rows;
Wait( 2 );
obj << Release Zoom;

```

### Row Dendrogram Position

**Syntaxe :** obj << Row Dendrogram Position( "À gauche"|"À droite" )

**Description :** Déplace la position du dendogramme pour les lignes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Two Way Clustering,
	Row Dendrogram Position( "Left" )
);

```

### Row Label Position

**Syntaxe :** obj << Row Label Position( "À gauche"|"À droite" )

**Description :** Déplace la position des étiquettes sur le dendogramme des lignes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

### Row More Position

**Syntaxe :** obj << Row More Position( "À gauche"|"À droite" )

**Description :** Change la position de la palette de couleurs ajoutée à l&apos;aide la commande Palettes de couleurs supplémentaires.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map Columns( :sex ),
	Row More Position( "Right" )
);

```

### Save Cluster Hierarchy

**Syntaxe :** obj << Save Cluster Hierarchy

**Description :** Crée une table de données qui contient les informations utiles pour reconstruire le dendrogramme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Hierarchy;

```

### Save Cluster History

**Syntaxe :** obj << Save Cluster History

**Description :** Enregistre la table de données qui apparaît dans le rapport Historique de la classification en tant que nouvelle table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster History
);

```

### Save Cluster Means

**Syntaxe :** obj << Save Cluster Means

**Description :** Enregistre une table de moyennes de clusters pour le nombre de clusters donné.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster Means
);

```

### Save Cluster Tree

**Syntaxe :** obj << Save Cluster Tree

**Description :** Crée une table de données qui contient les nœuds de l&apos;arbre cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Tree;

```

### Save Clusters

**Syntaxe :** obj << Save Clusters

**Description :** Crée une colonne de table de données qui contient les nombres de clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Clusters;

```

### Save Column Clusters

**Syntaxe :** obj << Save Column Clusters

**Description :** Enregistrer une nouvelle table de données qui contient les informations d&apos;appartenance des colonnes à une classe. Disponible uniquement pour la classification à double entrée.

**JMP Version ajoutée :** 17

### Save Constellation Coordinates

**Syntaxe :** obj << Save Constellation Coordinates

**Description :** Enregistre les coordonnées du diagramme de constellation dans une nouvelle colonne de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );
obj << Save Constellation Coordinates( 1 );

```

### Save Display Order

**Syntaxe :** obj << Save Display Order

**Description :** Crée une colonne de la table de données qui contient l&apos;ordre dans lequel la ligne apparaît dans le dendrogramme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Display Order;

```

### Save Distance Matrix

**Syntaxe :** obj << Save Distance Matrix

**Description :** Crée une table de données qui contient les distances entre les observations.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Save Distance Matrix
);

```

### Save Formula for Closest Cluster

**Syntaxe :** obj << Save Formula for Closest Cluster

**Description :** Enregistre une colonne de formule dans la table de données qui indique le nombre de clusters de la moyenne du cluster le plus proche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Formula for Closest Cluster;

```

### Scatterplot Matrix

**Syntaxe :** obj << Scatterplot Matrix

**Description :** Crée une matrice de graphiques de nuages de points dans une nouvelle fenêtre avec les ellipses de confiance, basée sur le nombre de clusters actuel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Scatterplot Matrix
);

```

### Set Random Seed

**Syntaxe :** obj << Set Random Seed( number )

**Description :** Spécifie une graine aléatoire permettant de reproduire les résultats lors de lancements postérieurs de la plate-forme.

### Show Dendrogram

**Syntaxe :** obj << Show Dendrogram( state=0|1 )

**Description :** Vous permet d&apos;afficher ou non le dendrogramme si vous ne souhaitez voir que la palette de couleurs. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 ),
	Distance Graph( 0 ),
	Color Map( Green to Black to Red ),
	Color Clusters( 1 ),
	Show Dendrogram( 0 )
);

```

### Show NCluster Handle

**Syntaxe :** obj << Show NCluster Handle( state=0|1 )

**Description :** Affiche ou masque le handle losange utilisé pour choisir le nombre de clusters sur le dendrogramme. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Clusters( 1 ),
	Show NCluster Handle( 0 )
);

```

### Standardize

**Syntaxe :** obj << Standardize( "Non standardisé"|"Colonnes"|"Lignes"|"Colonnes et lignes" )

**Description :** Alias pour &apos;Standardiser par&apos;, qui spécifie comment standardiser les valeurs avant la classification.

### Standardize By

**Syntaxe :** obj = Hierarchical Cluster(...Standardize By( "Non standardisé"|"Colonnes"|"Lignes"|"Colonnes et lignes" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie comment standardiser les valeurs avant la classification. Vous pouvez standardiser par colonnes, par lignes, par colonnes et par lignes, ou pas du tout.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Standardize( "Unstandardized" ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

### Standardize Data

**Syntaxe :** obj << Standardize Data( state=0|1 )

**Description :** Ancien nom de l&apos;option, toujours pris en charge, mais remplacé par &apos;Standardiser par&apos;.

### Standardize Robustly

**Syntaxe :** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Utilise des estimations robustes de la	moyenne et de l&apos;écart-type pour standardiser les données.

### Two Way Clustering

**Syntaxe :** obj = Hierarchical Cluster(...Two Way Clustering...)

<b>Élément lanceur : Oui</b>

**Description :** Permet de classer les colonnes et les lignes. Les colonnes doivent être mesurées sur la même échelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	),
	Number of Clusters( 8 )
);
Wait( .1 );
obj << Two Way Clustering;

```

### Use Saved Cluster Table

**Syntaxe :** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Utilise une table de données séparée pour l&apos;historique de la classification afin de spécifier la classification.

### Zoom to Selected Rows

**Syntaxe :** obj << Zoom to Selected Rows

**Description :** Zoome le dendrogramme sur les lignes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y(
		:Type, :Weight, :Turning Circle, :Displacement, :Horsepower,
		:Gas Tank Size
	),
	Label( :Model )
);
Wait( 2 );
obj << Zoom to Selected Rows;

```

## KDTable

### Distance between rows

**Syntaxe :** distance = KDTable << Distance between rows( row1, row2 )

**Description :** Renvoie la distance entre deux lignes. La distance s’applique aussi bien aux lignes supprimées qu’à celles insérées.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );
distance = tbl << Distance between rows( 1, 2 ); 
//distance from row 1 to row 2 is: 
Show( distance );

```

### Insert rows

**Syntaxe :** n = KDTable << Insert rows( number|[ vector ] )

**Description :** Vous permet de réinsérer les lignes dans la table de données afin qu&apos;elles soient trouvées lors des recherches. Les index de ligne ne changent pas lorsque des lignes sont insérées ou supprimées, et seules des lignes originales peuvent être supprimées et (ré)insérées. Renvoie le nombre de lignes insérées. Si une ligne a déjà été insérée, elle est ignorée.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] ); 
//  remove 3 rows 
tbl << Remove Rows( [2 1 3] ); 
//  re-insert 1 row 
tbl << InsertRows( 2 ); 
// re-insert 2 rows, ignoring row 2 
tbl << InsertRows( [3 2] );
{rows, dist} = tbl << K nearest rows( 2, 4 ); 
//2 nearest rows to row 4, ignoring row 1, are:
Show( rows );

```

### K nearest rows

**Syntaxe :** {rows, dist} = KDTable << K nearest rows( stop, <position> )

**Description :** Renvoie les n lignes les plus proches et les distances par rapport à un point, à une ligne (si la position est spécifiée) ou à toutes les lignes (si la position n’est pas spécifiée), en arrêtant la recherche lorsque la limite de distance est dépassée. L’arrêt peut être n ou {n,limit}. La position possible est un point soit comme matrice (1xK) où K est le nombre de dimensions soit le numéro d’une ligne. Si aucune position n&apos;est fournie, les n lignes les plus proches de chaque ligne sont renvoyées dans une matrice de dimension (nb de lignes x n).

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( {3, 2.0} ); 
//3 nearest rows to each row are: 
Show( rows );

```

### KDTable

**Syntaxe :** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**Description :** Renvoie une table de données permettant de chercher efficacement les proches voisins. Les arguments de la matrice sont des points d’un espace k-dimensionnel. Il n&apos;existe aucune limite au nombre de dimensions ou de points.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( 2, 1 ); 
//2 nearest rows to row 1 are: 
Show( rows );

```

### Remove rows

**Syntaxe :** n = KDTable << Remove rows( number|[ vector ] )

**Description :** Supprime les lignes de la table de données afin qu&apos;elles ne soient pas trouvées lors des recherches. Les index de ligne ne changent pas lorsque des lignes sont insérées ou supprimées, et seules des lignes originales peuvent être supprimées et (ré)insérées. Les index des lignes supprimées peuvent toujours être utilisés comme point de départ pour les K lignes les plus proches. Renvoie le nombre de lignes supprimées. Si une ligne a déjà été supprimée, elle est ignorée.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );  
//  remove 2 rows
tbl << RemoveRows( [2 1] ); 
//  re-insert 1 row 
tbl << Insert rows( 2 );
{rows, dist} = tbl << K nearest rows( 2, [1.5 1.5] ); 
//2 nearest rows to point at [1.5 1.5], ignoring row 1, are: 
Show( rows );

```

### Attribute ID

**Syntaxe :** obj = Y(...<Attribute ID( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Dans le cas de données empilées, cette opération identifie les attributs, qui seraient les colonnes (variables) si les données n&apos;étaient pas empilées.

### Columns

**Syntaxe :** obj << Columns( column(s) )

### Freq

**Syntaxe :** obj << Freq( column )

### Label

**Syntaxe :** obj << Label( column )

### Object ID

**Syntaxe :** obj = Y(...<Object ID( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Dans le cas de données empilées, cette opération identifie les valeurs individuelles à classifier. Autrement, elle permet d&apos;agréger une donnée sur toutes les lignes.

### Ordering

**Syntaxe :** obj << Ordering( column )

### Weight

**Syntaxe :** obj << Weight( column )

### Y

**Syntaxe :** obj << Y( column(s) )

