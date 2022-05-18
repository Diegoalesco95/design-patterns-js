# Proxy

> A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, o may require logging ot other added functionality.

## Summary

- A proxy has the same interface as the underlying object.
- To create a proxy, simply replicate the existin interface of an object.
- Add relevant functionality to the redefined member functions.
- Different proxies (communication, loggin, caching, etc.) have completely different behaviors.
