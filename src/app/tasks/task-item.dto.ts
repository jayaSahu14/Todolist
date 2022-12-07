export class TaskItem {
  constructor(public title: string) {
  }
  markAsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
