# Multiple File Import



## 연결된 생성자

### Multiple File Import

**구문:** mfiObj = Multiple File Import();

**설명:** 여러 파일 가져오기 개체를 생성합니다. 개체는 폴더 설정, 파일 필터링 및 가져오기를 위한 메시지를 수락합니다. 대화상자를 표시하려면 "Create Window" 메시지를 사용합니다. 즉시 가져오려면 생성된 테이블 목록을 반환하는 "Import Data" 메시지를 사용합니다.

```jsl

Names Default To Here( 1 );
// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import( <<Set Folder( "$DESKTOP" ), <<Set Name Filter( "*.csv;" ), <<Set Name Enable( 1 ) ) <<
Create Window;

```

## 항목 메시지

### Create Window

**구문:** obj &lt;&lt; Create Window

**설명:** 현재 설정으로 창을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << set folder( "$sample_import_data" );
mfi << create window();

```

### Get Add File Date Column

**구문:** obj &lt;&lt; Get Add File Date Column

**설명:** 가져온 테이블에 행을 가져온 소스 파일 이름에 대한 열이 있으면 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );
mfi << Get Add File Date Column();

```

### Get Add File Name Column

**구문:** obj &lt;&lt; Get Add File Name Column

**설명:** 가져온 테이블에 행을 가져온 소스 파일 이름에 대한 열이 있으면 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );
mfi << Get Add File Name Column();

```

### Get Add File Size Column

**구문:** obj &lt;&lt; Get Add File Size Column

**설명:** 가져온 테이블에 행을 가져온 소스 파일의 크기에 대한 열이 있으면 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );
mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**구문:** obj &lt;&lt; Get CSV Allow Numeric

**설명:** 명백한 숫자 데이터에서 숫자 열이 생성될 경우 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**구문:** obj &lt;&lt; Get CSV EOF Comma

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 쉼표를 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**구문:** obj &lt;&lt; Get CSV EOF Other

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하는 값으로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**구문:** obj &lt;&lt; Get CSV EOF Space

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 공백을 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**구문:** obj &lt;&lt; Get CSV EOF Spaces

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 공백을 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**구문:** obj &lt;&lt; Get CSV EOF Tab

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 탭을 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**구문:** obj &lt;&lt; Get CSV EOL CR

**설명:** CR을 여러 행을 생성하는 데 사용할 줄을 구분하는 값으로 사용하는 경우 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**구문:** obj &lt;&lt; Get CSV EOL CRLF

**설명:** CRLF를 여러 행을 생성하는 데 사용할 줄을 구분하는 값으로 사용하는 경우 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**구문:** obj &lt;&lt; Get CSV EOL LF

**설명:** LF를 여러 행을 생성하는 데 사용할 줄을 구분하는 값으로 사용하는 경우 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**구문:** obj &lt;&lt; Get CSV EOL Other

**설명:** 입력 파일에서 줄을 구분하는 사용자 값을 가져옵니다. 이 값은 출력에 행을 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**구문:** obj &lt;&lt; Get CSV EOL Semicolon

**설명:** 세미콜론이 행 사이의 줄을 나타내는 경우 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**구문:** obj &lt;&lt; Get CSV Escape

**설명:** 필드의 끝, 줄의 끝 또는 따옴표 구분자와 같은 특수 문자를 이스케이프하는 문자를 가져옵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Escape();

```

### Get CSV First Data Line

**구문:** obj &lt;&lt; Get CSV First Data Line

**설명:** 가져오기 파일에서 첫 번째 데이터 행을 포함하는 행 번호입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**구문:** obj &lt;&lt; Get CSV First Header Line

**설명:** 가져오기 파일에서 열 이름을 생성하는 데 사용할 머리글이 있는 첫 번째 줄을 가져옵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );
mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**구문:** obj &lt;&lt; Get CSV Has Headers

**설명:** 가져오는 동안 머리글 설정을 사용할 경우 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**구문:** obj &lt;&lt; Get CSV Number Of Header Lines

**설명:** 열 이름에 사용할 머리글 줄 수를 가져옵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );
mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**구문:** obj &lt;&lt; Get CSV Quote

**설명:** 따옴표로 묶은 문자열을 구분하는 값을 가져옵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Quote();

```

### Get Charset

**구문:** obj &lt;&lt; Get Charset

**설명:** 데이터 가져오기에 사용할 문자 집합을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Charset();

```

### Get Date Count

**구문:** obj &lt;&lt; Get Date Count

**설명:** 날짜 필터가 사용되면 해당 필터 범위에 속한 파일의 수를 반환하고 그렇지 않으면 총 파일 수를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$downloads" );
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Count();

```

### Get Date Enable

**구문:** obj &lt;&lt; Get Date Enable

**설명:** 날짜 필터가 사용되면 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Date Enable();

```

### Get Date Filter

**구문:** obj &lt;&lt; Get Date Filter

**설명:** 현재 날짜 필터를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**구문:** obj &lt;&lt; Get Excel Add Sheet Name Column

**설명:** 데이터를 가져온 원래 스프레드시트의 이름이 포함된 열이 가져온 테이블에 추가되면 1을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**구문:** obj &lt;&lt; Get Excel Best Guess

**설명:** 데이터와 열 머리글을 동적으로 찾을 경우 1을 반환합니다. Excel 데이터를 가져올 때 다른 Excel 설정이 사용되는 경우 0을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**구문:** obj &lt;&lt; Get Excel Column Headers As Hierarchies

**설명:** 가로로 둘 이상의 셀에 걸쳐 있는 머리글 행의 스프레드시트 셀이 계층으로 처리되는 경우 1을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**구문:** obj &lt;&lt; Get Excel Column Name Separator

**설명:** 여러 셀을 열 머리글 이름으로 연결할 때 사용할 문자열을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**구문:** obj &lt;&lt; Get Excel First Data Column

**설명:** 스프레드시트에서 데이터로 가져올 비어 있지 않은 첫 번째 열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**구문:** obj &lt;&lt; Get Excel First Data Line

**설명:** 스프레드시트에서 데이터로 가져올 비어 있지 않은 첫 번째 행을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**구문:** obj &lt;&lt; Get Excel First Header Line

**설명:** 스프레드시트에서 열 머리글로 가져올 비어 있지 않은 첫 번째 행을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**구문:** obj &lt;&lt; Get Excel Has Headers

**설명:** 스프레드시트에서 머리글을 가져오면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**구문:** obj &lt;&lt; Get Excel Import Color Cells

**설명:** 스프레드시트 데이터 셀의 배경 색상을 가져올 경우 1을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**구문:** obj &lt;&lt; Get Excel Last Data Column

**설명:** 가져올 스프레드시트의 데이터 영역에서 마지막 열을 반환합니다. 결측값이 반환되면 마지막 열을 동적으로 찾습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**구문:** obj &lt;&lt; Get Excel Last Data Row

**설명:** 가져올 스프레드시트의 데이터 영역에서 마지막 행을 반환합니다. 결측값이 반환되면 마지막 행을 동적으로 찾습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**구문:** obj &lt;&lt; Get Excel Limit Column Type Detection

**설명:** 열의 데이터 유형을 감지할 때 각 열의 모든 스프레드시트 셀을 확인하면 0을 반환하고, 일부만 확인하면 1을 반환합니다. 감지를 제한하면 큰 스프레드시트에서 성능이 향상될 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**구문:** obj &lt;&lt; Get Excel Multiple Series Stack

**설명:** "Set Excel Column Headers As Hierarchies"가 1로 설정된 경우 범위 내의 모든 열이 쌓이면 1을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**구문:** obj &lt;&lt; Get Excel Number of Header Lines

**설명:** 스프레드시트에서 열 머리글로 가져올 행 수를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**구문:** obj &lt;&lt; Get Excel Replicate Data In Spanned Rows

**설명:** 세로로 병합되는 여러 머리글 행의 경우 값을 반복하려면 1로 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**구문:** obj &lt;&lt; Get Excel Replicate Headers In Spanned Rows

**설명:** JMP 테이블 열 이름을 생성할 때 병합된 스프레드시트 머리글 셀에 중복된 셀 값이 있으면 1을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**구문:** obj &lt;&lt; Get Excel Suppress Empty Columns

**설명:** 빈 열을 가져오지 않게 하려면 1로 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**구문:** obj &lt;&lt; Get Excel Suppress Hidden Columns

**설명:** 숨겨진 열을 가져오지 않을 경우 1을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**구문:** obj &lt;&lt; Get Excel Suppress Hidden Rows

**설명:** 숨겨진 행을 가져오지 않을 경우 1을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**구문:** obj &lt;&lt; Get Excel Worksheet Filter

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Worksheet Filter;

```

### Get File List

**구문:** obj &lt;&lt; Get File List

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

```

### Get Folder

**구문:** obj &lt;&lt; Get Folder

**설명:** 폴더 이름을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder;

```

### Get Folder Count

**구문:** obj &lt;&lt; Get Folder Count

**설명:** 폴더의 파일 개수를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder Count;

```

### Get Import Callback

**구문:** obj &lt;&lt; Get Import Callback

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Create Directory( "$temp/deleteme" );
Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );
Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );
mfi = Multiple File Import(
	<<Set Folder( "$temp/deleteme/" ),
	<<Set Name Filter( "test?.txt;" ),
	<<Set Name Enable( 1 ),
	<<Set Add File Name Column( 1 ),
	<<Set Import Callback(
		Function( {a, b},
			Write( "\!na=", a );
			Write( "\!nb=", b );
		)
	)
);
mfi << Get Import Callback();

```

### Get Import Mode

**구문:** obj &lt;&lt; Get Import Mode

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );
mfi << Get Import Mode();

```

### Get JSON Guess

**구문:** obj &lt;&lt; Get JSON Guess

**설명:** 데이터 테이블 생성을 위해 JSON 데이터를 가져오는 기본 제공 방법을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Guess();

```

### Get JSON Method

**구문:** obj &lt;&lt; Get JSON Method

**설명:** JSON 데이터를 가져오는 데 사용되는 현재 방법을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Method();

```

### Get JSON Settings

**구문:** obj &lt;&lt; Get JSON Settings

**설명:** JSON 데이터를 가져오는 사용자 JSL을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Settings();

```

### Get Name Count

**구문:** obj &lt;&lt; Get Name Count

**설명:** "Set Name Enable"이 설정되어 있으면 현재 이름 필터와 매칭되는 파일의 수를 반환하고 그렇지 않으면 총 파일 수를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Name Count();

```

### Get Name Enable

**구문:** obj &lt;&lt; Get Name Enable

**설명:** 포함되는 파일을 필터링하기 위해 현재 이름 필터를 적용할 경우 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );
mfi << Get Name Enable();

```

### Get Name Filter

**구문:** obj &lt;&lt; Get Name Filter

**설명:** 현재 이름 필터를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );
mfi << Set Name Enable( 1 );
mfi << Get Name Filter();

```

### Get PDF Method

**구문:** obj &lt;&lt; Get PDF Method

**설명:** PDF 데이터를 가져오는 데 사용되는 현재 방법을 반환합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Method();

```

### Get PDF Settings

**구문:** obj &lt;&lt; Get PDF Settings

**설명:** PDF 데이터를 가져오는 사용자 JSL을 반환합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Settings();

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 현재 설정에서 스크립트를 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Script();

```

### Get Show Hidden

**구문:** obj &lt;&lt; Get Show Hidden

**설명:** 숨겨진 파일의 포함 여부를 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );
mfi << Get Show Hidden();

```

### Get Size Count

**구문:** obj &lt;&lt; Get Size Count

**설명:** "Set Size Enable"이 설정되어 있으면 현재 크기 필터와 매칭되는 파일의 수를 반환하고 그렇지 않으면 총 파일 수를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Documents" );
mfi << Set Size Filter( {0, 1000} );
mfi << Set Size Enable( 1 );
Print( mfi << Get Size Count() );
mfi << Set Size Enable( 0 );
Print( mfi << Get Size Count() );

```

### Get Size Enable

**구문:** 0|1 = obj &lt;&lt; Get Size Enable

**설명:** 크기 필터가 사용되면 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Enable();

```

### Get Size Filter

**구문:** obj &lt;&lt; Get Size Filter

**설명:** 첫 번째 멤버는 가장 작은 파일 크기이고 두 번째 값은 가장 큰 파일 크기인 목록을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Filter();

```

### Get Stack Mode

**구문:** obj &lt;&lt; Get Stack Mode

**설명:** 가져올 때 유사한 입력 파일이 하나의 테이블에 결합될 경우 "Stack Similar"을 반환하고 입력 파일이 두 개 이상의 테이블에 결합될 경우에는 "Table Per File"을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Stack Mode();

```

### Get Subfolders

**구문:** obj &lt;&lt; Get Subfolders

**설명:** 하위 폴더의 파일이 포함되면 1을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );
mfi << Get Subfolders();

```

### Get Use File List

**구문:** obj &lt;&lt; Get Use File List

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

```

### Get XML Guess

**구문:** obj &lt;&lt; Get XML Guess

**설명:** 데이터 테이블 생성을 위해 XML 데이터를 가져오는 기본 제공 방법을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Guess();

```

### Get XML Method

**구문:** obj &lt;&lt; Get XML Method

**설명:** XML 데이터를 가져오는 데 사용되는 현재 방법을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Method();

```

### Get XML Settings

**구문:** obj &lt;&lt; Get XML Settings

**설명:** Xml 데이터를 가져오기 위한 사용자 jsl을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Settings();

```

### Import Data

**구문:** list of data tables = obj &lt;&lt; Import Data

**설명:** 현재 설정에 따라 데이터를 가져오고 데이터 테이블 목록을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Set Add File Date Column

**구문:** obj &lt;&lt; Set Add File Date Column

**설명:** 행을 가져온 소스 파일의 파일 크기로 열을 생성하도록 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**구문:** obj &lt;&lt; Set Add File Name Column

**설명:** 행을 가져온 소스 파일 이름으로 열을 생성하도록 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**구문:** obj &lt;&lt; Set Add File Size Column

**설명:** 행을 가져온 소스 파일의 파일 크기로 열을 생성하도록 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**구문:** obj &lt;&lt; Set CSV Allow Numeric

**설명:** 명백한 숫자 데이터에서 숫자 열을 생성할 수 있게 하려면 1로 설정하고 모든 문자 열을 생성하려면 0으로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**구문:** obj &lt;&lt; Set CSV EOF Comma

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 쉼표를 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**구문:** obj &lt;&lt; Set CSV EOF Other

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하는 값으로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**구문:** obj &lt;&lt; Set CSV EOF Space

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 공백을 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**구문:** obj &lt;&lt; Set CSV EOF Spaces

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 공백을 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**구문:** obj &lt;&lt; Set CSV EOF Tab

**설명:** 여러 열을 생성하는 데 사용할 필드를 구분하기 위해 탭을 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**구문:** obj &lt;&lt; Set CSV EOL CR

**설명:** CR을 여러 행을 생성하는 데 사용할 줄을 구분하는 값으로 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**구문:** obj &lt;&lt; Set CSV EOL CRLF

**설명:** CRLF를 여러 행을 생성하는 데 사용할 줄을 구분하는 값으로 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**구문:** obj &lt;&lt; Set CSV EOL LF

**설명:** LF를 여러 행을 생성하는 데 사용할 줄을 구분하는 값으로 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**구문:** obj &lt;&lt; Set CSV EOL Other

**설명:** 입력 파일에서 줄을 구분하는 사용자 값을 설정합니다. 이 값은 출력에 행을 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**구문:** obj &lt;&lt; Set CSV EOL Semicolon

**설명:** 세미콜론을 사용하여 행 사이의 줄을 나타내려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**구문:** obj &lt;&lt; Set CSV Escape

**설명:** 필드의 끝, 줄의 끝 또는 따옴표 구분자와 같은 특수 문자를 이스케이프하는 문자를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**구문:** obj &lt;&lt; Set CSV First Data Line

**설명:** 가져오기 파일에서 첫 번째 데이터 행을 포함하는 행 번호입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**구문:** obj &lt;&lt; Set CSV First Header Line

**설명:** 가져오기 파일에서 열 이름을 생성하는 데 사용할 머리글이 있는 첫 번째 줄을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**구문:** obj &lt;&lt; Set CSV Has Headers

**설명:** "CSV 첫 번째 머리글 행" 및 "CSV 머리글 행 개수"를 사용하려면 1로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**구문:** obj &lt;&lt; Set CSV Number Of Header Lines

**설명:** 열 이름에 사용할 머리글 줄 수를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**구문:** obj &lt;&lt; Set CSV Quote

**설명:** 따옴표로 묶은 문자열을 구분하는 값을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Quote( "'" );

```

### Set Charset

**구문:** obj &lt;&lt; Set Charset

**설명:** 데이터를 가져올 때 사용해야 할 문자 집합을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**구문:** obj &lt;&lt; Set Date Enable

**설명:** 날짜/시간 필터를 사용합니다. 기본값은 off이며 날짜 필터가 설정된 경우에도 필터를 무시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Date Filter

**구문:** obj &lt;&lt; Set Date Filter( {start of date time range, end of date time range} )

**설명:** 포함된 파일을 날짜 및 시간 범위에 따라 필터링합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**구문:** obj &lt;&lt; Set Excel Add Sheet Name Column

**설명:** 1로 설정하면 데이터를 가져온 원래 스프레드시트의 이름이 포함된 열이 가져온 테이블에 추가됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**구문:** obj &lt;&lt; Set Excel Best Guess

**설명:** 각 스프레드시트에서 데이터를 동적으로 찾고 최적 열 이름을 추측합니다. 이 옵션을 설정하면 "Set Excel Add Sheet Name Column"을 제외하고 다른 Excel 파라미터가 사용되지 않습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**구문:** obj &lt;&lt; Set Excel Column Headers As Hierarchies

**설명:** 여러 열 머리글 행을 계층으로 처리하려면 1로 설정합니다. 이렇게 하면 머리글에서 범위 내의 셀에 있는 정보가 재구성되고, 해당 데이터를 생성된 테이블의 행에 배치합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

Multiple File Import(
	fJust << Set Folder( "$sample_import_data" ),
	<<Set Name Filter( "texas precipitation.xlsx" ),
	<<Set Name Enable( 1 ),
	<<Set Excel Best Guess( 0 ),
	<<Set Excel Has Headers( 1 ),
	<<Set Excel Number of Header Lines( 2 ),
	<<Set Excel First Data Line( 3 ),
	<<Set Excel Last Data Row( 6 ),
	<<Set Excel Column Headers As Hierarchies( 1 )
) << import data;

```

### Set Excel Column Name Separator

**구문:** obj &lt;&lt; Set Excel Column Name Separator

**설명:** 여러 셀을 열 머리글 이름으로 연결할 때 구분 기호로 사용할 문자열을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**구문:** obj &lt;&lt; Set Excel First Data Column

**설명:** 스프레드시트에서 데이터로 가져올 비어 있지 않은 첫 번째 열의 번호를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**구문:** obj &lt;&lt; Set Excel First Data Line

**설명:** 스프레드시트에서 데이터로 가져올 비어 있지 않은 첫 번째 행의 번호를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**구문:** obj &lt;&lt; Set Excel First Header Line

**설명:** 스프레드시트에서 열 머리글을 정의하는 데 사용할 비어 있지 않은 첫 번째 행의 번호를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**구문:** obj &lt;&lt; Set Excel Has Headers

**설명:** "Set Excel First Header Line" 및 "Set Excel Number of Header Lines"를 사용하여 가져오기 중에 열 머리글을 정의합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**구문:** obj &lt;&lt; Set Excel Import Color Cells

**설명:** 1로 설정하면 데이터 셀의 배경 색상을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**구문:** obj &lt;&lt; Set Excel Last Data Column

**설명:** 가져올 스프레드시트의 데이터 영역에서 마지막 열을 설정합니다. 데이터 영역은 모든 빈 열 다음에 시작됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**구문:** obj &lt;&lt; Set Excel Last Data Row

**설명:** 가져올 스프레드시트의 데이터 영역에서 마지막 행을 설정합니다. 데이터 영역은 모든 빈 행 다음에 시작됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**구문:** obj &lt;&lt; Set Excel Limit Column Type Detection

**설명:** 열의 데이터 유형을 자동으로 감지할 때 열의 일부 행만 확인하려면 1로 설정합니다. 값이 1이면 더 빠르지만 열 맨 아래의 값과 맨 위 값의 데이터 유형이 다른 경우 잘못된 데이터 유형을 선택할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**구문:** obj &lt;&lt; Set Excel Multiple Series Stack

**설명:** 이 값을 1로 설정하고 "Set Excel Column Headers As Hierarchies"를 1로 설정하면 범위 내의 모든 열이 쌓입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

Multiple File Import(
	<<Set Folder( "$sample_import_data" ),
	<<Set Name Filter( "texas precipitation.xlsx" ),
	<<Set Name Enable( 1 ),
	<<Set Excel Best Guess( 0 ),
	<<Set Excel Has Headers( 1 ),
	<<Set Excel Number of Header Lines( 2 ),
	<<Set Excel First Data Line( 3 ),
	<<Set Excel Last Data Row( 6 ),
	<<Set Excel Column Headers As Hierarchies( 1 ), // must be set for Multiple Series Stack
	<<Set Excel Multiple Series Stack( 1 ),

) << import data;

```

### Set Excel Number of Header Lines

**구문:** obj &lt;&lt; Set Excel Number of Header Lines

**설명:** 스프레드시트에서 열 머리글로 가져올 행 수를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**구문:** obj &lt;&lt; Set Excel Replicate Data In Spanned Rows

**설명:** 열 머리글을 생성할 때 1로 설정할 경우 여러 머리글 행이 있고, 셀이 해당 행에 걸쳐 있지만 셀이 가로로 확장되지 않으면 병합된 영역의 시작 값이 반복됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**구문:** obj &lt;&lt; Set Excel Replicate Headers In Spanned Rows

**설명:** 1로 설정할 경우 여러 머리글 행이 있고, 셀이 해당 행에 걸쳐 있고, 셀이 가로로 확장되지 않으면 열 머리글을 생성할 때 병합된 영역의 시작 값이 반복됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**구문:** obj &lt;&lt; Set Excel Suppress Empty Columns

**설명:** 빈 열을 가져오지 않게 하려면 1로 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**구문:** obj &lt;&lt; Set Excel Suppress Hidden Columns

**설명:** 숨겨진 열을 가져오지 않게 하려면 1로 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**구문:** obj &lt;&lt; Set Excel Suppress Hidden Rows

**설명:** 숨겨진 행을 가져오지 않게 하려면 1로 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**구문:** obj &lt;&lt; Set Excel Worksheet Filter

**설명:** 필터와 매칭되는 워크시트만 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**구문:** obj &lt;&lt; Set File List

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

```

### Set Folder

**구문:** obj &lt;&lt; Set Folder

**설명:** 다른 폴더를 선택하십시오.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**구문:** obj &lt;&lt; Set Import Callback

**설명:** 가져오기 프로세스의 마지막 단계로 실행되는 사용자 정의 콜백 함수를 지정합니다. Multiple File Import() 함수는 Multiple File Import 개체와 열린 데이터 테이블 목록을 콜백 함수에 전달합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Create Directory( "$temp/deleteme" );
Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );
Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );
mfi = Multiple File Import(
	<<Set Folder( "$temp/deleteme/" ),
	<<Set Name Filter( "test?.txt;" ),
	<<Set Name Enable( 1 ),
	<<Set Add File Name Column( 1 ),
	<<Set Import Callback(
		Function( {a, b}, 
// a is the same is mfi
			// b is a list of datatables that were created
			Write( "\!na=", a );
			Write( "\!nb=", b );
		)
	)
);
mfi << Import Data;

```

### Set Import Mode

**구문:** obj &lt;&lt; Set Import Mode

**설명:** 각 파일마다 하나의 행을 생성하려면 "파일당 행"으로, 각 파일의 각 줄마다 하나의 행을 생성하려면 "줄당 행"으로, 설정 옵션을 사용하여 가져오려면 "CSVData"로 각각 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**구문:** obj &lt;&lt; Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**설명:** 가져올 JSON 데이터와 가장 잘 매칭되는 JSON 추측을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**구문:** obj &lt;&lt; Set JSON Method

**설명:** 기본 제공 추측을 사용하려면 "추측"으로 설정하고 사용자 jsl을 제공하려면 "JSON 설정"으로 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**구문:** obj &lt;&lt; Set JSON Settings

**설명:** JSON 데이터를 가져오는 사용자 JSL을 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$sample_data\big class.jmp" );
dt << Save( "$Documents\Big Class.json" );
Close( dt );
Multiple File Import(
	<<Set Folder( "$DOCUMENTS" ),
	<<Set Name Filter( "big*.JSON" ),
	<<Set Name Enable( 1 ),
	<<Set JSON Method( "JSON Settings" ),
	<<Set JSON Settings(
		JSON Settings(
			Stack( 0 ),
			Row( "/root" ),
			Col(
				"/root/name",
				Column Name( "name" ),
				Fill( "Use Once" ),
				Type( "Character" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/age",
				Column Name( "age" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/sex",
				Column Name( "sex" ),
				Fill( "Use Once" ),
				Type( "Character" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/height",
				Column Name( "height" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/weight",
				Column Name( "weight" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			)
		)
	)
) << Import Data;

```

### Set Name Enable

**구문:** obj &lt;&lt; Set Name Enable

**설명:** 현재 이름 필터를 적용할지 여부를 설정합니다. 기본값은 0이며 이름 필터가 설정된 경우에도 필터를 무시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );

```

### Set Name Filter

**구문:** obj &lt;&lt; Set Name Filter

**설명:** 포함된 파일을 와일드카드 문자를 포함할 수 있는 필터 목록(세미콜론으로 구분됨)에 추가할 수 있도록 합니다. 세미콜론이나 |을 포함하는 파일 이름은 ? 또는 *와 같은 와일드카드 문자를 사용하여 가져와야 합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**구문:** obj &lt;&lt; Set PDF Method

**설명:** 기본 제공 추측을 사용하려면 "추측"으로 설정하고 사용자 jsl을 제공하려면 "PDF 설정"으로 설정합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**구문:** obj &lt;&lt; Set PDF Settings

**설명:** PDF 데이터를 가져오는 사용자 JSL을 지정합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

dt = Open( "$sample_data\big class.jmp" );
win = New Window( "temp", Data Table Box( dt ) );
win << Save pdf( "$Documents\big class.PDF" );
win << Close window;
Close( dt );
Multiple File Import(
	<<Set Folder( "$DOCUMENTS" ),
	<<Set Name Filter( "big*.pdf" ),
	<<Set Name Enable( 1 ),
	<<Set PDF Method( "PDF Settings" ),
	<<Set PDF Settings( PDF All Tables( combine( all ) ) )
) << Import Data;

```

### Set Show Hidden

**구문:** obj &lt;&lt; Set Show Hidden

**설명:** Windows에서 숨겨진 파일을 포함할지 여부를 설정합니다. 기본값은 숨겨진 파일을 포함하지 않는 것입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**구문:** obj &lt;&lt; Set Size Enable

**설명:** 현재 크기 필터를 적용할지 여부를 설정합니다. 기본값은 off이며 크기 필터가 설정된 경우에도 필터를 무시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**구문:** obj &lt;&lt; Set Size Filter( {smallest size to include, largest size to include} )

**설명:** 포함된 파일을 파일 크기에 따라 필터링합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**구문:** obj &lt;&lt; Set Stack Mode( "Stack Similar" | "Table Per File )

**설명:** 가져올 유사한 파일을 하나의 테이블에 결합하거나 각 파일에 대해 하나의 테이블을 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**구문:** obj &lt;&lt; Set Subfolders

**설명:** 하위 폴더의 파일을 포함할지 여부를 설정합니다. 기본값은 포함하지 않는 것입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );

```

### Set Use File List

**구문:** obj &lt;&lt; Set Use File List

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

```

### Set XML Guess

**구문:** obj &lt;&lt; Set XML Guess( "Tall"|"Wide"|"Huge" )

**설명:** 가져올 XML 데이터와 가장 잘 매칭되는 XML 추측을 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**구문:** obj &lt;&lt; Set XML Method

**설명:** JMP에서 데이터가 높은지, 넓은지 아니면 큰지 여부를 결정하는 경우 "추측"을 지정하고 사용자 JSL을 제공하려면 "XML 설정"을 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**구문:** obj &lt;&lt; Set XML Settings

**설명:** XML 데이터를 가져오는 사용자 JSL을 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Multiple File Import(
	<<Set Folder( "$SAMPLE_IMPORT_DATA" ),
	<<Set Name Filter( "*.xml" ),
	<<Set Name Enable( 1 ),
	<<Set XML Method( "XML Settings" ),
	<<Set XML Settings(
		XML Settings(
			Row( "/book/story/chapter/para" ),
			Col(
				"/book/story/chapter/para",
				Column Name( "story.chapter.para" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/book/story/chapter/para/price",
				Column Name( "story.chapter.para.price" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/book/story/chapter/para/quantity",
				Column Name( "story.chapter.para.quantity" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			)
		)
	)
) << Import Data;

```

