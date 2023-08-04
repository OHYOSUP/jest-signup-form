import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Import userEvent for simulating user interactions
import Signup from "./signup";


test("회원가입 폼 테스트", async () => {
  const handleSubmit = jest.fn();
  render(<Signup onSubmit={handleSubmit} />);

  const username = "testuser";
  const password = "testpassword";

  userEvent.type(screen.getByLabelText(/id/i), username); // Assuming '아이디' is the label text for username input
  userEvent.type(screen.getByLabelText(/password/i), password); // Assuming '비밀번호' is the label text for password input
  userEvent.type(screen.getByPlaceholderText(/한번 더 비밀번호를 입력하세요/i), password); // Placeholder text for password confirmation input
  userEvent.click(screen.getByRole("button", { name: /회원가입/i }));

  // Wait for the handleSubmit function to be called
  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      id: username,
      password: password,
      passwordCheck: password,
    })
  );
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});