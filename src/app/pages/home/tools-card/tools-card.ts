import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { ScButtonComponent } from '../../../shared/components/ui/button/sc-button/sc-button.component';

@Component({
  selector: 'app-tools-card',
  imports: [MateriallistModule, ScButtonComponent],
  templateUrl: './tools-card.html',
  styleUrl: './tools-card.scss',
})
export class ToolsCard {
  categories = [
    {
      title: 'Security & Encoding Tools',
      icon: 'shield',
      description:
        'Authentication, encryption, and encoding tools for backend developers, APIs, and security workflows.',
      details: [
        {
          name: 'JWT Decoder',
          des: 'Decode and inspect JWT tokens instantly',
          icons: 'shield-lock',
          link: '',
        },
        {
          name: 'JWT Generator',
          des: 'Generate secure JWT tokens with custom payload',
          icons: 'key',
          link: '',
        },
        {
          name: 'Password Hash Generator',
          des: 'Hash passwords using bcrypt, SHA256, SHA512',
          icons: 'lock',
          link: '',
        },
        {
          name: 'Password Strength Checker',
          des: 'Check password strength & security score',
          icons: 'gauge',
          link: '',
        },
        {
          name: 'Password Generator',
          des: 'Generate strong random passwords',
          icons: 'key-round',
          link: '',
        },
        { name: 'MD5 Generator', des: 'Generate MD5 hash for strings', icons: 'hash', link: '' },
        {
          name: 'Base64 Encoder / Decoder',
          des: 'Encode or decode Base64 strings',
          icons: 'binary',
          link: '',
        },
        {
          name: 'URL Encoder / Decoder',
          des: 'Encode or decode URLs safely',
          icons: 'link',
          link: '',
        },
      ],
    },

    {
      title: 'Data Viewers & Editors',
      icon: 'file-code',
      description:
        'View, edit, and debug developer data formats like JSON, XML, HTML, and Markdown.',
      details: [
        {
          name: 'JSON Viewer & Editor',
          des: 'View and edit JSON data easily',
          icons: 'braces',
          link: '',
        },
        {
          name: 'XML Viewer & Editor',
          des: 'Analyze XML structure visually',
          icons: 'file-code',
          link: '',
        },
        { name: 'HTML Viewer', des: 'Preview HTML output in browser', icons: 'eye', link: '' },
        { name: 'HTML Editor', des: 'Write and edit HTML code online', icons: 'code', link: '' },
        {
          name: 'Markdown Editor',
          des: 'Write & preview Markdown files',
          icons: 'file-text',
          link: '',
        },
        {
          name: 'Code Diff Checker',
          des: 'Compare two code files',
          icons: 'git-compare',
          link: '',
        },
      ],
    },

    {
      title: 'Code Formatters & Beautifiers',
      icon: 'paintbrush',
      description: 'Format and beautify code for better readability and maintainability.',
      details: [
        {
          name: 'JavaScript Formatter',
          des: 'Format JavaScript code neatly',
          icons: 'code-2',
          link: '',
        },
        { name: 'HTML Formatter', des: 'Beautify HTML code', icons: 'file-html', link: '' },
        { name: 'CSS Formatter', des: 'Clean and organize CSS', icons: 'palette', link: '' },
        { name: 'JSON Formatter', des: 'Pretty-print JSON data', icons: 'braces', link: '' },
        { name: 'XML Formatter', des: 'Beautify XML files', icons: 'file-code', link: '' },
        { name: 'PHP Formatter', des: 'Format PHP source code', icons: 'terminal', link: '' },
      ],
    },

    {
      title: 'Code Minification Tools',
      icon: 'scissors',
      description: 'Minify code files to improve performance and reduce bundle size.',
      details: [
        { name: 'Minify JavaScript', des: 'Compress JavaScript files', icons: 'zap', link: '' },
        { name: 'Minify HTML', des: 'Minify HTML markup', icons: 'file-minus', link: '' },
        { name: 'Minify CSS', des: 'Reduce CSS file size', icons: 'scissors', link: '' },
        { name: 'Minify JSON', des: 'Compress JSON data', icons: 'database', link: '' },
        { name: 'Minify XML', des: 'Minify XML documents', icons: 'file-down', link: '' },
      ],
    },

    {
      title: 'Code & Data Converters',
      icon: 'repeat',
      description: 'Convert data formats and code languages for APIs and frontend frameworks.',
      details: [
        {
          name: 'JSON to XML Converter',
          des: 'Convert JSON into XML format',
          icons: 'arrow-left-right',
          link: '',
        },
        {
          name: 'XML to JSON Converter',
          des: 'Convert XML into JSON format',
          icons: 'arrow-right-left',
          link: '',
        },
        { name: 'JSON to CSV Converter', des: 'Convert JSON to CSV', icons: 'table', link: '' },
        { name: 'CSV to JSON Converter', des: 'Convert CSV to JSON', icons: 'rows', link: '' },
        {
          name: 'HTML to JSX Converter',
          des: 'Convert HTML to React JSX',
          icons: 'react',
          link: '',
        },
        {
          name: 'JavaScript to TypeScript Converter',
          des: 'Convert JS to TypeScript',
          icons: 'typescript',
          link: '',
        },
      ],
    },

    {
      title: 'Meta & SEO Tools (Developer)',
      icon: 'globe',
      description: 'Generate SEO-related configuration files used during deployment.',
      details: [
        {
          name: 'Robots.txt Generator',
          des: 'Generate SEO-friendly robots.txt',
          icons: 'bot',
          link: '',
        },
        { name: 'Sitemap Generator', des: 'Generate sitemap.xml', icons: 'map', link: '' },
        {
          name: 'Favicon Generator',
          des: 'Generate favicons for websites',
          icons: 'image',
          link: '',
        },
      ],
    },

    {
      title: 'Code Validators',
      icon: 'check-circle',
      description: 'Validate syntax, standards, and responsiveness for clean code.',
      details: [
        { name: 'HTML Validator', des: 'Validate HTML code', icons: 'check', link: '' },
        { name: 'CSS Validator', des: 'Validate CSS styles', icons: 'badge-check', link: '' },
        {
          name: 'JavaScript Validator',
          des: 'Validate JavaScript syntax',
          icons: 'check-square',
          link: '',
        },
        { name: 'JSON Validator', des: 'Validate JSON data', icons: 'database-check', link: '' },
        { name: 'XML Validator', des: 'Validate XML structure', icons: 'file-check', link: '' },
        { name: 'W3C Validator', des: 'W3C HTML/CSS validation', icons: 'award', link: '' },
        {
          name: 'Responsive Design Checker',
          des: 'Test responsive layouts',
          icons: 'monitor-smartphone',
          link: '',
        },
      ],
    },

    {
      title: 'Developer Utilities',
      icon: 'settings',
      description: 'Utility tools to improve coding speed and developer workflow.',
      details: [
        {
          name: 'Regex Tester',
          des: 'Test and debug regular expressions',
          icons: 'regex',
          link: '',
        },
        {
          name: 'UUID Generator',
          des: 'Generate unique identifiers',
          icons: 'fingerprint',
          link: '',
        },
        {
          name: 'Environment Variable Generator',
          des: 'Generate environment variables',
          icons: 'settings',
          link: '',
        },
        {
          name: 'API Key Generator',
          des: 'Generate secure API keys',
          icons: 'key-square',
          link: '',
        },
      ],
    },

    {
      title: 'CSS & Layout Generators',
      icon: 'layout',
      description: 'Generate CSS layouts and styles visually for frontend developers.',
      details: [
        { name: 'CSS Color Picker', des: 'Pick HEX and RGB colors', icons: 'pipette', link: '' },
        { name: 'Gradient Generator', des: 'Create CSS gradients', icons: 'blend', link: '' },
        { name: 'Box Shadow Generator', des: 'Generate box-shadow CSS', icons: 'layers', link: '' },
        {
          name: 'Flexbox Generator',
          des: 'Visual flexbox layout builder',
          icons: 'layout',
          link: '',
        },
        {
          name: 'Border Radius Generator',
          des: 'Generate border-radius CSS',
          icons: 'square',
          link: '',
        },
        { name: 'CSS Grid Generator', des: 'Build CSS grid layouts', icons: 'grid', link: '' },
      ],
    },
  ];
}
