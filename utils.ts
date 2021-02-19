const emojiRegex = /:[^:\s]*(?:::[^:\s]*)*:/g;
// eslint-disable-next-line import/prefer-default-export
export const stripEmojis = (text: string) => text.replace(emojiRegex, '').trim();
