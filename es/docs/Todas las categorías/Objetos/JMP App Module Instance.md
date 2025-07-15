# JMP App Module Instance



## Mensajes del elemento

### Create Objects

**Sintaxis:** obj &lt;&lt; Create Objects

**Descripción:** Crea los objetos de la instancia del módulo.  Esta operación sólo puede efectuarse dentro del script para un módulo de aplicación JMP.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Get Box

**Sintaxis:** obj &lt;&lt; Get Box

**Descripción:** Obtiene el cuadro de visualización para la instancia del módulo.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
inst = modules[1] << Create Instance;
inst << Get Box;

```

### Get Namespace

**Sintaxis:** obj &lt;&lt; Get Namespace

**Descripción:** Obtiene el espacio de nombres para la instancia del módulo.

```jsl

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**Sintaxis:** obj &lt;&lt; Get User Data

**Descripción:** Devuelve los datos del usuario asociados con la instancia del módulo.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Set User Data

**Sintaxis:** inst &lt;&lt; Set User Data(expr)

**Descripción:** Guarda un valor JSL en la instancia del módulo de la aplicación JMP; el valor puede ser un número, una cadena, un arreglo asociativo u otro tipo JSL.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

