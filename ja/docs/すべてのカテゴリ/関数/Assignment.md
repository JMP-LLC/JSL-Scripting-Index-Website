# Assignment



## 関数

### Add To

**構文:** y += x; Add To( y, x )

**説明:** 変数または変数のリストに値を足す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = 1;
ex += 2;
ex;

```

### Assign

**構文:** y = x; Assign( y, x )

**説明:** 変数または変数のリストに値を代入する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
{ex1, ex2} = {Pi(), 1};
ex1 + ex1;

```

### Divide To

**構文:** y /= x; Divide To( y, x )

**説明:** 変数または変数のリストを指定の値で割る。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = 1;
ex /= 2;
ex;

```

### Multiply To

**構文:** y *= x; Multiply To( y, x )

**説明:** 変数または変数のリストに値を掛ける。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = 3;
ex *= 2;
ex;

```

### PostDecrement

**構文:** x--; PostDecrement( x )

**説明:** 変数または変数のリストから1を引く。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = 1;
ex--;
ex;

```

### PostIncrement

**構文:** x++; PostIncrement( x )

**説明:** 変数または変数のリストに1を足す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = 1;
ex++;
ex;

```

### Subtract To

**構文:** y -= x; Subtract To( y, x )

**説明:** 変数または変数のリストから値を引く。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = 1;
ex -= 2;
ex;

```

