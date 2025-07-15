# Principal Components



## 关联的构造器

### Principal Components

**语法:** Principal Components( Y( columns ) )

**说明:** 根据比变量个数更少的几个独立线性组合（主成分），对这些变量中的变异进行建模。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

## 列

### By

**语法:** obj = Principal Components(...&lt;By( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### Columns

**语法:** obj = Principal Components(...&lt;Columns( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于分析成分的变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Freq

**语法:** obj = Principal Components(...&lt;Freq( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Supplementary Variable

**语法:** obj &lt;&lt; Supplementary Variable( column(s) )

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**语法:** obj = Principal Components(...&lt;Weight( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**语法:** obj = Principal Components(...&lt;Y( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于分析成分的变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**语法:** obj &lt;&lt; Z( column(s) )

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

## 项消息

### 3D Score Plot

**语法:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**说明:** 显示或隐藏三维散点图，主成分在三维空间中显示为射线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << "3D Score Plot"n( 1 );

```

### Arrow Lines

**语法:** obj &lt;&lt; Arrow Lines( state=0|1 )

**说明:** 在图形上显示或隐藏箭头线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Arrow Lines( 0 );

```

### Bartlett Test

**语法:** obj &lt;&lt; Bartlett Test( state=0|1 )

**说明:** 显示或隐藏每个主成分的齐性检验结果的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Bartlett Test( 1 );

```

### Biplot

**语法:** obj &lt;&lt; Biplot( number )

**说明:** 显示或隐藏一个图，该图叠加了指定数量的成分的得分图和载荷图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Biplot( 2 );

```

### Cluster Components

**语法:** obj &lt;&lt; Cluster Components( state=0|1 )

**说明:** 显示或隐藏“标准化成分”报表，它包含每个聚类中第一主成分的特征向量。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**语法:** obj &lt;&lt; Cluster Members( state=0|1 )

**说明:** 显示或隐藏每个聚类中的变量的报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**语法:** obj &lt;&lt; Cluster Summary( state=0|1 )

**说明:** 显示或隐藏汇总变量聚类结果的报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**语法:** obj &lt;&lt; Cluster Variables( state=0|1 )

**说明:** 将变量划分为相似组。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Cluster Variables( 1 );

```

### Color Map on Correlations

**语法:** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**说明:** 显示或隐藏变量之间相关性的色图，其中变量的排列方式是使同一聚类的成员在图中相邻。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Coordinate Matrix

**语法:** obj &lt;&lt; Coordinate Matrix( state=0|1 )

**说明:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" )
);
obj << Coordinate  Matrix( 1 );

```

### Correlations

**语法:** obj &lt;&lt; Correlations( state=0|1 )

**说明:** 显示或隐藏相关系数矩阵，该矩阵汇总每对 Y 变量之间线性关系的强度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Correlations( 1 );

```

### Covariance Matrix

**语法:** obj &lt;&lt; Covariance Matrix( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Covariance Matrix( 1 );

```

### Eigenvalues

**语法:** obj &lt;&lt; Eigenvalues( state=0|1 )

**说明:** 显示或隐藏排序的特征值、它们的变异百分比和累积变异百分比。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**语法:** obj &lt;&lt; Eigenvectors( state=0|1 )

**说明:** 显示或隐藏每个主成分的特征向量的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Eigenvectors( 1 );

```

### Estimation Method

**语法:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置用于计算相关性的估计方法。

若没有缺失值，则默认方法为“逐行”。

若有缺失值，并且变量数小于等于 10，同时行数小于等于 5000，则默认方法为“REML”。

若有缺失值，并且变量数超过 10 或者行数超过 5000，则默认方法为“配对”。 默认为“默认”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "REML" )
);

```

### Factor Analysis

**语法:** obj &lt;&lt; Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**说明:** 显示或隐藏主成分的因子旋转模式的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Factor Analysis( "ML", "SMC", 2, "Varimax" );

```

### Formatted Loading Matrix

**语法:** obj &lt;&lt; Formatted Loading Matrix( state=0|1 )

**说明:** 显示或隐藏包含格式化成分载荷的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Formatted Loading Matrix( 1 );

```

### Impute Missing Data

**语法:** obj &lt;&lt; Impute Missing Data

**说明:** 填补所有 Y 变量的缺失值，并创建新的数据表，其中包含现有值和新填补的缺失数据值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**语法:** obj &lt;&lt; Launch Fit Model

**说明:** 启动“拟合模型”，以最典型变量作为预测变量。若您想使用最典型变量作为预测变量，则需要先选择“保存聚类成分”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**语法:** obj &lt;&lt; Loading Matrix( number )

**说明:** 显示或隐藏包含成分载荷的表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Matrix( 1 );

```

### Loading Plot

**语法:** obj &lt;&lt; Loading Plot( number )

**说明:** 显示或隐藏因子载荷二维表示的图矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Plot( 2 );

```

### Missing value imputation

**语法:** obj = Principal Components(...Missing value imputation( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 通过矩阵完成插补缺失值。该选项仅适用于宽方法。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Estimation Method( "Truncated SVD" ),
	Number of Components( 6 ),
	Missing value imputation( 0 ),
	Standardize( "Standardized" )
);

```

### Model Driven Multivariate Control Chart

**语法:** obj &lt;&lt; Model Driven Multivariate Control Chart

**说明:** 为指定数量的成分启动“模型驱动的多元控制图”

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**语法:** obj = Principal Components(...Number of Components( number=10 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要提取的成分数。要缩短计算时间，请输入较少数量的成分。 默认为“10”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Sparse" ),
	Number of Components( 3 ),
	Standardize( "Standardized" )
);

```

### Outlier Analysis

**语法:** obj &lt;&lt; Outlier Analysis( state=0|1 )

**说明:** 显示或隐藏“离群值分析”报表，该报表使您可以通过 T² 和贡献统计量检测到数据中的离群值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	Standardize( "Standardized" ),
	Outlier Analysis( 1 )
);

```

### Partial Contribution of Variables

**语法:** obj &lt;&lt; Partial Contribution of Variables( number )

**说明:** 显示或隐藏包含变量的部分贡献的表，以及前三个主成分的部分贡献的图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Partial Contribution of Variables(
	Plot of Partial Contribution of Variables( Overview( 3 ), "Side by side" )
);

```

### Profiler for Predicteds

**语法:** obj &lt;&lt; Profiler for Predicteds

**说明:** 使用指定的成分数启动预测值的刻画器。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Profiler for Predicteds( 2 );

```

### Publish Components Formulas

**语法:** obj &lt;&lt; Publish Components Formulas( number )

**说明:** 创建指定数量的主成分公式并将它们另存为“公式存储库”平台中的公式列脚本。若“公式存储库”报表未打开，该选项会创建“公式存储库”报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Estimation Method( "Wide" )
);
obj << Publish Components Formulas( 3 );

```

### Publish Normalized DModX Formula

**语法:** obj &lt;&lt; Publish Normalized DModX Formula( number )

**说明:** 将基于指定数量的主成分的标准化 DModX 公式另存为“公式存储库”平台中的公式列脚本。若“公式存储库”报表未打开，该选项会创建“公式存储库”报表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Publish Normalized DModX Formula( 3 );

```

### Save Cluster Components

**语法:** obj &lt;&lt; Save Cluster Components

**说明:** 将每个聚类的聚类（第一主）成分保存到数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**语法:** obj &lt;&lt; Save Imputed Formula

**说明:** 插补 Y 列值缺失的值。创建带有插补公式的新列并将其保存至原始数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**语法:** obj &lt;&lt; Save Individual Partial Contributions( number )

**说明:** 在数据表的新列中保存单值部分贡献。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**语法:** obj &lt;&lt; Save Individual Squared Cosines( number )

**说明:** 在数据表的新列中保存单值平方余弦。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**语法:** obj &lt;&lt; Save Low Rank Principal Components( number )

**说明:** 保存低秩数据的主成分得分，已清除离群值和噪声。该选项仅适用于稳健 PCA 估计方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "Robust PCA" ),
	Number of Components( 3 )
);
obj << Save Low Rank Principal Components( 3 );

```

### Save Normalized DModX

**语法:** obj &lt;&lt; Save Normalized DModX( number )

**说明:** 在数据表的新列中保存标准化 DModX 值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**语法:** obj &lt;&lt; Save Predicteds( number )

**说明:** 将预测变量随同指定数量的主成分一同保存到数据表中的新列。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**语法:** obj &lt;&lt; Save Predicteds as Component Formulas

**说明:** 将指定数量的主成分的成分公式保存到数据表中的新列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Save Predicteds As Component Formulas( 3 );

```

### Save Principal Component Script

**语法:** obj &lt;&lt; Save Principal Component Script( number )

**说明:** 将脚本保存到脚本窗口中，运行该脚本时将为给定数量的主成分在数据表中创建新列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << save principal Component script( 3 );

```

### Save Principal Component Values

**语法:** obj &lt;&lt; Save Principal Component Values( number )

**说明:** 在数据表的新非公式列中保存指定数量的主成分，包括来自补缺的单元格。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Component Values( 3 );

```

### Save Principal Components

**语法:** obj &lt;&lt; Save Principal Components( number )

**说明:** 在数据表的新公式列中保存指定数量的主成分。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components( 3 );

```

### Save Principal Components with Imputation

**语法:** obj &lt;&lt; Save Principal Components with Imputation( number )

**说明:** 使用插补缺失值后计算出的指定数量的主成分，并将其保存到数据表的新列中。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components with Imputation( 3 );

```

### Save Rotated Components

**语法:** obj &lt;&lt; Save Rotated Components

**说明:** 将旋转成分保存至数据表中的新列。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components;

```

### Save Rotated Components with Imputation

**语法:** obj &lt;&lt; Save Rotated Components with Imputation

**说明:** 在数据表的新列中保存插补缺失值后计算出的旋转成分。注意: 该选项仅在运行了“因子旋转”后可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components with Imputation;

```

### Scatterplot Matrix

**语法:** obj &lt;&lt; Scatterplot Matrix( number )

**说明:** 显示或隐藏指定数量的主成分的得分矩阵和载荷图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**语法:** obj &lt;&lt; Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1-sigma"|"2-sigma"|"3-sigma"|"其他..." )

**说明:** 更改每对主成分的得分图上置信椭圆的 alpha 水平。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipse Coverage( 0.9 );

```

### Score Ellipses

**语法:** obj &lt;&lt; Score Ellipses( state=0|1 )

**说明:** 在得分图上为每对主成分显示或隐藏置信椭圆。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipses( 1 );

```

### Score Plot

**语法:** obj &lt;&lt; Score Plot( number )

**说明:** 显示或隐藏一个散点图矩阵，其中包含每对指定数量的主成分的得分。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot( 2 );

```

### Score Plot with Imputation

**语法:** obj &lt;&lt; Score Plot with Imputation( number of principal components )

**说明:** 显示或隐藏一个散点图矩阵，其中包含每对指定数量的主成分的得分，缺失值将通过补缺法补齐。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot with Imputation( 2 );

```

### Scree Plot

**语法:** obj &lt;&lt; Scree Plot( state=0|1 )

**说明:** 显示或隐藏每个成分特征值的线图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Scree Plot( 1 );

```

### Select component

**语法:** obj &lt;&lt; Select component( &lt;specify dimension to plot&gt; )

**说明:** 选择用作汇总图中的轴的维。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" )
);
obj << Select Component( 1, 3 );

```

### Show Supplementary Variable

**语法:** obj &lt;&lt; Show Supplementary Variable( state=0|1 )

**说明:** 在图形上显示或隐藏补充变量的箭头线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);
obj << Show Supplementary Variable( 0 );

```

### Squared Cosines of Variables

**语法:** obj &lt;&lt; Squared Cosines of Variables( number )

**说明:** 显示或隐藏包含变量的平方余弦的表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Squared Cosines of Variables(
	Plot of Squared Cosines of Variables( Overview( 3 ), "Stacked", "Horizontal" )
);

```

### Standardize

**语法:** obj = Principal Components(...Standardize( "标准化"|"未统一尺度"|"未统一尺度且未中心化" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定每列是否应单独标准化。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" )
);

```

### Summary Plots

**语法:** obj &lt;&lt; Summary Plots( state=0|1 )

**说明:** 显示或隐藏包含特征值图、得分图和载荷图的分级显示节点。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Summary Plots( 1 );

```

### on Correlations

**语法:** Principal Components( Y( columns ), On Correlations )

**说明:** 使用相关性矩阵创建主成分报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**语法:** Principal Components( Y( columns ), On Covariances )

**说明:** 使用协方差矩阵创建主成分报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**语法:** Principal Components( Y( column ), On Unscaled )

**说明:** 使用未统一尺度的数据创建主成分报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

