import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ProductListing } from "../../pages/ProductListing/index";
import { productsWithUserMockData } from "../../__mock__/ProductListMock";

describe("<ProductListing />", () => {
  test("should render without errors", async () => {
    render(
      <MockedProvider mocks={productsWithUserMockData} addTypename={false}>
        <ProductListing />
      </MockedProvider>
    );
  });
  test("should render product results summary", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={productsWithUserMockData} addTypename={false}>
        <ProductListing />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText("Showing 96 items")).toBeInTheDocument()
    );
  });
  test("should render product results", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={productsWithUserMockData} addTypename={false}>
        <ProductListing />
      </MockedProvider>
    );
    const productsResults = await findByTestId("productsResults");
    const items = await screen.findAllByTestId("product");
    expect(items).toHaveLength(96);
  });
});
