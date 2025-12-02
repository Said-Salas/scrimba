from zxcvbn import zxcvbn
from getpass import getpass

def check_strength(password):
    result = zxcvbn(password)
    score = result["score"]
    if score == 3:
        response = "Strong enough password: Score of 3"
    elif score == 4:
        response = "Very strong password: Score of 4"
    else:
        feedback = result.get("feedback")
        warning = feedback.get("warning")
        suggestions = feedback.get("suggestions")
        response = "Weak password: Score of " + str(score)
        response += "\nWarning: " + warning
        response += "\nSuggestions: "
        for suggestion in suggestions: 
            response += suggestion + ", "
    return response

if __name__ == "__main__":
    while True:
        password1 = getpass("Enter a password to check strength: ")
        print(check_strength(password1))
        if check_strength(password1).startswith("Weak"):
            print("Please choose a stronger password")
        else:
            break