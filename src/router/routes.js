import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Lists
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import OrderList from '@/pages/OrderList.vue';
import OrderItems from '@/pages/OrderItems.vue';
import ProductInformation from '@/pages/ProductInformation.vue';
// Creates
import CreateOrder from '@/pages/CreateOrder.vue'
import CreateCustomer from '@/pages/CreateCustomer.vue';
import CreateProduct from '@/pages/CreateProduct.vue';

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/stats",
    children: [
      {
        path: "stats",
        name: "stats",
        component: UserProfile,
      },
      // Lists
      {
        path: "product-information",
        name: "product-information",
        component: ProductInformation,
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
      },
      {
        path: 'order-list',
        name: 'order-lst',
        component: OrderList
      },
      {
        path: 'order-items',
        name: 'order-items',
        component: OrderItems
      },
      // Creates
      {
        path: 'create-order',
        name: 'create-order',
        component: CreateOrder
      },
      {
        path: 'create-customer',
        name: 'create-customer',
        component: CreateCustomer
      },
      {
        path: 'create-product',
        name: 'create-product',
        component: CreateProduct
      },
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
