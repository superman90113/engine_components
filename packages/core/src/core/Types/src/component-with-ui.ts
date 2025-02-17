import { Component } from "./component";

export type ComponentUIElement = {
  name: string;
  componentID: string;
  attributes: { [name: string]: string };
  get: () => HTMLElement;
};

export abstract class ComponentWithUI extends Component {
  abstract name: string;
  abstract getUI(): ComponentUIElement[];
}
