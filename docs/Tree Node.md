# Tree Node



### Append

**Syntax:** obj << Append

**Description:** Append a tree node to this node&apos;s children.

```

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

**Syntax:** node = obj << First Child

**Description:** Returns the first child node or Empty if the node has no children.

```

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

**Syntax:** obj << Get Child( index )

**Description:** Get the child node at the specified index.

```

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

**Syntax:** obj << Get Child Count

**Description:** Get the number of child nodes.

```

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

**Syntax:** data = obj << Get Data

**Description:** Get the user data associated with this node. Retrieves the value or object set with Set Data. See Set Data for more information.

```

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
tree << SetNodeSelectScript(
	Function( {this},
		{},
		Print( Eval( (this << getselected) << GetData ) )
	)
);

```

### Get Dimmed

**Syntax:** dimmed = obj << Get Dimmed

**Description:** Get the option to dim the text for this node.

**JMP Version Added:** 15

```

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

**Syntax:** obj << Get Expanded Icon

**Description:** Gets the tree node expanded icon. Empty is returned if no icon is specified.

```

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

**Syntax:** style = obj << Get Font Style

**Description:** Get the font style for this node.

**JMP Version Added:** 15

```

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

**Syntax:** obj << Get Icon

**Description:** Gets the tree node icon. Empty is returned if no icon is specified.

```

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

**Syntax:** label = obj << Get Label

**Description:** Get the label text shown for this node

```

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

**Syntax:** tip = obj << Get Tip

**Description:** Get the tooltip text shown for this node.

```

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

**Syntax:** index = obj << Index Of( node )

**Description:** Get the index of the specified child node. Returns 0 if not found.

```

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

**Syntax:** obj << Insert( node, index )

**Description:** Insert node at the specified index.

```

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

**Syntax:** isLeaf = obj << Is Leaf

**Description:** Is this node a leaf node in the tree?

```

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

**Syntax:** node = obj << Last Child

**Description:** Returns the last child node or Empty if the node has no children.

```

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

**Syntax:** node = obj << Parent

**Description:** Returns the parent node or Empty if this node has no parent.

```

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

**Syntax:** obj << Prepend( node )

**Description:** Prepend a tree node to this node&apos;s children.

```

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

**Syntax:** node = obj << Prev Sib

**Description:** Returns the previous sibling of this node in the parent&apos;s children or Empty if this is the first child

```

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

**Syntax:** obj << Remove

**Description:** Remove this node an all children from the tree.

```

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

**Syntax:** obj << Remove All Children

**Description:** Remove all child nodes.

```

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

**Syntax:** obj << Remove Child( node )

**Description:** Removes the specified child node.

```

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

**Syntax:** obj << Set Data( data )

**Description:** Set the user data for this node. Assign any value or object that you might wish to retrieve from the node later. A common use is in a tree box double-click callback.

```

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
tree << SetNodeSelectScript(
	Function( {this},
		{},
		Print( Eval( (this << getselected) << GetData ) )
	)
);

```

### Set Dimmed

**Syntax:** obj << Set Dimmed( state=0|1 )

**Description:** Set the option to dim the text for this node.

**JMP Version Added:** 15

```

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

**Syntax:** obj << Set Expanded Icon( icon | path, <boolean> )

**Description:** Set the icon name to use if this node is expanded. Optional parameter indicates whether to load the icon associated with the path (Windows Only).

```

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

**Syntax:** obj << Set Font Style( "Plain" | "Bold" )

**Description:** Set the font style for this node.

**JMP Version Added:** 15

```

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

**Syntax:** obj << Set Icon( icon | path, <boolean> )

**Description:** Set nodes icon. Optional parameter indicates whether to load the icon associated with the path (Windows Only).

```

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

**Syntax:** obj << Set Label( label )

**Description:** Set the label text shown for this node

```

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

**Syntax:** obj << Set Tip( tip )

**Description:** Set the tooltip text shown for this node.

```

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

**Syntax:** node = obj << Sib

**Description:** Returns the next sibling of this node in the parent&apos;s children or Empty if this is the last child.

```

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

**Syntax:** node = obj << Top Parent

**Description:** Returns the root of the tree containing this node or Empty if this node has no parent.

```

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

### Tree Node

**Syntax:** node = Tree Node( <label> )

**Description:** Create a node for display in a Tree Box display.

```

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

