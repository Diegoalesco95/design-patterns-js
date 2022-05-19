# Chain Responsability

> A chain of components who all get a change to process a command or a query, optionally having default processing implementation and an ability to terminate the processing chain.

## Summary

- Chain of Responsability can be implemented as a chain of references or a centralized construct.
- Enlist objects in the chain, possubly controlling ther oreder/priority.
- In a linked-list implementation, on member can impede further processing.
- Support removal of objects from the chain (lifetime control).
