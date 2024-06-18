import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import '@testing-library/jest-dom'

test("should load the heading inside the  Contact Page ",()=>{
  render(<Contact />)

    const heading=screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

test("Should load the button inside the Contact Page ",()=>{
    render(<Contact />)
  
      const heading=screen.getByRole("button")
  
      expect(heading).toBeInTheDocument()
  
  })


  test("find placeholder text",()=>{

    render(<Contact/>)

    const placeholderText=screen.getByPlaceholderText("name")

    expect(placeholderText).toBeInTheDocument();
  })