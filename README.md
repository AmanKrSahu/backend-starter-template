## 🚀  What Makes This Template Worth Using?

Building an optimized backend project from scratch can be time-consuming and complex. To simplify this process, I've created a boilerplate that streamlines backend development for me and others.  

This template includes Node.js, Express.js, and TypeScript, along with strict ESLint rules, Prettier configuration, and essential repository standards. It also integrates best practices for code quality, consistency, and maintainability, making it easier to start new projects efficiently while allowing for future enhancements.

<img src="https://img.shields.io/badge/node%20js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" /> 
<img src="https://img.shields.io/badge/express%20js-000000?style=for-the-badge&logo=express&logoColor=white" /> 
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

<br>

## 🎁 What's Included in This Template?  

This backend template is designed to streamline development with modern tools and best practices. Here's what it includes:  

### 🚀 Technologies Used  
- **Node.js** `v22.13`, **Express.js** `v4.21`, and **TypeScript** `v5.8` for a robust backend framework.  
- **Strict environment enforcement** using `.npmrc` requiring **npm `v11.1+`** and **Node.js `v20+`** for consistency.  

### 📜 Repository Standards  
- Includes [`CODE_OF_CONDUCT.md`](/CODE_OF_CONDUCT.md) and [`MIT LICENSE`](/LICENSE) to ensure project integrity.  
- Prettier is the default code formatter ([`prettier configuration`](/prettier.config.js)).  
- Strict ESLint rules:  
  - [`ESLint configurations`](/eslint.config.mjs) ensure clean and maintainable code.  
  - Warns about unused variables and enforces TypeScript best practices.  
- **Advanced TypeScript configurations** (`noImplicitAny`, `strictNullChecks`) for type safety ([`tsconfig.json`](/tsconfig.json)).  
- **Automatic import sorting** using ESLint plugins for cleaner code organization.  

### 📦 Installed Dependencies  
#### **Production Dependencies**  
- `express`, `cookie-parser`, `cors`, `dotenv` – Essential middleware for API handling and security.  

#### **Development Dependencies**  
- **Linting & Formatting:**  
  - `eslint`, `eslint-config-prettier`, `eslint-plugin-prettier`, `prettier` – Enforce code quality.  
  - `eslint-plugin-import`, `eslint-plugin-simple-import-sort`, `eslint-plugin-unicorn` – Improve import management.  
- **TypeScript & Node Types:**  
  - `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `@types/node`, `@types/express` – Ensure TypeScript best practices.  
- **Commit Standards:**  
  - `husky` – Set up Git hooks for pre-commit checks.  
  - `@commitlint/cli`, `@commitlint/config-conventional` – Enforce conventional commits.  
- **Development Utilities:**  
  - `ts-node-dev` – Enables hot-reloading during development.  

This template provides a **ready-to-use, optimized** backend setup with **best practices** for **scalability, maintainability, and developer efficiency**.

<br>

## 💻 Available Commands  

Below are the commands you can use along with a brief explanation of their functions:  

- **`npm run dev`** – Starts the development server using `ts-node-dev`, enabling live reloading for faster development.  
- **`npm run build`** – Compiles the TypeScript code into JavaScript and copies `package.json` to the `dist` folder, preparing the project for production.  
- **`npm run start`** – Runs the compiled application from the `dist` folder in production mode.  
- **`npm run lint`** – Analyzes the codebase with ESLint, identifying potential issues and enforcing coding standards.  
- **`npm run lint:fix`** – Automatically fixes fixable ESLint issues, improving code quality and consistency.  
- **`npm run format`** – Checks if the code is properly formatted using Prettier without making changes.  
- **`npm run format:fix`** – Formats all code files using Prettier and writes changes to disk, ensuring a consistent code style.  
- **`npm run type-check`** – Runs TypeScript’s type checker to detect type errors without generating compiled output.  
- **`npm run prepare`** – Initializes Husky for Git hooks, ensuring pre-commit checks are in place.  

These commands help maintain code quality, enforce consistency, and streamline the development workflow.

<br>

## ✅ Guidelines to Run the Backend Locally

Follow these steps to set up and run the backend project on your local machine:

```bash
# To install dependencies 
npm install

# To run the server
npm run dev
```

The server will start, and you can access it at [`http://localhost:8000`](http://localhost:8000) (or the port specified in your environment variables).

<br>

## <img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="30" /> Thank You for Using This Template!  

### If you found this template helpful, please give it a star. It helps others discover it!

For any suggestions or improvements, feel free to [open an issue](https://github.com/AmanKrSahu/backend-starter-template/issues). If you have any feedback, you can reach out to me, **[Aman Sahu](https://github.com/AmanKrSahu)**.
