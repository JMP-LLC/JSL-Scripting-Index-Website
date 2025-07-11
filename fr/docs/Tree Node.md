# Tree Node



### Append

**Syntaxe :** obj << Append

**Description :** Ajoute un nœud d&apos;arborescence aux enfants de ce nœud.

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

**Syntaxe :** node = obj << First Child

**Description :** Renvoie le premier nœud enfant ou la valeur Vide si le nœud n’a pas de parents.

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

**Syntaxe :** obj << Get Child( index )

**Description :** Obtenir le nœud enfant à l’index spécifié.

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

**Syntaxe :** obj << Get Child Count

**Description :** Obtenir le nombre de nœuds enfants

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

**Syntaxe :** data = obj << Get Data

**Description :** Obtenir les données d&apos;utilisateur associées à ce nœud. Récupère la valeur ou l&apos;objet défini avec l&apos;option Définir les données. Voir l&apos;optionn Définir les données pour de plus amples informations.

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

**Syntaxe :** dimmed = obj << Get Dimmed

**Description :** Obtenir l&apos;option pour estomper le texte de ce nœud.

**JMP Version ajoutée :** 15

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

**Syntaxe :** obj << Get Expanded Icon

**Description :** Obtient l&apos;icône développée du nœud d&apos;arborescence. Renvoie la valeur vide si aucune icône n&apos;a été spécifiée.

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

**Syntaxe :** style = obj << Get Font Style

**Description :** Obtenir le style de police pour ce nœud.

**JMP Version ajoutée :** 15

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

**Syntaxe :** obj << Get Icon

**Description :** Obtient l&apos;icône du nœud d&apos;arborescence. Renvoie la valeur vide si aucune icône n&apos;a été spécifiée.

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

**Syntaxe :** label = obj << Get Label

**Description :** Obtenir le texte affiché sur l’étiquette de ce nœud.

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

**Syntaxe :** tip = obj << Get Tip

**Description :** Obtenir le texte affiché sur l&apos;info-bulle de ce nœud.

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

**Syntaxe :** index = obj << Index Of( node )

**Description :** Obtenir l’index du nœud enfant spécifié. Renvoie 0 si l’index n’a pas été trouvé.

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

**Syntaxe :** obj << Insert( node, index )

**Description :** Insérer le nœud à l’index spécifié.

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

**Syntaxe :** isLeaf = obj << Is Leaf

**Description :** Ce nœud est-il une feuille de l’arborescence ?

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

**Syntaxe :** node = obj << Last Child

**Description :** Renvoie le dernier nœud enfant ou la valeur Vide si le nœud n’a pas de parents.

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

**Syntaxe :** node = obj << Parent

**Description :** Renvoie le nœud parent ou la valeur Vide si le nœud n’a pas de parents.

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

**Syntaxe :** obj << Prepend( node )

**Description :** Ajouter un nœud d&apos;arborescence devant les enfants de ce nœud.

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

**Syntaxe :** node = obj << Prev Sib

**Description :** Renvoie le prochain nœud de même niveau parmi les enfants du parent ou la valeur Vide si le nœud est le premier enfant.

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

**Syntaxe :** obj << Remove

**Description :** Supprimer ce nœud et tous ses enfants de l’arborescence.

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

**Syntaxe :** obj << Remove All Children

**Description :** Supprimer tous les nœuds enfant.

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

**Syntaxe :** obj << Remove Child( node )

**Description :** Supprime le nœud enfant spécifié.

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

**Syntaxe :** obj << Set Data( data )

**Description :** Obtenir les données d’utilisateur de ce nœud.

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

**Syntaxe :** obj << Set Dimmed( state=0|1 )

**Description :** Définir l&apos;option pour estomper le texte de ce nœud.

**JMP Version ajoutée :** 15

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

**Syntaxe :** obj << Set Expanded Icon( icon | path, <boolean> )

**Description :** Définir le nom d&apos;icône à utiliser si ce nœud est étendu. Le paramètre facultatif indique si l&apos;icône associé au chemin d&apos;accès doit être chargé (Windows uniquement).

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

**Syntaxe :** obj << Set Font Style( "Plain" | "Bold" )

**Description :** Définir le style de police pour ce nœud.

**JMP Version ajoutée :** 15

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

**Syntaxe :** obj << Set Icon( icon | path, <boolean> )

**Description :** Définir l&apos;icône Nœuds. Le paramètre facultatif indique si l&apos;icône associé au chemin d&apos;accès doit être chargé (Windows uniquement).

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

**Syntaxe :** obj << Set Label( label )

**Description :** Définir le texte affiché sur l’étiquette de ce nœud.

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

**Syntaxe :** obj << Set Tip( tip )

**Description :** Définir le texte affiché sur l&apos;info-bulle de ce nœud.

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

**Syntaxe :** node = obj << Sib

**Description :** Renvoie le prochain nœud de même niveau parmi les enfants du parent ou la valeur Vide si le nœud est le dernier enfant.

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

**Syntaxe :** node = obj << Top Parent

**Description :** Renvoie la racine de l’arborescence contenant ce nœud ou la valeur Vide si ce nœud n’a pas de parents.

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

**Syntaxe :** node = Tree Node( <label> )

**Description :** Crée un nœud à afficher dans une boîte d’arborescence.

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

