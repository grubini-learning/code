# Strings

## Inspection methods

- length - `string.length()`
- charAt - `string.charAt(0)`
- indexOf
  - the second parameter indicates from where to start searching towards the right
- lastIndexOf
  - the second parameter
- isEmpty - returns true if length is 0
- isBlank - returns true if length is zero || the string only contains white space

## Comparison methods

- contentEquals - returns boolean if character or string is equal
- equals - returns boolean if the string is equal to the value of the argument
- equalsIgnoreCase - returns a boolean is parameter is equal, ignoring case
- contains - returns a boolean if the string contains the argument
- endsWith - returns a boolean if the argument is in the correct placement
- startsWith - returns a boolean if the argument is in the correct placement
- regionMatches - returns a boolean, if defined sub-regions are matched

## Manipulation methods

### Clean up

- indent
- strip
- stripLeading
- stripTrailing
- trim
- toLowerCase
- toUpperCase

### Transforms

- concat - concatenates text to the string and returns a new string
  - `"25".concat("/").concat("11").concat("/").concat("1982");`
- join - concatenates multiple strings together in a method, specifying a delimeter
  - `String.join("/", "25", "11", "1982")`
- repeat - returns repeated string by the number of times specified
- replace - replaces characters
  - `newDate.replace("/", "-");`
- replaceAll
- replaceFirst
- substring
- subSequence

## Converts to array

- split - `"My String".split(" ");`
