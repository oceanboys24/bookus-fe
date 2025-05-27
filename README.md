## 📁 Project Structure

- **/Assets** # Static assets like images, fonts, icons
- **/Components** # Reusable UI components (Buttons, Cards, Modals, etc.)
- **/Features** # Feature-specific modules or pages (e.g., Authentication, UserProfile)
- **/Hooks** # Custom React hooks
- **/Types** # Shared TypeScript types and interfaces

## ✍️ Naming Conventions

### 📁 Folder & File Names

- Use **PascalCase** for all folders and files related to components, pages, layouts, and hooks.
  - ✅ `LoginForm`, `UserProfile`, `HomePage`
  - ❌ `login-form`, `user_profile`, `homepage`

### ⚛️ Components

- Component names must use **PascalCase**:
  ```tsx
  function UserCard() {
    return <div>User</div>;
  }
  export default UserCard;
  ```

### ⚛️ Variable, Function and Custom Hooks

- Variable and Function names must use **camelCase**:
  ```tsx
  const userName = "John";
  function fetchUserData() {
  ...
  }
  ```
- Use camelCase for custom hooks starting with use.
  ```tsx
  const useAuth = () => {
   ...
  };
  ```
# 📝 Commit Message Guidelines

To keep our git history clean and understandable, please follow these commit message conventions:

---

## Commit Message Format

- **type**: What kind of change you are committing   
- **short summary**: Brief description (max 50 characters recommended)

---

## Types

| Type     | Description                              | Example                        |
|----------|------------------------------------------|------------------------------|
| feat     | A new feature                            | feat(auth): add login page    |
| fix      | A bug fix                               | fix(button): fix click issue  |
| docs     | Documentation only                      | docs(readme): update usage    |
| style    | Code style changes (formatting, spaces) | style(header): fix indentation|
| refactor | Code refactoring without feature change | refactor(api): simplify fetch |

---



