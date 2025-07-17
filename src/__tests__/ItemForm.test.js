import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";


test("adds a new item to the list when the form is submitted", () => {
  render(<ShoppingList items={[]} />);

  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  fireEvent.click(screen.getByText(/Add to List/i));

  expect(screen.getByText(/Ice Cream/i)).toBeInTheDocument();
});
