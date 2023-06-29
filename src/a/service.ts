import { Repository } from "./repository";

export class Service {
  private readonly repository: Repository;

  constructor() {
    this.repository = new Repository();
  }
}