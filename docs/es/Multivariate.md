# Multivariate



## Principal Component Options

### 3D Score Plot

**Sintaxis:** obj << 3D Score Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de dispersión 3D de los componentes principales como rayos en un espacio tridimensional.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", "3D Score Plot"n );

```

### Bartlett Test

**Sintaxis:** obj << Bartlett Test( state=0|1 )

**Descripción:** Muestra u oculta un informe de los resultados de la prueba de homogeneidad de cada uno de los componentes principales.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Bartlett Test( 1 ) );

```

### Eigenvectors

**Sintaxis:** obj << Eigenvectors( state=0|1 )

**Descripción:** Muestra u oculta un informe de los vectores propios de cada uno de los componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Eigenvectors( 1 ) );

```

### Factor Rotation

**Sintaxis:** obj << Factor Rotation( <ML|PC>, 1|SMC, n Rotated, Varimax|Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| Promax )

**Descripción:** Muestra u oculta un informe del patrón de rotación factorial para los componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "ML", "SMC", 2, "Varimax" )
);

```

### Loading Plot

**Sintaxis:** obj << Loading Plot( number )

**Descripción:** Muestra u oculta una matriz de gráficos que son representaciones bidimensionales de cargas factoriales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Loading Plot( 2 ) );

```

### Save Principal Components

**Sintaxis:** obj << Save Principal Components( number )

**Descripción:** Guarda el número especificado de componentes principales en nuevas columnas de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Save Principal Components( 3 ) );

```

### Save Principal Components with Imputation

**Sintaxis:** obj << Save Principal Components with Imputation( number )

**Descripción:** Guarda el número especificado de componentes principales calculados mediante la imputación de los valores faltantes en nuevas columnas de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Save Principal Components with Imputation( 3 )
);

```

### Save Rotated Components

**Sintaxis:** obj << Save Rotated Components

**Descripción:** Guarda los componentes rotados en nuevas columnas de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components
);

```

### Save Rotated Components with Imputation

**Sintaxis:** obj << Save Rotated Components with Imputation

**Descripción:** Guarda los componentes rotados calculados mediante la imputación de los valores faltantes en nuevas columnas de la tabla de datos. Nota: esta opción solo está disponible una vez ejecutada la Rotación factorial.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components with Imputation
);

```

### Score Plot

**Sintaxis:** obj << Score Plot( number )

**Descripción:** Muestra u oculta una matriz de gráficos de dispersión que contienen las puntuaciones para cada par del número especificado de componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot( 2 ) );

```

### Score Plot with Imputation

**Sintaxis:** obj << Score Plot with Imputation( number )

**Descripción:** Muestra u oculta una matriz de gráficos de dispersión que contienen las puntuaciones para cada par del número especificado de componentes principales, utilizando la imputación para los valores faltantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot with Imputation( 2 ) );

```

### Scree Plot

**Sintaxis:** obj << Scree Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de líneas de los valores propios para cada componente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Scree Plot( 1 ) );

```

## Scatterplot Matrix Message

### Density Ellipses

**Sintaxis:** Density Ellipses( state=0|1 )

**Descripción:** Muestra u oculta las elipses de densidad en la matriz de gráficos de dispersión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ) )
);

```

### Ellipse Alpha

**Sintaxis:** obj << Ellipse Alpha( "0.90"|"0.95"|"0.99"|"Otro…" )

**Descripción:** Cambia el nivel de significación de las elipses de densidad en la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

### Ellipse Color

**Sintaxis:** Ellipse Color( color )

**Descripción:** Cambia el color de las elipses de densidad en la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( "Blue" ) )
);

```

### Ellipse α

**Sintaxis:** obj << Ellipse α( "0.90"|"0.95"|"0.99"|"Otro…" )

**Descripción:** Cambia el nivel de significación de las elipses de densidad en la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

### Ellipses Coverage

**Sintaxis:** obj << Ellipses Coverage( "0.90"|"0.95"|"0.99"|"Otro…" )

**Descripción:** Cambia el nivel de significación de las elipses de densidad en la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipses Coverage( 0.9 ) )
);

```

### Ellipses Transparency

**Sintaxis:** obj << Ellipses Transparency( "0.20"|"0.40"|"0.60"|"Otro…" )

**Descripción:** Cambia la transparencia de las elipses de densidad sombreadas en la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Ellipses Transparency( 0.6 ), Shaded Ellipses( 1 ) )
);

```

### Fit Line

**Sintaxis:** obj << Fit Line( state=0|1 )

**Descripción:** Muestra u oculta la recta de regresión y el intervalo de confianza en la matriz de gráficos de dispersión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Fit line( 1 ) )
);

```

### Heat Map

**Sintaxis:** Heat Map( state=0|1 )

**Descripción:** Muestra u oculta un mapa de calor de correlación en el triángulo derecho superior de la matriz del gráfico de dispersión. El color de cada celda del mapa de calor representa la correlación existente entre cada par de variables.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Heat Map( 1 ) )
);

```

### Horizontal

**Sintaxis:** Horizontal( state=0|1 )

**Descripción:** Muestra histogramas de forma horizontal en la diagonal de la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Horizontal( 1 ) )
);

```

### Nonpar Density

**Sintaxis:** Nonpar Density( state=0|1 )

**Descripción:** Muestra u oculta contornos de densidad no paramétrica sombreados para los cuantiles 0,90 y 0,50.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Nonpar Density( 1 ) )
);

```

### Shaded Ellipses

**Sintaxis:** Shaded Ellipses( state=0|1 )

**Descripción:** Sombrea o aclara la zona interior de las elipses en la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Shaded Ellipses( 1 ) )
);

```

### Show Correlations

**Sintaxis:** Show Correlations( state=0|1 )

**Descripción:** Muestra u oculta la correlación de cada par de variables en la esquina superior izquierda de cada gráfico de dispersión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Correlations( 1 ) )
);

```

### Show Counts

**Sintaxis:** Show Counts( state=0|1 )

**Descripción:** Muestra u oculta los conteos que etiquetan cada barra de los histogramas en la diagonal de la matriz de gráficos de dispersión entre cada variable Y. Nota: esta opción solo está disponible una vez mostrado el histograma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ), Show Counts( 1 ) )
);

```

### Show Points

**Sintaxis:** Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en la matriz de gráficos de dispersión. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Points( 1 ) )
);

```

### Significance Circles

**Sintaxis:** Significance Circles( state=0|1 )

**Descripción:** Muestra u oculta círculos de correlación en el triángulo derecho superior de la matriz del gráfico de dispersión. El color del círculo representa la correlación y el tamaño del círculo representa la prueba de significación entre cada par de variables.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Significance Circles( 1 ) )
);

```

### Vertical

**Sintaxis:** Vertical( state=0|1 )

**Descripción:** Muestra histogramas de forma vertical en la diagonal de la matriz de gráficos de dispersión entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ) )
);

```

### Action

**Sintaxis:** obj << Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

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

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

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

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj << Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

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

**Sintaxis:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### CI of Correlation

**Sintaxis:** obj << CI of Correlation( state=0|1 )

**Descripción:** Muestra u oculta un informe de las correlaciones entre cada variable Y y los intervalos de confianza para cada correlación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << CI of Correlation( 1 );

```

### Cluster the Correlations

**Sintaxis:** obj << Cluster the Correlations( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones entre conglomerados, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cluster the Correlations( 1 );

```

### Color Map on Correlations

**Sintaxis:** obj << Color Map on Correlations( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Correlations( 1 );

```

### Color Map on Hoeffding's D

**Sintaxis:** obj << Color Map on Hoeffding&apos;s D( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones D de Hoeffding no paramétricas, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Hoeffding's D( 1 );

```

### Color Map on Kendall's Tau

**Sintaxis:** obj << Color Map on Kendall&apos;s Tau( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones Tau de Kendall no paramétricas, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Kendall's τ

**Sintaxis:** obj << Color Map on Kendall&apos;s τ( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones Tau de Kendall no paramétricas, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Pairwise Correlations

**Sintaxis:** obj << Color Map on Pairwise Correlations( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones por pares, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Pairwise Correlations( 1 );

```

### Color Map on Spearman's Rho

**Sintaxis:** obj << Color Map on Spearman&apos;s Rho( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones Rho de Spearman no paramétricas, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on Spearman's ρ

**Sintaxis:** obj << Color Map on Spearman&apos;s ρ( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de correlaciones Rho de Spearman no paramétricas, comenzando en azul para las correlaciones negativas y cambiando a rojo a medida que las correlaciones se aproximan a uno.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on p-Values

**Sintaxis:** obj << Color Map on p-Values( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de valores p, comenzando en rojo para los valores p cercanos al cero y cambiando a azul a medida que los valores p se aproximan a uno.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << "Color Map on p-Values"n( 1 );

```

### Column Switcher

**Sintaxis:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Columns

**Sintaxis:** obj << Columns( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Copy Script;

```

### Correlation Probability

**Sintaxis:** obj << Correlation Probability( state=0|1 )

**Descripción:** Muestra u oculta una matriz de valores p que cada uno corresponde a una prueba de la hipótesis nula de que la correlación verdadera entre las variables es cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Correlation Probability( 1 );

```

### Correlations Multivariate

**Sintaxis:** obj << Correlations Multivariate( state=0|1 )

**Descripción:** Muestra u oculta una matriz de coeficientes de correlación que resumen la fuerza de las relaciones lineales entre cada par de variables Y. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Correlations Multivariate( 1 );

```

### Covariance Matrix

**Sintaxis:** obj << Covariance Matrix( state=0|1 )

**Descripción:** Muestra u oculta una matriz de covarianzas para cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Covariance Matrix( 1 );

```

### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea código SAS Proc Mixed para ejecutar métodos de estimación similares a través de SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "REML" ) );
obj << Create SAS Job();

```

### Cronbach's Alpha

**Sintaxis:** obj << Cronbach&apos;s Alpha( state=0|1 )

**Descripción:** Muestra u oculta un informe del valor alfa de Cronbach para todo el conjunto de variables, así como el valor alfa si se ha excluido de forma individual cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cronbach's alpha( 1 );

```

### Cronbach's α

**Sintaxis:** obj << Cronbach&apos;s α( state=0|1 )

**Descripción:** Muestra u oculta un informe del valor alfa de Cronbach para todo el conjunto de variables, así como el valor alfa si se ha excluido de forma individual cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cronbach's alpha( 1 );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Data Table Window;

```

### Ellipsoid 3D Plot

**Sintaxis:** obj << Ellipsoid 3D Plot( column1, column2, column3 )

**Descripción:** Muestra u oculta un gráfico de superficie que expone un elipsoide al 95 % para tres variables Y seleccionadas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Ellipsoid 3D Plot( :Ether, :Chloroform, :Benzene );

```

### Freq

**Sintaxis:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Get By Levels

**Sintaxis:** obj << Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj << Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

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
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Correlation Matrix

**Sintaxis:** obj << Get Correlation Matrix

**Descripción:** Devuelve la matriz de correlación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
corr = obj << Get Correlation Matrix;
Show( corr );

```

### Get Data Table

**Sintaxis:** obj << Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj << Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Inv Correlation Matrix

**Sintaxis:** obj << Get Inv Correlation Matrix

**Descripción:** Devuelve la matriz de correlación inversa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Inverse Correlations( 1 ) );
icorr = obj << Get Inv Correlation Matrix;
Show( icorr );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj << Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Hoeffding's D

**Sintaxis:** obj << Hoeffding&apos;s D( state=0|1 )

**Descripción:** Muestra u oculta un informe del estadístico D de Hoeffding para cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Hoeffding's D( 1 );

```

### Hotelling's T Square Test

**Sintaxis:** obj << Hotelling&apos;s T Square Test

**Descripción:** Realiza una prueba de una muestra para la media de la distribución multivariante de las variables Y, dado el vector de la media especificado en la hipótesis nula.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Hotelling's T Square Test( 1, 0.7, 0.5, 0, -1 );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

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

### Impute Missing Data

**Sintaxis:** obj << Impute Missing Data

**Descripción:** Imputa valores faltantes a todas las variables Y y crea una nueva tabla de datos que contiene los valores existentes y los valores de datos faltantes recientemente imputados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data;

```

### Inverse Correlations

**Sintaxis:** obj << Inverse Correlations( state=0|1 )

**Descripción:** Muestra u oculta una matriz de las correlaciones inversas entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Inverse Correlations( 1 );

```

### Jackknife Distances

**Sintaxis:** obj << Jackknife Distances( state = 0|1, <Save Jackknife Distances> )

**Descripción:** Muestra u oculta un gráfico de las distancias de jackknife para cada fila, junto con una línea de referencia que indica posibles valores atípicos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Jackknife Distances( 1 );

```

### Kendall's Tau

**Sintaxis:** obj << Kendall&apos;s Tau( state=0|1 )

**Descripción:** Muestra u oculta un informe del estadístico Tau de Kendall para cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Kendall's Tau( 1 );

```

### Kendall's τ

**Sintaxis:** obj << Kendall&apos;s τ( state=0|1 )

**Descripción:** Muestra u oculta un informe del estadístico Tau de Kendall para cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Kendall's Tau( 1 );

```

### Local Data Filter

**Sintaxis:** obj << Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

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

### Mahalanobis Distances

**Sintaxis:** obj << Mahalanobis Distances( state = 0|1, <Save Outlier Distances> )

**Descripción:** Muestra u oculta un gráfico de las distancias de Mahalanobis para cada fila, junto con una línea de referencia que indica posibles valores atípicos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Mahalanobis Distances( 1 );

```

### Matrix Format

**Sintaxis:** obj = Multivariate(...Matrix Format( "Triangular inferior"|"Triangular superior"|"Cuadrado" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece la forma en la que se muestran las variables en la matriz de gráficos de dispersión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Matrix Format( "Lower Triangular" ) );

```

### Multivariate

**Sintaxis:** Multivariate( Y( columns ) )

**Descripción:** Explora la correlación y las asociaciones entre variables numéricas empleando una variedad de técnicas de análisis multivariantes. Algunas de estas técnicas son las medidas de asociación paramétrica y no paramétrica, matrices de gráfico de dispersión, análisis de componentes principales, análisis de valores atípicos y confiabilidad del elemento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Simple Statistics

**Sintaxis:** obj << Multivariate Simple Statistics( state=0|1 )

**Descripción:** Muestra u oculta un informe de estadísticos simples multivariantes, en el que los estadísticos se calculan mediante la exclusión de todas las filas que tengan un valor faltante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Multivariate Simple Statistics( 1 );

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Pairwise Correlations

**Sintaxis:** obj << Pairwise Correlations( state=0|1 )

**Descripción:** Muestra u oculta un informe de las correlaciones por pares de cada combinación de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Pairwise Correlations( 1 );

```

### Parallel Coord Plot

**Sintaxis:** obj << Parallel Coord Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de coordenadas paralelas de las variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Parallel Coord Plot( 1 );

```

### Partial Correlation Diagram

**Sintaxis:** obj << Partial Correlation Diagram( state=0|1 )

**Descripción:** Muestra u oculta el informe Diagrama de correlaciones parciales. Esta opción realiza una descomposición en valores propios en la matriz de correlaciones parciales y utiliza los resultados para ofrecer una representación visual de las correlaciones parciales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlation Diagram( 1 );

```

### Partial Correlation Probability

**Sintaxis:** obj << Partial Correlation Probability( state=0|1 )

**Descripción:** Muestra u oculta una matriz de valores p que cada uno corresponde a una prueba de la hipótesis nula de que la correlación parcial verdadera entre las variables es cero.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlation Probability( 1 );

```

### Partial Correlations

**Sintaxis:** obj << Partial Correlations( state=0|1 )

**Descripción:** Muestra u oculta una matriz de correlaciones parciales entre cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlations( 1 );

```

### Paste Local Data Filter

**Sintaxis:** obj << Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

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

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

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

**Sintaxis:** obj << Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

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

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Imputed Formula

**Sintaxis:** obj << Save Imputed Formula

**Descripción:** Imputa valores en los valores faltantes de la columna Y. Crea y guarda una nueva columna con una fórmula de imputación en la tabla de datos original.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Script Window;

```

### Scatterplot Matrix

**Sintaxis:** obj << Scatterplot Matrix( state=0|1 )

**Descripción:** Muestra u oculta una matriz de gráficos de dispersión para cada par de variables Y. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( 0 )
);

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

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

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

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
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Alpha Level

**Sintaxis:** obj << Set Alpha Level( "0.01"|"0.05"|"0.10"|"0.50"|"Otro…"="0.05" )

**Descripción:** Cambia el nivel de significación para los intervalos de confianza de cada correlación. "0.05" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Set Alpha Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Set α Level

**Sintaxis:** obj << Set α Level( "0.01"|"0.05"|"0.10"|"0.50"|"Otro…"="0.05" )

**Descripción:** Cambia el nivel de significación para los intervalos de confianza de cada correlación. "0.05" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Set α Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Spearman's Rho

**Sintaxis:** obj << Spearman&apos;s Rho( state=0|1 )

**Descripción:** Muestra u oculta un informe del estadístico Rho de Spearman para cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Spearman's Rho( 1 );

```

### Spearman's ρ

**Sintaxis:** obj << Spearman&apos;s ρ( state=0|1 )

**Descripción:** Muestra u oculta un informe del estadístico Rho de Spearman para cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Spearman's Rho( 1 );

```

### Standardized Alpha

**Sintaxis:** obj << Standardized Alpha( state=0|1 )

**Descripción:** Muestra u oculta un informe del valor alfa estandarizado de Cronbach para todo el conjunto de variables, así como el valor alfa estandarizado si se ha excluido de forma individual cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Standardized alpha( 1 );

```

### Standardized α

**Sintaxis:** obj << Standardized α( state=0|1 )

**Descripción:** Muestra u oculta un informe del valor alfa estandarizado de Cronbach para todo el conjunto de variables, así como el valor alfa estandarizado si se ha excluido de forma individual cada variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Standardized alpha( 1 );

```

### Sync to Data Table Changes

**Sintaxis:** obj << Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### T Square

**Sintaxis:** obj << T Square( state = 0|1, <Save T Square> )

**Descripción:** Muestra u oculta un gráfico de los valores T² para cada fila, junto con una línea de referencia que indica posibles valores atípicos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << T Square( 1 );

```

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### T²

**Sintaxis:** obj << T²( state = 0|1, <Save T Square> )

**Descripción:** Muestra u oculta un gráfico de los valores T² para cada fila, junto con una línea de referencia que indica posibles valores atípicos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << T Square( 1 );

```

### Univariate Simple Statistics

**Sintaxis:** obj << Univariate Simple Statistics( state=0|1 )

**Descripción:** Muestra u oculta un informe de estadísticos simples univariantes, en el que los estadísticos se calculan para cada columna de forma independiente de otras columnas que podrían tener datos faltantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Univariate Simple Statistics( 1 );

```

### Variance Estimation

**Sintaxis:** Variance Estimation( REML|ML|Robust|Row-wise|Pairwise )

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el método de estimación para calcular las correlaciones.

Si no hay valores faltantes, el método predeterminado es Por filas.

Si hay valores faltantes y el número de variables es <=10 y el número de filas <=5000, entonces el predeterminado es REML.

Si hay valores faltantes y el número de variables es >10 o el número de filas >5000, entonces el valor predeterminado es Por pares.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "ML" ) );

```

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Sintaxis:** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Window View

**Sintaxis:** obj = Multivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Y

**Sintaxis:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

