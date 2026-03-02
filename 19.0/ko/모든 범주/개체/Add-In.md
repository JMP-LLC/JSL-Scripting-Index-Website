# Add-In



## 항목 메시지

### Auto Load

**구문:** addin &lt;&lt; Auto Load( boolean )

**설명:** JMP 시작 시 추가기능을 자동으로 로드할지 여부를 설정합니다.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**구문:** name = addin &lt;&lt; Display Name

**설명:** 추가기능의 표시 이름을 반환합니다.

#### 예제 1

```jsl

addins = Get Addins();
addins << Display Name();

```

#### 예제 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**구문:** folder = addin &lt;&lt; Home Folder

**설명:** 추가기능의 홈 폴더를 반환합니다.

#### 예제 1

```jsl

addins = Get Addins();
addins << Home Folder();

```

#### 예제 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**구문:** id = addin &lt;&lt; ID

**설명:** 추가기능의 고유 ID를 반환합니다.

#### 예제 1

```jsl

addins = Get Addins();
addins << ID();

```

#### 예제 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**구문:** x = addin &lt;&lt; Is Loaded

**설명:** 추가기능이 현재 로드되어 있는지 여부를 반환합니다.

#### 예제 1

```jsl

addins = Get Addins();
addins << Is Loaded();

```

#### 예제 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**구문:** addin &lt;&lt; Load

**설명:** 추가기능을 로드합니다.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**구문:** addin &lt;&lt; Unload

**설명:** 추가기능을 언로드합니다.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**구문:** ver = addin &lt;&lt; Version

**설명:** 추가기능의 버전 번호를 반환합니다.

#### 예제 1

```jsl

addins = Get Addins();
addins << Version();

```

#### 예제 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

