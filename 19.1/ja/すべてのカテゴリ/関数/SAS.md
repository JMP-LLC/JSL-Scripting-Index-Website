# SAS



### As C Expr

**構文:** y = As C Expr( x )

**説明:** Cプログラミング言語の形式に式を変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**構文:** y = As JSON Expr( x )

**説明:** JSON (JavaScript Object Notation) の形式に式を変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**構文:** y = As JavaScript Expr( x )

**説明:** JavaScriptプログラミング言語の形式に式を変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**構文:** y = As Python Expr( x )

**説明:** Pythonプログラミング言語の形式に式を変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**構文:** y = As SAS Expr( x )

**説明:** SASのDATAステップで使用できる形式に式を変換して、文字列で戻す。コードはPROC DS2コールでラップする必要がある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**構文:** sasName = SAS Name( string|namelist )

**説明:** 特殊文字や空白をアンダースコアに置き換えることにより、JMP変数の名前を有効なSAS変数名の文字列に変更する。引数は、文字列または文字列のリストとして指定することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**構文:** nameList = SAS Open For Var Names( path )

**説明:** SASデータセットの変数名のリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

