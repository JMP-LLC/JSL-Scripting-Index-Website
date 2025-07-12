# Bootstrap Forest



## Colonnes

### By

**Syntaxe :** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);

```

### Factor

**Syntaxe :** obj << Factor( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Freq

**Syntaxe :** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Freq( _freqcol ),
	Go
);

```

### Response

**Syntaxe :** obj << Response( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Validation

**Syntaxe :** obj << Validation( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Weight

**Syntaxe :** obj << Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_weightcol",
	Numeric,
	Continuous,
	Formula( Random Beta( 1, 1 ) )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Weight( _weightcol ),
	Go
);

```

### X

**Syntaxe :** obj << X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Y

**Syntaxe :** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

## Constructeurs associés

### Bootstrap Forest

**Syntaxe :** Bootstrap Forest (Y( column ), X( columns ))

**Description :** Construit un modèle prédictif en calculant la moyenne des valeurs prévues à partir de nombreux arbres de décision. Chaque arbre de décision est ajusté à un échantillon de bootstrap aléatoire des données d&apos;apprentissage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

## Messages d'éléments

### Column Contributions

**Syntaxe :** obj << Column Contributions( state=0|1 )

**Description :** Affiche ou masque un rapport illustrant toutes les colonnes de saisie avec leur contribution à l’ajustement.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Column Contributions( 1 );

```

### Decision Threshold

**Syntaxe :** obj << Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Description :** Affiche ou masque la distribution des probabilités ajustées ainsi que la table des valeurs prédites versus des valeurs réelles pour chaque modèle. Vous pouvez modifier le seuil de probabilité afin d&apos;explorer l&apos;impact des différents seuils sur les résultats de classification.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Number Terms( 8 ),
	Number Trees( 100 ),
	Go
);
obj << Decision Threshold( 1 );

```

### Early Stopping

**Syntaxe :** obj << Early Stopping( state=0|1 )

**Description :** Cause l&apos;arrêt précoce de l&apos;itération lorsque des couches supplémentaires n&apos;améliorent pas les statistiques de validation. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	validation( :Holdback1 ),
	Early Stopping( 1 ),
	Go
);

```

### Get Average Absolute Error Test

**Syntaxe :** obj << Get Average Absolute Error Test

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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

### Get Average Absolute Error Training

**Syntaxe :** obj << Get Average Absolute Error Training

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon d&apos;apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

### Get Average Absolute Error Validation

**Syntaxe :** obj << Get Average Absolute Error Validation

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation Portion( 0.2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

### Get Average Log Error Test

**Syntaxe :** obj << Get Average Log Error Test

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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

### Get Average Log Error Training

**Syntaxe :** obj << Get Average Log Error Training

**Description :** Renvoie la moyenne de -log(p), où p est égale à la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble d’apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Split Best( 3 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

### Get Average Log Error Validation

**Syntaxe :** obj << Get Average Log Error Validation

**Description :** Renvoie la moyenne de -log(p), où p est égale la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

### Get Confusion Matrix Test

**Syntaxe :** obj << Get Confusion Matrix Test

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

### Get Confusion Matrix Training

**Syntaxe :** obj << Get Confusion Matrix Training

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

### Get Confusion Matrix Validation

**Syntaxe :** obj << Get Confusion Matrix Validation

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

### Get Confusion Rates Test

**Syntaxe :** obj << Get Confusion Rates Test

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

### Get Confusion Rates Training

**Syntaxe :** obj << Get Confusion Rates Training

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

### Get Confusion Rates Validation

**Syntaxe :** obj << Get Confusion Rates Validation

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

### Get Gen RSquare Test

**Syntaxe :** obj << Get Gen RSquare Test

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

### Get Gen RSquare Training

**Syntaxe :** obj << Get Gen RSquare Training

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

### Get Gen RSquare Validation

**Syntaxe :** obj << Get Gen RSquare Validation

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

### Get MM SAS DATA Step

**Syntaxe :** obj << Get MM SAS DATA Step

**Description :** Crée du code SAS que vous pouvez enregistrer dans le gestionnaire de modèles SAS et le renvoie à la fenêtre du log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
code = obj << Get MM SAS Data Step;

```

### Get MM Tolerant SAS DATA Step

**Syntaxe :** obj << Get MM Tolerant SAS DATA Step

**Description :** Crée du code SAS pour les données qui comprennent des valeurs manquantes, que vous pouvez enregistrer dans le gestionnaire de modèles SAS, et le renvoie à la fenêtre du log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
code = obj << Get MM Tolerant SAS Data Step;

```

### Get Measures

**Syntaxe :** obj << Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Get Measures;

```

### Get Microseconds

**Syntaxe :** obj << Get Microseconds

**Description :** Renvoie les microsecondes passées pour effectuer l’analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
time = obj << Get Microseconds;
Show( time );

```

### Get Misclassification Rate Test

**Syntaxe :** obj << Get Misclassification Rate Test

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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

### Get Misclassification Rate Training

**Syntaxe :** obj << Get Misclassification Rate Training

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble d’apprentissage.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

### Get Misclassification Rate Validation

**Syntaxe :** obj << Get Misclassification Rate Validation

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	validation( :Holdback1 ),
	Method( "Decision Tree" ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

### Get Precision Recall Area Test

**Syntaxe :** obj << Get Precision Recall Area Test

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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

### Get Precision Recall Area Training

**Syntaxe :** obj << Get Precision Recall Area Training

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble d&apos;apprentissage. La courbe précision-rappel doit être affichée avant le calcul de la zone.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

### Get Precision Recall Area Validation

**Syntaxe :** obj << Get Precision Recall Area Validation

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble de validation. La courbe précision-rappel doit être affichée avant le calcul de la zone. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

### Get Prediction Formula

**Syntaxe :** obj << Get Prediction Formula

**Description :** Construit un script pour créer une colonne de formule de prévision et la renvoie.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Get Prediction Formula;

```

### Get RMS Error Test

**Syntaxe :** obj << Get RMS Error Test

**Description :** Renvoie la racine carrée du carré moyen des erreurs de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
rms = obj << Get RMS Error Test;
Show( rms );

```

### Get RMS Error Training

**Syntaxe :** obj << Get RMS Error Training

**Description :** Renvoie la racine carrée du carré moyen des erreurs d’apprentissage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
rms = obj << Get RMS Error Training;
Show( rms );

```

### Get RMS Error Validation

**Syntaxe :** obj << Get RMS Error Validation

**Description :** Renvoie la racine carrée du carré moyen des erreurs de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
rms = obj << Get RMS Error Validation;
Show( rms );

```

### Get ROC Area Test

**Syntaxe :** obj << Get ROC Area Test

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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

### Get ROC Area Training

**Syntaxe :** obj << Get ROC Area Training

**Description :** Renvoie la zone au-dessous de la courbe ROC relative au jeu de données d&apos;apprentissage. La courbe ROC doit être affichée avant que la zone ne soit calculée.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

### Get ROC Area Validation

**Syntaxe :** obj << Get ROC Area Validation

**Description :** Renvoie la zone au-dessous de la courbe ROC relative au jeu de données de validation. La courbe ROC doit être affichée avant que la zone ne soit calculée. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

### Get RSquare Test

**Syntaxe :** obj << Get RSquare Test

**Description :** Renvoie le R carré de l&apos;ensemble de test. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
r = obj << Get RSquare Test;
Show( r );

```

### Get RSquare Training

**Syntaxe :** obj << Get RSquare Training

**Description :** Renvoie le R carré de l&apos;ensemble d’apprentissage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
r = obj << Get RSquare Training;
Show( r );

```

### Get RSquare Validation

**Syntaxe :** obj << Get RSquare Validation

**Description :** Renvoie le R carré de l&apos;ensemble de validation. Uniquement disponible lorsqu&apos;un ensemble de validation est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
r = obj << Get RSquare Validation;
Show( r );

```

### Get SAS DATA Step

**Syntaxe :** obj << Get SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données et la renvoie à la fenêtre du log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
code = obj << Get SAS Data Step;

```

### Get Seconds

**Syntaxe :** obj << Get Seconds

**Description :** Renvoie les secondes passées pour effectuer l’analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
time = obj << Get Seconds;
Show( time );

```

### Get Tolerant Prediction Formula

**Syntaxe :** obj << Get Tolerant Prediction Formula

**Description :** Construit un script pour créer une colonne de formule de prévision tolérante et la renvoie.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Get Tolerant Prediction Formula;

```

### Get Tolerant SAS DATA Step

**Syntaxe :** obj << Get Tolerant SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données, comprenant les valeurs manquantes, et la renvoie à la fenêtre du log. Les valeurs manquantes sont affectées aléatoirement à une branche de l&apos;arbre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
code = obj << Get Tolerant SAS Data Step;

```

### Go

**Syntaxe :** obj << Go

**Description :** Commence les itérations après que tous les paramètres ont été définis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Informative Missing

**Syntaxe :** obj = Bootstrap Forest(...Informative Missing( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Pour les variables catégorielles, traite les valeurs manquantes comme une catégorie. Pour les variables continues, traite les valeurs manquantes comme faibles ou élevées selon le meilleur ajustement. Actif par défaut.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Boosted Tree(
	Y( :height ),
	X( :age ),
	Informative Missing( 0 ),
	Go
);

```

**Exemple de bootstrap forest**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Bootstrap Forest(
	Y( :height ),
	X( :age ),
	Informative Missing( 0 ),
	Go
);

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
obj = dt << Partition(
	Y( :height ),
	X( :age ),
	Informative Missing( 0 )
);
obj << Split Best( 1 );

```

### Lift Curve

**Syntaxe :** obj << Lift Curve( state=0|1 )

**Description :** Affiche ou masque la courbe Lift. La courbe Lift représente le lift en fonction de la proportion des observations et propose une autre vision de la capacité prédictive d&apos;un modèle. Si vous avez utilisé la validation, la courbe Lift s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Go
);
obj << Lift Curve( 1 );

```

### Make SAS DATA Step

**Syntaxe :** obj << Make SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données et la renvoie vers une fenêtre de script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Make SAS Data Step;

```

### Make Tolerant SAS DATA Step

**Syntaxe :** obj << Make Tolerant SAS DATA Step

**Description :** Crée une étape SAS DATA pour évaluer le score des données, comprenant les valeurs manquantes, et la renvoie vers une fenêtre de script. Les valeurs manquantes sont affectées aléatoirement à une branche de l&apos;arbre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Make Tolerant SAS Data Step;

```

### Maximum Number of Terms

**Syntaxe :** obj << Maximum Number of Terms( number )

**Description :** Définit le nombre maximum de termes à essayer lors de l’exécution de différents modèles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Minimum Size Split( 10 ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Maximum Number of Terms( 5 ),
	Go
);

```

### Maximum Splits per Tree

**Syntaxe :** Maximum Splits Per Tree( number )

**Description :** Définit le nombre maximum de divisions par arbre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Minimum Size Split( 10 ),
	Portion Bootstrap( 1 ),
	Maximum Splits Per Tree( 5 ),
	Go
);

```

### Method

**Syntaxe :** Method( "Bootstrap Forest" )

<b>Élément lanceur : Oui</b>

**Description :** Détermine la méthode utilisée pour effectuer la partition des données. La partition par défaut est l’arbre de décision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Minimum Size Split

**Syntaxe :** Minimum Size Split( number )

**Description :** Définit le nombre minimum d’observations pour envisager des divisions utilisées dans l’estimation. La valeur par défaut est 5.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Minimum Size Split( 10 ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Minimum Splits per Tree

**Syntaxe :** Minimum Splits Per Tree( number )

**Description :** Définit le nombre minimum de divisions par arbre. La valeur par défaut est 10.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Multithreading

**Syntaxe :** Multithreading( state=0|1 )

**Description :** Divise les calculs entre les chaînes disponibles sur l’ordinateur. Actif par défaut.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Multithreading( 1 ),
	Split Best( 2 )
);

```

### Number Terms

**Syntaxe :** Number Terms( number )

**Description :** Définit le nombre de termes échantillonnés par division. La valeur par défaut est plancher(nX/4) où "nX" est le nombre des colonnes X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Number Trees

**Syntaxe :** Number Trees( number )

**Description :** Définit le nombre d’arbres dans la forêt. La valeur par défaut est 100.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Ordinal Restricts Order

**Syntaxe :** obj = Bootstrap Forest(...Ordinal Restricts Order( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Pour les colonnes ordinales, envisage uniquement les divisions qui conservent l&apos;ordre. Actif par défaut.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Boosted Tree(
	Y( :height ),
	X( :age ),
	Ordinal Restricts Order( 1 ),
	Go
);

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
obj = dt << Partition(
	Y( :height ),
	X( :age ),
	Ordinal Restricts Order( 1 )
);
obj << Split Best( 3 );

```

### Plot Actual by Predicted

**Syntaxe :** obj << Plot Actual by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique à l’aide des données d’apprentissage, avec les valeurs prévues sur l’axe X et les valeurs effectives sur l’axe Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Plot Actual by Predicted( 1 );

```

### Portion Bootstrap

**Syntaxe :** Portion( fraction )

**Description :** Définit la portion de la population échantillonnée pour l’échantillon de bootstrap. La valeur par défaut est 1.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Precision Recall Curve

**Syntaxe :** obj << Precision Recall Curve( state=0|1 )

**Description :** Affiche ou masque la courbe précision-rappel, qui contient une courbe pour chaque niveau de la variable de réponse. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel pour différents seuils. Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Go
);
obj << Precision Recall Curve( 1 );

```

### Profiler

**Syntaxe :** obj << Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Go
);
obj << Split Best( 5 );
obj << Profiler( 1 );

```

### Publish Prediction Formula

**Syntaxe :** obj << Publish Prediction Formula

**Description :** Crée des formules de prédiction et les enregistre sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Publish Prediction Formula;

```

### Publish Tolerant Prediction Formula

**Syntaxe :** obj << Publish Tolerant Prediction Formula

**Description :** Construit une formule de prévision qui fonctionne même en présence de valeurs manquantes et la publie sous la forme d&apos;un script de colonne de formule dans le dépôt des formules.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Publish Tolerant Prediction Formula;

```

### ROC Curve

**Syntaxe :** obj << ROC Curve( state=0|1 )

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité). Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Go
);
obj << ROC Curve( 1 );

```

### Save Cumulative Details

**Syntaxe :** obj << Save Cumulative Details

**Description :** Enregistre le R carré de validation avec le numéro d’arbre dans une nouvelle table de données. Disponible uniquement lors de l’utilisation d’une colonne de validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Cumulative Details;

```

### Save Predicteds

**Syntaxe :** obj << Save Predicteds

**Description :** Enregistre les valeurs prévues dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Predicteds;

```

### Save Prediction Formula

**Syntaxe :** obj << Save Prediction Formula

**Description :** Enregistre la formule de régression dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Prediction Formula;

```

### Save Residuals

**Syntaxe :** obj << Save Residuals

**Description :** Enregistre les résidus dans une nouvelle colonne de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Residuals;

```

### Save Tolerant Prediction Formula

**Syntaxe :** obj << Save Tolerant Prediction Formula

**Description :** Enregistre une formule de prévision dans une nouvelle colonne de la table de données, même en présence de valeurs manquantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Tolerant Prediction Formula;

```

### Set Random Seed

**Syntaxe :** obj << Set Random Seed( number )

**Description :** Spécifie une graine aléatoire permettant de reproduire les résultats lors de lancements postérieurs de la plate-forme.

**Exemple d'arbre boosté**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
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
	X(
		:Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

### Show Trees

**Syntaxe :** obj << Show Trees( "Aucune"|"Afficher les noms"|"Afficher les noms, les catégories"|"Afficher les noms, les catégories, les estimations" )

**Description :** Affiche une liste d’arbres indépendants, avec les noms uniquement, les noms et les catégories, ou les noms, les catégories et les estimations à chaque nœud.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Show Trees( Show names categories );
(obj << Report)["Tree Views"] << Close( 0 );
(obj << Report)["Tree12"] << Close( 0 );

```

### Specify Profit Matrix

**Syntaxe :** obj << Specify Profit Matrix

**Description :** Vous permet de spécifier les profits ou les coûts associés aux décisions correctes ou incorrectes de classification.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Specify Profit Matrix(
		[1 -1 -1, -1 1 -1, -1 -1 1, . . .],
		"American",
		"European",
		"Japanese",
		"Undecided"
	),
	Go
);

```

### Time Limit

**Syntaxe :** Time Limit( number )

**Description :** Définit la limite de temps pour l’itération. Le nombre représente la limite en secondes pour arrêter l’ajout d’arbres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Minimum Size Split( 10 ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Time Limit( 10 ),
	Go
);

```

### Tuning Design Table

**Syntaxe :** Tuning Design Table( "table name" )

**Description :** Un tableau des paramètres de tuning à exécuter avec, prenant en charge : Numéroter les termes, division minimale par arbre, division maximale par arbre, Numéroter les arbres, Portion de bootstrap, taille minimale de division

### Use Excluded Rows for Validation

**Syntaxe :** obj = Bootstrap Forest(...Use Excluded Rows for Validation( state=0|1 )...)

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
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
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
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
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
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Use Excluded Rows for Validation( 1 )
);
obj << Split Best( 5 );

```

### Validation Portion

**Syntaxe :** obj = Bootstrap Forest(...Validation Portion( fraction=0 )...)

<b>Élément lanceur : Oui</b>

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
obj << Apply Preset(
	"Sample Presets",
	"t-Tests",
	Folder( "Compare Means" )
);

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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
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
ColumnSwitcherObject = obj <<
Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
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
	Elements(
		Points( X, Y, Legend( 1 ) ),
		Smoother( X, Y, Legend( 2 ) )
	),
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
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
preset = obj << New JSL Preset(
	Oneway( Y( :A ), X( :B ), Each Pair( 1 ) )
);
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj <<
Column Switcher( :marital status, {:sex, :country, :marital status} );
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
obj << Render Preset(
	Expr(
		Oneway( Y( :A ), X( :B ), Each Pair( 1 ) )
	)
);

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Script to Data Table(
	"My Analysis", <<Prompt( 0 ), <<Replace( 0 )
);

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
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
		Continuous Distribution(
			Column( :weight ),
			Normal Quantile Plot( 1 )
		)
	),
	SendToByGroup(
		{:sex == "M"},
		Continuous Distribution( Column( :weight ) )
	)
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
			{1, Confidence Intervals( 0 ),
			Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
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
		Dispatch( "age", "Distrib Nom Hist", FrameBox,
			{Frame Size( 178, 318 )}
		)
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH,
		:LTG, :Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);
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
	Transform Column(
		"age^2",
		Format( "Fixed Dec", 5, 0 ),
		Formula( :age * :age )
	),
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

**Syntaxe :** obj = Bootstrap Forest(...Window View( "Visible"|"Invisible"|"Private" )...)

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

