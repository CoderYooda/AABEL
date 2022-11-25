const routes = {
    path: '/blog',
    name: 'blog',
    component: () => import('../../pages/Blog/Blog.vue'),
    redirect: { name: 'articles' },
    
    meta: {
        layout: 'Main',
        auth: true,
    },
    
    children: [
        {
            path: 'list',
            name: 'articles',
            component: () => import('../../pages/Blog/List.vue'),
        },

        {
            path: ':articleId',
            name: 'article',
            component: () => import('../../pages/Blog/Article.vue'),
            props: true
        },
    
        {
            path: 'add',
            name: 'addArticle',
            component: () => import('../../pages/Blog/AddArticle.vue'),
        },
    ],

}

export default routes;
