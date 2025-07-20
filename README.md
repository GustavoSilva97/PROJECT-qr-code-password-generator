# 🔐 QR Code & Password Generator CLI

A simple and interactive CLI tool built with JavaScript that allows users to generate secure passwords and QR codes directly from the terminal.

## 📂 Project Structure

```
src/
├── index.js                         # Main CLI logic
├── prompts-schema/
│   ├── prompt-schema-main.js       # Main menu prompt configuration
│   └── prompt-schema-qrcode.js     # QR Code-specific prompt configuration
└── services/
    ├── password/
    │   ├── create.js               # Handles password generation
    │   └── handle.js               # Password creation logic
    └── qr-code/
        ├── create.js              # Handles QR Code generation
        └── handle.js              # QR Code creation logic
```

## 🚀 Features

* 📎 Generate custom **QR Codes** based on user input.
* 🔐 Generate **secure passwords** with customizable options.
* ✅ Simple and modular code architecture.
* 📦 Interactive CLI with [prompt](https://www.npmjs.com/package/prompt) package.

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/)
* [prompt](https://www.npmjs.com/package/prompt) — for interactive command-line inputs
* [chalk](https://www.npmjs.com/package/chalk) — for colored terminal output
* [qrcode](https://www.npmjs.com/package/qrcode) - for QR Code generation

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed.

### Installation

```bash
git clone https://github.com/your-username/qr-password-generator.git
cd qr-password-generator
npm install
```

### Run the Project

```bash
node src/index.js
```

You’ll be prompted to choose:

```
What would you like to do?
1 - Generate a QR Code
2 - Generate a Password
```

## 📸 Example Usage

**QR Code Output:**
You'll be prompted to enter a URL/text, and a QR code image will be generated.

**Password Output:**
A secure password will be displayed in the terminal based on your selected options.

## 🧩 Future Improvements

* Add encryption options for passwords
* Export QR code to file or clipboard
* Add configuration options via command-line arguments

## 📝 License

MIT — feel free to use and adapt.

## 👤 Author

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)

---
