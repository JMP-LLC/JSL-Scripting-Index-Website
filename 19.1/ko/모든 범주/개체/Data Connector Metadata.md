# Data Connector Metadata



## 항목 메시지

### Get Description

**구문:** metadata &lt;&lt; Get Description()

**설명:** 데이터 커넥터 설명을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

description = metadata << Get Description();

```

### Get Driver

**구문:** metadata &lt;&lt; Get Driver()

**설명:** 데이터 커넥터 드라이버가 있는 경우 가져옵니다.

**JMP추가된 버전:** 18

```jsl

type = metadata << Get Driver();

```

### Get Name

**구문:** metadata &lt;&lt; Get Name()

**설명:** 데이터 커넥터 이름을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

name = metadata << Get Name();

```

### Get Path

**구문:** metadaata &lt;&lt; Get Path()

**설명:** 데이터 커넥터 경로를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

path = metadata << Get Path();

```

### Get Type

**구문:** metadata &lt;&lt; Get Type()

**설명:** 데이터 커넥터 유형을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

type = metadata << Get Type();

```

### Set Description

**구문:** metadata &lt;&lt; Set Description(description)

**설명:** 데이터 커넥터 설명을 설정합니다.

**JMP추가된 버전:** 18

```jsl

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**구문:** metadata &lt;&lt; Set Name( name )

**설명:** 데이터 커넥터 이름을 설정합니다.

**JMP추가된 버전:** 18

```jsl

metadata << Set Name( "A new Name" );

```

