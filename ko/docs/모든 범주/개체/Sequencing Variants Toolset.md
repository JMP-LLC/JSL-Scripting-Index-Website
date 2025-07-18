# Sequencing Variants Toolset



## 공유 항목 메시지

### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

#### 이름으로 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### 익명 사전 설정

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### 폴더 내에서 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

obj << Copy Script;

```

### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

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

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

t = obj << Get Timing;
Show( t );

```

### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

#### 예제 1

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

#### 예제 2

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

obj << Save Script to Script Window;

```

### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## 연결된 생성자

### Sequencing Variants Toolset

**구문:** Sequencing Variants Toolset

**설명:** SamTools 및 BcfTools를 사용하여 고처리량 시퀀싱 데이터를 처리하고 분석하기 위한 프레임워크를 제공합니다.

## 항목 메시지

### Arguments

**구문:** obj &lt;&lt; Arguments

**설명:** 스크립트 창에서 플랫폼을 실행하기 위한 옵션을 지정할 수 있습니다.

### Run Cmd

**구문:** obj &lt;&lt; Run Cmd

**설명:** 스크립트 창에서 실행할 시퀀싱 변이 도구 집합 작업을 결정합니다.

### Run Spec

**구문:** obj &lt;&lt; Run Spec

**설명:** 인터페이스 창에서 실행할 시퀀싱 변이 도구 집합 작업을 결정합니다.

### Specification

**구문:** obj &lt;&lt; Specification

**설명:** 작업을 지정할 수 있습니다.

## Sequencing Variants Toolset Run

### 항목 메시지

#### Auto Send Output to Files List

**구문:** obj &lt;&lt; Auto Send Output to Files List( state=0|1 )

**설명:** 출력 파일을 파일 목록 패널로 보냅니다.

#### Bam Files

**구문:** obj &lt;&lt; Bam Files

**설명:** BAM 파일을 지정합니다.

#### Bcf Files

**구문:** obj &lt;&lt; Bcf Files

**설명:** BCF 파일을 지정합니다.

#### Caller

**구문:** obj &lt;&lt; Caller( "다중 대립유전자"|"공통"="다중 대립유전자" )

**설명:** 기본값은 "다중 대립유전자"입니다.

#### Copy Task Specification

**구문:** obj &lt;&lt; Copy Task Specification

**설명:** 현재 시퀀싱 변이 도구 집합 규격을 클립보드에 복사합니다.

**JMP추가된 버전:** 19

#### Files

**구문:** obj &lt;&lt; Files

**설명:** samtools에서 실행할 입력 파일을 로드합니다.

#### Ploidy

**구문:** obj &lt;&lt; Ploidy( number=2 )

**설명:** 기본값은 "2"입니다.

#### Recall in Task Specification

**구문:** obj &lt;&lt; Recall in Task Specification

**설명:** 작업 규격 보고서의 작업 규격을 지정된 모형으로 설정합니다.

#### Ref Files

**구문:** obj &lt;&lt; Ref Files

**설명:** 참조 유전체 파일을 지정합니다.

#### Remove Run

**구문:** obj &lt;&lt; ( Run[number] &lt;&lt; Remove Run( state=0|1 ) )

**설명:** 보고서 창에서 지정된 런 보고서를 제거합니다.

#### Results Folder

**구문:** obj &lt;&lt; Results Folder

**설명:** 결과 폴더를 지정합니다.

#### Sam Files

**구문:** obj &lt;&lt; Sam Files

**설명:** SAM 파일을 지정합니다.

#### Send Output to Files List

**구문:** obj &lt;&lt; Send Output to Files List( state=0|1 )

**설명:** 출력 파일을 파일 목록 패널로 보냅니다.

#### Sort Reads By

**구문:** obj &lt;&lt; Sort Reads By( "좌표"|"영숫자"|"사전"="좌표" )

**설명:** 기본값은 "좌표"입니다.

#### Summary

**구문:** obj &lt;&lt; Summary( state=0|1 )

**설명:** 런 상세 정보가 포함된 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

#### Target Regions

**구문:** obj &lt;&lt; Target Regions

**설명:** 관심 영역을 설정합니다. 영역을 지정하려면 BAM 파일이 좌표로 정렬되고 인덱싱되어야 합니다.

#### Task

**구문:** obj &lt;&lt; Task( "Fasta 인덱싱"|"SAM을 BAM으로 변환"|"리드 정렬"|"메이트 좌표 추가"|"중복 제거"|"파일 병합"|"BAM 인덱싱"|"BAM을 SAM으로 변환"|"매핑된 리드 추출"|"매핑되지 않은 리드 추출"|"관심 영역 추출"|"올바르게 정렬된 리드 추출"|"첫 번째 리드 추출"|"매칭되지 않는 리드 태그 및 삽입"|"정렬 개수"|"플래그별 정렬 개수"|"참조별 정렬 개수"|"통계량 생성"|"BAQ(염기 정렬 품질) 생성"|"리드 깊이 생성"|"Bgzip 압축"|"Bgzip 압축 해제"|"유전자형 가능도 생성"|"유전자형 검출 생성"|"Bcf를 Vcf로 변환"|"Vcf를 Bcf로 변환" )

**설명:** 실행할 작업을 결정합니다.

#### Title

**구문:** obj &lt;&lt; Title

**설명:** 제목을 설정합니다.

#### Unthreaded

**구문:** obj &lt;&lt; Unthreaded( state=0|1 )

**설명:** 계산에 주 스레드만 사용합니다.

#### Vcf Files

**구문:** obj &lt;&lt; Vcf Files

**설명:** VCF 파일을 지정합니다.

## Sequencing Variants Toolset Specification

### 항목 메시지

#### Auto Send Output to Files List

**구문:** obj &lt;&lt; Auto Send Output to Files List( state=0|1 )

**설명:** 출력 파일을 파일 목록 패널로 보냅니다.

#### Bam Files

**구문:** obj &lt;&lt; Bam Files

**설명:** BAM 파일을 지정합니다.

#### Bcf Files

**구문:** obj &lt;&lt; Bcf Files

**설명:** BCF 파일을 지정합니다.

#### Caller

**구문:** obj &lt;&lt; Caller( "다중 대립유전자"|"공통"="다중 대립유전자" )

**설명:** 기본값은 "다중 대립유전자"입니다.

#### Files

**구문:** obj &lt;&lt; Files

**설명:** samtools에서 실행할 입력 파일을 로드합니다.

#### Ploidy

**구문:** obj &lt;&lt; Ploidy( number=2 )

**설명:** 배수성 수준을 나타내는 양수를 지정합니다. 기본값은 "2"입니다.

#### Ref Files

**구문:** obj &lt;&lt; Ref Files

**설명:** 참조 유전체 파일을 지정합니다.

#### Results Folder

**구문:** obj &lt;&lt; Results Folder

**설명:** 결과 폴더를 지정합니다.

#### Sam Files

**구문:** obj &lt;&lt; Sam Files

**설명:** SAM 파일을 지정합니다.

#### Sort Reads By

**구문:** obj &lt;&lt; Sort Reads By( "좌표"|"영숫자"|"사전"="좌표" )

**설명:** 기본값은 "좌표"입니다.

#### Target Regions

**구문:** obj &lt;&lt; Target Regions

**설명:** 관심 영역을 설정합니다. 영역을 지정하려면 BAM 파일이 좌표로 정렬되고 인덱싱되어야 합니다.

#### Task

**구문:** obj &lt;&lt; Task( "Fasta 인덱싱"|"SAM을 BAM으로 변환"|"리드 정렬"|"메이트 좌표 추가"|"중복 제거"|"파일 병합"|"BAM 인덱싱"|"BAM을 SAM으로 변환"|"매핑된 리드 추출"|"매핑되지 않은 리드 추출"|"관심 영역 추출"|"올바르게 정렬된 리드 추출"|"첫 번째 리드 추출"|"매칭되지 않는 리드 태그 및 삽입"|"정렬 개수"|"플래그별 정렬 개수"|"참조별 정렬 개수"|"통계량 생성"|"BAQ(염기 정렬 품질) 생성"|"리드 깊이 생성"|"Bgzip 압축"|"Bgzip 압축 해제"|"유전자형 가능도 생성"|"유전자형 검출 생성"|"Bcf를 Vcf로 변환"|"Vcf를 Bcf로 변환"="Fasta 인덱싱" )

**설명:** 실행할 작업을 결정합니다. 기본값은 "Fasta 인덱싱"입니다.

#### Title

**구문:** obj &lt;&lt; Title

**설명:** 제목을 설정합니다.

#### Unthreaded

**구문:** obj &lt;&lt; Unthreaded( state=0|1 )

**설명:** 계산에 주 스레드만 사용합니다.

#### Vcf Files

**구문:** obj &lt;&lt; Vcf Files

**설명:** VCF 파일을 지정합니다.

