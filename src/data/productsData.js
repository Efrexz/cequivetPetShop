const featuredProducts = [
  {
    id: 1,
    name: "Royal Canin Canine Adult (Raza Mediana)",
    description:
      "Alimento seco para perros adultos de razas medianas (11-25kg). Ayuda a mantener un peso ideal y una digestión saludable.",
    price: "$45.99",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "amber-700",
    category: "food",
  },
  {
    id: 2,
    name: "Feliway Classic Difusor + Recarga",
    description:
      "Solución para calmar gatos. Ayuda a reducir el estrés y comportamientos no deseados como el marcaje o rascado excesivo.",
    price: "$38.50",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "green-700",
    category: "medicines",
  },
  {
    id: 3,
    name: "Advantage Multi para Perros (2.5-4kg)",
    description:
      "Protección mensual contra pulgas, garrapatas, gusano del corazón y parásitos intestinales. Uso tópico.",
    price: "$32.00",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "orange-700",
    category: "medicines",
  },
  {
    id: 4,
    name: "Kit de Cepillado y Aseo Profesional",
    description:
      "Incluye cepillo de cerdas suaves, peine deslanador, cortauñas de seguridad y cepillo de dientes para mascotas.",
    price: "$55.00",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "gray-800",
    category: "accessories",
  },
  {
    id: 5,
    name: "Sanicat Arena Aglomerante Clásica",
    description:
      "Arena para gatos de arcilla natural, con gran poder de absorción y control de olores. Forma aglomerados compactos.",
    price: "$22.99",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "amber-700",
    category: "accessories",
  },
  {
    id: 6,
    name: "Veterinarian's Best Suplemento de Cadera y Articulaciones",
    description:
      "Tabletas masticables con glucosamina, condroitina y MSM para el soporte articular en perros mayores o activos.",
    price: "$28.50",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "green-700",
    category: "medicines",
  },
  {
    id: 7,
    name: "VetNova Calmaton Gel Oral para Gatos y Perros Pequeños",
    description:
      "Suplemento calmante a base de triptófano para situaciones de estrés, viajes o cambios de rutina.",
    price: "$18.50",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "green-700",
    category: "medicines",
  },
  {
    id: 8,
    name: "Virbac Allermyl Champú Dermatológico",
    description:
      "Champú hipoalergénico para perros y gatos con piel sensible o tendencia a alergias. Ayuda a restaurar la barrera cutánea.",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "blue-700",
    category: "medicines",
  },
  {
    id: 9,
    name: "C.E.T. Enjuague Bucal para Perros y Gatos",
    description:
      "Ayuda a refrescar el aliento y reducir la placa y el sarro. Se añade al agua de bebida diariamente.",
    price: "$15.00",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "purple-700",
    category: "medicines",
  },
  {
    id: 10,
    name: "Kong Classic Juguete Interactivo para Perros",
    description:
      "Juguete de caucho natural resistente, ideal para rellenar con premios y fomentar el juego mental y físico.",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "red-500",
    category: "accessories",
  },
  {
    id: 11,
    name: "True Origins Wild Cat Adult 'Spirit' con Pollo y Salmón",
    description:
      "Pienso sin cereales para gatos adultos, con alto contenido de proteínas y ingredientes naturales para una dieta equilibrada.",
    price: "$35.00",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "blue-gray-800",
    category: "food",
  },
  {
    id: 12,
    name: "Collar Antiparasitario Seresto para Perros Grandes",
    description:
      "Collar que protege eficazmente contra pulgas y garrapatas durante 7-8 meses. Resistente al agua.",
    price: "$49.00",
    image:
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "gray-500",
    category: "medicines",
  },
];
export { featuredProducts };
