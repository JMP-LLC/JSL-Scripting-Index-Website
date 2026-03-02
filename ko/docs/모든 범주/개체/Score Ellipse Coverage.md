# Score Ellipse Coverage



## 항목 메시지

### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 15

### Shaded Contour

**구문:** obj &lt;&lt; Shaded Contour( state=0|1 )

**설명:** 음영 등고선을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );obj = dt << Model Driven Multivariate Control Chart( Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN ) );obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

