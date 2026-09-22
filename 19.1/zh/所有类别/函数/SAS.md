# SAS



### As C Expr

**语法:** y = As C Expr( x )

**说明:** 返回使用 C 编程语言的等价表达式。

**JMP添加的版本:** 早于版本 14

```jsl

As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**语法:** y = As JSON Expr( x )

**说明:** 返回表达式的 JSON（JavaScript 对象表示法）表示。

**JMP添加的版本:** 早于版本 14

```jsl

As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**语法:** y = As JavaScript Expr( x )

**说明:** 返回使用 JavaScript 编程语言的等价表达式。

**JMP添加的版本:** 早于版本 14

```jsl

As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**语法:** y = As Python Expr( x )

**说明:** 返回使用 Python 编程语言的等价表达式。

**JMP添加的版本:** 早于版本 14

```jsl

As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**语法:** y = As SAS Expr( x )

**说明:** 返回更适合 SAS DATA 步的表达式版本。代码必须封装在 PROC DS2 调用中。

**JMP添加的版本:** 早于版本 14

```jsl

As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**语法:** sasName = SAS Name( string|namelist )

**说明:** 通过将特殊字符和空白更改为下划线，使 JMP 变量名转换为包含有效 SAS 变量名的字符串。参数可以指定为字符串或字符串列表。

**JMP添加的版本:** 早于版本 14

```jsl

SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**语法:** nameList = SAS Open For Var Names( path )

**说明:** 从 SAS 数据集中返回变量名列表。

**JMP添加的版本:** 早于版本 14

```jsl

SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

