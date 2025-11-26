# Directus Content Styling - Before & After

## 🔴 BEFORE: Framework-Dependent (Not Universal)

```tsx
<div
  className="prose prose-lg max-w-none
    prose-headings:font-bold prose-headings:text-gray-900
    prose-p:text-gray-700 prose-p:leading-relaxed
    prose-a:text-primary prose-a:underline prose-a:underline-offset-2 
    prose-a:decoration-primary/30 prose-a:font-medium
    hover:prose-a:text-primary-dark hover:prose-a:decoration-primary
    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:my-4
    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-ol:my-4
    prose-li:text-gray-700 prose-li:leading-relaxed prose-li:my-1
    prose-li:marker:text-primary prose-li:marker:font-bold
    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4
    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-4
    [&_li]:text-gray-700 [&_li]:leading-relaxed
    [&_ul_ul]:list-circle [&_ul_ul]:pl-6 [&_ul_ul]:mt-2
    [&_ul_ul_ul]:list-square [&_ul_ul_ul]:pl-6 [&_ul_ul_ul]:mt-2
    [&_ol_ol]:list-lower-alpha [&_ol_ol]:pl-6 [&_ol_ol]:mt-2
    [&_ol_ol_ol]:list-lower-roman [&_ol_ol_ol]:pl-6 [&_ol_ol_ol]:mt-2
    [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 
    [&_a]:decoration-primary/30 [&_a]:font-medium [&_a]:transition-all
    [&_a:hover]:text-primary-dark [&_a:hover]:decoration-primary
    prose-strong:text-gray-900 prose-strong:font-bold
    prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6"
  dangerouslySetInnerHTML={{ __html: content }}
/>
```

**Issues:**
- ❌ Requires Tailwind CSS + Typography plugin
- ❌ 25+ class names (hard to read/maintain)
- ❌ Mix of `prose-*` and `[&_*]` syntax
- ❌ Not portable to other projects
- ❌ Large bundle size
- ❌ Hard to customize globally

---

## ✅ AFTER: Universal CSS (Portable Everywhere)

```tsx
<div
  className="directus-content"
  dangerouslySetInnerHTML={{ __html: content }}
/>
```

**Benefits:**
- ✅ Works with ANY framework (React, Vue, Angular, vanilla)
- ✅ 1 simple class name (clean & readable)
- ✅ Pure CSS in `globals.css` (no dependencies)
- ✅ Portable to any project
- ✅ Smaller bundle size
- ✅ Easy to customize globally
- ✅ **Same visual result!**

---

## Visual Result: Identical! 🎨

Both methods produce the **exact same** styling:

### Headings
**Heading 1** - Bold, dark gray, large

### Paragraphs
This is a paragraph with proper line height and comfortable reading experience.

### Links
[Click here](#) - Primary blue color with underline, darker on hover

### Lists
- Level 1 item (disc, primary color)
  - Level 2 item (circle, indented)
    - Level 3 item (square, further indented)

1. Ordered item 1 (decimal, primary color)
   1. Ordered item 1.a (lowercase letter)
      1. Ordered item 1.a.i (roman numeral)

### Images
![Image](url) - Rounded corners, shadow, responsive

### Bold & Italic
**Bold text** is darker and stronger
*Italic text* is stylized

---

## Migration Path

If you have multiple pages using the old method:

### Step 1: Find all occurrences
```bash
grep -r "prose prose-lg" src/
```

### Step 2: Replace with universal class
```tsx
// Old
className="prose prose-lg max-w-none prose-a:..."

// New
className="directus-content"
```

### Step 3: Done! ✨
All styling is now centralized in `globals.css`

---

## Customization Example

Want to change all link colors across your site?

**Before (Tailwind):**
- Find all pages with Directus content
- Update `prose-a:text-primary` in each file
- Repeat for hover, underline, etc.

**After (Universal):**
- Edit ONE place: `globals.css`
```css
.directus-content a {
  color: #your-new-color;
}
```
- All pages update automatically! 🚀

---

## Conclusion

The universal CSS approach is:
- **Simpler** - 1 class vs 25+
- **Portable** - Works anywhere
- **Maintainable** - Edit once, update everywhere
- **Professional** - Clean, semantic code
- **Performant** - Smaller bundle size

**Recommendation:** Always use `.directus-content` for Directus WYSIWYG content! ✅
