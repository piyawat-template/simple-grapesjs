var editor = grapesjs.init({
  fromElement: 1,
  container: '#gjs',
  height: '100%',
  storageManager: { autoload: 0 },
  plugins: ['gjs-style-gradient', 'grapesjs-blocks-bootstrap4'],
  pluginsOpts: {
    'gjs-style-gradient': {
      colorPicker: 'default',
      grapickOpts: {
        min: 1,
        max: 99,
      }
    },
    'grapesjs-blocks-bootstrap4': {
      blocks: {
        // ...
      },
      blockCategories: {
        // ...
      },
      labels: {
        // ...
      }
    }
  },
  canvas: {
    styles: [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    ],
    scripts: [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
    ],
  }
})

editor.StyleManager.addProperty('decorations', {
  name: 'Gradient',
  property: 'background-image',
  type: 'gradient',
  defaults: 'none'
})

// Cutom block
var blockManager = editor.BlockManager;
blockManager.add('section', {
  label: 'Section',
  category: "Layout",
  attributes: {
    class: "gjs-block fa fa-slideshare",
  },
  content: `<section style="
                min-height: 500px;
                background-image: linear-gradient(90deg, rgb(0, 255, 205) 1%, rgb(227, 162, 220) 99%)">
      <h1 style="font-size: 3rem">Gradient</h1>
  </section>`,
})