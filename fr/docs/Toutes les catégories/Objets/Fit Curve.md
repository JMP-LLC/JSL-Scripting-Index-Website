# Fit Curve



## ANOM for Estimates

### Messages d'éléments

#### Point Options

**Syntaxe :** obj << ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntaxe :** obj << ANOM( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntaxe :** obj << ANOM( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale (moyenne générale) sur le graphique de l&apos;analyse des moyennes (ANOM). Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntaxe :** obj << ANOM( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique de l&apos;analyse des moyennes (ANOM). Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntaxe :** obj << ANOM( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique de l&apos;analyse des moyennes (ANOM). Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntaxe :** obj << ANOM( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les moyennes du groupe et les limites de décision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Colonnes

### By

**Syntaxe :** obj = Fit Curve(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;

```

### Freq

**Syntaxe :** obj = Fit Curve(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Freq( _freqcol )
);
obj << Fit Logistic 4P;

```

### Group

**Syntaxe :** obj = Fit Curve(...<Group( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une variable de groupement. Le modèle ajusté a des paramètres distincts pour chaque niveau de la variable de groupement.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Regressor

**Syntaxe :** obj = Fit Curve(...<Regressor( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les régresseurs.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Response

**Syntaxe :** obj = Fit Curve(...Response( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les réponses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Supplementary

**Syntaxe :** obj = Fit Curve(...<Supplementary( column(s) )>...)

**Description :** Spécifie une ou plusieurs variables supplémentaires. Les variables supplémentaires ne sont utilisées dans aucun calcul sur la plate-forme. Leur inclusion n&apos;affecte pas les résultats. Elles peuvent améliorer l&apos;interprétation des données ou servir à des analyses futures.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```

### Weight

**Syntaxe :** obj = Fit Curve(...<Weight( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Weight( _weightcol )
);
obj << Fit Logistic 4P;

```

### X

**Syntaxe :** obj = Fit Curve(...<X( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les régresseurs.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Y

**Syntaxe :** obj = Fit Curve(...Y( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les réponses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Z

**Syntaxe :** obj = Fit Curve(...<Z( column(s) )>...)

**Description :** Spécifie une ou plusieurs variables supplémentaires. Les variables supplémentaires ne sont utilisées dans aucun calcul sur la plate-forme. Leur inclusion n&apos;affecte pas les résultats. Elles peuvent améliorer l&apos;interprétation des données ou servir à des analyses futures.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```

## Constructeurs associés

### Fit Curve

**Syntaxe :** Fit Curve( Y( column ), X( column ) )

**Description :** Ajuste une variété de modèles non linéaires intégrés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

## Messages d'éléments

### F1 Analysis

**Syntaxe :** obj << F1 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Description :** Effectue une analyse de la courbe de dissolution en utilisant le facteur de différence F1, qui mesure la différence en pourcentage entre les courbes du comprimé de référence et les courbes du comprimé de test à chaque point temporel.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F1 Analysis(
	Alpha( 0.05 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 2000 ),
	Random Seed( 1234 )
);

```

### F2 Analysis

**Syntaxe :** obj << F2 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Description :** Effectue une analyse de la courbe de dissolution à l&apos;aide du facteur de similarité F2, qui mesure la similarité du pourcentage de dissolution entre les courbes du comprimé de référence et les courbes du comprimé de test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F2 Analysis(
	Alpha( 0.1 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 3000 ),
	Random Seed( 4321 )
);

```

### Fit Antoine Equation

**Syntaxe :** obj << Fit Antoine Equation

**Description :** Ajuste le modèle d&apos;Antoine aux données. Ce modèle est souvent utilisé pour modéliser la pression de la vapeur comme une fonction de la température.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Fit Curve( Y( :Algae Density ), X( :Days ), Group( :Treatment ) );
obj << Fit Antoine Equation;

```

### Fit Asymmetric Gaussian Peak

**Syntaxe :** obj << Fit Asymmetric Gaussian Peak

### Fit Biexponential 4P

**Syntaxe :** obj << Fit Biexponential 4P

**Description :** Ajuste un modèle biexponentiel à quatre paramètres aux données.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 *
	Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 4P;

```

### Fit Biexponential 5P

**Syntaxe :** obj << Fit Biexponential 5P

**Description :** Ajuste un modèle biexponentiel à cinq paramètres aux données.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 *
	Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 5P;

```

### Fit Cell Growth 4P

**Syntaxe :** obj << Fit Cell Growth 4P

**Description :** Ajuste un modèle de croissance et décroissance à quatre paramètres en fonction des données.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Cell Growth 4P;

```

### Fit Cubic

**Syntaxe :** obj << Fit Cubic

**Description :** Ajuste un modèle cubique aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Cubic;

```

### Fit ExGaussian Peak

**Syntaxe :** obj << Fit ExGaussian Peak

**Description :** Ajuste un modèle de pic gaussien modifié exponentiellement aux données.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit ExGaussian Peak;

```

### Fit Exponential 2P

**Syntaxe :** obj << Fit Exponential 2P

**Description :** Ajuste un modèle exponentiel à deux paramètres aux données. La réponse de l’ajustement présente une asymptote à zéro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 2P;

```

### Fit Exponential 3P

**Syntaxe :** obj << Fit Exponential 3P

**Description :** Ajuste un modèle exponentiel à trois paramètres aux données. La réponse de l’ajustement est limitée par une asymptote estimée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 3P;

```

### Fit First Order Rate

**Syntaxe :** obj << Fit First Order Rate

**Description :** Ajuste un modèle de taux de premier ordre aux données. Cette option, utile dans la modélisation des réponses chimiques, n&apos;est disponible que lorsque les valeurs X sont non-négatives.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order Rate;

```

### Fit First Order with Equilibrium

**Syntaxe :** obj << Fit First Order with Equilibrium

**Description :** Ajuste un modèle de taux du premier ordre avec équilibre aux données. Cette option, utile dans la modélisation des réponses chimiques, n&apos;est disponible que lorsque les valeurs X sont non-négatives.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Equilibrium;

```

### Fit First Order with Limits

**Syntaxe :** obj << Fit First Order with Limits

**Description :** Ajuste un modèle de taux du premier ordre avec des limites aux données. Cette option, utile dans la modélisation des réponses chimiques, n&apos;est disponible que lorsque les valeurs X sont non-négatives.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Limits;

```

### Fit Gaussian Peak

**Syntaxe :** obj << Fit Gaussian Peak

**Description :** Ajuste un modèle de pic gaussien aux données.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak;

```

### Fit Gompertz 3P

**Syntaxe :** obj << Fit Gompertz 3P

**Description :** Ajuste une courbe Gompertz à trois paramètres aux données. La réponse de l’ajustement est limitée entre zéro et une asymptote estimée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Gompertz 3P;

```

### Fit Gompertz 4P

**Syntaxe :** obj << Fit Gompertz 4P

**Description :** Ajuste une courbe Gompertz à quatre paramètres aux données. La réponse de l’ajustement est limitée par deux asymptotes estimées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Gompertz 4P;

```

### Fit Higuchi

**Syntaxe :** obj << Fit Higuchi

**Description :** Ajuste un modèle Higuchi aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi;

```

### Fit Higuchi with Burst

**Syntaxe :** obj << Fit Higuchi with Burst

**Description :** Ajuste un modèle Higuchi avec une composante d&apos;éclatement aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Burst;

```

### Fit Higuchi with Lag

**Syntaxe :** obj << Fit Higuchi with Lag

**Description :** Ajuste un modèle Higuchi avec un composant de décalage aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Lag;

```

### Fit Hixson-Crowell

**Syntaxe :** obj << "Fit Hixson-Crowell"n

**Description :** Ajuste un modèle Hixson-Crowell aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell"n;

```

### Fit Hixson-Crowell with Lag

**Syntaxe :** obj << "Fit Hixson-Crowell with Lag"n

**Description :** Ajuste un modèle Hixson-Crowell avec un composant de décalage aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell with Lag"n;

```

### Fit Hybrid Exponential

**Syntaxe :** obj << Fit Hybrid Exponential

**Description :** Ajuste un modèle exponentiel hybride aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Negative Exponential.jmp" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Hybrid Exponential;

```

### Fit Inverse Michaelis-Menten

**Syntaxe :** obj << Fit Inverse Michaelis Menten; 

obj << "Fit Inverse Michaelis-Menten"n

**Description :** Ajuste le modèle cinétique d&apos;enzyme de Michaelis-Menten inverse aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Inverse Michaelis Menten;

```

### Fit Korsmeyer-Peppas

**Syntaxe :** obj << "Fit Korsmeyer-Peppas"n

**Description :** Ajuste un modèle Korsmeyer-Peppas aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas"n;

```

### Fit Korsmeyer-Peppas with Burst

**Syntaxe :** obj << "Fit Korsmeyer-Peppas with Burst"n

**Description :** Ajuste un modèle Korsmeyer-Peppas avec une composante d&apos;éclatement aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Burst"n;

```

### Fit Korsmeyer-Peppas with Lag

**Syntaxe :** obj << "Fit Korsmeyer-Peppas with Lag"n

**Description :** Ajuste un modèle Korsmeyer-Peppas avec une composante de décalage aux données. Il s&apos;agit d&apos;une technique paramétrique permettant de comparer les courbes de dissolution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Lag"n;

```

### Fit Linear

**Syntaxe :** obj << Fit Linear

**Description :** Ajuste un modèle de régression des moindres carrés en fonction des données. La ligne de l&apos;ajustement est affichée sur le graphique et un rapport d&apos;ajustement est fourni.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Linear;

```

### Fit Logistic 2P

**Syntaxe :** obj << Fit Logistic 2P

**Description :** Ajuste une courbe logistique à deux paramètres aux données. La réponse de l’ajustement est limitée entre deux asymptotes, à zéro et à 1.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 2P;

```

### Fit Logistic 3P

**Syntaxe :** obj << Fit Logistic 3P

**Description :** Ajuste une courbe logistique à trois paramètres aux données. La réponse de l’ajustement est limitée entre zéro et une asymptote estimée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 3P;

```

### Fit Logistic 4P

**Syntaxe :** obj << Fit Logistic 4P

**Description :** Ajuste un modèle logistique à quatre paramètres aux données. La réponse de l’ajustement est limitée par deux asymptotes estimées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Logistic 4P Hill

**Syntaxe :** obj << Fit Logistic 4P Hill

**Description :** Ajuste un modèle logistique à quatre paramètres aux données. La réponse de l’ajustement est limitée par deux asymptotes estimées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P Hill;

```

### Fit Logistic 4P Rodbard

**Syntaxe :** obj << Fit Logistic 4P Rodbard

**Description :** Ajuste un modèle logistique à quatre paramètres aux données. La réponse de l’ajustement est limitée par deux asymptotes estimées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Logistic 4P Rodbard;

```

### Fit Logistic 5P

**Syntaxe :** obj << Fit Logistic 5P

**Description :** Ajuste un modèle logistique à cinq paramètres aux données. La réponse de l’ajustement est limitée par deux asymptotes estimées. Contrairement aux autres courbes logistiques, la courbe logistique à cinq paramètres n’est pas symétrique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P;

```

### Fit Lorentzian Peak

**Syntaxe :** obj << Fit Lorentzian Peak

**Description :** Ajuste un modèle Pic de Lorentz aux données.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * (5 / ((xd[i] - 6) ^ 2 + 25)) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Lorentzian Peak;

```

### Fit Mechanistic Growth

**Syntaxe :** obj << Fit Mechanistic Growth

**Description :** Ajuste un modèle de croissance mécanistique aux données. Il s’agit d’une reparamétrisation du modèle exponentiel 3P.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );
obj = dt << Fit Curve( Y( :yield ), X( :nitrate ) );
obj << Fit Mechanistic Growth;

```

### Fit Michaelis-Menten

**Syntaxe :** obj << Fit Michaelis Menten; 

obj << "Fit Michaelis-Menten"n

**Description :** Ajuste le modèle cinétique d&apos;enzyme de Michaelis-Menten aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Michaelis Menten;

```

### Fit One Compartment Oral Dose

**Syntaxe :** obj << Fit One Compartment Oral Dose

**Description :** Ajuste un modèle Un Compartiment - Dose orale aux données. Ce modèle est adapté à la modélisation de la concentration d’un médicament dans le corps après l’administration d’une dose par voie orale.

```jsl

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9
4.55, 12 3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose;

```

### Fit Pearson VII Peak

**Syntaxe :** obj << Fit Pearson VII Peak

### Fit Power Model

**Syntaxe :** obj << Fit Power Model

**Description :** Ajuste un modèle puissance aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Power Model;

```

### Fit Probit 2P

**Syntaxe :** obj << Fit Probit 2P

**Description :** Ajuste une courbe Probit à deux paramètres aux données. La réponse de l’ajustement est limitée entre deux asymptotes, à zéro et à un.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 2P;

```

### Fit Probit 3P

**Syntaxe :** obj << Fit Probit 3P

**Description :** Ajuste une courbe Probit à trois paramètres en fonction des données. La réponse de l’ajustement est limitée entre zéro et une asymptote estimée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 3P;

```

### Fit Probit 4P

**Syntaxe :** obj << Fit Probit 4P

**Description :** Ajuste un modèle Probit à quatre paramètres aux données. La réponse de l’ajustement est limitée par deux asymptotes estimées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 4P;

```

### Fit Pseudo-Voigt

**Syntaxe :** obj << Fit Pseudo-Voigt

### Fit Quadratic

**Syntaxe :** obj << Fit Quadratic

**Description :** Ajuste un modèle quadratique aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quadratic;

```

### Fit Quartic

**Syntaxe :** obj << Fit Quartic

**Description :** Ajuste un polynôme d’ordre quatre aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quartic;

```

### Fit Quintic

**Syntaxe :** obj << Fit Quintic

**Description :** Ajuste un polynôme d’ordre cinq aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quintic;

```

### Fit Second Order

**Syntaxe :** obj << Fit Second Order

**Description :** Ajuste un modèle de taux de second ordre aux données. Cette option, utile dans la modélisation des réponses chimiques, n&apos;est disponible que lorsque les valeurs X sont non-négatives.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order;

```

### Fit Second Order with Two Components

**Syntaxe :** obj << Fit Second Order with Two Components

**Description :** Ajuste un modèle de taux de second ordre avec deux composantes aux données. Cette option, utile dans la modélisation des réponses chimiques, n&apos;est disponible que lorsque les valeurs X sont non-négatives.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order with Two Components;

```

### Fit Skew Normal Peak

**Syntaxe :** obj << Fit Skew Normal Peak

### Fit Two Compartment IV Bolus Dose

**Syntaxe :** obj << Fit Two Compartment IV Bolus Dose

**Description :** Ajuste un modèle Deux compartiments IV - Dose intraveineuse aux données. Ce modèle est adapté à la modélisation de la concentration d’un médicament dans le corps après l’administration d’une dose intraveineuse.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 *
	Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Two Compartment IV Bolus Dose;

```

### Fit Weibull Growth

**Syntaxe :** obj << Fit Weibull Growth

**Description :** Ajuste un modèle de croissance de Weibull à trois paramètres en fonction des données.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Weibull Growth;

```

### Multivariate Distance

**Syntaxe :** obj << Multivariate Distance( Alpha( number ), Reference Level( level ))

**Description :** Effectue une analyse de la courbe de dissolution en utilisant la distance M de Mahalanobis, qui mesure la distance multivariée entre les courbes du comprimé de référence et les courbes du comprimé de test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) );

```

### T2EQ

**Syntaxe :** obj << T2EQ( Alpha( number ), Reference Level( level ))

**Description :** Effectue une analyse de la courbe de dissolution à l&apos;aide du test d&apos;équivalence T2EQ, qui mesure la distance multivariée entre les courbes du comprimé de référence et les courbes du comprimé de test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << T2EQ( Alpha( 0.05 ), Reference Level( "R01" ) );

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

**Syntaxe :** obj = Fit Curve(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Equivalence with Ratios

### Messages d'éléments

#### Set Alpha Level

**Syntaxe :** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number ))))

**Description :** Définit le niveau alpha utilisé pour calculer les intervalles de confiance sur le graphique d&apos;équivalence.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) )
	)
);

```

#### Set Decision Lines

**Syntaxe :** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper ))))

**Description :** Définit les lignes de décision inférieure et supérieure sur le graphique d&apos;équivalence.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) )
	)
);

```

#### Show Center Line

**Syntaxe :** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 ))))

**Description :** Affiche ou masque la ligne centrale sur le graphique d&apos;équivalence. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) ),
		Equivalence with Ratios( 1, Show Center Line( 1 ) ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) )
	)
);

```

#### Show Decision Limit Shading

**Syntaxe :** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 ))))

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique d&apos;équivalence. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) )
	)
);

```

#### Show Decision Limits

**Syntaxe :** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limits( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios(1, Show Decision Limits( state=0|1 ))))

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique d&apos;équivalence. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) )
	)
);

```

#### Show Summary Report

**Syntaxe :** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 ))))

**Description :** Affiche ou masque le rapport Résumé du test d&apos;équivalence qui contient l&apos;estimation des paramètres, les limites de décision et qui indique si le paramètre dépasse les limites.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) )
	)
);

```

## Fit Curve CDOE

### Messages d'éléments

#### CDOE Fit Plot

**Syntaxe :** scrobj << CDOE Fit Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des valeurs ajustées. Si une variable de groupe est spécifiée, il y a également une grille de graphiques des valeurs ajustées pour chaque niveau de la variable de groupe. Actif par défaut.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["CDOE Fit"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Fit Plot( 0 );

```

#### CDOE Profiler

**Syntaxe :** scrobj << CDOE Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur CDOE, qui vous permet d&apos;explorer comment la réponse change en fonction des variables supplémentaires. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Profiler( 0 );

```

#### Diagnostic Plots

**Syntaxe :** scrobj << Diagnostic Plots( state=0|1 )

**Description :** Affiche ou masque les graphiques des valeurs réelles par rapport aux valeurs prévues et aux résidus pour la variable de réponse. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Diagnostic Plots"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 0 );

```

#### Generalized Regression for Model Parameters

**Syntaxe :** scrobj << Generalized Regression for Model Parameters( state=0|1 )

**Description :** Affiche ou masque les rapports Régression généralisée pour chaque paramètre du modèle. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Generalized Regression for Model Parameters"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Model Parameters( 0 );

```

#### Save Prediction Formula

**Syntaxe :** scrobj << Save Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule de prévision de la réponse.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Save Prediction Formula;

```

## Fit

### Messages d'éléments

#### Area Under Curve

**Syntaxe :** obj << Fit Command( Area Under Curve( state=0|1 )); 

obj << (Fit[number|name] << Area Under Curve( state=0|1 ))

**Description :** Calcule la zone en-dessous de la fonction de prévision ajustée.

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak( Area Under Curve( 1 ) );

```

#### Compare Parameter Estimates

**Syntaxe :** obj << Fit Command( Compare Parameter Estimates( state=0|1 )); 

obj << (Fit[number|name] << Compare Parameter Estimates( state=0|1 ))

**Description :** Compare l&apos;estimation des paramètres de chaque groupe à la moyenne globale. Cette comparaison est effectuée pour chaque paramètre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Compare Parameter Estimates( 1 ) );

```

#### Curve DOE Analysis

**Syntaxe :** obj << (Fit[number|name] << Curve DOE Analysis( state=0|1 ))

**Description :** Lance un rapport Régression généralisée dans la plate-forme Courbe d&apos;ajustement. Un modèle de régression généralisée est ajusté à chaque paramètre du modèle en utilisant les variables supplémentaires en tant qu&apos;effets du modèle.

**JMP Version ajoutée :** 16

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) ),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Multivariate Distance"}, "Comparisons", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (fit[1] << Curve DOE Analysis( 1 ));

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));

```

#### Custom Inverse Prediction

**Syntaxe :** obj << Fit Command( Custom Inverse Prediction( Response( value ))); 

obj << (Fit[number|name] << Custom Inverse Prediction( Response( value )))

**Description :** Prévoit une valeur X pour la valeur de réponse spécifiée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Custom Inverse Prediction( Response( 0.9 ) ) );

```

#### Equivalence Test

**Syntaxe :** obj << Fit Command( Equivalence Test( Reference Group( column ))); 

obj << (Fit[number|name] << Equivalence Test( Reference Group( column )))

**Description :** Vérifie si la courbe d&apos;ajustement de chaque groupe est pratiquement équivalente à la courbe d&apos;ajustement d&apos;un groupe de référence.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Equivalence Test( Reference Group( "Standard" ) ) );

```

#### Inflection Point

**Syntaxe :** obj << Fit Command( Inflection Point( state=0|1 )); 

obj << (Fit[number|name] << Inflection Point( state=0|1 ))

**Description :** Affiche ou masque un rapport des estimations du point d&apos;inflexion du modèle. Cette option est uniquement disponible pour les modèles Croissance de Weibull, Logistique à 4 paramètres de Rodbard et Logistique à 5 paramètres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P( Inflection Point( 1 ) );

```

#### Make Parameter Table

**Syntaxe :** obj << Fit Command( Make Parameter Table ); 

obj << (Fit[number|name] << Make Parameter Table)

**Description :** Crée un tableau récapitulatif de l’estimation des paramètres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Make Parameter Table );

```

#### Peak Response

**Syntaxe :** obj << Fit Command( Peak Response( state=0|1 ); 

obj << (Fit[number|name] << Peak Response( state=0|1 ))

**Description :** Calcule l&apos;estimation de la variable Y au sommet de la courbe ajustée. Cette option est disponible pour les modèles Croissance cellulaire à 4 paramètres et Un compartiment.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9
4.55, 12 3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Peak Response( 1 ) );

```

#### Plot Actual by Predicted

**Syntaxe :** obj << Fit Command( Plot Actual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Actual by Predicted( state=0|1 ))

**Description :** Affiche ou masque un graphique avec les valeurs de réponse réelles sur l&apos;axe vertical et les valeurs prévues sur l&apos;axe horizontal. Dans les bons ajustements, les points sont proches de la diagonale. Vous pouvez identifier les points éloignés de la diagonale, rechercher des configurations et visualiser le test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Residual by Predicted

**Syntaxe :** obj << Fit Command( Plot Residual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Residual by Predicted( state=0|1 ))

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et le numéro de ligne sur l&apos;axe horizontal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Profiler

**Syntaxe :** obj << Fit Command( Profiler( state=0|1 )); 

obj << (Fit[number|name] << Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur de la fonction de prévision ajustée et ses dérivées premières et secondes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Profiler( 1 ));

```

#### Remove Fit

**Syntaxe :** obj << (Fit[number|name]<<Remove Fit)

**Description :** Supprime l&apos;ajustement spécifié du rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Bootstrap Results

**Syntaxe :** obj << Fit Command( Save Bootstrap Results ); 

obj << (Fit[number] << Save Bootstrap Results)

**Description :** Enregistre des colonnes dans une nouvelle table de données. La table de données contient les résultats du bootstrap provenant d&apos;une analyse F1 ou d&apos;une analyse F2.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	F2 Analysis(
		Alpha( 0.1 ),
		Reference Level( "R01" ),
		Bootstrap Samples( 2500 ),
		Random Seed( 1234 )
	),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "F2 Analysis"}, "Comparisons", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (fit[1] << Save Bootstrap Results);

```

#### Save First Derivative

**Syntaxe :** obj << Fit Command( Save First Derivative ); 

obj << (Fit[number|name] << Save First Derivative)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule pour la dérivée première de la prévision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative );

```

#### Save Inverse Prediction Formula

**Syntaxe :** obj << Fit Command( Save Inverse Prediction Formula ); 

obj << (Fit[number|name] << Save Inverse Prediction Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule pour la fonction inverse du modèle ajusté.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Inverse Prediction Formula );

```

#### Save Parametric Prediction Formula

**Syntaxe :** obj << Fit Command( Save Parametric Prediction Formula ); 

obj << (Fit[number|name] << Save Parametric Prediction Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule de prévision exprimée de manière à ce que la plate-forme Non linéaire puisse l&apos;utiliser.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Save Parametric Prediction Formula);

```

#### Save Prediction Formula

**Syntaxe :** obj << Fit Command( Save Prediction Formula ); 

obj << (Fit[number|name] << Save Prediction Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule de prévision pour l&apos;estimation des paramètres actuelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit[1] << Save Prediction Formula);

```

#### Save Residual Formula

**Syntaxe :** obj << Fit Command( Save Residual Formula ); 

obj << (Fit[number|name] << Save Residual Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour les résidus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Residual Formula );

```

#### Save Stacked Data

**Syntaxe :** obj << Fit Command( Save Stacked Data ); 

obj << (Fit[number|name] << Save Stacked Data)

**Description :** Enregistre des colonnes dans une nouvelle table de données. La table de données contient les données d&apos;origine sous le format empilé, ainsi qu&apos;une colonne pour les valeurs prévues de la réponse et une colonne pour les résidus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi( Save Stacked Data );

```

#### Save Std Error of First Derivative

**Syntaxe :** obj << Fit Command( Save Std Error of First Derivative ); 

obj << (Fit[number|name] << Save Std Error of First Derivative)

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La nouvelle colonne contient la formule pour l&apos;erreur standard de la dérivée première de la prévision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative, Save Std Error of First Derivative );

```

#### Save Std Error of Predicted

**Syntaxe :** obj << Fit Command( Save Std Error of Predicted ); 

obj << (Fit[number|name] << Save Std Error of Predicted)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule pour calculer les erreurs standard des prévisions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Prediction Formula, Save Std Error of Predicted );

```

#### Save Studentized Residual Formula

**Syntaxe :** obj << Fit Command( Save Studentized Residual Formula ); 

obj << (Fit[number|name] << Save Studentized Residual Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule pour les résidus studentisés, qui sont des résidus standards divisés par leurs écarts-types estimés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Studentized Residual Formula );

```

#### Test Parallelism

**Syntaxe :** obj << Fit Command( Test Parallelism( state=0|1 )); 

obj << (Fit[number|name] << Test Parallelism( state=0|1 ))

**Description :** Vérifie si les courbes d&apos;ajustement intergroupes présentent une forme similaire.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Test Parallelism( 1 ) );

```

#### Time to Peak Response

**Syntaxe :** obj << Fit Command( Time to Peak Response( state=0|1 )); 

obj << (Fit[number|name] << Time to Peak Response( state=0|1 ))

**Description :** Calcule l&apos;estimation de la variable X au sommet de la courbe ajustée. Cette option est uniquement disponible pour les modèles Croissance cellulaire à 4 paramètres et Un compartiment.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9
4.55, 12 3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Time to Peak Response( 1 ) );

```

