# -*- coding: utf-8 -*-
"""traversals.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/gist/bgoonz/ff875d63c2b0b6763531ccbf1f3ef637/traversals.ipynb
"""



"""# Tree Traversals
We have been doing tree traversals but we have not really defined them as a concept so lets take a look at what the actually are.

## Depth First Traversal
- Check the left child and try to traverse the left subtree
- check the right child and try to traverse the right subtree

## Breadth First Traversal
- traverse one level of nodes
- move down to child node subtrees
- traverse their children
- then move to grandchild node subtrees
- traverse their children
- keep moving down 1 level at a time until you reach the leaf nodes
"""

class TreeNode:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

# pre order
# visit the root
# do something with this node
# visit the left of the root
# visit the right of the root
3 go left
3
# in order
# visit the root
# visit the left of the root
# do something with this node
# visit the right of the root

# post order
# visit the root
# visit the left of the root
# visit the right of the root
# do something with this node

"""# CODE: 6571

# Demo
"""

import time
"""
You are given a binary tree.
Write a function that can return the inorder traversal of node values.
Example:
Input:
   3
  /  \
 n   1
    / \
   5   n
  / \
 n   n
Output: [3,5,1]

# outer function
  # inner function that takes in a root node and an output list
    # if the root exists
      # call inner function on the roots left
      # append the roots value to the output list
      # call the inner function on the roots right

  # create an empty list to hold our output
  # call the inner function pass the ref to the root node, and a ref to the output list

  # return our output list

  
"""
# 1. We start with a stack that contains the root node.
# 
# 2. We loop through the stack until it’s empty.
# 
# 3. We pop the last element from the stack and set it to a variable.
# 
# 4. We check if the node has a left child. If it does, we add the left child to
# the stack.
# 
# 5. We check if the node has a right child. If it does, we add the right child
# to the stack.
# 
# 6. We repeat steps 2-5 until the stack is empty.
# O(N) complexity
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
l = TreeNode(3)
l.right = TreeNode(1)
l.right.left = TreeNode(5)

def inorder_traversal_r(root):
    def dft(root, output):
      if root:
        dft(root.left, output)
        output.append(root.val)
        dft(root.right, output)
    output = []
    dft(root, output)
    return output

def inorder_traversal_i(root):
  """
  output list
  keep track of the data using a stack

  # keep looping
    # while root exists
      # append root to the stack
      # traverse to the left
    # if the stack is empty
      # return my output
    # grab the node off the top of the stack
    # append the nodes value to the output
    #traverse to the right
  """
  output = []
  stack = []

  while True:
    while root:
      stack.append(root)
      root = root.left

    if not stack:
      return output
    
    node = stack.pop()
    output.append(node.val)
    root = node.right

# s []
# [3, 5, 1]
start1 = time.time()
result1 = inorder_traversal_i(l)
end1 = time.time()

start2 = time.time()
result2 = inorder_traversal_r(l)
end2 = time.time()

print(f"iterative version took {end1 - start1} seconds with a result of {result1}")

print(f"recursive version took {end2 - start2} seconds with a result of {result2}")

"""
You are given the values from a preorder and an inorder tree traversal. Write a
function that can take those inputs and output a binary tree.
*Note: assume that there will not be any duplicates in the tree.*
Example:
Inputs:     0 1  2  3 4
preorder = [5,7,22,13,9]
inorder = [7,5,13,22,9]
Output:
   [5]
   / \
  7  22
    /  \
   13   9

# the outer function
  # inner function take a left and right constraint

    # get the root value from the preorder list at the starting_index
    # build a root node from the root value that we extracted
    # get the index by using the inorder_index_map using the key of root_value

    # increment the starting index


    # get the root.left node by calling the inner function recursively
    # using the left constraint and the index as ther right constraint

    # get the root.right node by calling the inner function recursively
    # using the index + 1 as ther left constraint passing in the old right constraint

    # return a ref to the root node

  # se4t a starting index to zero
  # build an inorder index map (dictionary)

  # call the innerfunction (and return it)



  # inner function def with a left=0 and a right=len(inorder)
  root_value = preorder[starting_index]  -> 5

  root = TreeNode(root_value)

  index = inorder_index_map[root_value] -> 1

  # recursion
  starting_index += 1 -> 1

  root.left = innerfunction(left, index) -> a new function call
  root.right = innerfunction(index + 1, right)
  return root

  # end of inner function #

# setup
inorder_index_map = {7: 0, 5: 1, 13: 2, 22: 3, 9: 4}

starting_index = 0

# start our first call
return innerfunction()




"""
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
      self.val = val
      self.left = left
      self.right = right

def build_tree(preorder, inorder):
  
  def helper(left = 0, right = len(inorder)):
    nonlocal starting_index

    if left == right:
      return None

    root_value = preorder[starting_index]
    root = TreeNode(root_value)

    index = inorder_index_map[root_value]

    starting_index += 1

    root.left = helper(left, index)
    root.right = helper(index + 1, right)

    return root

  # outer function starts here
  starting_index = 0

  inorder_index_map = {}
  for idx, value in enumerate(inorder):
    inorder_index_map[value] = idx

  return helper()

preorder = [5,7,22,13,9]
inorder = [7,5,13,22,9]
t = build_tree(preorder, inorder)


"""
   [5]
   / \
  7  22
    /  \
   13   9
"""
print(f"            [{t.val}]")
print(f"     [{t.left.val}]       [{t.right.val}]")
print(f"          [{t.right.left.val}]      [{t.right.right.val}]")
