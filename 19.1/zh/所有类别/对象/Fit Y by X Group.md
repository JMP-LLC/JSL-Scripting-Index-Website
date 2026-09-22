# Fit Y by X Group



## Bivariate > Bivariate Curve

### 关联的构造器

#### Curve

**语法:** obj &lt;&lt; ( Curve[number] )

**说明:** 访问单个曲线以便传递更多消息。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );obj << (curve[1] << Line of Fit( 1 ));Wait( 1 );obj << (curve[1] << Line of Fit( 0 ));

```

### 项消息

#### Confid Curves Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**说明:** 显示或隐藏拟合线的置信曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 )} );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**说明:** 显示或隐藏单个预测值的置信曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Confid Shaded Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Fit( state=0|1 )} )

**说明:** 为置信曲线和拟合线之间的区域着色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );Wait( 1 );obj << (curve[1] << Confid Shaded Fit( 0 ));

```

#### Confid Shaded Indiv

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**说明:** 为单个预测值的置信曲线和拟合线之间的区域着色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );Wait( 1 );obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

#### Indiv Confidence Limit Formula

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**说明:** 将新公式列保存至原始数据表。这些列表示单值预测的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));Wait( 1 );obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**说明:** 更改拟合线、置信曲线以及着色置信区域的线条颜色。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**说明:** 更改拟合线的线条样式。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**说明:** 更改拟合线以及任意置信曲线的线条粗细。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.99, {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**说明:** 显示或隐藏拟合线。 默认开启。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**说明:** 将新公式列保存至原始数据表。这些列表示响应均值的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));Wait( 1 );obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Plot Residuals

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Plot Residuals( state=0|1 ) ); obj &lt;&lt; Fit Name( {Plot Residuals( state=0|1 )} )

**说明:** 显示或隐藏五个诊断图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1, {Plot Residuals( 1 )} );Wait( 1 );obj << (curve[1] << Plot Residuals( 0 ));

```

#### Profiler

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Profiler( state=0|1 ) ); obj &lt;&lt; Fit Name( {Profiler( state=0|1 )} )

**说明:** 根据所选的预测变量和指定的模型，显示或隐藏所选结果的预测刻画器。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3, {Profiler( 1 )} );Wait( 1 );obj << (Curve[1] << Profiler( 0 ));

```

#### Remove Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**说明:** 删除拟合曲线。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );obj << Fit Polynomial( 3 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95 );obj << Density Ellipse( 0.90 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

#### Report

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**说明:** 显示或隐藏拟合汇总、失拟、方差分析和参数估计值的报表。 默认开启。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**说明:** 将新列保存至原始数据表。列包含指定的拟合曲线的预测值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3, {Save Predicteds} );Wait( 1 );obj << Fit Line( 1 );obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**说明:** 将新列保存至原始数据表。列包含指定的拟合曲线的残差值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Residuals);Wait( 1 );obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**说明:** 将新列保存至原始数据表。列包含指定的拟合曲线的学生化残差。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Studentized Residuals);Wait( 1 );obj << Fit Line( {Save Studentized Residuals} );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**说明:** 更改用于置信曲线的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );Wait( 1 );obj << (curve[2] << Set Alpha Level( 0.01 ));

```

#### Set α Level

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**说明:** 更改用于置信曲线的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );Wait( 1 );obj << (curve[2] << Set Alpha Level( 0.01 ));

```

## Bivariate > Bivariate Nonpar Density

### 项消息

#### 5% Contours

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; "5% Contours"n( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {"5% Contours"n( state=0|1 )} )

**说明:** 显示或隐藏 5% 等高线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {"5% Contours"n( 0 )} );Wait( 1 );obj << (curve[1] << "5% Contours"n( 1 ));

```

#### Color By Density Quantile

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color By Density Quantile ); obj &lt;&lt; Nonpar Density( {Color by Density Quantile} )

**说明:** 根据密度为点和行着色。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );Wait( 1 );obj << (curve[1] << Color By Density Quantile);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Color By Density Quantile} );

```

#### Color Theme

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color Theme( "theme"(state=0|1 ) ) ); obj &lt;&lt; Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**说明:** 设置分位数密度等高线的颜色主题。

**JMP添加的版本:** 14

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

#### Contour Fill

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Fill( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Fill( state=0|1 )} )

**说明:** 显示或隐藏填充等高线。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density( {Contour Lines( 0 )} ) );obj << (curve[1] << Contour Fill( 1 ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Contour Fill( 1 )} );

```

#### Contour Lines

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Lines( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Lines( state=0|1 )} )

**说明:** 显示或隐藏等高线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Contour Lines( 0 )} );Wait( 1 );obj << (curve[1] << Contour Lines( 1 ));

```

#### Kernel Control

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Kernel Control( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Kernel Control( state=0|1 )} )

**说明:** 显示或隐藏控制每个变量标准差的滑块。标准差定义 X 和 Y 值的范围，以便确定等高线的密度。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Kernel Control( 1 )} );Wait( 1 );obj << (curve[1] << Kernel Control( 0 ));

```

#### Mesh Plot

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mesh Plot( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Mesh Plot( state=0|1 )} )

**说明:** 显示或隐藏在两个分析变量的网格上的三维密度图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Mesh Plot( 1 )} );Wait( 1 );obj << (curve[1] << Mesh Plot( 0 ));

```

#### Modal Clustering

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Modal Clustering( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Modal Clustering( state=0|1 )} )

**说明:** 显示或隐藏数据模态聚类的结果，它根据当前等高线标识聚类分配。该选项还在数据表的新列中保存聚类数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Modal Clustering( 1 )} );Wait( 1 );obj << (curve[1] << Modal Clustering( 0 ));

```

#### Remove Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**说明:** 删除非参数密度。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density();Wait( 1 );obj << (curve[1] << Remove Fit);

```

#### Report

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Report( state=0|1 )} )

**说明:** 显示或隐藏“分位数密度等高线”报表。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Report( 0 )} );Wait( 1 );obj << (curve[1] << Report( 1 ));

```

#### Save Density Grid

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Grid ); obj &lt;&lt; Nonpar Density( {Save Density Grid} )

**说明:** 将列保存至新数据表。该列包含密度估计值和相应的分位数。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Save Density Grid} );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );obj << (curve[1] << Save Density Grid);

```

#### Save Density Quantile

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Quantile ); obj &lt;&lt; Nonpar( {Save Density Quantile} )

**说明:** 将新列保存至原始数据表。该列包含一个值，它表示包含每个点的密度分位数。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );obj << (curve[1] << Save Density Quantile);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Save Density Quantile} );

```

#### Select Points by Density

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points by Density( lower probability, upper probability ) ); obj &lt;&lt; Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**说明:** 选择指定的概率上限和概率下限之间的点。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );Wait( 1 );obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

#### Set Kernel

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Kernel( xStdDev, yStdDev )); obj &lt;&lt; Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**说明:** 设置 X 值和 Y 值的核心标准差。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );Wait( 1 );obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### 项消息

#### Confid Curves Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**说明:** 显示或隐藏拟合线的置信曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 )} );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**说明:** 显示或隐藏单个预测值的置信曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Indiv Confidence Limit Formula

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**说明:** 将新公式列保存至原始数据表。这些列表示单值预测的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));Wait( 1 );obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**说明:** 更改拟合线、置信曲线以及着色置信区域的线条颜色。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**说明:** 更改拟合线的线条样式。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**说明:** 更改拟合线以及任意置信曲线的线条粗细。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.99, {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**说明:** 显示或隐藏拟合线。 默认开启。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**说明:** 将新公式列保存至原始数据表。这些列表示响应均值的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));Wait( 1 );obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Remove Fit

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**说明:** 删除拟合曲线。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );obj << Fit Polynomial( 3 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95 );obj << Density Ellipse( 0.90 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

#### Report

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**说明:** 显示或隐藏拟合汇总、失拟、方差分析和参数估计值的报表。 默认开启。

**曲线示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

**正常椭圆示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**说明:** 将新列保存至原始数据表。列包含指定的拟合曲线的预测值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3, {Save Predicteds} );Wait( 1 );obj << Fit Line( 1 );obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**说明:** 将新列保存至原始数据表。列包含指定的拟合曲线的残差值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Residuals);Wait( 1 );obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**说明:** 将新列保存至原始数据表。列包含指定的拟合曲线的学生化残差。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Studentized Residuals);Wait( 1 );obj << Fit Line( {Save Studentized Residuals} );

```

#### Select Points Inside

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Inside ); obj &lt;&lt; Density Ellipse( {Select Points Inside} )

**说明:** 选择椭圆内的点。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate(	Y( :Weight ),	X( :Height ),	Density Ellipse( 0.95, {Line Color( {213, 72, 87} )} ),);obj << (curve[1] << Select Points Inside);Wait( 1 );obj << Density Ellipse( 0.8, {Select Points Inside} );

```

#### Select Points Outside

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Outside ); obj &lt;&lt; Density Ellipse( {Select Points Outside} )

**说明:** 选择椭圆外的点。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate(	Y( :Weight ),	X( :Height ),	Density Ellipse( 0.8, {Line Color( {213, 72, 87} )} ),);obj << (curve[1] << Select Points Outside);Wait( 1 );obj << Density Ellipse( 0.95, {Select Points Outside} );

```

#### Shaded Contour

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; Shaded Contour( state=0|1 ) ); obj &lt;&lt; Density Ellipse( {Shaded Contour( state=0|1 )} )

**说明:** 显示或隐藏着色等高线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ), );obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );Wait( 1 );obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

### 共享项消息

#### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**匿名预设**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**在文件夹内搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**按名称搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Copy Script;

```

#### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Data Table Window;

```

#### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

**带过滤器的平台**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

**常规**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**语法:** obj &lt;&lt; Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**语法:** obj &lt;&lt; Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**语法:** obj &lt;&lt; Report; Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**语法:** obj &lt;&lt; Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 关联的构造器

#### Bivariate

**语法:** Bivariate( Y( columns ), X( columns ) )

**说明:** 对另一个连续变量进行连续响应建模。分析方法包括拟合线、多项式、样条和二元密度。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### 列

#### By

**语法:** obj = Bivariate(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate(	Y( :Weight ),	X( :Height ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

#### Freq

**语法:** obj = Bivariate(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( :_freqcol ) );

```

#### Regressor

**语法:** obj = Bivariate(...Regressor( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。这些变量必须具有连续建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Response

**语法:** obj = Bivariate(...Response( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个连续响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Weight

**语法:** obj = Bivariate(...&lt;Weight( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( :_weightcol ) );

```

#### X

**语法:** obj = Bivariate(...X( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。这些变量必须具有连续建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Y

**语法:** obj = Bivariate(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个连续响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### 项消息

#### Curve

**语法:** obj &lt;&lt; ( Curve[number] &lt;&lt; option )

**说明:** 拟合线的控点数组。您可以将二元曲线消息发送至已拟合的指定曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Density Ellipse

**语法:** obj &lt;&lt; Density Ellipse( percent )

**说明:** 拟合二元正态等高线。等高线包含总数据点的指定百分比。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95 );

```

#### Fit Cauchy

**语法:** obj &lt;&lt; Fit Cauchy

**说明:** 拟合稳健回归模型，其中参数通过 Cauchy 连结函数的最大似然进行估计。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Cauchy;

```

#### Fit Each Value

**语法:** obj &lt;&lt; Fit Each Value

**说明:** 拟合一条线，该线通过每个唯一 X 值集合的 Y 均值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Each Value;

```

#### Fit Line

**语法:** obj &lt;&lt; Fit Line

**说明:** 拟合数据的最小二乘回归模型。拟合线显示在图上并且提供拟合报表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line;

```

#### Fit Mean

**语法:** obj &lt;&lt; Fit Mean

**说明:** 拟合 Y 响应变量的均值。斜率为零的平直线显示在图上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Mean;

```

#### Fit Orthogonal

**语法:** obj &lt;&lt; Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**说明:** 拟合指定的正交回归模型。当 X 和 Y 变量的测量带有误差时，则正交回归模型很有用。“指定的方差比”参数使您可以指定 X 变量中的误差与 Y 变量中的误差的方差比。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Orthogonal( Fit X to Y );

```

#### Fit Passing Bablok

**语法:** obj &lt;&lt; Fit Passing Bablok

**说明:** 使用 Passing-Bablok 过程拟合回归模型。当 X 和 Y 变量的测量带有误差时，该过程很有用。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Passing Bablok;

```

#### Fit Polynomial

**语法:** obj &lt;&lt; Fit Polynomial( degree of model )

**说明:** 使用最小二乘回归拟合指定次数的多项式曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3 );

```

#### Fit Robust

**语法:** obj &lt;&lt; Fit Robust

**说明:** 使用 Huber M 估计方法拟合回归模型，它对离群值具有稳健性。Huber 损失函数惩罚离群值，并且对于小误差呈二次增长，对于大误差呈线性增长。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Robust;

```

#### Fit Special

**语法:** obj &lt;&lt; Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), &lt;Intercept( number )&gt;, &lt;Slope( number )&gt;, &lt;Degree( degree )&gt;, Centered Polynomial&gt; )

**说明:** 拟合包含 X 和 Y 变量变换的回归模型。您还可以对斜率和截距设置约束，以及使用次数参数拟合多项式模型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Special( xTran( "Log" ) );obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

#### Fit Spline

**语法:** obj &lt;&lt; Fit Spline( lambda, &lt;Standardized&gt; )

**说明:** 拟合数据的惩罚最小二乘模型，其中平滑参数 lambda 确定模型拟合的平滑度。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Spline( 341.1929, Standardized );obj << Fit Spline( 341.1929 );

```

#### Fit Where

**语法:** obj &lt;&lt; Fit Where( column == level, command )

**说明:** 拟合单水平分类变量曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :weight ), X( :height ) );obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

#### Group By

**语法:** obj &lt;&lt; Group By( column )

**说明:** 指定分组变量。指定分组变量后，会为分组变量的每个水平单独执行所有分析。

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );obj << Group By( :drug );obj << Fit Line;

```

#### Histogram Borders

**语法:** obj &lt;&lt; Histogram Borders( state=0|1 )

**说明:** 显示或隐藏散点图水平轴和垂直轴上的直方图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Histogram Borders( 1 );

```

#### Kernel Smoother

**语法:** obj &lt;&lt; Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**说明:** 适用于对特定数据重复子集的局部拟合，这些数据的子集范围由 alpha 确定，拟合平滑性由 Lambda 确定，权重由权重函数确定。离群值的权重随稳健性的增加而减小。该方法还称为 LOESS 平滑法。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Kernel Smoother( 1, 1, 0.84615, 0 );

```

#### Nonpar Density

**语法:** obj &lt;&lt; Nonpar Density

**说明:** 拟合非参数二元密度等高线，并且在图形上绘制相应的等高线。等高线的区间为 5%。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density;

```

#### Paired t test

**语法:** obj &lt;&lt; Paired t test

**说明:** 运行配对 t 检验，生成报表并在散点图上显示 45 度灰线以表示两列相等的位置。



该选项已提升为“配对”平台。也可以在按住 Shift 键时从“二元”菜单访问该选项。

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );obj << Paired t test;

```

#### Points Jittered

**语法:** obj &lt;&lt; Points Jittered( "无"|"自动"|"随机均匀"|"随机正态"|"密度随机"|"堆叠填充"|"网格"|"六边形网格"|"蜂群"="自动" )

**说明:** 指定数据点的散布情况。选中时，数据点随机散布以避免标记重叠。 默认为“自动”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );obj << Points Jittered( "Random Normal" );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏图形中的点。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );Wait( 1 );obj << Show Points( 0 );

```

#### Summary Statistics

**语法:** obj &lt;&lt; Summary Statistics( state=0|1 )

**说明:** 显示或隐藏汇总统计量表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Summary Statistics( 1 );

```

## Contingency > Analysis of Means for Proportions

### 项消息

#### Point Options

**语法:** obj &lt;&lt; Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定“比例均值分析”图中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**语法:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏“比例均值分析”图的中心线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏“比例均值分析”图中的决策限着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏“比例均值分析”图中的决策限线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含 X 变量每个水平的响应比例和决策限的报表。该报表还指示是否超过限值。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

#### Switch Response Level for Proportion

**语法:** obj &lt;&lt; Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) ); scrobj &lt;&lt; Switch Response Level for Proportion( state=0|1 )

**说明:** 更改分析中使用的响应类别。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### 项消息

#### Forest Plot

**语法:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) ); scobj &lt;&lt; Forest Plot( state=0|1 )

**说明:** 显示或隐藏等价性检验森林图。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));Wait( 2 );scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);scobj << Forest Plot( 0 );

```

#### Remove

**语法:** scobj &lt;&lt; Remove

**说明:** 删除“等价性检验”报表。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));Wait( 1 );scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);Wait( 1 );scobj << Remove;

```

#### Test Report

**语法:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) ); scobj &lt;&lt; Test Report( state=0|1 )

**说明:** 显示或隐藏一个报表，其中汇总了针对风险差值或风险比的等价性检验、优效性检验或非劣效性检验。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));Wait( 2 );scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);scobj << Test Report( 0 );

```

## Contingency > Contingency Table

### 项消息

#### Cell Chi Square

**语法:** obj &lt;&lt; Contingency Table( Cell Chi Square( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中各单元格在卡方统计量中所占的比重。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Cell Chi Square( 1 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

#### Col %

**语法:** obj &lt;&lt; Contingency Table( Col %( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中每个单元格在列中所占比重百分比。 默认开启。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Col %( 0 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Col Cum

**语法:** obj &lt;&lt; Contingency Table( Col Cum( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中的累积列合计。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table(	Total %( 0 ),	Col %( 0 ),	Row %( 0 ),	Col Cum( 1, Format( "Fixed Dec", 7, 1 ) ));

```

#### Col Cum %

**语法:** obj &lt;&lt; Contingency Table( Col Cum %( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中的累积列百分比。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table(	Total %( 0 ),	Col %( 0 ),	Row %( 0 ),	Col Cum %( 1, Format( "Fixed Dec", 7, 1 ) ));

```

#### Count

**语法:** obj &lt;&lt; Contingency Table( Count( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中的单元格计数。 默认开启。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Count( 0 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Deviation

**语法:** obj &lt;&lt; Contingency Table( Deviation( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中各单元格的偏差。各单元格的偏差是实际单元格计数减去期望单元格计数。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Deviation( 1 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Expected

**语法:** obj &lt;&lt; Contingency Table( Expected( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中期望的单元格计数。期望单元格计数是相应行合计与列合计的乘积再除以总计。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Expected( 1 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Make Into Data Table

**语法:** obj &lt;&lt; Contingency Table( Make Into Data Table )

**说明:** 创建包含交叉表数据的数据表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

#### Row %

**语法:** obj &lt;&lt; Contingency Table( Row %( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中每个单元格在行中所占比重百分比。 默认开启。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Row %( 0 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Row Cum

**语法:** obj &lt;&lt; Contingency Table( Row Cum( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中的累积行合计。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table(	Total %( 0 ),	Col %( 0 ),	Row %( 0 ),	Row Cum( 1, Format( "Fixed Dec", 7, 1 ) ));

```

#### Row Cum %

**语法:** obj &lt;&lt; Contingency Table( Row Cum %( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中的累积行百分比。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table(	Total %( 0 ),	Col %( 0 ),	Row %( 0 ),	Row Cum %( 1, Format( "Fixed Dec", 7, 1 ) ));

```

#### Total %

**语法:** obj &lt;&lt; Contingency Table( Total %( state=0|1, &lt;Format(...)&gt; ) )

**说明:** 显示或隐藏列联表中单元格的合计百分比。 默认开启。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 0 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### 项消息

#### 3D Correspondence Analysis

**语法:** obj &lt;&lt; Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**说明:** 显示或隐藏三维散点图。

```jsl

dt = Open( "$SAMPLE_DATA/Cars 1993.jmp" );obj = Contingency(	Y( :Vehicle Category ),	X( :Manufacturer ),	Contingency Table( 0 ),	Tests( 0 ));Wait( 1 );obj << Correspondence Analysis( "3D Correspondence Analysis"(1) );

```

#### Make Table

**语法:** obj &lt;&lt; Correspondence Analysis( "Make Table" )

**说明:** 创建包含对应分析输出的数据表。

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );obj << Correspondence Analysis( "Make Table" );

```

#### Save Value Order

**语法:** obj &lt;&lt; Correspondence Analysis( "Save Value Order" )

**说明:** 将“值排序”列属性保存至数据表中的 X 和 Y 变量列。列属性指定按第一个对应评分系数排序的水平的顺序。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

### 共享项消息

#### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**匿名预设**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**在文件夹内搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**按名称搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Copy Script;

```

#### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Data Table Window;

```

#### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

**带过滤器的平台**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

**常规**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**语法:** obj &lt;&lt; Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**语法:** obj &lt;&lt; Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**语法:** obj &lt;&lt; Report; Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**语法:** obj &lt;&lt; Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 关联的构造器

#### Contingency

**语法:** Contingency( Y( columns ), X( columns ) )

**说明:** 在一组分类组中对分类响应建模。分析方法包括卡方检验和马赛克图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### 列

#### Block

**语法:** obj = Contingency(...&lt;Block( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定分区组变量。该变量用来标识第二个因子并执行 Cochran-Mantel-Haenszel 检验。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

```

#### By

**语法:** obj = Contingency(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency(	Y( :Age ),	X( :sex ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

#### Freq

**语法:** obj = Contingency(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( :_freqcol ) );

```

#### Grouping Category

**语法:** obj = Contingency(...Grouping Category( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。这些变量必须具有有序型或名义型建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Response Category

**语法:** obj = Contingency(...Response Category( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个分类响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Weight

**语法:** obj = Contingency(...&lt;Weight( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( :_weightcol ) );

```

#### X

**语法:** obj = Contingency(...X( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。这些变量必须具有有序型或名义型建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Y

**语法:** obj = Contingency(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个分类响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### 项消息

#### Agreement Statistic

**语法:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**说明:** 显示或隐藏一个报表，它包含测量水平之间一致性的统计量。该报表包括 Kappa 统计量，以及统计量的标准误差、置信区间和假设检验。该报表还包括 Bowker 对称性检验，它也称为 McNemar 检验。该选项仅当 X 和 Y 变量具有相同的水平时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Contingency(	Y( :Second Survey ),	X( :First Survey ),	Freq( :Count ),	Tests( 0 ),	Agreement Statistic( 1 ));

```

#### Analysis of Means for Proportions

**语法:** obj &lt;&lt; Analysis of Means for Proportions( state=0|1, &lt;chart options&gt; )

**说明:** 显示或隐藏比例均值分析 (ANOMP) 决策图以比较组内比例。ANOMP 是多重比较过程，它将 X 变量水平的响应比例与总响应比例进行比较。该选项仅当 Y 变量恰好有两个水平时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency(	Y( :marital status ),	X( :type ),	Analysis of Means for Proportions( 1 ));

```

#### Cochran Armitage Trend Test

**语法:** obj &lt;&lt; Cochran Armitage Trend Test( state=0|1 )

**说明:** 显示或隐藏单个变量的各水平间二项式比例趋势的检验。该选项仅当一个变量恰好有两个水平而另一个变量为有序型时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );obj << Cochran Armitage Trend Test( 1 );

```

#### Cochran Mantel Haenszel

**语法:** obj &lt;&lt; Cochran Mantel Haenszel( column ); obj &lt;&lt; Cochran Mantel Haenszel( state=0|1 )

**说明:** 显示或隐藏一个检验，它确定根据第三个分类变量分区组之后两个分类变量之间是否存在关系。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );obj = dt << Contingency( Y( :type ), X( :marital status ) );obj << Cochran Mantel Haenszel( :country );Wait( 2 );obj << Cochran Mantel Haenszel( 0 );

```

#### Contingency Table

**语法:** obj &lt;&lt; Contingency Table( state=0|1 )

**说明:** 显示或隐藏双因子频数表。该表包含一行表示 X 变量的每个水平，一列表示 Y 变量的每个水平。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( 0 );

```

#### Correspondence Analysis

**语法:** obj &lt;&lt; Correspondence Analysis( state=0|1 ); obj &lt;&lt; Correspondence Analysis( correspondence chart options )

**说明:** 显示或隐藏对应分析，它标识频数表具有相似计数模式的行或列。在对应分析图中，列联表的每行和每列对应一个点。

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );obj << Correspondence Analysis( 1 );

```

#### Equivalence Tests of Relative Risk

**语法:** obj &lt;&lt; Equivalence Tests of Relative Risk( ratio, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**说明:** 检验在相对风险不超过一定比，此时认为这些风险实际上为等价。该检验与常见的显著性检验相逆。alpha、检验类型和组水平是可选参数。默认情况下，检验类型参数是“等价性”，但它还可用于指定优效性或非劣效性检验。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Relative Risk(		0.8,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));

```

#### Equivalence Tests of Risk Difference

**语法:** obj &lt;&lt; Equivalence Tests of Risk Difference( difference, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**说明:** 检验在风险差值间的差异不超过一定量（差值），此时认为这些风险值实际上是等价的。该检验与常见的显著性检验相逆。alpha、检验类型和组水平是可选参数。默认情况下，检验类型参数是“等价性”，但它还可用于指定优效性或非劣效性检验。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));

```

#### Exact Agreement Statistic

**语法:** obj &lt;&lt; Exact Agreement Statistic( state=0|1 )

**说明:** 显示或隐藏一致性统计量 Kappa 的精确版本。

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Contingency(	Y( :Second Survey ),	X( :First Survey ),	Freq( :Count ),	Tests( 0 ));obj << Exact Agreement Statistic( 1 );

```

#### Exact Cochran Armitage Trend Test

**语法:** obj &lt;&lt; Exact Cochran Armitage Trend Test( state=0|1 )

**说明:** 显示或隐藏 Cochran-Armitage 趋势检验的精确版本。

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Contingency(	Y( :Second Survey ),	X( :First Survey ),	Freq( :Count ),	Tests( 0 ));obj << Exact Cochran Armitage Trend Test( 1 );

```

#### Fisher's Exact Test

**语法:** obj &lt;&lt; Fisher&apos;s Exact Test( state=0|1 )

**说明:** 显示或隐藏 Fisher 精确检验以检验两个分类变量之间的关联。该检验不依赖于任何大样本分布假设。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Fisher's Exact Test( 1 );

```

#### Horizontal Mosaic

**语法:** obj &lt;&lt; Horizontal Mosaic( state=0|1 )

**说明:** 水平 (1) 或垂直 (0) 旋转马赛克图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );Wait( 2 );obj << Horizontal Mosaic( 1 );

```

#### Jonckheere Terpstra Test

**语法:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**说明:** 显示或隐藏 Jonckheere-Terpstra 检验的报表，它是类间有序差异的非参数检验。它检验响应变量的分布在各类之间没有差异的原假设。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );:height << Nominal( 1 );obj = dt << Contingency(	Y( :height ),	X( :age ),	Contingency Table(		Count( 1 ),		Total %( 0 ),		Col %( 0 ),		Row %( 0 ),		Expected( 0 ),		Deviation( 0 ),		Cell Chi Square( 0 ),		Col Cum( 0 ),		Col Cum %( 0 ),		Row Cum( 0 ),		Row Cum %( 0 )	));obj << Jonckheere Terpstra Test( 1 );

```

#### Measures of Association

**语法:** obj &lt;&lt; Measures of Association( state=0|1 )

**说明:** 显示或隐藏包含列联表中变量之间关联测度的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Measures of Association( 1 ));

```

#### Mosaic Plot

**语法:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**说明:** 显示或隐藏列联表的图形表示。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Mosaic Plot( 0 );

```

#### Odds Ratio

**语法:** obj &lt;&lt; Odds Ratio( state=0|1 )

**说明:** 显示或隐藏优势比的报表。该选项仅当 X 和 Y 变量均恰好有两个水平时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Odds Ratio( 1 ) );

```

#### Relative Risk

**语法:** obj &lt;&lt; Relative Risk( state=0|1, &lt;Y variable level, X variable level&gt; ); obj &lt;&lt; Relative Risk( state=0|1, &lt;"All"&gt; )

**说明:** 显示或隐藏响应水平之间的相对风险。该选项仅当 X 和 Y 变量均恰好有两个水平时可用。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( 0 ));obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( 0 ));obj << Relative Risk( 1, "All" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**说明:** 更改用于计算决策限的 alpha 水平。 默认为“0.05”。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Set Alpha Level( 0.1 );obj << Measures of Association( 1 );

```

#### Set α Level

**语法:** obj &lt;&lt; Set α Level( alpha=0.05 )

**说明:** 更改用于计算决策限的 alpha 水平。 默认为“0.05”。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Set Alpha Level( 0.1 );obj << Measures of Association( 1 );

```

#### Tests

**语法:** obj &lt;&lt; Tests( state=0|1 )

**说明:** 显示或隐藏测量响应水平比率在 X 变量各水平之间是否相同的检验。这些检验类似于连续数据的“方差分析”表。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Tests( 0 );

```

#### Two Sample Test for Proportions

**语法:** obj &lt;&lt; Two Sample Test for Proportions( state=0|1 )

**说明:** 显示或隐藏比例的双样本检验。该检验比较 X 变量两个水平之间 Y 变量的比例。该选项仅当 X 和 Y 变量均恰好有两个水平时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Two Sample Test for Proportions( 1 ));

```

## Logistic

### 共享项消息

#### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**匿名预设**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**在文件夹内搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**按名称搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Copy Script;

```

#### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Data Table Window;

```

#### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

**带过滤器的平台**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

**常规**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**语法:** obj &lt;&lt; Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**语法:** obj &lt;&lt; Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**语法:** obj &lt;&lt; Report; Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**语法:** obj &lt;&lt; Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 关联的构造器

#### Logistic

**语法:** Logistic( Y( columns ), X( columns ) )

**说明:** 对连续变量进行分类响应建模。分析方法包括 Logistic 回归和 ROC 曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### 列

#### By

**语法:** obj = Logistic(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

#### Categorical Response

**语法:** obj = Logistic(...Categorical Response( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个分类响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Continuous Regressor

**语法:** obj = Logistic(...Continuous Regressor( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。这些变量必须具有连续建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Freq

**语法:** obj = Logistic(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Weight

**语法:** obj = Logistic(...&lt;Weight( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	Weight( :_weightcol ));

```

#### X

**语法:** obj = Logistic(...X( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。这些变量必须具有连续建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Y

**语法:** obj = Logistic(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个分类响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### 项消息

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**说明:** 显示或隐藏参数估计值表中每个效应右侧的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );obj << Confidence Intervals( 0.01 );

```

#### Inverse Prediction

**语法:** obj &lt;&lt; Inverse Prediction( Response( prob1, prob2, ... ), &lt;Confidence Level( percent=0.95 )&gt;, &lt;Two sided|Lower One Sided|Upper One Sided&gt; )

**说明:** 允许您针对响应变量的一个或多个值预测预测变量的值。默认情况下，会为每个逆预测计算双侧 95% 置信限。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

#### Lift Curve

**语法:** obj &lt;&lt; Lift Curve( state=0|1 )

**说明:** 显示或隐藏“提升曲线”图。提升曲线绘制提升与观测对应部分的关系，并提供另一种方式来展示模型预测的能力。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Lift Curve( 1 );

```

#### Line Color

**语法:** obj &lt;&lt; Line Color( color )

**说明:** 允许您选择图曲线的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Line Color( "Magenta" );

```

#### Logistic Plot

**语法:** obj &lt;&lt; Logistic Plot( state=0|1 )

**说明:** 显示或隐藏 Logistic 图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Logistic Plot( 0 );

```

#### Odds Ratios

**语法:** obj &lt;&lt; Odds Ratios( state=0|1 )

**说明:** 在“参数估计值”报表中添加或删除包含优势比的列。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**语法:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**说明:** 显示或隐藏“精度-召回曲线”图，它包含响应变量每个水平的曲线。精度-召回曲线绘制不同阈值下的精度值和召回值。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	Target Level( "Cured" ));Wait( 1 );obj << Precision Recall Curve( 1 );

```

#### ROC Curve

**语法:** obj &lt;&lt; ROC Curve( state=0|1 )

**说明:** 显示或隐藏响应变量每个水平的“受试者操作特征”(ROC) 曲线。ROC 曲线是（1 - 特异度）-灵敏度图。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	Target Level( "Cured" ));Wait( 1 );obj << ROC Curve( 1 );

```

#### Save Probability Formula

**语法:** obj &lt;&lt; Save Probability Formula

**说明:** 将新列保存至数据表。这些新列包含模型预测的概率的公式。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Save Probability Formula;

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 在 Logistic 图中显示或隐藏点。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Show Points( 0 );

```

#### Show Rate Curve

**语法:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**说明:** 在 Logistic 图中显示或隐藏比率曲线。该比率曲线仅在 X 变量的每个值有多个点时有用。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Show Rate Curve( 1 );

```

#### Target Level

**语法:** obj = Logistic(...Target Level( level )...)

**说明:** 指定您想对其概率建模的响应的水平。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	Target Level( "Cured" ));obj << ROC Curve( 1 );

```

## Oneway > ANOM for Ranges

### 项消息

#### Point Options

**语法:** obj &lt;&lt; ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Point Options( "Show Only Points" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; ANOM for Ranges( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**语法:** obj &lt;&lt; ANOM for Ranges( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏中心线（总平均极差）。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏“极差均值分析”图的决策限着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏“极差均值分析”图的决策限线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** obj &lt;&lt; ANOM for Ranges( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含组极差和相应决策限的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### 项消息

#### Point Options

**语法:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**语法:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏中心线（总 ADM 均值）。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏 ANOMV-Levene (ADM) 图的决策限着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏 ANOMV-Levene (ADM) 图的决策限线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含组 ADM 均值和决策限的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### 项消息

#### Graph in Variance Scale

**语法:** obj &lt;&lt; ANOM for Variances( 1, Graph in Variance Scale( state=0|1 ) ); scrobj &lt;&lt; Graph in Variance Scale( state=0|1 )

**说明:** 指定垂直轴的尺度。您可以在标准差和方差之间进行选择。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Graph in Variance Scale( 0 );

```

#### Point Options

**语法:** obj &lt;&lt; ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; ANOM for Variances( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**语法:** obj &lt;&lt; ANOM for Variances( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏中心线（RMSE 或 MSE，取决于 Y 尺度）。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏 ANOMV 图的决策限着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏 ANOMV 图的决策限线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** obj &lt;&lt; ANOM for Variances( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含组标准差（或方差）和决策限的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### 项消息

#### Point Options

**语法:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**语法:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏中心线（总均值）。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏 ANOM-TR 图的决策限着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏 ANOM-TR 图的决策限线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含组变换秩均值和决策限的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### 项消息

#### Point Options

**语法:** obj &lt;&lt; ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; ANOM( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**语法:** obj &lt;&lt; ANOM( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏 ANOM 图中的中心线（总均值）。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; ANOM( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏 ANOM 图的决策限着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** obj &lt;&lt; ANOM( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏 ANOM 图的决策限线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** obj &lt;&lt; ANOM( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含组均值和决策限的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### 项消息

#### Forest Plot

**语法:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) ); scobj &lt;&lt; Forest Plot( state=0|1 )

**说明:** 显示或隐藏等价性检验森林图。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Forest Plot( 0 );

```

#### Pairwise Comparisons

**语法:** obj &lt;&lt; Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) ); scobj &lt;&lt; Equivalence Tests Pairwise Comparisons( state=0|1 )

**说明:** 显示或隐藏所有配对比较的“等价性检验配对比较”报表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests(	4,	0.05,	"Pooled Variance",	"Equivalence",	Equivalence Tests Pairwise Comparisons( 1 ));Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Pairwise Comparisons( 0 );

```

#### Remove

**语法:** scobj &lt;&lt; Remove

**说明:** 删除“等价性检验”报表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests(	4,	0.05,	"Pooled Variance",	"Equivalence",	Equivalence Tests Pairwise Comparisons( 1 ));Wait( 1 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);Wait( 1 );scobj << Remove;

```

#### Scatterplot

**语法:** obj &lt;&lt; Equivalence Tests( ..., Scatterplot( state=0|1 ) ); scobj &lt;&lt; Scatterplot( state=0|1 )

**说明:** 显示或隐藏“等价性检验散点图”。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Scatterplot( 1 ) );Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Scatterplot( 0 );

```

#### Test Report

**语法:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) ); scobj &lt;&lt; Test Report( state=0|1 )

**说明:** 显示或隐藏一个报表，其中汇总了均值或标准差的等价性检验、优效性检验或非劣效性检验。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Test Report( 1 ) );Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### 项消息

#### Confidence Quantile

**语法:** obj &lt;&lt; Each Pair( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; With Best( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; With Control( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**说明:** Muestra u oculta los valores críticos y el nivel de significación utilizado para la comparación de medias. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

#### Connecting Letters Report

**语法:** obj &lt;&lt; Each Pair( 1, Connecting Letters Report( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Connecting Letters Report( state=0|1 ) ); obj &lt;&lt; Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**说明:** Muestra u oculta el informe tradicional codificado por letras en el que las medias que no compartan una letra son significativamente distintas. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

#### Detailed Comparisons Report

**语法:** obj &lt;&lt; Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**说明:** Muestra u oculta un informe detallado para cada comparación. Cada sección muestra la diferencia entre los niveles, el error estándar y los intervalos de confianza, las razones t, los valores p y los grados de libertad. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

#### Difference Matrix

**语法:** obj &lt;&lt; Each Pair( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; With Best( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; With Control( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**说明:** Muestra u oculta una tabla de todas las diferencias de las medias. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Difference Matrix( 1 ) );

```

#### Dunnett's Lower

**语法:** obj &lt;&lt; Dunnett&apos;s Lower( state=0|1 )

**说明:** 显示或隐藏 Dunnett 下单尾 t 检验，它检验均值是否小于控制组的均值。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

#### Dunnett's Upper

**语法:** obj &lt;&lt; Dunnett&apos;s Upper( state=0|1 )

**说明:** 显示或隐藏 Dunnett 上单尾 t 检验，它检验均值是否大于控制组的均值。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

#### LSD Threshold Matrix

**语法:** obj &lt;&lt; Each Pair( 1, LSD Threshold Matrix( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, LSD Threshold Matrix( state=0|1 ) ); obj &lt;&lt; With Best( 1, LSD Threshold Matrix( state=0|1 ) ); obj &lt;&lt; With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**说明:** Muestra u oculta una matriz de diferencias por pares de las medias menos la diferencia menos significativa de esas medias. Un valor positivo indica un par de medias que son significativamente distintas. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

#### Ordered Differences Report

**语法:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**说明:** Muestra u oculta todas las diferencias del lado positivo por pares, el error estándar de la diferencia, los intervalos de confianza, los valores p y un gráfico de la magnitud de la diferencia con intervalos de confianza superpuestos. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

#### Ordered Ratio Report

**语法:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) ); obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**说明:** Muestra u oculta todas las diferencias del lado positivo por pares, el error estándar de la diferencia, los intervalos de confianza, los valores p y un gráfico de la magnitud de la diferencia con intervalos de confianza superpuestos. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

#### Ratio Matrix

**语法:** obj &lt;&lt; Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) ); obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**说明:** Muestra u oculta una tabla de todas las diferencias de las medias. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### 项消息

#### Nemenyi Test

**语法:** obj &lt;&lt; Nemenyi Test( state=0|1 )

**说明:** 显示或隐藏 Nemenyi 检验的报表。Nemenyi 检验是针对非重复分区组数据的均值秩和进行多重比较的配对事后检验。该检验通常在 Friedman 检验得到显著结果之后事后执行。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### 共享项消息

#### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**匿名预设**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**在文件夹内搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**按名称搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Copy Script;

```

#### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Data Table Window;

```

#### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

**带过滤器的平台**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

**常规**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**语法:** obj &lt;&lt; Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**语法:** obj &lt;&lt; Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**语法:** obj &lt;&lt; Report; Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**语法:** obj &lt;&lt; Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 关联的构造器

#### Oneway

**语法:** Oneway( Y( columns ), X( columns ) )

**说明:** 在一组分类组中进行连续响应建模。分析方法包括方差分析、均值比较、均值分析和分位数图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### 列

#### Block

**语法:** obj &lt;&lt; Block( column )

**说明:** 指定分区组变量。指定该列时，响应变量的值依据区组变量中心化。

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );obj << Friedman Rank Test( 1 );

```

#### By

**语法:** obj &lt;&lt; By( column(s) )

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway(	Y( :Height ),	X( :Age ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

#### Freq

**语法:** obj &lt;&lt; Freq( column )

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( :_freqcol ) );

```

#### Grouping

**语法:** obj &lt;&lt; Grouping( column(s) )

**说明:** 指定预测变量。这些变量必须具有有序型或名义型建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Response

**语法:** obj &lt;&lt; Response( column(s) )

**说明:** 指定您想要分析的一个或多个连续响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Weight

**语法:** obj &lt;&lt; Weight( column )

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( :_weightcol ) );

```

#### X

**语法:** obj &lt;&lt; X( column(s) )

**说明:** 指定预测变量。这些变量必须具有有序型或名义型建模类型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Y

**语法:** obj &lt;&lt; Y( column(s) )

**说明:** 指定您想要分析的一个或多个连续响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### 项消息

#### ANOM

**语法:** obj &lt;&lt; ANOM( state=0|1, &lt;chart options&gt; )

**说明:** 将每组均值与总均值相比较。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1 );

```

#### ANOM for Ranges

**语法:** obj &lt;&lt; ANOM for Ranges( state=0|1, &lt;chart options&gt; )

**说明:** 通过比较组极差与总平均极差的不等方差检验。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Ranges( 1 );

```

#### ANOM for Variances

**语法:** obj &lt;&lt; ANOM for Variances( state=0|1, &lt;chart options&gt; )

**说明:** 通过将组标准差与均方根误差相比较，检验方差是否不等。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1 );

```

#### ANOM for Variances with Levene(ADM)

**语法:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( state=0|1, &lt;chart options&gt; )

**说明:** 检验方差是否不等，方法是将中位数绝对偏差 (ADM) 的组均值与总 ADM 均值相比较。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

#### ANOM with Transformed Ranks

**语法:** obj &lt;&lt; ANOM with Transformed Ranks( state=0|1, &lt;chart options&gt; )

**说明:** 比较各组变换秩均值与总变换秩均值。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1 );

```

#### All Graphs

**语法:** obj &lt;&lt; All Graphs( state=0|1 )

**说明:** 显示或隐藏“单因子”图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );Wait( 2 );obj << All Graphs( 0 );

```

#### All Pairs

**语法:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**说明:** 计算 Tukey HSD（真实显著性差异）检验；该检验可保护总误差率。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << All Pairs( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Tukey HSD( 1 );

```

#### Box Plots

**语法:** obj &lt;&lt; Box Plots( state=0|1 )

**说明:** 显示或隐藏每组的离群值箱线图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Box Plots( 1 );

```

#### CDF Plot

**语法:** obj &lt;&lt; CDF Plot( state=0|1 )

**说明:** 在“单因子”报表中显示或隐藏所有组的累积分布函数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << CDF Plot( 1 );

```

#### Cauchy Fit

**语法:** obj &lt;&lt; Cauchy Fit( state=0|1 )

**说明:** 假设误差服从 Cauchy 分布。Cauchy 拟合是处理极端离群值的稳健方法。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Cauchy Fit( 1 );

```

#### Compare Densities

**语法:** obj &lt;&lt; Compare Densities( state=0|1 )

**说明:** 显示或隐藏叠加了每组的概率密度函数的图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Compare Densities( 1 );

```

#### Comparison Circles

**语法:** obj &lt;&lt; Comparison Circles( state=0|1 )

**说明:** 显示或隐藏比较环。仅当多重比较报表打开时该选项才可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << All Pairs( 1 );Wait( 2 );obj << Comparison Circles( 0 );

```

#### Composition of Densities

**语法:** obj &lt;&lt; Composition of Densities( state=0|1 )

**说明:** 显示或隐藏汇总密度图，密度按每组的计数加权。在 X 变量的范围内，“密度成分”图显示每组对总密度的贡献。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Composition of Densities( 1 );

```

#### Connect Means

**语法:** obj &lt;&lt; Connect Means( state=0|1 )

**说明:** 显示或隐藏连接组均值的直线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Connect Means( 1 );

```

#### Dunn All Pairs for Joint Ranks

**语法:** obj &lt;&lt; Dunn All Pairs for Joint Ranks( state=0|1 )

**说明:** 显示或隐藏计算联合秩的用于所有对的 Dunn 检验。该检验使用 Bonferroni 调整，但是可能不保护总误差率。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Dunn All Pairs for Joint Ranks( 1 );

```

#### Dunn With Control for Joint Ranks

**语法:** obj &lt;&lt; Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**说明:** 显示或隐藏计算联合秩的带控制组的 Dunn 检验。该检验使用 Bonferroni 调整，但是可能不保护总误差率。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Dunn With Control for Joint Ranks( 1, {12} );

```

#### Dunnett's

**语法:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**说明:** 计算 Dunnett 检验；该方法检验均值是否不同于控制组的均值。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15} );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Dunnett's"n( 1, {15} );

```

#### Each Pair

**语法:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**说明:** 使用 Student t 检验（对多重检验不进行调整）计算个体配对比较。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Student's t"n( 1 );

```

#### Each Pair Stepwise

**语法:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**说明:** Calcula la prueba de Newman-Keuls, por la que se analiza si existen diferencias entre las medias utilizando la prueba de Rango estudentizado en un procedimiento paso a paso. También se conoce como el método de Student-Newman-Keuls; esta prueba es menos conservadora y más potente que una prueba HSD de Tukey. Consulte los mensajes de Comparaciones de medias univariantes para ver más opciones de visualización.

**JMP添加的版本:** 14

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair Stepwise( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Newman-Keuls"n( 1 );

```

#### Equivalence Tests

**语法:** obj &lt;&lt; Equivalence Tests( difference, &lt;alpha=.05&gt;, &lt;"Pooled Variance"|"Unequal Variances"&gt;, &lt;test type&gt; )

**说明:** 检验在均值间的差异不超过一定量（差值）时认为这些均值基本等价。该检验与常见的显著性检验相逆。alpha、方差假设和检验类型是可选参数。默认情况下，使用“合并方差”假设。默认情况下，检验类型参数是“等价性”，但它还可用于指定优效性或非劣效性检验。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

#### Equivalence Tests of Std Dev

**语法:** obj &lt;&lt; Equivalence Tests of Std Dev( ratio, &lt;alpha=.05&gt;, &lt;test type&gt; )

**说明:** 检验在标准差间的差异不超过一定比时认为这些标准差基本等价。该检验与常见的显著性检验相逆。alpha 和检验类型是可选参数。默认情况下，检验类型参数是“等价性”，但它还可用于指定优效性或非劣效性检验。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

#### Establecer nivel α

**语法:** obj &lt;&lt; Establecer nivel α( alpha=0.05 )

**说明:** 更改报表中的置信限、均值菱形和置信水平值所使用的 Alpha 水平。 默认为“0.05”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means( 1 );Wait( 2 );obj << Set Alpha Level( 0.01 );

```

#### Friedman Rank Test

**语法:** obj &lt;&lt; Friedman Rank Test( state=0|1 )

**说明:** 显示或隐藏基于 Friedman 秩得分的检验。Friedman 秩得分是分区组变量每个水平内的数据的秩。该检验的参数版本是重复测量 ANOVA。仅当在平台启动中指定了区组变量（每个区组中具有相同的观测数）时该选项才可用。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );obj << Friedman Rank Test( 1 );

```

#### Games-Howell

**语法:** obj &lt;&lt; "Games-Howell"n( state=0|1 );

**说明:** 显示或隐藏 Games-Howell 所有均值对的多重比较报表。当不能假设单个组方差相等时，可以在设置中应用该检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Games-Howell"n( 1 );

```

#### Grand Mean

**语法:** obj &lt;&lt; Grand Mean( state=0|1 )

**说明:** 显示或隐藏 Y 变量的总均值。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );Wait( 2 );obj << Grand Mean( 1 );

```

#### Histograms

**语法:** obj &lt;&lt; Histograms( state=0|1 )

**说明:** 在原始图右侧显示或隐藏并排直方图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Histograms( 1 );

```

#### Hsu MCB

**语法:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**说明:** 计算 Hsu MCB（与最佳组多重比较）检验；该方法检验均值是否小于未知最大值。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Best( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Hsu MCB( 1 );

```

#### Jonckheere Terpstra Test

**语法:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**说明:** 显示或隐藏 Jonckheere-Terpstra 检验的报表，它是类间有序差异的非参数检验。它检验响应变量的分布在各类之间没有差异的原假设。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );obj = dt << Oneway( Y( :Height ), X( :age ) );obj << Jonckheere Terpstra Test( 1 );

```

#### Kolmogorov Smirnov Exact Test

**语法:** obj &lt;&lt; Kolmogorov Smirnov Exact Test( state=0|1 )

**说明:** 显示或隐藏 Kolmogorov-Smirnov 精确检验，它基于经验分布函数。该检验确定响应的分布是否在各组之间相同。仅当 X 变量恰好有两个水平时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Kolmogorov Smirnov Exact Test( 1 );

```

#### Kolmogorov Smirnov Test

**语法:** obj &lt;&lt; Kolmogorov Smirnov Test( state=0|1 )

**说明:** 显示或隐藏基于经验分布函数的检验，它检验响应的分布是否在各组之间相同。仅当 X 变量恰好有两个水平时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Kolmogorov Smirnov Test( 1 );

```

#### Legend

**语法:** obj &lt;&lt; Legend( state=0|1 )

**说明:** 显示或隐藏正态分位数、累积分布函数 (CDF) 和密度图的图例。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );Wait( 2 );obj << Legend( 1 );

```

#### Line of Fit

**语法:** obj &lt;&lt; Line of Fit( state=0|1 )

**说明:** 在每个打开的分位数图上显示或隐藏 X 变量每个水平的数据拟合参考线。仅当分位数图打开时该选项才可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Quantile by Actual( 1 );Wait( 2 );obj << Line of Fit( 0 );

```

#### Matching Column

**语法:** obj &lt;&lt; Matching Column( column )

**说明:** 在“单因子”图上基于指定的匹配变量显示或隐藏匹配拟合线和相应的拟合线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );Wait( 2 );obj[1] << Matching Column( :sex );obj[2] << Matching Column( :Age );

```

#### Matching Dotted Lines

**语法:** obj &lt;&lt; Matching Dotted Lines( state=0|1 )

**说明:** 显示或隐藏连接穿过匹配变量缺失水平的均值的虚线。替代缺失单元格均值使用的值是使用双因子 ANOVA 模型获取的。仅当选中“匹配列”选项并且匹配变量的值对于 X 变量的水平均为缺失时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:sex[6 :: 8] = "";obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Matching Column( :sex );Wait( 2 );obj << Matching Dotted Lines( 1 );

```

#### Matching Lines

**语法:** obj &lt;&lt; Matching Lines( state=0|1 )

**说明:** 显示或隐藏连接匹配变量每个水平的均值的线。仅当选中“匹配列”选项时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );obj << Matching Column( :LogHist1 );Wait( 2 );obj << Matching Lines( 0 );

```

#### Mean CI Lines

**语法:** obj &lt;&lt; Mean CI Lines( state=0|1 )

**说明:** 显示或隐藏每组的 95% 置信水平上限和下限处的线。95% 置信水平使用合并标准差计算。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean CI Lines( 1 );

```

#### Mean Diamonds

**语法:** obj &lt;&lt; Mean Diamonds( state=0|1 )

**说明:** 在“单因子”图上显示或隐藏均值菱形。每个均值菱形跨越相应组均值的 95% 置信区间，均值处有一条水平线。95% 置信区间使用合并标准差计算。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean Diamonds( 1 );

```

#### Mean Error Bars

**语法:** obj &lt;&lt; Mean Error Bars( state=0|1 )

**说明:** 显示或隐藏每组的均值以及高于及低于均值一个标准误差的误差条。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean Error Bars( 1 );

```

#### Mean Lines

**语法:** obj &lt;&lt; Mean Lines( state=0|1 )

**说明:** 显示或隐藏每组均值处的线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean Lines( 1 );

```

#### Mean of Means

**语法:** obj &lt;&lt; Mean of Means( state=0|1 )

**说明:** 显示或隐藏组均值的均值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean of Means( 1 );

```

#### Means and Std Dev

**语法:** obj &lt;&lt; Means and Std Dev( state=0|1 )

**说明:** 在“单因子”图上显示或隐藏均值线、误差条和标准差线，并且显示或隐藏汇总统计量表。均值的标准误差使用各个组的标准差。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means and Std Dev( 1 );

```

#### Means/Anova

**语法:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova"n( state=0|1)

**说明:** 在“单因子”图上显示或隐藏均值菱形，并且显示或隐藏 ANOVA 报表。仅当 X 变量有两个以上水平时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means( 1 );

```

#### Means/Anova/Pooled t

**语法:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova/Pooled t"n( state=0|1)

**说明:** 在“单因子”图上显示或隐藏均值菱形，并且显示或隐藏 ANOVA 报表。ANOVA 报表包括假设两组具有相等方差的合并 t 检验报表。仅当 X 变量恰好有两个水平时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Means( 1 );

```

#### Median Exact Test

**语法:** obj &lt;&lt; Median Exact Test( state=0|1 )

**说明:** 显示或隐藏中位数得分分析。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Median Exact Test( 1 );

```

#### Median Test

**语法:** obj &lt;&lt; Median Test( state=0|1 )

**说明:** 显示或隐藏基于中位数秩得分的检验。中位数秩得分为 1 或 0，具体取决于秩是高于还是低于中位数秩。中位数检验是功能最强的误差服从双指数分布的秩检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Median Test( 1 );

```

#### Newman-Keuls

**语法:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**说明:** Calcula la prueba de Newman-Keuls, por la que se analiza si existen diferencias entre las medias utilizando la prueba de Rango estudentizado en un procedimiento paso a paso. También se conoce como el método de Student-Newman-Keuls; esta prueba es menos conservadora y más potente que una prueba HSD de Tukey. Consulte los mensajes de Comparaciones de medias univariantes para ver más opciones de visualización.

**JMP添加的版本:** 14

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair Stepwise( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Newman-Keuls"n( 1 );

```

#### Normal Quantile Label

**语法:** obj &lt;&lt; Normal Quantile Label( state=0|1 )

**说明:** 在每个打开的分位数图上显示或隐藏正态分位数尺度。仅当分位数图打开时该选项才可用。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Quantile by Actual( 1 );Wait( 2 );obj << Normal Quantile Label( 0 );

```

#### Plot Actual by Quantile

**语法:** obj &lt;&lt; Plot Actual by Quantile( state=0|1 )

**说明:** 显示或隐藏“单因子分析”图右侧的分位数图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Actual by Quantile( 1 );

```

#### Plot Quantile by Actual

**语法:** obj &lt;&lt; Plot Quantile by Actual( state=0|1 )

**说明:** 显示或隐藏分位数图，其水平轴上为 Y 变量，垂直轴上为累积概率。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Quantile by Actual( 1 );

```

#### Points

**语法:** obj &lt;&lt; Points( state=0|1 )

**说明:** 在“单因子”图中显示或隐藏数据点。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );Wait( 2 );obj << Points( 0 );

```

#### Points Jittered

**语法:** obj &lt;&lt; Points Jittered( "无"|"自动"|"随机均匀"|"随机正态"|"密度随机"|"堆叠填充"|"网格"|"六边形网格"|"蜂群"="自动" )

**说明:** 指定数据点的散布情况。选中时，数据点随机散布以避免标记重叠。 默认为“自动”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );obj << Points Jittered( "Binned" );

```

#### Points Spread

**语法:** obj &lt;&lt; Points Spread( state=0|1 )

**说明:** 指定数据点的散布情况。选中时，在区间宽度内散布数据点。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Points Spread( 1 );

```

#### Pooled Variance

**语法:** obj &lt;&lt; Ratios with Pooled Variance( state=0|1 );

**说明:** 显示或隐藏每对均值比比较报表。在方差相等的假设下，均值比的合并置信区间是 Fieller 置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Ratios with Pooled Variance( 1 );

```

#### Power

**语法:** obj &lt;&lt; Power( Alpha( from, &lt;to&gt;, &lt;by&gt; ), Sigma( from, &lt;to&gt;, &lt;by&gt; ), Delta( from, &lt;to&gt;, &lt;by&gt; ), Number( from, &lt;to&gt;, &lt;by&gt; ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**说明:** 报告统计功效计算。该参数允许指定 Alpha、sigma、delta 和合计样本大小（数量）的范围。第五个参数指定报表的结果。第六个参数请求绘制功效图。Done 参数关闭“功效对话框”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), All Graphs( 0 ) );obj << Power(	Alpha( 0.05 ),	Sigma( 3.382, 3.73 ),	Delta( 2.79679 ),	Number( 10, 90, 5 ),	Solve for Power,	Power Plot,	Done);

```

#### Proportion of Densities

**语法:** obj &lt;&lt; Proportion of Densities( state=0|1 )

**说明:** 显示或隐藏 X 变量的每个水平对密度的贡献图。贡献显示为在 X 变量的范围内总密度的比例。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Proportion of Densities( 1 );

```

#### Quantiles

**语法:** obj &lt;&lt; Quantiles( state=0|1 )

**说明:** 在“单因子”图上显示或隐藏箱线图，并且显示或隐藏分位数报表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Quantiles( 1 );

```

#### Robust Fit

**语法:** obj &lt;&lt; Robust Fit( state=0|1 )

**说明:** 生成 Huber 估计值，它对于小残差等价于最小二乘残差，对于大残差等价于最小绝对值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Robust Fit( 1 );

```

#### Robust Means Lines

**语法:** obj &lt;&lt; Robust Means Lines( state=0|1 )

**说明:** 显示或隐藏每组稳健均值处的线。仅当选中“稳健”选项时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Robust Fit( 1 );obj << Robust Means Lines( 1 );

```

#### Save Normal Quantiles

**语法:** obj &lt;&lt; Save Normal Quantiles

**说明:** 保存 X 变量每个水平的正态分位数值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Normal Quantiles;

```

#### Save Predicted

**语法:** obj &lt;&lt; Save Predicted

**说明:** 针对 X 变量的每个水平保存 Y 变量的预测均值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Predicted;

```

#### Save Residuals

**语法:** obj &lt;&lt; Save Residuals

**说明:** 保存值，计算方式为 Y 变量减去 X 变量每个水平内的 Y 变量的均值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Residuals;

```

#### Save Standardized

**语法:** obj &lt;&lt; Save Standardized

**说明:** 针对 X 变量的每个水平保存 Y 变量的标准化值。标准化值是中心化的响应除以每个水平内的标准差。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Standardized;

```

#### Select Group

**语法:** obj &lt;&lt; Select Group( X value )

**说明:** 选择组，以便突出显示其圆圈。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );Wait( 2 );obj << Select Group( 14 );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**说明:** 更改报表中的置信限、均值菱形和置信水平值所使用的 Alpha 水平。 默认为“0.05”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means( 1 );Wait( 2 );obj << Set Alpha Level( 0.01 );

```

#### Set α Level

**语法:** obj &lt;&lt; Set α Level( alpha=0.05 )

**说明:** 更改报表中的置信限、均值菱形和置信水平值所使用的 Alpha 水平。 默认为“0.05”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means( 1 );Wait( 2 );obj << Set Alpha Level( 0.01 );

```

#### Standard Deviations

**语法:** obj &lt;&lt; Standard Deviations

**说明:** 启动一个窗口，它包含标准差的等价性、优效性或非劣效性检验选项。指定临界比值。

#### Std Dev Lines

**语法:** obj &lt;&lt; Std Dev Lines( state=0|1 )

**说明:** 显示或隐藏高于或低于每组均值一个标准差的线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Std Dev Lines( 1 );

```

#### Steel With Control

**语法:** obj &lt;&lt; Steel With Control( state = 0|1, {control level} )

**说明:** 显示或隐藏保护总误差率的 Steel 检验，用于将所有其他组与控制组进行比较。它是 Dunnett 方法的非参数版本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Steel With Control( 1, {12} );

```

#### Steel-Dwass All Pairs

**语法:** obj &lt;&lt; "Steel-Dwass All Pairs"n( state=0|1 )

**说明:** 显示或隐藏保护总误差率的 Steel-Dwass 检验。它是 Tukey 方法的非参数版本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Steel-Dwass All Pairs"n( 1 );

```

#### Student's t

**语法:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**说明:** 使用 Student t 检验（对多重检验不进行调整）计算个体配对比较。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Student's t"n( 1 );

```

#### Tukey HSD

**语法:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**说明:** 计算 Tukey HSD（真实显著性差异）检验；该检验可保护总误差率。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << All Pairs( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Tukey HSD( 1 );

```

#### Unequal Variances

**语法:** obj &lt;&lt; Unequal Variances( state=0|1 )

**说明:** 显示或隐藏组方差相等的四个检验。该选项还生成 Welch 检验，它是用于在组内方差不等时比较均值的 ANOVA 检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Unequal Variances( 1 );

```

#### Unpooled Variance

**语法:** obj &lt;&lt; Ratios with Unpooled Variance( state=0|1 );

**说明:** 显示或隐藏每对均值比比较报表。在方差不等的假设下，将计算基于 Satterthwaite 的非合并均值比置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Ratios with Unpooled Variance( 1 );

```

#### Van Der Waerden Exact Test

**语法:** obj &lt;&lt; Van Der Waerden Exact Test( state=0|1 )

**说明:** 显示或隐藏 Van der Waerden 得分（或正态得分）分析。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Van Der Waerden Exact Test( 1 );

```

#### Wilcoxon Each Pair

**语法:** obj &lt;&lt; Wilcoxon Each Pair( state=0|1 )

**说明:** 显示或隐藏适用于所有可能的个体比较的 Wilcoxon 检验，对多重检验不进行调整。它是“每对，Student t”方法的非参数版本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Wilcoxon Each Pair( 1 );

```

#### Wilcoxon Exact Test

**语法:** obj &lt;&lt; Wilcoxon Exact Test( state=0|1 )

**说明:** 显示或隐藏 Wilcoxon 得分分析，其针对每对水平使用精确方法。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Wilcoxon Exact Test( 1 );

```

#### Wilcoxon Test

**语法:** obj &lt;&lt; Wilcoxon Test( state=0|1 )

**说明:** 显示或隐藏基于 Wilcoxon 秩得分的检验。Wilcoxon 秩得分是数据的简单秩。Wilcoxon 检验是功能最强的误差服从 Logistic 分布的秩检验。若 X 变量恰好有两个水平，则 Wilcoxon 检验等价于 Mann-Whitney 检验。若 X 变量有两个以上水平，则执行 Kruskal-Wallis 检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Wilcoxon Test( 1 );

```

#### With Best

**语法:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**说明:** 计算 Hsu MCB（与最佳组多重比较）检验；该方法检验均值是否小于未知最大值。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Best( 1 );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Hsu MCB( 1 );

```

#### With Control

**语法:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**说明:** 计算 Dunnett 检验；该方法检验均值是否不同于控制组的均值。请参见“单因子均值比较”消息以了解更多显示选项的信息。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15} );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Dunnett's"n( 1, {15} );

```

#### X Axis Proportional

**语法:** obj &lt;&lt; X Axis Proportional( state=0|1 )

**说明:** 指定水平轴上的间距。选中时，间距与每个水平的观测数成比例。当选中“匹配列”选项时该选项不可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );Wait( 2 );obj << X Axis Proportional( 1 );

```

#### t Test

**语法:** obj &lt;&lt; t Test( state=0|1 )

**说明:** 显示或隐藏假设方差不等的 t 检验报表。仅当 X 变量恰好有两个水平时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << t Test( 1 );

```

#### van der Waerden Test

**语法:** obj &lt;&lt; van der Waerden Test( state=0|1 )

**说明:** 显示或隐藏基于 Van der Waerden 秩得分的检验。Van der Waerden 秩得分是数据的秩除以 1 加上得分值。得分值是通过应用正态分布函数的逆函数变换为正态得分的观测数。Van der Waerden 检验是功能最强的误差服从正态分布的秩检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << van der Waerden Test( 1 );

```

