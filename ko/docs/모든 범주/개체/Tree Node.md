# Tree Node



## 연결된 생성자

### Tree Node

**구문:** node = Tree Node( &lt;label&gt; )

**설명:** 트리 상자에 표시할 노드를 생성합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

```

## 항목 메시지

### Append

**구문:** obj &lt;&lt; Append

**설명:** 트리 노드를 이 노드의 하위에 추가합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

c7 = Tree Node( "New Child" );
root1 << Append( c7 );

```

### First Child

**구문:** node = obj &lt;&lt; First Child

**설명:** 첫 번째 하위 노드 또는 비어 있음(노드에 하위가 없는 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Print( (root1 << Firs tChild) << GetLabel );

```

### Get Child

**구문:** obj &lt;&lt; Get Child( index )

**설명:** 지정된 인덱스에 있는 하위 노드를 가져옵니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Print( (root2 << Get Child( 2 )) << Get Label );

```

### Get Child Count

**구문:** obj &lt;&lt; Get Child Count

**설명:** 하위 노드 수를 가져옵니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root2 << Get Child Count;

```

### Get Data

**구문:** data = obj &lt;&lt; Get Data

**설명:** 이 노드와 연결된 사용자 데이터를 가져옵니다. 데이터 설정을 사용하여 설정된 개체 또는 값을 가져옵니다. 자세한 내용은 데이터 설정을 참조하십시오.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

c1 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c2 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c3 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c4 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c5 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c6 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
tree << SetNodeSelectScript( Function( {this}, {}, Print( Eval( (this << getselected) << GetData ) ) ) );

```

### Get Dimmed

**구문:** dimmed = obj &lt;&lt; Get Dimmed

**설명:** 이 노드의 텍스트를 흐리게 표시하는 옵션을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root3 << Get Dimmed;

```

### Get Expanded Icon

**구문:** obj &lt;&lt; Get Expanded Icon

**설명:** 펼쳐진 트리 노드의 아이콘을 가져옵니다. 아이콘이 지정되지 않은 경우 비어 있음이 반환됩니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root1 << Set Icon( "Distrib" );
root1 << Set Expanded Icon( "$SAMPLE_IMAGES/pi.gif" );
root1 << Get Expanded Icon;

```

### Get Font Style

**구문:** style = obj &lt;&lt; Get Font Style

**설명:** 이 노드의 글꼴 스타일을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root3 << Get Font Style;

```

### Get Icon

**구문:** obj &lt;&lt; Get Icon

**설명:** 트리 노드 아이콘을 가져옵니다. 아이콘이 지정되지 않은 경우 비어 있음이 반환됩니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root1 << Set Icon( "Distrib" );
root1 << Get Icon;

```

### Get Label

**구문:** label = obj &lt;&lt; Get Label

**설명:** 이 노드에 대해 표시된 라벨 텍스트를 가져옵니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root3 << Get Label;

```

### Get Tip

**구문:** tip = obj &lt;&lt; Get Tip

**설명:** 이 노드에 대해 표시되는 툴팁 텍스트를 가져옵니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
c6 << Set Tip( "This is the tool tip for the last child" );
c6 << Get Tip;

```

### Index Of

**구문:** index = obj &lt;&lt; Index Of( node )

**설명:** 지정된 하위 노드의 인덱스를 가져옵니다. 찾을 수 없는 경우 0을 반환합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root2 << Index Of( root3 );

```

### Insert

**구문:** obj &lt;&lt; Insert( node, index )

**설명:** 지정된 인덱스에 노드를 삽입합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

c7 = Tree Node( "New Child" );
root3 << Insert( c7, 2 );

```

### Is Leaf

**구문:** isLeaf = obj &lt;&lt; Is Leaf

**설명:** 이 노드가 트리의 잎 노드입니까?

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root3 << Is Leaf;

```

### Last Child

**구문:** node = obj &lt;&lt; Last Child

**설명:** 마지막 하위 노드를 반환하거나, 비어 있음(노드에 하위가 없는 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Print( (root1 << Last Child) << GetLabel );

```

### Parent

**구문:** node = obj &lt;&lt; Parent

**설명:** 상위 노드를 반환하거나, 비어 있음(이 노드에 상위가 없는 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Print( (c4 << Parent) << GetLabel );

```

### Prepend

**구문:** obj &lt;&lt; Prepend( node )

**설명:** 트리 노드를 이 노드의 하위 앞에 추가합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

c7 = Tree Node( "New Child" );
root1 << Prepend( c7 );

```

### Prev Sib

**구문:** node = obj &lt;&lt; Prev Sib

**설명:** 상위의 하위에 있는 이 노드의 이전 형제 항을 반환하거나, 비어 있음(첫 번째 하위인 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Print( (c4 << Prev Sib) << Get Label );

```

### Remove

**구문:** obj &lt;&lt; Remove

**설명:** 이 노드와 모든 하위를 트리에서 제거합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
root3 << Remove;

```

### Remove All Children

**구문:** obj &lt;&lt; Remove All Children

**설명:** 모든 하위 노드를 제거합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
root2 << Remove All Children;

```

### Remove Child

**구문:** obj &lt;&lt; Remove Child( node )

**설명:** 지정된 하위 노드를 제거합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
root3 << Remove Child( c6 );

```

### Set Data

**구문:** obj &lt;&lt; Set Data( data )

**설명:** 이 노드에 대한 사용자 데이터를 설정합니다. 나중에 노드에서 가져올 값 또는 개체를 할당하십시오. 일반적으로 트리 상자 두 번 클릭 콜백에 사용합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

c1 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c2 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c3 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c4 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c5 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
c6 << SetData( Function( {}, {}, MDYHMS( Today() ) ) );
tree << SetNodeSelectScript( Function( {this}, {}, Print( Eval( (this << getselected) << GetData ) ) ) );

```

### Set Dimmed

**구문:** obj &lt;&lt; Set Dimmed( state=0|1 )

**설명:** 이 노드의 텍스트를 흐리게 표시하는 옵션을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
c6 << Set Dimmed( 1 );

```

### Set Expanded Icon

**구문:** obj &lt;&lt; Set Expanded Icon( icon | path, &lt;boolean&gt; )

**설명:** 이 노드가 펼쳐질 때 사용할 아이콘 이름을 설정합니다. 선택적 파라미터는 경로와 연결된 아이콘을 로드할지 여부를 나타냅니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root1 << Set Icon( "Distrib" );
root1 << Set Expanded Icon( "$SAMPLE_IMAGES/pi.gif" );
root2 << Set Icon( "Oneway" );
root2 << Set Expanded Icon( "$SAMPLE_IMAGES/pi.gif", true );

```

### Set Font Style

**구문:** obj &lt;&lt; Set Font Style( "Plain" | "Bold" )

**설명:** 이 노드의 글꼴 스타일을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
c6 << Set Font Style( "Bold" );

```

### Set Icon

**구문:** obj &lt;&lt; Set Icon( icon | path, &lt;boolean&gt; )

**설명:** 노드 아이콘을 설정합니다. 선택적 파라미터는 경로와 연결된 아이콘을 로드할지 여부를 나타냅니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

root1 << Set Icon( "Distrib" );
root2 << Set Icon( "$SAMPLE_IMAGES/pi.gif" );
root3 << Set Icon( "$SAMPLE_IMAGES/pi.gif", true );

```

### Set Label

**구문:** obj &lt;&lt; Set Label( label )

**설명:** 이 노드에 대해 표시될 라벨 텍스트를 설정합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
c6 << Set Label( "Last Child" );

```

### Set Tip

**구문:** obj &lt;&lt; Set Tip( tip )

**설명:** 이 노드에 대해 표시되는 툴팁 텍스트를 설정합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Wait( 1 );
c6 << Set Tip( "This is the tool tip for the last child" );

```

### Sib

**구문:** node = obj &lt;&lt; Sib

**설명:** 상위의 하위에 있는 이 노드의 다음 형제 항을 반환하거나, 비어 있음(마지막 하위인 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Print( (c4 << Sib) << Get Label );

```

### Top Parent

**구문:** node = obj &lt;&lt; Top Parent

**설명:** 이 노드를 포함하는 트리의 루트를 반환하거나, 비어 있음(이 노드에 상위가 없는 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
root3 = Tree Node( "Parent 3" );

c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
c5 = Tree Node( "Child 5" );
c6 = Tree Node( "Child 6" );

root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
root2 << Append( root3 );
root3 << Append( c5 );
root3 << Append( c6 );

New Window( "TreeBox Tests", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );
tree << Expand( root1 );
tree << Expand( root2 );
tree << Expand( root3 );

Print( (c6 << Top Parent) << GetLabel );

```

