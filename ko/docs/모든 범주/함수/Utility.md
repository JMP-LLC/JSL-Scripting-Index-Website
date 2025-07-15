# Utility



### Add

**구문:** y = x0 + x1; y = Add( x0, x1, ... )

**설명:** 모든 인수를 추가합니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Pi() + 10;

```

### Beep

**구문:** Beep()

**설명:** 경고음을 울립니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Beep();

```

### Blob MD5

**구문:** blobResult = Blob MD5( blob )

**설명:** 소스 BLOB(Binary Large OBject)에서 16바이트 결과 BLOB를 만듭니다. 16바이트 BLOB는 소스 BLOB의 MD5 체크섬(또는 해시)입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Hex(/* make it printable */ Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**구문:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**설명:** 지정된 BLOB의 바이트 하위 범위에서 새 BLOB를 만듭니다. offset 인수는 0에서 시작하므로 첫 번째 바이트는 오프셋 0에 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**구문:** y = Build Information()

**설명:** 빌드 날짜/시간, 릴리스 또는 디버그 빌드 및 제품 이름을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Build Information();

```

### Caption

**구문:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**설명:** {h, v}로 지정된 위치에 text 인수로 지정된 텍스트가 포함된 캡션 창을 표시합니다. Delayed( seconds ) 인수는 각 캡션 전에 대기 시간(초)을 설정합니다.

**JMP추가된 버전:** 버전 14 이전

**캡션 제거**

```jsl

Names Default To Here( 1 );
Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

**형식이 지정된 캡션**

```jsl

Names Default To Here( 1 );
Caption(
	{100, 200},
	"explanation",
	Font( "Arial Black" ),
	Font Size( 16 ),
	Text Color( "blue" ),
	Back Color( "yellow" ),
	Spoken( 1 )
);

```

### Clipboard Capture

**구문:** clp = Clipboard Capture( box &lt;&lt; Copy )

**설명:** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Current Journal

**구문:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**설명:** 현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 현재 저널에 대한 참조를 반환합니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.



지정된 프로젝트에 현재 저널이 없으면 자동으로 저널이 생성됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Current Journal();

```

### Data Connector Registry

**구문:** Data Connector Registry()

**설명:** JMP용 데이터 커넥터 모음입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**구문:** y = Open Datafeed( ... )

**설명:** 실시간 데이터 공급을 관리하기 위해 메시지를 보낼 수 있는 개체 및 창을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Debug Break

**구문:** Debug Break()

**설명:** 이 표현식이 JSL 디버거 내에서 실행되면 디버거가 스크립트 실행을 중지합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
// Right-click and select Debug.
// In the JSL Debugger, click Run.
x = 5;
y = 8;
Debug Break();
z = x + yy;
Show( z );

```

### Decode URI

**구문:** Decode URI( value )

**설명:** URI 인코딩을 사용하여 문자열을 인코딩합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**구문:** y = Decode64 Blob( base64String )

**설명:** Base 64 텍스트의 인쇄 가능 문자열을 BLOB로 디코딩합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**구문:** y = Decode64 Double( base64String )

**설명:** Base64로 인코딩된 문자열에서 두 배 정밀도 부동 소수점 숫자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**구문:** Disable JMP Live URL(url)

**설명:** JMP Live URL을 비활성화합니다. 이 메서드는 jmpStartAdmin.jsl을 실행할 때만 사용할 수 있습니다. 와일드카드로 별표(*)를 사용하여 *(모든 URL), *.jmp.com(.jmp.com의 URL 인코딩), http://public.*(http://public.으로 시작하는 URL), *public*(public을 포함하는 URL) 등으로 URL을 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**구문:** Disable Proxy Settings( 1|0 )

**설명:** jmpStartAdmin.jsl 실행 중 프록시 설정을 비활성화하거나 활성화합니다. 프록시 설정은 기본적으로 활성화되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Disable Proxy Settings( 1 );

```

### Divide

**구문:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**설명:** 첫 번째 인수에서 이후의 모든 인수를 나눕니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다. 하나의 인수만 사용하여 호출할 경우 결과는 역수가 됩니다.

**JMP추가된 버전:** 버전 14 이전

**단순**

```jsl

Names Default To Here( 1 );
6 / 3 / 2;

```

**역수**

```jsl

Names Default To Here( 1 );
x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

### Empty

**구문:** y = Empty()

**설명:** 빈 값을 반환합니다. 계산식 편집기에서 지정되지 않은 인수에 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Empty();

```

### Enable JMP Live URL

**구문:** Enable JMP Live URL(url)

**설명:** JMP Live URL을 활성화합니다. 이 메서드는 jmpStartAdmin.jsl을 실행할 때만 사용할 수 있습니다. 와일드카드로 별표(*)를 사용하여 *(모든 URL), *.jmp.com(.jmp.com의 URL 인코딩), http://public.*(http://public.으로 시작하는 URL), *public*(public을 포함하는 URL) 등으로 URL을 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**구문:** Enable Proxy Settings( 1|0 )

**설명:** jmpStartAdmin.jsl 실행 중의 프록시 설정을 활성화하거나 비활성화합니다. 프록시 설정은 기본적으로 활성화되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Enable Proxy Settings( 0 );

```

### Encode URI

**구문:** Encode URI( value )

**설명:** URI 인코딩을 사용하여 문자열을 인코딩합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**구문:** s = Encode64 Blob( x )

**설명:** BLOB를 Base 64 텍스트의 인쇄 가능 문자열로 디코딩합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**구문:** s = Encode64 Double( x )

**설명:** 부동 소수점 숫자의 Base64 문자열 인코딩을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**구문:** points = Faure Quasi Random Sequence(nDim, nRow)

**설명:** Faure 시퀀스를 사용하여 공간 채움 준난수 시퀀스를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Force Action Notes

**JMP추가된 버전:** 16

### Format Pattern

**구문:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**설명:** 형식 패턴은 "<YYYY></><MM></><DD> <hh><:><mm><:><ss><ampm>"과 같이 날짜/시간 형식을 정의하는 문자열입니다. 패턴에서 꺾쇠 괄호로 묶인 부분을 필드 설명자라고 합니다. 필드 설명자는 값(예: "<YYYY>" 4자리 연도) 또는 기타 날짜/시간 텍스트(예: "</>" 로케일별 날짜 구분 기호)를 나타냅니다. 형식 패턴을 사용하면 JMP에서 제공하지 않는 형식을 생성할 수 있습니다. 이러한 형식은 데이터 형식 지정 및 입력에 모두 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                                /*
필드 설명자

날짜
(기간 필드 설명자와 함께 사용할 수 없음)
================================================================================
<YYYY>        4자리 연도(입력할 때 1-4자리 허용)
<YY>          2자리 연도
<yyyy>        4자리 ISO 연도. ISO 주에 해당합니다(입력할 때 1-4자리 허용).
<yy>          2자리 ISO 연도. ISO 주에 해당합니다.
<YYYY.>       소수 연도가 포함된 연도입니다. 날짜와 시간을 완전히 설명합니다.
<M>           월 번호(1~12)
<MM>          월 번호, 0으로 채우기(01~12)
<Month>       긴 월 이름
<Mmm>         월 이름 약어
<MMM>         "인라인" 월 이름. 항상 3개 문자
<WW1>         0으로 채워진 2자리 주 번호. 주 2는 해당 연도의 첫 번째 일요일에 시작하고, 주 1은 첫 번째 일요일 이전의 부분
              주입니다(01~54).
<WW2>         0으로 채워진 2자리 주 번호. 주 1은 해당 연도의 첫 번째 일요일에 시작하고, 주 0은 첫 번째 일요일 이전의 부분
              주입니다(00~53).
<ww>          0으로 채워진 2자리 ISO 주 번호. 각 주는 월요일에 시작하고, 주 1은 4일 이상이 포함된 해당 연도의 첫 번째
              주입니다. 부분 주가 없는 대신 첫 번째 주 또는 마지막 주가 각각 이전 연도 또는 다음 연도까지 이어질 수
              있습니다(01~53).
<D>           일(1~31)
<DD>          0으로 채워진 일(01~31)
<Q>           연도의 분기(1~4)
<Q#>          "Q" 다음에 연도의 분기(1~4)
<DayOfWeek>   요일 이름
<DW>          숫자로 표시한 요일. 1 = 일요일, 7 = 토요일
<dw>          숫자로 표시한 요일. 1 = 월요일, 7 = 일요일
</>           로케일 날짜 구분 기호(입력할 때 가장 일반적인 구분 기호 허용)
<->           ISO 날짜 구분 기호 '-'(입력할 때 가장 일반적인 구분 기호 허용)
</?>          날짜 입력에 사용할 선택적 날짜 구분 기호. 이 구분 기호는 출력에 기록되지 않습니다.
<'T'>         ISO 날짜의 'T'

시간
(일부는 기간 필드 설명자와 함께 사용할 수 있음)
================================================================================
<hh>          현재 로케일에 따라 형식이 지정되는 시간. <ampm> 설명자가 있으면 로케일에 따라 12시간제 또는 24시간제를
              사용합니다. <AMPM> 설명자가 있으면 12시간제를 사용하고, 그렇지 않으면 24시간제를 사용합니다(기간 필드
              설명자와 함께 사용할 수 없음).
<zhh>         현재 로케일에 따라 형식이 지정되고 0으로 채워진 시간. <ampm> 설명자가 있으면 로케일에 따라 12시간제 또는
              24시간제를 사용합니다. <AMPM> 설명자가 있으면 12시간제를 사용하고, 그렇지 않으면 24시간제를 사용합니다(기간
              필드 설명자와 함께 사용할 수 없음).
<hh24>        24시간 형식을 사용하고 0으로 채워진 시간(00~23)
<mm>          분, 0으로 채우기(00~59)
<ss>          초, 0으로 채우기(00~59)
<ampm>        현재 로케일의 AM/PM 기호(기간 필드 설명자와 함께 사용할 수 없음)
<AMPM>        로케일에 독립적인 AM/PM 기호 "AM" 또는 "PM"(기간 필드 설명자와 함께 사용할 수 없음)
<:>           로케일 시간 구분 기호
<::>          ISO 시간 구분 기호 ':'(입력할 때 로케일 시간 구분 기호도 사용 가능)
<:?>          날짜 입력에 사용할 선택적 시간 구분 기호. 이 구분 기호는 출력에 기록되지 않습니다.

기간
(날짜 필드 설명자와 함께 사용할 수 없음)
================================================================================
<Day>         날짜 계산(개수). 기간에서 가장 유의한 필드로 사용되며 다른 "개수"와 함께 사용할 수 없습니다.
<Hour>        시간 계산(개수). 기간에서 가장 유의한 필드로 사용되며 다른 "개수"와 함께 사용할 수 없습니다.
<Minute>      분 계산(개수). 기간에서 가장 유의한 필드로 사용되며 다른 "개수"와 함께 사용할 수 없습니다.

기타
================================================================================
<<>           "<"로 대체됨
*/

```

### Get Addin

**구문:** Get Addin( ID )

**설명:** 해당 ID로 지정된 등록된 추가기능을 가져옵니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**구문:** Get Addins( )

**설명:** 모든 등록된 추가기능의 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**구문:** Get Addr Info( string )

**설명:** 이름에 대한 숫자 주소를 찾습니다. 대부분의 경우 향후 IPV6와의 호환성을 위해 이 이름을 사용해야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**구문:** Get Clipboard()

**설명:** 클립보드의 현재 내용을 가져옵니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Clipboard();

```

### Get Expr Location

**구문:** Get Expr Location(&lt;expression&gt;, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**설명:** 파싱된 표현식에서 상위 토큰의 위치를 가져옵니다. 기본 호출의 반환 값은 {소스 파일, TokenStartLine, TokenStartCol, TokenLength}입니다.

**JMP추가된 버전:** 17

**기본 출력**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

**출력 선택**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

**하위 문자열 바꾸기**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location( Arg( e, 2 ), {"TreeStart", "TreeLength"} );
Munger( data, positions[1], positions[2], "45" );

```

### Get Name Info

**구문:** Get Name Info( string )

**설명:** 숫자 주소에 대한 이름을 찾습니다. 대부분의 경우 향후 IPV6와의 호환성을 위해 이 이름을 사용해야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**구문:** notebookList = Get Notebook List()

**설명:** 열려 있는 모든 노트북의 목록을 반환합니다.

**JMP추가된 버전:** 19

### Get OAuth2 Grant Types

**구문:** Get OAuth2 Grant Types

**설명:** 지원되는 JMP OAuth2 승인 유형을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP추가된 버전:** 15

### Get Platform Preference

**구문:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**설명:** 지정된 플랫폼 환경 설정을 가져옵니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**구문:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**설명:** 지정된 플랫폼 환경 설정을 가져옵니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**구문:** Get Policies( &lt;Machine|User|Both&gt; )

**설명:** 현재 정책 이름과 값을 포함하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Get Policies();

```

### Get Policy

**구문:** Get Policy( "PolicyName" )

**JMP추가된 버전:** 18

### Get Preference

**구문:** Get Preferences( pref1, ... )

**설명:** 지정된 환경 설정을 가져옵니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Get Preferences

**구문:** Get Preferences( pref1, ... )

**설명:** 지정된 환경 설정을 가져옵니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Glue

**구문:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**설명:** 각 인수를 실행하고 마지막 결과를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex1 = 1;
ex2 = 2;

```

### Gzip Compress

**구문:** blob = Gzip Compress( blob )

**설명:** 데이터 BLOB를 gzip BLOB로 압축합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Gzip Compress( Char To Blob( "random data does not usually compress well and may get larger" ) );

```

### Gzip Uncompress

**구문:** blob = Gzip Uncompress( blob )

**설명:** Gzip 데이터의 BLOB를 BLOB로 압축을 풉니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### Host is

**구문:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**설명:** JMP 응용 프로그램이 인수와 매칭되면 1을 반환하고 그렇지 않으면 0을 반환합니다. 인수 Windows 또는 Mac는 지정된 운영 체제를 테스트하고 인수 Bits32 또는 Bits64는 지정된 32비트 또는 64비트 응용 프로그램을 검정합니다. 한 번에 하나의 인수만 검정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
If( Host is( "Mac" ),
	Show( "On Mac" ),
	Show( "Not on Mac" )
);
If( Host is( "Bits64" ),
	Show( "64 bit" )
);
If(
	Host is( "x86_64" ), Show( "On x86_64" ),
	Host is( "arm64" ), Show( "On arm64" )
);

```

### Is Alt Key

**구문:** y = Is Alt Key()

**설명:** Alt 키를 누르고 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다. 그래픽 콜백 스크립트에서 사용할 용도로 제공됩니다. Mac에서는 Option 키에 해당합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Command Key

**구문:** y = Is Command Key()

**설명:** Command 키를 누르고 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다. 그래픽 콜백 스크립트에서 사용할 용도로 제공됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Command Key(),
			Text( {60, 50}, "Command Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Context Key

**구문:** y = Is Context Key()

**설명:** 컨텍스트 키를 누르고 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다. 그래픽 콜백 스크립트에서 사용할 용도로 제공됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Context Key(),
			Text( {60, 50}, "Context Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Control Key

**구문:** y = Is Control Key()

**설명:** Ctrl 키를 누르고 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다. 그래픽 콜백 스크립트에서 사용할 용도로 제공됩니다. Mac에서는 Command 키에 해당합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is JMP Live URL Enabled

**구문:** Is JMP Live URL Enabled(url)

**설명:** 이 JMP 세션에서 지정된 URL을 사용할 수 있는지 여부를 확인합니다. jmpStartAdmin.jsl 스크립트를 사용하여 URL을 활성화하거나 비활성화할 수 있습니다. 이 기능은 해당 URL이 올바른 URL인지 여부나 사용자가 로그인할 수 있는지 여부는 확인하지 않으며, 단지 해당 URL이 JMP에서 차단되는지 여부만 확인합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**구문:** y = Is Option Key()

**설명:** Option 키를 누르고 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다. 그래픽 콜백 스크립트에서 사용할 용도로 제공됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Option Key(),
			Text( {60, 50}, "Option Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Shift Key

**구문:** y = Is Shift Key()

**설명:** Shift 키를 누르고 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다. 그래픽 콜백 스크립트에서 사용할 용도로 제공됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### JMP Product Name

**구문:** y = JMP Product Name()

**설명:** 사용이 허가된 제품의 버전을 기반으로 "Standard" 또는 "Pro"를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
JMP Product Name();

```

### JMP Version

**구문:** y = JMP Version()

**설명:** JMP 버전(release.revision{.fix})을 반환합니다. 6.0 이전 버전에서는 사용할 수 없습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
JMP Version();

```

### JSL Encrypted

**구문:** y = JSL Encrypted(script)

**설명:** 암호화된 스크립트를 다른 스크립트 내에 포함합니다. 스크립트 편집기의 메인 메뉴에서 편집 > 스크립트 암호화를 선택하여 암호화된 스크립트를 생성하십시오. 암호를 입력하면 암호화된 텍스트가 새 창에 나타납니다. 이 텍스트를 JSL Encrypted("") 명령에 복사하여 암호화된 스크립트를 다른 스크립트에 포함할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**구문:** y = JSL Quote(script)

**설명:** 모든 주석 및 형식 지정을 포함하여 변수에 JSL 스크립트를 저장합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

x = JSL Quote(/* Begin quote. */
    For (i = 1, i <= 5, i++,
        // Print the value of i.
        Print(i);
    );
    // End expression.
);
New Window( "editor", Script Box( x ) );

```

### Load DLL

**구문:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**설명:** 지정한 경로가 가리키는 DLL을 로드합니다.

**JMP추가된 버전:** 버전 14 이전

**Cross platform using Base Name()**

```jsl

Names Default To Here( 1 );
dll = Load DLL( Base Name( "/path/to/dll/financial" ) );
// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac
// Declarations for "irr" and "npv" are auto-loaded
myirr = dll << irr( 0.1, -51000, 1000, 900, 950 );
mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );
dll << UnloadDLL();

```

**Windows only**

```jsl

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Log Table Messages

**구문:** Log Table Messages( &lt;On|Off&gt;, &lt;Enable(subject, ...)&gt;, &lt;Disable(subject, ...)&gt;, &lt;Include(msgname, ...)&gt;, &lt;Exclude(msgname, )&gt;

**설명:** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**JMP추가된 버전:** 17

**Turn off logging**

```jsl

Names Default To Here( 1 );
Log Table Messages( Off );

```

**Turn on logging**

```jsl

Names Default To Here( 1 );
Log Table Messages( On );

```

**Turn on logging, and include all messages except "DtMsgClose"**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Exclude( "DtMsgClose" ) );

```

**Turn on logging, and include only the "DtMsgClose" message**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Include( "DtMsgClose" ) );

```

**Turn on logging, but ignore column messages**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Disable( "Column" ) );

```

**Turn on logging, but ignore table messages**

```jsl

Names Default To Here( 1 );
Log Table Messages( On );
Log Table Messages( Disable( "Table" ) );

```

### Mail

**구문:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**설명:** 운영 체제에서 허용하는 경우 지정된 대로 보내는 이메일 메시지를 생성합니다. 모든 옵션이 모든 운영 체제 버전에서 작동하는 것은 아닙니다. 자세한 내용은 도움말을 참조하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**구문:** menu = Main Menu( command, &lt;window name&gt; )

**설명:** 지정한 메인 메뉴 명령을 실행합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Main Menu( "Sample Index" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Main Menu( "Help:Sample Index" );

```

### Minus

**구문:** y = -x; y = Minus( x )

**설명:** x(숫자, 행렬 또는 숫자 목록일 수 있음)를 부정(Negate)합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
-Pi();

```

### Multiple File Import

**구문:** mfiObj = Multiple File Import();

**설명:** 여러 파일 가져오기 개체를 생성합니다. 개체는 폴더 설정, 파일 필터링 및 가져오기를 위한 메시지를 수락합니다. 대화상자를 표시하려면 "Create Window" 메시지를 사용합니다. 즉시 가져오려면 생성된 테이블 목록을 반환하는 "Import Data" 메시지를 사용합니다.

**JMP추가된 버전:** 14

**대화식 예제**

```jsl

Names Default To Here( 1 );
// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import( <<Set Folder( "$DESKTOP" ), <<Set Name Filter( "*.csv;" ), <<Set Name Enable( 1 ) ) <<
Create Window;

```

**스크립트 예제**

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Multiply

**구문:** y = x0 * x1; y = Multiply( x0, x1, ... )

**설명:** 모든 인수(숫자, 행렬 또는 숫자 목록일 수 있음)를 곱합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
2 * Pi();

```

### Name

**구문:** Name(string)

**설명:** 이름은 단순히 항목을 호출하기 위한 수단입니다. 이름은 변수와 함수 모두에 사용되며 특정 규칙을 따를 경우 스크립트 내에서 직접 사용할 수 있습니다. 이름이 영문자나 밑줄로 시작하고 뒤에 영숫자, 공백, 유니코드 수학 기호 및 특정 구두점(아포스트로피(’), 백분율 기호(%), 마침표(.), 백슬래시(\) 및 밑줄(_))이 나오더라도 스크립트 내에서 이름으로 사용할 수 있습니다. 이러한 규칙을 따르지 않는 이름은 Name() 명령어를 통해 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### New Clipboard

**구문:** clp = New Clipboard( &lt;&lt;&lt;Get From OS&gt; )

**설명:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New HTTP Request

**구문:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**설명:** 웹 서비스로 전송할 요청을 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

getSentiment = Function( {text},
	{Default Local},
	fields = Associative Array();
	fields["text"] = text;
	s = New HTTP Request(
		URL( "http://text-processing.com/api/sentiment/" ),
		Method( "POST" ),
		Form( Fields( fields ) ),
		Headers( {"Accept: application/json"} )
	) << Send;
	sAsList = Parse JSON( s );
	retval = Associative Array();
	retval["pos"] = sAsList["probability"]["pos"];
	retval["neg"] = sAsList["probability"]["neg"];
	retval["neutral"] = sAsList["probability"]["neutral"];
	retval["label"] = sAsList["label"];
	retval;
);
                         
addSentimentColumns = Function( {dt, colname, bLabel, bValues},
	{Default Local},
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		sentiment = getSentiment( col[i] );
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);
                         
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Multi HTTP Request

**구문:** multi_request = New Multi HTTP Request()

**설명:** 여러 HTTP 요청을 동시에 보내거나 다운로드합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL( "http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso" )
	)
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL( "http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso" )
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

### New OAuth2

**구문:** oauth2 = New OAuth2()

**설명:** 새 OAuth2 권한 부여를 생성합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];
                                          
oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );
                                          
auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;
                                          
oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );
                                          
auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

### New OAuth2 Token

**구문:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**설명:** 다양한 웹 API에서 데이터에 안전하게 액세스하기 위한 OAuth2 토큰을 생성합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
token = New OAuth2 Token(
	Account( "jmpgoogldev@gmail.com" ),
	Client ID( "test" ),
	Client Secret( "test 2" ),
	Refresh Token( "" ),
	Token URL( "" )
);

```

### New Web Report

**구문:** obj = New Web Report(...)

**설명:** 대화식 HTML 보고서를 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
webreport = New Web Report(
	Add Report(
		Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) ),
		Title( "Distribution Web Report" ),
		Description( "This report was created with the sample found in the Scripting Index" )
	),
	Add Report(
		Bivariate(
			Y( :weight ),
			X( :height ),
			Automatic Recalc( 1 ),
			Fit Line( {Line Color( {213, 72, 87} )} ),
			Local Data Filter( Add Filter( columns( :sex ) ) )
		)
	)
);
webreport << Index( Title( "Big Class Report" ) );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Notebook

**구문:** nb = Notebook( name|number )

**설명:** 지정된 노트북에 대한 참조를 반환합니다.

**JMP추가된 버전:** 19

### Open Datafeed

**구문:** y = Open Datafeed( ... )

**설명:** 실시간 데이터 공급을 관리하기 위해 메시지를 보낼 수 있는 개체 및 창을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Open Help

**구문:** w = Open Help( "Help" | "Scripting Index", ... )

**설명:** 온라인 JMP 도움말 또는 스크립트 인덱스를 엽니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Open Help( "Help" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "Functions" ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "All Categories" ), Object( "Search results" ), Method( "Get Alpha" ) )
);

```

### Parse XML

**구문:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**설명:** 지정된 XML 태그에 대해 OnElement 표현을 사용하여 XML 표현식을 파싱합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
/*See example two for more details*/
ex = "<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element( "col", End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );

doc =
"
<a title='one'>
    WWWa
    <b>BB<c>ZZZ</c>B1</b>
    XXXa
    <b>BBB2</b>
    YYYa
    <c>CCC</c>
</a>";
// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,
// to show why text should be collected by Text(...) and then processed by EndTag(...)
// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.
docname = "undefined";
doctext = "";
recordtext = "";
records = {};
NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting level
Parse XML( doc,
	On Element(
		"a",
		Start Tag(
			docname = XML Attr( "title" );
			NestLevel++;
		), 
        // decide here to trim the CRLF and blanks and use a single blank
		Text( doctext = doctext || Trim( XML Text() ) || " " ),
		End Tag( NestLevel-- )
	),
	On Element(
		"b",
		Start Tag( NestLevel++ ), 
        // comment out the next line and...
		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),
		End Tag(
            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records
			// recordtext = XMLText();
			Insert Into( records, recordtext );
			recordtext = "";
			NestLevel--;
		)
	)
);

Show( docname, doctext, records, NestLevel );

```

### Pdf Page Count

**구문:** Pdf Page Count( file name)

**설명:** PDF 파일의 페이지 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**구문:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**설명:** 지정된 대로 플랫폼 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**구문:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**설명:** 지정된 대로 플랫폼 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Polytope Uniform Random

**구문:** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt; )

**설명:** 볼록 다포체(polytope)에 균등하게 분포하는 난수(점)를 생성합니다. numSamples 인수는 생성할 점의 수를 지정합니다. A 인수는 제약 조건 계수 행렬입니다. B 인수는 제약 조건의 오른쪽 값입니다. L 및 U 인수는 각각 변수의 하한 및 상한입니다. neq, mle 및 nge 인수는 각각 등식 제약 조건의 수, 제약 조건 수보다 작거나 같은 숫자, 제약 조건 수보다 크거나 같은 숫자입니다. nwarm 인수는 점이 출력 행렬에 작성되기 전의 워밍업 반복의 수입니다. nstride 인수는 출력 행렬에 작성되는 각 점 사이의 반복 수입니다. 제약 조건은 등식, 보다 작거나 같음, 보다 크거나 같음의 순서로 나열되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Polytope Uniform Random( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Polytope Uniform Random",
	Outline Box( "Points on a Ternary Plot", tfr ),
	Outline Box( "Constraints", Text Box( "X1 + x2 + x3 = 1" ), Text Box( "X2 + 2*x2 >= 0.5" ) ),
	Outline Box( "Variable Bounds",
		Text Box( "0 <= x1 <= 1" ),
		Text Box( "0 <= x2 <= 1" ),
		Text Box( ".1 < x3 <= 1" )
	)
);
Close( dt, no save );
Show( "see new window for example output" );

```

### Pref

**구문:** Preferences( pref1( value1 ), ... )

**설명:** 지정된 대로 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preference

**구문:** Preferences( pref1( value1 ), ... )

**설명:** 지정된 대로 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preferences

**구문:** Preferences( pref1( value1 ), ... )

**설명:** 지정된 대로 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Prefs

**구문:** Preferences( pref1( value1 ), ... )

**설명:** 지정된 대로 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**구문:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;LoadsAtStartup(autoLoad)&gt;, &lt;LoadNow(load)&gt; )

**설명:** 추가기능을 등록합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Register Addin( "com.mycompany.myaddin", "$DOCUMENTS/myaddin", displayname( "Sample Addin" ) );

```

### Reload Policies

**구문:** Reload Policies()

**JMP추가된 버전:** 18

### Revert Menu

**구문:** Revert Menu()

**설명:** 초기 기본 설정 메뉴로 되돌립니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
/* Reverts menus back to factory default settings. */

```

### Rummage

**구문:** treasures = Rummage( box, query )

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	Rummage( Window( dt ), "graph builder", Algorithm( "FilterUtility" ), Match All Terms( 0 ) )[1 :: 5] <<
	Title
);
Show( Rummage( Window( dt ), "graph builder", Algorithm( "Basic" ) )[1 :: 3] << Title );

```

### Run Program

**구문:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**설명:** stdin 및 stdout을 사용하여 외부 프로그램을 제어합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};
icommand = 0;
RP = Run Program(
	Executable( "CMD.EXE" ),
	Options( {"/a", "/q"} ),
	ReadFunction( Function( {this}, Write( this << Read ) ) ),
	WriteFunction(
		Function( {this},
			icommand++;
			If( icommand <= N Items( commands ),
				this << Write( commands[icommand] );
				Show( commands[icommand] );
			,
				this << WriteEOF;
				Show( this << CanRead, this << CanWrite, this << isReadEOF );
			);
		)
	)
);

```

### Schedule

**구문:** Schedule( sec, scpt )

**설명:** sec초가 경과한 후 scpt 스크립트 인수를 실행하는 이벤트를 예약합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Set Clipboard

**구문:** Set Clipboard( text )

**설명:** 지정한 텍스트를 편집 메뉴에 사용되는 시스템 클립보드에 넣습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Set Clipboard( "example" );

```

### Set Platform Preference

**구문:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**설명:** 지정된 대로 플랫폼 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**구문:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**설명:** 지정된 대로 플랫폼 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**구문:** Set Policy("PolicyName", &lt;Empty()|#|"value"&gt; )

**JMP추가된 버전:** 18

### Set Preference

**구문:** Preferences( pref1( value1 ), ... )

**설명:** 지정된 대로 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**구문:** Preferences( pref1( value1 ), ... )

**설명:** 지정된 대로 환경 설정을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**구문:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**설명:** 지정된 창 클래스에 대한 지정된 도구 모음의 표시 여부를 설정합니다. toolbar-name은 도구 모음의 내부 이름입니다. Default가 도구 모음 이름으로 전달되면 지정된 창 클래스가 해당 창 클래스에 대해 설정된 기본 도구 모음으로 복원됩니다. window-class-name의 예로는 Data Table, Script, Report 및 Journal이 있습니다. window-class-name이 All이면 지정된 도구 모음에 대한 표시 여부가 모든 창 클래스에 대해 설정됩니다.

성공하면 1을 반환하고 성공하지 못하면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

// Make the Analyze toolbar visible in Script windows
Set Toolbar Visibility( "Analyze", Script, true );

// Make the Analyze toolbar visible in all classes of windows
Set Toolbar Visibility( "Analyze", All, true );

// Revert Script windows to the default toolbar set for Script windows
Set Toolbar Visibility( Default, Script );

// Revert all windows to their default toolbar set
Set Toolbar Visibility( Default, All );

```

### Shortest Edit Script

**구문:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**설명:** 문자열 A를 문자열 B로 변환하는 가장 짧은 편집 스크립트 중 하나를 반환합니다. 단순한 형태는 목록만 반환합니다. strings() 및 lines()에는 행렬 또는 목록을 반환하는 옵션이 있습니다. sequences()는 행렬만 반환합니다. 선택적 limit()은 편집 목록의 삽입 및 삭제 횟수가 한계 값보다 많을 경우 함수의 실행을 조기에 중지합니다. lines()는 문자 대신 줄을 비교합니다. 선택적 ignore("characters") 또는 ignoreWhiteSpace()의 기본값은 문자를 무시하지 않음입니다. 필요한 경우 Esc 키를 누르면 함수 실행이 중지됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );
common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ), i++,
	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2] /* the snippet */
	)
);
common;

```

### Show Addin Builder Dialog

**구문:** Show Addin Builder Dialog()

**설명:** 사용자 추가기능을 생성하는 데 사용할 수 있는 대화상자를 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show Addin Builder Dialog();

```

### Show Addins Dialog

**구문:** Show Addins Dialog()

**설명:** 등록된 모든 추가기능의 상태를 보여 주는 대화상자를 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show Addins Dialog();

```

### Show Commands

**구문:** Show Commands( &lt;keyword=Builtins&gt; )

**설명:** 다양한 JSL 구성 요소에 대한 정보가 포함된 하나 이상의 데이터 테이블을 생성합니다. keyword 인수는 출력 테이블의 내용을 결정합니다. 기본 제공 연산자 및 함수에 대해 Builtins(기본값)를 지정합니다. 개체의 모든 스크립트 가능 명령에 대해 Scriptables를 지정합니다. 영어 및 로컬라이즈된 버전의 스크립트 가능 명령에 대해 Translations를 지정합니다. 표시 상자 및 표시 세그먼트와 관련된 스크립트 가능 명령에 대해 Display Boxes를 지정합니다. 스크립트 가능 개체의 이름에 대해 Scriptable Names를 지정합니다. 플랫폼 이름에 대해 Platform Names를 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show Commands();

```

### Show Preferences

**구문:** Show Preferences()

**설명:** 현재 환경 설정을 로그에 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show Preferences();

```

### Show Properties

**구문:** Show Properties( object )

**설명:** 개체가 응답하는 메시지를 로그에 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**구문:** points = Sobol Quasi Random Sequence(nDim, nRow)

**설명:** Sobol 시퀀스를 사용하여 최대 4000개 차원까지 공간 채움 준난수 시퀀스를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**구문:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**설명:** 이 컴퓨터 또는 네트워크에 연결된 다른 컴퓨터의 소켓과 통신할 수 있는 소켓 변수를 생성합니다. 기본 인수는 STREAM입니다. 귀사의 웹 사이트와 통신을 시도해 보십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

// see the socket's OBJECT messages in the scripting index for better examples
tCall = Socket();
tcall << Ioctl( FIONBIO, 1 );
rc = tCall << connect( "www.jmp.com", "80" );
If( rc[2] == "ok",
	tCall << <<Char To Blob(
		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",
		"ASCII~HEX"
	);
	While( 1,
		tMessage = tCall << Recv( 100000 );
		If(
			tMessage[2] == "ok",
				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes
		,
			Starts With( tMessage[2], "WOULDBLOCK" ),
				Show( "waiting" ) // sometimes data might not be available yet
		,
			Starts With( tMessage[2], "CLOSED" ),
				Break(); // this is the desired result
		, // else
			Show( tMessage );
			Stop();
		);
	);
	tCall << Close();// done
, // else
	Show( rc );
	Stop();
);

```

### Speak

**구문:** Speak( text, &lt;Wait( sync )&gt; )

**설명:** 운영 체제에서 지원되는 경우 텍스트를 읽어 줍니다. 선택적 Wait(true) 인수를 지정하면 읽어주기가 완료될 때까지 스크립트 실행이 지연됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Speak( "Hello" );

```

### Status Msg

**구문:** Status Msg( message )

**설명:** 지정한 메시지를 상태 표시줄에 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Status Msg( "calculating..." );

```

### Subtract

**구문:** y = x0 - x1; y = Subtract( x0, x1, ... )

**설명:** 첫 번째 인수에서 이후의 모든 인수를 순차적으로 뺍니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
6 - 2 - 1;

```

### Test Promise Error After

**JMP추가된 버전:** 17

### Test Promise Result After

**JMP추가된 버전:** 17

### Unit Test

**JMP추가된 버전:** 버전 14 이전

### Unregister Addin

**구문:** Unregister Addin( uniqueId)

**설명:** 추가기능의 등록을 해제합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**구문:** Web( string, &lt;JMP Window&gt; )

**설명:** string에 저장된 파일 또는 URL을 기본 웹 브라우저에서 엽니다. 두 번째 인수(선택적)는 HTML이 JMP 브라우저 창에서 열리도록 지정합니다.

**JMP추가된 버전:** 버전 14 이전

**단순**

```jsl

Names Default To Here( 1 );
Web( "http://www.jmp.com/" );

```

**이벤트 처리기**

```jsl

Names Default To Here( 1 );
//Making a clickable link show up in a formula column
New Table( "Example",
	Add Rows( 2 ),
	New Column( "URL",
		"Character",
		"Nominal",
		Formula( "https://www.jmp.com/" || :Page ),
		Set Property(
			"Event Handler",
			Event Handler( Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) ) )
		)
	),
	New Column( "Page",
		"Character",
		"Nominal",
		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )
	)
);

```

### With Clipboard

**구문:** two = With Clipboard( clp, box &lt;&lt; Paste; 1 + 1 )

**설명:** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
With Clipboard( clp, dt << Select Columns( :weight ) << Paste Column Properties );

```

### XML Attr

**구문:** value = XML Attr( attr name ); aa = XML Attr()

**설명:** Parse XML() 명령에서 실행하는 컨텍스트로 XML 속성의 문자열 값을 추출합니다. 이름을 제공하지 않은 경우 모든 속성 이름/값 쌍의 연관 배열이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = "<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element( "col", End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) ) )
);

```

### XML Decode

**구문:** text = XML Decode( textxml )

**설명:** XML의 기호를 일반 텍스트로 디코딩하고 "를 "로, <를 <로, &gt를 >로, &를 &로 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**구문:** textxml = XML Encode( text )

**설명:** XML의 기호를 일반 텍스트로 디코딩합니다. "를 "로, <를 <로, &gt를 >로, &를 &로 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**구문:** value = XML Text()

**설명:** Parse XML() 명령을 사용할 수 있도록 XML 태그의 본문 문자열 텍스트를 추출합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = "<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element( "col", End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) ) )
);

```

### \[...]\

**구문:** y = \[string]\

**설명:** 여러 개의 이스케이프 문자가 필요한 구에는 \[...]\ 구분자를 사용할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

jslPhrase =
"The JSL to do this is :\[
a = "hello";
b = a|| " world.";
show(b);
]\ and you use the Submit command to run it.";
Show( jslPhrase );

```

