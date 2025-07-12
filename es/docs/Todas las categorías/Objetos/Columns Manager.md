# Columns Manager



## Mensajes del elemento

### Clear All Filters

**Sintaxis:** obj << Clear All Filters

**Descripción:** Esta opción quita todos los filtros de la tabla resumen. Tenga en cuenta que el comando Establecer columnas no es un filtro, por lo que, si llama a este comando, no elimina la restricción aplicada a las columnas mostradas.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Text Filter( "t" );
obj << Clear All Filters;

```

### Create Data Dictionary

**Sintaxis:** obj << Create Data Dictionary

**Descripción:** Crea un diario que incluye estadísticos e información de propiedades sobre cada columna.

**JMP Versión agregada:** 18

### Extended Statistics

**Sintaxis:** obj << Extended Statistics(<list of statistics>)

**Descripción:** Reemplaza el conjunto predeterminado de estadísticos ampliados sin tener que configurar la lista en las preferencias.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager( Include Extended Statistics( 1 ) );
obj << Extended Statistics( {"Median Absolute Deviation", "Q1"} );

```

### Force calculations for all categorical columns

**Sintaxis:** obj << Force calculations for all categorical columns( state=0|1 )

**Descripción:** Si habilita esta opción, los estadísticos se calculan para todas las columnas categóricas, no solo para las columnas de caracteres. Por ejemplo, una columna de expresión calcula el número de valores faltantes.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Columns Manager;
obj << Force calculations for all categorical columns( 1 );

```

### Force calculations for all numeric columns

**Sintaxis:** obj << Force calculations for all numeric columns( state=0|1 )

**Descripción:** Cuando esta opción está habilitada, los estadísticos numéricos se calculan para todas las columnas numéricas, siempre que sea posible. Por ejemplo, se calcula el número de valores únicos para las columnas designadas como continuas.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Force calculations for all numeric columns( 1 );

```

### Get Summary Table

**Sintaxis:** obj << Get Summary Table

**Descripción:** Obtiene el cuadro de tabla para la tabla resumen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
tab = obj << Get Summary table;
tab << Sort By Column( "n unique" );

```

### Hide Excluded Columns

**Sintaxis:** obj << Hide Excluded Columns( state=0|1 )

**Descripción:** Incluye o quita las columnas marcadas como Excluidas de la tabla resumen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Hide Excluded Columns( 0 );

```

### Hide Hidden Columns

**Sintaxis:** obj << Hide Hidden Columns( state=0|1 )

**Descripción:** Incluye o quita las columnas marcadas como Ocultas de la tabla resumen.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Hide Hidden Columns( 0 );

```

### Include Extended Statistics

**Sintaxis:** obj << Include Extended Statistics( state=0|1 )

**Descripción:** El conjunto de estadísticos adicionales se puede configurar en Preferencias.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Include Extended Statistics( 1 );

```

### Select Rows

**Sintaxis:** obj << Select Rows(<empty> | All | None | <column references>)

**Descripción:** Esta opción selecciona las filas de la tabla resumen correspondientes a las columnas. Para deshacer la selección, no pase ningún argumento. Seleccione todas las filas visibles o ninguna pasando Todas o Ninguna. Seleccione filas específicas pasando una lista de referencias de columna.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Select Rows( :age, :height );

```

### Set Columns

**Sintaxis:** obj << Set Columns(<columns>)

**Descripción:** De forma predeterminada, el Administrador de columnas incluye todas las columnas de la tabla de datos como conjunto base de columnas. Es posible que ese conjunto se reduzca (o no) en el informe aplicando la eliminación de columnas excluidas. Esta opción permite restringir el conjunto de columnas al que tiene acceso el Administrador de columnas.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Columns( {:height, :weight} );

```

### Set Modeling Type Filter

**Sintaxis:** obj << Set Modeling Type Filter(<empty> | <Continuous, Nominal, Ordinal, Vector, Unstructured Text, Multiple Response, None>)

**Descripción:** Esta opción establece el filtro de tipo de modelización. Borre sin pasar ningún argumento o especifique uno o más nombres de tipos de modelización. El filtro se cumple con columnas que coincidan con cualquiera de los tipos de análisis.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Modeling Type Filter( "Continuous", "Ordinal" );

```

### Set Property Filter

**Sintaxis:** obj << Set Property Filter(<empty> | At Least One Property | <list of property names>)

**Descripción:** Esta opción establece el filtro de propiedades. Borre sin pasar ningún argumento o especifique uno o más nombres de propiedad. El filtro se especifica mediante columnas que contengan cualquiera de las propiedades. También hay un valor especial que se compara con las columnas que tengan cualquier propiedad.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Columns Manager;
obj << Set Property Filter( "Matrix Column Names", "Value colors" );

```

### Set Selection Filter

**Sintaxis:** obj << Set Selection Filter(<empty> | Keep | Hide)

**Descripción:** Esta opción establece el filtro de selección. Permite al usuario seleccionar las columnas de forma arbitraria y, a continuación, filtrar la lista a ese conjunto de columnas (con Conservar o, por el contrario, con Ocultar). Para quitar el filtro, no pase ningún argumento.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Select Rows( :age, :height );
obj << Set Selection Filter( "Keep" );

```

### Set Text Filter

**Sintaxis:** obj << Set Text Filter(<empty> | <search text>)

**Descripción:** Esta opción establece los datos del filtro de texto actual, lo que reduce el número de columnas que se muestran en la tabla resumen. El filtro de texto solo se aplica a los nombres de columna.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Set Text Filter( "me" );

```

### Show Attributes

**Sintaxis:** obj << Show Attributes( state=0|1 )

**Descripción:** Expande o contrae la sección de la tabla resumen que contiene los atributos de columna.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Attributes( 0 );

```

### Show Properties

**Sintaxis:** obj << Show Properties( state=0|1 )

**Descripción:** Expande o contrae la sección de la tabla resumen que contiene las propiedades de columna.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Properties( 0 );

```

### Show Statistics

**Sintaxis:** obj << Show Statistics( state=0|1 )

**Descripción:** Expande o contrae la sección de la tabla resumen que contiene los estadísticos de columna.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Columns Manager;
obj << Show Statistics( 0 );

```

