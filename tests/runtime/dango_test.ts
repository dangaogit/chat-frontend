import { assertEquals } from "../../deps/deps.test.ts";
import { Dango } from "../../src/runtime/dango.ts";

Deno.test("Hello dango", () => {
  assertEquals("Hello dango", Dango.hello);
});
