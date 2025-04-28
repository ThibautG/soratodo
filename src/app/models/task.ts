export class Task {

  id: string;

  constructor(public title: string,
              public  description: string,
              public status: string) {
    this.id = crypto.randomUUID().substring(0, 8);
  }
}
