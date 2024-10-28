// Event.ts
export class EventImage {
    id: number;
    url: string;
    alt_text: string;
  
    constructor(
      id: number,
      url: string,
      alt_text: string,
    ) {
      this.id = id;
      this.url = url;
      this.alt_text = alt_text;
    }
}