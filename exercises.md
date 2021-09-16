Feedback
worried about
your fundamentals:
functions
parameters
assignment vs equality
for loops
while loops
work on
for loops
traversing arrays
traversing nested / 2-dimensional arrays
vocabulary
array => row of buckets
parameter => placeholder
functions
expectation: that parameters are not "redeclared" inside a method/function. That noting the parameter names and not reusing them becomes second nature.

e.g. No more of this:

const minesw = (board, y, x) => { let y = board[y] }

think of functions/methods as mathematical equations (in fact, that's where a lot of our terminology comes from). Recall our comparing functions to mathematical functions/equations and that parameters play the same role as placeholders/variables

f(x) = x + 2 f(a,b) = a + b

arrays
expectations: working with arrays becomes second nature. Like: traversing arrays, or a section of an array. Never getting caught out by the difference between an array's size and its indices.

some suggested exercises

given any array of integers (e.g. [10, 6, 77, 93, 94, 16, 72, 13, 8, 2])
sum up its values
sum up its values backwards
sum up its middle 3 values
given any array of characters (note: the answers are going to be nonsense words) (e.g. ["b", "a", "t", "m", "a", "n", " ", "c", "o", "s", "t", "u", "m", "e"])
concatenate its values into a word
concatenate its values backwards into a word
concatenate the three letters in the middle into a word
find the index of the letter c in the array. Now
extract c and the three letters after it. Concatenate to get a word.
extract c and the four letters before it. Concatenate to get a word.