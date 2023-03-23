In TypeScript, you can use an `enum` to define a set of named constants. An `enum` is a data type that allows you to define a set of values that can be enumerated using a name or a numeric value.

 you can define an `enum` called `StatusEnum` with three values: `NotStarted`, `InProgress`, and `Done`.

By default, the `enum` values start at `0` and increment by `1`. You can access the value of an `enum` by using its name or its numeric value. 

However, starting from `0` might not be very readable, so you can assign custom values to each `enum` value.

You can also use an `enum` in combination with an interface to define a type that uses the `enum` values.

This allows you to create objects with a `Task` type, and use the `enum` values to set the `status` property.