var defaultCity = '广东';
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
} catch (e) {

}

export default {
	city: defaultCity
}