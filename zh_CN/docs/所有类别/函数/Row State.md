# Row State



## 函数

### As Row State

**语法:** rs = As Row State( x )

**说明:** 将数字转换为行状态值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) * 16
		 + (:age - 11) * 256
	)
);

```

### Color Of

**语法:** y = Color Of( <rs> ); Color Of( <Row State( <r> )> ) = y

**说明:** 返回指定行状态值的颜色分量，可能为正的 JMP 调色板索引值或负的 RGB 编码值。若 Color Of 用作 L 值，则会更改当前数据表当前行（或第 r 行）的颜色。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**语法:** rs = Color State( color )

**说明:** 返回颜色分量设置为指定值的行状态值。color 参数可以是任何有效的 JSL 颜色。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Combine States

**语法:** rs = Combine States( rs1, ... )

**说明:** 将几个行状态值合并为一个。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Excluded

**语法:** y = Excluded( <rs> ); Excluded( <Row State( <r> )> ) = y

**说明:** 返回指定行状态值的排除与否状态部分（0 或 1）。若 Excluded() 函数用作 L 值，则会更改当前数据表中当前行（或第 r 行）的排除状态。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**语法:** rs = Excluded State( x )

**说明:** 返回排除与否状态部分设置为指定值的行状态值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Hidden

**语法:** y = Hidden( <rs> ); Hidden( <Row State( <r> )> ) = y

**说明:** 返回指定行状态值的隐藏与否状态部分（0 或 1）。若 Hidden 用作 L 值，则会更改当前数据表中当前行（或第 r 行）的隐藏状态。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**语法:** rs = Hidden State( x )

**说明:** 返回隐藏与否状态部分设置为指定值的行状态值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hue State

**语法:** rs = Hue State( x )

**说明:** 返回色调状态部分设置为指定值的行状态值。需要与 Shade State() 值结合，产生一个有效的颜色。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Labeled

**语法:** y = Labeled( <rs> ); Labeled( <Row State( <r> )> ) = y

**说明:** 返回指定行状态值的添加标签与否状态部分（0 或 1）。若 Labeled 用作 L 值，则会更改当前数据表中当前行（或第 r 行）的标签状态。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**语法:** rs = Labeled State( x )

**说明:** 返回标签状态部分设置为指定值的行状态值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Marker Of

**语法:** y = Marker Of( <rs> ); Marker Of( <Row State( <r> )> ) = y

**说明:** 返回指定行状态值的标记状态部分。若 Marker Of 用作 L 值，则会更改当前数据表中当前行（或第 r 行）的标记。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker State

**语法:** rs = Marker State( marker )

**说明:** 返回标记状态部分设置为指定值的行状态值。marker 参数指定标记，可以是正整数、字符、代表 Unicode 字符的正整数或代表 Unicode 字符的十六进制字符。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Row State

**语法:** y = Row State( <dt>, <r> ); Row State( <dt>, <r> ) = y

**说明:** 返回当前数据表中当前行（或第 r 行）的行状态。若 Row State() 函数用作 L 值，则它会更改当前数据表中当前行（或第 r 行）的行状态。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Selected

**语法:** y = Selected( <rs> );Selected( <Row State( <r> )> ) = y

**说明:** 返回指定行状态值的选定与否状态部分（0 或 1）。若 Selected 用作 L 值，则会更改当前数据表中当前行（或第 r 行）的选定状态。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**语法:** rs = Selected State( x )

**说明:** 返回选定与否状态部分设置为指定值的行状态值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Shade State

**语法:** rs = Shade State( x )

**说明:** 返回色彩明暗状态部分设置为指定值的行状态值。需要与 Hue State() 值结合，产生一个有效的颜色。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

