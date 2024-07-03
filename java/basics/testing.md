# Testing

## Runtime Type

### getSimpleName

```java
if (unknownObject.getClass().getSimpleName() == "Comedy") {
    Comedy c = (Comedy) unknownObject;
    c.watchComedy();
}
```

### instanceof

```java
boolean isType = unknownObject instanceof Adventure;

if (isType) {
    ((Adventure) unknownkObject).watchAdventure();
}
```

```java
if (unknownObject instanceof ScienceFiction syfy) {
    syfy.watchScienceFiction();
}
```
