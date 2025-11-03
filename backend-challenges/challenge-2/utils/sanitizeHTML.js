import sanitizeHtml from 'sanitize-html'

export const sanitizeHTML = inputObj => {
    const sanitized = {}
    for (const [key, value] of Object.entries(inputObj)) {
        sanitized[key] = sanitizeHtml(value, {
            allowedTags: ['b'],
            allowedAttributes: {
                b: []
            }
        })
    }
    return sanitized
}

