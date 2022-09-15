import { assertEquals } from "../deps/deps.test.ts";
import { hello } from "../src/lib.ts";

Deno.test("lib_test", () => {
  assertEquals(hello, "hello there is lib.ts");
});
