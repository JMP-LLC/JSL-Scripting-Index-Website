# Fit Y by X Group



## Bivariate > Bivariate Curve

### 関連するコンストラクター

#### Curve

**構文:** obj &lt;&lt; ( Curve[number] )

**説明:** 追加のメッセージを送るために特定の曲線にアクセスする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );
obj << (curve[1] << Line of Fit( 1 ));
Wait( 1 );
obj << (curve[1] << Line of Fit( 0 ));

```

### 項目のメッセージ

#### Confid Curves Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**説明:** あてはめた線の信頼曲線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**説明:** 個々の予測値の信頼曲線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Confid Shaded Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Fit( state=0|1 )} )

**説明:** あてはめた線に対する信頼域に陰影をつける。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Fit( 0 ));

```

#### Confid Shaded Indiv

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**説明:** 個々の値に対する信頼域に陰影をつける。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

#### Indiv Confidence Limit Formula

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の個々の値に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**説明:** あてはめた線、信頼曲線、信頼領域の陰影の色を変更する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**説明:** あてはめた線の線種を変更する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**説明:** あてはめた線と信頼曲線の線の幅を変更する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**説明:** あてはめ線の表示/非表示を切り替える。 デフォルトではオン。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の平均に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Plot Residuals

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Plot Residuals( state=0|1 ) ); obj &lt;&lt; Fit Name( {Plot Residuals( state=0|1 )} )

**説明:** 5つの診断プロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1, {Plot Residuals( 1 )} );
Wait( 1 );
obj << (curve[1] << Plot Residuals( 0 ));

```

#### Profiler

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Profiler( state=0|1 ) ); obj &lt;&lt; Fit Name( {Profiler( state=0|1 )} )

**説明:** 選択されたモデルに関して、予測プロファイルを表示する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Profiler( 1 )} );
Wait( 1 );
obj << (Curve[1] << Profiler( 0 ));

```

#### Remove Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**説明:** 曲線を削除する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**説明:** あてはめの要約、あてはまりの悪さ、分散分析表、パラメータ推定値の表示/非表示を切り替える。 デフォルトではオン。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**説明:** 元のデータテーブルに新しい列を保存する。この列には、指定された曲線の予測値が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**説明:** 元のデータテーブルに新しい列を保存する。この列には、指定された曲線の残差が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**説明:** 元のデータテーブルに、スチューデント化残差を含む新しい列を保存する。この列には、あてはめられた曲線のスチューデント化残差が含まれる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**説明:** 信頼曲線の有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

#### Set α Level

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**説明:** 信頼曲線の有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

## Bivariate > Bivariate Nonpar Density

### 項目のメッセージ

#### 5% Contours

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; "5% Contours"n( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {"5% Contours"n( state=0|1 )} )

**説明:** 5%の等高線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {"5% Contours"n( 0 )} );
Wait( 1 );
obj << (curve[1] << "5% Contours"n( 1 ));

```

#### Color By Density Quantile

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color By Density Quantile ); obj &lt;&lt; Nonpar Density( {Color by Density Quantile} )

**説明:** 推定された密度に従って点と行を色分けする。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
Wait( 1 );
obj << (curve[1] << Color By Density Quantile);

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color By Density Quantile} );

```

#### Color Theme

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color Theme( "theme"(state=0|1 ) ) ); obj &lt;&lt; Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**説明:** 分位点密度の等高線におけるカラーテーマを設定する。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

#### Contour Fill

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Fill( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Fill( state=0|1 )} )

**説明:** 等高線間を塗りつぶすかどうかを切り替える。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density( {Contour Lines( 0 )} ) );
obj << (curve[1] << Contour Fill( 1 ));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Fill( 1 )} );

```

#### Contour Lines

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Lines( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Lines( state=0|1 )} )

**説明:** 等高線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Lines( 0 )} );
Wait( 1 );
obj << (curve[1] << Contour Lines( 1 ));

```

#### Kernel Control

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Kernel Control( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Kernel Control( state=0|1 )} )

**説明:** 各変数の標準偏差を変更するスライダの表示/非表示を切り替える。これらの標準偏差は、ノンパラメトリックなカーネル密度推定の滑らかさを決める。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 )} );
Wait( 1 );
obj << (curve[1] << Kernel Control( 0 ));

```

#### Mesh Plot

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mesh Plot( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Mesh Plot( state=0|1 )} )

**説明:** 2変量に対する密度推定値の3次元プロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Mesh Plot( 1 )} );
Wait( 1 );
obj << (curve[1] << Mesh Plot( 0 ));

```

#### Modal Clustering

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Modal Clustering( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Modal Clustering( state=0|1 )} )

**説明:** 峰型クラスターの結果の表示/非表示を切り替える。これは現在の等高線に基づいてクラスターに分類する。特定する。また、このオプションは、クラスター番号をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Modal Clustering( 1 )} );
Wait( 1 );
obj << (curve[1] << Modal Clustering( 0 ));

```

#### Remove Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**説明:** ノンパラメトリック密度を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density();
Wait( 1 );
obj << (curve[1] << Remove Fit);

```

#### Report

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Report( state=0|1 )} )

**説明:** 分位点密度等高線レポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Report( 0 )} );
Wait( 1 );
obj << (curve[1] << Report( 1 ));

```

#### Save Density Grid

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Grid ); obj &lt;&lt; Nonpar Density( {Save Density Grid} )

**説明:** 列を新しいデータテーブルに保存する。列には密度推定値とその分位点が含まれる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Grid} );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Grid);

```

#### Save Density Quantile

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Quantile ); obj &lt;&lt; Nonpar( {Save Density Quantile} )

**説明:** 元のデータテーブルに新しい列を保存する。列には、各点の密度分位点を表す値が含まれる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Quantile);

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Quantile} );

```

#### Select Points by Density

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points by Density( lower probability, upper probability ) ); obj &lt;&lt; Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**説明:** 指定された下側確率と上側確率の間にある点を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );
Wait( 1 );
obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

#### Set Kernel

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Kernel( xStdDev, yStdDev )); obj &lt;&lt; Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**説明:** XとYに対して、カーネル標準偏差を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );
Wait( 1 );
obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### 項目のメッセージ

#### Confid Curves Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**説明:** あてはめた線の信頼曲線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**説明:** 個々の予測値の信頼曲線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Indiv Confidence Limit Formula

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の個々の値に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**説明:** あてはめた線、信頼曲線、信頼領域の陰影の色を変更する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**説明:** あてはめた線の線種を変更する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**説明:** あてはめた線と信頼曲線の線の幅を変更する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**説明:** あてはめ線の表示/非表示を切り替える。 デフォルトではオン。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の平均に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Remove Fit

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**説明:** 曲線を削除する。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**説明:** あてはめの要約、あてはまりの悪さ、分散分析表、パラメータ推定値の表示/非表示を切り替える。 デフォルトではオン。

**曲線の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**正規楕円の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**説明:** 元のデータテーブルに新しい列を保存する。この列には、指定された曲線の予測値が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**説明:** 元のデータテーブルに新しい列を保存する。この列には、指定された曲線の残差が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**説明:** 元のデータテーブルに、スチューデント化残差を含む新しい列を保存する。この列には、あてはめられた曲線のスチューデント化残差が含まれる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Select Points Inside

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Inside ); obj &lt;&lt; Density Ellipse( {Select Points Inside} )

**説明:** 楕円内の点を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.95, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Inside);
Wait( 1 );
obj << Density Ellipse( 0.8, {Select Points Inside} );

```

#### Select Points Outside

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Outside ); obj &lt;&lt; Density Ellipse( {Select Points Outside} )

**説明:** 楕円の外の点を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.8, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Outside);
Wait( 1 );
obj << Density Ellipse( 0.95, {Select Points Outside} );

```

#### Shaded Contour

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; Shaded Contour( state=0|1 ) ); obj &lt;&lt; Density Ellipse( {Shaded Contour( state=0|1 )} )

**説明:** 塗られた楕円の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), );
obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );
Wait( 1 );
obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

### 共有されるメッセージ

#### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**名前で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

**一般**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**構文:** obj &lt;&lt; Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### 列

#### By

**構文:** obj = Bivariate(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );

```

#### Freq

**構文:** obj = Bivariate(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( _freqcol ) );

```

#### Regressor

**構文:** obj = Bivariate(...Regressor( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。変数は連続尺度でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Response

**構文:** obj = Bivariate(...Response( column(s) )...)

**説明:** 分析したい連続尺度の応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Weight

**構文:** obj = Bivariate(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( _weightcol ) );

```

#### X

**構文:** obj = Bivariate(...X( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。変数は連続尺度でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Y

**構文:** obj = Bivariate(...Y( column(s) )...)

**説明:** 分析したい連続尺度の応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### 関連するコンストラクター

#### Bivariate

**構文:** Bivariate( Y( columns ), X( columns ) )

**説明:** 連続量の変数により連続量の応答をモデル化する。分析手法には、直線のあてはめ、多項式のあてはめ、スプライン曲線のあてはめ、確率楕円のあてはめなどがある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### 項目のメッセージ

#### Curve

**構文:** obj &lt;&lt; ( Curve[number] &lt;&lt; option )

**説明:** あてはめられた線へのハンドルの配列。これにより、あてはめられた特定の線に、Bivariate Curve (二変量の曲線) のメッセージを送ることができる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Density Ellipse

**構文:** obj &lt;&lt; Density Ellipse( percent )

**説明:** 二変量正規分布の等高線を描く。オプションには、二変量正規分布における等高線の内側での累積確率を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );

```

#### Fit Cauchy

**構文:** obj &lt;&lt; Fit Cauchy

**説明:** とCauchy分布を仮定した最尤法により回帰モデルを推定する。Cauchy分布を仮定することで、外れ値に対してロバスト(頑健)な推定方法になっている。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Cauchy;

```

#### Fit Each Value

**構文:** obj &lt;&lt; Fit Each Value

**説明:** Xの一意な値ごとに、Yの平均を計算し、それを折れ線でつなぐ。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Each Value;

```

#### Fit Line

**構文:** obj &lt;&lt; Fit Line

**説明:** 最小2乗法によって線形回帰モデルをあてはめる。回帰直線がプロット上に表示され、推定結果のレポートが表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;

```

#### Fit Mean

**構文:** obj &lt;&lt; Fit Mean

**説明:** 応答変数(&変数)の平均をあてはめる。傾きゼロの水平線がプロット上に表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Mean;

```

#### Fit Orthogonal

**構文:** obj &lt;&lt; Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**説明:** 直交回帰モデルをあてはめる。直交回帰モデルは、X変数とY変数の両方が誤差を伴って測定される場合に使われるモデルである。分散比に関するオプションで、X変数の誤差分散とY変数の誤差分散の比を指定することができる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Orthogonal( Fit X to Y );

```

#### Fit Passing Bablok

**構文:** obj &lt;&lt; Fit Passing Bablok

**説明:** Passing-Bablok法によって回帰モデルをあてはめる。この方法は、X変数とY変数の両方が誤差を伴って測定される場合に使われる推定方法である。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Passing Bablok;

```

#### Fit Polynomial

**構文:** obj &lt;&lt; Fit Polynomial( degree of model )

**説明:** 最小2乗法によって多項式モデルをあてはめる。多項式の次数は、分析者が指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3 );

```

#### Fit Robust

**構文:** obj &lt;&lt; Fit Robust

**説明:** HuberのM推定を用いて回帰モデルをあてはめる。Huber推定の損失関数は、残差が小さい場合は2次関数であり、残差が大きい場合は1次関数になっている。このような損失関数を用いることで、外れ値に対してロバスト(頑健)な推定方法になっている。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Robust;

```

#### Fit Special

**構文:** obj &lt;&lt; Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), &lt;Intercept( number )&gt;, &lt;Slope( number )&gt;, &lt;Degree( degree )&gt;, Centered Polynomial&gt; )

**説明:** X変数とY変数を変数変換した後、回帰モデルをあてはめる。また、傾きや切片に制約をかけたり、degree引数に次数を指定することで多項式モデルをあてはめたりすることもできる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Special( xTran( "Log" ) );
obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

#### Fit Spline

**構文:** obj &lt;&lt; Fit Spline( lambda, &lt;Standardized&gt; )

**説明:** 罰則付き最小2乗法により平滑化曲線をあてはめる。平滑化パラメータλは、曲線の滑らかさを決めるパラメータである。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Spline( 341.1929, Standardized );
obj << Fit Spline( 341.1929 );

```

#### Fit Where

**構文:** obj &lt;&lt; Fit Where( column == level, command )

**説明:** 指定されたグループのデータだけに対して曲線をあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

#### Group By

**構文:** obj &lt;&lt; Group By( column )

**説明:** グループ変数を指定する。グループ変数が指定されると、すべての分析はグループ変数の各水準について別々に行われる。

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Group By( :drug );
obj << Fit Line;

```

#### Histogram Borders

**構文:** obj &lt;&lt; Histogram Borders( state=0|1 )

**説明:** 散布図の横軸と縦軸におけるヒストグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Histogram Borders( 1 );

```

#### Kernel Smoother

**構文:** obj &lt;&lt; Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**説明:** LOESS回帰を行う。LOESS回帰は、データの部分ごとに局所的に回帰式をあてはめていく手法である。αによって局所ごとにどれだけのデータを用いるかの区間を決め、λによって曲線の滑らかさを決め、重み関数によって重みを決める。ロバストにするほど、外れ値に対する重みが小さくなる。この手法は、「LOESS平滑化」とも呼ばれている。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Kernel Smoother( 1, 1, 0.84615, 0 );

```

#### Nonpar Density

**構文:** obj &lt;&lt; Nonpar Density

**説明:** ノンパラメトリックな二変量密度推定を行う、推定された密度の等高線をグラフ上に描く。等高線は5%間隔になっている。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density;

```

#### Paired t test

**構文:** obj &lt;&lt; Paired t test

**説明:** 対応のあるデータのt検定を行う。レポートを作成し、散布図上に2つの列が等しい箇所を示す45度のグレーの線を表示する。



同様の分析は、[対応のあるペア]プラットフォームで行える。[二変量]ではShiftキーを押しながらクリックすることによりメニューが表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Paired t test;

```

#### Points Jittered

**構文:** obj &lt;&lt; Points Jittered( "なし"|"自動"|"一様乱数"|"正規乱数"|"密度乱数"|"詰め込み"|"グリッド"|"六角形グリッド"|"ビースウォーム"="自動" )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、データ点の広がりを指定する。選択した場合、マーカーが重ならないようにデータ点がずらして表示される。 デフォルトの値は"自動"。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );
obj << Points Jittered( "Random Normal" );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** グラフ上の点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
Wait( 1 );
obj << Show Points( 0 );

```

#### Summary Statistics

**構文:** obj &lt;&lt; Summary Statistics( state=0|1 )

**説明:** 要約統計量の表の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Summary Statistics( 1 );

```

## Contingency > Analysis of Means for Proportions

### 項目のメッセージ

#### Point Options

**構文:** obj &lt;&lt; Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** 割合に対する平均分析の点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**説明:** 決定限界の計算に使う有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**構文:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 割合に対する平均分析のグラフにおいて、中心線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**説明:** 割合に対する平均分析のグラフにおいて、決定限界に対する陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**説明:** 割合に対する平均分析のグラフにおいて、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**説明:** X変数の各水準における応答割合と決定限界を含むレポートの表示/非表示を切り替える。また、決定限界を超えているかどうかも示される。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

#### Switch Response Level for Proportion

**構文:** obj &lt;&lt; Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) );scrobj &lt;&lt; Switch Response Level for Proportion( state=0|1 )

**説明:** 応答変数のカテゴリで、分析において注目するカテゴリを変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### 項目のメッセージ

#### Forest Plot

**構文:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) );scobj &lt;&lt; Forest Plot( state=0|1 )

**説明:** 同等性検定に対するフォレストプロットの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

#### Remove

**構文:** scobj &lt;&lt; Remove

**説明:** 「同等性検定」レポートを削除する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

#### Test Report

**構文:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) );scobj &lt;&lt; Test Report( state=0|1 )

**説明:** リスク差やリスク比の同等性検定・優越性検定・非劣性検定を要約したレポートの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Contingency > Contingency Table

### 項目のメッセージ

#### Cell Chi Square

**構文:** obj &lt;&lt; Contingency Table( Cell Chi Square( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、各セルのカイ2乗統計量の表示/非表示を切り替える。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Cell Chi Square( 1 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

#### Col %

**構文:** obj &lt;&lt; Contingency Table( Col %( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、列和に対するセル度数のパーセントの表示/非表示を切り替える。 デフォルトではオン。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 0 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Col Cum

**構文:** obj &lt;&lt; Contingency Table( Col Cum( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、列の累積度数の表示/非表示を切り替える。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Col Cum %

**構文:** obj &lt;&lt; Contingency Table( Col Cum %( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、列の累積割合の表示/非表示を切り替える。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Count

**構文:** obj &lt;&lt; Contingency Table( Count( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、セル度数の表示/非表示を切り替える。 デフォルトではオン。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 0 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Deviation

**構文:** obj &lt;&lt; Contingency Table( Deviation( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、各セルにおける偏差の表示/非表示を切り替える。セルの偏差は、実測度数から期待度数を引いたもの。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Deviation( 1 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Expected

**構文:** obj &lt;&lt; Contingency Table( Expected( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、セルの期待度数の表示/非表示を切り替える。セルの期待度数は、行和×列和÷総度数。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Expected( 1 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Make Into Data Table

**構文:** obj &lt;&lt; Contingency Table( Make Into Data Table )

**説明:** 度数表データを含むデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

#### Row %

**構文:** obj &lt;&lt; Contingency Table( Row %( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、行和に対するセル度数のパーセントの表示/非表示を切り替える。 デフォルトではオン。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 0 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Row Cum

**構文:** obj &lt;&lt; Contingency Table( Row Cum( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、行の累積度数の表示/非表示を切り替える。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Row Cum %

**構文:** obj &lt;&lt; Contingency Table( Row Cum %( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、行の累積割合の表示/非表示を切り替える。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Total %

**構文:** obj &lt;&lt; Contingency Table( Total %( state=0|1, &lt;Format(...)&gt; ) )

**説明:** 分割表において、総度数に対するセル度数のパーセントの表示/非表示を切り替える。 デフォルトではオン。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 0 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### 項目のメッセージ

#### 3D Correspondence Analysis

**構文:** obj &lt;&lt; Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**説明:** 対応分析の3次元プロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cars 1993.jmp" );
obj = Contingency(
	Y( :Vehicle Category ),
	X( :Manufacturer ),
	Contingency Table( 0 ),
	Tests( 0 )
);
Wait( 1 );
obj << Correspondence Analysis( "3D Correspondence Analysis"(1) );

```

#### Make Table

**構文:** obj &lt;&lt; Correspondence Analysis( "Make Table" )

**説明:** 対応分析の結果を含むデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Make Table" );

```

#### Save Value Order

**構文:** obj &lt;&lt; Correspondence Analysis( "Save Value Order" )

**説明:** 対応分析の第1次元目の座標に基づき、データテーブルのX変数とY変数の列に、「値の順序」列プロパティを保存する。この時、この「値の順序」列プロパティに保存される順序は、対応分析の第1次元目の座標の大きさ順である。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

### 共有されるメッセージ

#### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**名前で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

**一般**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**構文:** obj &lt;&lt; Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### 列

#### Block

**構文:** obj = Contingency(...&lt;Block( column )&gt;...)

**説明:** ブロック変数を指定する。この変数を層別因子として、Cochran-Mantel-Haenszel検定が行われる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

```

#### By

**構文:** obj = Contingency(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );

```

#### Freq

**構文:** obj = Contingency(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( _freqcol ) );

```

#### Grouping Category

**構文:** obj = Contingency(...Grouping Category( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。変数の尺度は、順序または名義でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Response Category

**構文:** obj = Contingency(...Response Category( column(s) )...)

**説明:** 分析したいカテゴリカルな応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Weight

**構文:** obj = Contingency(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( _weightcol ) );

```

#### X

**構文:** obj = Contingency(...X( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。変数の尺度は、順序または名義でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Y

**構文:** obj = Contingency(...Y( column(s) )...)

**説明:** 分析したいカテゴリカルな応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### 関連するコンストラクター

#### Contingency

**構文:** Contingency( Y( columns ), X( columns ) )

**説明:** カテゴリカルな説明変数とカテゴリカルな応答変数をモデル化する。カイ2乗検定を行い、モザイク図を描く。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### 項目のメッセージ

#### Agreement Statistic

**構文:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**説明:** 水準間の一致性に関するレポートの表示/非表示を切り替える。レポートには、κ統計量について、点推定値、標準誤差、信頼区間、仮説検定が計算される。また、Bowkerの対称性検定（2×2表の場合にはMcNemar検定と呼ばれる）も計算される。このオプションは、X変数とY変数がまったく同じ水準を持つときのみ利用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 ),
	Agreement Statistic( 1 )
);

```

#### Analysis of Means for Proportions

**構文:** obj &lt;&lt; Analysis of Means for Proportions( state=0|1, &lt;chart options&gt; )

**説明:** グループごとの割合を比較するための、割合の平均分析（ANOMP）の表示/非表示を切り替える。割合の平均分析(ANOMP)は、X変数の水準ごとの応答割合を、応答の全体割合と比較する。比較の際に、多重性の調整も行う。このオプションは、Y変数が2つの水準を持つ場合にのみ利用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency(
	Y( :marital status ),
	X( :type ),
	Analysis of Means for Proportions( 1 )
);

```

#### Cochran Armitage Trend Test

**構文:** obj &lt;&lt; Cochran Armitage Trend Test( state=0|1 )

**説明:** 二項割合に対するCochran-Armitage傾向検定の表示/非表示を切り替える。この検定は、群に順序性がある場合に使われる検定である。このオプションは、一方の変数が2水準であり、他方の変数が順序尺度である場合にのみ利用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );
obj << Cochran Armitage Trend Test( 1 );

```

#### Cochran Mantel Haenszel

**構文:** obj &lt;&lt; Cochran Mantel Haenszel( column );obj &lt;&lt; Cochran Mantel Haenszel( state=0|1 )

**説明:** Cochran-Mantel-Haenszel検定の表示/非表示を切り替える。3つ目の分類変数でブロックした後に、2つの分類変数の間に関係があるかどうかを判断するための検定である。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :type ), X( :marital status ) );
obj << Cochran Mantel Haenszel( :country );
Wait( 2 );
obj << Cochran Mantel Haenszel( 0 );

```

#### Contingency Table

**構文:** obj &lt;&lt; Contingency Table( state=0|1 )

**説明:** 2元度数表の表示/非表示を切り替える。分割表は、X変数の各水準の行とY変数の各水準の列で構成されている。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( 0 );

```

#### Correspondence Analysis

**構文:** obj &lt;&lt; Correspondence Analysis( state=0|1 );obj &lt;&lt; Correspondence Analysis( correspondence chart options )

**説明:** 対応分析の表示/非表示を切り替える。対応分析のプロットでは、分割表の各行および各列に対応する点が存在する。対応分析は、度数表の行で行割合のパターンが類似しているもの、および、度数表の列で列割合のパターンが類似しているものが近くになるようにプロットする。

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( 1 );

```

#### Equivalence Tests of Relative Risk

**構文:** obj &lt;&lt; Equivalence Tests of Relative Risk( ratio, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**説明:** 相対リスク（割合の比）に対する優越性検定、非劣性検定、同等性検定を行う。このうち同等性検定は、実質的には同等であることを検証したい場合に行う検定で、通常の有意性検定とは逆の検定である。有意水準、検定の種類、およびグループの水準をオプションの引数で指定する。検定の種類は、デフォルトでは同等性検定（Equivalence）であるが、オプションで優越性検定や非劣性検定も指定できる。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Relative Risk(
		0.8,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

#### Equivalence Tests of Risk Difference

**構文:** obj &lt;&lt; Equivalence Tests of Risk Difference( difference, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**説明:** リスク差(割合の差)に対する優越性検定、非劣性検定、同等性検定を行う。このうち同等性検定は、実質的には同等であることを検証したい場合に行う検定で、通常の有意性検定とは逆の検定である。有意水準、検定の種類、およびグループの水準をオプションの引数で指定する。検定の種類は、デフォルトでは同等性検定（Equivalence）であるが、オプションで優越性検定や非劣性検定も指定できる。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

#### Exact Agreement Statistic

**構文:** obj &lt;&lt; Exact Agreement Statistic( state=0|1 )

**説明:** 一致性を測る統計量であるκ (カッパ)に対する正確検定の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Agreement Statistic( 1 );

```

#### Exact Cochran Armitage Trend Test

**構文:** obj &lt;&lt; Exact Cochran Armitage Trend Test( state=0|1 )

**説明:** Cochran-Armitage傾向検定の正確検定の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Cochran Armitage Trend Test( 1 );

```

#### Fisher's Exact Test

**構文:** obj &lt;&lt; Fisher&apos;s Exact Test( state=0|1 )

**説明:** Fisherの正確検定の表示/非表示を切り替える。Fisherの正確検定は、2つのカテゴリカル変数間の関連に対する検定であり、漸近的な近似に基づく検定ではなく、条件付き正確な検定である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Fisher's Exact Test( 1 );

```

#### Horizontal Mosaic

**構文:** obj &lt;&lt; Horizontal Mosaic( state=0|1 )

**説明:** モザイク図の向きを水平方向(1)または垂直方向(0)に変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
Wait( 2 );
obj << Horizontal Mosaic( 1 );

```

#### Jonckheere Terpstra Test

**構文:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**説明:** Joncheere-Terpstra検定の表示/非表示を切り替える。この検定は、差の大きさに対して予め順序が想定できる状況での群間比較のノンパラメトリックな検定。「応答変数の確率分布が群間で同じ」という帰無仮説を検定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
:height << Nominal( 1 );
obj = dt << Contingency(
	Y( :height ),
	X( :age ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
obj << Jonckheere Terpstra Test( 1 );

```

#### Measures of Association

**構文:** obj &lt;&lt; Measures of Association( state=0|1 )

**説明:** 分割表における変数間の関連性指標の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Measures of Association( 1 )
);

```

#### Mosaic Plot

**構文:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**説明:** 分割表のグラフであるモザイク図表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Mosaic Plot( 0 );

```

#### Odds Ratio

**構文:** obj &lt;&lt; Odds Ratio( state=0|1 )

**説明:** オッズ比の表示/非表示を切り替える。このオプションは、X変数とY変数の両方が2水準を持つ場合にのみ利用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Odds Ratio( 1 ) );

```

#### Relative Risk

**構文:** obj &lt;&lt; Relative Risk( state=0|1, &lt;Y variable level, X variable level&gt; ); obj &lt;&lt; Relative Risk( state=0|1, &lt;"All"&gt; )

**説明:** 相対リスク(リスク比)の表示/非表示を切り替える。このオプションは、X変数とY変数の両方が2水準だけを持つ場合にのみ利用可能。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "All" );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**説明:** 決定限界の計算に使う有意水準を変更する。 デフォルトの値は"0.05"。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Set α Level

**構文:** obj &lt;&lt; Set α Level( alpha=0.05 )

**説明:** 決定限界の計算に使う有意水準を変更する。 デフォルトの値は"0.05"。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Tests

**構文:** obj &lt;&lt; Tests( state=0|1 )

**説明:** X変数の水準間で応答割合が同じかどうかの検定の表示/非表示を切り替える。これらの検定は、連続尺度の応答に対する分散分析を、カテゴリカルな応答にしたものと解釈できる デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Tests( 0 );

```

#### Two Sample Test for Proportions

**構文:** obj &lt;&lt; Two Sample Test for Proportions( state=0|1 )

**説明:** 割合の2標本検定の表示/非表示を切り替える。この検定では、X変数の2水準間のY変数の割合を比較する。このオプションは、X変数とY変数の両方が2水準だけを持つ場合にのみ利用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Two Sample Test for Proportions( 1 )
);

```

## Logistic

### 共有されるメッセージ

#### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**名前で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

**一般**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**構文:** obj &lt;&lt; Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### 列

#### By

**構文:** obj = Logistic(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );

```

#### Categorical Response

**構文:** obj = Logistic(...Categorical Response( column(s) )...)

**説明:** 分析したいカテゴリカルな応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Continuous Regressor

**構文:** obj = Logistic(...Continuous Regressor( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。変数は連続尺度でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Freq

**構文:** obj = Logistic(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Weight

**構文:** obj = Logistic(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Weight( _weightcol )
);

```

#### X

**構文:** obj = Logistic(...X( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。変数は連続尺度でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Y

**構文:** obj = Logistic(...Y( column(s) )...)

**説明:** 分析したいカテゴリカルな応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### 関連するコンストラクター

#### Logistic

**構文:** Logistic( Y( columns ), X( columns ) )

**説明:** 連続量の変数に対してカテゴリカルな応答変数をモデル化する。ロジスティック回帰をあてはめたり、ROC曲線を描いたりする。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### 項目のメッセージ

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**説明:** パラメータ推定表において、信頼区間の表示/非表示を切り替える。信頼区間は、パラメータ推定表の右側部分に表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );
obj << Confidence Intervals( 0.01 );

```

#### Inverse Prediction

**構文:** obj &lt;&lt; Inverse Prediction( Response( prob1, prob2, ... ), &lt;Confidence Level( percent=0.95 )&gt;, &lt;Two sided|Lower One Sided|Upper One Sided&gt; )

**説明:** 逆推定を行う。応答変数の1つ以上の確率について、説明変数の値を予測する。デフォルトでは、逆推定値に対する両側95%信頼区間も計算される。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

#### Lift Curve

**構文:** obj &lt;&lt; Lift Curve( state=0|1 )

**説明:** リフトチャートの表示/非表示を切り替える。リフトチャートは、観測値の割合に対してリフトをプロットしたもので、モデルの予測能力を別の観点から見ることができる。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Lift Curve( 1 );

```

#### Line Color

**構文:** obj &lt;&lt; Line Color( color )

**説明:** ロジスティックプロットにおいて、曲線の色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**構文:** obj &lt;&lt; Logistic Plot( state=0|1 )

**説明:** ロジスティックプロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Logistic Plot( 0 );

```

#### Odds Ratios

**構文:** obj &lt;&lt; Odds Ratios( state=0|1 )

**説明:** 「パラメータ推定値」レポートにおいて、オッズ比の列を追加または削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**構文:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**説明:** 応答変数の水準ごとに描かれるPR曲線の表示/非表示を切り替える。PR曲線は、さまざまな閾値における適合率と再現率をプロットしたもの。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << Precision Recall Curve( 1 );

```

#### ROC Curve

**構文:** obj &lt;&lt; ROC Curve( state=0|1 )

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << ROC Curve( 1 );

```

#### Save Probability Formula

**構文:** obj &lt;&lt; Save Probability Formula

**説明:** モデルによって予測される確率の計算式の列をデータテーブルに新たに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Save Probability Formula;

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** ロジスティックプロットにおいて、点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**構文:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**説明:** ロジスティックプロットにおいて、応答率折れ線の表示/非表示を切り替える。応答率折れ線は、X変数の各値に対して複数の点がある場合にのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Target Level

**構文:** obj = Logistic(...Target Level( level )...)

**説明:** ロジスティックモデルの応答変数において、ロジット関数の分子にするほうの水準、つまり、モデル化するほうの水準を指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
obj << ROC Curve( 1 );

```

## Oneway > ANOM for Ranges

### 項目のメッセージ

#### Point Options

**構文:** obj &lt;&lt; ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** グラフにおける点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Point Options( "Show Only Points" );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; ANOM for Ranges( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**説明:** 決定限界の計算に使う有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**構文:** obj &lt;&lt; ANOM for Ranges( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 中心線（範囲の平均）の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**説明:** 範囲に対する平均分析の図において、決定限界に対する陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**説明:** 範囲に対する平均分析の図において、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** obj &lt;&lt; ANOM for Ranges( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**説明:** 範囲の平均分析において、要約レポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### 項目のメッセージ

#### Point Options

**構文:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** グラフにおける点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**説明:** 決定限界の計算に使う有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**構文:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 中心線（ADMの全体平均）の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**説明:** ANOMV-Levene (ADM)のグラフにおいて、決定限界に対する陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**説明:** ANOMV-Levene (ADM)のグラフにおいて、決定限界の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**説明:** グループ平均ADMと決定限界を含むレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### 項目のメッセージ

#### Graph in Variance Scale

**構文:** obj &lt;&lt; ANOM for Variances( 1, Graph in Variance Scale( state=0|1 ) );scrobj &lt;&lt; Graph in Variance Scale( state=0|1 )

**説明:** 縦軸のスケールを指定する。標準偏差と分散のいずれから選択できる。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Graph in Variance Scale( 0 );

```

#### Point Options

**構文:** obj &lt;&lt; ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** グラフにおける点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; ANOM for Variances( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**説明:** 決定限界の計算に使う有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**構文:** obj &lt;&lt; ANOM for Variances( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 中心線の表示/非表示を切り替える。中心線は、Y軸に対して指定されたスケールに応じて、RMSEまたはMSEが使われる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**説明:** 分散に対する平均分析のグラフにおいて、決定限界の領域に対する陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**説明:** 分散に対する平均分析のグラフにおいて、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** obj &lt;&lt; ANOM for Variances( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**説明:** グループの標準偏差（分散）と決定限界を含むレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### 項目のメッセージ

#### Point Options

**構文:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** グラフにおける点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**説明:** 決定限界の計算に使う有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**構文:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 中心線（全体平均）の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**説明:** 順位変換平均分析のグラフにおいて、決定限界の領域に対する陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**説明:** 順位変換平均分析のグラフにおいて、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**説明:** グループ別に計算した順位平均と決定限界を含むレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### 項目のメッセージ

#### Point Options

**構文:** obj &lt;&lt; ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** グラフにおける点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; ANOM( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**説明:** 決定限界の計算に使う有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**構文:** obj &lt;&lt; ANOM( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 平均分析(ANOM)のグラフにおいて、中心線（全体平均）の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** obj &lt;&lt; ANOM( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**説明:** 平均分析(ANOM)のグラフにおいて、決定限界の領域に対する陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** obj &lt;&lt; ANOM( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**説明:** 平均分析(ANOM)のグラフにおいて、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** obj &lt;&lt; ANOM( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**説明:** グループ平均と決定限界を含むレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### 項目のメッセージ

#### Forest Plot

**構文:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) );scobj &lt;&lt; Forest Plot( state=0|1 )

**説明:** 同等性検定に対するフォレストプロットの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

#### Pairwise Comparisons

**構文:** obj &lt;&lt; Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) );scobj &lt;&lt; Equivalence Tests Pairwise Comparisons( state=0|1 )

**説明:** すべてのペアの比較について、「同等性検定 ペアごとの比較」レポートの表示／非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Pairwise Comparisons( 0 );

```

#### Remove

**構文:** scobj &lt;&lt; Remove

**説明:** 「同等性検定」レポートを削除する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

#### Scatterplot

**構文:** obj &lt;&lt; Equivalence Tests( ..., Scatterplot( state=0|1 ) );scobj &lt;&lt; Scatterplot( state=0|1 )

**説明:** 「同等性検定 散布図」グラフの表示／非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Scatterplot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Scatterplot( 0 );

```

#### Test Report

**構文:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) );scobj &lt;&lt; Test Report( state=0|1 )

**説明:** 平均や標準偏差に対する同等性検定・優越性検定・非劣性検定の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Test Report( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### 項目のメッセージ

#### Confidence Quantile

**構文:** obj &lt;&lt; Each Pair( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; With Best( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; With Control( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**説明:** 平均の比較で使われる棄却値や有意水準の表示/非表示を切り替える。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

#### Connecting Letters Report

**構文:** obj &lt;&lt; Each Pair( 1, Connecting Letters Report( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Connecting Letters Report( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**説明:** 文字によって有意差があるかどうかを示したレポートの表示/非表示を切り替える。文字で繋がっていない平均のペアには有意差がある。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

#### Detailed Comparisons Report

**構文:** obj &lt;&lt; Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**説明:** 各比較の詳細レポートの表示/非表示を切り替える。各セクションには、有意水準、標準誤差と信頼区間、t比、p値、自由度が示される。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

#### Difference Matrix

**構文:** obj &lt;&lt; Each Pair( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; With Best( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; With Control( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**説明:** 平均差に関する表の表示/非表示を切り替える。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Difference Matrix( 1 ) );

```

#### Dunnett's Lower

**構文:** obj &lt;&lt; Dunnett&apos;s Lower( state=0|1 )

**説明:** 下片側Dunnett検定の表示/非表示を切り替える。この検定は、各群について「群の平均がコントロール群の平均より小さい」が対立仮説となっている。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

#### Dunnett's Upper

**構文:** obj &lt;&lt; Dunnett&apos;s Upper( state=0|1 )

**説明:** 上片側Dunnett検定の表示/非表示を切り替える。この検定は、各群について「群の平均がコントロール群の平均より大きい」が対立仮説となっている。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

#### LSD Threshold Matrix

**構文:** obj &lt;&lt; Each Pair( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; All Pairs( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; With Best( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**説明:** 平均のペアごとの差から、その最小有意差を引いた行列の表示/非表示を切り替える。正の値は、その平均のペアには有意差があることを示す。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

#### Ordered Differences Report

**構文:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**説明:** すべてのペアごとの平均差(正の値のほうの差)、標準誤差、信頼区間、p値、および、信頼区間も描いた差の棒グラフの表示/非表示を切り替える。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

#### Ordered Ratio Report

**構文:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) );obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**説明:** すべてのペアごとの平均差(正の値のほうの差)、標準誤差、信頼区間、p値、および、信頼区間も描いた差の棒グラフの表示/非表示を切り替える。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

#### Ratio Matrix

**構文:** obj &lt;&lt; Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) );obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**説明:** 平均差に関する表の表示/非表示を切り替える。



Each PairはStudent&apos;s tと同等である。All PairsはTukey HSDと同等である。With BestはHsu MCBと同等である。With ControlはDunnett&apos;sと同等である。Each Pair StepwiseはNewman-Keulsと同等である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### 項目のメッセージ

#### Nemenyi Test

**構文:** obj &lt;&lt; Nemenyi Test( state=0|1 )

**説明:** Nemenyi検定の表示/非表示を切り替える。Nemenyi検定は、反復のないブロックごとに求められたデータの順位和をペアごとに事後比較する検定事後。この検定は通常、Friedman検定の結果が有意であった場合にのみ事後的に行われる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### 共有されるメッセージ

#### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**名前で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

**一般**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**構文:** obj &lt;&lt; Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### 列

#### Block

**構文:** obj &lt;&lt; Block( column )

**説明:** ブロック変数を指定する。この列を指定した場合、応答変数の値がブロック変数によって中心化される。

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### By

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );

```

#### Freq

**構文:** obj &lt;&lt; Freq( column )

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( _freqcol ) );

```

#### Grouping

**構文:** obj &lt;&lt; Grouping( column(s) )

**説明:** 予測変数(説明変数)を指定する。変数の尺度は、順序または名義でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Response

**構文:** obj &lt;&lt; Response( column(s) )

**説明:** 分析したい連続尺度の応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Weight

**構文:** obj &lt;&lt; Weight( column )

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( _weightcol ) );

```

#### X

**構文:** obj &lt;&lt; X( column(s) )

**説明:** 予測変数(説明変数)を指定する。変数の尺度は、順序または名義でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Y

**構文:** obj &lt;&lt; Y( column(s) )

**説明:** 分析したい連続尺度の応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### 関連するコンストラクター

#### Oneway

**構文:** Oneway( Y( columns ), X( columns ) )

**説明:** カテゴリカルなグループ変数により、連続量の応答変数をモデル化する。分析手法には、ANOVA、平均の比較、平均分析、分位点プロットなどがある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### 項目のメッセージ

#### ANOM

**構文:** obj &lt;&lt; ANOM( state=0|1, &lt;chart options&gt; )

**説明:** 各グループの平均を全体平均と比較する。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1 );

```

#### ANOM for Ranges

**構文:** obj &lt;&lt; ANOM for Ranges( state=0|1, &lt;chart options&gt; )

**説明:** 各グループの範囲を、それら範囲の平均と比較する。等分散性に対する検定の1つ。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Ranges( 1 );

```

#### ANOM for Variances

**構文:** obj &lt;&lt; ANOM for Variances( state=0|1, &lt;chart options&gt; )

**説明:** 各グループの標準偏差を誤差の標準偏差(RMSE)と比較することによる等分散性の検定。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1 );

```

#### ANOM for Variances with Levene(ADM)

**構文:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( state=0|1, &lt;chart options&gt; )

**説明:** 中央値からの偏差の絶対値(ADM)のグループ平均を全体平均と比較することによる等分散性の検定。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

#### ANOM with Transformed Ranks

**構文:** obj &lt;&lt; ANOM with Transformed Ranks( state=0|1, &lt;chart options&gt; )

**説明:** 各グループで計算した順位平均を、全体の順位平均と比較する。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1 );

```

#### All Graphs

**構文:** obj &lt;&lt; All Graphs( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフの表示／非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << All Graphs( 0 );

```

#### All Pairs

**構文:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**説明:** TukeyのHSD(honestly significant difference)検定を実行する。この検定は多重比較の調整を行っている。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Box Plots

**構文:** obj &lt;&lt; Box Plots( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、外れ値の箱ひげ図の表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Box Plots( 1 );

```

#### CDF Plot

**構文:** obj &lt;&lt; CDF Plot( state=0|1 )

**説明:** 累積分布関数の表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << CDF Plot( 1 );

```

#### Cauchy Fit

**構文:** obj &lt;&lt; Cauchy Fit( state=0|1 )

**説明:** 誤差がCauchy分布であることを仮定している。この「Cauchyのあてはめ」は、極端な外れ値に対してロバストな推定方法である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Cauchy Fit( 1 );

```

#### Compare Densities

**構文:** obj &lt;&lt; Compare Densities( state=0|1 )

**説明:** 各グループの確率密度関数を重ね合わせたプロットの表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Compare Densities( 1 );

```

#### Comparison Circles

**構文:** obj &lt;&lt; Comparison Circles( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、比較円の表示／非表示を切り替える。このオプションは、多重比較レポートが開かれているときのみ利用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
Wait( 2 );
obj << Comparison Circles( 0 );

```

#### Composition of Densities

**構文:** obj &lt;&lt; Composition of Densities( state=0|1 )

**説明:** 積み重ねて描かれた密度曲線の表示／非表示を切り替える。各グループの密度曲線は、そのグループの度数で重み付けられる。この密度構成プロットは、X変数の範囲全体において、各グループが総密度にどれぐらい寄与しているかを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Composition of Densities( 1 );

```

#### Connect Means

**構文:** obj &lt;&lt; Connect Means( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、グループ平均を結ぶ折れ線の表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Connect Means( 1 );

```

#### Dunn All Pairs for Joint Ranks

**構文:** obj &lt;&lt; Dunn All Pairs for Joint Ranks( state=0|1 )

**説明:** 併合順位（ジョイントランク）によってすべてのペアを比較するDunn検定の表示／非表示を切り替える。この検定では、Bonferroni調整が行われているが、全体における過誤の確率は保たれないかもしれない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn All Pairs for Joint Ranks( 1 );

```

#### Dunn With Control for Joint Ranks

**構文:** obj &lt;&lt; Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**説明:** 併合順位（ジョイントランク）によってコントロール群を比較するDunn検定の表示／非表示を切り替える。この検定では、Bonferroni調整が行われているが、全体における過誤の確率は保たれないかもしれない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn With Control for Joint Ranks( 1, {12} );

```

#### Dunnett's

**構文:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**説明:** Dunnettの検定を計算する。この検定では平均がコントロール群の平均と異なるかどうかを検定する。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### Each Pair

**構文:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**説明:** 多重性調整なしのStudentのt検定を使用して、個々のペアごとの比較を計算する。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Each Pair Stepwise

**構文:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**説明:** Newman-Keuls検定を行う。この検定では、ステップダウン方式により、スチューデント化された範囲を用いて検定していく。Student-Newman-Keuls法とも呼ばれている。Tukey HSD検定よりも「有意」な結果が得られやすい。利用できる表示オプションについては、Oneway Means Comparisons（一元配置の平均比較）のメッセージを参照のこと。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Equivalence Tests

**構文:** obj &lt;&lt; Equivalence Tests( difference, &lt;alpha=.05&gt;, &lt;"Pooled Variance"|"Unequal Variances"&gt;, &lt;test type&gt; )

**説明:** 平均の差に対する優越性検定、非劣性検定、同等性検定を行う。このうち同等性検定は、実質的には同等であることを検証したい場合に行う検定で、通常の有意性検定とは逆の検定である。有意水準、検定の種類、およびグループの水準をオプションの引数で指定する。デフォルトでは、「等分散」（Pooled Variance）が仮定される。また、検定の種類は、デフォルトでは同等性検定（Equivalence）であるが、オプションで優越性検定や非劣性検定も指定できる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

#### Equivalence Tests of Std Dev

**構文:** obj &lt;&lt; Equivalence Tests of Std Dev( ratio, &lt;alpha=.05&gt;, &lt;test type&gt; )

**説明:** 標準偏差の比に対する優越性検定、非劣性検定、同等性検定を行う。このうち同等性検定は、実質的には同等であることを検証したい場合に行う検定で、通常の有意性検定とは逆の検定である。有意水準、検定の種類、およびグループの水準をオプションの引数で指定する。検定の種類は、デフォルトでは同等性検定（Equivalence）であるが、オプションで優越性検定や非劣性検定も指定できる。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

#### Friedman Rank Test

**構文:** obj &lt;&lt; Friedman Rank Test( state=0|1 )

**説明:** Friedman検定の表示／非表示を切り替える。Friedman検定では、ブロック変数の各水準内で順位を求める。Friedman検定は、正規分布を仮定した反復順位検定を、順位変換して行っているものとみなせる。このオプションは、起動ダイアログにブロック変数が指定されており、かつ、各ブロック内の観測値が同数である場合にのみ利用できる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### Games-Howell

**構文:** obj &lt;&lt; "Games-Howell"n( state=0|1 );

**説明:** Games-Howell多重比較の表示/非表示を切り替える。この検定は、すべてのペアの平均を比較する検定であり、また、「各グループでの誤差分散がすべて等しい」と仮定できない状況に対処した検定である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Games-Howell"n( 1 );

```

#### Grand Mean

**構文:** obj &lt;&lt; Grand Mean( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、Y変数の全体平均の表示／非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );
Wait( 2 );
obj << Grand Mean( 1 );

```

#### Histograms

**構文:** obj &lt;&lt; Histograms( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフの右側に、横方向のヒストグラムを表示／非表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Histograms( 1 );

```

#### Hsu MCB

**構文:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**説明:** HsuのMCB多重比較検定を計算する。この検定では平均が未知の最大平均より小さいかどうかを検定する。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### Jonckheere Terpstra Test

**構文:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**説明:** Joncheere-Terpstra検定の表示/非表示を切り替える。この検定は、差の大きさに対して予め順序が想定できる状況での群間比較のノンパラメトリックな検定。「応答変数の確率分布が群間で同じ」という帰無仮説を検定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
obj = dt << Oneway( Y( :Height ), X( :age ) );
obj << Jonckheere Terpstra Test( 1 );

```

#### Kolmogorov Smirnov Exact Test

**構文:** obj &lt;&lt; Kolmogorov Smirnov Exact Test( state=0|1 )

**説明:** Kolmogorov-Smirnov検定の表示/非表示を切り替える。この検定は、経験分布関数に基づく検定であり、グループ間で分布が同じかどうかを判断する。このオプションは、X変数に2つの水準がある場合にのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Exact Test( 1 );

```

#### Kolmogorov Smirnov Test

**構文:** obj &lt;&lt; Kolmogorov Smirnov Test( state=0|1 )

**説明:** Kolmogorov-Smirnov検定の表示/非表示を切り替える。Kolmogorov Smirnov検定は、各群の分布がすべて同じかどうかを経験的分布関数に基づき検定する。このオプションは、X変数に2つの水準がある場合にのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Test( 1 );

```

#### Legend

**構文:** obj &lt;&lt; Legend( state=0|1 )

**説明:** 正規分位点、累積分布関数（CDF）、密度プロットにおいて、凡例の表示／非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );
Wait( 2 );
obj << Legend( 1 );

```

#### Line of Fit

**構文:** obj &lt;&lt; Line of Fit( state=0|1 )

**説明:** 開いている各分位点プロットにおいて、X変数の水準ごとの参照線を表示／非表示する。このオプションは、分位点プロットが開いているときにのみ利用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Line of Fit( 0 );

```

#### Matching Column

**構文:** obj &lt;&lt; Matching Column( column )

**説明:** 指定された対応する変数に基づいて、分割実験モデルをあてはめる。また、「一元配置」レポートの先頭にあるグラフにおいて、あてはめ線の表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );
Wait( 2 );
obj[1] << Matching Column( :sex );
obj[2] << Matching Column( :Age );

```

#### Matching Dotted Lines

**構文:** obj &lt;&lt; Matching Dotted Lines( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、対応する変数の平均を結ぶ折れ線で、欠測セルに対する点線の表示／非表示を切り替える。欠測セルの平均に対しては、二元配置分散分析モデルに基づく予測値が使われる。このオプションは、［対応のある列を設定］オプションが選択され、X変数の水準の対応する変数の値がすべて欠測している場合にのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex[6 :: 8] = "";
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Matching Column( :sex );
Wait( 2 );
obj << Matching Dotted Lines( 1 );

```

#### Matching Lines

**構文:** obj &lt;&lt; Matching Lines( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、対応する変数の各水準の平均を結ぶ折れ線の表示／非表示を切り替える。このオプションは、［対応のある列を設定］オプションが選択されている場合にのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
Wait( 2 );
obj << Matching Lines( 0 );

```

#### Mean CI Lines

**構文:** obj &lt;&lt; Mean CI Lines( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、各グループの95%信頼区間の線の表示／非表示を切り替える。この95%信頼区間は、プールした標準偏差を用いて計算される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean CI Lines( 1 );

```

#### Mean Diamonds

**構文:** obj &lt;&lt; Mean Diamonds( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、平均のひし形の表示／非表示を切り替える。各ひし形は、平均の95%信頼区間を示す。また、ひし形の中心になる水平線は、平均を示す。95%信頼区間は、プールした標準偏差を用いて計算される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Diamonds( 1 );

```

#### Mean Error Bars

**構文:** obj &lt;&lt; Mean Error Bars( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、各グループの平均と、平均から上下へ1標準偏差だけ離れたところの誤差バーの表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Error Bars( 1 );

```

#### Mean Lines

**構文:** obj &lt;&lt; Mean Lines( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、各グループの平均値の水平線の表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Lines( 1 );

```

#### Mean of Means

**構文:** obj &lt;&lt; Mean of Means( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、グループ平均の平均値の表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean of Means( 1 );

```

#### Means and Std Dev

**構文:** obj &lt;&lt; Means and Std Dev( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、平均、誤差バー、標準偏差の線の表示/非表示を切り替える。また、要約統計量表の表示／非表示を切り替える。平均値の標準誤差は、個々のグループごとの標準偏差を使用する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means and Std Dev( 1 );

```

#### Means/Anova

**構文:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova"n( state=0|1)

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、平均のひし形の表示／非表示を切り替える。また、「分散分析」レポートの表示／非表示を切り替える。このオプションは、X変数の水準が3水準以上あるときにのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );

```

#### Means/Anova/Pooled t

**構文:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova/Pooled t"n( state=0|1)

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、平均のひし形の表示／非表示を切り替える。また、「分散分析」レポートの表示／非表示を切り替える。「分散分析」レポートには、2つのグループの分散が等しいと仮定した、プーリングしたt検定レポートが含まれている。このオプションは、X変数の水準が2水準であるときにのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Means( 1 );

```

#### Median Exact Test

**構文:** obj &lt;&lt; Median Exact Test( state=0|1 )

**説明:** 正確な中央値検定(メディアン検定)の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Median Exact Test( 1 );

```

#### Median Test

**構文:** obj &lt;&lt; Median Test( state=0|1 )

**説明:** 中央値検定(メディアン検定)の表示／非表示を切り替える。中央値検定のスコアとしては、順位が中央値より上のときに１が、下のとき0が付与される。中央値検定は、誤差分布が二重指数分布のときの最強力順位検定である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Median Test( 1 );

```

#### Newman-Keuls

**構文:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**説明:** Newman-Keuls検定を行う。この検定では、ステップダウン方式により、スチューデント化された範囲を用いて検定していく。Student-Newman-Keuls法とも呼ばれている。Tukey HSD検定よりも「有意」な結果が得られやすい。利用できる表示オプションについては、Oneway Means Comparisons（一元配置の平均比較）のメッセージを参照のこと。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Normal Quantile Label

**構文:** obj &lt;&lt; Normal Quantile Label( state=0|1 )

**説明:** 開いている各分位点プロット上において、正規分位点スケールを表示／非表示する。このオプションは、分位点プロットが開いているときにのみ利用できる。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Normal Quantile Label( 0 );

```

#### Plot Actual by Quantile

**構文:** obj &lt;&lt; Plot Actual by Quantile( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフの右側に、分位点プロットを表示／非表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Actual by Quantile( 1 );

```

#### Plot Quantile by Actual

**構文:** obj &lt;&lt; Plot Quantile by Actual( state=0|1 )

**説明:** 横軸をY変数、縦軸を累積確率とする分位点プロットの表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );

```

#### Points

**構文:** obj &lt;&lt; Points( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、データ点の表示／非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << Points( 0 );

```

#### Points Jittered

**構文:** obj &lt;&lt; Points Jittered( "なし"|"自動"|"一様乱数"|"正規乱数"|"密度乱数"|"詰め込み"|"グリッド"|"六角形グリッド"|"ビースウォーム"="自動" )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、データ点の広がりを指定する。選択した場合、マーカーが重ならないようにデータ点がずらして表示される。 デフォルトの値は"自動"。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );
obj << Points Jittered( "Binned" );

```

#### Points Spread

**構文:** obj &lt;&lt; Points Spread( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、データ点の広がりを指定する。選択した場合、データ点は区間の幅に広がる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Points Spread( 1 );

```

#### Pooled Variance

**構文:** obj &lt;&lt; Ratios with Pooled Variance( state=0|1 );

**説明:** 等分散の仮定のもとで、各ペアを「平均の比」で比較した結果の表示/非表示を切り替える。分散が等しいと仮定し、平均比の信頼区間をFiellerの方法に基づき計算する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1 );

```

#### Power

**構文:** obj &lt;&lt; Power( Alpha( from, &lt;to&gt;, &lt;by&gt; ), Sigma( from, &lt;to&gt;, &lt;by&gt; ), Delta( from, &lt;to&gt;, &lt;by&gt; ), Number( from, &lt;to&gt;, &lt;by&gt; ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**説明:** 検出力をレポートする。有意水準(α)、誤差の標準偏差(σ)、効果の大きさ(δ)、および、標本サイズ(数)の範囲を引数で指定できる。第5引数はレポートの結果を指定する。第6引数は検出力プロットを要求し、引数Done(完了)は検出力ダイアログを閉じる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), All Graphs( 0 ) );
obj << Power(
	Alpha( 0.05 ),
	Sigma( 3.382, 3.73 ),
	Delta( 2.79679 ),
	Number( 10, 90, 5 ),
	Solve for Power,
	Power Plot,
	Done
);

```

#### Proportion of Densities

**構文:** obj &lt;&lt; Proportion of Densities( state=0|1 )

**説明:** X変数の各グループが密度全体にどれぐらい寄与しているかをあら明日プロットの表示／非表示を切り替える。この寄与度は、X変数の各値において、各グループの密度の総密度に占める割合で示される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Proportion of Densities( 1 );

```

#### Quantiles

**構文:** obj &lt;&lt; Quantiles( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、箱ひげ図の表示／非表示を切り替える。また、分位点レポートの表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Quantiles( 1 );

```

#### Robust Fit

**構文:** obj &lt;&lt; Robust Fit( state=0|1 )

**説明:** Huber推定を行う。Huber推定では、絶対値が小さい残差は、通常の最小二乗推定の残差と同じように処理されるが、絶対値が大きな残差は最小絶対値推定の残差のように処理される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );

```

#### Robust Means Lines

**構文:** obj &lt;&lt; Robust Means Lines( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、各グループのロバスト平均の水平線の表示／非表示を切り替える。このオプションは、［ロバスト］オプションが選択されている場合にのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );
obj << Robust Means Lines( 1 );

```

#### Save Normal Quantiles

**構文:** obj &lt;&lt; Save Normal Quantiles

**説明:** X変数の水準ごとに計算した正規分位点を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Normal Quantiles;

```

#### Save Predicted

**構文:** obj &lt;&lt; Save Predicted

**説明:** X変数の水準ごとに計算した平均値を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Predicted;

```

#### Save Residuals

**構文:** obj &lt;&lt; Save Residuals

**説明:** Y変数のデータ値から、グループ平均を引いた値を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Residuals;

```

#### Save Standardized

**構文:** obj &lt;&lt; Save Standardized

**説明:** グループごとにY変数を標準化し、その標準化された値を保存する。この標準化された値は、各グループ内で、データ値から平均を引き、標準偏差で割ったものである。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Standardized;

```

#### Select Group

**構文:** obj &lt;&lt; Select Group( X value )

**説明:** グループを選択して、その円を強調表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );
Wait( 2 );
obj << Select Group( 14 );

```

#### Set Alpha Level

**構文:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**説明:** レポートの信頼限界、および、平均のひし形に使用する有意水準を変更する。 デフォルトの値は"0.05"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Set α Level

**構文:** obj &lt;&lt; Set α Level( alpha=0.05 )

**説明:** レポートの信頼限界、および、平均のひし形に使用する有意水準を変更する。 デフォルトの値は"0.05"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Standard Deviations

**構文:** obj &lt;&lt; Standard Deviations

**説明:** 標準偏差の比に対する同等性検定、優越性検定、非劣性検定のオプションを指定するウィンドウを起動する。分散に対する仮定やマージンなどを指定する。

#### Std Dev Lines

**構文:** obj &lt;&lt; Std Dev Lines( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、各グループの平均から上下へ1標準偏差だけ離れたところの線の表示／非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Std Dev Lines( 1 );

```

#### Steel With Control

**構文:** obj &lt;&lt; Steel With Control( state = 0|1, {control level} )

**説明:** Steel検定の表示／非表示を切り替える。多重比較の調整により、全体における過誤の確率が保たれる。コントロール群と、他のすべての群を比較する。Dunnett検定のノンパラメトリック版。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Steel With Control( 1, {12} );

```

#### Steel-Dwass All Pairs

**構文:** obj &lt;&lt; "Steel-Dwass All Pairs"n( state=0|1 )

**説明:** Steel-Dwass検定の表示／非表示を切り替える。多重比較の調整により、全体における過誤の確率が保たれる。Tukey検定のノンパラメトリック版。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Steel-Dwass All Pairs"n( 1 );

```

#### Student's t

**構文:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**説明:** 多重性調整なしのStudentのt検定を使用して、個々のペアごとの比較を計算する。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Tukey HSD

**構文:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**説明:** TukeyのHSD(honestly significant difference)検定を実行する。この検定は多重比較の調整を行っている。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Unequal Variances

**構文:** obj &lt;&lt; Unequal Variances( state=0|1 )

**説明:** 等分散を帰無仮説とした検定の表示／非表示を切り替える。この等分散性の検定では4つの検定が実行される。また、このオプションはWelch検定も実行する。Welch検定は、グループごとの分散が等しくない場合に平均を比較するためのものである。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Unequal Variances( 1 );

```

#### Unpooled Variance

**構文:** obj &lt;&lt; Ratios with Unpooled Variance( state=0|1 );

**説明:** 異分散の仮定のもとで、各ペアを「平均の比」で比較した結果の表示/非表示を切り替える。分散が等しいと仮定し、平均比の信頼区間をFiellerの方法およびSatterthwaite自由度近似に基づき計算する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Unequal Variance( 1 );

```

#### Van Der Waerden Exact Test

**構文:** obj &lt;&lt; Van Der Waerden Exact Test( state=0|1 )

**説明:** 正確なVan der Waerden検定の表示/非表示を切り替える。Van der Waerden検定は、正規スコアに基づく検定である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Van Der Waerden Exact Test( 1 );

```

#### Wilcoxon Each Pair

**構文:** obj &lt;&lt; Wilcoxon Each Pair( state=0|1 )

**説明:** すべてのペアの比較を行うWilcoxonの検定の表示／非表示を切り替える。多重比較の調整は行わない。ペアごとの比較を行うStudentのt検定のノンパラメトリック版。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Each Pair( 1 );

```

#### Wilcoxon Exact Test

**構文:** obj &lt;&lt; Wilcoxon Exact Test( state=0|1 )

**説明:** 正確なWilcoxon検定の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Wilcoxon Exact Test( 1 );

```

#### Wilcoxon Test

**構文:** obj &lt;&lt; Wilcoxon Test( state=0|1 )

**説明:** Wilcoxon検定の表示／非表示を切り替える。Wilcoxon検定は、単なるデータの順位をスコアとした検定である。Wilcoxon検定は、誤差分布がロジスティック分布のときの最強力順位検定である。X変数に2つの水準がある場合、Wilcoxon検定はMann-Whitney検定と同等である。X変数に3つ以上の水準がある場合、Kruskal-Wallis検定を行う。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Test( 1 );

```

#### With Best

**構文:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**説明:** HsuのMCB多重比較検定を計算する。この検定では平均が未知の最大平均より小さいかどうかを検定する。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### With Control

**構文:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**説明:** Dunnettの検定を計算する。この検定では平均がコントロール群の平均と異なるかどうかを検定する。詳しい表示オプションについては、「水準平均の比較」メッセージを参照。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### X Axis Proportional

**構文:** obj &lt;&lt; X Axis Proportional( state=0|1 )

**説明:** 「一元配置」レポートの先頭にあるグラフにおいて、横軸の間隔を指定する。選択した場合、間隔は各水準の観測数に比例する。このオプションは、［対応のある列を設定］オプションが選択されている場合は使用できない。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );
Wait( 2 );
obj << X Axis Proportional( 1 );

```

#### t Test

**構文:** obj &lt;&lt; t Test( state=0|1 )

**説明:** 異分散を仮定したt検定(Welch検定)の表示／非表示を切り替える。このオプションは、X変数に2つの水準がある場合にのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << t Test( 1 );

```

#### van der Waerden Test

**構文:** obj &lt;&lt; van der Waerden Test( state=0|1 )

**説明:** Van der Waerden検定の表示／非表示を切り替える。Van der Waerden検定のスコアは、順位をn+1で割ったものを標準正規分布の分位点関数で変換したものである。Van der Waerden検定は、誤差分布が正規分布のときの最強力順位検定である。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << van der Waerden Test( 1 );

```

