module.exports = (m, { title, description, keywords, styles }) => {

	const meta = [
		{ 'http-equiv': 'Content-Type' },
		{ 'content': 'text/html' },
		{
			'name': 'viewport',
			'content': 'width=device-width, initial-scale=1.0'
		},
		{ 'charset': 'utf8' },
		{ 'X-Content-Type-Options': 'nosniff' },
		{ 'description': description },
		{ 'keywords': keywords.join(', ') },
		{ 'robots': 'index, nofollow' },
	];

	return m('head', [
		m('title', title),
		...meta.map(x => m('meta', x)),
		...styles.map(x => m('link', { rel: 'stylesheet', href: x })),
		m('link', { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Fira+Code&display=swap"})
	]);

};
