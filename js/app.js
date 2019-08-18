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
        default: true,
        text: true,
        link: true,
        image: true,
        // LAYOUT
        container: true,
        row: true,
        column: true,
        column_break: true,
        media_object: true,
        // COMPONENTS
        alert: true,
        tabs: true,
        badge: true,
        button: true,
        button_group: true,
        button_toolbar: true,
        card: true,
        card_container: true,
        collapse: true,
        dropdown: true,
        // TYPOGRAPHY
        header: true,
        paragraph: true,
        // BASIC
        list: true,
        // FORMS
        form: true,
        input: true,
        form_group_input: true,
        input_group: true,
        textarea: true,
        select: true,
        label: true,
        checkbox: true,
        radio: true,
      },
      blockCategories: {
        'layout': true,
        'components': true,
        'typography': true,
        'basic': true,
        'forms': true,
      },
      labels: {
        // ...
      },
    }
  },
  canvas: {
    styles: [
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css',
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
  category: "Template",
  attributes: {
    class: "fa fa-slideshare",
  },
  content: `<section style="
                min-height: 500px;
                background-image: linear-gradient(90deg, rgb(0, 255, 205) 1%, rgb(227, 162, 220) 99%)">
      <h1 style="font-size: 3rem">Gradient</h1>
  </section>`,
})