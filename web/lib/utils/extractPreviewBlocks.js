/**
 * Extracts preview blocks from article body content
 * Intelligently selects text blocks while skipping images and empty content
 * Ensures a minimum character count for meaningful previews
 *
 * @param {Array} bodyBlocks - Array of PortableText blocks from Sanity
 * @param {number} minChars - Minimum character count for preview (default: 80)
 * @returns {Array} - Filtered array of blocks suitable for preview
 */
export function extractPreviewBlocks(bodyBlocks, minChars = 80) {
  if (!bodyBlocks || bodyBlocks.length === 0) {
    return [];
  }

  const previewBlocks = [];
  let charCount = 0;

  for (const block of bodyBlocks) {
    // Skip image blocks
    if (block._type === 'image') {
      continue;
    }

    // Skip empty or whitespace-only text blocks
    if (block._type === 'block') {
      // Get text content from children
      const text = block.children
        ?.map(child => child.text || '')
        .join('')
        .trim();

      // Skip if empty or just whitespace
      if (!text || text.length === 0) {
        continue;
      }

      // Add this block to preview
      previewBlocks.push(block);
      charCount += text.length;

      // If we've reached minimum character count, stop
      if (charCount >= minChars) {
        break;
      }
    } else {
      // For other block types, include them but don't count characters
      previewBlocks.push(block);
    }
  }

  // If we didn't find any suitable blocks, return empty array
  // This is better than showing nothing or breaking
  return previewBlocks;
}
