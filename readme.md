The `UserInterface` interface declares a `getFullname()` method that returns a string.

The `User` class implements the `UserInterface` interface and contains private properties for `firstName`, `lastName`, and `unchangableName`, along with a static property for `maxAge`. It has a constructor that takes in `firstName` and `lastName` and assigns them to their respective properties. It also has a `getFullname()` method that returns the concatenation of `firstName` and `lastName`.

The `Admin` class extends the `User` class and contains a private `editor` property along with `setEditor()` and `getEditor()` methods.

Lastly, the code creates an instance of `User` and `Admin`, calls the `getFullname()` method on each, and accesses the static `maxAge` property through the `User` class name.