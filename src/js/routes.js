page('/', () => {
    console.log('Home page');
});

page('/detail/:id', (ctx) => {
    const {
        params: {
            id
        }
    } = ctx;
    console.log(`Detail ${id}`);
});

page();