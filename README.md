 # TypeScript Learning Journey

 *this is where im mastering the superpowers of type script. im moving away from `any` and learning how to define strict rules for my code to catch bugs before they even happen.*   

 ### What I Practiced So Far:
 - **Interfaces**: Designing strict blueprints for objects.
 - **Strict Typing:** writing functions (like `sum`) with clearly defined inputs and outputs.
 - **Readonly:** protecting data from being changed accidentally.
 - **Union Types**: learning how to allow a variable to hold more than one specific type, e.g., string | number,
 - **Types vs Interfaces:** learning when to use which for better architecture.

### Tech Used:
- **TypeScript**
- **Node.js** (for running ts files via `ts-node`)  


### Why Ts ?
*after building big projects in JavaScript, I realized how important it is to have autocompletion and error checking while I code. this repo is my journey toward becoming a more disciplined developer.*

### Ts Tips
1. Types vs. Interfaces
  *while they often do the same thing, i learned that interfaces are better for defining object shapes (and they can be merged), while types are better for unions or aliases.*
   
  ```TS
  // use interface for bojects
  interface User {
    name: string;
    age: number;
  }
  
  // use type for unions
  type Status = "success" | "error" | "loading";
  ```

2. The Power of readonly
   *by marking a property as readonly, type script will scream at you if you try to change it. this is a life saver for configuration files or id fields.*
   
 ```TS
 interface Product {
  readonly id: number; // cannot be changed after creation
  name: string;
 }
 ```

 ### Next Steps in my Journey
  - [ ] master generics <T> for reusable components.
  - [ ] implement enums for fixed constant sets.
  - [ ] integrate ts into a full react project to see the real world benefits.

   ---
   **Aflah ^_^**
