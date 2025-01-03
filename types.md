# types 
In TypeScript, both interface and type are used to define the structure of objects, but they differ in flexibility and usage. While interface is extendable and primarily for object shapes, type is more versatile, allowing unions, intersections, and more complex type definitions.

- type cant be implemented by classes.
- 


## pick 
picks some variables from a interface.
- TypeScript’s Pick<Type, Keys> utility type allows you to create a new type by selecting specific properties (`Keys`) from an existing type (`Type`). This is useful for narrowing down types to only the relevant properties, enhancing type safety, and reducing redundancy in complex type definitions.