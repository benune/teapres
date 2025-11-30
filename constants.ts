
import { SlideContent } from './types';

export const slideData: SlideContent[] = [
  {
    type: 'title',
    title: 'Caja de Herramientas Prácticas para un Aula Inclusiva',
    subtitle: 'Estrategias de Impacto Inmediato para TEA y TDAH',
    logos: ['https://benune.github.io/home/images/LogoBENUNE_WhiteCircleBG.png'],
    info: [
      'Jardín de Niños "Eugenio Elorduy Gallastegui"',
      'Benemérita Escuela Normal Urbana Nocturna',
      'Fecha: 28 de noviembre de 2025',
    ],
  },
  {
    type: 'tea',
    title: 'Trastorno del Espectro Autista (TEA)',
    subtitle: 'Basado en DSM-5',
    definition: 'Una condición del neurodesarrollo que impacta principalmente en dos áreas clave:',
    points: [
      {
        title: 'Comunicación e Interacción Social',
        items: [
          'Dificultad para iniciar y mantener una conversación recíproca.',
          'Retos para comprender la comunicación no verbal (gestos, expresiones faciales, tono de voz).',
          'Dificultad en el desarrollo y mantenimiento de relaciones sociales.',
        ],
      },
      {
        title: 'Patrones Restringidos y Repetitivos de Comportamiento, Intereses o Actividades',
        items: [
          'Movimientos o habla estereotipados (aleteo, ecolalia).',
          'Insistencia en la monotonía, rutinas inflexibles y resistencia al cambio.',
          'Intereses muy específicos e intensos.',
          'Hipo o Hiper-reactividad a estímulos sensoriales (indiferencia al dolor, rechazo a ciertos sonidos o texturas, fascinación por luces).',
        ],
      },
    ],
    keyIdea: 'Es un ESPECTRO. No hay dos niños con TEA iguales. Nuestra meta es conocer el perfil único de cada uno.',
  },
  {
    type: 'tdah',
    title: 'Trastorno por Déficit de Atención e Hiperactividad (TDAH)',
    subtitle: 'Basado en DSM-5',
    definition: 'Un patrón persistente de inatención y/o hiperactividad-impulsividad que interfiere con el funcionamiento o el desarrollo.',
    points: [
      {
        title: 'Inatención (Falta de Atención)',
        items: [
          'Se distrae fácilmente con estímulos externos.',
          'Dificultad para mantener el enfoque en tareas o juegos.',
          'Parece no escuchar cuando se le habla directamente.',
          'A menudo pierde objetos necesarios (juguetes, útiles).',
          'Evita tareas que requieren un esfuerzo mental sostenido.',
        ],
      },
      {
        title: 'Hiperactividad e Impulsividad',
        items: [
          'Inquietud motora: se mueve o retuerce en su asiento.',
          'Corre o trepa en situaciones inapropiadas.',
          'Habla en exceso.',
          'Dificultad para esperar su turno.',
          'Interrumpe conversaciones o juegos de otros.',
        ],
      },
    ],
    keyIdea: 'No es un problema de "voluntad", sino de "regulación". Es un desafío en las funciones ejecutivas del cerebro (planificación, control de impulsos, memoria de trabajo).',
  },
  {
    type: 'iceberg',
    title: 'Del Diagnóstico a la Estrategia: ¿Por qué Actúan Así?',
    subtitle: 'Entendiendo la Función de la Conducta',
    definition: 'Toda conducta es una forma de comunicación. En lugar de solo reaccionar a ella, debemos preguntarnos: ¿Qué necesidad está intentando cubrir el niño?',
    iceberg: {
        visible: "Conducta (grita, corre, se aísla)",
        hidden: [
            {
                title: 'En el TEA, la conducta desafiante suele estar ligada a:',
                items: [
                    'Ansiedad por la incertidumbre: La necesidad de un mundo predecible y estructurado.',
                    'Sobrecarga sensorial: La necesidad de escapar de un entorno que abruma.',
                    'Dificultad de comunicación: La necesidad de expresar algo sin tener las herramientas.',
                    'Estrategia General Clave: ANTICIPACIÓN Y ESTRUCTURA VISUAL.',
                ]
            },
            {
                title: 'En el TDAH, la conducta desafiante suele estar ligada a:',
                items: [
                    'Baja autorregulación: La necesidad de apoyo externo para mantener el foco.',
                    'Necesidad de movimiento: El cerebro necesita moverse para poder pensar.',
                    'Impulsividad: La dificultad para frenar la primera respuesta.',
                    'Estrategia General Clave: ORGANIZACIÓN DEL ENTORNO Y CANALIZACIÓN DEL MOVIMIENTO.',
                ]
            }
        ]
    }
  },
  {
    type: 'toolbox',
    title: 'Nuestra Caja de Herramientas: Pilares de Apoyo en el Aula',
    subtitle: 'Pilares de Apoyo Proactivo',
    definition: 'Estas son las estrategias generales que guiarán nuestro trabajo práctico de hoy. No son recetas, son ingredientes para crear un aula inclusiva.',
    pillars: [
      {
        title: '1. Estructurar el Ambiente',
        items: ['Crear rutinas claras y predecibles.', 'Definir espacios físicos bien delimitados (área de calma, área de trabajo).'],
      },
      {
        title: '2. Usar Apoyos Visuales',
        items: ['Agendas con pictogramas de la rutina diaria.', 'Instrucciones visuales paso a paso.', 'Paneles "Primero... Después..." para motivar y secuenciar tareas.'],
      },
      {
        title: '3. Adaptar la Comunicación',
        items: ['Dar instrucciones cortas, claras y una a la vez.', 'Usar apoyos gestuales y contacto visual (si es bien recibido).', 'Dar tiempo de espera para procesar y responder.'],
      },
      {
        title: '4. Fomentar la Regulación Sensorial y Emocional',
        items: ['Anticipar transiciones con avisos verbales y visuales.', 'Proveer espacios y herramientas para la calma ("Kit de la Calma").', 'Validar la emoción ("Veo que estás frustrado") antes de redirigir la conducta.'],
      },
    ],
    closingPhrase: 'Ahora... ¡Vamos a construir estas herramientas!',
  },
  {
    type: 'bibliography',
    title: 'Bibliografía y Referencias de Consulta',
    subtitle: 'Para compartir con los docentes',
    references: [
      {
        author: 'Manual Diagnóstico y Estadístico de los Trastornos Mentales, 5ª Edición (DSM-5). (2014).',
        title: 'American Psychiatric Association.',
        details: '',
        description: 'Referencia fundamental para comprender los criterios diagnósticos oficiales del TEA y el TDAH.',
      },
      {
        author: 'Attwood, T. (2015).',
        title: 'Guía completa del síndrome de Asperger.',
        details: 'Paidós.',
        description: 'Aunque el término "Asperger" ya no se usa como diagnóstico separado en el DSM-5, este libro es una de las guías más empáticas y claras para entender la lógica, las emociones y el perfil sensorial de las personas en el espectro.',
      },
      {
        author: 'Barkley, R. A. (2015).',
        title: 'Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment.',
        details: 'The Guilford Press.',
        description: 'Considerado uno de los mayores expertos mundiales en TDAH. Sus obras explican de manera exhaustiva las bases neurobiológicas del trastorno y la importancia de la intervención conductual.',
      },
      {
        author: 'Siegel, D. J., & Bryson, T. P. (2012).',
        title: 'El cerebro del niño: 12 estrategias revolucionarias para cultivar la mente en desarrollo de tu hijo.',
        details: 'Alba Editorial.',
        description: 'Imprescindible para cualquier educador. Explica de forma sencilla cómo funciona el cerebro infantil y ofrece estrategias prácticas de co-regulación emocional que son universales y especialmente efectivas para niños con TEA y TDAH.',
      },
      {
        author: 'ARASAAC (Portal Aragonés de la Comunicación Aumentativa y Alternativa).',
        title: 'Gobierno de Aragón.',
        details: '',
        url: 'https://arasaac.org/',
        description: 'Recurso práctico indispensable. Ofrece miles de pictogramas y materiales visuales gratuitos y estandarizados para crear agendas, tableros de comunicación, secuencias de actividades y más.',
      },
    ],
  },
  {
    type: 'materials',
    title: 'Materiales Descargables',
    subtitle: 'Recursos adicionales para el aula',
    materials: [
      {
        title: 'Detección, Técnicas y Manejo de las Necesidades Sensoriales en el Aula',
        author: 'Dania Mariel Amézquita Solórzano',
        description: 'Un manual de consulta sobre necesidades sensoriales en el aula.',
        downloadUrl: 'materials/necesidades_sensoriales_aula.pdf',
      },
      {
        title: 'Fichero de Actividades para Alumnos con Autismo',
        author: 'Adaptación: Mario A. Vázquez Ramírez',
        description: 'Fichero con diversas actividades y materiales didácticos para alumnos con autismo.',
        downloadUrl: 'materials/fichero_actividades_autismo.pdf',
      },
      {
        title: 'Mi primer libro INTERACTIVO',
        author: 'Minders',
        description: 'Libro interactivo para el aprendizaje temprano de colores, números, vocales y figuras.',
        downloadUrl: 'materials/mi_primer_libro_interactivo.pdf',
      },
      {
        title: 'Agenda Visual: Primero, Después, al Final',
        author: 'Lic. Mariajose Duron Ortiz',
        description: 'Material para trabajar la anticipación y organización de actividades con niños.',
        downloadUrl: 'materials/agenda_visual.pdf',
      },
      {
        title: 'Folleto Informativo sobre Inclusión',
        author: 'EEspecial Interactivo',
        description: 'Folleto con estrategias y consejos para fomentar una educación inclusiva y participativa.',
        downloadUrl: 'materials/folleto_inclusion_eespecial.pdf',
      },
      {
        title: 'Fiesta de Navidad ¿Qué le falta?',
        author: 'Ximena Carreto (miterapiaconximena.com)',
        description: 'Actividad para trabajar vocabulario de navidad identificando elementos que faltan en los personajes.',
        downloadUrl: 'materials/fiesta_navidad_que_falta.pdf',
      },
      {
        title: 'Cuaderno de Actividades: Estimulación Cognitiva 1 (Memoria)',
        author: 'edufichas.com',
        description: 'Ejercicios de memoria visual para niños, incluyendo memorización y asociación de figuras.',
        downloadUrl: 'materials/estimulacion_cognitiva_1.pdf',
      },
      {
        title: 'Cuaderno de Actividades: Pasatiempos Variados',
        author: 'edufichas.com',
        description: 'Pasatiempos como sudokus, crucigramas y laberintos para entretener y educar.',
        downloadUrl: 'materials/actividades_variadas.pdf',
      },
      {
        title: 'Cuaderno de Actividades: Estimulación Cognitiva 3 (Atención y TDAH)',
        author: 'edufichas.com',
        description: 'Ejercicios de atención diseñados específicamente para niños con TDAH.',
        downloadUrl: 'materials/atencion_tdah_3.pdf',
      },
      {
        title: 'Rompecabezas Navideño',
        author: 'Minders',
        description: 'Rompecabezas numéricos para recortar y armar con temática navideña.',
        downloadUrl: 'materials/rompecabezas_navideno.pdf',
      },
      {
        title: '¡Colorea la Cantidad Correcta!',
        author: 'Magia en el Aula',
        description: 'Ficha de actividad para practicar el conteo y coloreado de objetos con temática navideña.',
        downloadUrl: 'materials/colorea_cantidad_correcta.pdf',
      },
    ],
  },
];