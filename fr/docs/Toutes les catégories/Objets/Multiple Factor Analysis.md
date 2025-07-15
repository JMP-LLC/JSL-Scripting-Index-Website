# Multiple Factor Analysis



## Colonnes

### By

**Syntaxe :** obj = Multiple Factor Analysis(...&lt;By( column(s) )&gt;...)

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);

```

### Freq

**Syntaxe :** obj = Multiple Factor Analysis(...&lt;Freq( column )&gt;...)

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	Freq( _freqcol )
);

```

### MFA Blocks

**Syntaxe :** obj = Multiple Factor Analysis(...&lt;MFA Blocks( column )&gt;...)

**Description :** Spécifie les groupes de colonnes qui devraient être traités en tant que tables secondaires dans l&apos;analyse factorielle multiple.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

### Product ID

**Syntaxe :** obj = Multiple Factor Analysis(...&lt;Product ID( column )&gt;...)

**Description :** Spécifie les colonnes d&apos;éléments ou de produits à analyser.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

### Supplementary

**Syntaxe :** obj = Multiple Factor Analysis(...&lt;Supplementary( column )&gt;...)

**Description :** Spécifie une ou plusieurs variables supplémentaires. Les variables supplémentaires ne sont utilisées dans aucun calcul sur la plate-forme. Leur inclusion n&apos;affecte pas les résultats. Elles peuvent améliorer l&apos;interprétation des données ou servir à des analyses futures.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	Z( :Region ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

### Weight

**Syntaxe :** obj = Multiple Factor Analysis(...&lt;Weight( column )&gt;...)

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	Weight( _weightcol )
);

```

### Z

**Syntaxe :** obj = Multiple Factor Analysis(...&lt;Z( column )&gt;...)

**Description :** Spécifie une ou plusieurs variables supplémentaires. Les variables supplémentaires ne sont utilisées dans aucun calcul sur la plate-forme. Leur inclusion n&apos;affecte pas les résultats. Elles peuvent améliorer l&apos;interprétation des données ou servir à des analyses futures.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	Z( :Region ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

## Constructeurs associés

### Multiple Factor Analysis

**Syntaxe :** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**Description :** Analyse la concordance des panélistes dans l&apos;analyse des données sensorielles.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);

```

## Messages d'éléments

### Arrow Lines

**Syntaxe :** obj &lt;&lt; Arrow Lines( state=0|1 )

**Description :** Affiche ou masque les traits de flèche sur le graphique. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Arrow Lines( 0 );

```

### Biplot

**Syntaxe :** obj &lt;&lt; Biplot( state=0|1 )

**Description :** Affiche ou masque un graphique qui superpose le graphique des scores et le graphique des loadings pour le nombre de composantes spécifié.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Biplot( 1 );

```

### Biplot Select Component

**Syntaxe :** obj&lt;&lt;Biplot Select Component( 1, 3 )

**Description :** Sélectionne les composantes utilisées comme axes dans le biplot.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Biplot Select Component( 1, 3 );

```

### Block Partial Contributions

**Syntaxe :** obj &lt;&lt; Block Partial Contributions( state=0|1 )

**Description :** Affiche ou masque la contribution des blocs qui correspond à la somme des contributions de leurs variables.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Block Partial Contributions( 1 );

```

### Block Partial Inertias

**Syntaxe :** obj &lt;&lt; Block Partial Inertias( state=0|1 )

**Description :** Affiche ou masque la contribution des blocs redimensionnés, de sorte que la somme de l&apos;inertie entre les blocs soit égale à la valeur propre de la composante principale.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Block Partial Inertias( 1 );

```

### Block Partial and Consensus Correlations

**Syntaxe :** obj &lt;&lt; Block Partial and Consensus Correlations( state=0|1 )

**Description :** Affiche ou masque une matrice des coefficients indiquant les corrélations entre les scores partiels et consensuels sur chaque dimension des composantes principales.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Block Partial and Consensus Correlations( 1 );

```

### Block Squared Cosines

**Syntaxe :** obj &lt;&lt; Block Squared Cosines( state=0|1 )

**Description :** Affiche ou masque la proportion de superposition dans la variance entre les blocs et les dimensions des composantes principales.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Block Squared Cosines( 1 );

```

### Block Weights

**Syntaxe :** obj &lt;&lt; Block Weights( state=0|1 )

**Description :** Affiche ou masque une matrice de pondération de blocs qui est l&apos;inverse de la première valeur singulière de chaque bloc.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Block Weights( 1 );

```

### Consensus Map

**Syntaxe :** obj &lt;&lt; Consensus Map( state=0|1 )

**Description :** Affiche ou masque une carte consensuelle qui superpose les scores centroïdes et les scores partiels de chaque bloc. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Consensus Map( 0 );

```

### Consensus Map Select Component

**Syntaxe :** obj&lt;&lt;Consensus Map Select Component( 1, 3 )

**Description :** Sélectionne les composantes utilisées comme axes dans la carte consensuelle.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Consensus Map Select Component( 1, 3 );

```

### Eigenvalues

**Syntaxe :** obj &lt;&lt; Eigenvalues( state=0|1 )

**Description :** Affiche ou masque les valeurs propres triées, leur pourcentage de variation et leur pourcentage de variation cumulé.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**Syntaxe :** obj &lt;&lt; Eigenvectors( state=0|1 )

**Description :** Affiche ou masque un rapport des vecteurs propres pour chacune des composantes principales.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Eigenvectors( 1 );

```

### Highlight Product

**Syntaxe :** obj&lt;&lt;Partial Axes Plot Select Component( 1, 3 )

**Description :** Met les clusters de produits en surbrillance selon la valeur inertielle spécifiée.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	),
	Consensus Map( 1 )
);
obj << Highlight Product( "Small Inertia", 4 );

```

### Lg Coefficients

**Syntaxe :** obj &lt;&lt; Lg Coefficients( state=0|1 )

**Description :** Affiche ou masque une matrice des coefficients indiquant la similitude entre les blocs. Équivalent aux corrélations RV non standardisées.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Lg Coefficients( 1 );

```

### Partial Axes Plot

**Syntaxe :** obj &lt;&lt; Partial Axes Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des axes partiels qui montre le lien entre le plan centroïde et les blocs.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Partial Axes Plot( 1 );

```

### Partial Axes Plot Select Component

**Syntaxe :** obj&lt;&lt;Partial Axes Plot Select Component( 1, 3 )

**Description :** Sélectionne les composantes utilisées comme axes dans le graphique des axes partiels.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	),
	Partial Axes Plot( 1 )
);
obj << Partial Axes Plot Select component( 1, 3 );

```

### RV Correlations

**Syntaxe :** obj &lt;&lt; RV Correlations( state=0|1 )

**Description :** Affiche ou masque une matrice des coefficients de corrélation au carré entre les blocs. Les coefficients RV ont une étendue allant de 0 à 1.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << RV Correlations( 1 );

```

### Save Block Partial Scores

**Syntaxe :** obj &lt;&lt; Save Block Partial Scores

**Description :** Enregistre le score partiel des blocs dans de nouvelles colonnes d&apos;une table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Save Block Partial Scores();

```

### Save Individual Partial Contributions

**Syntaxe :** obj &lt;&lt; Save Individual Partial Contributions

**Description :** Enregistre mes contributions partielles individuelles dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Save Individual Partial Contributions();

```

### Save Individual Scores

**Syntaxe :** obj &lt;&lt; Save Individual Scores

**Description :** Enregistre le nombre donné de composantes principales dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Save Individual Scores();

```

### Save Individual Squared Cosines

**Syntaxe :** obj &lt;&lt; Save Individual Squared Cosines

**Description :** Enregistre les cosinus carrés individuels dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Save Individual Squared Cosines();

```

### Save Partial Axes Coordinates

**Syntaxe :** obj &lt;&lt; Save Partial Axes Coordinates

**Description :** Enregistre les coordonnées des axes partiels dans de nouvelles colonnes d&apos;une table de données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Save Partial Axes Coordinates();

```

### Show Labels

**Syntaxe :** obj &lt;&lt; Show Labels( state=0|1 )

**Description :** Affiche ou masque les étiquettes des points du graphique.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Show Labels( 1 );

```

### Summary Plot Select Component

**Syntaxe :** obj&lt;&lt;Summary Plot Select Component( 1, 3 )

**Description :** Sélectionne les composantes utilisées comme axes dans les graphiques de résumé.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Summary Plot Select Component( 1, 3 );

```

### Summary Plots

**Syntaxe :** obj &lt;&lt; Summary Plots( state=0|1 )

**Description :** Affiche ou masque un nœud de contour contenant un graphique des valeurs propres, un graphique des scores et un graphique des loadings. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Summary Plots( 0 );

```

### Variable Loadings

**Syntaxe :** obj &lt;&lt; Variable Loadings( state=0|1 )

**Description :** Affiche ou masque un rapport affichant les colonnes correspondant aux loadings des composantes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Variable Loadings( 1 );

```

### Variable Partial Contributions

**Syntaxe :** obj &lt;&lt; Variable Partial Contributions( state=0|1 )

**Description :** Affiche ou masque une table contenant les contributions partielles des variables et un graphique des contributions partielles pour les trois premières composantes principales.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Variable Partial Contributions( 1 );

```

### Variable Squared Cosines

**Syntaxe :** obj &lt;&lt; Variable Squared Cosines( state=0|1 )

**Description :** Affiche ou masque une table contenant les cosinus carrés des variables.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness}
	)
);
obj << Variable Squared Cosines( 1 );

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

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

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

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

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

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

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

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

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
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

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

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

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

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

**Syntaxe :** obj &lt;&lt; Local Data Filter

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

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

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

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj &lt;&lt; Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj &lt;&lt; Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

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

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

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

**Syntaxe :** obj &lt;&lt; Report;Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
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

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

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

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

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

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Multiple Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

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

