# User Directory – React Application

A React-based User Directory application that allows users to be created, edited, viewed, and deleted. The app demonstrates clean React architecture, form validation, API integration, and deployment best practices.

---

## Live Demo
https://user-directory-rdk9oln4o-arunkks-projects.vercel.app

## Source Code
https://github.com/ARUNKK51/user-directory

---

## Tech Stack
- React (Vite)
- Axios
- React Hook Form
- MockAPI
- Vercel (Deployment)

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ARUNKK51/user-directory.git

   Adding New Fields to the Form (Extensibility)

The form follows a schema-driven architecture.
All form fields are defined in one configuration file:


src/config/userFormSchema.js
To add a new field, only update the schema.
Example: Adding a Date field

Js
{
  name: "dateOfBirth",
  label: "Date of Birth",
  type: "date",
  required: true
}
Example: Adding an Address field

Js
{
  name: "address",
  label: "Address",
  type: "text",
  required: false,
  validation: {
    minLength: 5
  }
}
Steps:
Add the new field object to userFormSchema.js
Add the same field in the MockAPI users resource
No changes are required in the form component or API logic
This approach makes the form scalable, maintainable, and easy to extend.
