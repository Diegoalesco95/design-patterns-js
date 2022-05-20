# Memento

> A token/handle representing the system state. Lets us roll back to the state when the token was generated. May or may not directly expose state information.

## Summary

- Mementos are used to rollback states arbitrarily.
- A memento is simply a token/handle class with (typically) no functions of its own.
- A memento is not require to expose directly the state(s) to witch it reverts the system.
- Can be used to implement undo/redo.
