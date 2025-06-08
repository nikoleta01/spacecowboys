import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Contact from "./Contact";

describe("Contact Form Validation", () => {
  it("should show validation errors for empty fields", async () => {
    render(<Contact />);
    const user = userEvent.setup();

    const firstNameInput = screen.getByPlaceholderText("First Name");
    const lastNameInput = screen.getByPlaceholderText("Last Name");
    const emailInput = screen.getByPlaceholderText("E-Mail");
    const messageInput = screen.getByPlaceholderText("Your Message");


    await user.type(firstNameInput, "a");
    await user.clear(firstNameInput);
    await user.type(lastNameInput, "a");
    await user.clear(lastNameInput);
    await user.type(emailInput, "a");
    await user.clear(emailInput);
    await user.type(messageInput, "a");
    await user.clear(messageInput);

    expect(
      await screen.findByText("First name must be at least 3 characters")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Last name must be at least 3 characters")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Sorry, that's no valid email address")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Message must be at least 10 characters")
    ).toBeInTheDocument();
  });
});
