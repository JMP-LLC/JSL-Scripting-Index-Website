# JMP Live Content



## 연결된 생성자

### JMP Live Content

**구문:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**설명:** JMP Live에 게시할 대화식 콘텐츠를 생성합니다. 

	첫 번째 파라미터는 필수이며 콘텐츠에 사용할 데이터를 지정합니다. 데이터는 보고서, 데이터 테이블, 맵 또는 이미지가 될 수 있습니다. 

	&apos;제목&apos;과 &apos;설명&apos;은 게시되는 콘텐츠 유형을 사용자 정의하는 데 사용됩니다. 나머지 파라미터는 선택적이며 보고서 내용을 사용자 정의하는 데만 사용됩니다. 

	&apos;데이터 게시&apos;는 보고서에 사용된 데이터가 JMP Live에 게시되는지 여부를 나타냅니다. 보고서의 데이터는 기본적으로 게시됩니다.

	&apos;경고 활성화&apos;는 보고서에 대해 관리도 경고를 활성화할지 여부를 나타냅니다. 관리도 경고는 기본적으로 비활성화됩니다. 

	&apos;최적화&apos;는 보고서가 JMP Live에 게시되는 방식을 사용자 정의하는 데 사용됩니다. 기본적으로 보고서는 상호 작용을 높이는 방식으로 게시됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Folder for Sample Content" ) );
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Folder for Data Content" ) );
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description( "This data table was published with the sample found in the Scripting Index" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Folder for Map Content" ) );
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**예제 4**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Folder for Image Content" ) );
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

