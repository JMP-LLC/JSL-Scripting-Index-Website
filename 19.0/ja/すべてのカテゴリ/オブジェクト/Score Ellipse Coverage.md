# Score Ellipse Coverage



## 項目のメッセージ

### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 15

### Shaded Contour

**構文:** obj &lt;&lt; Shaded Contour( state=0|1 )

**説明:** 塗られた楕円の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

