# hooks.py
import os
import re
import time
from urllib.parse import urlparse

extracted_nav = None
nav_finalized = False
BUILD_ID = str(int(time.time()))

START_MARKER = '<div class="wy-menu wy-menu-vertical"'
END_MARKER = '</nav>'

def get_base_prefix(config):
    """Detects '/de/', '/fr/', or '/' automatically from mkdocs.yml."""
    # 1. Check extra.language_prefix if explicitly set
    extra = config.get('extra', {})
    if 'language_prefix' in extra:
        prefix = extra['language_prefix']
        return prefix if prefix.endswith('/') else prefix + '/'

    # 2. Check site_url (e.g. https://site.com/de/ -> '/de/')
    site_url = config.get('site_url')
    if site_url:
        path = urlparse(site_url).path
        if path and path != '/':
            return path if path.endswith('/') else path + '/'

    return '/'

def fix_links_to_root(html, base_prefix):
    """Prefixes relative links with the site's language folder (/de/..., /fr/..., or /...)."""
    def replace_href(match):
        href = match.group(1)
        if href.startswith(('http://', 'https://', '//', 'mailto:', '#')):
            return match.group(0)

        # Prevent double-prefixing
        if href.startswith(base_prefix):
            return match.group(0)

        # Root links
        if href in ('.', './', '/'):
            return f'href="{base_prefix}"'

        clean_href = href.lstrip('./').lstrip('/')
        return f'href="{base_prefix}{clean_href}"'

    return re.sub(r'href=["\']([^"\']+)["\']', replace_href, html)

def on_post_page(output, page, config):
    global extracted_nav, nav_finalized

    start_pos = output.find(START_MARKER)
    if start_pos == -1:
        return output

    end_pos = output.find(END_MARKER, start_pos)
    if end_pos == -1:
        return output

    base_prefix = get_base_prefix(config)
    is_homepage = getattr(page, 'is_homepage', False) or page.url in ('', 'index.html')

    if not nav_finalized:
        raw_sidebar_chunk = output[start_pos:end_pos]
        first_tag_end = raw_sidebar_chunk.find('>') + 1
        last_divs = raw_sidebar_chunk.rfind('</div>')
        second_last_divs = raw_sidebar_chunk[:last_divs].rfind('</div>')
        inner_nav = raw_sidebar_chunk[first_tag_end:second_last_divs]

        cleaned_nav = re.sub(r'\b(current|subnav-current)\b', '', inner_nav)
        extracted_nav = fix_links_to_root(cleaned_nav, base_prefix)

        if is_homepage:
            nav_finalized = True

    # Injects data-base-prefix so theme.js knows where to fetch nav-content.html
    loader_html = (
        f'<div id="dynamic-nav-container" class="wy-menu wy-menu-vertical" data-spy="affix" '
        f'role="navigation" aria-label="main navigation" data-nav-v="{BUILD_ID}" data-base-prefix="{base_prefix}">'
        '</div>'
        '</div>'
    )

    return output[:start_pos] + loader_html + output[end_pos:]

def on_post_build(config):
    site_dir = config['site_dir']
    if extracted_nav:
        nav_file_path = os.path.join(site_dir, 'nav-content.html')
        with open(nav_file_path, 'w', encoding='utf-8') as f:
            f.write(extracted_nav)
        print(f"\n[Hook] Saved standalone navigation to {nav_file_path}")

def on_config(config):
    try:
        from markdown.extensions.toc import slugify_unicode
        for ext in config.get('markdown_extensions', []):
            if isinstance(ext, dict) and 'toc' in ext:
                ext['toc']['slugify'] = slugify_unicode
    except Exception:
        pass
    return config