# Scheduler



## 关联的构造器

### Schedule

**语法:** Schedule( seconds, script )

**说明:** 计划一个事件，在经过 sec 秒后运行 scpt 脚本参数。 注意: 调度程序仅在空闲时段内运行。

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

## 项消息

### Clear Schedule

**语法:** obj << Clear Schedule

**说明:** 清除当前调度的所有事件的调度程序。

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**语法:** obj << Close

**说明:** 关闭调度程序。

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
Wait( 2 );
s << Close;

```

### Get Container

**语法:** obj << Get Container

**说明:** 返回对保留对象内容的容器框的引用。

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
t = s << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**语法:** obj << Restart

**说明:** 在停止调度程序运行当前调度的所有事件之后重新启动该程序。

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;
Wait( 2 );
s << Restart;

```

### Show Schedule

**语法:** obj << Show Schedule

**说明:** 显示当前计划的下一个事件。

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**语法:** obj << Stop

**说明:** 停止调度程序运行当前调度的所有事件。

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

