import Cookies from 'universal-cookie';

export default function fetchQuery(obj) {
	const
		{ url, method, body, customSuccess } = obj,
		cookies = new Cookies(),
		savedLang = cookies.get('site-lang'),
		getParameter = savedLang ? `?lang=${savedLang}` : '',
		fetchUrl = `${url}${getParameter}`,
		fetchObj = {
			method: method || 'GET',
			headers: {
				"Content-Type": "application/json",
			  },
		};
	
	if (body) fetchObj.body = body;
	console.log('fetchQuery', fetchObj);
	return fetch(fetchUrl, fetchObj)
	.then((response) => response.json())
	.then((responseJson) => {
		if (customSuccess) {
			customSuccess(responseJson);
		} else {
			this.setState({
				...responseJson
			});
		}
	})
	.catch((error) => {
		console.error(error);
	});
}

