print("This is a Palindrome Checker!")
inputText = input("Enter a word to check: ")

reversedText = inputText[::-1]

if inputText == reversedText:
    print(f"{inputText} is a palindrome!")
else:
    print(f"{inputText} is not a palindrome!")
