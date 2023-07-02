const tree = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'C'
    },
    mid: {
      val: 'G'
    },
    right: {
      val: 'D'
    }
  },
  right: {
    val: 'E',
    left: {
      val: 'F',
      left: {
        val: 'H'
      },
      right: {
        val: 'L'
      }
    }
  }
}

const bfs = (tree) => {
  const quene = [tree];

  while(quene.length) {
    const tree = quene.shift();
    console.log(tree.val);
    tree.left && quene.push(tree.left);
    tree.mid && quene.push(tree.mid);
    tree.right && quene.push(tree.right);
  }

  return 'finish'
}

console.log(bfs(tree))