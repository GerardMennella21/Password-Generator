Password Generator by Gerard Mennella

# Summary
This page is designed to generate a random password. Both the character types and password length are customizable.

# Code Breakdown
The html, css, and some of the js were provided. I created the generate password function to return the random password

First, the password length is defined as a variable using a prompt asking for its length. A while loop is used to repeat the prompt until a value between 8 and 128 is entered.

Second, prompts appear asking if each character type should be included. These prompts results are assigned to variables with corresponding names.

Third, If Statements are written for each possible combination of the character type prompts. Each If and Else If statment contains math to pull a random character from the strings chosen from the prompts. These random characters are then returned to the randomCharacter function.

Lastly, A variable is declared for the random password as an empty string. The string is then filled with the randomCharacter function in a for loop set to repeat based on the number you entered in the prompt. the randomPassword value is then returned to the generatePassword function. This function sets the textContent for the password.

# Deployed Application
https://gerardmennella21.github.io/Password-Generator/

# Screenshot of Page
![Screenshot](./assets/images/Screenshot%20PG.png)
