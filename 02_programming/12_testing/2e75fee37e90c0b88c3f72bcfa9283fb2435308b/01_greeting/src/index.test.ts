import { greet } from ".";

test("greeting default behaviour", () => {
expect(greet()).toBe("Hello WORLD!")
expect(greet("Francis")).toBe("Hello FRANCIS!");
}) 