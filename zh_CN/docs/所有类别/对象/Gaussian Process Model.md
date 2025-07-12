# Gaussian Process Model



## 关联的构造器

### Bayesian Optimization

**语法:** Bayesian Optimization( Y( column ), X( columns ) )

**说明:** 将连续响应值与一个或多个连续预测变量之间的关系建模为带插值的样条。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

## 项消息

### Copy Model Fit Script

**语法:** obj << Copy Model Fit Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

### Intercept

**语法:** obj << Intercept( number )

### Nugget

**语法:** obj << Nugget( number )

### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 探索各模型间每一列如何随每个因子值的变化而改变。

### Residual

**语法:** obj << Residual( number )

### Save Model Fit Script to Data Table

**语法:** obj << Save Model Fit Script to Data Table

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

### Save Model Fit Script to Journal

**语法:** obj << Save Model Fit Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

### Save Model Fit Script to Report

**语法:** obj << Save Model Fit Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

### Save Model Fit Script to Script Window

**语法:** obj << Save Model Fit Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

### Starting Values

**语法:** obj << Starting Values( number )

### Theta Values

**语法:** obj << Theta Values( number )

