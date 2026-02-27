# Scheduler



## 연결된 생성자

### Schedule

**구문:** Schedule( sec, scpt )

**설명:** sec초가 경과한 후 scpt 스크립트 인수를 실행하는 이벤트를 예약합니다. 참고: 스케줄러는 유휴 시간 동안에만 실행됩니다.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););

```

## 항목 메시지

### Clear Schedule

**구문:** obj &lt;&lt; Clear Schedule

**설명:** 현재 스케줄된 모든 이벤트를 스케줄러에서 지웁니다.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Clear Schedule;

```

### Close

**구문:** obj &lt;&lt; Close

**설명:** 스케줄러를 닫습니다.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););Wait( 2 );s << Close;

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););t = s << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**구문:** obj &lt;&lt; Restart

**설명:** 중지된 스케줄러를 재실행합니다.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;Wait( 2 );s << Restart;

```

### Show Schedule

**구문:** obj &lt;&lt; Show Schedule

**설명:** 현재 스케줄된 다음 이벤트를 표시합니다.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Show Schedule;

```

### Stop

**구문:** obj &lt;&lt; Stop

**설명:** 스케줄러를 중지하여 현재 스케줄된 모든 이벤트를 실행하지 않도록 합니다.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;

```

