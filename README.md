# Little Lemon Bistro

Extension project for the Meta / Coursera Professional Front-End Developer Certificate. Browse the Mediterranean-inspired menu, submit feedback, and experience a cohesive design system built with Expo.

## Features

- Menu browsing organized by Starters, Mains, and Desserts using `SectionList`
- Feedback form with client-side validation and timed success notification
- Centralized styles in `GlobalStyles.js` for colors, spacing, and typography
- Performance optimizations, including lazy-loaded screens and memoized list items
- Dark mode support (to be implemented)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:<YOUR-USER>/little_lemon_app.git
   ```
2. Change into the project directory:
   ```bash
   cd little_lemon_app
   ```
3. Install dependencies:
   ```bash
   npm install    # or pnpm install / yarn install
   ```
4. Start the Expo development server:
   ```bash
   expo start
   ```

## Usage

- Scan the displayed QR code with the Expo Go app on your mobile device
- Press `a` to run on an Android emulator or `i` for an iOS simulator
- Modify source files in the `app` directory and observe live reload

## Project Structure

```
little_lemon_app/
├── app/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Application screens
│   ├── styles/          # Style definitions and theme
│   └── App.js           # Entry point
├── assets/              # Images and other static assets
├── GlobalStyles.js      # Shared style variables
├── app.json             # Expo configuration
└── package.json         # Project metadata and scripts
```

## Contributing

Contributions are welcome. To get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

Please ensure all new code is properly documented and tested.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
