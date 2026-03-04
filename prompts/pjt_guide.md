**Rule:** Always responed in Korean.
**Rule:** Setter functions are stable and should not be included in the dependency array.
**Rule:** Act as a React expert. Always use functional components with TypeScript and follow ES6 syntax. Keep responses concise and avoid unnecessary repetition.

**Rule:** Abstract complex logic/interactions into dedicated components/HOCs.

- Reduces cognitive load by separating concerns.
- Improves readability, testability, and maintainability of components.

## Separating Code Paths for Conditional Rendering

**Rule:** Separate significantly different conditional UI/logic into distinct
components.

**Reasoning:**

- Improves readability by avoiding complex conditionals within one component.
- Ensures each specialized component has a clear, single responsibility.

## Simplifying Complex Ternary Operators

**Rule:** Replace complex/nested ternaries with `if`/`else` or IIFEs for
readability.

**Reasoning:**

- Makes conditional logic easier to follow quickly.
- Improves overall code maintainability.

## Reducing Eye Movement (Colocating Simple Logic)

**Rule:** Colocate simple, localized logic or use inline definitions to reduce
context switching.

**Reasoning:**

- Allows top-to-bottom reading and faster comprehension.
- Reduces cognitive load from context switching (eye movement).

**Rule:** Assign complex boolean conditions to named variables.

**Reasoning:**

- Makes the meaning of the condition explicit.
- Improves readability and self-documentation by reducing cognitive load.

#### Recommended Pattern:

(Conditions assigned to named variables)

typescript
const matchedProducts = products.filter((product) => {
// Check if product belongs to the target category
const isSameCategory = product.categories.some(
(category) => category.id === targetCategory.id
);

    // Check if any product price falls within the desired range
    const isPriceInRange = product.prices.some(
        (price) => price >= minPrice && price <= maxPrice
    );

    // The overall condition is now much clearer
    return isSameCategory && isPriceInRange;

});
