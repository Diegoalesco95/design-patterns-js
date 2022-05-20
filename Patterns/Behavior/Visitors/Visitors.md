# Visitors

> A component (visitor) that knows to traverse a data structure compose of (possibly related) types.

## Summary

- Propagate an accept (Visitor v) method throughout the entire hierachy.
- Create a visitor with visitFoo(Foo), visitBar(Bar),...for each element in ther hierachy.
- each accept() simply calls visitor.visitXxx(this)
