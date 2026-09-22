# Torch Deep Learning



## 공유 항목 메시지

### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

#### 이름으로 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### 익명 사전 설정

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### 폴더 내에서 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Copy Script;

```

### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Timing;Show( t );

```

### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Script Window;

```

### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 연결된 생성자

### Torch Deep Learning

**구문:** Torch Deep Learning(Y( columns ), X( columns ))

**설명:** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## 열

### Censor

**구문:** obj &lt;&lt; Censor( column )

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**구문:** obj &lt;&lt; Inputs( column(s) )

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**구문:** obj &lt;&lt; Responses( column(s) )

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**구문:** obj &lt;&lt; Subject( column )

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**구문:** obj &lt;&lt; Validation( column(s) )

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**구문:** obj &lt;&lt; Weight( column )

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**구문:** obj &lt;&lt; X( column(s) )

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## 항목 메시지

### Change Variables

**구문:** obj &lt;&lt; Change Variables

**설명:** Changes X, Y, and other variables for subsequent models.

**JMP추가된 버전:** 18

### Compare

**구문:** obj &lt;&lt; Compare

**설명:** Updates the Torch Deep Learning comparison metrics.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Compare( AUC( 1 ) );

```

### Fit

**구문:** obj &lt;&lt; Fit

**설명:** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Get Measures

**구문:** obj &lt;&lt; Get Measures

**JMP추가된 버전:** 18

### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** Return to the launcher for this analysis.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Relaunch Analysis;

```

### Set

**구문:** obj &lt;&lt; Set

**설명:** Specifies parameters for a Torch Deep Learning model.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**구문:** obj &lt;&lt; Show Details( state=0|1 )

**설명:** Shows more details.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

```

## Torch Deep Learning Compare

### 연결된 생성자

#### Torch Deep Learning Compare

**구문:** Torch Deep Learning Compare

### 항목 메시지

#### AUC

**구문:** obj &lt;&lt; AUC( state=0|1 )

**설명:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Accuracy

**구문:** obj &lt;&lt; Accuracy( state=0|1 )

**설명:** Shows or hides the accuracy, which is the proportion of correct classifications. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Censor

**구문:** obj &lt;&lt; Censor( state=0|1 )

**설명:** Shows or hides the Censor command 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Concordance

**구문:** obj &lt;&lt; Concordance( state=0|1 )

**설명:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Correlation

**구문:** obj &lt;&lt; Correlation( state=0|1 )

**설명:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### F1

**구문:** obj &lt;&lt; F1( state=0|1 )

**설명:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Freq

**구문:** obj &lt;&lt; Freq( state=0|1 )

**설명:** Shows or hides the Freq column. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### H Measure

**구문:** obj &lt;&lt; H Measure( state=0|1 )

**설명:** Shows or hides the H Measure, which measures proportion improvement over baseline. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Hide All Models

**구문:** obj &lt;&lt; Hide All Models

**설명:** Hides all models.

**JMP추가된 버전:** 18

#### LogLoss

**구문:** obj &lt;&lt; LogLoss( state=0|1 )

**설명:** Shows or hides the logarithm of the likelihood-based loss function. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### MAE

**구문:** obj &lt;&lt; MAE( state=0|1 )

**설명:** Shows or hides the MAE, which is the mean absolute error. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### MCC

**구문:** obj &lt;&lt; MCC( state=0|1 )

**설명:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Misclass

**구문:** obj &lt;&lt; Misclass( state=0|1 )

**설명:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Precision Recall AUC

**구문:** obj &lt;&lt; Precision Recall AUC( state=0|1 )

**설명:** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Predictors

**구문:** obj &lt;&lt; Predictors( state=0|1 )

**설명:** Shows or hides the Predictors column. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Profit

**구문:** obj &lt;&lt; Profit( state=0|1 )

**설명:** Shows or hides the expected profit. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### RMSE

**구문:** obj &lt;&lt; RMSE( state=0|1 )

**설명:** Shows or hides the RMSE, which is the root mean square error. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### RSquare

**구문:** obj &lt;&lt; RSquare( state=0|1 )

**설명:** Shows or hides RSquare value, which is the proportion of variability explained. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Remove Hidden Models

**구문:** obj &lt;&lt; Remove Hidden Models

**설명:** Removes all models for which the Show box is not checked.

**JMP추가된 버전:** 18

#### Remove Shown Models

**구문:** obj &lt;&lt; Remove Shown Models

**설명:** Removes all models for which the Show check box is checked and shows the remaining models.

**JMP추가된 버전:** 18

#### Response

**구문:** obj &lt;&lt; Response( state=0|1 )

**설명:** Shows or hides the Response column. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Show All Models

**구문:** obj &lt;&lt; Show All Models

**설명:** Shows all models.

**JMP추가된 버전:** 18

#### Subject

**구문:** obj &lt;&lt; Subject( state=0|1 )

**설명:** Shows or hides the Subject column 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Training Metrics

**구문:** obj &lt;&lt; Training Metrics( state=0|1 )

**설명:** Shows or hides all training metrics. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Validation

**구문:** obj &lt;&lt; Validation( state=0|1 )

**설명:** Shows or hides the Validation column. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Validation Metrics

**구문:** obj &lt;&lt; Validation Metrics( state=0|1 )

**설명:** Shows or hides all validation metrics. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Weight

**구문:** obj &lt;&lt; Weight( state=0|1 )

**설명:** Shows or hides the Weight column. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

## Torch Deep Learning Fit > Post

### 항목 메시지

#### Actual by Predicted Plots

**구문:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**설명:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Confusion Matrices

**구문:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**설명:** Shows or hides a crosstabulation matrix of actual and predicted levels. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**구문:** obj &lt;&lt; Contour Profiler.

**설명:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP추가된 버전:** 18

#### Decision Thresholds

**구문:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**설명:** Shows or hides decision threshold graphs and tables. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Fit Details

**구문:** obj &lt;&lt; Fit Details( state=0|1 )

**설명:** Shows or hides the statistics for the fitted model. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Lift Curves

**구문:** obj &lt;&lt; Lift Curves( state=0|1 )

**설명:** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

**JMP추가된 버전:** 18

#### Model Details

**구문:** obj &lt;&lt; Model Details( state=0|1 )

**설명:** Shows or hides model details 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 18

#### Precision Recall Curves

**구문:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**설명:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

**JMP추가된 버전:** 18

#### Profiler

**구문:** obj &lt;&lt; Profiler

**설명:** Shows or hides the Prediction Profiler.

**JMP추가된 버전:** 18

#### ROC Curves

**구문:** obj &lt;&lt; ROC Curves( state=0|1 )

**설명:** Plots the response-category sorting efficiency of the model predictions.

**JMP추가된 버전:** 18

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler

**설명:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP추가된 버전:** 18

## Torch Deep Learning Fit

### 연결된 생성자

#### Post

**구문:** Post

#### Torch Deep Learning Fit

**구문:** Torch Deep Learning Fit

### 항목 메시지

#### Activation

**구문:** obj &lt;&lt; Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**설명:** Specifies the activation function to use after each layer. 기본값은 "ReLU"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**구문:** obj &lt;&lt; Activations( text )

**설명:** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**구문:** obj &lt;&lt; Anchor Scale( number=16 )

**설명:** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. 기본값은 "16"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**구문:** obj &lt;&lt; Aspect Sigma( number=0 )

**설명:** Standard deviation of Gaussian aspect ratio deformation 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**구문:** obj &lt;&lt; Attention Heads( text=4 )

**설명:** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. 기본값은 "4"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**구문:** obj &lt;&lt; Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**설명:** Specifies the base activation function for Kolmogorov Arnold B Splines. 기본값은 "GELU"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**구문:** obj &lt;&lt; Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**설명:** For Radial Basis Machine models, specify the basis function. 기본값은 "Gaussian"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) ));

```

#### Batch Size

**구문:** obj &lt;&lt; Batch Size( number=128 )

**설명:** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. 기본값은 "128"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**구문:** obj &lt;&lt; Binary Loss( "BCE"|"SM"="BCE" )

**설명:** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). 기본값은 "BCE"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**구문:** obj &lt;&lt; Blur Max Sigma( number=0 )

**설명:** Maximum standard deviation of Gaussian blur 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**구문:** obj &lt;&lt; Class Loss Weight( number=4.0 )

**설명:** Specifies the multiplier for class loss. 기본값은 "4.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**구문:** obj &lt;&lt; Confidence Threshold( number=0.05 )

**설명:** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. 기본값은 "0.05"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**구문:** obj &lt;&lt; Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**설명:** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). 기본값은 "MSE"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**구문:** obj &lt;&lt; Copy Parameters to Launch

**설명:** Copies the parameter values from this model to the model launch section.

**JMP추가된 버전:** 18

#### Covariance Structure

**구문:** obj &lt;&lt; Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**설명:** For mixed models, specify the covariance structure. 기본값은 "DotProduct"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) ));

```

#### Data Threads

**구문:** obj &lt;&lt; Data Threads( number=4 )

**설명:** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. 기본값은 "4"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**구문:** obj &lt;&lt; Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**설명:** Specifies the computational device that Torch uses. 기본값은 "auto"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**구문:** obj &lt;&lt; Dilations( text=1 )

**설명:** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. 기본값은 "1"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**구문:** obj &lt;&lt; Dropout Probs( text=0.0 )

**설명:** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**구문:** obj &lt;&lt; Epochs( number=20 )

**설명:** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. 기본값은 "20"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**구문:** obj &lt;&lt; Factorization Machine Layers( text=0 )

**설명:** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Factorization Machine Layers( "1" ) ) );

```

#### Fit Ys Separately

**구문:** obj &lt;&lt; Fit Ys Separately( state=0 )

**설명:** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**구문:** obj &lt;&lt; Fixed Effects( number=0 )

**설명:** Specify the number of fixed effects, all of which must be at the beginning of the X variable list 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**구문:** obj &lt;&lt; Folder( text )

**설명:** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**구문:** obj &lt;&lt; Frozen Epochs( number=0 )

**설명:** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**구문:** obj &lt;&lt; Generate Python Code

**설명:** Creates Python code for model deployment.

**JMP추가된 버전:** 18

#### Grid Size

**구문:** obj &lt;&lt; Grid Size( number=5 )

**설명:** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. 기본값은 "5"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**구문:** obj &lt;&lt; HFlip Prob( number=0 )

**설명:** Probability of horizontal flip 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**구문:** obj &lt;&lt; Highway Layers( text=0 )

**설명:** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**구문:** obj &lt;&lt; Image Model( ="LeNet5" )

**설명:** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. 기본값은 "LeNet5"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**구문:** obj &lt;&lt; Image Size( number=28 )

**설명:** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. 기본값은 "28"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**구문:** obj &lt;&lt; Kernel Sizes( text=3 )

**설명:** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. 기본값은 "3"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**구문:** obj &lt;&lt; L1 Penalty( number=0.0 )

**설명:** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**구문:** obj &lt;&lt; Layer Sizes( text=16 )

**설명:** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. 기본값은 "16"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**구문:** obj &lt;&lt; Learning Rate( number=0.001 )

**설명:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. 기본값은 "0.001"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**구문:** obj &lt;&lt; Margin( number=1.0 )

**설명:** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**구문:** obj &lt;&lt; Max Boxes( number=5 )

**설명:** Specifies the maximum number of predicted boxes per image. 기본값은 "5"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**구문:** obj &lt;&lt; Max Seq Length( number=512 )

**설명:** For text models, specifies the maximum number of tokens to create for each text item. 기본값은 "512"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );Torch Deep Learning( Y( :Buy again? ), X( :Potato Chip Product Review ), Fit( Max Seq Length( 512 ) ) );

```

#### Mixup Portion

**구문:** obj &lt;&lt; Mixup Portion( number=0.0 )

**설명:** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**구문:** obj &lt;&lt; NMS Threshold( number=0.5 )

**설명:** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. 기본값은 "0.5"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**구문:** obj &lt;&lt; Noise Max Sigma( number=0 )

**설명:** Maximum standard deviation of additive Gaussian noise 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**구문:** obj &lt;&lt; Nominal Image Threshold( number=10 )

**설명:** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. 기본값은 "10"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**구문:** obj &lt;&lt; Nominal Loss( "NLL"="NLL" )

**설명:** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). 기본값은 "NLL"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**구문:** obj &lt;&lt; Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**설명:** Specifies the type of normalization to apply to each MLP layer. 기본값은 "Batch"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**구문:** obj &lt;&lt; Norm First( "None"|"Batch"="Batch" )

**설명:** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. 기본값은 "Batch"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**구문:** obj &lt;&lt; Num Linear( number=1 )

**설명:** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. 기본값은 "1"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**구문:** obj &lt;&lt; Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**설명:** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). 기본값은 "AdamW"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**구문:** obj &lt;&lt; Pitch Sigma( number=0 )

**설명:** Standard deviation of Gaussian pitch 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**구문:** obj &lt;&lt; Pooling Layers( text=Max )

**설명:** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. 기본값은 "Max"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**구문:** obj &lt;&lt; Pretrained Tabular( ="None" )

**설명:** Specify a pretrained tabular model that is prepended to the Tabular Model. 기본값은 "None"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**구문:** obj &lt;&lt; Quantiles( text=0.9 )

**설명:** Specify a space-delimited list of quantiles to use for Quantile loss. 기본값은 "0.9"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**구문:** obj &lt;&lt; RPN NMS Threshold( number=0.7 )

**설명:** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. 기본값은 "0.7"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**구문:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**설명:** Removes the reports and plots for all models except this one.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**구문:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**설명:** Removes the entire model report.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Restore From

**구문:** obj &lt;&lt; Restore From( " "=" " )

**설명:** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. 기본값은 " "입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**구문:** obj &lt;&lt; Roll Sigma( number=0 )

**설명:** Standard deviation of Gaussian roll 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**구문:** obj &lt;&lt; Save CAMs

**설명:** Save gradient-based class activation maps (CAMs) as a new column.

**JMP추가된 버전:** 18

#### Save Embeddings

**구문:** obj &lt;&lt; Save Embeddings

**설명:** Saves model embeddings (from final hidden layer) as new columns in the data table

**JMP추가된 버전:** 18

#### Save Model

**구문:** obj &lt;&lt; Save Model

**설명:** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

**JMP추가된 버전:** 18

#### Save Predicteds

**구문:** obj &lt;&lt; Save Predicteds

**설명:** Saves the predicted values in a new column in the data table.

**JMP추가된 버전:** 18

#### Screening Method

**구문:** obj &lt;&lt; Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**설명:** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. 기본값은 "ResponseScreening"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Screening Method( "ResponseScreening" ) ) );

```

#### Screening Threshold

**구문:** obj &lt;&lt; Screening Threshold( number=0 )

**설명:** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**구문:** obj &lt;&lt; Seed( number=0 )

**설명:** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**구문:** obj &lt;&lt; Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**설명:** Specifies the image segmentation model. 기본값은 "UNet"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/segmentation.jmp" );Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**구문:** obj &lt;&lt; Spline Order( number=3 )

**설명:** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. 기본값은 "3"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**구문:** obj &lt;&lt; Strides( text=1 )

**설명:** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. 기본값은 "1"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**구문:** obj &lt;&lt; Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"LSTM"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**설명:** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options 기본값은 "MultiLayerPerceptron"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Tabular Model( "MultiLayerPerceptron" ) ) );

```

#### Text Model

**구문:** obj &lt;&lt; Text Model( ="BertTiny" )

**설명:** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. 기본값은 "BertTiny"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );Torch Deep Learning( Y( :Buy again? ), X( :Potato Chip Product Review ), Fit( Text Model( "BERT" ) ) );

```

#### Triplet Loss Weight

**구문:** obj &lt;&lt; Triplet Loss Weight( number=0.0 )

**설명:** Specifies the multiplier alpha to use in the following compound loss function: alpha \* triplet_loss + (1 - alpha) \* loss_function. Must be between 0 and 1. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**구문:** obj &lt;&lt; Use Data As Knots( state=0 )

**설명:** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex, :height ),	X( :picture ),	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) ));

```

#### VFlip Prob

**구문:** obj &lt;&lt; VFlip Prob( number=0 )

**설명:** Probability of vertical flip 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**구문:** obj &lt;&lt; Weight Decay( number=0.0 )

**설명:** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**구문:** obj &lt;&lt; Worker Count( number=4 )

**설명:** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. 기본값은 "4"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**구문:** obj &lt;&lt; X Slide Sigma( number=0 )

**설명:** Standard deviation of Gaussian random shift along the X axis 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**구문:** obj &lt;&lt; Y Slide Sigma( number=0 )

**설명:** Standard deviation of Gaussian random shift along the Y axis 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**구문:** obj &lt;&lt; Yaw Sigma( number=0 )

**설명:** Standard deviation of Gaussian yaw 기본값은 "0"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```

