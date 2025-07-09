# Compare Data Tables



### Are Data Different

**Sintaxis:** obj << Are Data Different

**Descripción:** Devuelve true o false dependiendo de si los datos de las dos tablas son distintos o no.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
how = (obj << Are Data Different);

```

### Auto compare

**Sintaxis:** Auto Compare(0|1)

**Descripción:** Realiza comparaciones en cuando se cambia algo en la configuración

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Auto Compare( 1 );

```

### Close

**Sintaxis:** obj << Close

**Descripción:** Cierra el objeto de Comparar tablas de datos

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << close;

```

### Compare

**Sintaxis:** Compare()

**Descripción:** Realiza las comparaciones al momento

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Compare();

```

### Compare Column Attributes and Properties

**Sintaxis:** obj << Compare Column Attributes and Properties( state=0|1 )

**Descripción:** Establece o borra la marca de comparación de los atributos y las propiedades de columnas. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare column attributes and properties( 1 );

```

### Compare Data

**Sintaxis:** obj << Compare Data( state=0|1 )

**Descripción:** Establece o borra la marca de comparación de los datos de columnas. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare data( 0 );

```

### Compare Data Tables

**Sintaxis:** Compare Data Tables( <Compare with( Data Table( name ))>, <show window(0 | 1)>, <limit(integer)>, <Compare table properties(0 | 1)>, <Compare column attributes and properties(0 | 1)>, <Compare data(0 | 1)>, <Fuzzy compare( <0 | 1>, <Relative Error(number)>)>, <Show difference summary(0 | 1)>, <Show difference plot(0 | 1)> )

**Descripción:** Compara dos tablas de datos abiertas e informa de las diferencias entre los datos, así como los metadatos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );

```

### Compare Table Properties

**Sintaxis:** obj << Compare Table Properties( state=0|1 )

**Descripción:** Establece o borra la marca de comparación de los scripts y las variables de tabla. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare table properties;

```

### Compare With

**Sintaxis:** obj << Compare With( Data Table( name ) )

**Descripción:** Compara la primera tabla con esta tabla. Devuelve verdadero o falso.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
obj = dt << Compare Data Tables();
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
same = obj << compare with( dt2 );

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Sitúa al portapapeles el script Comparar tablas de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Copy Script;

```

### Fuzzy Compare

**Sintaxis:** obj << Fuzzy Compare( <(state= 1 | 0)>, <Relative Error (number)> )

**Descripción:** Establece o borra la marca de comparación de los datos de columnas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << fuzzy compare( relative error( 0.0001 ) );

```

### Get column attributes differences

**Sintaxis:** obj << Get column attributes differences( columns( column) )

**Descripción:** Presenta la lista de atributos de columnas que difieren para las columnas que se comparan.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
attribDiff = (obj << Get columns attributes differences( :name ));

```

### Get column properties differences

**Sintaxis:** obj << Get column properties differences( columns( column) )

**Descripción:** Presenta la lista de propiedades de columnas que difieren para las columnas que se comparan.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
propDiff = (obj << Get columns properties differences( :name ));

```

### Get columns list

**Sintaxis:** obj << Get columns list( ( <differed in data> |  <differed in properties> | <mismatched data type> | <differed in attributes>) )

**Descripción:** Presenta la lista de columnas que difieren en datos, propiedades de columna, tipo de datos u otros atributos de columna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get columns list( differed in attributes ));
Show( colDiff );

```

### Get difference summary matrix

**Sintaxis:** obj << Get difference summary matrix

**Descripción:** Obtiene el resumen de diferencias en forma de matriz. Las columnas de la matriz corresponden a las columnas del resumen de diferencias. La primera columna, acción, está representada en la matriz con -1 para Eliminar, 0 para Sustituir, y 1 para Añadir.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
mtx = (obj << Get Difference Summary matrix);

```

### Get table scripts difference list

**Sintaxis:** obj << Get table scripts difference list

**Descripción:** Presenta la lista de scripts de tabla que faltan o difieren.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
scriptDiff = (obj << Get table scripts difference list);

```

### Get table variables difference list

**Sintaxis:** obj << Get table variables difference list

**Descripción:** Presenta la lista de variables de tabla que faltan o difieren.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
tvdiff = (obj << Get table variables difference list);

```

### Get unmatched columns list

**Sintaxis:** obj << Get unmatched columns list

**Descripción:** Presenta la lista de columnas sin asociar, aquellas que no tienen unas columnas correspondientes con las que compararse

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get unmatched columns list);

```

### Hide column properties with no differences

**Sintaxis:** Hide column properties with no differences(0|1)

**Descripción:** Oculta las propiedades que son iguales al comparar las propiedades de columna.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide column properties with no differences( 0 );

```

### Hide columns with no differences

**Sintaxis:** Hide columns with no differences(0|1)

**Descripción:** Oculta las columnas que son iguales al comparar datos de la tabla.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide columns with no differences( 0 );

```

### Hide rows with no differences

**Sintaxis:** Hide rows with no differences(0|1)

**Descripción:** Oculta las filas que son iguales al comparar datos de la tabla.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide rows with no differences( 0 );

```

### Hide table properties with no differences

**Sintaxis:** Hide table properties with no differences(0|1)

**Descripción:** Oculta los elementos que son iguales al comparar metadatos de la tabla.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide table properties with no differences( 0 );

```

### Ignore case

**Sintaxis:** Ignore Case(0|1)

**Descripción:** Ignora si los caracteres están en mayúsculas o minúsculas durante la comparación de datos

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Case( 1 );

```

### Ignore missing

**Sintaxis:** Ignore Missing(0|1)

**Descripción:** Ignora los valores faltantes durante la comparación de datos

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Missing( 1 );

```

### Ignore whitespace

**Sintaxis:** Ignore Whitespce(0|1)

**Descripción:** Ignora los caracteres de espacio en blanco durante la comparación de los datos

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Whitespace( 1 );

```

### Limit

**Sintaxis:** obj << Limit( integer )

**Descripción:** Establece el límite para el número de diferencia. La comparación se detendrá al alcanzar el límite.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << limit( 100 );

```

### Link

**Sintaxis:** Link({"col1", "col2", <ID(0|1)>, <No Compare(0|1)>, <Fuzzy Compare(<Ignore Case(0|1)>, <Ignore Whitespace(0|1)>, <Ignore Missing(0|1)>, <Relative Error(<amount>)>)>

**Descripción:** Especifica pares de columnas que comparar y otras opciones de comparación.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Link( {:age, :weight}, );

```

### Relative Error

**Sintaxis:** obj << Relative Error( integer )

**Descripción:** Establece el error relativo para la comparación aproximada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Relative Error( 0.00001 );

```

### Report

**Sintaxis:** obj << Report

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Row Alignment

**Sintaxis:** obj << Row Alignment (Flexible by Row|By Row|Use ID Columns)

**Descripción:** Establece el modo en el que se alinean las filas para la comparación. 

Flexible por fila: trata de encontrar el máximo número posible de filas en orden coincidentes omitiendo los bloques de filas no coincidentes.

Por fila: compara cada fila por número de línea.

Utilizar columnas ID: las columnas ID especificadas se utilizan para crear una clave para cada fila. Esta clave se utiliza para hacer coincidir filas.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Row Alignment( "By Row" );

```

### Save Difference Summary

**Sintaxis:** obj << Save Difference Summary( <invisible(0 | 1)> )

**Descripción:** Guarda el resumen de diferencias en una tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
summaryDT = (obj << save difference summary( invisible ));

```

### Save Script to Data Table

**Sintaxis:** obj << Save Script to Data Table

**Descripción:** Guarda como propiedad de tabla en la tabla de datos el script Comparar tablas de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Data Table;

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Agrega un botón al diario que contiene el script Comparar tablas de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Journal;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Añade el script Comparar tablas de datos a la ventana de texto del script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Script Window;

```

### Show Window

**Sintaxis:** obj << Show Window( Show window( 0|1) )

**Descripción:** Muestra u oculta la ventana para Comparar tablas de datos

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << show window( 1 );

```

### Show fuzzy differences

**Sintaxis:** Show Fuzzy Differences(0|1)

**Descripción:** Resalta las diferencias en la comparación de datos cuando los valores son iguales, solo por la configuración de comparación aproximada

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Show Fuzzy Differences( 1 );

```

### Unlink

**Sintaxis:** Unlink(<column name 1>, <column name 2>)

**Descripción:** Quita la comparación de columnas.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink( {"a", "b"} );

```

### Unlink All

**Sintaxis:** Unlink All

**Descripción:** Quita todas las comparaciones de columna.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink All;

```

