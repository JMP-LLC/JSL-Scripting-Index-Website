# Tree Node



## 关联的构造器

### Tree Node

**语法:** node = Tree Node( &lt;label&gt; )

**说明:** 创建在“树形框”中显示的节点。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );

```

## 项消息

### Append

**语法:** obj &lt;&lt; Append

**说明:** 向该节点的子节点追加树节点。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );c7 = Tree Node( "New Child" );root1 << Append( c7 );

```

### First Child

**语法:** node = obj &lt;&lt; First Child

**说明:** 返回第一个子节点或返回空（若节点没有子级）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Print( (root1 << Firs tChild) << GetLabel );

```

### Get Child

**语法:** obj &lt;&lt; Get Child( index )

**说明:** 获取指定索引处的子节点。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Print( (root2 << Get Child( 2 )) << Get Label );

```

### Get Child Count

**语法:** obj &lt;&lt; Get Child Count

**说明:** 获取子节点数。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root2 << Get Child Count;

```

### Get Data

**语法:** data = obj &lt;&lt; Get Data

**说明:** 获取与该节点关联的用户数据。检索使用“设置数据”设置的值或对象。请参见“设置数据”获取详细信息。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );c1 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c2 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c3 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c4 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c5 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c6 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );tree << SetNodeSelectScript(	Function( {this},		{},		Print( Eval( (this << getselected) << GetData ) )	));

```

### Get Dimmed

**语法:** dimmed = obj &lt;&lt; Get Dimmed

**说明:** 获取使该节点的文本变暗的选项。

**JMP添加的版本:** 15

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root3 << Get Dimmed;

```

### Get Expanded Icon

**语法:** obj &lt;&lt; Get Expanded Icon

**说明:** 获取树节点展开图标。若未指定图标，则返回空。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root1 << Set Icon( "Distrib" );root1 << Set Expanded Icon( "$SAMPLE_IMAGES/pi.gif" );root1 << Get Expanded Icon;

```

### Get Font Style

**语法:** style = obj &lt;&lt; Get Font Style

**说明:** 获取该节点的字体样式。

**JMP添加的版本:** 15

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root3 << Get Font Style;

```

### Get Icon

**语法:** obj &lt;&lt; Get Icon

**说明:** 获取树节点图标。若未指定图标，则返回空。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root1 << Set Icon( "Distrib" );root1 << Get Icon;

```

### Get Label

**语法:** label = obj &lt;&lt; Get Label

**说明:** 获取该节点的标签文本

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root3 << Get Label;

```

### Get Tip

**语法:** tip = obj &lt;&lt; Get Tip

**说明:** 获取该节点的工具提示文本。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );c6 << Set Tip( "This is the tool tip for the last child" );c6 << Get Tip;

```

### Index Of

**语法:** index = obj &lt;&lt; Index Of( node )

**说明:** 获取指定子节点的索引。若未找到，则返回 0。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root2 << Index Of( root3 );

```

### Insert

**语法:** obj &lt;&lt; Insert( node, index )

**说明:** 在指定索引处插入节点。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );c7 = Tree Node( "New Child" );root3 << Insert( c7, 2 );

```

### Is Leaf

**语法:** isLeaf = obj &lt;&lt; Is Leaf

**说明:** 该节点是否为树中的叶节点？

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root3 << Is Leaf;

```

### Last Child

**语法:** node = obj &lt;&lt; Last Child

**说明:** 返回最后一个子节点或返回空（若节点没有子级）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Print( (root1 << Last Child) << GetLabel );

```

### Parent

**语法:** node = obj &lt;&lt; Parent

**说明:** 返回父节点或空（若该节点没有父节点）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Print( (c4 << Parent) << GetLabel );

```

### Prepend

**语法:** obj &lt;&lt; Prepend( node )

**说明:** 在该节点的子节点前预置树节点。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );c7 = Tree Node( "New Child" );root1 << Prepend( c7 );

```

### Prev Sib

**语法:** node = obj &lt;&lt; Prev Sib

**说明:** 返回与该节点平级的前一项，或返回空（若该节点为第一项）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Print( (c4 << Prev Sib) << Get Label );

```

### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 从树中删除该节点及其所有子级。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );root3 << Remove;

```

### Remove All Children

**语法:** obj &lt;&lt; Remove All Children

**说明:** 删除所有子节点。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );root2 << Remove All Children;

```

### Remove Child

**语法:** obj &lt;&lt; Remove Child( node )

**说明:** 删除指定的子节点。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );root3 << Remove Child( c6 );

```

### Set Data

**语法:** obj &lt;&lt; Set Data( data )

**说明:** 设置该节点的用户数据。分配您想稍后从节点检索的任何值或对象。常见用法是在树框中双击回调。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );c1 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c2 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c3 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c4 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c5 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );c6 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );tree << SetNodeSelectScript(	Function( {this},		{},		Print( Eval( (this << getselected) << GetData ) )	));

```

### Set Dimmed

**语法:** obj &lt;&lt; Set Dimmed( state=0|1 )

**说明:** 设置使该节点的文本变暗的选项。

**JMP添加的版本:** 15

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );c6 << Set Dimmed( 1 );

```

### Set Expanded Icon

**语法:** obj &lt;&lt; Set Expanded Icon( icon | path, &lt;boolean&gt; )

**说明:** 若该节点展开，设置要使用的图标名称。可选参数指示是否加载与路径关联的图标（仅限 Windows）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root1 << Set Icon( "Distrib" );root1 << Set Expanded Icon( "$SAMPLE_IMAGES/pi.gif" );root2 << Set Icon( "Oneway" );root2 << Set Expanded Icon( "$SAMPLE_IMAGES/pi.gif", true );

```

### Set Font Style

**语法:** obj &lt;&lt; Set Font Style( "Plain" | "Bold" )

**说明:** 设置该节点的字体样式。

**JMP添加的版本:** 15

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );c6 << Set Font Style( "Bold" );

```

### Set Icon

**语法:** obj &lt;&lt; Set Icon( icon | path, &lt;boolean&gt; )

**说明:** 设置节点图标。可选参数指示是否加载与路径关联的图标（仅限 Windows）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );root1 << Set Icon( "Distrib" );root2 << Set Icon( "$SAMPLE_IMAGES/pi.gif" );root3 << Set Icon( "$SAMPLE_IMAGES/pi.gif", true );

```

### Set Label

**语法:** obj &lt;&lt; Set Label( label )

**说明:** 设置该节点的标签文本

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );c6 << Set Label( "Last Child" );

```

### Set Tip

**语法:** obj &lt;&lt; Set Tip( tip )

**说明:** 获取为该节点显示的工具提示文本。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Wait( 1 );c6 << Set Tip( "This is the tool tip for the last child" );

```

### Sib

**语法:** node = obj &lt;&lt; Sib

**说明:** 返回与该节点平级的后一项，或返回空（若该节点为最后一项）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Print( (c4 << Sib) << Get Label );

```

### Top Parent

**语法:** node = obj &lt;&lt; Top Parent

**说明:** 返回包含该节点的树根或返回空（若该节点没有父节点）。

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );root3 = Tree Node( "Parent 3" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );c5 = Tree Node( "Child 5" );c6 = Tree Node( "Child 6" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );root2 << Append( root3 );root3 << Append( c5 );root3 << Append( c6 );New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );tree << Expand( root1 );tree << Expand( root2 );tree << Expand( root3 );Print( (c6 << Top Parent) << GetLabel );

```

