# DataEditBox



## 项消息

### Blink

**语法:** obj &lt;&lt; Blink

**说明:** 在数据编辑框中闪烁显示的行。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Blink;

```

### Find

**语法:** obj &lt;&lt; Find( search term )

**说明:** 显示按照输入的搜索项找到的行。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Find( Contains( :State, "North Carolina" ) );

```

### Go to row

**语法:** obj &lt;&lt; Go to row( row )

**说明:** 在数据编辑框中显示输入的行。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Go To Row( 23 );

```

### New Row

**语法:** obj &lt;&lt; New Row

**说明:** 在数据表中创建新行并在数据编辑框中显示该行。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << New Row;

```

### Next

**语法:** obj &lt;&lt; Next

**说明:** 在数据编辑框中显示下一选定行。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Next;

```

### Next Selected

**语法:** obj &lt;&lt; Next Selected

**说明:** 从选定行中，在数据编辑框中显示下一选定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dt << Select Where( dt:population > 10000000 );
dataedit = win[Data Edit Box( 1 )];
dataedit << Next Selected;

```

### Prev

**语法:** obj &lt;&lt; Prev

**说明:** 在数据编辑框中显示上一选定行。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Go To Row( 23 );
dataedit << Prev;

```

### Prev Selected

**语法:** obj &lt;&lt; Prev Selected

**说明:** 从选定行中，在数据编辑框中显示上一选定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dt << Select Where( dt:population > 10000000 );
dataedit = win[Data Edit Box( 1 )];
dataedit << Prev Selected;

```

### Save

**语法:** obj &lt;&lt; Save

**说明:** 将数据编辑框中的行值保存到数据表。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Save( "$TEMP/SAT.jmp" );
New Window( "Example",
	cp = dt << Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << New Row;
dataedit << Save;

```

