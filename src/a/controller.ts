import { Service } from "./service";

export class Controller {
  private readonly service: Service;

  constructor() {
    this.service = new Service();
  }
}