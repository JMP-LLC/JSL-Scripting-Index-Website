# ZipArchive



## 연결된 생성자

### Open

**구문:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**설명:** 데이터 테이블이나 기타 JMP 파일 또는 파일에서 생성된 개체에 대한 참조를 반환합니다. 경로를 지정하지 않으면 열기 대화상자가 나타납니다. 폴더 경로를 지정하면 시스템 파일 브라우저가 열리고 개체가 반환되지 않습니다. 사용 가능한 옵션에 대한 전체 설명은 구문 참조에서 확인하십시오.

```jsl

/* Data tables, other JMP files, external files:   Open( filePath,     <Invisible | Private>,     <Select Columns( "col", ... )>,     <Ignore Columns( "col", ... )>,     <Add to Recent Files(bool)>,     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>     <Force Refresh>,     <Enable Filter Views(bool)>,     <"file type">   )*///Basic data table opendt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );//Data table open with some optionsdt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

## 항목 메시지

### Dir

**구문:** memlist = obj &lt;&lt; Dir

**설명:** zip 보관에 포함된 멤버 파일의 목록을 반환합니다.

```jsl

za = Open( "$TEMP\deleteMe.zip", zip );za << Write( "ralph", "this is ralph's data" );za << Write( "fred", "this is fred's data" );dirlist = za << dir;text = za << read( dirlist[1] );dirlist[1] || ": " || text;

```

### Read

**구문:** memdata = obj &lt;&lt; Read( memname, &lt;Format(blob|string)&gt;, &lt;Encoding(charset)&gt; )

**설명:** zip 보관 멤버 파일을 문자열 또는 BLOB로 읽어들입니다.

```jsl

za = Open( "$TEMP\deleteMe.zip", zip );za << Write( "ralph", "this is ralph's data" );za << Write( "fred", "this is fred's data" );dirlist = za << dir;text = za << read( dirlist[1] );dirlist[1] || ": " || text;

```

### Write

**구문:** actual name = obj &lt;&lt; Write( memname, memdata, &lt; "replace" &gt; )

**설명:** 텍스트 또는 BLOB를 zip 보관 멤버 파일에 기록합니다. 선택적 "replace" 파라미터를 지정한 경우 이름이 같은 기존 파일이 있으면 멤버 파일이 대체되고 그렇지 않으면 기존 멤버를 덮어쓰지 않도록 이 멤버 이름이 변경됩니다. 반환 값은 실제로 사용되는 이름입니다.

```jsl

za = Open( "$TEMP\deleteMe.zip", zip );za << Write( "ralph", "this is ralph's data" );za << Write( "fred", "this is fred's data" );dirlist = za << dir;text = za << read( dirlist[1] );dirlist[1] || ": " || text;

```

