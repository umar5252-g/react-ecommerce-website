import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";

import axios from "axios";
import { PaymentSummary } from "./PaymentSummary";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

describe("payment summary integration test", () => {
  let loadCart;
  let paymentSummary;
  beforeEach(() => {
    paymentSummary = {
      totalItems: 3,
      productCostCents: 2397,
      shippingCostCents: 0,
      totalCostBeforeTaxCents: 2397,
      taxCents: 240,
      totalCostCents: 2637,
    };
    loadCart = vi.fn();
  });
  it("checking the dollar amout", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );
    expect(screen.getByText("Items (3):")).toBeInTheDocument();
    const productCost = screen.getByTestId("productCost");

    expect(within(productCost).getByText("$23.97")).toBeInTheDocument();

    expect(screen.getByTestId("shippingCost")).toHaveTextContent("$0.00");
    expect(screen.getByTestId("tax")).toHaveTextContent("$2.40");
    expect(screen.getByTestId("totalCost")).toHaveTextContent("$26.37");
    expect(screen.getByTestId("totalCostBeforeTax")).toHaveTextContent(
      "$23.97"
    );
  });
});
