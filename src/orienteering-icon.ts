import { LitElement, css, html, nothing, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { icons } from "./icon-map";

function renderPath([
  d,
  filled,
  strokeWidth,
  translate,
  matrix,
]: (typeof icons)[number][5][number]) {
  return svg`<path data-fill="${filled}" d="${d}" stroke-width=${
    strokeWidth ?? nothing
  } transform="${
    translate
      ? "translate(" + translate.join(",") + ")"
      : matrix
      ? "matrix(" + matrix.join(",") + ")"
      : nothing
  }" />`;
}

function renderGroup(entry: (typeof icons)[number]) {
  const translate = entry[3];
  const matrix = entry[4];
  const paths = entry[5];
  return svg`<g transform="${
    translate
      ? "translate(" + translate.join(",") + ")"
      : matrix
      ? "matrix(" + matrix.join(",") + ")"
      : nothing
  }">${paths.map(renderPath)}</g>`;
}

@customElement("orienteering-icon")
export class OrienteeringIcon extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
    path[data-fill="true"] {
      fill: var(--color, black);
    }
    path[data-fill="false"] {
      stroke: var(--color, black);
    }
    svg {
      width: var(--width, 100%);
      height: var(--width, auto);
    }
    path {
      fill: none;
      stroke: none;
      stroke-linecap: round;
      stroke-linejoin: miter;
      stroke-miterlimit: 2.23607;
      stroke-dasharray: none;
      stroke-opacity: 1;
      fill-opacity: 1;
      fill-rule: evenodd;
    }
  `;

  /**
   * The name of the icon.
   */
  @property()
  name = "east_tip";

  override render() {
    const [viewBoxIndex, width, height] = icons[this.name];
    const viewBox = [
      "0 0 13.229167 9.2604169",
      "0 0 512 512",
      "0 0 5.2916666 5.2916668",
      "0 0 9.2604165 9.2604169",
    ][viewBoxIndex];
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${viewBox}
        width=${width}
        height=${height}
      >
        ${renderGroup(icons[this.name])}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "orienteering-icon": OrienteeringIcon;
  }
}
