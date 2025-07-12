# Tree Node



## Costruttori associati

### Tree Node

**Sintassi:** node = Tree Node( <label> )

**Descrizione:** Crea un nodo da visualizzare nella casella dell&apos;albero.

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

## Messaggi degli elementi

### Append

**Sintassi:** obj << Append

**Descrizione:** Aggiunge un nodo dell&apos;albero dopo gli elementi di livello inferiore di questo nodo.

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

**Sintassi:** node = obj << First Child

**Descrizione:** Restituisce il primo nodo figlio oppure Vuoto se non ci sono elementi di livello inferiore a questo nodo.

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

**Sintassi:** obj << Get Child( index )

**Descrizione:** Ottiene il nodo di livello inferiore all&apos;indice specificato.

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

**Sintassi:** obj << Get Child Count

**Descrizione:** Ottiene il numero di nodi di livello inferiore.

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

**Sintassi:** data = obj << Get Data

**Descrizione:** Ottiene i dati utente associati a questo nodo. Recupera il valore o oggetto impostato con Dati impostati. Per ulteriori informazioni vedere Dati impostati.

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
tree << SetNodeSelectScript(
	Function( {this},
		{},
		Print( Eval( (this << getselected) << GetData ) )
	)
);

```

### Get Dimmed

**Sintassi:** dimmed = obj << Get Dimmed

**Descrizione:** Ottiene l&apos;opzione di attenuazione del testo per questo nodo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** obj << Get Expanded Icon

**Descrizione:** Ottiene l&apos;icona espansa del nodo dell&apos;albero. Restituisce Vuoto se non è specificata alcuna icona.

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

**Sintassi:** style = obj << Get Font Style

**Descrizione:** Ottiene lo stile carattere per questo nodo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** obj << Get Icon

**Descrizione:** Ottiene l&apos;icona del nodo dell&apos;albero. Restituisce Vuoto se non è specificata alcuna icona.

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

**Sintassi:** label = obj << Get Label

**Descrizione:** Ottiene il testo dell&apos;etichetta visualizzato per questo nodo.

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

**Sintassi:** tip = obj << Get Tip

**Descrizione:** Ottiene il testo della descrizione visualizzato per questo nodo.

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

**Sintassi:** index = obj << Index Of( node )

**Descrizione:** Ottiene l&apos;indice del nodo di livello inferiore specificato. Restituisce 0 se non lo trova.

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

**Sintassi:** obj << Insert( node, index )

**Descrizione:** Inserisce un nodo all&apos;indice specificato.

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

**Sintassi:** isLeaf = obj << Is Leaf

**Descrizione:** Questo è un nodo secondario nell&apos;albero?

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

**Sintassi:** node = obj << Last Child

**Descrizione:** Restituisce l&apos;ultimo nodo figlio oppure Vuoto se non ci sono elementi di livello inferiore a questo nodo.

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

**Sintassi:** node = obj << Parent

**Descrizione:** Restituisce il nodo padre oppure Vuoto se non c&apos;è un elemento di livello superiore a questo nodo.

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

**Sintassi:** obj << Prepend( node )

**Descrizione:** Aggiunge un nodo dell&apos;albero davanti agli elementi di livello inferiore di questo nodo.

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

**Sintassi:** node = obj << Prev Sib

**Descrizione:** Restituisce l&apos;elemento precedente di pari livello di questo nodo tra gli elementi figlio del nodo padre, oppure Vuoto se questo è il primo elemento figlio.

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

**Sintassi:** obj << Remove

**Descrizione:** Rimuove questo nodo e tutti gli elementi di livello inferiore dall&apos;albero.

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

**Sintassi:** obj << Remove All Children

**Descrizione:** Rimuove tutti i nodi di livello inferiore.

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

**Sintassi:** obj << Remove Child( node )

**Descrizione:** Rimuove il nodo di livello inferiore specificato.

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

**Sintassi:** obj << Set Data( data )

**Descrizione:** Imposta i dati dell&apos;utente associati a questo nodo.

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
tree << SetNodeSelectScript(
	Function( {this},
		{},
		Print( Eval( (this << getselected) << GetData ) )
	)
);

```

### Set Dimmed

**Sintassi:** obj << Set Dimmed( state=0|1 )

**Descrizione:** Imposta l&apos;opzione di attenuazione del testo per questo nodo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** obj << Set Expanded Icon( icon | path, <boolean> )

**Descrizione:** Imposta il nome dell&apos;icona da usare se il nodo è espanso. Il parametro facoltativo indica se caricare l&apos;icona associata al percorso (solo Windows).

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

**Sintassi:** obj << Set Font Style( "Plain" | "Bold" )

**Descrizione:** Imposta lo stile del carattere per questo nodo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** obj << Set Icon( icon | path, <boolean> )

**Descrizione:** Imposta icona dei nodi. Il parametro facoltativo indica se caricare l&apos;icona associata al percorso (solo Windows).

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

**Sintassi:** obj << Set Label( label )

**Descrizione:** Imposta il testo dell&apos;etichetta visualizzato per questo nodo.

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

**Sintassi:** obj << Set Tip( tip )

**Descrizione:** Imposta il testo della descrizione visualizzato per questo nodo.

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

**Sintassi:** node = obj << Sib

**Descrizione:** Restituisce l&apos;elemento successivo di pari livello di questo nodo tra gli elementi figlio del nodo padre, oppure Vuoto se questo è l&apos;ultimo elemento figlio.

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

**Sintassi:** node = obj << Top Parent

**Descrizione:** Restituisce la radice dell&apos;albero che contiene questo nodo oppure Vuoto se non c&apos;è un elemento di livello superiore a questo nodo.

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

