# Discriminant



## Columnas

### By

**Sintaxis:** obj = Discriminant(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Categories

**Sintaxis:** obj = Discriminant(...Categories( column )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la columna que contiene las categorías o grupos en los que se deben clasificar las observaciones.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Covariates

**Sintaxis:** obj = Discriminant(...Covariates( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas que contienen variables continuas que se utilizan para clasificar las observaciones en categorías.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Freq

**Sintaxis:** obj = Discriminant(...&lt;Freq( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Freq( :_freqcol ));

```

### Validation

**Sintaxis:** obj = Discriminant(...&lt;Validation( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna numérica que define los conjuntos de validación. Esta columna debe contener tres valores distintos como máximo.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );obj = dt << Discriminant(	X( :Severity ),	Validation( :Validation ),	Y( :BMI, :Age, :Time ),	Use Matrix Columns( 1 ));

```

### Weight

**Sintaxis:** obj = Discriminant(...&lt;Weight( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Weight( :_weightcol ));

```

### X

**Sintaxis:** obj = Discriminant(...X( column )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la columna que contiene las categorías o grupos en los que se deben clasificar las observaciones.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Y

**Sintaxis:** obj = Discriminant(...Y( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas que contienen variables continuas que se utilizan para clasificar las observaciones en categorías.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## Constructores asociados

### Discriminant

**Sintaxis:** Discriminant( Y( columns ), X( columns ) )

**Descripción:** Estima la distancia de cada observación a cada media multivariante del grupo (centroide) usando la distancia de Mahalanobis. Las observaciones se clasifican entonces en el grupo que tengan más cerca.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## Mensajes del elemento

### Apply This Model

**Sintaxis:** obj &lt;&lt; Apply This Model

**Descripción:** Aplica la selección de variables actual al modelo en la selección paso a paso de variables y cierra el cuadro de diálogo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Step Forward;Wait( 2 );obj << Apply This Model;

```

### Biplot Ray Position

**Sintaxis:** obj &lt;&lt; Biplot Ray Position( [x position, y position, radius scaling] )

**Descripción:** Le permite especificar la posición y el escalado del radio de los rayos del biplot en el gráfico canónico y el gráfico 3D canónico.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Biplot Ray Position( [0, 1.7, 3.5] );

```

### Canonical 3D Plot

**Sintaxis:** obj &lt;&lt; Canonical 3D Plot( state=0|1 )

**Descripción:** Muestra u oculta una versión tridimensional del gráfico canónico. Nota: solo está disponible cuando hay cuatro o más grupos.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );obj = dt << Discriminant(	X( :location name ),	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ));obj << Canonical 3D Plot( 1 );(obj << report)["Discriminant Scores"] << Close( 1 );

```

### Canonical Plot

**Sintaxis:** obj &lt;&lt; Canonical Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico canónico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Canonical Plot( 1 );

```

### Color Points

**Sintaxis:** obj &lt;&lt; Color Points

**Descripción:** Colorea los puntos en el gráfico canónico y el gráfico 3D canónico en función de los niveles de la variable X. Se añaden marcadores de color a las filas en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));dt << Clear Row States;Wait( 2 );obj << Color Points;

```

### Consider New Levels

**Sintaxis:** obj &lt;&lt; Consider New Levels( fraction )

**Descripción:** Especifica que es posible que algunos puntos no encajen en ningún grupo conocido y deberían considerarse que pertenecen a un nuevo grupo sin puntuar. Introduzca la probabilidad a priori de un nuevo nivel.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Consider New Levels( 0.05 );

```

### Cross Validate by Excluded Rows

**Sintaxis:** obj = Discriminant(...Cross Validate by Excluded Rows( state=0 )...)

**Descripción:** Especifica que las filas excluidas forman un conjunto de validación para el que se calculan estadísticos de ajuste. "0" de forma predeterminada.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

### Discriminant Method

**Sintaxis:** obj &lt;&lt; Discriminant Method( Linear ); obj &lt;&lt; Discriminant Method( Quadratic ); obj &lt;&lt; Discriminant Method( Regularized, Regularization Lambda( fraction ), Regularization Gamma( fraction ) ); obj &lt;&lt; Discriminant Method( Wide Linear ) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el método discriminante.

La opción Regularized requiere argumentos adicionales. El parámetro Regularization Lambda oscila de 0 (análisis discriminante cuadrático) a 1 (análisis discriminante lineal). El parámetro Regularization Gamma oscila de 0 (sin encogimiento) a 1 (solo diagonales).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Discriminant Method(	Regularized,	Regularization Lambda( 0.2 ),	Regularization Gamma( 0.6 ));

```

### Discriminant Scores

**Sintaxis:** obj &lt;&lt; Discriminant Scores( state=0|1 )

**Descripción:** Muestra u oculta una tabla de las puntuaciones discriminantes para cada fila. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Discriminant Scores( 1 );

```

### Enter All

**Sintaxis:** obj &lt;&lt; Enter All

**Descripción:** Añade todas las variables al modelo en la selección paso a paso de variables.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;

```

### Get Discrim Matrices

**Sintaxis:** obj &lt;&lt; Get Discrim Matrices

**Descripción:** Devuelve una lista que contiene las matrices discriminantes del análisis. La lista contiene una lista con nombre para cada uno de los siguientes elementos: nombres Y, nombres X, valores X y medias Y.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));z = obj << Get Discrim Matrices;Show( z );

```

### Get Measures

**Sintaxis:** obj &lt;&lt; Get Measures

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Get Measures;

```

### Go

**Sintaxis:** obj &lt;&lt; Go

**Descripción:** Introduce covariables en pasos posteriores hasta que no haya más mejora en R cuadrado.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Go;

```

### Make Scoring Script

**Sintaxis:** obj &lt;&lt; Make Scoring Script

**Descripción:** Crea un script que construye las columnas de fórmulas guardadas por la opción Guardar fórmulas. Puede guardar este script y utilizarlo, quizá con otras tablas de datos, para crear las columnas de fórmulas que calculan probabilidades de pertenencia y predicen la pertenencia a grupos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Make Scoring Script;

```

### Precision Recall Curve

**Sintaxis:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación, que contiene una curva para cada nivel de la variable de respuesta. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Precision Recall Curve( 1 );

```

### Profiler

**Sintaxis:** obj &lt;&lt; Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Profiler;

```

### Publish Probability Formulas

**Sintaxis:** obj &lt;&lt; Publish Probability Formulas

**Descripción:** Crea fórmulas de probabilidad y las guarda como scripts de columnas de fórmulas en la plataforma Almacén de fórmulas. Si no hay abierto un informe del Almacén de fórmulas, esta opción crea un informe del Almacén de fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Publish Probability Formulas;

```

### ROC Curve

**Sintaxis:** obj &lt;&lt; ROC Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));Wait( 0 );obj << ROC Curve( 1 );

```

### Remove All

**Sintaxis:** obj &lt;&lt; Remove All

**Descripción:** Elimina todas las variables del modelo en la selección paso a paso de variables.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;Wait( 2 );obj << Remove All;

```

### Save Canonical Scores

**Sintaxis:** obj &lt;&lt; Save Canonical Scores

**Descripción:** Guarda columnas en la tabla de datos que contienen fórmulas de puntuación canónica para cada observación.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Canonical Scores;

```

### Save Discrim Matrices

**Sintaxis:** obj &lt;&lt; Save Discrim Matrices

**Descripción:** Guarda un script en la tabla de datos que contiene una lista de las matrices discriminantes del análisis. La lista contiene una lista con nombre para cada uno de los siguientes elementos: nombres Y, nombres X, valores X y medias Y.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Discrim Matrices;

```

### Save Formulas

**Sintaxis:** obj &lt;&lt; Save Formulas

**Descripción:** Guarda las fórmulas de distancia, probabilidad y pertenencia predicha en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Formulas;

```

### Save To New Data Table

**Sintaxis:** obj &lt;&lt; Save To New Data Table

**Descripción:** Guarda en una nueva tabla de datos las medias grupales y los rayos del biplot en las variables canónicas, junto con las puntuaciones canónicas.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save To New Data Table;

```

### Scatterplot Matrix

**Sintaxis:** obj &lt;&lt; Scatterplot Matrix

**Descripción:** Abre un informe Matriz de gráficos de dispersión que muestra una matriz con un gráfico de dispersión para cada par de covariables. Esta opción invoca a la plataforma Matriz de gráficos de dispersión con elipses de densidad sombreada para cada grupo. Los grupos de dispersión incluyen todas las observaciones en la tabla de datos, incluso si se utiliza la validación.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Scatterplot Matrix( 1 );

```

### Score Data

**Sintaxis:** obj &lt;&lt; Score Data( state=0|1 )

### Select Misclassified Rows

**Sintaxis:** obj &lt;&lt; Select Misclassified Rows

**Descripción:** Selecciona las filas clasificadas de forma incorrecta en la tabla de datos y en las ventanas de informes que muestran un listado por fila.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );obj << Select Misclassified Rows;

```

### Select Uncertain Rows

**Sintaxis:** obj &lt;&lt; Select Uncertain Rows( fraction )

**Descripción:** Selecciona filas con clasificaciones inciertas en la tabla de datos y en las ventanas de informes que muestran un listado por fila. Una fila incierta es aquella cuya probabilidad de pertenencia a cualquier grupo no está cerca de 0 ni de 1. El argumento fraction representa la diferencia de la probabilidad de que 0 o 1 se definan como inciertos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );obj << Select Uncertain Rows( 0.2 );

```

### Show Biplot Rays

**Sintaxis:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**Descripción:** Muestra u oculta los rayos del biplot en el gráfico canónico y el gráfico 3D canónico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Biplot Rays( 1 );

```

### Show Canonical Details

**Sintaxis:** obj &lt;&lt; Show Canonical Details( state=0|1 )

**Descripción:** Muestra u oculta el informe Detalles canónicos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Canonical Details( 1 );

```

### Show Canonical Structure

**Sintaxis:** obj &lt;&lt; Show Canonical Structure( state=0|1 )

**Descripción:** Muestra u oculta el informe Estructuras canónicas.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Canonical Structure( 1 );

```

### Show Canonical Structures

**Sintaxis:** obj &lt;&lt; Show Canonical Structures( state=0|1 )

### Show Classification Counts

**Sintaxis:** obj &lt;&lt; Show Classification Counts( state=0|1 )

**Descripción:** Muestra u oculta las matrices de confusión, que muestran los conteos observados frente a predichos, en el informe Resúmenes de puntuaciones. De forma predeterminada, el informe Resúmenes de puntuaciones muestra una matriz de confusión para cada nivel de la X categórica.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Classification Counts( 1 );

```

### Show Distances to Each Group

**Sintaxis:** obj &lt;&lt; Show Distances to Each Group( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene la distancia de Mahalanobis al cuadrado de cada observación a la media del grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Distances to each group( 1 );

```

### Show Group Means

**Sintaxis:** obj &lt;&lt; Show Group Means( state=0|1 )

**Descripción:** Muestra u oculta el informe Medias grupales que proporciona una media de cada covariable. Aparecen las medias de cada nivel de la variable X y las medias globales.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Group Means( 1 );

```

### Show Interesting Rows Only

**Sintaxis:** obj &lt;&lt; Show Interesting Rows Only( state=0|1 )

**Descripción:** En el informe Puntuaciones discriminantes solo muestra las filas que están clasificadas de forma incorrecta y las que tienen una probabilidad predicha de entre 0,05 y 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );

```

### Show Means CL Ellipses

**Sintaxis:** obj &lt;&lt; Show Means CL Ellipses( state=0|1 )

**Descripción:** Muestra u oculta las elipses de confianza al 95 % para la media de cada grupo en el gráfico canónico y el gráfico canónico 3D, asumiendo normalidad. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Means CL Ellipses( 1 );

```

### Show Normal 50% Contours

**Sintaxis:** obj &lt;&lt; Show Normal 50% Contours( state=0|1 )

**Descripción:** Muestra u oculta la zona de elipse normal estimada para contener el 50 % de la población de cada grupo en el gráfico canónico y el gráfico 3D canónico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Normal 50% Contours( 1 );

```

### Show Points

**Sintaxis:** obj &lt;&lt; Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico canónico y el gráfico 3D canónico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Points( 1 );

```

### Show Probabilities to Each Group

**Sintaxis:** obj &lt;&lt; Show Probabilities to Each Group( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene la probabilidad de que una observación pertenezca a cada uno de los grupos definidos por la X categórica.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Probabilities to each group( 1 );

```

### Show Within Covariances

**Sintaxis:** obj &lt;&lt; Show Within Covariances( state=0|1 )

**Descripción:** Muestra u oculta los informes relacionados con las matrices de covarianza. Los informes que se muestran dependen del método discriminante especificado. No está disponible para el método discriminante lineal amplio.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Within Covariances( 1 );

```

### Shrink Covariances

**Sintaxis:** obj = Discriminant(...Shrink Covariances( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Encoge los elementos fuera de la diagonal de la matriz de covarianza intragrupal combinada y las matrices de covarianza intragrupales. Esto puede mejorar la estabilidad y reducir la varianza de la predicción.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Shrink Covariances( 1 ));

```

### Specify Priors

**Sintaxis:** obj &lt;&lt; Specify Priors( Equal Probabilities | Proportional to Occurrence | [matrix of priors] )

**Descripción:** Establece las probabilidades a priori para cada nivel de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );obj = dt << Discriminant(	X( :location name ),	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ));obj << Specify Priors( Proportional to Occurrence );

```

### Step Backward

**Sintaxis:** obj &lt;&lt; Step Backward

**Descripción:** Da un paso hacia atrás en la selección paso a paso de variables eliminando una variable del modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;Wait( 2 );obj << Step Backward;

```

### Step Forward

**Sintaxis:** obj &lt;&lt; Step Forward

**Descripción:** Da un paso hacia delante en la selección paso a paso de variables añadiendo una variable al modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Step Forward;

```

### Stepwise Variable Selection

**Sintaxis:** obj = Discriminant(...Stepwise Variable Selection( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Muestra u oculta el panel de control Selección de columnas. Este panel de control contiene opciones que le permiten realizar la selección de variables por pasos utilizando análisis de covarianza y valores p. Esta opción no está disponible para el método lineal amplio.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );

```

### Uncentered Canonical

**Sintaxis:** obj = Discriminant(...Uncentered Canonical( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Suprime el centrado de las puntuaciones canónicas para la compatibilidad con versiones anteriores de JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Uncentered Canonical( 1 ));

```

### Use Matrix Columns

**Sintaxis:** obj &lt;&lt; Use Matrix Columns( state=0|1 )

**Descripción:** Especifica que se utilizarán columnas de matrices en los cálculos. Las columnas de matrices pueden reducir la sobrecarga al calcular las predicciones de puntuación en las columnas de fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Use Matrix Columns( 1 ));

```

### Use Pseudoinverses

**Sintaxis:** obj = Discriminant(...Use Pseudoinverses( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Utiliza pseudoinversas de Moore-Penrose en el análisis cuando la matriz de covarianza sea singular. Las puntuaciones resultantes implican a todas las covariables. Si se deja sin seleccionar, el análisis descarta las covariables que sean combinaciones lineales de covariables que las precedan en la lista de Y, Covariables. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Use Pseudoinverses( 0 ));

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Sintaxis:** obj &lt;&lt; Report; Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Discriminant(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

