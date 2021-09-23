##-------------------------------------------------------------------
"""
Binary Heap. A min heap is a complete binary tree where each node is smaller than
its children. The root, therefore, is the minimum element in the tree. The min
heap uses an array to represent the data and operation. For example a min heap:

     4
   /   \
  50    7
 / \   /
55 90 87

Heap [0, 4, 50, 7, 55, 90, 87]

Method in class: insert, remove_min
For example insert(2) in a min heap:

     4                     4                     2
   /   \                 /   \                 /   \
  50    7      -->     50     2       -->     50    4
 / \   /  \           /  \   / \             /  \  /  \
55 90 87   2         55  90 87  7           55  90 87  7

For example remove_min() in a min heap:

     4                     87                    7
   /   \                 /   \                 /   \
  50    7      -->     50     7       -->     50    87
 / \   /              /  \                   /  \
55 90 87             55  90                 55  90

##-------------------------------------------------------------------
"""
from abc import ABCMeta, abstractmethod


class AbstractHeap(metaclass=ABCMeta):##-------------------------------------------------------------------
"""
    """Abstract Class for Binary Heap."""

    def __init__(self):
        pass

    @abstractmethod
    def perc_up(self, i):
        pass

    @abstractmethod
    def insert(self, val):
        pass

    @abstractmethod
    def perc_down(self, i):
        pass

    @abstractmethod
    def min_child(self, i):
        pass

    @abstractmethod
    def remove_min(self):
        pass


class BinaryHeap(AbstractHeap):
    def __init__(self):
        self.currentSize = 0
    ##-------------------------------------------------------------------
"""

    def perc_up(self, i):
        while i // 2 > 0:
            if self.heap[i] < self.heap[i // 2]:
                # Swap value of child with value of its parent
                self.heap[i], self.heap[i // 2] = self.heap[i // 2], self.heap[i]
    ##-------------------------------------------------------------------
"""

    """
        Method insert always start by inserting the element at the bottom.
        It inserts rightmost spot so as to maintain the complete tree property.
        Then, it fixes the tree by swapping the new element with its parent,
    ##-------------------------------------------------------------------
"""
        perc_up the minimum element
    ##-------------------------------------------------------------------
"""
    """

    def insert(self, val):
        self.heap.append(val)
        self.currentSize = self.currentSize + 1
        self.perc_up(self.currentSize)

    """
        Method min_child returns the index of smaller of 2 children of parent at index i
    """

    def min_child(self, i):
        if 2 * i + 1 > self.currentSize:  # No right child
            return 2 * i
        else:
            # left child > right child
            if self.heap[2 * i] > self.heap[2 * i + 1]:
    ##-------------------------------------------------------------------
"""
            else:
                return 2 * i

    def perc_down(self, i):
        while 2 * i < self.currentSize:
    ##-------------------------------------------------------------------
"""
            if self.heap[min_child] < self.heap[i]:
                # Swap min child with parent
                self.heap[min_child], self.heap[i] = self.heap[i], self.heap[min_child]
            i = min_child

    """
        Remove Min method removes the minimum element and swap it with the last
        element in the heap( the bottommost, rightmost element). Then, it
        perc_down this element, swapping it with one of its children until the
        min heap property is restored
        Complexity: O(logN)
    """

    def remove_min(self):
        ret = self.heap[1]  # the smallest value at beginning
        self.heap[1] = self.heap[self.currentSize]  # Replace it by the last value
        self.currentSize = self.currentSize - 1
        self.heap.pop()
        self.perc_down(1)
        return ret
