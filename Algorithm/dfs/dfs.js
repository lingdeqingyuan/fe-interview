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

const dfs = (tree) => {
  console.log(tree.val);
  if (tree.left) {
    dfs(tree.left);
  };
  if (tree.mid) {
    dfs(tree.mid);
  }
  if (tree.right) {
    dfs(tree.right);
  }

  return 'finish'
}

console.log(dfs(tree))