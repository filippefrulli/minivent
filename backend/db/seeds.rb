# Clear existing data
Event.destroy_all
Image.destroy_all

# Seed events
events = [
  {
    id: 1,
    banner: "/assets/images/duna.jpg",
    images: ["/assets/images/duna.jpg", "/assets/images/duna2.jpg", "/assets/images/duna2.jpg"],
    name: "Duna Beach Festival",
    location: "Chiavari",
    date: "Ven, 9 Set. ~ 10.00 - 23.00",
    address: "Via Entella, 16043 Chiavari GE, Italy",
    description: "Duna Beach Festival is a music festival that takes place in Chiavari, Italy. The festival is held on the beach and features a variety of music genres, including electronic, house, techno, and more. The festival is known for its beautiful location, great music, and fun atmosphere. It is a popular event for music lovers and party-goers alike.",
    ticket_type: "Base",
    price: 10,
    latitude: 44.313968, 
    longitude: 9.320091
  },
  {
    id: 2,
    banner: "/assets/images/silent.jpeg",
    images: ["/assets/images/silent.jpeg", "/assets/images/silent.jpeg", "/assets/images/silent.jpeg"],
    name: "Shhh! Silent Disco Baia del Silenzio",
    location: "Sestri Levante",
    date: "Sab, 10 Set. ~ 21.00 - 03.00",
    address: "Baia del Silenzio, 16039 Sestri Levante GE, Italy",
    description: "Shhh! Silent Disco Baia del Silenzio is a silent disco event that takes place in Sestri Levante, Italy. The event features multiple DJs playing different genres of music, which attendees can listen to through wireless headphones. The event is held at the Baia del Silenzio, a beautiful beach in Sestri Levante. It is a unique and fun experience that allows people to dance and enjoy music in a beautiful outdoor setting.",
    ticket_type: "Base",
    price: 10,
    latitude: 44.269440, 
    longitude: 9.393005
  },
  {
    id: 3,
    banner: "/assets/images/cardini.jpg",
    images: ["/assets/images/cardini.jpg", "/assets/images/cardini.jpg", "/assets/images/cardini.jpg"],
    name: "Cardini Critical Wine",
    location: "Cardini",
    date: "Ven, 9 Set. ~ 10.00 - 23.00",
    address: "Cardini, 16040 Cardini GE, Italy",
    description: "Cardini Critical Wine is a wine tasting event that takes place in Cardini, Italy. The event features a selection of wines from local wineries, as well as food pairings and live music. It is a great opportunity to sample some of the best wines in the region and learn more about the local wine culture. The event is held in a beautiful outdoor setting, making it a perfect way to spend a day enjoying wine, food, and music.",
    ticket_type: "Base",
    price: 0,
    latitude: 44.293407, 
    longitude: 9.452247
  },
  {
    id: 4,
    banner: "/assets/images/musica.jpeg",
    images: ["/assets/images/musica.jpeg", "/assets/images/musica.jpeg", "/assets/images/musica.jpeg"],
    name: "Musica Libera x Chez Vous",
    location: "Lavagna",
    date: "Dom, 11 Set. ~ 22.00 - 05.00",
    address: "Via Guglielmo Marconi, 16033 Lavagna GE, Italy",
    description: "Musica Libera x Chez Vous is a music event that takes place in Lavagna, Italy. The event features a lineup of DJs playing a mix of electronic, house, and techno music. It is held at Chez Vous, a popular nightclub in Lavagna. The event is known for its great music, energetic atmosphere, and latitudee-night party vibes. It is a must-attend event for music lovers and party-goers in the area.",
    ticket_type: "Base",
    price: 10,
    latitude: 44.305870, 
    longitude: 9.345253
  },
  {
    id: 5,
    banner: "/assets/images/skipper.jpeg",
    images: ["/assets/images/skipper.jpeg", "/assets/images/skipper.jpeg", "/assets/images/skipper.jpeg"],
    name: "RØBBI ROCCA @ Discoteca SKIPPER",
    location: "Cavi di Lavagna",
    date: "Sab, 10 Set. ~ 23.00 - 04.00",
    address: "Via Aurelia, 16033 Cavi di Lavagna GE, Italy",
    description: "RØBBI ROCCA @ Discoteca SKIPPER is a music event that takes place in Cavi di Lavagna, Italy. The event features a DJ set by RØBBI ROCCA, playing a mix of electronic, house, and techno music. It is held at Discoteca SKIPPER, a popular nightclub in Cavi di Lavagna. The event is known for its energetic music, great atmosphere, and latitudee-night party vibes. It is a must-attend event for music lovers and party-goers in the area.",
    ticket_type: "Base",
    price: 10,
    latitude: 44.298175, 
    longitude: 9.360496
  },
  {
    id: 6,
    banner: "/assets/images/skipper.jpeg",
    images: ["/assets/images/skipper.jpeg", "/assets/images/skipper.jpeg", "/assets/images/skipper.jpeg"],
    name: "fbherberhbvkdbv",
    location: "Cavi di Lavagna",
    date: "Sab, 10 Set. ~ 23.00 - 04.00",
    address: "Via Aurelia, 16033 Cavi di Lavagna GE, Italy",
    description: "RØBBI ROCCA @ Discoteca SKIPPER is a music event that takes place in Cavi di Lavagna, Italy. The event features a DJ set by RØBBI ROCCA, playing a mix of electronic, house, and techno music. It is held at Discoteca SKIPPER, a popular nightclub in Cavi di Lavagna. The event is known for its energetic music, great atmosphere, and latitudee-night party vibes. It is a must-attend event for music lovers and party-goers in the area.",
    ticket_type: "Base",
    price: 10,
    latitude: 44.291848, 
    longitude: 9.375969
  },
  {
    id: 7,
    banner: "/assets/images/skipper.jpeg",
    images: ["/assets/images/skipper.jpeg", "/assets/images/skipper.jpeg", "/assets/images/skipper.jpeg"],
    name: "jernuernjdjdjfj",
    location: "Cavi di Lavagna",
    date: "Sab, 10 Set. ~ 23.00 - 04.00",
    address: "Via Aurelia, 16033 Cavi di Lavagna GE, Italy",
    description: "RØBBI ROCCA @ Discoteca SKIPPER is a music event that takes place in Cavi di Lavagna, Italy. The event features a DJ set by RØBBI ROCCA, playing a mix of electronic, house, and techno music. It is held at Discoteca SKIPPER, a popular nightclub in Cavi di Lavagna. The event is known for its energetic music, great atmosphere, and latitudee-night party vibes. It is a must-attend event for music lovers and party-goers in the area.",
    ticket_type: "Base",
    price: 10,
    latitude: 44.310482, 
    longitude: 9.339583
  }
]

events.each do |event_data|
  event = Event.create!(
    banner: event_data[:banner],
    name: event_data[:name],
    location: event_data[:location],
    date: event_data[:date],
    address: event_data[:address],
    description: event_data[:description],
    ticket_type: event_data[:ticket_type],
    price: event_data[:price],
    latitude: event_data[:latitude],
    longitude: event_data[:longitude]
  )

  event_data[:images].each do |image_url|
    Image.create!(
      event_id: event.id,
      url: image_url,
      alt_text: "#{event.name} image"
    )
  end
end