# Scheduler



## 关联的构造器

### Schedule

**语法:** Schedule( seconds, script )

**说明:** Programa un evento que ejecuta el argumento de script scpt transcurridos sec segundos. Nota: el programador sólo funciona durante periodos de inactividad.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););

```

## 项消息

### Clear Schedule

**语法:** obj &lt;&lt; Clear Schedule

**说明:** 清除当前调度的所有事件的调度程序。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Clear Schedule;

```

### Close

**语法:** obj &lt;&lt; Close

**说明:** 关闭调度程序。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););Wait( 2 );s << Close;

```

### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););t = s << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**语法:** obj &lt;&lt; Restart

**说明:** 在停止调度程序运行当前调度的所有事件之后重新启动该程序。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;Wait( 2 );s << Restart;

```

### Show Schedule

**语法:** obj &lt;&lt; Show Schedule

**说明:** 显示当前计划的下一个事件。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Show Schedule;

```

### Stop

**语法:** obj &lt;&lt; Stop

**说明:** 停止调度程序运行当前调度的所有事件。

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;

```

