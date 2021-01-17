import * as types from '../_actions/types'

const INITIAL_STATE = {
  products: [
    {
      id: '1',
      name: 'Cereza',
      image: 'images/013-cherry.png',
      valor: '15 calorias',
      carbs: '8g',
      protein: '5g',
      grease1: '3g',
      grease2: '4g',
      grease3: '1g',
      fiber: '10g',
      sodium: '15g',
      descripcion:
        'La cereza es una fruta roja (tipo drupa) que procede del cerezo, árbol de la familia de las rosáceas del género Prunus. Existen dos especies principales de cerezos, el Prunus avium, que da cerezas dulces y de color rojo oscuro, y el Prunus cerasus, que da cerezas ácidas y de color rojo vivo.El cerezo es un árbol de entre 6-15 metros de altura según las especies, de madera dura de color castaño claro, de hojas verdes brillantes y flores blancas muy bellas que aparecen en la primavera al mismo tiempo que las hojas. Las cerezas maduran a final de la primavera, pasando del color verde al rojo vivo, con carne firme y jugosa. El hueso es esférico y liso y contiene cianuro, por lo que es tóxico.',
      ventaja: 'Ventajas',
      pro:
        '1.Las cerezas, son conocidas como una “súper fruta”, están llenas de antioxidantes llamados antocianinas que ayudan en la reducción de enfermedades cardíacas y cáncer.2. Las cerezas son una de las pocas fuentes alimenticias que contienen melatonina, un antioxidante que ayuda a regular el ritmo cardíaco y los ciclos de sueño del cuerpo.3. Las cerezas son una excelente fuente de beta-caroteno (vitamina A, esencial para el organismo). De hecho, contienen 19 veces más beta-caroteno que los arándanos y las fresas.4. Las cerezas son ricas en vitaminas C, E, potasio, magnesio, hierro, ácido fólico y fibra.5. Las cerezas se conocen como “alimento del cerebro”, ayudando en la salud del cerebro y en la prevención de la pérdida de memoria.'
    },
    {
      id: '2',
      name: 'Naranja',
      image: 'images/033-orange.png',
      valor: '20 calorias',
      carbs: '7g',
      protein: '3g',
      grease1: '1g',
      grease2: '0g',
      grease3: '0g',
      fiber: '12g',
      sodium: '13g',
      descripcion:
        'La naranja es la fruta cítrica del naranjo (Citrus aurantium), con dos subespecies principales: el naranjo dulce (subespecie Sinensis) y agrio (subespecie Amara). Se la denomina cítrica por su contenido en ácido cítrico, que le confiere el sabor amargo.El naranjo es un árbol de una altura comprendida entre 3 y 10 metros, de tallo ligeramente espinoso, hoja perenne y flor blanca, muy aromática, la flor de azahar.',
      ventaja: 'Ventajas',
      pro:
        'Por su bajo índice glucémico, la naranja es una de las frutas aconsejadas para la prevención de la diabetes. Su alto contenido en vitamina C estimula la producción de glóbulos blancos y contribuye a reforzar el sistema inmunológico. Contiene antioxidantes que mantienen una piel sana y reduce los signos de la edad. Una naranja contiene únicamente 65 calorías, lo que hace de ésta una fruta muy recomendable en dietas para bajar peso.Por su alto contenido en fibra, prolonga la sensación de saciedad. Son ricas en calcio, que protege los huesos y dientes, manteniéndolos sanos. Su consumo ayuda a reducir la absorción de grasas y a bajar el colesterol y la tensión. Tiene propiedades antiinflamatorias, por lo que es beneficiosa para las personas con artritis. Su consumo es beneficioso para prevenir el cáncer y también el buen funcionamiento del sistema cardiovascular. Te hace sonreír. Y te preguntarás por qué… Si las usas en tu cocina, dará mucha gracia a tus platos.'
    },
    {
      id: '3',
      name: 'Nuez',
      image: 'images/051-nuts.png',
      valor: '19 calorias',
      carbs: '4g',
      protein: '9g',
      grease1: '0g',
      grease2: '0g',
      grease3: '3g',
      fiber: '9g',
      sodium: '5g',
      descripcion:
        'La nuez es el fruto del nogal, de forma redondeada u ovoide, con una cáscara dura y rugosa de color pardo rojiza. La parte comestible de su interior tiene un sabor dulce particular. En el mercado hay nueces descascarilladas, troceadas o molidas y productos elaborados con ellas.',
      ventaja: 'Ventajas',
      pro:
        'Reducir el colesterol es uno de los grandes beneficios de este producto bio por su alto contenido en ácidos grasos Omega 3 de origen vegetalLas grasas y minerales que contienen las nueces ayudan a prevenir enfermedades cardiovasculares y tener un corazón sano. En concreto comer a diario unos 30 grs de frutos secos al día, de los cuales al menos la mitad deben ser nueces, reduce en un 30% el riesgo de accidentes cardiovasculares según ha publicado un estudio de la revista The New England Journal of Medicine Cuida tu cerebro es el eslogan que podríamos asociar a la nuez, sus propiedades nutricionales mejoran la capacidad neuronal del organismo. Sus compuestos neuroprotectores ayudan a mejorar la función cognitiva y motriz del envejecimiento. Los frutos secos están compuestos de grasas saludables o grasas de origen vegetal, en concreto la nuez contiene 21 gramos por cada 100 de producto, que te aportarán un extra de energía en tu día a día. Además regulan el tránsito intestinal gracias a su alto contenido en fibra y combaten el tan temido estreñimiento. Saciarás tu apetito y llegarás con menos ansiedad a las comidas principales del día Para los deportistas pueden ser un gran aporte de valor energético, es bueno tomarlas tras un intenso esfuerzo físico (deportes de larga duración) por su alto contenido en Omega 3 y su bajo contenido en agua, porque ayudan a recuperarse tras el ejercicio.'
    },
    {
      id: '4',
      name: 'Frutilla',
      image: 'images/048-strawberry.png',
      valor: '17 calorias',
      carbs: '3g',
      protein: '9g',
      grease1: '5g',
      grease2: '4g',
      grease3: '3g',
      fiber: '18g',
      sodium: '9g',
      descripcion: 'hola como estas',
      ventaja: 'Ventajas',
      pro: 'sdddd'
    },
    {
      id: '5',
      name: 'Manzana',
      image: 'images/001-apple.png',
      valor: '15 calorias',
      carbs: '8g',
      protein: '5g',
      grease1: '3g',
      grease2: '4g',
      grease3: '1g',
      fiber: '10g',
      sodium: '15g',
      descripcion: 'hola como estas',
      ventaja: 'Ventajas',
      pro: 'sdddd'
    },
    {
      id: '6',
      name: 'Banana',
      image: 'images/006-banana.png',
      valor: '15 calorias',
      carbs: '8g',
      protein: '5g',
      grease1: '3g',
      grease2: '4g',
      grease3: '1g',
      fiber: '10g',
      sodium: '15g',
      descripcion: 'hola como estas',
      ventaja: 'Ventajas',
      pro: 'sdddd'
    },
    {
      id: '7',
      name: 'Arandano',
      image: 'images/009-blueberry.png',
      valor: '15 calorias',
      carbs: '8g',
      protein: '5g',
      grease1: '3g',
      grease2: '4g',
      grease3: '1g',
      fiber: '10g',
      sodium: '15g',
      descripcion: 'hola como estas',
      ventaja: 'Ventajas',
      pro: 'sdddd'
    },
    {
      id: '8',
      name: 'Zanaoria',
      image: 'images/011-carrot.png',
      valor: '15 calorias',
      carbs: '8g',
      protein: '5g',
      grease1: '3g',
      grease2: '4g',
      grease3: '1g',
      fiber: '10g',
      sodium: '15g',
      descripcion: 'hola como estas',
      ventaja: 'Ventajas',
      pro: 'sdddd'
    },
    {
      id: '9',
      name: 'Pimiento',
      image: 'images/014-chili.png',
      valor: '15 calorias',
      carbs: '8g',
      protein: '5g',
      grease1: '3g',
      grease2: '4g',
      grease3: '1g',
      fiber: '10g',
      sodium: '15g',
      descripcion: 'hola como estas',
      ventaja: 'Ventajas',
      pro: 'sdddd'
    },
    {
      id: '10',
      name: 'Choclo',
      image: 'images/016-corn.png',
      valor: '15 calorias',
      carbs: '8g',
      protein: '5g',
      grease1: '3g',
      grease2: '4g',
      grease3: '1g',
      fiber: '10g',
      sodium: '15g',
      descripcion: 'hola como estas',
      ventaja: 'Ventajas',
      pro: 'sdddd'
    }
  ]
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.map(product => ({
          ...product,
          compare: false
        }))
      }
    case types.COMPARE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.product.id
            ? { ...product, compare: !product.compare }
            : product
        )
      }
    default:
      return state
  }
}
