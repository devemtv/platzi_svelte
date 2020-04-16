import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Miguel',
		lastName: 'Torrealba',
	}
});

export default app;