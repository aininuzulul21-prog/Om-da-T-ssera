import re

with open('coba.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add closing ` before }, for desc
content = re.sub(r"desc: `([^`]*)},", r"desc: `\1`},", content, flags=re.DOTALL)

with open('coba.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed")
