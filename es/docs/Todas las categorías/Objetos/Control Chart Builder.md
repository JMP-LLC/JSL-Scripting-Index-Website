# Control Chart Builder



## Constructores asociados

### Control Chart Builder

**Sintaxis:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**Descripción:** Permite crear interactivamente gráficos de control, que se utilizan para determinar si un proceso es estable y predecible. La plataforma Constructor de gráficos de control se puede utilizar para crear los siguientes tipos de gráficos de control: IMR, X-Barra, de corrida corta, de tiempo, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR sobre gráficos de medias, de tres vías y de eventos raros.

**Gráfico C**

```jsl

Names Default To Here( 1 );
// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**Gráfico de diferencia de corrida corta**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);

```

**Gráfico de diferencias de corrida corta para X-Barra**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

**Gráfico de rangos móviles de la mediana**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Gráfico de rangos móviles de la mediana sobre las desviaciones estándar del grupo (establecer tamaño del subgrupo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Gráfico de rangos móviles de la mediana sobre las desviaciones estándar del grupo (variable de subgrupo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Gráfico de rangos móviles de la mediana sobre medias grupales (establecer tamaño del subgrupo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Gráfico de rangos móviles de la mediana sobre medias grupales (variable de subgrupo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Gráfico de tiempo**

```jsl

Names Default To Here( 1 );
// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Show Control Panel( 0 )
);

```

**Gráfico de tres vías (establecer tamaño del subgrupo)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

**Gráfico de tres vías (variable de subgrupo)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Range" ) ),
		Limits( Sigma( "Range" ) )
	)
);

```

**Gráfico estandarizado de corrida corta**

```jsl

Names Default To Here( 1 );
// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

**Gráfico estandarizado de corrida corta para X-Barra**

```jsl

Names Default To Here( 1 );
// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) )
);

```

**Gráfico G de eventos raros**

```jsl

Names Default To Here( 1 );
// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Negative Binomial" ) )
	)
);

```

**Gráfico IMR**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**Gráfico IMR sobre la desviación estándar del grupo (establecer tamaño del subgrupo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**Gráfico IMR sobre la desviación estándar del grupo (variable de subgrupo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**Gráfico IMR sobre medias (establecer tamaño del subgrupo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**Gráfico IMR sobre medias (variable de subgrupo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**Gráfico Levey-Jennings**

```jsl

Names Default To Here( 1 );
// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart(
		Points( Statistic( "Individual" ) ),
		Limits( Sigma( "Levey Jennings" ) )
	)
);

```

**Gráfico NP**

```jsl

Names Default To Here( 1 );
// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Gráfico P**

```jsl

Names Default To Here( 1 );
// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Gráfico P'**

```jsl

Names Default To Here( 1 );
// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart(
		Points( Statistic( "Proportion" ) ),
		Limits( Sigma( "Laney P Prime" ) )
	)
);

```

**Gráfico T de eventos raros**

```jsl

Names Default To Here( 1 );
// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

**Gráfico U**

```jsl

Names Default To Here( 1 );
// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**Gráfico U'**

```jsl

Names Default To Here( 1 );
// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart(
		Points( Statistic( "Proportion" ) ),
		Limits( Sigma( "Laney U Prime" ) )
	)
);

```

**Gráfico X- Barra/S (variable de subgrupo)**

```jsl

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

**Gráfico X-Barra/R**

```jsl

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 )
);

```

**Gráfico X-Barra/S (Establecer tamaño del subgrupo)**

```jsl

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

## Mensajes del elemento

### Add Limits

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Add Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Descripción:** Agrega un conjunto adicional de límites para el gráfico especificado. Los límites agregados se muestran como líneas discontinuas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Limits( {LCL( 17.5 ), Avg( 20.25 ), UCL( 23 )} ) );

```

### Add Spec Limits

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Add Spec Limits( {LSL( number ), Target( number ), USL( number )} ) )

**Descripción:** Establece los límites de especificación para cada variable Y.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );

```

### Alarm Script

**Sintaxis:** obj &lt;&lt; Alarm Script( Write( "..." )|Speak( "..." )|Mail( address, subject,"..." ) )

**Descripción:** Envía un mensaje siempre que un punto de un gráfico de control falla una prueba determinada. El mensaje se puede enviar al registro, se puede leer por voz o se puede enviar por correo electrónico.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
obj << Alarm Script(
	Write(
		"Out of Control for test ",
		qc_test,
		" in column ",
		qc_col,
		" in sample ",
		qc_sample,
		" in phase ",
		qc_phase
	)
);

```

### Chart

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), &lt;Points( Statistic(),... )&gt;, &lt;Set Control Limits( { LCL(), UCL(), Avg() } )&gt;, &lt;Add Limits( { LCL(), UCL(), Avg() } )&gt;, &lt;Add Spec Limits( { LSL(), USL(), Target() } )&gt;, &lt;Limits( Sigma(), ... )&gt;, &lt;Warnings( Test number( state=0|1 ) )&gt; )

**Descripción:** Establece los atributos de advertencia, límite y punto para el gráfico especificado en el argumento Position.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Warnings( Test 1( 1 ) ),
		Add Limits( {LCL( 18 ), UCL( 22.4 ), Avg( 20.2 )} )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

### Class

**Sintaxis:** obj &lt;&lt; Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" )

**Descripción:** Especifica la clase o familia de combinaciones de puntos y estadísticos de sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma ) )
);

```

### Color By Product

**Sintaxis:** obj &lt;&lt; Color By Product( state=0|1 )

**Descripción:** Colorea los puntos representados por el nivel de la variable del producto. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Color By Product( 1 );

```

### Connect Thru Missing

**Sintaxis:** obj &lt;&lt; Connect Thru Missing( state=0|1 )

**Descripción:** Determina si los puntos y las líneas están conectados cuando algunas muestras tienen valores faltantes o filas excluidas.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = Control Chart Builder( Variables( Y( :Gap ) ) );
Wait( 1 );
obj << Connect Thru Missing( 1 );

```

### Customize Tests

**Sintaxis:** obj &lt;&lt; Customize Tests( Test 1 | Test 2 | Test 3 | Test 4 | Test 5 | Test 6 | Test 7 | Test 8 (n, label) )

**Descripción:** Le permite seleccionar, personalizar etiquetas y establecer los parámetros de distancia basados en sigma para las pruebas de la Western Electric.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Customize Tests( Test 1( 2, "A" ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);

```

### Fit to Window

**Sintaxis:** obj &lt;&lt; Fit to Window( "Automático"|"Activo"|"Desactivado"|"Mantener relación de aspecto"="Desactivado" )

**Descripción:** Establece el comportamiento del ajuste automático de tamaño del informe. "Desactivado" de forma predeterminada.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Fit to Window( "On" );

```

### Get Control Limits

**Sintaxis:** obj &lt;&lt; Get Control Limits( filename )

**Descripción:** Importa los límites de control de una tabla de datos seleccionada y sustituye los límites calculados en el gráfico.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),

);
obj << Get Control Limits( "$SAMPLE_DATA/Quality Control/CoatingLimits.jmp" );

```

### Get Product Statistics

**Sintaxis:** obj &lt;&lt; Get Product Statistics( filename )

**Descripción:** Importa valores objetivo y sigma para el producto de corrida corta de una tabla de datos especificada.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Get Product Statistics( "$SAMPLE_DATA/Quality Control/CoatingProductInfo.jmp" );

```

### Get Spec Limits

**Sintaxis:** obj &lt;&lt; Get Spec Limits( filename )

**Descripción:** Importa los límites de especificación desde un archivo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :OZONE, :CO ) ), Set Subgroup Size( 5 ) );
obj << Get Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" );

```

### Graph Borders

**Sintaxis:** obj &lt;&lt; Graph Borders( state=0|1 )

**Descripción:** Muestra u oculta los bordes internos del panel de gráficos.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing( 5 );
obj << Graph Transparency( 0 );
obj << Graph Borders( 1 );

```

### Graph Spacing

**Sintaxis:** obj &lt;&lt; Graph Spacing( gap=2 )

**Descripción:** Especifica la cantidad de espacio que habrá entre los paneles del gráfico. "2" de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Graph Spacing( 5 );

```

### Graph Spacing Color

**Sintaxis:** obj &lt;&lt; Graph Spacing Color( color )

**Descripción:** Especifica el color del espacio que habrá entre los paneles del gráfico.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing Color( "Red" );

```

### Graph Spacing Transparency

**Sintaxis:** obj &lt;&lt; Graph Spacing Transparency( number )

**Descripción:** Especifica el nivel de transparencia del espacio que habrá entre los paneles del gráfico. Debe estar entre 0 y 1.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing Transparency( 0.3 );

```

### Include Missing Categories

**Sintaxis:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**Descripción:** Incluye un nivel adicional para las variables nominales y ordinales cuando los datos contienen valores faltantes. Opción activada de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Diameter ), Subgroup( :Day ) ) );
:Day[{8, 9, 10, 11, 12}] = .;
Wait( 1 );
obj << Include Missing Categories( 0 );

```

### K Sigma

**Sintaxis:** obj &lt;&lt; K Sigma( value=3 )

**Descripción:** Establece el valor K que se multiplicará por sigma para formar los límites de control acerca de la media. "3" de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	K Sigma( 2.5 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) )
);
Wait( 1 );
obj << K Sigma( 3 );

```

### Limits

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Limits( Sigma( "sigma" ), &lt;Zones( state=0|1 )&gt;, &lt;Shade Zones( state=0|1 )&gt;, &lt;Set Control Limits( state=0|1 )&gt;, &lt;Show Upper Limit( state=0|1 )&gt;, &lt;Show Lower Limit( state=0|1 )&gt;, &lt;Show Center Line( state=0|1 )&gt; ) )

**Descripción:** Ofrece opciones para cambiar las características de los límites del gráfico. En función del tipo de gráfico, puede asignar uno de los siguientes valores como argumento sigma: rango, desviación estándar, rango móvil, rango móvil de la mediana, Levey-Jennings, Poisson, binominal, binomial negativa, Weibull, Laney P Prime o Laney U Prime.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ), Shade Zones( 1 ) ) )
);
obj << Chart(
	Position( 2 ),
	Points( Statistic( "Standard Deviation" ) ),
	Limits( Sigma( "Standard Deviation" ) )
);

```

### Limits Label Precision

**Sintaxis:** obj &lt;&lt; Limits Label Precision( number )

**Descripción:** Especifica la precisión que se muestra en los límites relativos a los datos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Limit Labels( 1 );
Wait( 1 );
obj << Limits Label Precision( 5 );

```

### OC Curve

**Sintaxis:** obj &lt;&lt; OC Curve

**Descripción:** Muestra en una nueva ventana una curva característica operativa (OCC) mediante los límites de control y sigma del gráfico de control.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ) );
Wait( 1 );
obj << OC Curve;

```

### Points

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Points( Statistic( "statistic" ), &lt;Individual Points( state=0|1 )&gt;, &lt;Box Plots( state=0|1 )&gt;, &lt;Show Connect Line( state=0|1 )&gt;, &lt;Show Points( state=0|1 )&gt; ) )

**Descripción:** Ofrece opciones para cambiar las características de los puntos del gráfico. En función del tipo de gráfico, puede asignar uno de los siguientes valores al argumento statistic: media, rango, desviación estándar, rango móvil sobre medias, rango móvil sobre desviación estándar, individual, rango móvil, conteo, proporción, centrado, estandarizado, rango centrado o rango estandarizado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),

);
Wait( 1 );
obj << Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ) );

```

### Product Statistics

**Sintaxis:** obj &lt;&lt; Product Statistics( ( column ) ( Product Level( l1 ( Target( number ), Sigma ( number ) ), &lt;l2 ( Target( number ), Sigma ( number ) )) ), &lt; (column ( Product Level( ... ) ) ) &gt; )

**Descripción:** Establece los valores para los valores objetivo y sigma del producto de corrida corta.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Product Statistics(
	:Weight( ProductLevel( A( Target( 20 ), Sigma( 1 ) ), B( Target( 22 ), Sigma( .7 ) ) ) )
);

```

### Range Span

**Sintaxis:** obj &lt;&lt; Range Span( value=2 )

**Descripción:** Establece el valor de la opción Rango de alcance que se utiliza en los gráficos de rangos móviles. "2" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( K Sigma( 2.5 ), Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Range Span( 3 );

```

### Rerun All Tests

**Sintaxis:** obj &lt;&lt; Rerun All Tests

**Descripción:** Vuelve a ejecutar todas las pruebas seleccionadas actualmente y cualquier script de alarma asociado.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			" in phase ",
			qc_phase
		)
	),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
Wait( 1 );
obj << K Sigma( 2.5 );
obj << Rerun All Tests;

```

### Save Control Limits

**Sintaxis:** obj &lt;&lt; Save Control Limits( "en columna"|"en nueva tabla"|"en una nueva tabla alta" )

**Descripción:** Guarda los límites de control en una propiedad de columna o en una nueva tabla de datos.



Si se especifica in Column y los límites son constantes, los valores de límite de control inferior, media y límite de control superior para cada tipo de gráfico del informe se guardan en una propiedad de columna Límites de control. Si los límites no son constantes, no se guarda ninguna propiedad de columna.



Si se especifica in New Table, la desviación estándar y la media para cada gráfico se guardan en una nueva tabla de datos. Si los límites son constantes, el límite de control inferior, la media y el límite de control superior para cada gráfico se guardan también. Si hay fases, se guarda un nuevo conjunto de valores para cada fase.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Control Limits( "in Column" );
obj << Save Control Limits( "in New Table" );

```

### Save Product Statistics

**Sintaxis:** obj &lt;&lt; Save Product Statistics

**Descripción:** Guarda las columnas en una nueva tabla de datos. La nueva tabla de datos contiene los estadísticos de producto (objetivo y sigma) para cada nivel de la variable de pieza o producto.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Save Product Statistics;

```

### Save Spec Limits

**Sintaxis:** obj &lt;&lt; Save Spec Limits

**Descripción:** Guarda los límites de especificación en una tabla de datos nueva. Esta opción solo está disponible si ha establecido límites de especificación con una propiedad de columna Límites de especificación, a través de JSL, la importación de archivos de Obtener límites de especificación o la opción Establecer límites de especificación.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );
obj << Save Spec Limits;

```

### Save Summaries

**Sintaxis:** obj &lt;&lt; Save Summaries

**Descripción:** Guarda una nueva tabla de datos para cada gráfico. La tabla de datos incluye una fila para cada muestra y columnas para la etiqueta de la muestra, el tamaño muestral y el nivel de producto, si se especifica una variable de producto o pieza. Para cada gráfico, también hay columnas para el punto individual representado, tipo de gráfico, UCL, media, LCL y cualquier prueba seleccionada que esté fallando.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Summaries;

```

### Set Control Limits

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Set Control Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Descripción:** Establece los límites de control para el gráfico especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ) );
obj << Chart( Position( 1 ), Set Control Limits( {LCL( 19 ), Avg( 20 ), UCL( 21 )} ) );

```

### Set Last N Subgroups

**Sintaxis:** obj &lt;&lt; Set Last N Subgroups( number )

**Descripción:** Cambia el eje horizontal para mostrar solo los N últimos subgrupos del gráfico. El número de subgrupos especificados no tiene en cuenta las observaciones excluidas u ocultas. Esta opción no está disponible cuando existe una variable de fase con más de un nivel.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Set Last n Subgroups( 5 );

```

### Set Sigma

**Sintaxis:** obj &lt;&lt; Set Sigma( value )

**Descripción:** Establece el valor sigma utilizado en el gráfico de control.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Set Sigma( 1.8 );

```

### Set Subgroup Size

**Sintaxis:** obj &lt;&lt; Set Subgroup Size( integer )

**Descripción:** Especifica el número de filas por subgrupo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Set Subgroup Size( 4 );

```

### Show Alarm Report

**Sintaxis:** obj &lt;&lt; Show Alarm Report( state=0|1 )

**Descripción:** Muestra u oculta la tabla de tasas de alarmas y muestras fuera de control.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Alarm Report( 1 );

```

### Show Capability

**Sintaxis:** obj &lt;&lt; Show Capability( state=0|1 )

**Descripción:** Muestra u oculta el informe Análisis de capacidad del proceso. Opción activada de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Limits( Sigma( "Moving Range" ) ),
		Add Spec Limits( {LSL( 17 ), USL( 23 ), Target( 20 )} )
	)
);
Wait( 1 );
obj << Show Capability( 0 );

```

### Show Center Line

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Limits( Show Center Line( state=0|1 ) ) )

**Descripción:** Muestra u oculta la línea central. Opción activada de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Limits( Show Center Line( 0 ) ) );

```

### Show Control Panel

**Sintaxis:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Descripción:** Muestra u oculta el panel de control. Opción activada de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Show Control Panel( 0 );

```

### Show Excluded Region

**Sintaxis:** obj &lt;&lt; Show Excluded Region( state=0|1 )

**Descripción:** Muestra u oculta las regiones del gráfico donde se han excluido las muestras. Opción activada de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = dt << Select Where( :Sample < 4 );
r << Exclude;
Wait( 1 );
obj << Show Excluded Region( 0 );

```

### Show Limit Labels

**Sintaxis:** obj &lt;&lt; Show Limit Labels( state=0|1 )

**Descripción:** Muestra u oculta las etiquetas de límite en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Limit Labels( 1 );

```

### Show Limit Summaries

**Sintaxis:** obj &lt;&lt; Show Limit Summaries( state=0|1 )

**Descripción:** Muestra u oculta el informe Resúmenes de límites. Este informe contiene los límites de control (LCL y UCL), la línea central (media), los puntos y límites representados y el tamaño muestral del gráfico. Opción activada de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Show Limit Summaries( 0 );

```

### Show Lower Limit

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Limits( Show Lower Limit( state=0|1 ) ) )

**Descripción:** Muestra u oculta el límite de control inferior. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Show Lower Limit( 0 ) ) )
);

```

### Show Product Separators

**Sintaxis:** obj &lt;&lt; Show Product Separators( state=0|1 )

**Descripción:** Muestra u oculta las líneas verticales discontinuas en el gráfico que indican que el producto ha cambiado. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Show Product Separators( 0 );

```

### Show Sigma Report

**Sintaxis:** obj &lt;&lt; Show Sigma Report( state=0|1 )

**Descripción:** Muestra u oculta la tabla de Sigma global, Sigma intra, Índice de estabilidad y Media. En el caso de los gráficos de tres vías, también se muestran el sigma inter y el sigma inter e intra.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Sigma Report( 1 );

```

### Show Two Shewhart or Short Run Charts

**Sintaxis:** obj &lt;&lt; Show Two Shewhart or Short Run Charts( state=0|1 )

**Descripción:** Muestra la localización y el gráfico de dispersión. Cuando el valor de esta opción es 0, no se muestra el gráfico de dispersión. Opción activada de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Diameter ), Subgroup( :Day ) )
);

```

### Show Upper Limit

**Sintaxis:** obj &lt;&lt; Chart( Position( number ), Limits( Show Upper Limit( state=0|1 ) ) )

**Descripción:** Muestra u oculta el límite de control superior. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Show Upper Limit( 0 ) ) )
);

```

### Size

**Sintaxis:** obj &lt;&lt; Size( width, height )

**Descripción:** Establece el tamaño del gráfico.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Size( 808, 586 );

```

### Sort by Subgroup

**Sintaxis:** obj &lt;&lt; Sort by Subgroup( state=0|1 )

**Descripción:** Ordena los datos del proceso según la variable de subgrupo, o la combinación de variables de subgrupo anidadas, antes de realizar los cálculos. Esta opción solo está disponible si se ha especificado una variable de subgrupo.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Airline Delays.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Day of Week ), Y( :Arrival Delay ) )
);
Wait( 1 );
obj << Sort by Subgroup( 1 );

```

### Test Excluded Subgroups

**Sintaxis:** obj &lt;&lt; Test Excluded Subgroups( state=0|1 )

**Descripción:** Incluye o excluye subgrupos completamente excluidos en el cálculo de las pruebas. Esta opción solo está disponible cuando se selecciona la opción Mostrar región excluida. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Test Excluded Subgroups( 0 ),
	Show Control Panel( 0 ),
	Show Alarm Report( 1 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
Wait( 1 );
dt << Select Rows( Index( 21, 24 ) ) << Exclude;

```

### Use Event Chooser

**Sintaxis:** obj &lt;&lt; Use Event Chooser( state=0|1 )

**Descripción:** Categoriza datos numéricos ordinales y ofrece selecciones de modelización de nivel numérico individuales. La opción Utilizar Selector de eventos solo está disponible para los Gráficos por atributos que incluyan variables Y numéricas no continuas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Control Chart Builder( Class( "Shewhart Attribute" ), Variables( Y( :Age ) ) );
obj << Use Event Chooser( 1 );

```

### Use Excluded Points on MR

**Sintaxis:** Platform preferences( Control Chart Builder (Use Excluded Points on MR(1)) )

**Descripción:** Preferencia de incluir puntos que están excluidos de los cálculos de rango móvil.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
Platform Preferences( Control Chart Builder( Use Excluded Points on MR( 1 ) ) );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << Select Rows( 4 :: 6 ) << Exclude( 1 );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

### Variables

**Sintaxis:** obj &lt;&lt; Variables( Y( column ), &lt;Subgroup( column)&gt;, &lt;Phase( column )&gt;, &lt;Part( column )&gt; )

**Descripción:** Asigna las variables indicadas a los papeles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

### n Trials

**Sintaxis:** obj &lt;&lt; n Trials( column | integer )

**Descripción:** Asigna un tamaño de lote para un gráfico de control por atributos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), nTrials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

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
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
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

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
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
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
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
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Relaunch Analysis;

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
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
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
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

