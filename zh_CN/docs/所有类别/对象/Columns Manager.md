# Columns Manager



## 项消息

### Clear All Filters

**语法:** obj &lt;&lt; Clear All Filters

**说明:** 该选项从汇总表中删除所有过滤器。请注意，“设置列”命令不是过滤器，因此调用该命令不会删除对显示列的限制。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "t" );obj << Clear All Filters;

```

### Create Data Dictionary

**语法:** obj &lt;&lt; Create Data Dictionary

**说明:** 创建包括每个列的统计量和属性信息的记录。

**JMP添加的版本:** 18

### Extended Statistics

**语法:** obj &lt;&lt; Extended Statistics(&lt;list of statistics&gt;)

**说明:** 覆盖扩展统计量的默认集合，而不必在首选项中配置该列表。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager( Include Extended Statistics( 1 ) );obj << Extended Statistics( {"Median Absolute Deviation", "Q1"} );

```

### Force calculations for all categorical columns

**语法:** obj &lt;&lt; Force calculations for all categorical columns( state=0|1 )

**说明:** 该选项启用时，将为所有分类列计算统计量，而不仅是字符列。例如，表达式列计算缺失值个数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Force calculations for all categorical columns( 1 );

```

### Force calculations for all numeric columns

**语法:** obj &lt;&lt; Force calculations for all numeric columns( state=0|1 )

**说明:** 该选项启用时，若可能，将为所有数值列计算数值统计量。例如，为指定为连续型的列计算唯一值个数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Force calculations for all numeric columns( 1 );

```

### Get Summary Table

**语法:** obj &lt;&lt; Get Summary Table

**说明:** 获取汇总表的表框

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;tab = obj << Get Summary table;tab << Sort By Column( "n unique" );

```

### Hide Excluded Columns

**语法:** obj &lt;&lt; Hide Excluded Columns( state=0|1 )

**说明:** 包括或删除汇总表中标记为已排除的列。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Excluded Columns( 0 );

```

### Hide Hidden Columns

**语法:** obj &lt;&lt; Hide Hidden Columns( state=0|1 )

**说明:** 包括或删除汇总表中标记为已隐藏的列。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Hidden Columns( 0 );

```

### Include Extended Statistics

**语法:** obj &lt;&lt; Include Extended Statistics( state=0|1 )

**说明:** 可以在“首选项”中配置一组额外的统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Include Extended Statistics( 1 );

```

### Select Rows

**语法:** obj &lt;&lt; Select Rows(&lt;empty&gt; | All | None | &lt;column references&gt;)

**说明:** 该选项选择汇总表中对应于列的行。通过不传递参数来清除。通过传递“全部”或“无”来选择所有或不选择可见行。通过传递列引用列表来选择特定行。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );

```

### Set Columns

**语法:** obj &lt;&lt; Set Columns(&lt;columns&gt;)

**说明:** 默认情况下，“列管理器”包括数据表中的所有列作为其基本列集合。可以（或不可以）通过删除已排除的列来缩减报表中的该集合。该选项允许限制“列管理器”有权访问的列集合。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Columns( {:height, :weight} );

```

### Set Modeling Type Filter

**语法:** obj &lt;&lt; Set Modeling Type Filter(&lt;empty&gt; | &lt;Continuous, Nominal, Ordinal, Vector, Unstructured Text, Multiple Response, None&gt;)

**说明:** 该选项设置建模类型过滤器。通过不传递参数来清除，或指定一个或多个建模类型名称。该过滤器由匹配任何分析类型的列来满足。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Modeling Type Filter( "Continuous", "Ordinal" );

```

### Set Property Filter

**语法:** obj &lt;&lt; Set Property Filter(&lt;empty&gt; | At Least One Property | &lt;list of property names&gt;)

**说明:** 该选项设置属性过滤器。通过不传递参数来清除，或指定一个或多个属性名称。该过滤器由包含任何属性的列来指定。还有一个特殊值，它与具有任何属性的列匹配。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Set Property Filter( "Matrix Column Names", "Value colors" );

```

### Set Selection Filter

**语法:** obj &lt;&lt; Set Selection Filter(&lt;empty&gt; | Keep | Hide)

**说明:** 该选项设置选择内容过滤器。它允许用户任意选择列，然后将列表过滤到该组列（使用 Keep 或它的相反操作 Hide）。通过不传递参数来清除。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );obj << Set Selection Filter( "Keep" );

```

### Set Text Filter

**语法:** obj &lt;&lt; Set Text Filter(&lt;empty&gt; | &lt;search text&gt;)

**说明:** 该选项设置当前文本过滤器数据，从而减少汇总表中显示的列数。文本过滤器仅应用于列名。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "me" );

```

### Show Attributes

**语法:** obj &lt;&lt; Show Attributes( state=0|1 )

**说明:** 展开或折叠汇总表中包含列特性的部分。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Attributes( 0 );

```

### Show Properties

**语法:** obj &lt;&lt; Show Properties( state=0|1 )

**说明:** 展开或折叠汇总表中包含列属性的部分。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Properties( 0 );

```

### Show Statistics

**语法:** obj &lt;&lt; Show Statistics( state=0|1 )

**说明:** 展开或折叠汇总表中包含列统计量的部分。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Statistics( 0 );

```

