# Scanner

Reads input, either with System.in or from a file

## Instantiating Scanner

```java
Scanner sc = new Scanner(System.in);

Scanner sc = new Scanner(new File("nameOfFile"));
```

## Example

```java
Scanner sc = new Scanner(System.in);

System.out.println("Hi, What's your name");
String name = sc.nextLine();

System.out.println("What year were you born?");
String yearOfBirth = sc.nextLine();
```
