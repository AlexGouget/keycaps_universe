export function sanitizeText(text: string) {
      return text.replace(/[^a-z0-9\- ]/gi, "").trim().replace(/\s+/g, "-").toLowerCase()
}