# Tree Node



### Append

**Syntax:** obj << Append

**Beschreibung:** Hängt einen Baumknoten an die untergeordneten Elemente dieses Knotens an.

```js

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

**Beschreibung:** Gibt den ersten untergeordneten Knoten zurück oder Leer, wenn der Knoten keine untergeordneten Elemente hat.

```js

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

**Beschreibung:** Untergeordneten Knoten am angegebenen Index abrufen.

```js

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

**Beschreibung:** Anzahl der untergeordneten Knoten abrufen.

```js

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

**Beschreibung:** Diesem Knoten zugewiesene Anwenderdaten abrufen. Ruft den beim Festlegen von Daten festgelegten Wert bzw. das festgelegte Objekt ab. Weitere Informationen finden Sie unter Set Data.

```js

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

**Beschreibung:** Option abrufen, den Text für diesen Knoten zu dimmen.

**JMP Version hinzugefügt:** 15

```js

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

**Beschreibung:** Ruft das Symbol für einen erweiterten Baumknoten ab. Leer wird zurückgegeben, wenn kein Symbol angegeben ist.

```js

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

**Beschreibung:** Schriftstil für diesen Knoten abrufen.

**JMP Version hinzugefügt:** 15

```js

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

**Beschreibung:** Ruft das Symbol für einen Baumknoten ab. Leer wird zurückgegeben, wenn kein Symbol angegeben ist.

```js

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

**Beschreibung:** Beschriftung für diesen Knoten abrufen.

```js

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

**Beschreibung:** Tooltip-Text für diesen Knoten abrufen.

```js

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

**Beschreibung:** Index des angegebenen untergeordneten Knotens abrufen. Gibt 0 zurück, wenn der Index nicht gefunden wird.

```js

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

**Beschreibung:** Knoten am angegebenen Index einfügen.

```js

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

**Beschreibung:** Ist dieser Knoten ein Blattknoten im Baum?

```js

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

**Beschreibung:** Gibt den letzten untergeordneten Knoten zurück oder Leer, wenn der Knoten keine untergeordneten Elemente hat.

```js

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

**Beschreibung:** Gibt den übergeordneten Knoten zurück oder Leer, wenn dieser Knoten keinen übergeordnetes Knoten hat.

```js

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

**Beschreibung:** Stellt den untergeordneten Elementen dieses Knotens einen Baumknoten voran.

```js

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

**Beschreibung:** Gibt das vorherige Geschwisterelement dieses Knotens in den untergeordneten Elementen des übergeordneten Knotens zurück oder Leer, wenn dies das erste untergeordnete Element ist.

```js

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

**Beschreibung:** Diesen Knoten und alle untergeordneten Elemente aus dem Baum entfernen.

```js

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

**Beschreibung:** Alle untergeordneten Knoten entfernen.

```js

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

**Beschreibung:** Entfernt den angegebenen untergeordneten Knoten.

```js

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

**Beschreibung:** Anwenderdaten für diesen Knoten festlegen.

```js

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

**Beschreibung:** Option festlegen, den Text für diesen Knoten zu dimmen.

**JMP Version hinzugefügt:** 15

```js

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

**Beschreibung:** Legt den Symbolnamen fest, der bei Erweiterung des Knotens verwendet werden soll. Optionaler Parameter gibt an, ob das zum Pfad zugehörige Symbol geladen werden soll (nur Windows).

```js

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

**Beschreibung:** Schriftstil für diesen Knoten festlegen.

**JMP Version hinzugefügt:** 15

```js

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

**Beschreibung:** Knotensymbol festlegen. Optionaler Parameter gibt an, ob das zum Pfad zugehörige Symbol geladen werden soll (nur Windows).

```js

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

**Beschreibung:** Beschriftung für diesen Knoten festlegen.

```js

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

**Beschreibung:** Tooltip-Text für diesen Knoten festlegen.

```js

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

**Beschreibung:** Gibt das nächste Geschwisterelement dieses Knotens in den untergeordneten Elementen des übergeordneten Knotens zurück oder Leer, wenn dies das letzte untergeordnete Element ist.

```js

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

**Beschreibung:** Gibt das Basiselement des Baums mit diesem Knoten zurück oder Leer, wenn dieser Knoten keinen übergeordneten Knoten hat.

```js

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

**Beschreibung:** Knoten für die Anzeige in einem Baumanzeigefeld erstellen.

```js

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

