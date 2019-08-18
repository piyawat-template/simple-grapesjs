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
      },
      // ...
    }
  },
  canvas: {
    styles: [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    ],
    scripts: [
      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
    ],
  }
})

editor.StyleManager.addProperty('decorations', {
  name: 'Gradient',
  property: 'background-image',
  type: 'gradient',
  defaults: 'none'
})