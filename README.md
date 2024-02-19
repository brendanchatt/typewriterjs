# Typewriterjs 
## is a simple function the provides a typewriter api for your web project.

That's pretty much it.  Checkout out the code it's only a few lines.

## Usage
The args are self-explanatory, but
Pass:
 1.  The text string 'txt'
 2.  The element in which in the text will be appended, such as `document.getElementById('my-text-div)`
 3.   An onFinished callback function if you so desire.
***Note: in your text, use the caret character, '^', in your text to achieve a line break; and use the greater than symbol, '>', to achieve a not-breaking space***
The function adds characters one-by-one which is awkward if it's typing, for example `$nbsp;` and the browser types that out fully until the last character is added.

# Coming
This is fairly simple so far.  However, it is convenient to be able to copy; many other examples use recursion, making configurations less convenient. 
Until I update the api to allow more configuration, just change the file.
The api will include configurability for:
 - time to sleep on given characters
 - custom character substitutions

Thank you, please like the repo if you indeed like it.
