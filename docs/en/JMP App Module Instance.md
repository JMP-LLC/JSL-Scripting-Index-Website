# JMP App Module Instance



### Create Objects

**Syntax:** obj << Create Objects

**Description:** Create the objects of the module instance.  This can be called only within the script for a JMP App Module.

```js

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Get Box

**Syntax:** obj << Get Box

**Description:** Get the display box for the module instance.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
inst = modules[1] << Create Instance;
inst << Get Box;

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Description:** Get the namespace for the module instance.

```js

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**Syntax:** obj << Get User Data

**Description:** Returns the user data associated with the module instance.

```js

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Set User Data

**Syntax:** inst << Set User Data(expr)

**Description:** Stores a JSL value in the JMP app module instance; the value could be a number, string, list, associative array, or other JSL type.

```js

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

