/**
 * @param {string} html 
 * @returns {string} 
 */
export function formatHtml(html) {
    let formatted = '';
    let indent = 0;
    const lines = html.split(/(?=<)/).filter(line => line.trim());
    
    lines.forEach(line => {
        if (line.match(/<\/[^>]+>/)) {
            indent = Math.max(0, indent - 2);
        }
        formatted += ' '.repeat(indent) + line.trim() + '\n';
        if (line.match(/<[^/][^>]*>/) && !line.match(/<.*\/>/)) {
            indent += 2;
        }
    });
    
    return formatted.trim();
}

/**
 * @param {string} html 
 * @returns {string} 
 */
export function applySyntaxHighlighting(html) {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/(".*?")/g, '<span style="color: #a5d6ff;">$1</span>')
        .replace(/(&lt;\/?[a-z0-9]+)/gi, '<span style="color: #7ee787;">$1</span>')
        .replace(/(&lt;!--.*?--&gt;)/g, '<span style="color: #8b949e;">$1</span>')
        .replace(/class="([^"]*)"/, '<span style="color: #ffa657;">class</span>="<span style="color: #a5d6ff;">$1</span>"');
}

/**
 * @param {string} contentHtml 
 * @returns {string} 
 */
export function generateCompleteHtml(contentHtml) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Webazon mail</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; line-height: 1.4; -webkit-text-size-adjust: none; background-color: #f1f5f9;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; border-spacing: 0; border-collapse: collapse; margin: 0 auto; background-color: #ffffff;">
                    <tr>
                        <td>
                            ${contentHtml}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

/**
 * @param {HTMLElement} element 
 * @returns {string} 
 */
export function cleanHtml(element) {
    const elementCopy = element.cloneNode(true);
    
    const deleteButton = elementCopy.querySelector(':scope > .absolute');
    if (deleteButton) {
        deleteButton.remove();
    }
    
    const editableSpans = elementCopy.querySelectorAll('.editable-text');
    editableSpans.forEach(span => {
        const textNode = document.createTextNode(span.textContent);
        span.parentNode.replaceChild(textNode, span);
    });
    
    const elementsWithHoverRing = elementCopy.querySelectorAll('[class*="hover:ring"]');
    elementsWithHoverRing.forEach(el => {
        el.classList.remove(...Array.from(el.classList).filter(className => className.includes('hover:ring')));
    });
    
    const cleanElement = elementCopy.querySelector(':scope > :not(.absolute)');
    return cleanElement ? cleanElement.outerHTML : '';
} 