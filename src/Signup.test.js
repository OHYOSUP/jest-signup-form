import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "./signup";


describe("Signup Component", () => {
  it("renders the signup form correctly", () => {
    render(<Signup />);
    
    const idInput = screen.getByPlaceholderText("이메일을 입력하세요");
    const passwordInput = screen.getByPlaceholderText("비밀번호를 입력하세요");
    const passwordCheckInput = screen.getByPlaceholderText("한번 더 비밀번호를 입력하세요");
    const signupButton = screen.getByText("회원가입");
    
    expect(idInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordCheckInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });
  
  it("validates password matching", () => {
    render(<Signup />);
    
    const passwordInput = screen.getByPlaceholderText("비밀번호를 입력하세요");
    const passwordCheckInput = screen.getByPlaceholderText("한번 더 비밀번호를 입력하세요");
    const signupButton = screen.getByText("회원가입");
    
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(passwordCheckInput, { target: { value: "differentpassword" } });
    fireEvent.click(signupButton);
    
    const validationMessage = screen.getByText("비밀번호를 확인하세요");
    expect(validationMessage).toBeInTheDocument();
  });
  
  it("submits the form on successful input", () => {
    render(<Signup />);
    
    const idInput = screen.getByPlaceholderText("이메일을 입력하세요");
    const passwordInput = screen.getByPlaceholderText("비밀번호를 입력하세요");
    const passwordCheckInput = screen.getByPlaceholderText("한번 더 비밀번호를 입력하세요");
    const signupButton = screen.getByText("회원가입");
    
    fireEvent.change(idInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "securepassword123" } });
    fireEvent.change(passwordCheckInput, { target: { value: "securepassword123" } });
    fireEvent.click(signupButton);
    
    const successMessage = screen.getByText("회원가입에 성공했습니다");
    expect(successMessage).toBeInTheDocument();
  });
});