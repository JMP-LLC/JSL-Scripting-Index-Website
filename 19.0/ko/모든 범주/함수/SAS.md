# SAS



### As C Expr

**구문:** y = As C Expr( x )

**설명:** 동등한 표현식을 C 프로그래밍 언어로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**구문:** y = As JSON Expr( x )

**설명:** 표현식을 JSON(JavaScript Object Notation) 표현으로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**구문:** y = As JavaScript Expr( x )

**설명:** 동등한 표현식을 JavaScript 프로그래밍 언어로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**구문:** y = As Python Expr( x )

**설명:** 동등한 표현식을 Python 프로그래밍 언어로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**구문:** y = As SAS Expr( x )

**설명:** SAS DATA 단계에 더 적합한 표현식 버전을 반환합니다. 코드는 PROC DS2 호출에 포함되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**구문:** sasName = SAS Name( string|namelist )

**설명:** 특수 문자와 공백을 밑줄로 변경하여 JMP 변수 이름을 유효한 SAS 변수 이름이 포함된 문자열로 변환합니다. 인수는 문자열 또는 문자열 목록으로 지정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**구문:** nameList = SAS Open For Var Names( path )

**설명:** SAS 데이터 집합에서 변수 이름 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

