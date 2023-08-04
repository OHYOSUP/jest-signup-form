import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Signup from "./signup";

test("회원가입 폼 테스트", async () => {
  const handleSubmit = jest.fn();
  render(<Signup onSubmit={handleSubmit} />);

  const username = "testuser";
  const password = "testpassword";

  userEvent.type(screen.getByLabelText(/id/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.type(
    screen.getByPlaceholderText(/한번 더 비밀번호를 입력하세요/i),
    password
  );
  userEvent.click(screen.getByRole("button", { name: /회원가입/i }));
  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      id: username,
      password: password,
      passwordCheck: password,
    })
  );
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
