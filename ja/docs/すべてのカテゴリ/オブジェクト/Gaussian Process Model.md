# Gaussian Process Model



## 関連するコンストラクター

### Bayesian Optimization

**構文:** Bayesian Optimization( Y( column ), X( columns ) )

**説明:** 連続尺度の応答変数と、1つ以上の連続尺度の予測変数との間の関係を、滑らかな補間式でモデル化する。

```jsl

dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

## 項目のメッセージ

### Copy Model Fit Script

**構文:** obj &lt;&lt; Copy Model Fit Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

### Intercept

**構文:** obj &lt;&lt; Intercept( number )

### Nugget

**構文:** obj &lt;&lt; Nugget( number )

### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 複数のモデルに対して、各因子の値が変化したときに応答がどのように変化するかを調べる。

### Residual

**構文:** obj &lt;&lt; Residual( number )

### Save Model Fit Script to Data Table

**構文:** obj &lt;&lt; Save Model Fit Script to Data Table

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

### Save Model Fit Script to Journal

**構文:** obj &lt;&lt; Save Model Fit Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

### Save Model Fit Script to Report

**構文:** obj &lt;&lt; Save Model Fit Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

### Save Model Fit Script to Script Window

**構文:** obj &lt;&lt; Save Model Fit Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

### Starting Values

**構文:** obj &lt;&lt; Starting Values( number )

### Theta Values

**構文:** obj &lt;&lt; Theta Values( number )

