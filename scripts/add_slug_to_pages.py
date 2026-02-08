#!/usr/bin/env python3
"""
Script to add slug property to all service page files for breadcrumb support.
Run from the project root directory.
"""

import os
import re

app_dir = "/Applications/Safawala Delhi/app"

def add_slug_to_page(file_path, slug):
    """Add slug property to pageData in a service page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if slug already exists
        if f'slug: "{slug}"' in content or f"slug: '{slug}'" in content:
            print(f"  Skipping {slug} - slug already exists")
            return False
        
        # Pattern to find: title: "Some Title",\n    shortDescription:
        # And add: slug: "the-slug",\n after title
        pattern = r'(title:\s*["\'][^"\']+["\']\s*,\n)(\s*shortDescription:)'
        replacement = f'\\1    slug: "{slug}",\\n\\2'
        
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  ✓ Updated {slug}")
            return True
        else:
            print(f"  ⚠ Could not match pattern in {slug}")
            return False
            
    except Exception as e:
        print(f"  ✗ Error processing {slug}: {e}")
        return False

def main():
    updated_count = 0
    skipped_count = 0
    error_count = 0
    
    print("Adding slug property to service pages for breadcrumb support...\n")
    
    # Get all directories in app folder (these are the page routes)
    for item in sorted(os.listdir(app_dir)):
        item_path = os.path.join(app_dir, item)
        
        # Skip non-directories and special folders
        if not os.path.isdir(item_path):
            continue
        if item.startswith('.') or item == 'preview':
            continue
            
        page_file = os.path.join(item_path, "page.tsx")
        
        if os.path.exists(page_file):
            result = add_slug_to_page(page_file, item)
            if result:
                updated_count += 1
            elif result is False and "already exists" in str(result):
                skipped_count += 1
            else:
                error_count += 1
    
    print(f"\n✅ Complete!")
    print(f"   Updated: {updated_count} pages")
    print(f"   Skipped: {skipped_count} pages (already had slug)")
    print(f"   Errors:  {error_count} pages")

if __name__ == "__main__":
    main()
