export default interface BoardData {
  author: string;
  title: string;
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
  exists: boolean;
}
