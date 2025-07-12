# Expression



## 関数

### Arg

**構文:** y = Arg( x, i )

**説明:** 評価後の式のi番目の引数を戻す。i番目の引数がない場合はEmpty()を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**構文:** y = Arg Expr( expr, i )

**説明:** 式のi番目の引数を戻す。i番目の引数がない場合はEmpty()を戻す。この関数は将来廃止されるため、Arg()を使用のこと。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**構文:** y = Eval Expr( x )

**説明:** xの中のExpr()に指定されている式を評価した値に置換した後、その置換された後のxを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**構文:** y = Expr( x )

**説明:** 引数を評価せずに戻す。式をクォートするのに用いる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Expr( x + y );

```

### Extract Expr

**構文:** y = Extract Expr( expr, pattern )

**説明:** 指定のパターンに一致する部分式を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**構文:** y = Head( x )

**説明:** 評価後の式の関数名を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**構文:** y = Head Expr( expr )

**説明:** 式の関数名を引数なしで戻す。この関数は将来廃止されるため、Head()を使用のこと。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**構文:** y = Head Name( x )

**説明:** 評価後の式の関数名を、引数を省略し、文字列として戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**構文:** y = Head Name Expr( expr )

**説明:** 式の関数名を引数なしで文字列として戻す。この関数は将来廃止されるため、Head Name()を使用のこと。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### N Arg

**構文:** n = N Arg( expr )

**説明:** 評価後の式の引数の個数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**構文:** n = N Arg Expr( expr )

**説明:** 式の引数の個数を戻す。この関数は将来廃止されるため、N Arg()を使用のこと。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**構文:** y = Name Expr( x )

**説明:** 変数に含まれている式を、式を評価せずに戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

