/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Book {
  title: string;
}

class Component<T extends Book> {
  constructor(public props: T) {}
}

class Page<T extends Book> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
