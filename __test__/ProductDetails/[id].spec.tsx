import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ProductDetails from "../../pages/ProductDetails/[id]";
import { productsWithUserMockData } from "../../__mock__/productDetailsMock";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: { id: "2" },
      asPath: "",
    };
  },
}));

describe("<ProductDetails />", () => {
  test("should render without errors", async () => {
    render(
      <MockedProvider mocks={productsWithUserMockData} addTypename={false}>
        <ProductDetails />
      </MockedProvider>
    );
  });
  test("should render relevant product details", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={productsWithUserMockData} addTypename={false}>
        <ProductDetails />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText("Round Neck Jumper")).toBeInTheDocument()
    );
    await waitFor(() => expect(screen.getByText("£12.50")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("£14.00")).toBeInTheDocument());
  });
  test("should render back button", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={productsWithUserMockData} addTypename={false}>
        <ProductDetails />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText("Back to results")).toBeInTheDocument()
    );
  });
});
