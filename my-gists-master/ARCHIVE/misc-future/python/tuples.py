# Tuples are like lists, but are immutable and are usually used to hold
# heterogenous data. They use parens instead of square brackets.

# Example:

import math


def dist(a, b):
    """Compute the distance between two x,y points."""
    x0, y0 = a  # Destructuring assignment
    x1, y1 = b

    return math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)


a = (2, 7)  # <-- x,y coordinates stored in tuples
b = (-14, 72)

# Prints "Distance is 66.94"
print("Distance is: {:.2f}".format(dist(a, b)))


# Write a function that prints all the values in a tuple

# def print_tuple(...
def print_tuple(tuple):
    for elem in tuple:
        print(elem)


t = (1, 2, 5, 7, 99)
print_tuple(t)  # Prints 1 2 5 7 99, one per line

# Declare a tuple of 1 element then print it
u = (
    1,
)  # What needs to be added to make this work? //--> comma to make it in to a tuple with 1 value
print_tuple(u)
