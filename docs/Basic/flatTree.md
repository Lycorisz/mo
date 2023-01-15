---
title: 树的扁平化
date: "2023-1-15"
categories:
- JavaScript
- Vue
  tags:
- 基础
  publish: true
---

获取树全标签label
```javascript
data() {
  return {
    labelList: []
  }
},
getLabel(node) {
  if (!node.parent) {// 若无父节点，则直接返回
    return
  }
  this.labelList.unshift(node.data.label)// 将每一级的lable保存起来
  //调用递归
  this.getLabel(node.parent)
}

handleNodeClick(data,node) {
  this.labelList =[]
  this.getLabel(node)
  console.log(this.labelList)
}
```

树的扁平化
```javascript
treeFlat(tree) {
        let flattedTree = []
        for (let i = 0;i < tree.length;i++) {
          let item = {}
          for (const treeKey in tree[i]) {
            this.$set(item, treeKey, tree[i][treeKey])
          }
          flattedTree.push(item)
          if (tree[i].child.length) {
            flattedTree = flattedTree.concat(this.treeFlat(tree[i].child))
          }
        }
        return flattedTree
      }
```