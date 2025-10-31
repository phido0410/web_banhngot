#!/usr/bin/env python3
"""
Script to add modern-redesign.css to all HTML files
"""

import os
import glob
import re

def add_modern_css(filepath):
    """Add modern-redesign.css link to HTML file if not exists"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if modern-redesign.css is already included
        if 'modern-redesign.css' in content:
            return False
        
        # Find the style.css link
        pattern = r'(<link rel="stylesheet" href="\.\.\/assets\/css\/style\.css">)'
        replacement = r'\1\n    <link rel="stylesheet" href="../assets/css/modern-redesign.css">'
        
        new_content = re.sub(pattern, replacement, content)
        
        # If pattern not found, try without ../
        if new_content == content:
            pattern2 = r'(<link rel="stylesheet" href="assets\/css\/style\.css">)'
            replacement2 = r'\1\n    <link rel="stylesheet" href="assets/css/modern-redesign.css">'
            new_content = re.sub(pattern2, replacement2, content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
            
    except Exception as e:
        print(f"✗ Error updating {filepath}: {e}")
        return False


def main():
    updated_count = 0
    
    # Blog pages
    print("🔄 Updating blog pages...")
    blog_files = glob.glob('blog/*.html')
    for filepath in blog_files:
        if 'backup' not in filepath.lower():
            if add_modern_css(filepath):
                print(f"✓ Added CSS to {filepath}")
                updated_count += 1
            else:
                print(f"⚠ Already has CSS or skipped: {filepath}")
    
    # Product pages
    print("\n🔄 Updating product pages...")
    product_files = glob.glob('products/*.html')
    for filepath in product_files:
        if add_modern_css(filepath):
            print(f"✓ Added CSS to {filepath}")
            updated_count += 1
        else:
            print(f"⚠ Already has CSS or skipped: {filepath}")
    
    print(f"\n✅ Added modern-redesign.css to {updated_count} files!")


if __name__ == "__main__":
    main()
