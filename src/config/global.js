export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Punibilidad ',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Esquemas del delito y su relación con la punibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Teoría Clásica, Neoclásica y Finalista del delito',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Esquemas del delito y su impacto en la punibilidad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación de las penas y subrogados penales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación de las penas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subrogados penales y su aplicación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Goldschmidt, J. (2016). Derecho, derecho penal y proceso. Tomo II: derecho procesal civil: ( ed.). Marcial Pons Ediciones Jurídicas y Sociales. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58681 ',
    },
    {
      referencia:
        'Congreso Internacional de Jóvenes Investigadores en Ciencias Penales. (2012). Delito, pena, política criminal y tecnologías de la información y la comunicación en las modernas ciencias penales: memorias II Congreso Internacional de Jóvenes Investigadores en Ciencias Penales 27, 28 y 29 de junio de 2011: ( ed.). Ediciones Universidad de Salamanca. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/55706',
    },
    {
      referencia:
        'Ramírez Carvajal, Diana María y Paniagua Galeano, Alexander. (2021). El control de convencionalidad y las garantías jurídicas en el proceso para el subrogado penal. Revista Científica General José María Córdova , 19 (34), 406-423. Epub 23 de abril de 2021 ',
      link:
        'http://www.scielo.org.co/pdf/recig/v19n34/2500-7645-recig-19-34-406.pdf ',
    },
    {
      referencia:
        'Arroyo Zapatero, L. & Berdugo Gómez de la Torre, I. (2016). Curso de Derecho Penal: parte general: (3 ed.). Ediciones Experiencia. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/59964?page=490 ',
    },
    {
      referencia:
        'Chavarro Cadena, J. E. (2018). Códigos penales y de procedimiento penal: (3 ed.). Grupo Editorial Nueva Legislación ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/68898?page=94 ',
    },
    {
      referencia:
        'Escrihuela Chumilla, F. J. (2016). Todo penal: (2 ed.). LA LEY Soluciones Legales S.A. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/55933?page=626 ',
    },
  ],
  glosario: [
    {
      termino: 'Atenuantes',
      significado:
        'circunstancias que disminuyen la responsabilidad penal y permiten reducir la pena dentro del marco legal aplicable.',
    },
    {
      termino: 'Autoría y participación',
      significado:
        'clasificación del rol de los sujetos en el delito; distingue entre autores directos, coautores, cómplices o determinantes.',
    },
    {
      termino: 'Circunstancias de mayor punibilidad',
      significado:
        'factores que agravan la pena, como la premeditación, el número de víctimas o el abuso de confianza.',
    },
    {
      termino: 'Culpabilidad',
      significado:
        'elemento del delito que implica que el autor puede ser reprochado penalmente por su conducta con base en su responsabilidad personal.',
    },
    {
      termino: 'Fijación de la pena',
      significado:
        'proceso judicial mediante el cual el juez determina la pena concreta según las circunstancias del hecho y del autor.',
    },
    {
      termino: 'Individualización de la pena',
      significado:
        'proceso por el cual se adapta la sanción penal al caso concreto, considerando factores personales y contextuales.',
    },
    {
      termino: 'Inimputabilidad',
      significado:
        'condición que excluye la responsabilidad penal por incapacidad mental o falta de comprensión del acto al momento del hecho.',
    },
    {
      termino: 'Libertad condicional',
      significado:
        'subrogado penal que permite al condenado cumplir el resto de la pena en libertad bajo ciertas condiciones.',
    },
    {
      termino: 'Multa',
      significado:
        'pena pecuniaria que obliga al condenado a pagar una suma de dinero al Estado como sanción por su conducta. ',
    },
    {
      termino: 'Prisión domiciliaria',
      significado:
        'sustitución de la pena de prisión por el cumplimiento en el lugar de residencia del condenado.',
    },
    {
      termino: 'Suspensión condicional de la pena',
      significado:
        'subrogado que permite aplazar la ejecución de la pena si el condenado cumple condiciones específicas.',
    },
  ],
}
