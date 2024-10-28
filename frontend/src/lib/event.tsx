// Event.ts
export class Event {
    id: number;
    name: string;
    banner: string;
    images: string[];
    title: string;
    location: string;
    date: string;
    address: string;
    description: string;
    ticket_type: string;
    price: number;
    latitude: number;
    longitude: number;
  
    constructor(
      id: number,
      name: string,
      banner: string,
      images: string[],
      title: string,
      location: string,
      date: string,
      address: string,
      description: string,
      ticket_type: string,
      price: number,
      latitude: number,
      longitude: number
    ) {
      this.id = id;
      this.name = name;
      this.banner = banner;
      this.images = images;
      this.title = title;
      this.location = location;
      this.date = date;
      this.address = address;
      this.description = description;
      this.ticket_type = ticket_type;
      this.price = price;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }