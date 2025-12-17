import { it, expect, describe } from "vitest";

import { formatMoney } from "./money";

describe("formateMoney ", () => {
  it("format 1999 to be equal to $10.99", () => {
    expect(formatMoney(1999)).toBe("$19.99");
  });
  it("display 2 decimal", () => {
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(1999)).toBe("$19.99");

    expect(formatMoney(100)).toBe("$1.00");
  });
  it("display $0.00", () => {
    expect(formatMoney(0)).toBe("$0.00");
  });
});
