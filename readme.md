# Image Sorter

Image Sorter is a simple and intuitive desktop application built with Electron and Node.js that allows you to quickly sort images into "liked" and "disliked" folders using keyboard shortcuts. It provides a seamless and efficient way to organize your image collection.

## Features

- Randomly loads images from the "unsorted" folder and displays them in a frameless window.
- Maximizes the image to fill the screen while maintaining its original aspect ratio.
- Allows sorting images using keyboard shortcuts:
  - Left arrow key: Move the current image to the "disliked" folder.
  - Right arrow key: Move the current image to the "liked" folder.
  - Esc key: Close the program.
- Automatically loads the next random image after sorting the current one.
- Provides a dark background for a comfortable viewing experience.

## Prerequisites

Before running the Image Sorter application, ensure that you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org)
- Electron: Install Electron globally by running `npm install -g electron` or as a development dependency in your project.

## Getting Started

1. Clone the repository or download the source code.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to install the required dependencies:
   ```
   npm install
   ```

4. Create the following folders in the project directory:
   - `unsorted`: Place the images you want to sort in this folder.
   - `liked`: Sorted images that you like will be moved to this folder.
   - `disliked`: Sorted images that you dislike will be moved to this folder.

5. Launch the application by running the following command:
   ```
   npm start
   ```
   or
   ```
   electron .
   ```

6. The Image Sorter window will open, displaying a random image from the "unsorted" folder.

7. Use the keyboard shortcuts (left arrow, right arrow, and Esc) to sort the images and navigate through your collection.


## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.
