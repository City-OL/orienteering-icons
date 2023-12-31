# Orienteering Icons

[![npm (scoped)](https://img.shields.io/npm/v/@city-ol/orienteering-icons)](https://img.shields.io/npm/v/@city-ol/orienteering-icons) [![pages-build-deployment](https://github.com/City-OL/orienteering-icons/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/City-OL/orienteering-icons/actions/workflows/pages/pages-build-deployment)

Web component to create icons relevant for orienteering in an SVG format. Check out [this demo](https://city-ol.github.io/orienteering-icons/demo.html) and its [source code](demo.html) for the supported icon and their respective names.

## Usage

Install the package or include the script.

```bash
npm i @city-ol/orienteering-icons
```

```html
<script
  type="module"
  src="https://unpkg.com/@city-ol/orienteering-icons/lib/orienteering-icon.js"
></script>
```

To create an icon, add an `<orienteering-icon>` element and specify its name.

```html
<orienteering-icon name="broad_leaved"></orienteering-icon>
```

The icon color and width can be changed by setting `--color` and `--width` CSS variables (defaults to `black` and `100%`).

```css
orienteering-icon {
  --color: black;
  --width: 80px;
}
```

## Build

    npm run build

To genereate a `custom-elements.json` file, run:

    npx custom-elements-manifest analyze

## Credits

The icons for the description of individual controls are taken from the [OpenOrienteering Mapper](https://github.com/OpenOrienteering/mapper) software, which is licensed under the GNU General Public License v3.0. No visual changes have been made, but the icons are stored in a modified format.
