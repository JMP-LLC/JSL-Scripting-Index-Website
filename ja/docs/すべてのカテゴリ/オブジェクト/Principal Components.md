# Principal Components



## 列

### By

**構文:** obj = Principal Components(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

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

**構文:** obj = Principal Components(...&lt;Columns( column(s) )&gt;...)

**説明:** 主成分分析に使う変数を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Freq

**構文:** obj = Principal Components(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

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

**構文:** obj &lt;&lt; Supplementary Variable( column(s) )

**説明:** 追加変数を指定する。追加変数は、モデルの推定には使用されないため、追加変数を含めても推定結果には影響しない。追加変数は、データの解釈やその後の分析に役立つ。

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

**構文:** obj = Principal Components(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

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

**構文:** obj = Principal Components(...&lt;Y( column(s) )&gt;...)

**説明:** 主成分分析に使う変数を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**構文:** obj &lt;&lt; Z( column(s) )

**説明:** 追加変数を指定する。追加変数は、モデルの推定には使用されないため、追加変数を含めても推定結果には影響しない。追加変数は、データの解釈やその後の分析に役立つ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

## 関連するコンストラクター

### Principal Components

**構文:** Principal Components( Y( columns ) )

**説明:** 複数の変数の変動をできるだけ説明する、少数の線形結合(主成分)を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

## 項目のメッセージ

### 3D Score Plot

**構文:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**説明:** 主成分スコア(もしくは因子スコア)をプロットした三次元散布図の表示/非表示を切り替える。このプロットには、バイプロット線も描かれる。

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

**構文:** obj &lt;&lt; Arrow Lines( state=0|1 )

**説明:** グラフ上における矢印線の表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Bartlett Test( state=0|1 )

**説明:** 各主成分に対する等質性検定に関するレポートの表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Biplot( number )

**説明:** 指定された個数の成分に関して、スコアプロットと負荷量プロットを重ね合わせたプロットを表示する。

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

**構文:** obj &lt;&lt; Cluster Components( state=0|1 )

**説明:** 「標準化変数に対する係数」レポートの表示/非表示を切り替える。このレポートには、各クラスターの第1主成分の固有ベクトルが含まれる。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**構文:** obj &lt;&lt; Cluster Members( state=0|1 )

**説明:** 各クラスターに含まれる変数のレポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**構文:** obj &lt;&lt; Cluster Summary( state=0|1 )

**説明:** 「変数のクラスター」の結果を要約したレポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**構文:** obj &lt;&lt; Cluster Variables( state=0|1 )

**説明:** 似通った変数を、同じクラスターに分類していく。

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

**構文:** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**説明:** 変数間の相関を示すカラーマップの表示/非表示を切り替える。この相関のカラーマップでは、同じクラスターに属する変数が近くに表示されるように、変数が並べられている。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Coordinate Matrix

**構文:** obj &lt;&lt; Coordinate Matrix( state=0|1 )

**説明:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

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

**構文:** obj &lt;&lt; Correlations( state=0|1 )

**説明:** 相関係数行列の表示/非表示を切り替える。相関係数は、Y変数の各ペアにおける線形関係の強さを示す指標である。

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

**構文:** obj &lt;&lt; Covariance Matrix( state=0|1 )

**説明:** 共分散行列の表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Eigenvalues( state=0|1 )

**説明:** 固有値、寄与率、累積寄与率の表示/非表示を切り替える。なお、これらは、固有値が大きい順に表示される。

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

**構文:** obj &lt;&lt; Eigenvectors( state=0|1 )

**説明:** 固有ベクトルに関するレポートの表示/非表示を切り替える。

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

**構文:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)

**説明:** 相関を計算するための推定法を設定する。

欠測値がない場合、デフォルトはリストワイズ。

欠測値があり、変数の数が10以下、行数が5000以下の場合、デフォルトはREML。

欠測値があり、変数の数が10を超えるか、行数が5000を超える場合、デフォルトはペアワイズ。 デフォルトの値は"デフォルト"。

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

**構文:** obj &lt;&lt; Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**説明:** 因子分析（もしくは主成分分析）を行い、得られた因子（もしくは主成分）を回転する。

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

**構文:** obj &lt;&lt; Formatted Loading Matrix( state=0|1 )

**説明:** 濃淡表示された主成分負荷量の表の表示／非表示を切り替える。

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

**構文:** obj &lt;&lt; Impute Missing Data

**説明:** すべてのY変数の欠測値を補完し、既存の値と新しく補完した欠測値を含む新しいデータテーブルを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**構文:** obj &lt;&lt; Launch Fit Model

**説明:** 最も代表的な変数を説明変数として「モデルのあてはめ」を起動する。なお、クラスター成分を説明変数として使いたい場合には、[クラスター成分の保存]コマンドを選択すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**構文:** obj &lt;&lt; Loading Matrix( number )

**説明:** 主成分負荷量の表の表示／非表示を切り替える。

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

**構文:** obj &lt;&lt; Loading Plot( number )

**説明:** 因子負荷量を2次元で表現したプロットを行列形式で配置したレポートの表示/非表示を切り替える。

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

**構文:** obj = Principal Components(...Missing value imputation( state=0|1 )...)

**説明:** 行列補完により欠測値を補完する。このオプションは横長データに対する方法に適用される。 デフォルトではオン。

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

**構文:** obj &lt;&lt; Model Driven Multivariate Control Chart

**説明:** 指定された次元までの主成分に基づいて、「モデルに基づく多変量管理図」を起動する。

**JMP追加されたバージョン:** 16

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

**構文:** obj = Principal Components(...Number of Components( number=10 )...)

**説明:** 抽出する成分の個数を設定する。計算時間を短縮するには、少ない数を入力する。 デフォルトの値は"10"。

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

**構文:** obj &lt;&lt; Outlier Analysis( state=0|1 )

**説明:** 外れ値分析の表示/非表示を切り替える。この外れ値分析では、T²や寄与度に基づいて外れ値を探し出すことができる。

**JMP追加されたバージョン:** 14

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

**構文:** obj &lt;&lt; Partial Contribution of Variables( number )

**説明:** 「変数の偏寄与率」に関する表と、最初の3主成分の偏寄与率を示すプロットの表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Profiler for Predicteds

**説明:** 指定された次元までの主成分スコアに対する予測値を描いたプロファイルを起動する。

**JMP追加されたバージョン:** 16

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

**構文:** obj &lt;&lt; Publish Components Formulas( number )

**説明:** 主成分の計算式を指定された個数だけ作成し、「計算式デポ」プラットフォームに計算式列のスクリプトとして保存する。「計算式デポ」レポートが開いていない場合は、このオプションによって「計算式デポ」のウィンドウが呼び出される。

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

**構文:** obj &lt;&lt; Publish Normalized DModX Formula( number )

**説明:** 指定された個数の主成分に基づく正規化されたXモデルまでの距離の計算式を、「計算式デポ」プラットフォームに計算式列のスクリプトとして保存する。「計算式デポ」レポートが開いていない場合は、このオプションによって「計算式デポ」のウィンドウが呼び出される。

**JMP追加されたバージョン:** 14

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

**構文:** obj &lt;&lt; Save Cluster Components

**説明:** 各クラスターのクラスター成分(第1主成分)をデータテーブルに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**構文:** obj &lt;&lt; Save Imputed Formula

**説明:** Y列の値が欠測しているところでは値を補完する。元のデータテーブルに新しい列を作成して、補完の計算式を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**構文:** obj &lt;&lt; Save Individual Partial Contributions( number )

**説明:** データ行の偏寄与率を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**構文:** obj &lt;&lt; Save Individual Squared Cosines( number )

**説明:** データ行の余弦2乗を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**構文:** obj &lt;&lt; Save Low Rank Principal Components( number )

**説明:** 外れ値に対してロバストな低ランク近似により求められた主成分スコアを保存する。このオプションはロバスト主成分分析にのみ適用される。

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

**構文:** obj &lt;&lt; Save Normalized DModX( number )

**説明:** データテーブルの新しい列に、Xモデルまでの正規化した距離を保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**構文:** obj &lt;&lt; Save Predicteds( number )

**説明:** 指定の個数の主成分から計算される予測値を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**構文:** obj &lt;&lt; Save Predicteds as Component Formulas

**説明:** 指定された個数の主成分スコアを求める計算式を、データテーブルの新しい列に保存する。

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

**構文:** obj &lt;&lt; Save Principal Component Script( number )

**説明:** 指定された個数の主成分を含む列をデータテーブルに作成するスクリプトを、スクリプトウィンドウに保存する。

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

**構文:** obj &lt;&lt; Save Principal Component Values( number )

**説明:** 指定された個数の主成分を、データテーブルの新しい列（補完されたセルの列を含む）に保存する。この時、計算式としてではなく、データ値として保存する。

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

**構文:** obj &lt;&lt; Save Principal Components( number )

**説明:** 指定された個数の主成分を、データテーブルの新しい計算式列に保存する。

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

**構文:** obj &lt;&lt; Save Principal Components with Imputation( number )

**説明:** 欠測値を補完して計算された主成分を、指定の数だけ、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Save Rotated Components

**説明:** 成分の回転を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Save Rotated Components with Imputation

**説明:** 欠測値を補完して計算された回転後の成分を、データテーブルの新しい列に保存する。注:このオプションは［因子分析］が実行された後にのみ使用可能。

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

**構文:** obj &lt;&lt; Scatterplot Matrix( number )

**説明:** 指定された個数の主成分に対して、スコアと負荷量をプロットした行列の表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1シグマ"|"2シグマ"|"3シグマ"|"その他..." )

**説明:** 主成分スコアをプロットしたグラフにおける信頼楕円の有意水準を変更する。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Score Ellipses( state=0|1 )

**説明:** 主成分スコアをプロットしたグラフにおいて、信頼楕円の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Score Plot( number )

**説明:** 指定された個数の主成分に対し、主成分スコアをプロットした散布図行列の表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Score Plot with Imputation( number of principal components )

**説明:** 指定された個数の主成分に対し、主成分スコアをプロットした散布図行列の表示/非表示を切り替える。この際、欠測値は補完される。

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

**構文:** obj &lt;&lt; Scree Plot( state=0|1 )

**説明:** 各成分の固有値を折れ線で描いたプロットの表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Select component( &lt;specify dimension to plot&gt; )

**説明:** 要約プロットのX軸とY軸に表示する次元を選択する。

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

**構文:** obj &lt;&lt; Show Supplementary Variable( state=0|1 )

**説明:** グラフにおいて、追加変数の矢印線の表示/非表示を切り替える。

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

**構文:** obj &lt;&lt; Squared Cosines of Variables( number )

**説明:** 「変数の余弦2乗」に関する表の表示/非表示を切り替える。

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

**構文:** obj = Principal Components(...Standardize( "標準化"|"非尺度化"|"非尺度化・非中心化" )...)

**説明:** 各列を列ごとに標準化するかどうかを指定する。

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

**構文:** obj &lt;&lt; Summary Plots( state=0|1 )

**説明:** 固有値のプロット、スコアプロット、負荷量プロットを含んだアウトラインの表示/非表示を切り替える。 デフォルトではオン。

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

**構文:** Principal Components( Y( columns ), On Correlations )

**説明:** 相関行列に基づく主成分分析のレポートを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**構文:** Principal Components( Y( columns ), On Covariances )

**説明:** 共分散行列に基づく主成分分析のレポートを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**構文:** Principal Components( Y( column ), On Unscaled )

**説明:** 原データに基づく主成分分析のレポートを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

