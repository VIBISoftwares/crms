import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'cil-speedometer',
  },
  // {
  //   name: 'Calendar',
  //   url: '/operator-dashboard/calendar',
  //   icon: 'cil-speedometer',
  // },
  {
    name: 'Contact',
    url: '/operator-dashboard',
    icon: 'cil-address-book',
    children: [
      {
        name: 'Company Contact',
        url: '/company-contact',
      },
      {
        name: 'Client Contact',
        url: '/client-contact',
      },
    ]
  },
  // {
  //   name: 'Sales',
  //   title: true,
  // },
  {
    name: 'Leads',
    url: '/operator-dashboard',
    icon: 'cil-group',
    children: [
      {
        name: 'Create',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'Management',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'Documents',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'Lead Profile',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'Bulk Transfer',
        url: '/operator-dashboard/tours',
      },
    ],
  }, 
  {
    name: 'Appoinment',
    url: '/operator-dashboard',
    icon: 'cil-calendar',
  },
  {
    name: 'Follow-up',
    url: '/operator-dashboard',
    icon: 'cil-user-plus',
  },
  {
    name: 'Escalation',
    url: '/operator-dashboard',
    icon: 'cil-calendar-check',
  },
  {
    name: 'Tickets',
    url: '/operator-dashboard',
    icon: 'cil-send',
    children: [
      {
        name: 'Raise Ticket',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'Assign Ticket',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'Status Ticket',
        url: '/operator-dashboard/tours',
      },]
  },
  {
    name: 'Product',
    url: '/operator-dashboard',
    icon: 'cil-sitemap',
    children: [
      {
        name: 'Add Product',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'Management',
        url: '/operator-dashboard/tours',
      },]
  },
  {
    name: 'Notification',
    url: '/operator-dashboard',
    icon: 'cil-notes',
    children: [
      {
        name: 'Create',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'Management',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'Leave Management',
        url: '/operator-dashboard/tours',
      },]
  },
  {
    name: 'Masters',
    title: true,
  },
  {
    name: 'User',
    url: '/operator-dashboard',
    icon: 'cil-user-plus',
    children: [
      {
        name: 'Create',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'Management',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'User Rights',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'Password Change',
        url: '/operator-dashboard/tours',
      },
      {
        name: 'System Config',
        url: '/operator-dashboard/tours',
      },
    ],
  },
  {
    name: 'Location',
    url: '/operator-dashboard',
    icon: 'cil-compass',
    children: [
      {
        name: 'Country',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'State',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'Area',
        url: '/operator-dashboard/add-tour',
      }]
  },
  {
    name: 'Reports',
    title: true,
  },
  {
    name: 'Daily Leads',
    url: '/operator-dashboard',
    icon: 'cil-notes',
  },
  {
    name: 'Daily Followups',
    url: '/operator-dashboard',
    icon: 'cil-speech',
  },
  {
    name: 'Appoinments',
    url: '/operator-dashboard',
    icon: 'cil-comment-bubble',
  },
  {
    name: 'RO Performance',
    url: '/operator-dashboard',
    icon: 'cil-graph',
  },
  {
    name: 'Logout',
    url: '/',
    icon: 'cil-power-standby',
  },
 /* 
 {
    name: 'Dashboard',
    url: '/operator-dashboard',
    icon: 'cil-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Tour',
    url: '/operator-dashboard',
    icon: 'cil-speedometer',
    children: [
      {
        name: 'Add Tour',
        url: '/operator-dashboard/add-tour',
      },
      {
        name: 'View Tours',
        url: '/operator-dashboard/tours',
      },
    ],
  },
  {
    name: 'Theme',
    url: '/theme',
    icon: 'cil-drop',
    children: [
      {
        name: 'Colors',
        url: '/theme/colors',
      },
      {
        name: 'Typography',
        url: '/theme/typography',
      },
    ],
  },
  {
    name: 'Components',
    title: true,
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'cil-puzzle',
    children: [
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs',
      },
      {
        name: 'Cards',
        url: '/base/cards',
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
      },
      {
        name: 'Images',
        url: '/base/images',
      },
      {
        name: 'Jumbotrons',
        url: '/base/jumbotrons',
      },
      {
        name: 'List Groups',
        url: '/base/list-groups',
      },
      {
        name: 'Media',
        url: '/base/media-objects',
      },
      {
        name: 'Navbars',
        url: '/base/navbars',
      },
      {
        name: 'Navs',
        url: '/base/navs',
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
      },
      {
        name: 'Progress',
        url: '/base/progress',
      },
      {
        name: 'Switches',
        url: '/base/switches',
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
      },
    ],
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'cil-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
      },
      {
        name: 'Button Groups',
        url: '/buttons/button-groups',
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
      },
    ],
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    name: 'Editors',
    url: '/editors',
    icon: 'cil-code',
    children: [
      {
        name: 'Text Editors',
        url: '/editors/text-editors',
      },
      {
        name: 'Code Editors',
        url: '/editors/code-editors',
      },
    ],
  },
  {
    name: 'Forms',
    url: '/forms',
    icon: 'cil-notes',
    children: [
      {
        name: 'Basic Forms',
        url: '/forms/basic-forms',
      },
      {
        name: 'Advanced',
        url: '/forms/advanced-forms',
      },
      {
        name: 'Validation',
        url: '/forms/validation-forms',
      },
    ],
  },
  {
    name: 'Google Maps',
    url: '/google-maps',
    icon: 'cil-map',
    badge: {
      variant: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'cil-brush-alt',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        badge: {
          variant: 'success',
          text: 'Free',
        },
      },
      {
        name: 'Brands',
        url: '/icons/brands',
      },
      {
        name: 'Flags',
        url: '/icons/flags',
      },
    ],
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'cil-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
      },
      {
        name: 'Toasters',
        url: '/notifications/toasters',
      },
    ],
  },
  {
    name: 'Plugins',
    url: '/plugins',
    icon: 'cil-input-power',
    children: [
      {
        name: 'FullCalendar',
        url: '/plugins/fullcalendar',
        badge: { text: 'New', variant: 'info' },
      },
      {
        name: 'Draggable',
        url: '/plugins/draggable-cards',
      },
      {
        name: 'Spinners',
        url: '/plugins/spinners',
      },
    ],
  },
  {
    name: 'Tables',
    url: '/tables',
    icon: 'cil-columns',
    children: [
      {
        name: 'DataTable',
        url: '/tables/datatables',
      },
      {
        name: 'Standard Tables',
        url: '/tables/tables',
      },
    ],
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'cil-calculator',
  },
  {
    name: 'Extras',
    title: true,
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'cil-star',
    children: [
      {
        name: 'Login',
        url: '/login',
      },
      {
        name: 'Register',
        url: '/register',
      },
      {
        name: 'Error 404',
        url: '/404',
      },
      {
        name: 'Error 500',
        url: '/500',
      },
    ],
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'cil-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Apps',
    url: '/apps',
    icon: 'cil-layers',
    children: [
      {
        name: 'Invoicing',
        url: '/apps/invoicing/invoice',
        icon: 'cil-description',
        badge: {
          variant: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Email',
        url: '/apps/email',
        icon: 'cil-envelope-open',
      },
    ],
  },

  
  */
];
