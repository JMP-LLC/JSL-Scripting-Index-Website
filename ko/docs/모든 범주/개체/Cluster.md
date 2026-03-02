# Cluster



## 열

### Attribute ID

**구문:** obj = Y(...&lt;Attribute ID( column(s) )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 쌓은 데이터의 경우 속성을 식별합니다. 데이터가 누적되지 않은 경우에는 열(변수)입니다.

### Columns

**구문:** obj &lt;&lt; Columns( column(s) )

### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

### Label

**구문:** obj &lt;&lt; Label( column )

### Object ID

**구문:** obj = Y(...&lt;Object ID( column(s) )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 쌓은 데이터의 경우 군집에 대한 개별값을 식별합니다. 그렇지 않은 경우에는 각 데이터 행에 대한 집계에 사용됩니다.

### Ordering

**구문:** obj &lt;&lt; Ordering( column )

### Weight

**구문:** obj &lt;&lt; Weight( column )

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

### Y

**구문:** obj &lt;&lt; Y( column(s) )

## Hierarchical Cluster

### 연결된 생성자

#### Hierarchical Cluster

**구문:** Hierarchical Cluster( Y( columns ) )

**설명:** 연속형 또는 범주형 변수를 기준으로 행을 군집화합니다. 계층적 군집화 과정에서는 먼저 각 행을 개별 군집으로 처리한 후 계속해서 한 번에 두 개씩 군집을 결합합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Hierarchical Cluster(	Y( :birth, :death ),	Label( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### 항목 메시지

#### Add Spatial Measures

**구문:** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 결함 패턴을 군집화하는 데 도움이 되도록 공간 성분을 선택하고 가중치를 적용할 수 있습니다. 지정된 데이터 구조가 &apos;쌓인 데이터&apos;인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );obj = dt << Hierarchical Cluster(	Y( :Defects ),	Object ID( :Lot, :Wafer ),	Attribute ID( :X_Die, :Y_Die ),	Method( "Ward" ),	Standardize Data( 0 ),	Dendrogram Scale( "Distance Scale" ),	Number of Clusters( 12 ),	g    Add Spatial Measures(		Attributes( 1 ),		Angle( 1 ),		Radius( 1 ),		Streak Angle( 1 ),		Streak Distance( 1 )	));

```

#### Cluster Criterion

**구문:** obj &lt;&lt; Cluster Criterion( state=0|1 )

**설명:** 전체 군집 수 범위에 대한 CCC(Cubic Clustering Criterion)를 표시하거나 숨깁니다. CCC는 군집 수를 추정하는 데 사용되며 값이 클수록 더 적합하다는 것을 나타냅니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Cluster Criterion );

```

#### Cluster Summary

**구문:** obj &lt;&lt; Cluster Summary( state=0|1 )

**설명:** 지정된 각 군집 수에 대한 요약 통계량을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Hierarchical Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Cluster Summary);

```

#### Clustering History

**구문:** obj &lt;&lt; Clustering History( state=0|1 )

**설명:** 결합 순서대로 병합 기록을 표시하거나 숨깁니다. 테이블은 거리를 포함하며 가장 가까운 것부터 순서대로 정렬됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Hierarchical Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Clustering History( 0 ));

```

#### Color Clusters

**구문:** obj &lt;&lt; Color Clusters( state=0|1 )

**설명:** 소속 군집에 따라 행과 덴드로그램 라벨의 색상을 지정합니다. 군집 수가 변경되면 색상이 업데이트됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Color Clusters( 1 );

```

#### Color Map

**구문:** obj &lt;&lt; Color Map

**설명:** 덴드로그램 옆에 색상 맵을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Color Map( Green to Black to Red );Wait( 1 );obj << Color Map( Blue to Gray to Red );

```

#### Column Cluster Criterion

**구문:** obj &lt;&lt; Column Cluster Criterion( state=0|1 )

#### Column Dendrogram Position

**구문:** obj &lt;&lt; Column Dendrogram Position( "아래"|"위" )

**설명:** 이원 군집화를 사용할 때 열의 덴드로그램 위치를 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Number of Clusters( 5 ),	Two Way Clustering,	Column Dendrogram Position( "Above" ));

```

#### Column Label Position

**구문:** obj &lt;&lt; Column Label Position( "아래"|"위" )

**설명:** 이원 군집화를 사용할 때 열의 덴드로그램에서 라벨 위치를 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Number of Clusters( 5 ),	Two Way Clustering,	Distance Graph( 0 ),	Column Label Position( "Above" ));

```

#### Constellation Plot

**구문:** obj &lt;&lt; Constellation Plot( state=0|1 )

**설명:** 계층적 군집화 덴드로그램에 정보를 표시하는 대체 방법을 표시하거나 숨깁니다. 각 관측값(행)을 끝점으로 나타내고 각 군집 결합을 새 점으로 나타냅니다. 그려진 선은 소속 군집을 나타냅니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Constellation Plot( 1 );

```

#### Dendrogram Scale

**구문:** obj &lt;&lt; Dendrogram Scale( "거리 간격"|"균등 간격"|"기하 간격" )

**설명:** 덴드로그램에 대한 척도를 지정합니다. 균등 간격은 덴드로그램 분지 거리가 균등합니다. 기하 간격은 덴드로그램 분지의 거리가 척도의 배수로 증가합니다. 거리 간격은 덴드로그램 분지의 거리가 군집 간 거리로 정해집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Dendrogram Scale( Geometric Spacing );

```

#### Dendrogram Width

**구문:** obj &lt;&lt; Dendrogram Width( number=min(max(256,n*3),500) )

**설명:** 행 군집화를 위한 덴드로그램 프레임의 너비입니다. 기본값은 "min(max(256,n\*3),500)"입니다.

#### Distance Graph

**구문:** obj &lt;&lt; Distance Graph( state=0|1 )

**설명:** 각 군집 결합에서 초과한 거리를 보여 주는 그래프를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster(	Y( :birth, :death ),	Label( :country ),	Number of Clusters( 4 ),	Distance Graph( 0 ));Wait( 1 );obj << Distance Graph( 1 );

```

#### Get Clusters

**구문:** obj &lt;&lt; Get Clusters

**설명:** 각 행에 대한 군집 할당 벡터를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 3 ) );c = obj << Get Clusters;Show( c );

```

#### Get Column Display Order

**구문:** obj &lt;&lt; Get Column Display Order

**설명:** 이원 군집화의 각 열에 대한 표시 위치 벡터를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n ),	Twoway Clustering);rowOrder = obj << Get Column Display Order;

```

#### Get Column Names

**구문:** obj &lt;&lt; Get Column Names

**설명:** 이원 군집화 후 군집 순서에 따라 군집 이름을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );c = obj << Get Column Names;Show( c );

```

#### Get Display Order

**구문:** obj &lt;&lt; Get Display Order

**설명:** 군집의 각 행에 대한 표시 위치 벡터를 반환하며 표시되지 않은 행에 대해서는 결측값을 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n ));rowOrder = obj << Get Display Order;

```

#### Get Distance Matrix

**구문:** obj &lt;&lt; Get Distance Matrix

**설명:** 계층적 군집화에 사용되는 거리 행렬을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Number of Clusters( 8 ));m = obj << Get Distance Matrix;Show( m );

```

#### Hybrid Cycles

**구문:** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 계층적 군집화 루틴으로 전환하기 전에 수행되는 근접 이웃 결합 주기의 최소 수를 지정합니다. 기본값은 "30"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Method( "Hybrid Ward" ),	Hybrid Cycles( 20 ));

```

#### Hybrid Goal

**구문:** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 계층적 군집화 루틴으로 전환하기 전에 허용되는 최대 군집 수를 지정합니다. 계층적 군집화 루틴이 시작될 때 군집 수는 하이브리드 목표보다 작거나 같아야 합니다. 기본값은 "400"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Method( "Hybrid Ward" ),	Hybrid Goal( 300 ));

```

#### Hybrid Initial K

**구문:** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 근접 이웃 결합 주기에 사용되는 초기 이웃 수를 지정합니다. 이웃 수는 이전 주기에서 발견된 고유한 인접 이웃 수에 따라 증가하거나 감소할 수 있습니다. 기본값은 "10"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Method( "Hybrid Ward" ),	Hybrid Initial K( 8 ));

```

#### Hybrid Log Details

**구문:** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 하이브리드 Ward 방법의 각 상태와 타이밍을 로그에 표시할지 여부를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Method( "Hybrid Ward" ),	Hybrid Log Details( 1 ));

```

#### Hybrid RandomPCA Dim

**구문:** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 랜덤화 PCA 차원 축소 기법에 사용할 차원 수를 지정합니다. 이 기법은 하이브리드 랜덤 PCA 차원 값이 0보다 클 때 사용되며 속도가 훨씬 향상됩니다. 기본값은 "0"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Method( "Hybrid Ward" ),	Hybrid RandomPCA Dim( 3 ));

```

#### Late Join Outliers

**구문:** obj &lt;&lt; Late Join Outliers( state=0|1 )

**설명:** 병합에서 가장 늦게 군집화된 항목에 대한 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Late Join Outliers( 1 ) );

```

#### Legend

**구문:** obj &lt;&lt; Legend( state=0|1 )

**설명:** 덴드로그램 오른쪽에 색상 맵에 대한 범례를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster(	Y( :birth, :death ),	Label( :country ),	Number of Clusters( 4 ),	Color Map( Blue to Gray to Red ));obj << Legend( 1 );

```

#### Mark Clusters

**구문:** obj &lt;&lt; Mark Clusters( state=0|1 )

**설명:** 행이 속한 군집에 해당하는 데이터 테이블의 행에 표식을 할당합니다. 군집 수를 변경하면 표식이 업데이트됩니다. 이 옵션을 선택 취소하면 더 이상 군집 수에 따라 표식이 업데이트되지 않습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Mark Clusters;

```

#### Method

**구문:** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" ) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 군집을 구성하는 데 사용되는 거리 방법을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster(	Y( :birth, :death ),	Label( :country ),	Number of Clusters( 4 ),	Method( "Complete" ));

```

#### Missing value imputation

**구문:** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 다변량 정규 또는 다변량 SVD 대치법을 사용하여 결측값을 대치합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Hierarchical Cluster(	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Method( "Ward" ),	Standardize Data( 1 ),	Missing value imputation( 1 ),	Dendrogram Scale( "Distance Scale" ),	Number of Clusters( 6 ));

```

#### More Color Map Columns

**구문:** obj &lt;&lt; More Color Map Columns( column )

**설명:** 지정된 열을 기반으로 다른 색상 맵을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Skull.jmp" );obj = dt << Hierarchical Cluster(	Y( :length, :basilar, :zygomat, :postorb ),	Color Map( "Blue to Gray to Red" ),	More Color Map columns( :sex ));

```

#### Number of Clusters

**구문:** obj &lt;&lt; Number of Clusters( number )

**설명:** 군집 수를 설정하기 위해 군집을 정의하는 덴드로그램의 자를 위치를 지정합니다. 다이아몬드 모양의 아이콘을 드래그하여 군집 수를 결정할 수도 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 3 ) );

```

#### Number of Column Clusters

**구문:** obj &lt;&lt; Number of Column Clusters( number )

**설명:** 저장하기 전에 열 군집 수를 지정합니다. 이원 군집화에만 사용할 수 있습니다.

**JMP추가된 버전:** 17

#### Parallel Coord Plots

**구문:** obj &lt;&lt; Parallel Coord Plots

**설명:** 별도의 창에 각 군집에 대한 평행 좌표 그림을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Hierarchical Cluster(	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),	Label( :Model ),	Number of Clusters( 3 ));obj << Parallel Coord Plots;

```

#### Pivot on Selected Cluster

**구문:** obj &lt;&lt; Pivot on Selected Cluster

**설명:** 현재 선택된 군집의 두 하위 군집 순서를 역순으로 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );Wait( 2 );obj << Pivot on Selected Cluster;

```

#### Release Zoom

**구문:** obj &lt;&lt; Release Zoom

**설명:** 선택한 행에서 덴드로그램에 대한 확대/축소를 해제합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );dt << Select Rows( [19, 22, 45, 61, 62, 64] );obj = dt << Hierarchical Cluster(	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),	Label( :Model ));obj << Zoom to Selected Rows;Wait( 2 );obj << Release Zoom;

```

#### Row Dendrogram Position

**구문:** obj &lt;&lt; Row Dendrogram Position( "왼쪽"|"오른쪽" )

**설명:** 행에 대한 덴드로그램 위치를 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Two Way Clustering,	Row Dendrogram Position( "Left" ));

```

#### Row Label Position

**구문:** obj &lt;&lt; Row Label Position( "왼쪽"|"오른쪽" )

**설명:** 덴드로그램에서 행에 대한 라벨 위치를 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Two Way Clustering,	Row Label Position( "Right" ));

```

#### Row More Position

**구문:** obj &lt;&lt; Row More Position( "왼쪽"|"오른쪽" )

**설명:** &apos;추가 색상 맵 열&apos; 명령을 사용하여 추가한 색상 맵의 위치를 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Skull.jmp" );obj = dt << Hierarchical Cluster(	Y( :length, :basilar, :zygomat, :postorb ),	Color Map( "Blue to Gray to Red" ),	More Color Map Columns( :sex ),	Row More Position( "Right" ));

```

#### Save Cluster Hierarchy

**구문:** obj &lt;&lt; Save Cluster Hierarchy

**설명:** 덴드로그램을 재생성하는 데 유용한 정보를 포함하는 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Save Cluster Hierarchy;

```

#### Save Cluster History

**구문:** obj &lt;&lt; Save Cluster History

**설명:** 군집화 기록 보고서에 나타나는 테이블을 새 데이터 테이블로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Hierarchical Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Save Cluster History);

```

#### Save Cluster Means

**구문:** obj &lt;&lt; Save Cluster Means

**설명:** 주어진 군집 수에 대해 군집 평균 테이블을 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Hierarchical Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Save Cluster Means);

```

#### Save Cluster Tree

**구문:** obj &lt;&lt; Save Cluster Tree

**설명:** 군집 트리의 노드를 포함하는 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Save Cluster Tree;

```

#### Save Clusters

**구문:** obj &lt;&lt; Save Clusters

**설명:** 군집 번호를 포함하는 데이터 테이블 열을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Save Clusters;

```

#### Save Column Clusters

**구문:** obj &lt;&lt; Save Column Clusters

**설명:** 열에 대한 소속 군집 정보가 포함된 새 데이터 테이블을 저장합니다. 이원 군집화에만 사용할 수 있습니다.

**JMP추가된 버전:** 17

#### Save Constellation Coordinates

**구문:** obj &lt;&lt; Save Constellation Coordinates

**설명:** 별자리 그림의 좌표를 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Constellation Plot( 1 );obj << Save Constellation Coordinates( 1 );

```

#### Save Display Order

**구문:** obj &lt;&lt; Save Display Order

**설명:** 행이 덴드로그램에 나타나는 순서를 포함하는 데이터 테이블 열을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Save Display Order;

```

#### Save Distance Matrix

**구문:** obj &lt;&lt; Save Distance Matrix

**설명:** 관측값 사이의 거리를 포함하는 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Save Distance Matrix );

```

#### Save Formula for Closest Cluster

**구문:** obj &lt;&lt; Save Formula for Closest Cluster

**설명:** 가장 근접한 군집 평균의 군집 번호를 제공하는 계산식 열을 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Number of Clusters( 4 ) );obj << Save Formula for Closest Cluster;

```

#### Scatterplot Matrix

**구문:** obj &lt;&lt; Scatterplot Matrix

**설명:** 현재 군집 수를 기반으로 한 신뢰도 타원을 사용하여 새 창에 산점도 행렬을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Hierarchical Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Scatterplot Matrix);

```

#### Set Random Seed

**구문:** obj &lt;&lt; Set Random Seed( number )

**설명:** 이후 플랫폼 실행에 대한 결과를 재현하는 데 사용할 난수 시드값을 지정합니다.

#### Show Dendrogram

**구문:** obj &lt;&lt; Show Dendrogram( state=0|1 )

**설명:** 색상 맵만 보려는 경우 덴드로그램을 해제할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster(	Y( :birth, :death ),	Label( :country ),	Number of Clusters( 3 ),	Distance Graph( 0 ),	Color Map( Green to Black to Red ),	Color Clusters( 1 ),	Show Dendrogram( 0 ));

```

#### Show NCluster Handle

**구문:** obj &lt;&lt; Show NCluster Handle( state=0|1 )

**설명:** 덴드로그램의 군집 수를 선택하는 데 사용되는 다이아몬드 핸들을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster(	Y( :birth, :death ),	Label( :country ),	Number of Clusters( 4 ),	Color Clusters( 1 ),	Show NCluster Handle( 0 ));

```

#### Standardize

**구문:** obj &lt;&lt; Standardize( "표준화되지 않음"|"열"|"행"|"열 및 행" )

**설명:** 군집화 전에 값을 표준화하는 방법을 지정하는 &apos;표준화 기준&apos;의 별칭입니다.

#### Standardize By

**구문:** obj = Hierarchical Cluster(...Standardize By( "표준화되지 않음"|"열"|"행"|"열 및 행" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 군집화 전에 값을 표준화하는 방법을 지정합니다. 열 또는 행을 사용하거나 열과 행을 둘 다 사용하여 표준화할 수 있으며, 표준화하지 않을 수도 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Standardize( "Unstandardized" ),	Two Way Clustering,	Row Label Position( "Right" ));

```

#### Standardize Data

**구문:** obj &lt;&lt; Standardize Data( state=0|1 )

**설명:** 이전 옵션 이름이 여전히 지원되지만 &apos;표준화 기준&apos;으로 대체되었습니다.

#### Standardize Robustly

**구문:** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 	평균 및 표준편차의 로버스트 추정값을 사용하여 데이터를 표준화합니다.

#### Two Way Clustering

**구문:** obj = Hierarchical Cluster(...Two Way Clustering...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 열과 행을 함께 군집화합니다. 열이 동일한 척도로 측정되어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Hierarchical Cluster(	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Number of Clusters( 8 ));Wait( .1 );obj << Two Way Clustering;

```

#### Use Saved Cluster Table

**구문:** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 별도의 군집 기록 테이블을 사용하여 군집화를 지정합니다.

#### Zoom to Selected Rows

**구문:** obj &lt;&lt; Zoom to Selected Rows

**설명:** 선택한 행으로 덴드로그램을 확대/축소합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );dt << Select Rows( [19, 22, 45, 61, 62, 64] );obj = dt << Hierarchical Cluster(	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),	Label( :Model ));Wait( 2 );obj << Zoom to Selected Rows;

```

## KDTable

### 연결된 생성자

#### KDTable

**구문:** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**설명:** 근접 이웃을 효율적으로 찾기 위한 테이블을 반환합니다. 행렬 인수는 k-차원 점입니다. 차원 또는 점의 수에는 기본적으로 적용되는 제한이 없습니다.

```jsl

tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );{rows, dist} = tbl << K nearest rows( 2, 1 ); //2 nearest rows to row 1 are: Show( rows );

```

### 항목 메시지

#### Distance between rows

**구문:** distance = KDTable &lt;&lt; Distance between rows( row1, row2 )

**설명:** 두 행 사이의 거리를 반환합니다. 제거되거나 삽입된 행에 대해서도 거리를 계산합니다.

```jsl

tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );distance = tbl << Distance between rows( 1, 2 ); //distance from row 1 to row 2 is: Show( distance );

```

#### Insert rows

**구문:** n = KDTable &lt;&lt; Insert rows( number|[ vector ] )

**설명:** 테이블 검색에 행을 다시 삽입할 수 있습니다. 행 인덱스는 행이 삽입 또는 제거되어도 변경되지 않으며, 원래 행만 제거한 후 (다시) 삽입할 수 있습니다. 삽입된 행 수를 반환합니다. 행이 이미 삽입된 경우에는 무시됩니다.

```jsl

tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] ); //  remove 3 rows tbl << Remove Rows( [2 1 3] ); //  re-insert 1 row tbl << InsertRows( 2 ); // re-insert 2 rows, ignoring row 2 tbl << InsertRows( [3 2] );{rows, dist} = tbl << K nearest rows( 2, 4 ); //2 nearest rows to row 4, ignoring row 1, are:Show( rows );

```

#### K nearest rows

**구문:** {rows, dist} = KDTable &lt;&lt; K nearest rows( stop, &lt;position&gt; )

**설명:** n개의 최근접 행과 특정 행(지정된 경우)과의 거리 또는 전체 행과의 거리(지정되지 않은 경우)를 반환합니다. 거리 제한을 초과한 경우 검색을 중지합니다. 중지는 n 또는 {n,제한}일 수 있습니다. 최근접 이웃을 찾기 위한 특정 점은 (1 x K) 행렬 (여기서 K는 차원 수) 또는 행 번호로 지정될 수 있습니다. 특정 점이 지정되지 않을 경우 (행 수 x n) 행렬로 각 행에 대한 최근접 n개 이웃이 반환됩니다.

```jsl

tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );{rows, dist} = tbl << K nearest rows( {3, 2.0} ); //3 nearest rows to each row are: Show( rows );

```

#### Remove rows

**구문:** n = KDTable &lt;&lt; Remove rows( number|[ vector ] )

**설명:** 테이블 검색에서 행을 제거합니다. 행 인덱스는 행이 삽입 또는 제거되어도 변경되지 않으며, 원래 행만 제거한 후 (다시) 삽입할 수 있습니다. 제거된 행의 인덱스는 K 최근접 행을 찾을 때 여전히 사용될 수 있습니다. 제거된 행 수를 반환합니다. 행이 이미 제거된 경우에는 무시됩니다.

```jsl

tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );  //  remove 2 rowstbl << RemoveRows( [2 1] ); //  re-insert 1 row tbl << Insert rows( 2 );{rows, dist} = tbl << K nearest rows( 2, [1.5 1.5] ); //2 nearest rows to point at [1.5 1.5], ignoring row 1, are: Show( rows );

```

