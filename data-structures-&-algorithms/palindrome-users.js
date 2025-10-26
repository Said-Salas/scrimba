const getPalindromeUsers = usernames => {
    const palindromeUsers = []
    usernames.map(username => {
        const lowercaseUsername = username.toLowerCase()
        const arrayUsername = lowercaseUsername.split('')
        const reversedArrayUsername = arrayUsername.reverse()
        let reversedUsername = ''
        reversedArrayUsername.forEach(character => {
            reversedUsername += character
        })
        if (lowercaseUsername === reversedUsername) {
            palindromeUsers.push(username)
        }
    })
    return palindromeUsers
}

console.log(getPalindromeUsers([]))