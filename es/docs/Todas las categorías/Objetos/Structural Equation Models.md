# Structural Equation Models



## Columnas

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Freq( _freqcol )
);

```

### Groups

**Sintaxis:** obj &lt;&lt; Groups( column )

**Descripción:** Especifica la variable de agrupación para llevar a cabo múltiples análisis de grupo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
dt << Structural Equation Models( Model Variables( 4 :: 7 ), Groups( :Sex ) );

```

### Mean

**Sintaxis:** obj = Structural Equation Models(...&lt;Mean( column )&gt;...)

**Descripción:** Especifica medias para cada variable manifiesta en una matriz de correlación o covarianza.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Model Variables

**Sintaxis:** obj &lt;&lt; Model Variables( column(s) )

**Descripción:** Especifica las variables que se enviarán a analizar.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);

```

### Std Dev

**Sintaxis:** obj = Structural Equation Models(...&lt;Std Dev( column )&gt;...)

**Descripción:** Especifica desviaciones estándar para cada variable manifiesta en una matriz de correlación.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Weight

**Sintaxis:** obj &lt;&lt; Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Weight( _weightcol )
);

```

## Constructores asociados

### Structural Equation Models

**Sintaxis:** Structural Equation Models( Model Variables ( columns ) )

**Descripción:** Proporciona un marco de trabajo para ajustar una variedad de modelos, incluido el análisis factorial confirmatorio, los modelos de senderos con o sin variables latentes, los modelos de errores de medición y los modelos de curva de crecimiento latente.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

## Mensajes del elemento

### Add Manifest Variables

**Sintaxis:** obj &lt;&lt; Add Manifest Variables

**Descripción:** Vuelve a iniciar la plataforma usando la especificación del modelo existente e incluyendo las variables manifiestas agregadas recientemente.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Add Manifest Variables();

```

### Bootstrap Inference

**Sintaxis:** obj &lt;&lt; Bootstrap Inference

**Descripción:** Realiza bootstrapping para una selección de estimaciones especificada por el usuario en los modelos ajustados disponibles del informe SEM.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Bootstrap Inference( Parameter Estimates( 1 ), Indirect Effects( 1 ) );

```

### Compare Selected Models

**Sintaxis:** obj &lt;&lt; Compare Selected Models

**Descripción:** Compara los modelos seleccionados en la tabla Comparación de modelos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Compare Selected Models( {"Orthogonal 3-Factor CFA", "3-Factor CFA"} );

```

### Copy Diagram Properties

**Sintaxis:** obj &lt;&lt; Copy Diagram Properties

**Descripción:** Copia las propiedades del diagrama de senderos actual en el portapapeles. Después puede pegar las propiedades en otro diagrama de senderos SEM.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**Sintaxis:** obj &lt;&lt; Copy Model Specification

**Descripción:** Copia las especificaciones del modelo de ecuación estructural actual en el portapapeles. Después puede pegar las especificaciones del modelo en otro informe de la plataforma SEM.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Estimation Method

**Sintaxis:** obj = Structural Equation Models(...Estimation Method( "Máxima verosimilitud (ML y FIML)"|"Máxima verosimilitud con inferencia robusta"|"MIIV con mínimos cuadrados en dos etapas" )...)

**Descripción:** Permite utilizar distintos estimadores para el análisis.

**JMP Versión agregada:** 19

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Goal_L, :Work_L, :Interact_L, "Leader"}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 ),
		Assess Measurement Model( 1 )
	)
);

```

### Fit

**Sintaxis:** obj &lt;&lt; Fit

**Descripción:** Determina el modelo de ecuaciones estructurales que se ajustará.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Fit Independence Model

**Sintaxis:** obj = Structural Equation Models(...Fit Independence Model( state=0|1 )...)

**Descripción:** Deshabilita el ajuste del modelo de independencia una vez iniciada la plataforma. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Independence Model( 0 )
);

```

### Fit Unrestricted Model

**Sintaxis:** obj &lt;&lt; Fit Unrestricted Model( state=0|1 )

**Descripción:** Deshabilita el ajuste del modelo sin restringir, también conocido como saturado, una vez iniciada la plataforma.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Unrestricted Model( 0 )
);

```

### Full Information Multivariate Statistics

**Sintaxis:** obj &lt;&lt; Full Information Multivariate Statistics( state=0|1 )

**Descripción:** Muestra u oculta un informe de estadísticos simples multivariantes, en el que los estadísticos se estiman con máxima verosimilitud con información completa para tener en cuenta los datos faltantes.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Full Information Multivariate Statistics( 1 );

```

### Generate R Code

**Sintaxis:** obj &lt;&lt; Generate R Code

**Descripción:** Genera código R para el modelo especificado actualmente. El código se escribe en una ventana del editor de scripts.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Generate R Code();

```

### Hide Model

**Sintaxis:** obj &lt;&lt; Hide Model

**Descripción:** Oculta los modelos según las selecciones de la tabla de comparación de modelos.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	),
	Hide Model( {3} )
);

```

### Launch Explore Missing Values

**Sintaxis:** obj &lt;&lt; Launch Explore Missing Values

**Descripción:** Iniciar la plataforma Explorar valores faltantes.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Missing Values( 1 );

```

### Launch Explore Outliers

**Sintaxis:** obj &lt;&lt; Launch Explore Outliers

**Descripción:** Inicia la plataforma Explorar valores atípicos.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Outliers( 1 );

```

### Model Specification

**Sintaxis:** obj &lt;&lt; Model Specification

**Descripción:** Habilita la especificación de un modelo de ecuaciones estructurales.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Paste Diagram Properties

**Sintaxis:** obj &lt;&lt; Paste Diagram Properties

**Descripción:** Pega las propiedades del diagrama de senderos del portapapeles en el diagrama de senderos SEM actual.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Paste Model Specification

**Sintaxis:** obj &lt;&lt; Paste Model Specification

**Descripción:** Pega las especificaciones del modelo del portapapeles en las especificaciones del modelo actual.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Path Diagram Properties

**Sintaxis:** obj &lt;&lt; Path Diagram Properties

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

### Remove Manifest Variables

**Sintaxis:** obj &lt;&lt; Remove Manifest Variables

**Descripción:** Vuelve a iniciar la plataforma usando la especificación de modelo existente pero sin las variables manifiestas quitadas.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Remove Manifest Variables();

```

### Reset Independence Model

**Sintaxis:** obj &lt;&lt; Reset Independence Model

**Descripción:** Reemplaza un modelo de dependencia especificado por el usuario por el predeterminado.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );
obj << Reset Independence Model();

```

### Robust Inference

**Sintaxis:** obj &lt;&lt; Robust Inference( state=0|1 )

**Descripción:** Calcula errores estándar tipo sándwich para las estimaciones de los parámetros por ML o FIML y los estadísticos de ajuste robusto. Esta opción se utiliza para los resultados con distribución distinta a la normal en los que se asume una distribución subyacente continua.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Robust Inference( 1 );

```

### Set as Independence Model

**Sintaxis:** obj &lt;&lt; Set as Independence Model( number )

**Descripción:** Reemplaza el modelo de independencia predeterminado por uno especificado por el usuario.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );

```

### Standardize Latent Variables

**Sintaxis:** obj = Structural Equation Models(...Standardize Latent Variables( state=0|1 )...)

**Descripción:** Establece la varianza de las variables latentes en la unidad tras la especificación.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Standardize Latent Variables( 1 )
);

```

### Univariate Simple Statistics

**Sintaxis:** obj &lt;&lt; Univariate Simple Statistics( state=0|1 )

**Descripción:** Muestra u oculta un informe de estadísticos simples univariantes, en el que los estadísticos se calculan para cada columna de forma independiente de otras columnas que podrían tener datos faltantes.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Univariate Simple Statistics( 1 );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

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

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

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

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

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

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

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

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

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
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

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

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

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

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

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

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

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

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

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

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

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

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

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
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Structural Equation Models(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Structural Equation Models Fit

### Mensajes del elemento

#### All Modification Indices

**Sintaxis:** obj &lt;&lt; All Modification Indices( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los índices de modificación del modelo. Estos valores pueden utilizarse para determinar qué parámetros pueden agregarse al modelo para mejorar el ajuste del modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

#### Assess Measurement Model

**Sintaxis:** obj &lt;&lt; Assess Measurement Model( state=0|1 )

**Descripción:** Muestra u oculta una variedad de estadísticos para cuantificar la fiabilidad y validez de las pruebas y medidas, incluida la fiabilidad de los indicadores, los valores omega y H de los coeficientes y una matriz de validez de constructo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Assess Measurement Model( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj &lt;&lt; Confidence Intervals( state=0|1 )

**Descripción:** Muestra u oculta intervalos de confianza al 95 % para todas las estimaciones de los parámetros.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Confidence Intervals( 1 );

```

#### Copy Diagram Properties

**Sintaxis:** obj &lt;&lt; Copy Diagram Properties

**Descripción:** Copia las propiedades del diagrama de senderos actual en el portapapeles. Después puede pegar las propiedades en otro diagrama de senderos SEM.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

#### Copy Model Specification

**Sintaxis:** obj &lt;&lt; Copy Model Specification

**Descripción:** Copia las especificaciones del modelo de ecuación estructural actual en el portapapeles. Después puede pegar las especificaciones del modelo en otro informe de la plataforma SEM.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << (Fit[1] << Copy Model Specification());
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Model Specification();

```

#### Correlation of Estimates

**Sintaxis:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene la matriz de correlación de las estimaciones de los parámetros para el modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates( 1 );

```

#### Correlation of Estimates Heat Map

**Sintaxis:** obj &lt;&lt; Correlation of Estimates Heat Map( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene un mapa de calor de las correlaciones entre las estimaciones del modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates Heat Map( 1 );

```

#### Covariance of Estimates

**Sintaxis:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene la matriz de covarianza de las estimaciones de los parámetros para el modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates( 1 );

```

#### Covariance of Estimates Heat Map

**Sintaxis:** obj &lt;&lt; Covariance of Estimates Heat Map( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene un mapa de calor de las covarianzas entre las estimaciones del modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates Heat Map( 1 );

```

#### Covariances

**Sintaxis:** obj &lt;&lt; Covariances

**Descripción:** Agrega covarianzas entre las variables en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Define Time Values

**Sintaxis:** obj &lt;&lt; Define Time Values

**Descripción:** Define las ocasiones de medición para las observaciones repetidas. Estos valores se utilizan para especificar modelos longitudinales.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Fit(
		Model Name( "Linear Growth Model" ),
		Define Time Values( {0, 2, 3} ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year3,
			:Multiple Choice Year4}, {1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4
			}, {0, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) ),
		Predicted Values Plot( 1, 1 )
	)
);

```

#### Equation Details

**Sintaxis:** obj &lt;&lt; Equation Details( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene detalles de cada ecuación del modelo.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);
obj << Equation Details( 0 );

```

#### Fit Indices

**Sintaxis:** obj &lt;&lt; Fit Indices( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene los índices de ajuste del modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Fit Indices( 1 );

```

#### Indirect Effects

**Sintaxis:** obj &lt;&lt; Indirect Effects( state=0|1 )

**Descripción:** Muestra u oculta todos los efectos indirectos disponibles en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Indirect Effects( 1 );

```

#### Loadings

**Sintaxis:** obj &lt;&lt; Loadings

**Descripción:** Agrega cargas a las variables latentes en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Means/Intercepts

**Sintaxis:** obj &lt;&lt; Means/Intercepts

**Descripción:** Agrega medias o constantes a las variables en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

#### Model Implied Correlations

**Sintaxis:** obj &lt;&lt; Model Implied Correlations( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene la matriz de correlación que está implícita en el modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations( 1 );

```

#### Model Implied Correlations Heat Map

**Sintaxis:** obj &lt;&lt; Model Implied Correlations Heat Map( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene un mapa de calor de las correlaciones que están implícitas en el modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations Heat Map( 1 );

```

#### Model Implied Covariances

**Sintaxis:** obj &lt;&lt; Model Implied Covariances( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene la matriz de covarianza que está implícita en el modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances( 1 );

```

#### Model Implied Covariances Heat Map

**Sintaxis:** obj &lt;&lt; Model Implied Covariances Heat Map( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene un mapa de calor de las covarianzas que están implícitas en el modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances Heat Map( 1 );

```

#### Model Implied Means

**Sintaxis:** obj &lt;&lt; Model Implied Means( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las medias para cada variable que están implícitas en el modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Means( 1 );

```

#### Model Name

**Sintaxis:** obj &lt;&lt; Model Name

**Descripción:** Establece un nombre de modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Modification Indices

**Sintaxis:** obj &lt;&lt; Modification Indices( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los índices de modificación del modelo. Estos valores pueden utilizarse para determinar qué parámetros pueden agregarse al modelo para mejorar el ajuste del modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

#### Modification Indices for Covariances

**Sintaxis:** obj &lt;&lt; Modification Indices for Covariances( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los índices de modificación del modelo. Estos valores pueden utilizarse para determinar qué parámetros pueden agregarse al modelo para mejorar el ajuste del modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Covariances( 1 );

```

#### Modification Indices for Loadings

**Sintaxis:** obj &lt;&lt; Modification Indices for Loadings( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los índices de modificación del modelo. Estos valores pueden utilizarse para determinar qué parámetros pueden agregarse al modelo para mejorar el ajuste del modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Loadings( 1 );

```

#### Modification Indices for Means

**Sintaxis:** obj &lt;&lt; Modification Indices for Means( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los índices de modificación del modelo. Estos valores pueden utilizarse para determinar qué parámetros pueden agregarse al modelo para mejorar el ajuste del modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Means( 1 );

```

#### Modification Indices for Regressions

**Sintaxis:** obj &lt;&lt; Modification Indices for Regressions( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los índices de modificación del modelo. Estos valores pueden utilizarse para determinar qué parámetros pueden agregarse al modelo para mejorar el ajuste del modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Regressions( 1 );

```

#### Modification Indices for Variances

**Sintaxis:** obj &lt;&lt; Modification Indices for Variances( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los índices de modificación del modelo. Estos valores pueden utilizarse para determinar qué parámetros pueden agregarse al modelo para mejorar el ajuste del modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {.25}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {.25}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {.25}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {.25}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Variances( 1 );

```

#### New Latent

**Sintaxis:** obj &lt;&lt; New Latent

**Descripción:** Agrega una nueva variable latente en el modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Normalized Residuals

**Sintaxis:** obj &lt;&lt; Normalized Residuals( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene una matriz de los residuos normalizados del modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals( 1 );

```

#### Normalized Residuals Heat Map

**Sintaxis:** obj &lt;&lt; Normalized Residuals Heat Map( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene un mapa de calor de los residuos normalizados del modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals Heat Map( 1 );

```

#### Parameter Estimates

**Sintaxis:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los parámetros no estandarizadas para el modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Parameter Estimates( 0 );

```

#### Paste Diagram Properties

**Sintaxis:** obj &lt;&lt; Paste Diagram Properties

**Descripción:** Pega las propiedades del diagrama de senderos del portapapeles en el diagrama de senderos SEM actual.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

#### Path Diagram Properties

**Sintaxis:** obj &lt;&lt; Path Diagram Properties

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

#### Predicted Values Plot

**Sintaxis:** obj &lt;&lt; Predicted Values Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los valores predichos para las variables endógenas del modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: LGC with LDF" );
obj << Predicted Values Plot( 1, 1 );

```

#### Prediction Profiler

**Sintaxis:** obj &lt;&lt; Prediction Profiler

**Descripción:** Muestra u oculta un perfilador de predicción para las variables de respuesta seleccionadas dados los predictores seleccionados y el modelo especificado.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( Conflict, Satisfaction )
);

```

#### R Square for Endogenous Variables

**Sintaxis:** obj &lt;&lt; R Square for Endogenous Variables( state=0|1 )

**Descripción:** Muestra u oculta un informe con valores R cuadrado para todas las variables endógenas en el modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << R Square for Endogenous Variables( 1 );

```

#### RAM Matrices

**Sintaxis:** obj &lt;&lt; RAM Matrices( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las matrices de modelos utilizadas en la notación del modelo de acción reticular (RAM).

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << RAM Matrices( 1 );

```

#### Recall in Model Specification

**Sintaxis:** obj &lt;&lt; Recall in Model Specification

**Descripción:** Establece el modelo del informe Especificación del modelo en el modelo especificado.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Recall in Model Specification( 1 );

```

#### Regressions

**Sintaxis:** obj &lt;&lt; Regressions

**Descripción:** Agrega rutas de regresión al modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; Remove Fit

**Descripción:** Quita el informe del modelo especificado de la ventana de informes.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Remove Fit( 1 );

```

#### Residuals

**Sintaxis:** obj &lt;&lt; Residuals( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene una matriz de los residuos para el modelo. Esta matriz es la diferencia entre la matriz de covarianza implícita en el modelo y la matriz de covarianza de la muestra.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Residuals( 1 );

```

#### Save Bartlett Factor Scores

**Sintaxis:** obj &lt;&lt; Save Bartlett Factor Scores

**Descripción:** Guarda una columna con la puntuación del factor para cada variable en columnas de la tabla de datos. Las puntuaciones de factores se calculan en una columna oculta que también se agrega a la tabla de datos. El método de Bartlett se utiliza para estimar estas puntuaciones.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Bartlett Factor Scores();

```

#### Save Factor Scores

**Sintaxis:** obj &lt;&lt; Save Factor Scores

**Descripción:** Guarda una columna con la puntuación del factor para cada variable en columnas de la tabla de datos. Las puntuaciones de factores se calculan en una columna oculta que también se agrega a la tabla de datos. El método de regresión se utiliza para estimar estas puntuaciones.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Factor Scores();

```

#### Save Observational Residuals

**Sintaxis:** obj &lt;&lt; Save Observational Residuals

**Descripción:** Guarda las columnas en la tabla de datos que contienen valores residuales de las variables de respuesta observadas en el modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Observational Residuals();

```

#### Save Prediction Formulas

**Sintaxis:** obj &lt;&lt; Save Prediction Formulas

**Descripción:** Guarda las columnas en la tabla de datos que contienen fórmulas para los valores predichos de las variables de respuesta observadas en el modelo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Prediction Formulas();

```

#### Show Path Diagram

**Sintaxis:** obj &lt;&lt; Show Path Diagram( state=0|1 )

**Descripción:** Muestra u oculta el diagrama de senderos SEM. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Path Diagram( 0 );

```

#### Specific Indirect Effects

**Sintaxis:** obj &lt;&lt; Specific Indirect Effects

**Descripción:** Permite indicar los efectos indirectos específicos que se estimarán a partir del modelo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Specific Indirect Effects( {"Ind60", "Dem65"} );

```

#### Standardized Parameter Estimates

**Sintaxis:** obj &lt;&lt; Standardized Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los parámetros estandarizadas para el modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Standardized Parameter Estimates( 1 );

```

#### Summary of Fit

**Sintaxis:** obj &lt;&lt; Summary of Fit( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene detalles del ajuste del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Summary of Fit( 0 );

```

#### Total Effects

**Sintaxis:** obj &lt;&lt; Total Effects( state=0|1 )

**Descripción:** Muestra u oculta todos los efectos totales disponibles en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Total Effects( 1 );

```

#### Variances

**Sintaxis:** obj &lt;&lt; Variances

**Descripción:** Agrega varianzas a las variables en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

## Structural Equation Models Path Diagram

### Constructores asociados

#### SEM Node Graph Display

**Sintaxis:** SEM Node Graph Display

### Mensajes del elemento

#### Constant Border Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Constant Border Color ( color ) );

**Descripción:** Modifica el color del borde de las variables constantes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Border Color( "Blue" ) );

```

#### Constant Fill Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Constant Fill Color ( color ) );

**Descripción:** Modifica el color de relleno de las variables constantes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Fill Color( "Blue" ) );

```

#### Constant Font

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Constant Font ( font ) );

**Descripción:** Modifica la fuente de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Font( "Sitka Small" ) );

```

#### Constant Height

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Constant Height ( number ) );

**Descripción:** Modifica la altura (píxeles) de las variables constantes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Height( 20 ) );

```

#### Constant Shape

**Sintaxis:** obj &lt;&lt; Constant Shape

**Descripción:** Modifica la apariencia predeterminada de la constante en el diagrama de senderos, que se utiliza para representar las medias y constantes de las variables.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Show Means( 1 ),
	Constant Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

#### Constant Size Option

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Constant Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**Descripción:** Cambia el modo de tamaño para la constante en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Constant Size Option( "Scale To Text" ) );

```

#### Constant Text Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Constant Text Color ( color ) );

**Descripción:** Modifica el color del texto de las variables constantes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Text Color( "Blue" ) );

```

#### Constant Width

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Constant Width ( number ) );

**Descripción:** Modifica el ancho (píxeles) de las variables constantes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Width( 71 ) );

```

#### Copy Diagram

**Sintaxis:** obj &lt;&lt; Copy Diagram

**Descripción:** Guarda una imagen de la ventana del diagrama en el portapapeles.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
rpt[Node Graph Box( 1 )] << Copy Diagram;

```

#### Copy Diagram Properties

**Sintaxis:** obj &lt;&lt; Copy Diagram Properties

**Descripción:** Guarda una copia de la configuración de scripts específica del diagrama en el portapapeles. Esta configuración se puede aplicar posteriormente a otros diagramas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

#### Dashed Lines for Nonsignificant p-values

**Sintaxis:** obj &lt;&lt; Path Diagram Properties ("Dashed Lines for Nonsignificant p - values"n( 0 | 1 ) )

**Descripción:** Muestra u oculta líneas discontinuas para los senderos que tengan valores p no significativos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( "Dashed Lines for Nonsignificant p - values"n( 0 ) );

```

#### Diagram Size

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Diagram Size ( {x, y} ) )

**Descripción:** Cambia el tamaño del diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### Enable Grid

**Sintaxis:** obj &lt;&lt; Path Diagram Properties ( Enable Grid( 0|1) )

**Descripción:** Habilita una cuadrícula visual en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Enable Grid( 1 ) );

```

#### Fill Nodes With R Squared

**Sintaxis:** obj &lt;&lt; Path Diagram Properties ( Fill Nodes With R Squared ( 0|1) )

**Descripción:** Especifica que los nodos del modelo ajustado se rellenen parcialmente en función de su coeficiente de determinación estimado. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Fill Nodes With R Squared( 1 ) );

```

#### Latent Border Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Latent Border Color ( color ) );

**Descripción:** Modifica el color del borde de las variables latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Border Color( "Blue" ) );

```

#### Latent Fill Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Latent Fill Color ( color ) );

**Descripción:** Modifica el color de relleno de las variables latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Fill Color( "Blue" ) );

```

#### Latent Font

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Font ( font ) );

**Descripción:** Modifica la fuente de las variables latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Font( "Sitka Small" ) );

```

#### Latent Height

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Latent Height ( number ) );

**Descripción:** Modifica la altura (píxeles) de las variables latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Height( 30 ) );

```

#### Latent Shape

**Sintaxis:** obj &lt;&lt; Latent Shape

**Descripción:** Modifica la apariencia predeterminada de las variables latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Latent Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

#### Latent Size Option

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Latent Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**Descripción:** Cambia el modo de tamaño para los nodos latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Size Option( "Scale To Text" ) );

```

#### Latent Text Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Latent Text Color ( color ) );

**Descripción:** Modifica el color del texto de las variables latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Text Color( "Blue" ) );

```

#### Latent Width

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Latent Width ( number ) );

**Descripción:** Modifica el ancho (píxeles) de las variables latentes en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Width( 71 ) );

```

#### Layout

**Sintaxis:** obj &lt;&lt; Path Diagram Properties ( Layout("Left To Right"|"Top To Bottom") )

**Descripción:** Establece la disposición inicial del diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Layout( "Top To Bottom" ) );

```

#### Lock Diagram

**Sintaxis:** obj &lt;&lt; Path Diagram Properties ( Lock Diagram( 0|1) )

**Descripción:** Protege el diagrama de senderos de modo que las modificaciones que se realicen sobre el modelo no hagan que cambie el diseño.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Lock Diagram( 1 ) );

```

#### Manifest Border Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Border Color ( color ) );

**Descripción:** Modifica el color del borde de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Border Color( "Blue" ) );

```

#### Manifest Fill Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Fill Color ( color ) );

**Descripción:** Modifica el color de relleno de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Fill Color( "Blue" ) );

```

#### Manifest Font

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Font ( font ) );

**Descripción:** Modifica la fuente de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Font( "Sitka Small" ) );

```

#### Manifest Height

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Height ( number ) );

**Descripción:** Modifica la altura (píxeles) de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Height( 30 ) );

```

#### Manifest Shape

**Sintaxis:** obj &lt;&lt; Manifest Shape

**Descripción:** Modifica la apariencia predeterminada de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Shape( {Fill Color( "Green" )} ) );

```

#### Manifest Size Option

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**Descripción:** Cambia el modo de tamaño para los nodos manifiestos en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Size Option( "Scale To Text" ) );

```

#### Manifest Text Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Text Color ( color ) );

**Descripción:** Modifica el color del texto de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Text Color( "Blue" ) );

```

#### Manifest Width

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Manifest Width ( number ) );

**Descripción:** Modifica el ancho (píxeles) de las variables manifiestas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Width( 67 ) );

```

#### Paste Diagram Properties

**Sintaxis:** obj &lt;&lt; Paste Diagram Properties

**Descripción:** Pega una copia de la configuración de scripts específica del diagrama desde el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

#### Path Styles

**Sintaxis:** obj &lt;&lt; Path Styles

**Descripción:** Modifica la apariencia predeterminada de los senderos en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Styles( {Color( "Green" )} ) );

```

#### Path Thickness

**Sintaxis:** obj &lt;&lt; Path Diagram Properties (Path Thickness( "Fixed"|"Map to Stdz. Estimates" ) )

**Descripción:** Activa o desactiva si el grosor de los senderos del diagrama se mantiene en un valor fijo o se vincula con la fuerza de su estimación estandarizada. "Fixed" de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Thickness( "Map to Stdz. Estimates" ) );

```

#### Path Transparency

**Sintaxis:** obj &lt;&lt; Path Diagram Properties (Path Transparency( "Fixed"|"Map to Stdz. Estimates" ) )

**Descripción:** Activa o desactiva si la transparencia de los senderos del diagrama se mantiene en un valor fijo o se vincula con la fuerza de su estimación estandarizada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Transparency( "Fixed" ) );

```

#### Paths Alpha Level

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Paths Alpha Level ( number) );

**Descripción:** Modifica el umbral de valor p mínimo para usar líneas discontinuas en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Alpha Level( 0.01 ) );

```

#### Paths Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Paths Color ( color) );

**Descripción:** Modifica el color de los senderos en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Color( "Green" ) );

```

#### Paths Font

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Paths Font ( font ) );

**Descripción:** Modifica la fuente utilizada para etiquetar los senderos en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Font( "Segoe Script", 12, "Bold" ) );

```

#### Paths Opacity

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Paths Opacity ( number) );

**Descripción:** Modifica la opacidad de los senderos en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Opacity( 0.5 ), Path Transparency( "Fixed" ) );

```

#### Paths Thickness

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Paths Thickness ( number) );

**Descripción:** Modifica el grosor de los senderos en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Thickness( 2.7103 ) );

```

#### Place Nodes

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Place Nodes ( { {name1, x1, y1}, {name2, x2, y2}, ...} ) )

**Descripción:** Controla la colocación de los nodos individuales en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### R2 Fill Color

**Sintaxis:** obj &lt;&lt; Path Diagram Properties ( R2 Fill Color ( Color ) )

**Descripción:** Especifica el color del relleno parcial que representa un valor de R cuadrado estimado de una variable.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( R2 Fill Color( Cyan ) );

```

#### Rotate Latent Groups

**Sintaxis:** obj &lt;&lt; Rotate Latent Groups

**Descripción:** Rota la orientación de todos los indicadores latentes en el diagrama. Si selecciona cualquier grupo de latentes, esta opción rota la orientación de los grupos de latentes seleccionados únicamente.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Rotate Latent Groups;

```

#### Rotate Loops

**Sintaxis:** obj &lt;&lt; Path Diagram Properties( Rotate Loops ( { {name1, angle1}, {name2, angle2}, ...} ) )

**Descripción:** Controla la rotación de los bucles de varianza dentro del diagrama de senderos. Los ángulos se miden hacia la derecha en radianes.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### Show Constant Mean Square

**Sintaxis:** obj &lt;&lt; Show Constant Mean Square( state=0|1 )

**Descripción:** Muestra u oculta el borde asociado a la constante en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Constant Mean Square( 1 ) );

```

#### Show Covariances

**Sintaxis:** obj &lt;&lt; Show Covariances( state=0|1 )

**Descripción:** Muestra u oculta las flechas bidireccionales que representan covarianzas en el diagrama de senderos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Covariances( 0 ) );

```

#### Show Equality Constraints

**Sintaxis:** obj &lt;&lt; Show Equality Constraints( state=0|1 )

**Descripción:** Muestra u oculta las restricciones de igualdad (etiquetas o valores fijos) en los bordes del diagrama de senderos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Equality Constraints( 0 ) );

```

#### Show Estimates

**Sintaxis:** obj &lt;&lt; Show Estimates( "No estandarizado"|"Estandarizado"|"Ninguno" )

**Descripción:** Muestra u oculta las estimaciones de los parámetros no estandarizados en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Estimates( "None" ) );

```

#### Show Loadings

**Sintaxis:** obj &lt;&lt; Show Loadings( state=0|1 )

**Descripción:** Muestra u oculta los indicadores de variables latentes en el diagrama de senderos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Loadings( 0 ) );

```

#### Show Means/Intercepts

**Sintaxis:** obj &lt;&lt; Show Means/Intercepts( state=0|1 )

**Descripción:** Muestra u oculta las medias en la plataforma SEM.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ) );

```

#### Show R Squared Values

**Sintaxis:** obj &lt;&lt; Show R Squared Values( state=0|1 )

**Descripción:** Muestra u oculta los valores de R al cuadrado dentro de los nodos en el diagrama de senderos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show R Squared Values( 1 ) );

```

#### Show Regressions

**Sintaxis:** obj &lt;&lt; Show Regressions( state=0|1 )

**Descripción:** Muestra u oculta regresiones en la plataforma SEM. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Regressions( 0 ) );

```

#### Show Variances

**Sintaxis:** obj &lt;&lt; Show Variances( state=0|1 )

**Descripción:** Muestra u oculta las flechas bidireccionales que representan varianzas en el diagrama de senderos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Variances( 0 ) );

```

## Structural Equation Models Specification

### Mensajes del elemento

#### Covariances

**Sintaxis:** obj &lt;&lt; Covariances

**Descripción:** Agrega covarianzas entre las variables en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Define Time Values

**Sintaxis:** obj &lt;&lt; Define Time Values

**Descripción:** Define las ocasiones de medición para las observaciones repetidas. Estos valores se utilizan para especificar modelos longitudinales.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Model Specification(
		Model Name( "Longitudinal Model" ),
		Define Time Values( {0, 2, 3} )
	)
);

```

#### Loadings

**Sintaxis:** obj &lt;&lt; Loadings

**Descripción:** Agrega cargas a las variables latentes en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Max Iterations

**Sintaxis:** Structural Equation Models(..., Max Iterations( 3 )

**Descripción:** Establece el número máximo de iteraciones para la convergencia. "1000" de forma predeterminada.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} ),
		Max Iterations( 3 )
	)
);

```

#### Means/Intercepts

**Sintaxis:** obj &lt;&lt; Means/Intercepts

**Descripción:** Agrega medias o constantes a las variables en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

#### Model Name

**Sintaxis:** obj &lt;&lt; Model Name

**Descripción:** Especifica un nombre para el modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Model Notes

**Sintaxis:** obj &lt;&lt; Model Notes

**Descripción:** Especifica notas para el modelo.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Model Notes(
			"This is a simple model with only means and variances for each variable"
		),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### New Latent

**Sintaxis:** obj &lt;&lt; New Latent

**Descripción:** Agrega una nueva variable latente en el modelo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Regressions

**Sintaxis:** obj &lt;&lt; Regressions

**Descripción:** Agrega rutas de regresión al modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Variances

**Sintaxis:** obj &lt;&lt; Variances

**Descripción:** Agrega varianzas a las variables en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

