## algorithms

measuring algorithms
- How much time would this algorithm take? How should we measure time? The natural measure would be in seconds, but it would be nice to have an answer that didn't change every time Intel came out with a faster processor. __We can measure time in terms of machine instruction__
- slow algorithms keep recomputing the same subproblems over and over again
  - instead let's __solve each subproblem once__ and then __look up__ the solution later when we need it instead of repeatedly recomputing it
  - faster computer do change program speed but __does not change the analysis__

recurrence relation - the time for any routine is the time within the routine itself, plus the time for the recursive call
  - e.g. `time(n) = 2 + time(n-1) + time(n-2)`
  - think of the recursion as forming a tree
    - we draw one node, the root of the tree, for the first call then any time the routine calls itself, we draw another child in the tree

```
          F(5)
           /    \
       F(4)      F(3)
      /    \    /    \
       F(3)   F(2) F(2)  F(1)
      /    \
   F(2)    F(1)
```

analysis > expirmentation
  - Analysis can be more reliable than experimentation. If we experiment, we only know the __behavior__ of a program on certain specific test cases, while analysis can give us __guarantees__ about the performance on all input
  - It helps one choose among different solutions to problems. As we will see, there can be many different solutions to the same problem. A careful analysis and comparison can help us decide which one would be the best for our purpose, without requiring that all be implemented and tested
  - We can predict the performance of a program before we take the time to write code. In a large project, if we waited until after all the code was written to discover that something runs very slowly, it could be a major disaster, but if we do the analysis first we have time to discover speed problems and work around them
  - By analyzing an algorithm, we gain a better understanding of where the fast and slow parts are, and what to work on or work around in order to speed it up

space complexity 
  - space used at any time is the total space used by all recursive calls active at that time

source(s)
  - [Design and Analysis of Algorithms Lecture notes for January 9, 1996](https://www.ics.uci.edu/~eppstein/161/960109.html)
