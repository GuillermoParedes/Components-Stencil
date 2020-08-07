import { Component, ComponentInterface, h, Prop, Listen } from "@stencil/core";
import { TButton, TSize, TColor } from "./types";

@Component({
  tag: "btn-tutator",
  styleUrl: "btn-tutator.css",
  shadow: true,
})
export class BtnTutator implements ComponentInterface {
  @Prop() type: TButton = "default";

  @Prop() size: TSize = "medium";

  @Prop() label: string = "";

  @Prop() color: TColor = "default";

  generateClass() {
    switch (this.type) {
      case "default":
        return "btn bg--" + this.color;
      case "outline":
        return "outline bd--" + this.color + " text--" + this.color;
      case "text":
        return "text text--" + this.color;
    }
  }

  render() {
    const className = this.generateClass();
    return <button class={className}>{this.label}</button>;
  }
}
