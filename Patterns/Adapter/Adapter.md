# Adapter

> A construct which adapts an existing interface X to conform to the required interface Y.

## Summary

- Implementing an Adapter has a low complexity.
- Determine the API you have and the API you need.
- Create a compoment which aggregates (has a reference to) the adaptee.
- Intermediate representations can pile up: use caching and other optimizations.
