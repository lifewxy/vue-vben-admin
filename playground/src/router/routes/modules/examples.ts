import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ion:layers-outline',
      keepAlive: true,
      order: 1000,
      title: $t('page.examples.title'),
    },
    name: 'Examples',
    path: '/examples',
    children: [
      {
        name: 'ModalExample',
        path: '/examples/modal',
        component: () => import('#/views/examples/modal/index.vue'),
        meta: {
          icon: 'system-uicons:window-content',
          title: $t('page.examples.modal.title'),
        },
      },
      {
        name: 'DrawerExample',
        path: '/examples/drawer',
        component: () => import('#/views/examples/drawer/index.vue'),
        meta: {
          icon: 'iconoir:drawer',
          title: $t('page.examples.drawer.title'),
        },
      },
      {
        name: 'EllipsisExample',
        path: '/examples/ellipsis',
        component: () => import('#/views/examples/ellipsis/index.vue'),
        meta: {
          icon: 'ion:ellipsis-horizontal',
          title: $t('page.examples.ellipsis.title'),
        },
      },
      {
        name: 'CaptchaExample',
        path: '/examples/captcha',
        component: () => import('#/views/examples/captcha/index.vue'),
        meta: {
          icon: 'logos:recaptcha',
          title: $t('page.examples.captcha.title'),
        },
      },
      {
        name: 'FormExample',
        path: '/examples/form',
        meta: {
          icon: 'mdi:form-select',
          title: $t('page.examples.form.title'),
        },
        children: [
          {
            name: 'FormBasicExample',
            path: '/examples/form/basic',
            component: () => import('#/views/examples/form/basic.vue'),
            meta: {
              title: $t('page.examples.form.basic'),
            },
          },
          {
            name: 'FormQueryExample',
            path: '/examples/form/query',
            component: () => import('#/views/examples/form/query.vue'),
            meta: {
              title: $t('page.examples.form.query'),
            },
          },
          {
            name: 'FormRulesExample',
            path: '/examples/form/rules',
            component: () => import('#/views/examples/form/rules.vue'),
            meta: {
              title: $t('page.examples.form.rules'),
            },
          },
          {
            name: 'FormDynamicExample',
            path: '/examples/form/dynamic',
            component: () => import('#/views/examples/form/dynamic.vue'),
            meta: {
              title: $t('page.examples.form.dynamic'),
            },
          },
          {
            name: 'FormCustomExample',
            path: '/examples/form/custom',
            component: () => import('#/views/examples/form/custom.vue'),
            meta: {
              title: $t('page.examples.form.custom'),
            },
          },
        ],
      },
      {
        name: 'VerifyExample',
        path: '/examples/verify',
        meta: {
          icon: 'logos:recaptcha',
          title: '验证组件',
        },
        children: [
          {
            name: 'DragVerifyExample',
            path: '/examples/verify/drag-verify',
            component: () =>
              import('#/views/examples/verify/drag-verify/index.vue'),
            meta: {
              title: '拖拽校验',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
