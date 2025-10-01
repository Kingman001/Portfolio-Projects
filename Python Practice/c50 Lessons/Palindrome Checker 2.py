print("This program check for palindrome using loop!")
inputText = input("Enter a word to check: ")
reversedText = ""
testText = inputText

while len(testText) > 0:
    reversedText += testText[-1]
    testText = testText[:-1]

if inputText == reversedText:
    print(f"{inputText} is a palindrome!")
else:
    print(f"{inputText} is not a palindrome!")