export interface FooterLinks {
  name: string
  links: string[]
}

export const footerLinks: FooterLinks[] = [
  {
    name: 'Productos',
    links: ['Cuentas', 'Tarjetas', 'Préstamos personales', 'Hipotecas', 'Ahorro', 'Jubilación', 'Inversión', 'Seguros', 'Alarmas']
  },
  {
    name: 'Te puede interesar',
    links: [
      'Cambiar de banco',
      'Tienda Wivai',
      'Movilidad y renting',
      'Descarga la aplicación',
      'Donativos y crowdfunding',
      'Pagos online',
      'Seguridad',
      'Tramitar herencia',
      'Acción Social'
    ]
  },
  {
    name: 'Información corporativa',
    links: [
      'Web corporativa',
      'CaixaBank Research',
      'Premios y reconocimientos',
      'Sala de comunicación',
      'Sostenibilidad',
      'Trabaja con nosotros'
    ]
  }
]
