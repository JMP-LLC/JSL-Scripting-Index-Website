# Partition Platform



## Constructeurs associés

### Partition

**Syntaxe :** Partition( Y( column ), X( columns ) )

**Description :** Construit un arbre de décision en partitionnant récursivement les données selon une relation entre la valeur des régresseurs et de la réponse. La réponse et les régresseurs peuvent être continus ou catégoriels.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Split Best( 3 )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Split Best( 2 );

```

## Messages d'éléments

### Method

**Syntaxe :** Method( "Decision Tree" )&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode utilisée pour effectuer la partition des données. La partition par défaut est l’arbre de décision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );

```

## Decision Tree

### Colonnes

#### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );

```

#### Factor

**Syntaxe :** obj &lt;&lt; Factor( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Freq

**Syntaxe :** obj &lt;&lt; Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Freq( _freqcol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	Freq( _freqcol )
);
obj << Split Best( 2 );

```

#### Response

**Syntaxe :** obj &lt;&lt; Response( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Validation

**Syntaxe :** obj &lt;&lt; Validation( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Weight

**Syntaxe :** obj &lt;&lt; Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Weight( _weightcol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	Weight( _weightcol )
);
obj << Split Best( 2 );

```

#### X

**Syntaxe :** obj &lt;&lt; X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Y

**Syntaxe :** obj &lt;&lt; Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Constructeurs associés

#### Decision Tree

**Syntaxe :** Partition(Y( column ), X( columns ), Method( "Decision Tree" ))

**Description :** Effectue de manière récursive la partition des données pour prédire une réponse. Ceci est connu également sous le nom de « Arbres de classification et de régression ».

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Messages d'éléments

#### Color Points

**Syntaxe :** obj &lt;&lt; Color Points

**Description :** Colore les points selon leur classification.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Color Points;

```

#### Column Contributions

**Syntaxe :** obj &lt;&lt; Column Contributions( state=0|1 )

**Description :** Affiche ou masque un rapport illustrant toutes les colonnes de saisie avec leur contribution à l’ajustement.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Column Contributions( 1 );

```

#### Decision Threshold

**Syntaxe :** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Description :** Affiche ou masque la distribution des probabilités ajustées ainsi que la table des valeurs prédites versus des valeurs réelles pour chaque modèle. Vous pouvez modifier le seuil de probabilité afin d&apos;explorer l&apos;impact des différents seuils sur les résultats de classification.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	)
);
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Decision Threshold( 1 );

```

#### Get Average Absolute Error Test

**Syntaxe :** obj &lt;&lt; Get Average Absolute Error Test

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

#### Get Average Absolute Error Training

**Syntaxe :** obj &lt;&lt; Get Average Absolute Error Training

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon d&apos;apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

#### Get Average Absolute Error Validation

**Syntaxe :** obj &lt;&lt; Get Average Absolute Error Validation

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

#### Get Average Log Error Test

**Syntaxe :** obj &lt;&lt; Get Average Log Error Test

**Description :** Renvoie la moyenne de -log(p), où p est égale à la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

#### Get Average Log Error Training

**Syntaxe :** obj &lt;&lt; Get Average Log Error Training

**Description :** Renvoie la moyenne de -log(p), où p est égale à la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble d’apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

#### Get Average Log Error Validation

**Syntaxe :** obj &lt;&lt; Get Average Log Error Validation

**Description :** Renvoie la moyenne de -log(p), où p est égale la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

#### Get Confusion Matrix Test

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Test

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

#### Get Confusion Matrix Training

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Training

**Description :** Renvoie la matrice de confusion de l&apos;ensemble d’apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

#### Get Confusion Matrix Validation

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Validation

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

#### Get Confusion Rates Test

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Test

**Description :** Renvoie les taux de confusion de l&apos;ensemble de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

#### Get Confusion Rates Training

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Training

**Description :** Renvoie les taux de confusion de l&apos;ensemble d’apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

#### Get Confusion Rates Validation

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Validation

**Description :** Renvoie les taux de confusion de l&apos;ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

#### Get Gen RSquare Test

**Syntaxe :** obj &lt;&lt; Get Gen RSquare Test

**Description :** Renvoie le R carré généralisé de l&apos;ensemble de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

#### Get Gen RSquare Training

**Syntaxe :** obj &lt;&lt; Get Gen RSquare Training

**Description :** Renvoie le R carré généralisé de l&apos;ensemble d’apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

#### Get Gen RSquare Validation

**Syntaxe :** obj &lt;&lt; Get Gen RSquare Validation

**Description :** Renvoie le R carré généralisé de l&apos;ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

#### Get MM SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get MM SAS DATA Step

**Description :** Crée du code SAS que vous pouvez enregistrer dans le gestionnaire de modèles SAS et le renvoie à la fenêtre du log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get MM SAS Data Step;

```

#### Get MM Tolerant SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get MM Tolerant SAS DATA Step

**Description :** Crée du code SAS pour les données qui comprennent des valeurs manquantes, que vous pouvez enregistrer dans le gestionnaire de modèles SAS, et le renvoie à la fenêtre du log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get MM Tolerant SAS Data Step;

```

#### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Measures;

```

#### Get Microseconds

**Syntaxe :** obj &lt;&lt; Get Microseconds

**Description :** Renvoie les microsecondes passées pour effectuer l’analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
time = obj << Get Microseconds;
Show( time );

```

#### Get Misclassification Rate Test

**Syntaxe :** obj &lt;&lt; Get Misclassification Rate Test

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

#### Get Misclassification Rate Training

**Syntaxe :** obj &lt;&lt; Get Misclassification Rate Training

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble d’apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

#### Get Misclassification Rate Validation

**Syntaxe :** obj &lt;&lt; Get Misclassification Rate Validation

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Method( "Decision Tree" ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

#### Get Precision Recall Area Test

**Syntaxe :** obj &lt;&lt; Get Precision Recall Area Test

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble de test. La courbe précision-rappel doit être affichée avant le calcul de la zone. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

#### Get Precision Recall Area Training

**Syntaxe :** obj &lt;&lt; Get Precision Recall Area Training

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble d&apos;apprentissage. La courbe précision-rappel doit être affichée avant le calcul de la zone.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

#### Get Precision Recall Area Validation

**Syntaxe :** obj &lt;&lt; Get Precision Recall Area Validation

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble de validation. La courbe précision-rappel doit être affichée avant le calcul de la zone. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

#### Get Prediction Formula

**Syntaxe :** obj &lt;&lt; Get Prediction Formula

**Description :** Construit un script pour créer une colonne de formule de prévision et la renvoie.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Prediction Formula;

```

#### Get RMS Error Test

**Syntaxe :** obj &lt;&lt; Get RMS Error Test

**Description :** Renvoie la racine carrée du carré moyen des erreurs de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Test;
Show( rms );

```

#### Get RMS Error Training

**Syntaxe :** obj &lt;&lt; Get RMS Error Training

**Description :** Renvoie la racine carrée du carré moyen des erreurs d’apprentissage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Training;
Show( rms );

```

#### Get RMS Error Validation

**Syntaxe :** obj &lt;&lt; Get RMS Error Validation

**Description :** Renvoie la racine carrée du carré moyen des erreurs de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Validation;
Show( rms );

```

#### Get ROC Area Test

**Syntaxe :** obj &lt;&lt; Get ROC Area Test

**Description :** Renvoie l&apos;aire en-dessous de la courbe ROC pour les données de test. La courbe ROC doit être affichée avant que l&apos;aire ne soit calculée. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

#### Get ROC Area Training

**Syntaxe :** obj &lt;&lt; Get ROC Area Training

**Description :** Renvoie la zone au-dessous de la courbe ROC relative au jeu de données d&apos;apprentissage. La courbe ROC doit être affichée avant que la zone ne soit calculée.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

#### Get ROC Area Validation

**Syntaxe :** obj &lt;&lt; Get ROC Area Validation

**Description :** Renvoie la zone au-dessous de la courbe ROC relative au jeu de données de validation. La courbe ROC doit être affichée avant que la zone ne soit calculée. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

#### Get RSquare Test

**Syntaxe :** obj &lt;&lt; Get RSquare Test

**Description :** Renvoie le R carré de l&apos;ensemble de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Test;
Show( r );

```

#### Get RSquare Training

**Syntaxe :** obj &lt;&lt; Get RSquare Training

**Description :** Renvoie le R carré de l&apos;ensemble d’apprentissage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Training;
Show( r );

```

#### Get RSquare Validation

**Syntaxe :** obj &lt;&lt; Get RSquare Validation

**Description :** Renvoie le R carré de l&apos;ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Validation;
Show( r );

```

#### Get SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données et la renvoie à la fenêtre du log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get SAS Data Step;

```

#### Get Seconds

**Syntaxe :** obj &lt;&lt; Get Seconds

**Description :** Renvoie les secondes passées pour effectuer l’analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
time = obj << Get Seconds;
Show( time );

```

#### Get Tolerant Prediction Formula

**Syntaxe :** obj &lt;&lt; Get Tolerant Prediction Formula

**Description :** Construit un script pour créer une colonne de formule de prévision tolérante et la renvoie à la fenêtre du log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Tolerant Prediction Formula;

```

#### Get Tolerant SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get Tolerant SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données, comprenant les valeurs manquantes, et la renvoie à la fenêtre du log. Les valeurs manquantes sont affectées aléatoirement à une branche de l&apos;arbre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get Tolerant SAS Data Step;

```

#### Go

**Syntaxe :** obj &lt;&lt; Go

**Description :** Commence les itérations après la sélection de l’option Validation croisée k fois. Si vous travaillez avec JMP Pro, la commande Go commence les itérations après avoir spécifié la colonne de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << K Fold Crossvalidation( 5 );
obj << Go;

```

#### Informative Missing

**Syntaxe :** obj = Decision Tree(...Informative Missing( state=0|1 )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Pour les variables catégorielles, traite les valeurs manquantes comme une catégorie. Pour les variables continues, traite les valeurs manquantes comme faibles ou élevées selon le meilleur ajustement. Actif par défaut.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt:Age[3] = .;
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Informative Missing( 0 ),
	Split Best( 3 )
);

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );
obj << Split Best( 1 );

```

#### Initial Splits

**Syntaxe :** obj = Partition(...Initial Splits( condition, {left condition}, {right condition} )...)

**Description :** Décrit les divisions effectuées. L&apos;argument condition spécifie le côté gauche de la première division. Les arguments {condition de gauche} et {condition de droite} spécifient une division du côté respectif et ce format se poursuit de manière récursive pour le nombre de divisions souhaité. Pour spécifier une division à droite et non à gauche, affectez l&apos;argument de gauche comme une liste vide. Pour spécifier une division à gauche et non à droite, omettre l&apos;argument de droite.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"} )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}, {:age >= 25}} )
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"}, {:type == {"Family", "Sporty"}} )
);

```

#### K Fold Crossvalidation

**Syntaxe :** obj &lt;&lt; K Fold Crossvalidation

**Description :** Il s’agit d’une caractéristique désapprouvée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Split Best( 2 )
);
obj << K Fold Crossvalidation( 5 );

```

#### Leaf Report

**Syntaxe :** obj &lt;&lt; Leaf Report( state=0|1 )

**Description :** Affiche ou masque un rapport contenant la moyenne et le dénombrement (réponse continue) ou le taux de réponse et le dénombrement (réponse catégorielle) des nœuds de feuilles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Leaf Report( 1 );

```

#### Lift Curve

**Syntaxe :** obj &lt;&lt; Lift Curve( state=0|1 )

**Description :** Affiche ou masque la courbe Lift. La courbe Lift représente le lift en fonction de la proportion des observations et propose une autre vision de la capacité prédictive d&apos;un modèle. Si vous avez utilisé la validation, la courbe Lift s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Lift Curve( 1 );

```

#### Lock Columns

**Syntaxe :** obj &lt;&lt; Lock Columns( state=0|1, columns )

**Description :** Verrouille les colonnes indiquées comme devant être utilisées pour les divisions.

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Lock Columns( 1, :Age, :Hair Color );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Lock Columns( 1, :age, :size );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

#### Make SAS DATA Step

**Syntaxe :** obj &lt;&lt; Make SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données et la renvoie vers une fenêtre de script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Make SAS Data Step;

```

#### Make Tolerant SAS DATA Step

**Syntaxe :** obj &lt;&lt; Make Tolerant SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données, comprenant les valeurs manquantes, et la renvoie vers une fenêtre de script. Les valeurs manquantes sont affectées aléatoirement à une branche de l&apos;arbre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Make Tolerant SAS Data Step;

```

#### Method

**Syntaxe :** Method( "Decision Tree" )&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode utilisée pour effectuer la partition des données. La partition par défaut est l’arbre de décision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );

```

#### Minimum Size Split

**Syntaxe :** obj &lt;&lt; Minimum Size Split( number )

**Description :** Définit la taille de groupe minimale lors de la division d&apos;un groupe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Minimum Size Split( 15 );
obj << Split Best( 4 );

```

#### Missing Value Order

**Syntaxe :** Missing Value Order( Low(list of numeric columns),High(list of numeric columns))

**Description :** Spécifie si les valeurs manquantes sont traitées comme faibles ou élevées.

**JMP Version ajoutée :** 16

#### Multithreading

**Syntaxe :** Multithreading( state=0|1 )

**Description :** Divise les calculs entre les chaînes disponibles sur l’ordinateur. Actif par défaut.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Split Best( 2 )
);

```

#### Ordinal Restricts Order

**Syntaxe :** obj = Decision Tree(...Ordinal Restricts Order( state=0|1 )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Pour les colonnes ordinales, envisage uniquement les divisions qui conservent l&apos;ordre. Actif par défaut.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bootstrap Forest(
	Y( :height ),
	X( :age ),
	Ordinal Restricts Order( 1 ),
	Go
);

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Ordinal Restricts Order( 1 ),
	Split Best( 2 )
);

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );
obj << Split Best( 3 );

```

#### Plot Actual by Predicted

**Syntaxe :** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique à l’aide des données d’apprentissage, avec les valeurs prévues sur l’axe X et les valeurs effectives sur l’axe Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Split Best( 3 )
);
obj << Plot Actual By Predicted;

```

#### Precision Recall Curve

**Syntaxe :** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Description :** Affiche ou masque la courbe précision-rappel, qui contient une courbe pour chaque niveau de la variable de réponse. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel pour différents seuils. Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Precision Recall Curve( 1 );

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Profiler( 1 );

```

#### Prune Worst

**Syntaxe :** obj &lt;&lt; Prune Worst

**Description :** Supprime la division terminale qui présente l’aptitude de discrimination minimale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Prune Worst;
Wait( .5 );
obj << Prune Worst;

```

#### Publish Prediction Formula

**Syntaxe :** obj &lt;&lt; Publish Prediction Formula

**Description :** Crée des formules de prédiction et les enregistre sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Publish Prediction Formula;

```

#### Publish Tolerant Prediction Formula

**Syntaxe :** obj &lt;&lt; Publish Tolerant Prediction Formula

**Description :** Construit une formule de prévision qui fonctionne même en présence de valeurs manquantes et la publie sous la forme d&apos;un script de colonne de formule dans le dépôt des formules.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Publish Tolerant Prediction Formula;

```

#### ROC Curve

**Syntaxe :** obj &lt;&lt; ROC Curve( state=0|1 )

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité). Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << ROC Curve( 1 );

```

#### Save Leaf Label Formula

**Syntaxe :** obj &lt;&lt; Save Leaf Label Formula

**Description :** Enregistre les formules d’étiquette de feuilles dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Label Formula;

```

#### Save Leaf Labels

**Syntaxe :** obj &lt;&lt; Save Leaf Labels

**Description :** Enregistre les étiquettes de feuilles dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Labels;

```

#### Save Leaf Number Formula

**Syntaxe :** obj &lt;&lt; Save Leaf Number Formula

**Description :** Enregistre les formules de nombre de feuilles dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Number Formula;

```

#### Save Leaf Numbers

**Syntaxe :** obj &lt;&lt; Save Leaf Numbers

**Description :** Enregistre les nombres de feuilles dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Numbers;

```

#### Save Predicteds

**Syntaxe :** obj &lt;&lt; Save Predicteds

**Description :** Enregistre les valeurs prévues dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Predicteds;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de régression dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Prediction Formula;

```

#### Save Residuals

**Syntaxe :** obj &lt;&lt; Save Residuals

**Description :** Enregistre les résidus dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Residuals;

```

#### Save Tolerant Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Tolerant Prediction Formula

**Description :** Enregistre une formule de prévision dans une nouvelle colonne de la table de données, même en présence de valeurs manquantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Tolerant Prediction Formula;

```

#### Set Random Seed

**Syntaxe :** obj &lt;&lt; Set Random Seed( number )

**Description :** Spécifie une graine aléatoire permettant de reproduire les résultats lors de lancements postérieurs de la plate-forme.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

#### Show Fit Details

**Syntaxe :** obj &lt;&lt; Show Fit Details( state=0|1 )

**Description :** Affiche ou masque un rapport avec la définition de toutes les mesures, les taux d’erreurs de classification et les matrices de confusion.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Show Fit Details( 1 );

```

#### Show Graph

**Syntaxe :** obj &lt;&lt; Show Graph( state=0|1 )

**Description :** Affiche ou masque le graphique des partitions. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowGraph( 0 );
Wait( .5 );
obj << ShowGraph( 1 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche les points (1 ou actif) ou les panneaux de couleur (0 ou inactif) sur le graphique des partitions. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowPoints( 0 );
Wait( .5 );
obj << ShowPoints( 1 );

```

#### Show Split Bar

**Syntaxe :** obj &lt;&lt; Show Split Bar( state=0|1 )

**Description :** Affiche ou masque les barres de couleur indiquant les proportions de division dans chaque feuille. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Bar( 0 );
Wait( .5 );
obj << Show Split Bar( 1 );

```

#### Show Split Candidates

**Syntaxe :** obj &lt;&lt; Show Split Candidates( state=0|1 )

**Description :** Affiche ou masque le rapport des candidats dans les divisions terminales. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Candidates( 1 );
(obj << Report)["Candidates"] << Close( 0 ) << select;

```

#### Show Split Count

**Syntaxe :** obj &lt;&lt; Show Split Count( state=0|1 )

**Description :** Affiche ou masque le nombre de réponses pour chaque niveau dans tous les nœuds d&apos;arborescence.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Count( 0 );
Wait( .5 );
obj << Show Split Count( 1 );

```

#### Show Split Prob

**Syntaxe :** obj &lt;&lt; Show Split Prob( state=0|1 )

**Description :** Affiche ou masque les taux de réponse pour chaque niveau dans chaque nœud d&apos;arborescence.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Prob( 0 );
Wait( .5 );
obj << Show Split Prob( 1 );

```

#### Show Split Stats

**Syntaxe :** obj &lt;&lt; Show Split Stats( state=0|1 )

**Description :** Affiche ou masque les statistiques de division et de dénombrement. Les statistiques affichées comprennent le G² ou la moyenne et l&apos;écart-type. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Stats( 0 );
Wait( .5 );
obj << Show Split Stats( 1 );

```

#### Show Tree

**Syntaxe :** obj &lt;&lt; Show Tree( state=0|1 )

**Description :** Affiche ou masque l’arborescence avec les informations sur les partitions. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowTree( 1 );

```

#### Small Tree View

**Syntaxe :** obj &lt;&lt; Small Tree View( state=0|1 )

**Description :** Affiche ou masque une version réduite de l’arbre des partitions sur la droite du graphique des partitions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Small Tree View( 1 );

```

#### Sort Split Candidates

**Syntaxe :** obj &lt;&lt; Sort Split Candidates( state=0|1 )

**Description :** Trie les candidats par significativité.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
(obj << Report)["Candidates"] << Close( 0 ) << select;
Wait( 1 );
obj << Sort Split Candidates;

```

#### Specify Profit Matrix

**Syntaxe :** obj &lt;&lt; Specify Profit Matrix

**Description :** Vous permet de spécifier les profits ou les coûts associés aux décisions correctes ou incorrectes de classification.

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 ),
	Specify Profit Matrix( [0 -1, -1 0, . .], "Yes", "No", "Undecided" ),
	Show Fit Details( 1 )
);

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Split Best( 3 ),
	Specify Profit Matrix( [0 -1, -1 0, . .], "Married", "Single", "Undecided" ),
	Show Fit Details( 1 )
);

```

#### Split Best

**Syntaxe :** obj &lt;&lt; Split Best( &lt;number of splits&gt; )

**Description :** Divise l’arbre au point de division optimal.

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best;
Wait( 1 );
obj << Split Best( 2 );

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Split Best;
Wait( .5 );
obj << Split Best( 2 );

```

#### Split History

**Syntaxe :** obj &lt;&lt; Split History( state=0|1 )

**Description :** Affiche ou masque un graphique illustrant chaque division sur l’axe X et la valeur correspondante du R² dans la colonne du modèle sur l’axe Y.

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Split History;

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Split History;

```

#### Tree 3D

**Syntaxe :** obj &lt;&lt; Tree 3D( state=0|1 )

**Description :** Affiche ou masque un graphique 3D de la structure hiérarchique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size )
);
obj << Split Best( 14 );
obj << Show Tree( 0 );
obj << Tree 3D( 1 );

```

#### Use Excluded Rows for Validation

**Syntaxe :** obj = Decision Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**Description :** Utilise les lignes exclues dans la table de données pour créer un échantillon de validation. Cette option s&apos;affiche dans la fenêtre de lancement uniquement si vous utilisez JMP standard et si des lignes exclues sont présentes.

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Use Excluded Rows for Validation( 1 ),
	Split Best( 2 )
);

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Partition(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Use Excluded Rows for Validation( 1 )
);
obj << Split Best( 5 );

```

#### Validation Portion

**Syntaxe :** obj = Decision Tree(...Validation Portion( fraction=0 )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Construit un ensemble de validation en sélectionnant les lignes de manière aléatoire, chaque ligne ayant la probabilité p (fraction) d’être sélectionnée. "0" par défaut.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :country, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**Exemple de levier**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation Portion( 0.2 ),
	Go
);

```

**Exemple de partition**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 )
);
obj << Split Best( 2 );

```

### Messages d'éléments partagés

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
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

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntaxe :** obj &lt;&lt; Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntaxe :** obj &lt;&lt; Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntaxe :** obj &lt;&lt; Report;Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Decision Tree(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

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

