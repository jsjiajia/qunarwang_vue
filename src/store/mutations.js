export default {
	changeCityName: function(state, city) {
		state.city = city;
		localStorage.city = city
	}	
}