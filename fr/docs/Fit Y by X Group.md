# Fit Y by X Group



## Bivariate > Bivariate Curve

### Confid Curves Fit

**Syntaxe :** obj << ( Curve[number] << Confid Curves Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Fit( state=0|1 )} )

**Description :** Affiche ou masque les courbes de confiance pour la ligne d&apos;ajustement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

### Confid Curves Indiv

**Syntaxe :** obj << ( Curve[number] << Confid Curves Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Description :** Affiche ou masque les courbes de confiance pour une valeur prévue particulière.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate(
	Y( :Weight ),
	X( :Height ),
	Fit Line( {Confid Curves Indiv( 1 )} )
);
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

### Confid Shaded Fit

**Syntaxe :** obj << ( Curve[number] << Confid Shaded Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Shaded Fit( state=0|1 )} )

**Description :** Ombre la zone située entre les courbes de confiance et la ligne d&apos;ajustement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Fit( 0 ));

```

### Confid Shaded Indiv

**Syntaxe :** obj << ( Curve[number] << Confid Shaded Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**Description :** Ombre la zone située entre les courbes de confiance pour une valeur prévue particulière et la ligne d&apos;ajustement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

### Curve

**Syntaxe :** obj << ( Curve[number] )

**Description :** Accède à une courbe particulière pour acheminer des messages supplémentaires.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );
obj << (curve[1] << Line of Fit( 1 ));
Wait( 1 );
obj << (curve[1] << Line of Fit( 0 ));

```

### Indiv Confidence Limit Formula

**Syntaxe :** obj << ( Curve[number] << Indiv Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Indiv Confidence Limit Formula( <alpha> ) )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour une prévision individuelle qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

### Line Color

**Syntaxe :** obj << ( Curve[number] << Line Color( "color" ) ); 

obj << Fit Name( {Line Color( "color" )} ) 

obj << Density Ellipse( {Line Color( "color" )} )

**Description :** Change la couleur de la ligne d&apos;ajustement, des courbes de confiance et des régions de confiance ombrées.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

### Line Style

**Syntaxe :** obj << ( Curve[number] << Line Style( "pen style" ) ); 

obj << Fit Name( {Line Styel( "pen style" )} ) 

obj << Density Ellipse( {Line Style( "pen style" )} )

**Description :** Change le style de la ligne d&apos;ajustement.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

### Line Width

**Syntaxe :** obj << ( Curve[number] << Line Width( number ) ); 

obj << Fit Name( {Line Width( number )} ) 

obj << Density Ellipse( {Line Width( number )} )

**Description :** Change la largeur de la ligne d&apos;ajustement et des courbes de confiance.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

### Line of Fit

**Syntaxe :** obj << ( Curve[number] << Line of Fit( state=0|1 ) ); 

obj << Fit Name( {Line of Fit( state=0|1 )} ) 

obj << Density Ellipse( {Line of Fit( state=0|1 )} )

**Description :** Affiche ou masque la ligne d&apos;ajustement. Actif par défaut.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

### Mean Confidence Limit Formula

**Syntaxe :** obj << ( Curve[number] << Mean Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Mean Confidence Limit Formula( <alpha> ) )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour la réponse moyenne qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

### Plot Residuals

**Syntaxe :** obj << ( Curve[number] << Plot Residuals( state=0|1 ) ); 

obj << Fit Name( {Plot Residuals( state=0|1 )} )

**Description :** Affiche ou masque les cinq graphiques de diagnostic.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1, {Plot Residuals( 1 )} );
Wait( 1 );
obj << (curve[1] << Plot Residuals( 0 ));

```

### Profiler

**Syntaxe :** obj << ( Curve[number] << Profiler( state=0|1 ) ); 

obj << Fit Name( {Profiler( state=0|1 )} )

**Description :** Affiche ou masque un profileur de prévision pour les sorties sélectionnées avec comme données le régresseur sélectionné et le modèle spécifié.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Profiler( 1 )} );
Wait( 1 );
obj << (Curve[1] << Profiler( 0 ));

```

### Remove Fit

**Syntaxe :** obj << ( Curve[number] << Remove Fit )

**Description :** Supprime la courbe ajustée.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

### Report

**Syntaxe :** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Fit Name( {Report( state=0|1 )} ) 

obj << Density Ellipse( {Report( state=0|1 )} )

**Description :** Affiche ou masque les rapports du résumé de l&apos;ajustement, du manque d&apos;ajustement, de l&apos;ANOVA et de l&apos;estimation des coefficients. Actif par défaut.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

### Save Predicteds

**Syntaxe :** obj << ( Curve[number] << Save Predicteds ); 

obj << Fit Name( {Save Predicteds} )

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La colonne contient les valeurs prévues de la courbe ajustée spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

### Save Residuals

**Syntaxe :** obj << ( Curve[number] << Save Residuals ); 

obj << Fit Name( {Save Residuals} )

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La colonne contient les valeurs du résidu de la courbe ajustée spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

### Save Studentized Residuals

**Syntaxe :** obj << ( Curve[number] << Save Studentized Residuals ); 

obj << Fit Name( {Save Studentized Residuals} )

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La colonne contient les valeurs du résidu studentisé de la courbe ajustée spécifiée.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

### Set Alpha Level

**Syntaxe :** obj << ( Curve[number] << Set Alpha Level( alpha ) ); 

obj << Fit Name( {Set Alpha Level( alpha )} )

**Description :** Change le niveau alpha utilisé pour les courbes de confiance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

### Set α Level

**Syntaxe :** obj << ( Curve[number] << Set Alpha Level( alpha ) ); 

obj << Fit Name( {Set Alpha Level( alpha )} )

**Description :** Change le niveau alpha utilisé pour les courbes de confiance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

## Bivariate > Bivariate Nonpar Density

### 5% Contours

**Syntaxe :** obj << ( Curve[number] << "5% Contours"n( state=0|1 ) ); 

obj << Nonpar Density( {"5% Contours"n( state=0|1 )} )

**Description :** Affiche ou masque les courbes d&apos;isoréponses à 5%. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {"5% Contours"n( 0 )} );
Wait( 1 );
obj << (curve[1] << "5% Contours"n( 1 ));

```

### Color By Density Quantile

**Syntaxe :** obj << ( Curve[number] << Color By Density Quantile ); 

obj << Nonpar Density( {Color by Density Quantile} )

**Description :** Colorie les points et les lignes en fonction de la densité.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
Wait( 1 );
obj << (curve[1] << Color By Density Quantile);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color By Density Quantile} );

```

### Color Theme

**Syntaxe :** obj << ( Curve[number] << Color Theme( "theme"(state=0|1 ) ) ); 

obj << Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**Description :** Définit le thème de couleurs des courbes d&apos;isoréponses de densité de quantile.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

### Contour Fill

**Syntaxe :** obj << ( Curve[number] << Contour Fill( state=0|1 ) ); 

obj << Nonpar Density( {Contour Fill( state=0|1 )} )

**Description :** Affiche ou masque les isoréponses remplies.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate(
	Y( :Weight ),
	X( :Height ),
	Nonpar Density( {Contour Lines( 0 )} )
);
obj << (curve[1] << Contour Fill( 1 ));

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Fill( 1 )} );

```

### Contour Lines

**Syntaxe :** obj << ( Curve[number] << Contour Lines( state=0|1 ) ); 

obj << Nonpar Density( {Contour Lines( state=0|1 )} )

**Description :** Affiche ou masque les courbes d&apos;isoréponses. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Lines( 0 )} );
Wait( 1 );
obj << (curve[1] << Contour Lines( 1 ));

```

### Kernel Control

**Syntaxe :** obj << ( Curve[number] << Kernel Control( state=0|1 ) ); 

obj << Nonpar Density( {Kernel Control( state=0|1 )} )

**Description :** Affiche ou masque un curseur pour contrôler l&apos;écart-type pour chaque variable. L&apos;écart-type définit l&apos;étendue des valeurs X et Y pour déterminer la densité des courbes d&apos;isoréponses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 )} );
Wait( 1 );
obj << (curve[1] << Kernel Control( 0 ));

```

### Mesh Plot

**Syntaxe :** obj << ( Curve[number] << Mesh Plot( state=0|1 ) ); 

obj << Nonpar Density( {Mesh Plot( state=0|1 )} )

**Description :** Affiche ou masque un graphique tridimensionnel de la densité sur une grille des deux variables d&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Mesh Plot( 1 )} );
Wait( 1 );
obj << (curve[1] << Mesh Plot( 0 ));

```

### Modal Clustering

**Syntaxe :** obj << ( Curve[number] << Modal Clustering( state=0|1 ) ); 

obj << Nonpar Density( {Modal Clustering( state=0|1 )} )

**Description :** Affiche ou masque les résultats pour un groupement par mode des données, qui identifie les affectations de cluster en fonction des isoréponses actuelles. Cette option enregistre également les nombres de cluster dans une nouvelle colonne de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Modal Clustering( 1 )} );
Wait( 1 );
obj << (curve[1] << Modal Clustering( 0 ));

```

### Remove Fit

**Syntaxe :** obj << ( Curve[number] << Remove Fit )

**Description :** Supprime la densité non paramétrique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density();
Wait( 1 );
obj << (curve[1] << Remove Fit);

```

### Report

**Syntaxe :** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Nonpar Density( {Report( state=0|1 )} )

**Description :** Affiche ou masque le rapport Isoréponses de densité de quantile. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Report( 0 )} );
Wait( 1 );
obj << (curve[1] << Report( 1 ));

```

### Save Density Grid

**Syntaxe :** obj << ( Curve[number] << Save Density Grid ); 

obj << Nonpar Density( {Save Density Grid} )

**Description :** Enregistre les colonnes dans une nouvelle table de données. Les colonnes contiennent les estimations de densité et les quantiles correspondants.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Grid} );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Grid);

```

### Save Density Quantile

**Syntaxe :** obj << ( Curve[number] << Save Density Quantile ); 

obj << Nonpar( {Save Density Quantile} )

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La colonne contient une valeur qui représente le quantile de densité qui contient chaque point.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Quantile);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Quantile} );

```

### Select Points by Density

**Syntaxe :** obj << ( Curve[number] << Select Points by Density( lower probability, upper probability ) ); 

obj << Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**Description :** Sélectionne les points situés entre les probabilités les plus faibles et les plus élevées spécifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );
Wait( 1 );
obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

### Set Kernel

**Syntaxe :** obj << ( Curve[number] << Set Kernel( xStdDev, yStdDev )); 

obj << Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**Description :** Définit l&apos;écart-type du noyau à la fois pour les valeurs X et Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );
Wait( 1 );
obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### Confid Curves Fit

**Syntaxe :** obj << ( Curve[number] << Confid Curves Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Fit( state=0|1 )} )

**Description :** Affiche ou masque les courbes de confiance pour la ligne d&apos;ajustement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

### Confid Curves Indiv

**Syntaxe :** obj << ( Curve[number] << Confid Curves Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Description :** Affiche ou masque les courbes de confiance pour une valeur prévue particulière.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate(
	Y( :Weight ),
	X( :Height ),
	Fit Line( {Confid Curves Indiv( 1 )} )
);
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

### Indiv Confidence Limit Formula

**Syntaxe :** obj << ( Curve[number] << Indiv Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Indiv Confidence Limit Formula( <alpha> ) )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour une prévision individuelle qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

### Line Color

**Syntaxe :** obj << ( Curve[number] << Line Color( "color" ) ); 

obj << Fit Name( {Line Color( "color" )} ) 

obj << Density Ellipse( {Line Color( "color" )} )

**Description :** Change la couleur de la ligne d&apos;ajustement, des courbes de confiance et des régions de confiance ombrées.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

### Line Style

**Syntaxe :** obj << ( Curve[number] << Line Style( "pen style" ) ); 

obj << Fit Name( {Line Styel( "pen style" )} ) 

obj << Density Ellipse( {Line Style( "pen style" )} )

**Description :** Change le style de la ligne d&apos;ajustement.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

### Line Width

**Syntaxe :** obj << ( Curve[number] << Line Width( number ) ); 

obj << Fit Name( {Line Width( number )} ) 

obj << Density Ellipse( {Line Width( number )} )

**Description :** Change la largeur de la ligne d&apos;ajustement et des courbes de confiance.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

### Line of Fit

**Syntaxe :** obj << ( Curve[number] << Line of Fit( state=0|1 ) ); 

obj << Fit Name( {Line of Fit( state=0|1 )} ) 

obj << Density Ellipse( {Line of Fit( state=0|1 )} )

**Description :** Affiche ou masque la ligne d&apos;ajustement. Actif par défaut.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

### Mean Confidence Limit Formula

**Syntaxe :** obj << ( Curve[number] << Mean Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Mean Confidence Limit Formula( <alpha> ) )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour la réponse moyenne qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

### Remove Fit

**Syntaxe :** obj << ( Curve[number] << Remove Fit )

**Description :** Supprime la courbe ajustée.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

### Report

**Syntaxe :** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Fit Name( {Report( state=0|1 )} ) 

obj << Density Ellipse( {Report( state=0|1 )} )

**Description :** Affiche ou masque les rapports du résumé de l&apos;ajustement, du manque d&apos;ajustement, de l&apos;ANOVA et de l&apos;estimation des coefficients. Actif par défaut.

**Exemple de courbe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Exemple d'ellipse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

### Save Predicteds

**Syntaxe :** obj << ( Curve[number] << Save Predicteds ); 

obj << Fit Name( {Save Predicteds} )

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La colonne contient les valeurs prévues de la courbe ajustée spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

### Save Residuals

**Syntaxe :** obj << ( Curve[number] << Save Residuals ); 

obj << Fit Name( {Save Residuals} )

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La colonne contient les valeurs du résidu de la courbe ajustée spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

### Save Studentized Residuals

**Syntaxe :** obj << ( Curve[number] << Save Studentized Residuals ); 

obj << Fit Name( {Save Studentized Residuals} )

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La colonne contient les valeurs du résidu studentisé de la courbe ajustée spécifiée.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

### Select Points Inside

**Syntaxe :** obj << ( Curve[number] << Select Points Inside ); 

obj << Density Ellipse( {Select Points Inside} )

**Description :** Sélectionne les points à l&apos;intérieur de l&apos;ellipse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.95, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Inside);
Wait( 1 );
obj << Density Ellipse( 0.8, {Select Points Inside} );

```

### Select Points Outside

**Syntaxe :** obj << ( Curve[number] << Select Points Outside ); 

obj << Density Ellipse( {Select Points Outside} )

**Description :** Sélectionne les points à l&apos;extérieur de l&apos;ellipse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.8, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Outside);
Wait( 1 );
obj << Density Ellipse( 0.95, {Select Points Outside} );

```

### Shaded Contour

**Syntaxe :** obj << ( Curve[number] << Shaded Contour( state=0|1 ) ); 

obj << Density Ellipse( {Shaded Contour( state=0|1 )} )

**Description :** Affiche ou masque les isoréponses ombrées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), );
obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );
Wait( 1 );
obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bivariate

**Syntaxe :** Bivariate( Y( columns ), X( columns ) )

**Description :** Modélise une réponse continue par rapport à une autre variable continue. Les méthodes d&apos;analyse incluent l&apos;ajustement des droites, des polynômes, des splines et des densités bivariées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntaxe :** obj = Bivariate(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Copy Script;

```

### Curve

**Syntaxe :** obj << ( Curve[number] << option )

**Description :** Tableau de poignées aux lignes d&apos;ajustement. Cela permet d&apos;envoyer des messages Courbe bivariée à des courbes spécifiques qui ont été ajustées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Data Table Window;

```

### Density Ellipse

**Syntaxe :** obj << Density Ellipse( percent )

**Description :** Ajuste un contour normal bivarié. Le contour contient le pourcentage spécifié du total de points de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );

```

### Fit Cauchy

**Syntaxe :** obj << Fit Cauchy

**Description :** Ajuste un modèle de régression robuste où les paramètres sont estimés par le maximum de vraisemblance avec une fonction de lien de Cauchy.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Cauchy;

```

### Fit Each Value

**Syntaxe :** obj << Fit Each Value

**Description :** Ajuste une droite aux valeurs moyennes de Y correspondant à chaque ensemble de valeurs X particulières.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Each Value;

```

### Fit Line

**Syntaxe :** obj << Fit Line

**Description :** Ajuste un modèle de régression des moindres carrés en fonction des données. La ligne de l&apos;ajustement est affichée sur le graphique et un rapport d&apos;ajustement est fourni.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;

```

### Fit Mean

**Syntaxe :** obj << Fit Mean

**Description :** Ajuste la moyenne de la variable de réponse Y. Une ligne plate avec une pente de zéro est affichée sur le graphique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Mean;

```

### Fit Orthogonal

**Syntaxe :** obj << Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**Description :** Ajuste le modèle de régression orthogonale spécifié. Les modèles de régression orthogonale sont utiles lorsque les variables X et Y sont toutes deux mesurées avec une erreur. L&apos;argument Rapport de variances spécifié vous permet de spécifier le rapport de la variance de l&apos;erreur dans la variable X par rapport à l&apos;erreur dans la variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Orthogonal( Fit X to Y );

```

### Fit Passing Bablok

**Syntaxe :** obj << Fit Passing Bablok

**Description :** Ajuste un modèle de régression en utilisant la procédure Passing-Bablok. Cette procédure est utile lorsque les variables X et Y sont toutes deux mesurées avec une erreur.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Passing Bablok;

```

### Fit Polynomial

**Syntaxe :** obj << Fit Polynomial( degree of model )

**Description :** Ajuste une courbe polynomiale du degré spécifié en utilisant une régression des moindres carrés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3 );

```

### Fit Robust

**Syntaxe :** obj << Fit Robust

**Description :** Ajuste un modèle de régression en utilisant la M-estimation de Huber, qui est robuste par rapport aux valeurs aberrantes. La fonction de perte de Huber pénalise les valeurs aberrantes et augmente de façon quadratique pour les faibles erreurs et de façon linéaire pour les grandes erreurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Robust;

```

### Fit Special

**Syntaxe :** obj << Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), <Intercept( number )>, <Slope( number )>, <Degree( degree )>, Centered Polynomial>  )

**Description :** Ajuste un modèle de régression qui contient des transformations pour les variables X et Y. Vous pouvez également définir des contraintes sur la pente et la constante, ainsi qu&apos;ajuster des modèles polynomiaux en utilisant l&apos;argument de degré.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Special( xTran( "Log" ) );
obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

### Fit Spline

**Syntaxe :** obj << Fit Spline( lambda, <Standardized> )

**Description :** Ajuste les données selon un modèle des moindres carrés pénalisés, où lambda, le paramètre de lissage, détermine le degré de lissage du modèle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Spline( 341.1929, Standardized );
obj << Fit Spline( 341.1929 );

```

### Fit Where

**Syntaxe :** obj << Fit Where( column == level, command )

**Description :** Ajuste une courbe à un niveau unique d&apos;une variable catégorielle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

### Freq

**Syntaxe :** obj = Bivariate(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( _freqcol ) );

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```js

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

```js

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

### Group By

**Syntaxe :** obj << Group By( column )

**Description :** Permet de spécifier une variable de groupement. Une fois qu&apos;une variable de groupement est spécifiée, toutes les analyses sont effectuées séparément pour chaque niveau de la variable de groupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Group By( :drug );
obj << Fit Line;

```

### Histogram Borders

**Syntaxe :** obj << Histogram Borders( state=0|1 )

**Description :** Affiche ou masque les histogrammes sur les axes horizontal et vertical d&apos;un nuage de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Histogram Borders( 1 );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Kernel Smoother

**Syntaxe :** obj << Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**Description :** Applique un ajustement local sur des sous-ensembles répétés de données, où l&apos;étendue des sous-ensembles est déterminée par alpha, où le lissage de l&apos;ajustement est déterminé par lambda et où le poids est déterminé par la fonction de pondération. Les valeurs aberrantes reçoivent un poids de plus en plus faible lorsque la robustesse augmente. Cette méthode est également connue sous le nom de lissage LOESS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Kernel Smoother( 1, 1, 0.84615, 0 );

```

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Nonpar Density

**Syntaxe :** obj << Nonpar Density

**Description :** Ajuste des contours de densité bivariée non paramétriques et dessine les contours correspondants sur le graphique. Les contours sont en intervalles de 5 %.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density;

```

### Paired t test

**Syntaxe :** obj << Paired t test

**Description :** Exécute un test t apparié, génère le rapport et affiche une ligne grise à 45 degrés sur le nuage de points pour représenter l&apos;endroit où les deux colonnes sont égales.



Cette option est passée dans la plate-forme Grandeurs appariées. Cette option est également accessible à partir du menu Bivarié lorsque vous maintenez la touche Maj enfoncée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Paired t test;

```

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```js

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

### Points Jittered

**Syntaxe :** obj << Points Jittered( "Aucun(e)"|"Auto"|"Aléatoire uniforme"|"Aléatoire normal"|"Densité aléatoire"|"Groupé"|"Grille"|"Grille hexagonale"|"Essaim d&apos;abeilles"="Auto" )

**Description :** Spécifie l&apos;étalement des points de données. Lorsqu&apos;il est sélectionné, les points de données sont arbitrairement distribués pour éviter de superposer les marqueurs. "Auto" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );
obj << Points Jittered( "Random Normal" );

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Regressor

**Syntaxe :** obj = Bivariate(...Regressor( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les régresseurs. Ces variables doivent avoir un type de modélisation continu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Report View( "Summary" );

```

### Response

**Syntaxe :** obj = Bivariate(...Response( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les réponses continues que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```js

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

```js

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

```js

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

### Show Points

**Syntaxe :** obj << Show Points( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
Wait( 1 );
obj << Show Points( 0 );

```

### Summary Statistics

**Syntaxe :** obj << Summary Statistics( state=0|1 )

**Description :** Affiche ou masque les tables des statistiques de résumé.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Summary Statistics( 1 );

```

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntaxe :** obj = Bivariate(...<Weight( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( _weightcol ) );

```

### Window View

**Syntaxe :** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```js

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

### X

**Syntaxe :** obj = Bivariate(...X( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les régresseurs. Ces variables doivent avoir un type de modélisation continu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Y

**Syntaxe :** obj = Bivariate(...Y( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les réponses continues que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

## Contingency > Analysis of Means for Proportions

### Point Options

**Syntaxe :** obj << Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique Analyse des moyennes des proportions. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Syntaxe :** obj << Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntaxe :** obj << Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale pour l&apos;analyse des moyennes sur le graphique Proportions. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntaxe :** obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique Analyse des moyennes des proportions. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntaxe :** obj << Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique Analyse des moyennes des proportions. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntaxe :** obj << Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les proportions de réponse et les limites de décision pour chaque niveau de la variable X. Le rapport indique également si la limite a été dépassée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

### Switch Response Level for Proportion

**Syntaxe :** obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) );

scrobj << Switch Response Level for Proportion( state=0|1 )

**Description :** Change la catégorie de réponse utilisée dans l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions(
	1,
	Switch Response Level for Proportion( 1 )
);
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### Forest Plot

**Syntaxe :** obj << Equivalence Tests( ..., Forest Plot( state=0|1 ) );

scobj << Forest Plot( state=0|1 )

**Description :** Affiche ou masque le graphique de forêt des tests d&apos;équivalence. Actif par défaut.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] <<
Get Scriptable Object);
scobj << Forest Plot( 0 );

```

### Remove

**Syntaxe :** scobj << Remove

**Description :** Supprime le rapport Tests d&apos;équivalence.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] <<
Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

### Test Report

**Syntaxe :** obj << Equivalence Tests( ..., Test Report( state=0|1 ) );

scobj << Test Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui résume les tests d&apos;équivalence, les tests de supériorité, ou les tests de non-infériorité pour les différences de risque ou les ratios de risque. Actif par défaut.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] <<
Get Scriptable Object);
scobj << Test Report( 0 );

```

## Contingency > Contingency Table

### Cell Chi Square

**Syntaxe :** obj << Contingency Table( Cell Chi Square( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque la contribution de chaque cellule à la statistique khi deux dans le tableau de contingence.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Cell Chi Square( 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

### Col %

**Syntaxe :** obj << Contingency Table( Col %( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque chaque contribution en pourcentage des cellules à la colonne dans le tableau de contingence. Actif par défaut.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 0 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Col Cum

**Syntaxe :** obj << Contingency Table( Col Cum( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque le total cumulé des colonnes dans le tableau de contingence.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Col Cum %

**Syntaxe :** obj << Contingency Table( Col Cum %( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque le pourcentage cumulé des colonnes dans le tableau de contingence.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Count

**Syntaxe :** obj << Contingency Table( Count( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque le dénombrement des cellules dans le tableau de contingence. Actif par défaut.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 0 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Deviation

**Syntaxe :** obj << Contingency Table( Deviation( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque l&apos;écart des cellules individuelles dans le tableau de contingence. L&apos;écart des cellules individuelles est égal au dénombrement réel moins le dénombrement prévu des cellules.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Deviation( 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Expected

**Syntaxe :** obj << Contingency Table( Expected( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque le dénombrement prévu des cellules dans le tableau de contingence. Le dénombrement prévu des cellules est le produit du total de ligne et du total de colonne correspondants divisé par le total général.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Expected( 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Make Into Data Table

**Syntaxe :** obj << Contingency Table( Make Into Data Table )

**Description :** Crée une table de données qui contient les données des tableaux croisés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

### Row %

**Syntaxe :** obj << Contingency Table( Row %( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque chaque contribution en pourcentage des cellules à la ligne dans le tableau de contingence. Actif par défaut.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 0 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Row Cum

**Syntaxe :** obj << Contingency Table( Row Cum( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque le total cumulé des lignes dans le tableau de contingence.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Row Cum %

**Syntaxe :** obj << Contingency Table( Row Cum %( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque le pourcentage cumulé des lignes dans le tableau de contingence.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Total %

**Syntaxe :** obj << Contingency Table( Total %( state=0|1, <Format(...)> ) )

**Description :** Affiche ou masque le pourcentage total des cellules dans le tableau de contingence. Actif par défaut.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 0 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### 3D Correspondence Analysis

**Syntaxe :** obj << Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**Description :** Affiche ou masque un nuage de points tridimensionnel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cars 1993.jmp" );
obj = Contingency(
	Y( :Vehicle Category ),
	X( :Manufacturer ),
	Contingency Table( 0 ),
	Tests( 0 )
);
Wait( 1 );
obj << Correspondence Analysis( "3D Correspondence Analysis"(1) );

```

### Make Table

**Syntaxe :** obj << Correspondence Analysis( "Make Table" )

**Description :** Crée une table de données qui contient la sortie de l&apos;analyse des correspondances.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Make Table" );

```

### Save Value Order

**Syntaxe :** obj << Correspondence Analysis( "Save Value Order" )

**Description :** Enregistre une propriété de colonne Ordre des valeurs aux deux colonnes de variable X et Y dans la table de données. La propriété de colonne spécifie l&apos;ordre des niveaux triés d&apos;après le coefficient de score de première correspondance.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Agreement Statistic

**Syntaxe :** obj << Agreement Statistic( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les statistiques qui mesurent l&apos;accord entre les niveaux. Le rapport comprend la statistique kappa ainsi que l&apos;erreur standard, l&apos;intervalle de confiance et le test d&apos;hypothèse pour la statistique. Le rapport inclut également le test de symétrie de Bowker, également connu sous le nom de test de McNemar. Cette option est uniquement disponible lorsque les variables X et Y ont les mêmes niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 ),
	Agreement Statistic( 1 )
);

```

### Analysis of Means for Proportions

**Syntaxe :** obj << Analysis of Means for Proportions( state=0|1, <chart options> )

**Description :** Affiche ou masque un graphique de décision d&apos;analyse des moyennes pour les proportions (ANOMP) afin de comparer les proportions de groupe. ANOMP est une procédure de comparaison multiple qui compare les proportions de réponse pour les niveaux de la variable X avec la proportion de réponse générale. Cette option est uniquement disponible lorsque la variable Y a exactement deux niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency(
	Y( :marital status ),
	X( :type ),
	Analysis of Means for Proportions( 1 )
);

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Block

**Syntaxe :** obj = Contingency(...<Block( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une variable de bloc. Cela permet d&apos;identifier un deuxième facteur et de réaliser un test de Cochran-Mantel-Haenszel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntaxe :** obj = Contingency(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );

```

### Cochran Armitage Trend Test

**Syntaxe :** obj << Cochran Armitage Trend Test( state=0|1 )

**Description :** Affiche ou masque un test des tendances dans les proportions binomiales des niveaux d’une seule variable. Cette option est uniquement disponible lorsqu&apos;une variable a exactement deux niveaux et l&apos;autre variable est ordinale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );
obj << Cochran Armitage Trend Test( 1 );

```

### Cochran Mantel Haenszel

**Syntaxe :** obj << Cochran Mantel Haenszel( column );

obj << Cochran Mantel Haenszel( state=0|1 )

**Description :** Affiche ou masque un test qui détermine s&apos;il existe une relation entre deux variables catégorielles après le blocage sur une troisième variable de classification.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :type ), X( :marital status ) );
obj << Cochran Mantel Haenszel( :country );
Wait( 2 );
obj << Cochran Mantel Haenszel( 0 );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Contingency

**Syntaxe :** Contingency( Y( columns ), X( columns ) )

**Description :** Modélise une réponse catégorielle dans un ensemble de groupes catégoriels. Les méthodes d&apos;analyse incluent les tests du khi-deux et les graphiques en mosaïque.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contingency Table

**Syntaxe :** obj << Contingency Table( state=0|1 )

**Description :** Affiche ou masque un tableau de fréquences à double entrée. Le tableau contient une ligne pour chaque niveau de la variable X et une colonne pour chaque niveau de la variable Y. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( 0 );

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Copy Script;

```

### Correspondence Analysis

**Syntaxe :** obj << Correspondence Analysis( state=0|1 );

obj << Correspondence Analysis( correspondence chart options )

**Description :** Affiche ou masque une analyse des correspondances, qui identifie les lignes ou les colonnes d&apos;un tableau de fréquences qui ont des ressemblances de dénombrement. Dans le graphique d&apos;analyse des correspondances, il y a un point pour chaque ligne et pour chaque colonne du tableau de contingence.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( 1 );

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Data Table Window;

```

### Equivalence Tests of Relative Risk

**Syntaxe :** obj << Equivalence Tests of Relative Risk( ratio, <alpha=.05>, <test type>, <Response Group( level )>, <Factor Group( level )> )

**Description :** Vérifie que les risques relatifs ne diffèrent pas de plus d&apos;une certain ratio pour être pratiquement équivalents. C&apos;est l&apos;inverse du test de significativité habituel. Alpha, le type de test et les niveaux de groupe sont des arguments facultatifs. L&apos;argument type de test est « Équivalence » par défaut, mais il peut également être utilisé pour spécifier des tests de supériorité ou de non-infériorité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Relative Risk(
		0.8,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

### Equivalence Tests of Risk Difference

**Syntaxe :** obj << Equivalence Tests of Risk Difference( difference, <alpha=.05>, <test type>, <Response Group( level )>, <Factor Group( level )> )

**Description :** Vérifie que les différences de risque ne diffèrent pas de plus d&apos;une certain quantité (différence) pour être pratiquement équivalentes. C&apos;est l&apos;inverse du test de significativité habituel. Alpha, le type de test et les niveaux de groupe sont des arguments facultatifs. L&apos;argument type de test est « Équivalence » par défaut, mais il peut également être utilisé pour spécifier des tests de supériorité ou de non-infériorité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

### Exact Agreement Statistic

**Syntaxe :** obj << Exact Agreement Statistic( state=0|1 )

**Description :** Affiche ou masque la version exacte de la statistique de concordance kappa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Agreement Statistic( 1 );

```

### Exact Cochran Armitage Trend Test

**Syntaxe :** obj << Exact Cochran Armitage Trend Test( state=0|1 )

**Description :** Affiche ou masque la version exacte du test de tendance de Cochran-Armitage.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Cochran Armitage Trend Test( 1 );

```

### Fisher's Exact Test

**Syntaxe :** obj << Fisher&apos;s Exact Test( state=0|1 )

**Description :** Affiche ou masque le test exact de Fisher pour tester l&apos;association entre deux variables catégorielles. Ce test ne dépend d&apos;aucune hypothèse distributionnelle de grand échantillon.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Fisher's Exact Test( 1 );

```

### Freq

**Syntaxe :** obj = Contingency(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( _freqcol ) );

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```js

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

```js

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

### Grouping Category

**Syntaxe :** obj = Contingency(...Grouping Category( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les variables du régresseur. Ces variables doivent avoir un type de modélisation ordinal ou nominal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Horizontal Mosaic

**Syntaxe :** obj << Horizontal Mosaic( state=0|1 )

**Description :** Pivote le graphique en mosaïque horizontalement (1) ou verticalement (0).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
Wait( 2 );
obj << Horizontal Mosaic( 1 );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Jonckheere Terpstra Test

**Syntaxe :** obj << Jonckheere Terpstra Test( state=0|1 )

**Description :** Affiche ou masque un rapport du test de Jonckheere-Terpstra, qui est un test non paramétrique des différences ordonnées entre les classes. Il teste l&apos;hypothèse nulle indiquant que la distribution de la variable de réponse ne diffère pas en fonction des classes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
:height << Nominal( 1 );
obj = dt << Contingency(
	Y( :height ),
	X( :age ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
obj << Jonckheere Terpstra Test( 1 );

```

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```js

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

### Measures of Association

**Syntaxe :** obj << Measures of Association( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les mesures de l&apos;association entre les variables dans le tableau de contingence.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Measures of Association( 1 )
);

```

### Mosaic Plot

**Syntaxe :** obj << Mosaic Plot( state=0|1 )

**Description :** Affiche ou masque une représentation graphique du tableau de contingence. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Mosaic Plot( 0 );

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Odds Ratio

**Syntaxe :** obj << Odds Ratio( state=0|1 )

**Description :** Affiche ou masque un rapport du rapport de probabilités. Cette option est uniquement disponible lorsque les variables X et Y ont exactement deux niveaux chacune.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Odds Ratio( 1 )
);

```

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relative Risk

**Syntaxe :** obj << Relative Risk( state=0|1, <Y variable level, X variable level> ); 

obj << Relative Risk( state=0|1, <"All"> )

**Description :** Affiche ou masque le risque relatif entre les niveaux de la réponse. Cette option est uniquement disponible lorsque les variables X et Y ont exactement deux niveaux chacune.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "All" );

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Report View( "Summary" );

```

### Response Category

**Syntaxe :** obj = Contingency(...Response Category( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les variables catégorielles de la réponse que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```js

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

```js

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

```js

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

### Set Alpha Level

**Syntaxe :** obj << Set Alpha Level( alpha=0.05 )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision. "0.05" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

### Set α Level

**Syntaxe :** obj << Set α Level( alpha=0.05 )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision. "0.05" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Tests

**Syntaxe :** obj << Tests( state=0|1 )

**Description :** Affiche ou masque les tests qui déterminent si les taux de niveau de réponse sont les mêmes dans l&apos;ensemble des niveaux de la variable X. Ces tests sont analogues au tableau Analyse de la variance pour les données continues. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Tests( 0 );

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Two Sample Test for Proportions

**Syntaxe :** obj << Two Sample Test for Proportions( state=0|1 )

**Description :** Affiche ou masque un test à deux échantillons pour les proportions. Ce test compare les proportions de la variable Y entre les deux niveaux de la variable X. Cette option est uniquement disponible lorsque les variables X et Y ont exactement deux niveaux chacune.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Two Sample Test for Proportions( 1 )
);

```

### View Web XML

**Syntaxe :** obj << View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntaxe :** obj = Contingency(...<Weight( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( _weightcol ) );

```

### Window View

**Syntaxe :** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```js

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

### X

**Syntaxe :** obj = Contingency(...X( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les variables du régresseur. Ces variables doivent avoir un type de modélisation ordinal ou nominal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Y

**Syntaxe :** obj = Contingency(...Y( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les variables catégorielles de la réponse que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

## Logistic

### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntaxe :** obj = Logistic(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);

```

### Categorical Response

**Syntaxe :** obj = Logistic(...Categorical Response( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les variables catégorielles de la réponse que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Confidence Intervals

**Syntaxe :** obj << Confidence Intervals( <state=0|1> | <fraction> )

**Description :** Affiche ou masque les intervalles de confiance dans le tableau des estimations des coefficients à droite de chaque effet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );
obj << Confidence Intervals( 0.01 );

```

### Continuous Regressor

**Syntaxe :** obj = Logistic(...Continuous Regressor( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les régresseurs. Ces variables doivent avoir un type de modélisation continu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Data Table Window;

```

### Freq

**Syntaxe :** obj = Logistic(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Inverse Prediction

**Syntaxe :** obj << Inverse Prediction( Response( prob1, prob2, ... ), <Confidence Level( percent=0.95 )>, <Two sided|Lower One Sided|Upper One Sided> )

**Description :** Vous permet de prévoir les valeurs de la variable du régresseur pour une ou plusieurs valeurs de la variable de réponse. Par défaut, les limites de confiance bilatérales à 95 % sont calculées pour chaque prévision inverse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

### Lift Curve

**Syntaxe :** obj << Lift Curve( state=0|1 )

**Description :** Affiche ou masque la courbe Lift. La courbe Lift représente le lift en fonction de la proportion des observations et propose une autre vision de la capacité prédictive d&apos;un modèle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Lift Curve( 1 );

```

### Line Color

**Syntaxe :** obj << Line Color( color )

**Description :** Vous permet de sélectionner la couleur des courbes du graphique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Line Color( "Magenta" );

```

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```js

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

### Logistic

**Syntaxe :** Logistic( Y( columns ), X( columns ) )

**Description :** Modélise une réponse catégorielle par rapport à une variable continue. Les méthodes d&apos;analyse incluent la régression logistique et les courbes ROC.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Logistic Plot

**Syntaxe :** obj << Logistic Plot( state=0|1 )

**Description :** Affiche ou masque le graphique logistique. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Logistic Plot( 0 );

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Odds Ratios

**Syntaxe :** obj << Odds Ratios( state=0|1 )

**Description :** Ajoute ou supprime des colonnes contenant les rapports de probabilités dans le rapport Estimations des paramètres.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Odds Ratios( 1 );

```

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```js

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

### Precision Recall Curve

**Syntaxe :** obj << Precision Recall Curve( state=0|1 )

**Description :** Affiche ou masque la courbe précision-rappel, qui contient une courbe pour chaque niveau de la variable de réponse. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel pour différents seuils.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << Precision Recall Curve( 1 );

```

### ROC Curve

**Syntaxe :** obj << ROC Curve( state=0|1 )

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << ROC Curve( 1 );

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Probability Formula

**Syntaxe :** obj << Save Probability Formula

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent la formule pour la probabilité prévue par le modèle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Save Probability Formula;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```js

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

```js

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

```js

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

### Show Points

**Syntaxe :** obj << Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique logistique. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Points( 0 );

```

### Show Rate Curve

**Syntaxe :** obj << Show Rate Curve( state=0|1 )

**Description :** Affiche ou masque la courbe de probabilité dans le graphique logistique. La courbe de probabilité est utile uniquement si vous avez plusieurs points pour chaque valeur de la variable X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Rate Curve( 1 );

```

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Target Level

**Syntaxe :** obj = Logistic(...Target Level( level )...)

**Description :** Spécifie le niveau de la réponse pour lequel vous souhaitez modéliser la probabilité.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
obj << ROC Curve( 1 );

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntaxe :** obj = Logistic(...<Weight( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Weight( _weightcol )
);

```

### Window View

**Syntaxe :** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```js

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

### X

**Syntaxe :** obj = Logistic(...X( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les régresseurs. Ces variables doivent avoir un type de modélisation continu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Y

**Syntaxe :** obj = Logistic(...Y( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les variables catégorielles de la réponse que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

## Oneway > ANOM for Ranges

### Point Options

**Syntaxe :** obj << ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Point Options( "Show Only Points" );

```

### Set Alpha Level

**Syntaxe :** obj << ANOM for Ranges( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntaxe :** obj << ANOM for Ranges( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale (étendue de la moyenne générale). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntaxe :** obj << ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision de l&apos;analyse des moyennes sur le graphique des étendues. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntaxe :** obj << ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision de l&apos;analyse des moyennes sur le graphique des étendues. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntaxe :** obj << ANOM for Ranges( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les étendues du groupe et les limites de décision correspondantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### Point Options

**Syntaxe :** obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n(
	1,
	Point Options( "Show Only Points" )
);
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Syntaxe :** obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntaxe :** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale (moyenne générale ADM). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntaxe :** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique de l&apos;analyse des moyennes pour les variances de Levenne (ANOMV-Levene ADM). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntaxe :** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique de l&apos;analyse des moyennes pour les variances de Levenne (ANOMV-Levene ADM). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntaxe :** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient la moyenne des écarts absolus moyens (ADM) du groupe et les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### Graph in Variance Scale

**Syntaxe :** obj << ANOM for Variances( 1,  Graph in Variance Scale( state=0|1 ) );

scrobj <<  Graph in Variance Scale( state=0|1 )

**Description :** Permet de spécifier l&apos;échelle de l&apos;axe vertical. Vous pouvez choisir entre écart-type et variance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Graph in Variance Scale( 0 );

```

### Point Options

**Syntaxe :** obj << ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Syntaxe :** obj << ANOM for Variances( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntaxe :** obj << ANOM for Variances( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale (racine de l&apos;erreur quadratique moyenne (RMSE) ou erreur quadratique moyenne (MSE) selon l&apos;échelle en Y). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntaxe :** obj << ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique de l&apos;analyse des moyennes pour les variances (ANOMV). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntaxe :** obj << ANOM for Variances( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique de l&apos;analyse des moyennes pour les variances (ANOMV). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntaxe :** obj << ANOM for Variances( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les écart-types (ou les variances) du groupe et les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### Point Options

**Syntaxe :** obj << ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] <<
Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Syntaxe :** obj << ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] <<
Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntaxe :** obj << ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale (moyenne générale). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] <<
Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntaxe :** obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique de l&apos;analyse des moyennes avec rangs transformés (ANOM-TR). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] <<
Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntaxe :** obj << ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique de l&apos;analyse des moyennes avec rangs transformés (ANOM-TR). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] <<
Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntaxe :** obj << ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les moyennes avec rangs transformés du groupe et les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] <<
Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### Point Options

**Syntaxe :** obj << ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Syntaxe :** obj << ANOM( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntaxe :** obj << ANOM( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale (moyenne générale) sur le graphique de l&apos;analyse des moyennes (ANOM). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntaxe :** obj << ANOM( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique de l&apos;analyse des moyennes (ANOM). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntaxe :** obj << ANOM( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique de l&apos;analyse des moyennes (ANOM). Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntaxe :** obj << ANOM( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les moyennes du groupe et les limites de décision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### Forest Plot

**Syntaxe :** obj << Equivalence Tests( ..., Forest Plot( state=0|1 ) );

scobj << Forest Plot( state=0|1 )

**Description :** Affiche ou masque le graphique de forêt des tests d&apos;équivalence. Actif par défaut.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Forest Plot( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] <<
Get Scriptable Object);
scobj << Forest Plot( 0 );

```

### Pairwise Comparisons

**Syntaxe :** obj << Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) );

scobj << Equivalence Tests Pairwise Comparisons( state=0|1 )

**Description :** Affiche ou masque le rapport Comparaisons par paire des tests d&apos;équivalence pour toutes les comparaisons par paire.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] <<
Get Scriptable Object);
scobj << Pairwise Comparisons( 0 );

```

### Remove

**Syntaxe :** scobj << Remove

**Description :** Supprime le rapport Tests d&apos;équivalence.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] <<
Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

### Scatterplot

**Syntaxe :** obj << Equivalence Tests( ..., Scatterplot( state=0|1 ) );

scobj << Scatterplot( state=0|1 )

**Description :** Affiche ou masque le nuage de points des tests d&apos;équivalence. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Scatterplot( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] <<
Get Scriptable Object);
scobj << Scatterplot( 0 );

```

### Test Report

**Syntaxe :** obj << Equivalence Tests( ..., Test Report( state=0|1 ) );

scobj << Test Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui résume les tests d&apos;équivalence, les tests de supériorité, ou les tests de non-infériorité des moyennes ou des écarts-types. Actif par défaut.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Test Report( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] <<
Get Scriptable Object);
scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### Confidence Quantile

**Syntaxe :** obj << Each Pair( 1, Confidence Quantile( state=0|1 ) );

obj << All Pairs( 1, Confidence Quantile( state=0|1 ) );

obj << With Best( 1, Confidence Quantile( state=0|1 ) );

obj << With Control( 1, Confidence Quantile( state=0|1 ) );

obj << Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**Description :** Affiche ou masque la ou les valeurs critiques et le niveau alpha pris en compte pour la comparaison des moyennes. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

 Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

### Connecting Letters Report

**Syntaxe :** obj << Each Pair( 1, Connecting Letters Report( state=0|1 ) );

obj << All Pairs( 1, Connecting Letters Report( state=0|1 ) );

obj << Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**Description :** Affiche ou masque le rapport classique codé par lettre où les moyennes ne partageant pas une lettre sont significativement différentes. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

 Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

### Detailed Comparisons Report

**Syntaxe :** obj << Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**Description :** Affiche ou masque un rapport détaillé pour chaque comparaison. Chaque section illustre la différence entre les niveaux, l’erreur standard et les intervalles de confiance, les rapports t, les p-values et les degrés de liberté. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

### Difference Matrix

**Syntaxe :** obj << Each Pair( 1, Difference Matrix( state=0|1 ) );

obj << All Pairs( 1, Difference Matrix( state=0|1 ) );

obj << With Best( 1, Difference Matrix( state=0|1 ) );

obj << With Control( 1, Difference Matrix( state=0|1 ) );

obj << Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**Description :** Affiche ou masque un tableau avec toutes les différences des moyennes. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Difference Matrix( 1 ) );

```

### Dunnett's Lower

**Syntaxe :** obj << Dunnett&apos;s Lower( state=0|1 )

**Description :** Affiche ou masque un test t unilatéral inférieur de Dunnett, qui détermine si les moyennes sont inférieures à la moyenne d&apos;un groupe de contrôle.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

### Dunnett's Upper

**Syntaxe :** obj << Dunnett&apos;s Upper( state=0|1 )

**Description :** Affiche ou masque un test t unilatéral supérieur de Dunnett, qui détermine si les moyennes sont supérieures à la moyenne d&apos;un groupe de contrôle.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

### LSD Threshold Matrix

**Syntaxe :** obj << Each Pair( 1, LSD Threshold Matrix( state=0|1 ) );

obj << All Pairs( 1, LSD Threshold Matrix( state=0|1 ) );

obj << With Best( 1, LSD Threshold Matrix( state=0|1 ) );

obj << With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**Description :** Affiche ou masque une matrice des différences par paire des moyennes moins la différence la moins significative de ces moyennes. Une valeur positive indique une paire de moyennes significativement différentes. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

 Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

### Ordered Differences Report

**Syntaxe :** obj << Each Pair( 1, Ordered Differences Report( state=0|1 ) );

obj << All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**Description :** Affiche ou masque toutes les différences par paire côté positif, l&apos;erreur standard de la différence, les intervalles de confiance, les p-values, et un graphique de la magnitude de la différence avec les intervalles de confiance superposés. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

 Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

### Ordered Ratio Report

**Syntaxe :** obj << Each Pair( 1, Ordered Differences Report( state=0|1 ) );

obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**Description :** Affiche ou masque toutes les différences par paire côté positif, l&apos;erreur standard de la différence, les intervalles de confiance, les p-values, et un graphique de la magnitude de la différence avec les intervalles de confiance superposés. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

 Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

### Ratio Matrix

**Syntaxe :** obj << Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) );

obj << Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**Description :** Affiche ou masque un tableau avec toutes les différences des moyennes. 



Each Pair est équivalent à Student&apos;s t. All Pairs est équivalent à Tukey HSD. With Best est équivalent à Hsu MCB. With Control est équivalent à Dunnett&apos;s. Each Pair Stepwise est équivalent à Newman-Keuls.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### Nemenyi Test

**Syntaxe :** obj << Nemenyi Test( state=0|1 )

**Description :** Affiche ou masque un rapport du test de Nemenyi. Le test de Nemenyi est un test post-hoc par paire pour les comparaisons multiples des sommes des rangs moyens pour les données bloquées non répliquées. Ce test est généralement conduit post-hoc après des résultats significatifs du test de Friedman.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### ANOM

**Syntaxe :** obj << ANOM( state=0|1, <chart options> )

**Description :** Compare chaque moyenne de groupe à la moyenne globale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1 );

```

### ANOM for Ranges

**Syntaxe :** obj << ANOM for Ranges( state=0|1, <chart options> )

**Description :** Test d&apos;inégalité de la variance par la comparaison des étendues de groupe à l&apos;étendue moyenne globale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Ranges( 1 );

```

### ANOM for Variances

**Syntaxe :** obj << ANOM for Variances( state=0|1, <chart options> )

**Description :** Effectue le test des variances inégales en comparant les écarts-types de groupe à l’écart-type résiduel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1 );

```

### ANOM for Variances with Levene(ADM)

**Syntaxe :** obj << "ANOM for Variances with Levene(ADM)"n( state=0|1, <chart options> )

**Description :** Effectue un test de variance inégale en comparant les moyennes de groupe des écarts absolus moyens (ADM) avec la moyenne générale des ADM.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

### ANOM with Transformed Ranks

**Syntaxe :** obj << ANOM with Transformed Ranks( state=0|1, <chart options> )

**Description :** Compare le rang transformé de chaque moyenne de groupe avec le rang transformé de la moyenne globale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1 );

```

### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### All Graphs

**Syntaxe :** obj << All Graphs( state=0|1 )

**Description :** Affiche ou masque le graphique Univarié. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << All Graphs( 0 );

```

### All Pairs

**Syntaxe :** obj << All Pairs( state=0|1 ); 

obj << Tukey HSD( state=0|1 ); 

obj << "All Pairs, Tukey HSD"n( state=0|1 )

**Description :** Calcule le test HSD (Honestly Significance Difference) de Tukey ; ce test protège le taux d&apos;erreur global.  Pour en savoir plus sur les options d’affichage, consultez les messages de comparaison des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Block

**Syntaxe :** obj << Block( column )

**Description :** Spécifie une variable de bloc. Lorsque cette colonne est spécifiée, les valeurs de la variable de réponse sont centrées autour de la variable de bloc.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

### Box Plots

**Syntaxe :** obj << Box Plots( state=0|1 )

**Description :** Affiche ou masque les boîtes à moustaches des valeurs aberrantes pour chaque groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Box Plots( 1 );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntaxe :** obj << By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );

```

### CDF Plot

**Syntaxe :** obj << CDF Plot( state=0|1 )

**Description :** Affiche ou masque la fonction de distribution cumulée pour tous les groupes dans le rapport Univarié.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << CDF Plot( 1 );

```

### Cauchy Fit

**Syntaxe :** obj << Cauchy Fit( state=0|1 )

**Description :** Présume que les erreurs ont une distribution de Cauchy. L&apos;ajustement de Cauchy est une méthode robuste capable de gérer les valeurs aberrantes extrêmes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Cauchy Fit( 1 );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Compare Densities

**Syntaxe :** obj << Compare Densities( state=0|1 )

**Description :** Affiche ou masque un graphique des fonctions de densité de probabilité superposées pour chaque groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Compare Densities( 1 );

```

### Comparison Circles

**Syntaxe :** obj << Comparison Circles( state=0|1 )

**Description :** Affiche ou masque les cercles de comparaison. Cette option est uniquement disponible lorsqu&apos;un rapport de comparaisons multiples est ouvert. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
Wait( 2 );
obj << Comparison Circles( 0 );

```

### Composition of Densities

**Syntaxe :** obj << Composition of Densities( state=0|1 )

**Description :** Affiche ou masque un graphique des densités additionnées, pondérées en fonction du dénombrement de chaque groupe. Sur l&apos;ensemble de la plage de la variable X, le graphique Composition des densités indique la contribution de chaque groupe à la densité totale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Composition of Densities( 1 );

```

### Connect Means

**Syntaxe :** obj << Connect Means( state=0|1 )

**Description :** Affiche ou masque des lignes droites qui relient les moyennes du groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Connect Means( 1 );

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Data Table Window;

```

### Dunn All Pairs for Joint Ranks

**Syntaxe :** obj << Dunn All Pairs for Joint Ranks( state=0|1 )

**Description :** Affiche ou masque le test de Dunn pour toutes les paires avec la méthode des rangs joints. Ce test applique l&apos;ajustement de Bonferroni, mais risque d&apos;augmenter le taux d&apos;erreur global.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn All Pairs for Joint Ranks( 1 );

```

### Dunn With Control for Joint Ranks

**Syntaxe :** obj << Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**Description :** Affiche ou masque le test de Dunn avec un groupe de contrôle avec la méthode des rangs joints. Ce test applique l&apos;ajustement de Bonferroni, mais risque d&apos;augmenter le taux d&apos;erreur global.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn With Control for Joint Ranks( 1, {12} );

```

### Dunnett's

**Syntaxe :** obj << With Control( state=0|1, {control ID} ); 

obj << "Dunnett&apos;s"n( state=0|1, {control ID} ); 

obj << "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Description :** Calcule le test de Dunnett, qui détermine si les moyennes sont différentes de la moyenne d’un groupe de contrôle. Pour en savoir plus sur les options d’affichage, consultez les messages de comparaisons des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

### Each Pair

**Syntaxe :** obj << Each Pair( state=0|1 ); 

obj << "Student&apos;s t"n( state=0|1 ); 

obj << "Each Pair, Student&apos;s t"n( state=0|1 )

**Description :** Calcule les comparaisons individuelles par paire à l’aide des tests de Student sans aucun ajustement pour les tests multiples. Pour en savoir plus sur les options d’affichage, consultez les messages pour les comparaisons des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

### Each Pair Stepwise

**Syntaxe :** obj << Each Pair Stepwise( state=0|1 ); 

obj << "Newman-Keuls"n( state=0|1 ); 

obj << "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Description :** Calcule le test de Newman-Keuls afin de déterminer s&apos;il y a des différences entre les moyennes à l&apos;aide du test de l&apos;étendue studentisée dans une procédure pas à pas. Aussi connu sous le nom de méthode Student-Newman-Keuls, ce test est moins classique et plus puissant qu&apos;un test HSD de Tukey. Pour en savoir plus sur les options d’affichage, consultez les messages de comparaisons des moyennes univariées.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

### Equivalence Tests

**Syntaxe :** obj << Equivalence Tests( difference, <alpha=.05>, <"Pooled Variance"|"Unequal Variances">, <test type> )

**Description :** Vérifie que les moyennes ne diffèrent pas de plus d&apos;une certain quantité (différence) pour être pratiquement équivalentes. C&apos;est l&apos;inverse du test de significativité habituel. Alpha, la présomption de variance et le type de test sont des arguments facultatifs. Par défaut, la présomption « Variance groupée » est utilisée. L&apos;argument type de test est « Équivalence » par défaut, mais il peut également être utilisé pour spécifier des tests de supériorité ou de non-infériorité.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

### Equivalence Tests of Std Dev

**Syntaxe :** obj << Equivalence Tests of Std Dev( ratio, <alpha=.05>, <test type> )

**Description :** Vérifie que les écarts-types ne diffèrent pas de plus d&apos;une certain ratio pour être pratiquement équivalents. C&apos;est l&apos;inverse du test de significativité habituel. Alpha et le type de test sont des arguments facultatifs. L&apos;argument type de test est « Équivalence » par défaut, mais il peut également être utilisé pour spécifier des tests de supériorité ou de non-infériorité.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

### Freq

**Syntaxe :** obj << Freq( column )

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( _freqcol ) );

```

### Friedman Rank Test

**Syntaxe :** obj << Friedman Rank Test( state=0|1 )

**Description :** Affiche ou masque un test basé sur les scores de rang de Friedman. Les scores de rang de Friedman sont les rangs des données au sein de chaque niveau de la variable de blocs. La version paramétrique de ce test est une ANOVA à mesures répétées. Cette option est uniquement disponible lorsqu&apos;une variable Bloc avec un nombre d&apos;observations identique dans chaque bloc est spécifiée au lancement de la plate-forme.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

### Games-Howell

**Syntaxe :** obj << "Games-Howell"n( state=0|1 );

**Description :** Affiche ou masque un rapport de Games-Howell de comparaisons multiples de toutes les paires de moyennes. Ce test peut être appliqué dans les paramètres lorsqu&apos;il n&apos;est pas possible de supposer que les variances de groupe individuel sont égales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Games-Howell"n( 1 );

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```js

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

```js

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

### Grand Mean

**Syntaxe :** obj << Grand Mean( state=0|1 )

**Description :** Affiche ou masque la moyenne globale de la variable Y. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );
Wait( 2 );
obj << Grand Mean( 1 );

```

### Grouping

**Syntaxe :** obj << Grouping( column(s) )

**Description :** Spécifie les variables du régresseur. Ces variables doivent avoir un type de modélisation ordinal ou nominal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Histograms

**Syntaxe :** obj << Histograms( state=0|1 )

**Description :** Affiche ou masque les histogrammes, alignés côte à côte, à droite du graphique d&apos;origine.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Histograms( 1 );

```

### Hsu MCB

**Syntaxe :** obj << With Best( state=0|1 ); 

obj << Hsu MCB( state=0|1 ); 

obj << "With Best, Hsu MCB"n( state=0|1 )

**Description :** Calcule le test MCB (multiple comparison with best ) de Hsu, afin de déterminer si les moyennes sont inférieures au maximum inconnu. Pour en savoir plus sur les options d’affichage, consultez les messages de comparaisons des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Jonckheere Terpstra Test

**Syntaxe :** obj << Jonckheere Terpstra Test( state=0|1 )

**Description :** Affiche ou masque un rapport du test de Jonckheere-Terpstra, qui est un test non paramétrique des différences ordonnées entre les classes. Il teste l&apos;hypothèse nulle indiquant que la distribution de la variable de réponse ne diffère pas en fonction des classes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
obj = dt << Oneway( Y( :Height ), X( :age ) );
obj << Jonckheere Terpstra Test( 1 );

```

### Kolmogorov Smirnov Exact Test

**Syntaxe :** obj << Kolmogorov Smirnov Exact Test( state=0|1 )

**Description :** Affiche ou masque le test exact de Kolmogorov-Smirnov, qui se base sur la fonction de distribution empirique. Ce test détermine si la distribution de la réponse est identique dans l&apos;ensemble des groupes. Cette option est disponible uniquement lorsque la variable X a exactement deux niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Exact Test( 1 );

```

### Kolmogorov Smirnov Test

**Syntaxe :** obj << Kolmogorov Smirnov Test( state=0|1 )

**Description :** Affiche ou masque un test basé sur la fonction de distribution empirique, qui teste si la distribution de la réponse est identique dans l&apos;ensemble des groupes. Cette option est uniquement disponible lorsque la variable X a exactement deux niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Test( 1 );

```

### Legend

**Syntaxe :** obj << Legend( state=0|1 )

**Description :** Affiche ou masque une légende pour le quantile normal, la fonction de distribution cumulée (CDF), et les graphiques de densité. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway(
	Y( :Height ),
	X( :Age ),
	Plot Quantile by Actual( 1 ),
	Legend( 0 )
);
Wait( 2 );
obj << Legend( 1 );

```

### Line of Fit

**Syntaxe :** obj << Line of Fit( state=0|1 )

**Description :** Affiche ou masque une droite de référence ajustée en fonction des données pour chaque niveau de la variable X sur chaque graphique de quantile ouvert. Cette option est uniquement disponible lorsqu&apos;un graphique de quantile est ouvert. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Line of Fit( 0 );

```

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```js

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

### Matching Column

**Syntaxe :** obj << Matching Column( column )

**Description :** Affiche ou masque une ligne d&apos;ajustement appariée et la ligne d&apos;ajustement correspondante sur le graphique Univarié en fonction d&apos;une variable d&apos;appariement spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );
Wait( 2 );
obj[1] << Matching Column( :sex );
obj[2] << Matching Column( :Age );

```

### Matching Dotted Lines

**Syntaxe :** obj << Matching Dotted Lines( state=0|1 )

**Description :** Affiche ou masque des lignes en pointillés reliant les moyennes en passant par les niveaux manquants de la variable d&apos;appariement. Les valeurs utilisées à la place des moyennes de cellule manquantes sont obtenues à l&apos;aide d&apos;un modèle ANOVA à deux facteurs. Cette option est uniquement disponible lorsque l&apos;option Colonne d&apos;appariement est sélectionnée et toutes les valeurs de la variable d&apos;appariement sont manquantes pour un niveau de la variable X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex[6 :: 8] = "";
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Matching Column( :sex );
Wait( 2 );
obj << Matching Dotted Lines( 1 );

```

### Matching Lines

**Syntaxe :** obj << Matching Lines( state=0|1 )

**Description :** Affiche ou masque des lignes reliant les moyennes de chaque niveau de la variable d&apos;appariement. Cette option est uniquement disponible lorsque l&apos;option Colonne d&apos;appariement est sélectionnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
Wait( 2 );
obj << Matching Lines( 0 );

```

### Mean CI Lines

**Syntaxe :** obj << Mean CI Lines( state=0|1 )

**Description :** Affiche ou masque des lignes aux niveaux de confiance inférieur et supérieur à 95 % pour chaque groupe. Les niveaux de confiance à 95 % sont calculés à l&apos;aide de l&apos;écart-type groupé.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean CI Lines( 1 );

```

### Mean Diamonds

**Syntaxe :** obj << Mean Diamonds( state=0|1 )

**Description :** Affiche ou masque les losanges de la moyenne sur le graphique Univarié. Chaque losange de moyenne couvre un intervalle de confiance à 95 % pour la moyenne du groupe correspondant, avec une ligne horizontale à la moyenne. Les intervalles de confiance à 95 % sont calculés à l&apos;aide de l&apos;écart-type groupé.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Diamonds( 1 );

```

### Mean Error Bars

**Syntaxe :** obj << Mean Error Bars( state=0|1 )

**Description :** Affiche ou masque la moyenne de chaque groupe avec des barres d&apos;erreur situées à une erreur standard au-dessus ou au-dessous de la moyenne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Error Bars( 1 );

```

### Mean Lines

**Syntaxe :** obj << Mean Lines( state=0|1 )

**Description :** Affiche ou masque une ligne à la moyenne de chaque groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Lines( 1 );

```

### Mean of Means

**Syntaxe :** obj << Mean of Means( state=0|1 )

**Description :** Affiche ou masque la moyenne des moyennes du groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean of Means( 1 );

```

### Means and Std Dev

**Syntaxe :** obj << Means and Std Dev( state=0|1 )

**Description :** Affiche ou masque les lignes de moyenne, les barres d&apos;erreur et les lignes d&apos;écart-type sur le graphique Univarié et affiche ou masque une table des statistiques de résumé. Les erreurs standard de la moyenne utilisent les écarts-types des groupes individuels.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means and Std Dev( 1 );

```

### Means/Anova

**Syntaxe :** obj << Means( state=0|1 ); 

obj << "Means/Anova"n( state=0|1)

**Description :** Affiche ou masque les losanges des moyennes sur le graphique Univarié et affiche ou masque un rapport ANOVA. Cette option est uniquement disponible lorsque la variable X a plus de deux niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );

```

### Means/Anova/Pooled t

**Syntaxe :** obj << Means( state=0|1 ); 

obj << "Means/Anova/Pooled t"n( state=0|1)

**Description :** Affiche ou masque les losanges des moyennes sur le graphique Univarié et affiche ou masque un rapport ANOVA. Le rapport ANOVA comprend le rapport de test t groupé qui présume que les deux groupes ont la même variance. Cette option est uniquement disponible lorsque la variable X a exactement deux niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Means( 1 );

```

### Median Exact Test

**Syntaxe :** obj << Median Exact Test( state=0|1 )

**Description :** Affiche ou masque une analyse des scores des médianes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Median Exact Test( 1 );

```

### Median Test

**Syntaxe :** obj << Median Test( state=0|1 )

**Description :** Affiche ou masque un test basé sur les scores de rang moyen. Les scores de rang moyen prennent les valeurs 1 ou 0, selon que le rang est au-dessus ou au-dessous du rang moyen. Le test de la médiane est le plus puissant test de rang pour les erreurs avec distributions exponentielles doubles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Median Test( 1 );

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Newman-Keuls

**Syntaxe :** obj << Each Pair Stepwise( state=0|1 ); 

obj << "Newman-Keuls"n( state=0|1 ); 

obj << "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Description :** Calcule le test de Newman-Keuls afin de déterminer s&apos;il y a des différences entre les moyennes à l&apos;aide du test de l&apos;étendue studentisée dans une procédure pas à pas. Aussi connu sous le nom de méthode Student-Newman-Keuls, ce test est moins classique et plus puissant qu&apos;un test HSD de Tukey. Pour en savoir plus sur les options d’affichage, consultez les messages de comparaisons des moyennes univariées.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

### Normal Quantile Label

**Syntaxe :** obj << Normal Quantile Label( state=0|1 )

**Description :** Affiche ou masque l&apos;échelle de quantile normal sur chaque graphique de quantile ouvert. Cette option est uniquement disponible lorsqu&apos;un graphique de quantile est ouvert. Actif par défaut.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Normal Quantile Label( 0 );

```

### Oneway

**Syntaxe :** Oneway( Y( columns ), X( columns ) )

**Description :** Modélise une réponse continue dans un ensemble de groupes catégoriels. Les méthodes d&apos;analyse incluent l&apos;ANOVA, les comparaisons de moyennes, l&apos;analyse des moyennes et les graphiques des quantiles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```js

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

### Plot Actual by Quantile

**Syntaxe :** obj << Plot Actual by Quantile( state=0|1 )

**Description :** Affiche ou masque un graphique de quantile à droite du graphique Analyse univariée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Actual by Quantile( 1 );

```

### Plot Quantile by Actual

**Syntaxe :** obj << Plot Quantile by Actual( state=0|1 )

**Description :** Affiche ou masque un graphique de quantile avec la variable Y sur l&apos;axe horizontal et les probabilités cumulées sur l&apos;axe vertical.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );

```

### Points

**Syntaxe :** obj << Points( state=0|1 )

**Description :** Affiche ou masque les points des données sur le graphique Univarié. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << Points( 0 );

```

### Points Jittered

**Syntaxe :** obj << Points Jittered( "Aucun(e)"|"Auto"|"Aléatoire uniforme"|"Aléatoire normal"|"Densité aléatoire"|"Groupé"|"Grille"|"Grille hexagonale"|"Essaim d&apos;abeilles"="Auto" )

**Description :** Spécifie l&apos;étalement des points de données. Lorsqu&apos;il est sélectionné, les points de données sont arbitrairement distribués pour éviter de superposer les marqueurs. "Auto" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );
obj << Points Jittered( "Binned" );

```

### Points Spread

**Syntaxe :** obj << Points Spread( state=0|1 )

**Description :** Spécifie l&apos;étalement des points de données. Lorsqu&apos;il est sélectionné, les points de données sont étalés sur la largeur de l&apos;intervalle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Points Spread( 1 );

```

### Pooled Variance

**Syntaxe :** obj << Ratios with Pooled Variance( state=0|1 );

**Description :** Affiche ou masque un rapport de comparaison des rapports de chaque paire de moyennes. En supposant des variances égales, l&apos;intervalle de confiance groupé pour le rapport des moyennes est l&apos;intervalle de confiance de Fieller.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1 );

```

### Power

**Syntaxe :** obj << Power( Alpha( from, <to>, <by> ), Sigma( from, <to>, <by> ), Delta( from, <to>, <by> ), Number( from, <to>, <by> ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**Description :** Rapporte les calculs statistiques de puissance.  Les arguments permettent de spécifier les étendues relatives aux niveaux alpha, sigma, delta ainsi que la taille d&apos;échantillon totale (nombre).  Le cinquième argument spécifie les résultats du rapport.  Le sixième argument demande un graphique de puissance et l’argument Terminé abandonne la fenêtre de dialogue Puissance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), All Graphs( 0 ) );
obj << Power(
	Alpha( 0.05 ),
	Sigma( 3.382, 3.73 ),
	Delta( 2.79679 ),
	Number( 10, 90, 5 ),
	Solve for Power,
	Power Plot,
	Done
);

```

### Proportion of Densities

**Syntaxe :** obj << Proportion of Densities( state=0|1 )

**Description :** Affiche ou masque un graphique de la contribution à la densité apportée par chaque niveau de la variable X. La contribution est affichée en proportion de la densité totale sur l&apos;ensemble de la plage de la variable X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Proportion of Densities( 1 );

```

### Quantiles

**Syntaxe :** obj << Quantiles( state=0|1 )

**Description :** Affiche ou masque des boîtes à moustaches sur le graphique Univarié et affiche ou masque un rapport de quantile.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Quantiles( 1 );

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Report View( "Summary" );

```

### Response

**Syntaxe :** obj << Response( column(s) )

**Description :** Spécifie la ou les réponses continues que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Robust Fit

**Syntaxe :** obj << Robust Fit( state=0|1 )

**Description :** Produit des estimations de Huber équivalentes aux résidus des moindres carrés pour les petits résidus et équivalentes aux plus petites valeurs moyennes pour les grands résidus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );

```

### Robust Means Lines

**Syntaxe :** obj << Robust Means Lines( state=0|1 )

**Description :** Affiche ou masque une ligne à la moyenne robuste de chaque groupe. Cette option est uniquement disponible lorsque l&apos;option Robuste est sélectionnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );
obj << Robust Means Lines( 1 );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Normal Quantiles

**Syntaxe :** obj << Save Normal Quantiles

**Description :** Enregistre les valeurs de quantile normal pour chaque niveau de la variable X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Normal Quantiles;

```

### Save Predicted

**Syntaxe :** obj << Save Predicted

**Description :** Enregistre la moyenne prévue de la variable Y pour chaque niveau de la variable X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Predicted;

```

### Save Residuals

**Syntaxe :** obj << Save Residuals

**Description :** Enregistre les valeurs calculées comme la variable Y moins la moyenne de la variable Y au sein de chaque niveau de la variable X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Residuals;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Script Window;

```

### Save Standardized

**Syntaxe :** obj << Save Standardized

**Description :** Enregistre les valeurs standardisées de la variable Y pour chaque niveau de la variable X. La valeur standardisée est la réponse centrée divisée par l&apos;écart-type au sein de chaque niveau.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Standardized;

```

### Select Group

**Syntaxe :** obj << Select Group( X value )

**Description :** Sélectionne un groupe pour mettre en surbrillance son cercle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );
Wait( 2 );
obj << Select Group( 14 );

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```js

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

```js

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

```js

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

### Set Alpha Level

**Syntaxe :** obj << Set Alpha Level( alpha=0.05 )

**Description :** Modifie le niveau alpha utilisé pour les bornes de l&apos;intervalle de confiance, les losanges des moyennes et les valeurs des niveaux de confiance dans les rapports. "0.05" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

### Set α Level

**Syntaxe :** obj << Set α Level( alpha=0.05 )

**Description :** Modifie le niveau alpha utilisé pour les bornes de l&apos;intervalle de confiance, les losanges des moyennes et les valeurs des niveaux de confiance dans les rapports. "0.05" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

### Standard Deviations

**Syntaxe :** obj << Standard Deviations

**Description :** Lance une fenêtre d&apos;options pour les tests d&apos;équivalence, de supériorité ou de non infériorité des écarts-types. Spécifier le ratio critique.

### Std Dev Lines

**Syntaxe :** obj << Std Dev Lines( state=0|1 )

**Description :** Affiche ou masque des droites situées à un écart-type au-dessus et au-dessous de la moyenne de chaque groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Std Dev Lines( 1 );

```

### Steel With Control

**Syntaxe :** obj << Steel With Control( state = 0|1, {control level} )

**Description :** Affiche ou masque le test de Steel qui contrôle le taux d&apos;erreur global dans la comparaison d&apos;un groupe témoin avec tous les autres groupes. Il s&apos;agit d’une version non paramétrique de la méthode de Dunnett.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Steel With Control( 1, {12} );

```

### Steel-Dwass All Pairs

**Syntaxe :** obj << "Steel-Dwass All Pairs"n( state=0|1 )

**Description :** Affiche ou masque le test de Steel-Dwass qui contrôle le taux d&apos;erreur global. Il s&apos;agit d&apos;une version non paramétrique de la méthode de Tukey.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Steel-Dwass All Pairs"n( 1 );

```

### Student's t

**Syntaxe :** obj << Each Pair( state=0|1 ); 

obj << "Student&apos;s t"n( state=0|1 ); 

obj << "Each Pair, Student&apos;s t"n( state=0|1 )

**Description :** Calcule les comparaisons individuelles par paire à l’aide des tests de Student sans aucun ajustement pour les tests multiples. Pour en savoir plus sur les options d’affichage, consultez les messages pour les comparaisons des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Tukey HSD

**Syntaxe :** obj << All Pairs( state=0|1 ); 

obj << Tukey HSD( state=0|1 ); 

obj << "All Pairs, Tukey HSD"n( state=0|1 )

**Description :** Calcule le test HSD (Honestly Significance Difference) de Tukey ; ce test protège le taux d&apos;erreur global.  Pour en savoir plus sur les options d’affichage, consultez les messages de comparaison des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

### Unequal Variances

**Syntaxe :** obj << Unequal Variances( state=0|1 )

**Description :** Affiche ou masque quatre tests de l&apos;égalité des variances de groupe. Cette option produit également le test de Welch, qui est un test ANOVA comparant les moyennes lorsque les variances au sein des groupes ne sont pas égales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Unequal Variances( 1 );

```

### Unpooled Variance

**Syntaxe :** obj << Ratios with Unpooled Variance( state=0|1 );

**Description :** Affiche ou masque un rapport de comparaison des rapports de chaque paire de moyennes. En supposant des variances inégales, l&apos;intervalle de confiance de Satterthwaite dégroupé pour le rapport des moyennes est calculé.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Unequal Variance( 1 );

```

### Van Der Waerden Exact Test

**Syntaxe :** obj << Van Der Waerden Exact Test( state=0|1 )

**Description :** Affiche ou masque une analyse des scores normaux ou de Van der Waerden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Van Der Waerden Exact Test( 1 );

```

### View Web XML

**Syntaxe :** obj << View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntaxe :** obj << Weight( column )

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( _weightcol ) );

```

### Wilcoxon Each Pair

**Syntaxe :** obj << Wilcoxon Each Pair( state=0|1 )

**Description :** Affiche ou masque le test de Wilcoxon pour toutes les comparaisons individuelles possibles sans ajustement pour les tests multiples. Il s&apos;agit d’une version non paramétrique de la méthode t de Student de chaque paire.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Each Pair( 1 );

```

### Wilcoxon Exact Test

**Syntaxe :** obj << Wilcoxon Exact Test( state=0|1 )

**Description :** Affiche ou masque une analyse des scores de Wilcoxon à l&apos;aide de méthodes exactes pour chaque paire de niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Wilcoxon Exact Test( 1 );

```

### Wilcoxon Test

**Syntaxe :** obj << Wilcoxon Test( state=0|1 )

**Description :** Affiche ou masque un test basé sur les scores de rang de Wilcoxon. Les scores de rang de Wilcoxon sont les rangs simples des données. Le test de Wilcoxon est le plus puissant test de rang pour les erreurs avec distributions logistiques. Si la variable X a exactement deux niveaux, le test de Wilcoxon est équivalent au test de Mann-Whitney. Si la variable X a plus de deux niveaux, le test de Kruskal-Wallis est effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Test( 1 );

```

### Window View

**Syntaxe :** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```js

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

### With Best

**Syntaxe :** obj << With Best( state=0|1 ); 

obj << Hsu MCB( state=0|1 ); 

obj << "With Best, Hsu MCB"n( state=0|1 )

**Description :** Calcule le test MCB (multiple comparison with best ) de Hsu, afin de déterminer si les moyennes sont inférieures au maximum inconnu. Pour en savoir plus sur les options d’affichage, consultez les messages de comparaisons des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

### With Control

**Syntaxe :** obj << With Control( state=0|1, {control ID} ); 

obj << "Dunnett&apos;s"n( state=0|1, {control ID} ); 

obj << "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Description :** Calcule le test de Dunnett, qui détermine si les moyennes sont différentes de la moyenne d’un groupe de contrôle. Pour en savoir plus sur les options d’affichage, consultez les messages de comparaisons des moyennes univariées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

### X

**Syntaxe :** obj << X( column(s) )

**Description :** Spécifie les variables du régresseur. Ces variables doivent avoir un type de modélisation ordinal ou nominal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### X Axis Proportional

**Syntaxe :** obj << X Axis Proportional( state=0|1 )

**Description :** Spécifie l&apos;espacement sur l&apos;axe horizontal. Lorsqu&apos;il est sélectionné, l&apos;espacement est proportionnel au nombre d&apos;observations de chaque niveau. Cette option n&apos;est pas disponible lorsque l&apos;option Colonne d&apos;appariement est sélectionnée. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );
Wait( 2 );
obj << X Axis Proportional( 1 );

```

### Y

**Syntaxe :** obj << Y( column(s) )

**Description :** Spécifie la ou les réponses continues que vous souhaitez analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### t Test

**Syntaxe :** obj << t Test( state=0|1 )

**Description :** Affiche ou masque un rapport de test t présumant que les variances ne sont pas égales. Cette option est uniquement disponible lorsque la variable X a exactement deux niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << t Test( 1 );

```

### van der Waerden Test

**Syntaxe :** obj << van der Waerden Test( state=0|1 )

**Description :** Affiche ou masque un test basé sur les scores de rang de Van der Waerden. Les scores de rang de Van der Waerden sont les rangs des données divisés par un plus une valeur de score. La valeur de score est le nombre d&apos;observations transformé en un score normal en appliquant l&apos;inverse de la fonction de distribution normale. Le test de Van der Waerden est le plus puissant test de rang pour les erreurs avec distributions normales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << van der Waerden Test( 1 );

```

