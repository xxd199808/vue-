import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';
const md = require('markdown-it')({
    html: true,
    highlight: function(str, lang) {
        return '<pre class="hljs"><code>' +
            hljs.highlightAuto(str).value +
            '</code></pre>';
    }
});

export default md