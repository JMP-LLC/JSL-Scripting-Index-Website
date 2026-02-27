# Score Ellipse Coverage



## 项消息

### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 15

### Shaded Contour

**语法:** obj &lt;&lt; Shaded Contour( state=0|1 )

**说明:** 显示或隐藏着色等高线。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

