# JMP App Module Instance



## 项消息

### Create Objects

**语法:** obj << Create Objects

**说明:** 创建模块实例的对象。这仅能在 JMP 应用程序模块的脚本中调用。

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Get Box

**语法:** obj << Get Box

**说明:** 获取模块实例的显示框。

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

**语法:** obj << Get Namespace

**说明:** 获取模块实例的命名空间。

```jsl

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**语法:** obj << Get User Data

**说明:** 返回与模块实例关联的用户数据。

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Set User Data

**语法:** inst << Set User Data(expr)

**说明:** 在 JMP app 模块实例中储存 JSL 值；值可以为数字、字符串、列表、关联数组或其他 JSL 类型。

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

