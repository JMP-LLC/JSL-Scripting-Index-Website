# Gaussian Process Model



### Bayesian Optimization

**Syntaxe :** Bayesian Optimization( Y( column ), X( columns ) )

**Description :** Modélise la relation entre une réponse continue et un ou plusieurs régresseurs continus par un spline avec interpolation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

### Copy Model Fit Script

**Syntaxe :** obj << Copy Model Fit Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

### Intercept

**Syntaxe :** obj << Intercept( number )

### Nugget

**Syntaxe :** obj << Nugget( number )

### Profiler

**Syntaxe :** obj << Profiler( state=0|1 )

**Description :** Explore les modifications de chaque colonne par rapport aux modifications dans chaque valeur de facteur entre les modèles.

### Residual

**Syntaxe :** obj << Residual( number )

### Save Model Fit Script to Data Table

**Syntaxe :** obj << Save Model Fit Script to Data Table

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

### Save Model Fit Script to Journal

**Syntaxe :** obj << Save Model Fit Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

### Save Model Fit Script to Report

**Syntaxe :** obj << Save Model Fit Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

### Save Model Fit Script to Script Window

**Syntaxe :** obj << Save Model Fit Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

### Starting Values

**Syntaxe :** obj << Starting Values( number )

### Theta Values

**Syntaxe :** obj << Theta Values( number )

